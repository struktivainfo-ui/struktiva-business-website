import {
  ANALYSIS_VERSION,
  API_VERSION,
  MAX_PUBLIC_CHECKS,
  MAX_PUBLIC_LIMITATIONS,
  MAX_PUBLIC_RECOMMENDATIONS,
  MAX_PUBLIC_RESPONSE_TIME_MS,
  MAX_REDIRECTS,
} from './config.js'
import { createWebsiteCheckError } from './errors.js'

const MAX_COUNTER = 100000
const STATUS_VALUES = new Set(['good', 'review', 'priority', 'not_detected', 'not_checkable'])
const STATUS_LABELS = Object.freeze({
  good: 'GUT',
  review: 'PR\u00dcFEN',
  priority: 'PRIORIT\u00c4T',
  not_detected: 'NICHT ERKANNT',
  not_checkable: 'NICHT PR\u00dcFBAR',
})
const CATEGORY_VALUES = new Set([
  'technical-foundation', 'visibility', 'customer-journey', 'trust-and-legal', 'mobile-foundation',
])
const SOURCE_VALUES = new Set(['html', 'http'])
const CONFIDENCE_VALUES = new Set(['high', 'medium', 'low'])
const PRIORITY_VALUES = new Set(['high', 'medium', 'low'])
const CONTACT_METHODS = new Set(['phone', 'email', 'whatsapp'])
const STRUCTURED_DATA_TYPES = new Set([
  'AggregateRating', 'LocalBusiness', 'Organization', 'Person', 'Product', 'Service', 'WebSite',
])

const EVIDENCE_SCHEMAS = Object.freeze({
  'http-reachability': Object.freeze({ statusCode: 'integer', htmlAvailable: 'boolean' }),
  https: Object.freeze({ finalHttps: 'boolean', httpsDowngrade: 'boolean' }),
  'page-title': Object.freeze({ count: 'integer', nonEmptyCount: 'integer', distinctCount: 'integer', lengths: 'integer-list' }),
  'meta-description': Object.freeze({ count: 'integer', nonEmptyCount: 'integer', lengths: 'integer-list' }),
  'h1-structure': Object.freeze({ count: 'integer', nonEmptyCount: 'integer' }),
  'document-language': Object.freeze({ present: 'boolean', plausible: 'boolean' }),
  'viewport-foundation': Object.freeze({ count: 'integer', hasDeviceWidth: 'boolean', hasInitialScale: 'boolean' }),
  canonical: Object.freeze({ count: 'integer', validCount: 'integer', sameOriginCount: 'integer', differentOriginCount: 'integer' }),
  'contact-methods': Object.freeze({ contactMethodsDetected: 'contact-list', contactLinkCount: 'integer', phoneTextHint: 'boolean', emailTextHint: 'boolean' }),
  'contact-form': Object.freeze({ count: 'integer', completeCount: 'integer' }),
  'contact-cta': Object.freeze({ strongCount: 'integer', generalContactLinkCount: 'integer' }),
  'imprint-link': Object.freeze({ strongCount: 'integer', weakCount: 'integer' }),
  'privacy-link': Object.freeze({ strongCount: 'integer', weakCount: 'integer' }),
  'structured-data': Object.freeze({ blockCount: 'integer', parseableCount: 'integer', oversizedCount: 'integer', detectedTypes: 'structured-type-list' }),
  'trust-signals': Object.freeze({ structuredSignal: 'boolean', sectionSignal: 'boolean', textHint: 'boolean' }),
  'mobile-usability': Object.freeze({ browserRenderingAvailable: 'boolean' }),
})

function isObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value)
}

function limitedString(value, maxLength) {
  if (typeof value !== 'string') return null
  return value.slice(0, maxLength)
}

function validInteger(value) {
  return Number.isInteger(value) && value >= 0 && value <= MAX_COUNTER
}

function sanitizeList(value, allowed, maxLength = 20) {
  if (!Array.isArray(value)) return null
  return Object.freeze([...new Set(value.filter((item) => typeof item === 'string' && allowed.has(item)))].slice(0, maxLength))
}

function sanitizeEvidence(checkId, value) {
  const schema = EVIDENCE_SCHEMAS[checkId]
  if (!schema || !isObject(value)) return Object.freeze({})
  const result = {}

  for (const [key, type] of Object.entries(schema)) {
    const candidate = value[key]
    if (type === 'boolean' && typeof candidate === 'boolean') result[key] = candidate
    if (type === 'integer' && validInteger(candidate)) result[key] = candidate
    if (type === 'integer-list' && Array.isArray(candidate)) {
      result[key] = Object.freeze(candidate.filter(validInteger).slice(0, 20))
    }
    if (type === 'contact-list') {
      const list = sanitizeList(candidate, CONTACT_METHODS, 3)
      if (list) result[key] = list
    }
    if (type === 'structured-type-list') {
      const list = sanitizeList(candidate, STRUCTURED_DATA_TYPES, 10)
      if (list) result[key] = list
    }
  }

  return Object.freeze(result)
}

function sanitizeCheck(value) {
  if (!isObject(value)) return null
  const id = limitedString(value.id, 64)
  const category = limitedString(value.category, 64)
  const status = limitedString(value.status, 32)
  const source = limitedString(value.source, 16)
  const confidence = limitedString(value.confidence, 16)
  const title = limitedString(value.title, 120)
  const summary = limitedString(value.summary, 500)
  if (
    !id || !EVIDENCE_SCHEMAS[id] || !CATEGORY_VALUES.has(category) || !STATUS_VALUES.has(status) ||
    !SOURCE_VALUES.has(source) || !CONFIDENCE_VALUES.has(confidence) || !title || !summary
  ) return null

  const recommendation = value.recommendation === null ? null : limitedString(value.recommendation, 500)
  if (value.recommendation !== null && recommendation === null) return null

  return Object.freeze({
    id,
    category,
    title,
    status,
    statusLabel: STATUS_LABELS[status],
    summary,
    evidence: sanitizeEvidence(id, value.evidence),
    recommendation,
    source,
    confidence,
  })
}

function sanitizeSummary(value) {
  if (!isObject(value)) throw createWebsiteCheckError('INVALID_RESPONSE')
  const result = {}
  for (const key of ['good', 'review', 'priority', 'notDetected', 'notCheckable']) {
    if (!validInteger(value[key])) throw createWebsiteCheckError('INVALID_RESPONSE')
    result[key] = value[key]
  }
  return Object.freeze(result)
}

function sanitizeRecommendation(value) {
  if (!isObject(value)) return null
  const id = limitedString(value.id, 64)
  const category = limitedString(value.category, 64)
  const priority = limitedString(value.priority, 16)
  const text = limitedString(value.text, 500)
  if (!id || !CATEGORY_VALUES.has(category) || !PRIORITY_VALUES.has(priority) || !text) return null
  const checkIds = Array.isArray(value.checkIds)
    ? Object.freeze([...new Set(value.checkIds.filter((item) => typeof item === 'string' && EVIDENCE_SCHEMAS[item]))].slice(0, MAX_PUBLIC_CHECKS))
    : Object.freeze([])
  return Object.freeze({ id, category, priority, text, checkIds })
}

function sanitizeAnalysis(value) {
  if (!isObject(value) || value.analysisVersion !== ANALYSIS_VERSION) {
    throw createWebsiteCheckError('INVALID_RESPONSE')
  }
  if (!Array.isArray(value.checks) || !Array.isArray(value.recommendations) || !Array.isArray(value.limitations)) {
    throw createWebsiteCheckError('INVALID_RESPONSE')
  }

  const checks = value.checks.slice(0, MAX_PUBLIC_CHECKS).map(sanitizeCheck).filter(Boolean)
  const recommendations = value.recommendations.slice(0, MAX_PUBLIC_RECOMMENDATIONS).map(sanitizeRecommendation).filter(Boolean)
  const limitations = value.limitations
    .slice(0, MAX_PUBLIC_LIMITATIONS)
    .map((item) => limitedString(item, 500))
    .filter((item) => item !== null)

  return Object.freeze({
    analysisVersion: ANALYSIS_VERSION,
    summary: sanitizeSummary(value.summary),
    checks: Object.freeze(checks),
    recommendations: Object.freeze(recommendations),
    limitations: Object.freeze(limitations),
  })
}

function parseOrigin(value, trailingSlash) {
  if (typeof value !== 'string') throw createWebsiteCheckError('INVALID_RESPONSE')
  try {
    const parsed = new URL(value)
    if (!['http:', 'https:'].includes(parsed.protocol) || parsed.username || parsed.password) {
      throw createWebsiteCheckError('INVALID_RESPONSE')
    }
    const expected = trailingSlash ? `${parsed.origin}/` : parsed.origin
    if (value !== expected) throw createWebsiteCheckError('INVALID_RESPONSE')
    return expected
  } catch (error) {
    if (error?.code === 'INVALID_RESPONSE') throw error
    throw createWebsiteCheckError('INVALID_RESPONSE')
  }
}

function sanitizeWarnings(value) {
  if (!Array.isArray(value)) throw createWebsiteCheckError('INVALID_RESPONSE')
  const messages = {
    HTML_ANALYSIS_UNAVAILABLE: 'Die Website war erreichbar, konnte aber nicht vollstaendig ausgewertet werden.',
  }
  return Object.freeze(value.slice(0, 5).flatMap((warning) => {
    const code = isObject(warning) ? limitedString(warning.code, 64) : null
    return code && messages[code]
      ? [Object.freeze({ code, message: messages[code].slice(0, 300) })]
      : []
  }))
}

export function createPublicWebsiteCheckResult(value, { requestId } = {}) {
  if (!isObject(value) || !['complete', 'partial'].includes(value.status)) {
    throw createWebsiteCheckError('INVALID_RESPONSE')
  }
  if (typeof requestId !== 'string' || !/^[a-z0-9_-]{1,128}$/i.test(requestId)) {
    throw createWebsiteCheckError('INTERNAL_ERROR')
  }
  if (!isObject(value.request) || !isObject(value.website)) throw createWebsiteCheckError('INVALID_RESPONSE')

  const checkedAt = value.request.checkedAt
  let normalizedCheckedAt = null
  try {
    normalizedCheckedAt = typeof checkedAt === 'string' ? new Date(checkedAt).toISOString() : null
  } catch {
    normalizedCheckedAt = null
  }
  if (normalizedCheckedAt !== checkedAt) {
    throw createWebsiteCheckError('INVALID_RESPONSE')
  }
  const normalizedUrl = parseOrigin(value.request.normalizedUrl, true)
  const finalOrigin = parseOrigin(value.website.finalOrigin, false)
  const requestedOrigin = new URL(normalizedUrl).origin
  const finalProtocol = new URL(finalOrigin).protocol
  const website = value.website
  if (
    website.reachable !== true || !Number.isInteger(website.httpStatus) || website.httpStatus < 100 || website.httpStatus > 599 ||
    typeof website.originChanged !== 'boolean' || typeof website.https !== 'boolean' || typeof website.httpsDowngrade !== 'boolean' ||
    website.originChanged !== (requestedOrigin !== finalOrigin) || website.https !== (finalProtocol === 'https:') ||
    !Number.isInteger(website.redirectCount) || website.redirectCount < 0 || website.redirectCount > MAX_REDIRECTS ||
    !Number.isInteger(website.responseTimeMs) || website.responseTimeMs < 0 || website.responseTimeMs > MAX_PUBLIC_RESPONSE_TIME_MS
  ) throw createWebsiteCheckError('INVALID_RESPONSE')

  const warnings = sanitizeWarnings(value.warnings)
  const analysis = value.status === 'complete' ? sanitizeAnalysis(value.analysis) : null
  if (value.status === 'partial' && (value.analysis !== null || warnings.length === 0)) {
    throw createWebsiteCheckError('INVALID_RESPONSE')
  }

  return Object.freeze({
    ok: true,
    status: value.status,
    data: Object.freeze({
      request: Object.freeze({ normalizedUrl, checkedAt }),
      website: Object.freeze({
        reachable: true,
        httpStatus: website.httpStatus,
        finalOrigin,
        originChanged: website.originChanged,
        https: website.https,
        httpsDowngrade: website.httpsDowngrade,
        redirectCount: website.redirectCount,
        responseTimeMs: website.responseTimeMs,
      }),
      analysis,
      warnings,
    }),
    meta: Object.freeze({ apiVersion: API_VERSION, requestId }),
  })
}
