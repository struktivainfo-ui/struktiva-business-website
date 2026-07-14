import http from 'node:http'
import https from 'node:https'
import {
  CONNECT_TIMEOUT_MS,
  MAX_HTML_RESPONSE_BYTES,
  REQUEST_TIMEOUT_MS,
  WEBSITE_CHECK_REQUEST_HEADERS,
} from './config.js'
import { createPinnedLookup } from './dns-resolver.js'
import { createWebsiteCheckError, WebsiteCheckError } from './errors.js'

const REDIRECT_STATUSES = new Set([301, 302, 303, 307, 308])
const HTML_CONTENT_TYPES = new Set(['text/html', 'application/xhtml+xml'])
const TLS_ERROR_CODES = new Set([
  'CERT_HAS_EXPIRED',
  'DEPTH_ZERO_SELF_SIGNED_CERT',
  'ERR_TLS_CERT_ALTNAME_INVALID',
  'SELF_SIGNED_CERT_IN_CHAIN',
  'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
])

export function defaultRequestFactory({ protocol, options, onResponse }) {
  return protocol === 'https:'
    ? https.request(options, onResponse)
    : http.request(options, onResponse)
}

export function createRequestOptions(boundDestination, targetUrl) {
  const parsed = new URL(targetUrl)
  const parsedHostname = parsed.hostname.toLowerCase().replace(/^\[|\]$/g, '').replace(/\.$/, '')
  const parsedPort = parsed.port ? Number(parsed.port) : (parsed.protocol === 'http:' ? 80 : 443)
  if (
    parsed.protocol !== boundDestination.protocol ||
    parsedHostname !== boundDestination.hostname ||
    parsedPort !== boundDestination.port
  ) {
    throw createWebsiteCheckError('BLOCKED_DESTINATION')
  }
  const headers = Object.freeze({
    ...WEBSITE_CHECK_REQUEST_HEADERS,
    Host: parsed.host,
  })
  const options = {
    protocol: boundDestination.protocol,
    hostname: boundDestination.hostname,
    port: boundDestination.port,
    path: `${parsed.pathname}${parsed.search}`,
    method: 'GET',
    headers,
    lookup: createPinnedLookup(boundDestination),
    agent: false,
  }

  if (boundDestination.protocol === 'https:') {
    options.servername = boundDestination.hostname
    options.rejectUnauthorized = true
  }

  return Object.freeze(options)
}

function firstHeader(headers, name) {
  const value = headers?.[name]
  return Array.isArray(value) ? value[0] : value
}

function parseContentLength(headers) {
  const value = firstHeader(headers, 'content-length')
  if (value === undefined) return null
  if (typeof value !== 'string' || !/^\d+$/.test(value)) throw createWebsiteCheckError('INVALID_RESPONSE')
  const length = Number(value)
  if (!Number.isSafeInteger(length)) throw createWebsiteCheckError('INVALID_RESPONSE')
  return length
}

function normalizeContentType(headers) {
  const value = firstHeader(headers, 'content-type')
  if (typeof value !== 'string') throw createWebsiteCheckError('HTML_NOT_AVAILABLE')
  const mediaType = value.split(';', 1)[0].trim().toLowerCase()
  if (!HTML_CONTENT_TYPES.has(mediaType)) throw createWebsiteCheckError('HTML_NOT_AVAILABLE')
  return mediaType
}

function assertSupportedEncoding(headers) {
  const value = firstHeader(headers, 'content-encoding')
  if (value === undefined || String(value).trim().toLowerCase() === 'identity') return
  throw createWebsiteCheckError('UNSUPPORTED_CONTENT_ENCODING')
}

function filteredHeaders(headers) {
  const result = {}
  for (const name of ['content-type', 'content-length', 'content-encoding', 'location']) {
    const value = firstHeader(headers, name)
    if (typeof value === 'string') result[name] = value
  }
  return Object.freeze(result)
}

function mapNetworkError(error) {
  if (error instanceof WebsiteCheckError) return error
  if (TLS_ERROR_CODES.has(error?.code) || String(error?.code || '').startsWith('ERR_TLS_')) {
    return createWebsiteCheckError('TLS_VALIDATION_FAILED')
  }
  return createWebsiteCheckError('WEBSITE_UNREACHABLE')
}

export function requestHtml(
  boundDestination,
  targetUrl,
  {
    requestFactory = defaultRequestFactory,
    signal,
    connectTimeoutMs = CONNECT_TIMEOUT_MS,
    requestTimeoutMs = REQUEST_TIMEOUT_MS,
    maxResponseBytes = MAX_HTML_RESPONSE_BYTES,
    now = () => Date.now(),
    setTimer = setTimeout,
    clearTimer = clearTimeout,
  } = {},
) {
  const options = createRequestOptions(boundDestination, targetUrl)
  const startedAt = now()

  return new Promise((resolve, reject) => {
    let request
    let response
    let settled = false
    let connectTimer
    let requestTimer

    const cleanup = () => {
      if (connectTimer) clearTimer(connectTimer)
      if (requestTimer) clearTimer(requestTimer)
      signal?.removeEventListener('abort', onAbort)
    }

    const finish = (error, value) => {
      if (settled) return
      settled = true
      cleanup()
      if (error) reject(mapNetworkError(error))
      else resolve(value)
    }

    const destroy = (error) => {
      response?.destroy?.()
      request?.destroy?.()
      finish(error)
    }

    const onAbort = () => destroy(createWebsiteCheckError('REQUEST_TIMEOUT'))
    if (signal?.aborted) return onAbort()
    signal?.addEventListener('abort', onAbort, { once: true })

    connectTimer = setTimer(() => destroy(createWebsiteCheckError('REQUEST_TIMEOUT')), connectTimeoutMs)
    requestTimer = setTimer(() => destroy(createWebsiteCheckError('REQUEST_TIMEOUT')), requestTimeoutMs)

    try {
      request = requestFactory({
        protocol: boundDestination.protocol,
        options,
        onResponse(incoming) {
          response = incoming
          if (connectTimer) {
            clearTimer(connectTimer)
            connectTimer = null
          }

          const statusCode = incoming.statusCode
          if (!Number.isInteger(statusCode) || statusCode < 100 || statusCode > 599) {
            return destroy(createWebsiteCheckError('INVALID_RESPONSE'))
          }

          const headers = incoming.headers || {}
          const responseHeaders = filteredHeaders(headers)
          if (REDIRECT_STATUSES.has(statusCode)) {
            incoming.destroy?.()
            return finish(null, Object.freeze({
              statusCode,
              headers: responseHeaders,
              contentType: null,
              byteLength: 0,
              html: null,
              responseTimeMs: Math.max(0, now() - startedAt),
            }))
          }

          try {
            if (statusCode === 204) throw createWebsiteCheckError('HTML_NOT_AVAILABLE')
            assertSupportedEncoding(headers)
            const contentType = normalizeContentType(headers)
            const contentLength = parseContentLength(headers)
            if (contentLength !== null && contentLength > maxResponseBytes) {
              throw createWebsiteCheckError('RESPONSE_TOO_LARGE')
            }

            const chunks = []
            let byteLength = 0
            incoming.on('data', (chunk) => {
              if (settled) return
              const buffer = Buffer.from(chunk)
              byteLength += buffer.length
              if (byteLength > maxResponseBytes) {
                destroy(createWebsiteCheckError('RESPONSE_TOO_LARGE'))
                return
              }
              chunks.push(buffer)
            })
            incoming.once('end', () => finish(null, Object.freeze({
              statusCode,
              headers: responseHeaders,
              contentType,
              byteLength,
              html: Buffer.concat(chunks, byteLength),
              responseTimeMs: Math.max(0, now() - startedAt),
            })))
            incoming.once('error', (error) => destroy(error))
          } catch (error) {
            destroy(error)
          }
        },
      })
      request.once('error', (error) => finish(error))
      request.once('socket', (socket) => {
        const markConnected = () => {
          if (connectTimer) clearTimer(connectTimer)
          connectTimer = null
        }
        if (socket.connecting === false) markConnected()
        else {
          socket.once(boundDestination.protocol === 'https:' ? 'secureConnect' : 'connect', markConnected)
          socket.once('close', markConnected)
        }
      })
      request.end()
    } catch (error) {
      destroy(error)
    }
  })
}

export function isRedirectStatus(statusCode) {
  return REDIRECT_STATUSES.has(statusCode)
}
