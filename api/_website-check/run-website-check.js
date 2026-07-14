import {
  MAX_HTML_RESPONSE_BYTES,
  MAX_PUBLIC_RESPONSE_TIME_MS,
  MAX_REDIRECTS,
} from './config.js'
import { createWebsiteCheckError, WebsiteCheckError } from './errors.js'
import { fetchWebsite as defaultFetchWebsite } from './fetch-website.js'
import { analyzeWebsiteHtml as defaultAnalyzeWebsiteHtml } from './html-analysis.js'

const HTML_CONTENT_TYPES = new Set(['text/html', 'application/xhtml+xml'])
const ANALYSIS_WARNING = Object.freeze({
  code: 'HTML_ANALYSIS_UNAVAILABLE',
  message: 'Die Website war erreichbar, konnte aber nicht vollstaendig ausgewertet werden.',
})

function isPlainObject(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false
  const prototype = Object.getPrototypeOf(value)
  return prototype === Object.prototype || prototype === null
}

function parseHttpUrl(value) {
  if (typeof value !== 'string') throw createWebsiteCheckError('INVALID_RESPONSE')
  try {
    const parsed = new URL(value)
    if (!['http:', 'https:'].includes(parsed.protocol) || parsed.username || parsed.password) {
      throw createWebsiteCheckError('INVALID_RESPONSE')
    }
    return parsed
  } catch (error) {
    if (error instanceof WebsiteCheckError) throw error
    throw createWebsiteCheckError('INVALID_RESPONSE')
  }
}

function validateNormalizedOrigin(value) {
  const parsed = parseHttpUrl(value)
  const normalized = `${parsed.origin}/`
  if (parsed.href !== normalized || value !== normalized) throw createWebsiteCheckError('INVALID_RESPONSE')
  return normalized
}

function createCheckedAt(now) {
  if (typeof now !== 'function') throw createWebsiteCheckError('INTERNAL_ERROR')
  const value = now()
  const date = value instanceof Date ? new Date(value.getTime()) : new Date(value)
  if (!Number.isFinite(date.getTime())) throw createWebsiteCheckError('INTERNAL_ERROR')
  return date.toISOString()
}

function validateFetchResult(value, normalizedUrl) {
  if (!isPlainObject(value)) throw createWebsiteCheckError('INVALID_RESPONSE')
  if (!Buffer.isBuffer(value.html)) throw createWebsiteCheckError('INVALID_RESPONSE')
  if (value.html.length > MAX_HTML_RESPONSE_BYTES) throw createWebsiteCheckError('RESPONSE_TOO_LARGE')
  if (!Number.isInteger(value.byteLength) || value.byteLength !== value.html.length) {
    throw createWebsiteCheckError('INVALID_RESPONSE')
  }

  if (value.requestedUrl !== normalizedUrl) throw createWebsiteCheckError('INVALID_RESPONSE')
  const finalUrl = parseHttpUrl(value.finalUrl)
  if (typeof value.finalOrigin !== 'string' || value.finalOrigin !== finalUrl.origin) {
    throw createWebsiteCheckError('INVALID_RESPONSE')
  }
  if (!Number.isInteger(value.statusCode) || value.statusCode < 100 || value.statusCode > 599) {
    throw createWebsiteCheckError('INVALID_RESPONSE')
  }
  if (!Number.isInteger(value.redirectCount) || value.redirectCount < 0 || value.redirectCount > MAX_REDIRECTS) {
    throw createWebsiteCheckError('INVALID_RESPONSE')
  }
  if (typeof value.https !== 'boolean' || value.https !== (finalUrl.protocol === 'https:')) {
    throw createWebsiteCheckError('INVALID_RESPONSE')
  }
  if (typeof value.httpsDowngrade !== 'boolean') throw createWebsiteCheckError('INVALID_RESPONSE')

  const contentType = typeof value.contentType === 'string'
    ? value.contentType.split(';', 1)[0].trim().toLowerCase()
    : ''
  if (!HTML_CONTENT_TYPES.has(contentType)) throw createWebsiteCheckError('INVALID_RESPONSE')
  if (typeof value.responseTimeMs !== 'number' || !Number.isFinite(value.responseTimeMs) || value.responseTimeMs < 0) {
    throw createWebsiteCheckError('INVALID_RESPONSE')
  }

  return Object.freeze({
    analysisInput: Object.freeze({
      htmlBuffer: value.html,
      requestedUrl: normalizedUrl,
      finalUrl: finalUrl.href,
      finalOrigin: finalUrl.origin,
      httpStatus: value.statusCode,
      https: value.https,
      contentType,
      byteLength: value.byteLength,
      redirectCount: value.redirectCount,
      httpsDowngrade: value.httpsDowngrade,
    }),
    website: Object.freeze({
      reachable: true,
      httpStatus: value.statusCode,
      finalOrigin: finalUrl.origin,
      originChanged: finalUrl.origin !== new URL(normalizedUrl).origin,
      https: value.https,
      httpsDowngrade: value.httpsDowngrade,
      redirectCount: value.redirectCount,
      responseTimeMs: Math.min(MAX_PUBLIC_RESPONSE_TIME_MS, Math.round(value.responseTimeMs)),
    }),
  })
}

export async function runWebsiteCheck({ normalizedUrl, dependencies = {} } = {}) {
  const normalizedOrigin = validateNormalizedOrigin(normalizedUrl)
  if (!isPlainObject(dependencies)) throw createWebsiteCheckError('INTERNAL_ERROR')

  const fetchWebsite = dependencies.fetchWebsite || defaultFetchWebsite
  const analyzeWebsiteHtml = dependencies.analyzeWebsiteHtml || defaultAnalyzeWebsiteHtml
  const now = dependencies.now || (() => new Date())
  if (typeof fetchWebsite !== 'function' || typeof analyzeWebsiteHtml !== 'function') {
    throw createWebsiteCheckError('INTERNAL_ERROR')
  }

  const fetchResult = await fetchWebsite(normalizedOrigin)
  const validated = validateFetchResult(fetchResult, normalizedOrigin)
  const checkedAt = createCheckedAt(now)

  try {
    const analysis = analyzeWebsiteHtml(validated.analysisInput)
    return Object.freeze({
      status: 'complete',
      request: Object.freeze({ normalizedUrl: normalizedOrigin, checkedAt }),
      website: validated.website,
      analysis,
      warnings: Object.freeze([]),
    })
  } catch (error) {
    if (!(error instanceof WebsiteCheckError) || error.code !== 'HTML_ANALYSIS_FAILED') throw error
    return Object.freeze({
      status: 'partial',
      request: Object.freeze({ normalizedUrl: normalizedOrigin, checkedAt }),
      website: validated.website,
      analysis: null,
      warnings: Object.freeze([ANALYSIS_WARNING]),
    })
  }
}
