import { MAX_REQUEST_BODY_BYTES, MAX_URL_LENGTH } from './config.js'
import { createWebsiteCheckError } from './errors.js'

function getHeader(req, name) {
  const value = req.headers?.[name] ?? req.headers?.[name.toLowerCase()]
  return Array.isArray(value) ? value[0] : value
}

export function assertJsonContentType(req) {
  const contentType = getHeader(req, 'content-type')
  if (typeof contentType !== 'string' || contentType.split(';', 1)[0].trim().toLowerCase() !== 'application/json') {
    throw createWebsiteCheckError('INVALID_CONTENT_TYPE')
  }
}

function assertDeclaredBodySize(req) {
  const contentLength = getHeader(req, 'content-length')
  if (contentLength === undefined) return

  const parsedLength = Number(contentLength)
  if (!Number.isInteger(parsedLength) || parsedLength < 0) {
    throw createWebsiteCheckError('INVALID_REQUEST')
  }
  if (parsedLength > MAX_REQUEST_BODY_BYTES) {
    throw createWebsiteCheckError('REQUEST_TOO_LARGE')
  }
}

export async function parseJsonBody(req) {
  assertDeclaredBodySize(req)

  const chunks = []
  let totalBytes = 0
  for await (const chunk of req) {
    const buffer = Buffer.from(chunk)
    totalBytes += buffer.length
    if (totalBytes > MAX_REQUEST_BODY_BYTES) {
      throw createWebsiteCheckError('REQUEST_TOO_LARGE')
    }
    chunks.push(buffer)
  }

  return parseRawJson(Buffer.concat(chunks).toString('utf8'))
}

function parseRawJson(rawBody) {
  if (!rawBody.trim()) throw createWebsiteCheckError('INVALID_JSON')
  try {
    return JSON.parse(rawBody)
  } catch {
    throw createWebsiteCheckError('INVALID_JSON')
  }
}

export function validateWebsiteCheckRequest(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw createWebsiteCheckError('INVALID_REQUEST')
  }

  const keys = Object.keys(value)
  if (keys.length !== 1 || keys[0] !== 'url' || typeof value.url !== 'string') {
    throw createWebsiteCheckError('INVALID_REQUEST')
  }

  const url = value.url.trim()
  if (!url || url.length > MAX_URL_LENGTH) {
    throw createWebsiteCheckError('INVALID_REQUEST')
  }

  return Object.freeze({ url })
}
