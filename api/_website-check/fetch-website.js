import { MAX_REDIRECTS, TOTAL_FETCH_TIMEOUT_MS } from './config.js'
import { evaluateDestination, evaluateFetchDestination } from './destination-policy.js'
import { resolveDestination } from './dns-resolver.js'
import { createWebsiteCheckError } from './errors.js'
import { isRedirectStatus, requestHtml } from './http-client.js'

function originOf(url) {
  return new URL(url).origin
}

function waitWithAbort(promise, signal) {
  if (signal.aborted) return Promise.reject(createWebsiteCheckError('REQUEST_TIMEOUT'))
  return new Promise((resolve, reject) => {
    const onAbort = () => reject(createWebsiteCheckError('REQUEST_TIMEOUT'))
    signal.addEventListener('abort', onAbort, { once: true })
    Promise.resolve(promise).then(
      (value) => {
        signal.removeEventListener('abort', onAbort)
        resolve(value)
      },
      (error) => {
        signal.removeEventListener('abort', onAbort)
        reject(error)
      },
    )
  })
}

export async function fetchWebsite(
  input,
  {
    resolve = resolveDestination,
    request = requestHtml,
    totalTimeoutMs = TOTAL_FETCH_TIMEOUT_MS,
    setTimer = setTimeout,
    clearTimer = clearTimeout,
    clock = () => Date.now(),
    ...networkOptions
  } = {},
) {
  const startDestination = evaluateDestination(input)
  const requestedUrl = startDestination.normalizedUrl
  const controller = new AbortController()
  const startedAt = clock()
  const totalTimer = setTimer(() => controller.abort(), totalTimeoutMs)
  const visited = new Set()
  const redirectHistory = []
  let redirectCount = 0
  let destination = startDestination
  let currentUrl = requestedUrl
  let httpsDowngrade = false

  try {
    while (true) {
      if (controller.signal.aborted) throw createWebsiteCheckError('REQUEST_TIMEOUT')
      if (visited.has(currentUrl)) throw createWebsiteCheckError('REDIRECT_LOOP')
      visited.add(currentUrl)

      const boundDestination = await waitWithAbort(resolve(destination, networkOptions), controller.signal)
      if (controller.signal.aborted) throw createWebsiteCheckError('REQUEST_TIMEOUT')
      const response = await request(boundDestination, currentUrl, {
        ...networkOptions,
        signal: controller.signal,
      })

      if (!isRedirectStatus(response.statusCode)) {
        return Object.freeze({
          requestedUrl,
          finalUrl: currentUrl,
          finalOrigin: originOf(currentUrl),
          statusCode: response.statusCode,
          headers: response.headers,
          contentType: response.contentType,
          byteLength: response.byteLength,
          redirectCount,
          redirectHistory: Object.freeze(redirectHistory),
          https: destination.protocol === 'https:',
          httpsDowngrade,
          responseTimeMs: Math.max(0, clock() - startedAt),
          html: response.html,
        })
      }

      const location = response.headers.location
      if (!location) throw createWebsiteCheckError('INVALID_RESPONSE')
      if (redirectCount >= MAX_REDIRECTS) throw createWebsiteCheckError('TOO_MANY_REDIRECTS')

      const nextDestination = evaluateFetchDestination(location, { baseUrl: currentUrl })
      const nextUrl = nextDestination.normalizedUrl
      if (visited.has(nextUrl)) throw createWebsiteCheckError('REDIRECT_LOOP')

      const downgraded = destination.protocol === 'https:' && nextDestination.protocol === 'http:'
      httpsDowngrade ||= downgraded
      redirectHistory.push(Object.freeze({
        statusCode: response.statusCode,
        fromOrigin: originOf(currentUrl),
        toOrigin: originOf(nextUrl),
        httpsDowngrade: downgraded,
      }))
      redirectCount += 1
      destination = nextDestination
      currentUrl = nextUrl
    }
  } finally {
    clearTimer(totalTimer)
  }
}
