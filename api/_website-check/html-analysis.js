import {
  ANALYSIS_VERSION,
  MAX_ANALYSIS_TEXT_LENGTH,
  MAX_HTML_RESPONSE_BYTES,
  MAX_JSON_LD_BLOCK_BYTES,
  MAX_JSON_LD_BLOCKS,
  MAX_REDIRECTS,
} from './config.js'
import { buildChecks } from './check-rules.js'
import { createWebsiteCheckError, WebsiteCheckError } from './errors.js'
import {
  findElements,
  findMetaElements,
  getAttribute,
  getElementName,
  getTextContent,
  normalizeText,
  parseHtmlBuffer,
  resolvePassiveHttpUrl,
} from './html-parser.js'
import { selectRecommendations } from './recommendations.js'

const SUPPORTED_CONTENT_TYPES = new Set(['text/html', 'application/xhtml+xml'])
const JSON_LD_TYPES = new Set([
  'AggregateRating', 'LocalBusiness', 'Organization', 'Person', 'Product', 'Service', 'WebSite',
])
const CTA_TERMS = [
  'kontakt', 'anfragen', 'angebot', 'termin', 'beratung', 'rueckruf', 'r\u00fcckruf', 'nachricht',
  'jetzt starten', 'contact', 'request', 'book', 'appointment', 'get in touch',
]
const TRUST_TERMS = ['kundenstimmen', 'testimonial', 'testimonials', 'bewertungen', 'reviews', 'referenzen', 'praxisbeispiele']

const LIMITATIONS = Object.freeze([
  'Es wurde nur das empfangene HTML der finalen Seite geprueft.',
  'Inhalte, die erst durch JavaScript entstehen, koennen fehlen.',
  'Andere Unterseiten wurden nicht durchsucht.',
  'Interne Unternehmensablaeufe wurden nicht analysiert.',
  'Nicht erkannte Elemente koennen an anderer Stelle der Website vorhanden sein.',
  'Mobile Nutzbarkeit wird erst spaeter technisch ueber Lighthouse ergaenzt.',
  'robots.txt und Sitemap wurden in dieser Phase nicht abgerufen.',
])

function parseRequiredHttpUrl(value) {
  if (typeof value !== 'string') throw createWebsiteCheckError('HTML_ANALYSIS_FAILED')
  try {
    const parsed = new URL(value)
    if (!['http:', 'https:'].includes(parsed.protocol) || parsed.username || parsed.password) {
      throw createWebsiteCheckError('HTML_ANALYSIS_FAILED')
    }
    return parsed
  } catch (error) {
    if (error instanceof WebsiteCheckError) throw error
    throw createWebsiteCheckError('HTML_ANALYSIS_FAILED')
  }
}

function validateAnalysisInput(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw createWebsiteCheckError('HTML_ANALYSIS_FAILED')
  }

  const htmlBuffer = value.htmlBuffer ?? value.html
  const httpStatus = value.httpStatus ?? value.statusCode
  if (!Buffer.isBuffer(htmlBuffer)) throw createWebsiteCheckError('HTML_ANALYSIS_FAILED')
  if (htmlBuffer.length > MAX_HTML_RESPONSE_BYTES) throw createWebsiteCheckError('RESPONSE_TOO_LARGE')
  if (!Number.isInteger(value.byteLength) || value.byteLength !== htmlBuffer.length) {
    throw createWebsiteCheckError('HTML_ANALYSIS_FAILED')
  }
  if (!Number.isInteger(httpStatus) || httpStatus < 100 || httpStatus > 599) {
    throw createWebsiteCheckError('HTML_ANALYSIS_FAILED')
  }
  if (!Number.isInteger(value.redirectCount) || value.redirectCount < 0 || value.redirectCount > MAX_REDIRECTS) {
    throw createWebsiteCheckError('HTML_ANALYSIS_FAILED')
  }
  if (typeof value.https !== 'boolean' || typeof value.httpsDowngrade !== 'boolean') {
    throw createWebsiteCheckError('HTML_ANALYSIS_FAILED')
  }

  const requestedUrl = parseRequiredHttpUrl(value.requestedUrl)
  const finalUrl = parseRequiredHttpUrl(value.finalUrl)
  if (typeof value.finalOrigin !== 'string' || new URL(value.finalOrigin).origin !== finalUrl.origin) {
    throw createWebsiteCheckError('HTML_ANALYSIS_FAILED')
  }
  if (value.https !== (finalUrl.protocol === 'https:')) throw createWebsiteCheckError('HTML_ANALYSIS_FAILED')

  const contentType = typeof value.contentType === 'string'
    ? value.contentType.split(';', 1)[0].trim().toLowerCase()
    : ''
  if (!SUPPORTED_CONTENT_TYPES.has(contentType)) throw createWebsiteCheckError('HTML_ANALYSIS_FAILED')

  return Object.freeze({
    htmlBuffer,
    requestedUrl: requestedUrl.href,
    finalUrl: finalUrl.href,
    finalOrigin: finalUrl.origin,
    httpStatus,
    https: value.https,
    contentType,
    byteLength: value.byteLength,
    redirectCount: value.redirectCount,
    httpsDowngrade: value.httpsDowngrade,
  })
}

function valuesForElements(elements, maxLength = 500) {
  return elements.map((node) => getTextContent(node, { maxLength })).filter(Boolean)
}

function analyzeTitle(elements) {
  const nodes = elements.filter((node) => getElementName(node) === 'title')
  const values = valuesForElements(nodes, 300)
  return Object.freeze({
    count: nodes.length,
    nonEmptyCount: values.length,
    distinctCount: new Set(values.map((value) => value.toLocaleLowerCase('und'))).size,
    lengths: Object.freeze(values.map((value) => value.length)),
  })
}

function analyzeMetaDescription(document) {
  const nodes = findMetaElements(document, 'description')
  const values = nodes.map((node) => normalizeText(getAttribute(node, 'content') || '', 500)).filter(Boolean)
  return Object.freeze({
    count: nodes.length,
    nonEmptyCount: values.length,
    lengths: Object.freeze(values.map((value) => value.length)),
  })
}

function analyzeHeadings(elements) {
  const nodes = elements.filter((node) => getElementName(node) === 'h1')
  const values = valuesForElements(nodes, 500)
  return Object.freeze({ count: nodes.length, nonEmptyCount: values.length })
}

function analyzeLanguage(elements) {
  const html = elements.find((node) => getElementName(node) === 'html')
  const value = normalizeText(getAttribute(html, 'lang') || '', 40)
  return Object.freeze({
    present: Boolean(value),
    plausible: /^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$/i.test(value),
  })
}

function analyzeViewport(document) {
  const nodes = findMetaElements(document, 'viewport')
  const contents = nodes.map((node) => normalizeText(getAttribute(node, 'content') || '', 500).toLowerCase())
  return Object.freeze({
    count: nodes.length,
    hasDeviceWidth: contents.some((value) => /(?:^|,)\s*width\s*=\s*device-width(?:\s*,|$)/.test(value)),
    hasInitialScale: contents.some((value) => /(?:^|,)\s*initial-scale\s*=\s*(?:1(?:\.0+)?|1\.0+)(?:\s*,|$)/.test(value)),
  })
}

function analyzeCanonical(elements, finalUrl) {
  const nodes = elements.filter((node) => {
    if (getElementName(node) !== 'link') return false
    return (getAttribute(node, 'rel') || '').toLowerCase().split(/\s+/).includes('canonical')
  })
  let validCount = 0
  let sameOriginCount = 0
  let differentOriginCount = 0
  const finalOrigin = new URL(finalUrl).origin

  for (const node of nodes) {
    const resolved = resolvePassiveHttpUrl(getAttribute(node, 'href'), finalUrl)
    if (!resolved) continue
    validCount += 1
    if (resolved.origin === finalOrigin) sameOriginCount += 1
    else differentOriginCount += 1
  }

  return Object.freeze({ count: nodes.length, validCount, sameOriginCount, differentOriginCount })
}

function lowerText(node, maxLength = 500) {
  return getTextContent(node, { visibleOnly: true, maxLength }).toLocaleLowerCase('und')
}

function analyzeLinks(elements, finalUrl) {
  const links = elements.filter((node) => getElementName(node) === 'a')
  const methods = new Set()
  let contactLinkCount = 0
  let imprintStrong = 0
  let imprintWeak = 0
  let privacyStrong = 0
  let privacyWeak = 0

  for (const link of links) {
    const href = (getAttribute(link, 'href', 2048) || '').trim()
    const lowerHref = href.toLowerCase()
    const text = lowerText(link)
    if (lowerHref.startsWith('tel:')) methods.add('phone')
    if (lowerHref.startsWith('mailto:')) methods.add('email')

    const resolved = resolvePassiveHttpUrl(href, finalUrl)
    const host = resolved?.hostname.toLowerCase() || ''
    const path = resolved?.pathname.toLowerCase() || ''
    if (host === 'wa.me' || host.endsWith('.whatsapp.com') || host === 'whatsapp.com') methods.add('whatsapp')
    if (resolved && (/(?:^|\/)(?:kontakt|contact)(?:\/|$)/.test(path) || /\b(?:kontakt|contact|get in touch)\b/.test(text))) {
      contactLinkCount += 1
    }

    const imprintText = /\b(?:impressum|anbieterkennzeichnung)\b/.test(text)
    const imprintPath = /(?:^|\/)(?:impressum|anbieterkennzeichnung)(?:\/|$)/.test(path)
    if (resolved && (imprintText || imprintPath)) imprintStrong += 1
    else if (resolved && /\b(?:anbieter|legal notice)\b/.test(text)) imprintWeak += 1

    const privacyText = /\b(?:datenschutz|datenschutzerkl\u00e4rung|privacy policy|privacy)\b/.test(text)
    const privacyPath = /(?:^|\/)(?:datenschutz|privacy)(?:\/|$)/.test(path)
    if (resolved && (privacyText || privacyPath)) privacyStrong += 1
    else if (resolved && /\b(?:daten|schutz)\b/.test(text)) privacyWeak += 1
  }

  return Object.freeze({
    links,
    contact: Object.freeze({
      contactMethodsDetected: Object.freeze([...methods].sort()),
      contactLinkCount,
    }),
    imprint: Object.freeze({ strongCount: imprintStrong, weakCount: imprintWeak }),
    privacy: Object.freeze({ strongCount: privacyStrong, weakCount: privacyWeak }),
  })
}

function analyzeForms(elements) {
  const forms = elements.filter((node) => getElementName(node) === 'form')
  let completeCount = 0
  for (const form of forms) {
    const descendants = findElements(form, () => true)
    const hasField = descendants.some((node) => ['input', 'select', 'textarea'].includes(getElementName(node)))
    const hasSubmit = descendants.some((node) => {
      const name = getElementName(node)
      const type = (getAttribute(node, 'type') || '').toLowerCase()
      return (name === 'button' && (!type || type === 'submit')) || (name === 'input' && ['submit', 'image'].includes(type))
    })
    if (hasField && hasSubmit) completeCount += 1
  }
  return Object.freeze({ count: forms.length, completeCount })
}

function analyzeCtas(elements, generalContactLinkCount, finalUrl) {
  const candidates = elements.filter((node) => {
    const name = getElementName(node)
    const role = (getAttribute(node, 'role') || '').toLowerCase()
    const type = (getAttribute(node, 'type') || '').toLowerCase()
    return ['a', 'button'].includes(name) || (name === 'input' && ['button', 'submit'].includes(type)) || role === 'button'
  })
  let strongCount = 0
  for (const node of candidates) {
    if (getElementName(node) === 'a') {
      const href = (getAttribute(node, 'href', 2048) || '').trim()
      const directContactProtocol = /^(?:tel|mailto):/i.test(href)
      if (!directContactProtocol && !resolvePassiveHttpUrl(href, finalUrl)) continue
    }
    const text = normalizeText(
      getElementName(node) === 'input' ? getAttribute(node, 'value') || '' : getTextContent(node, { visibleOnly: true, maxLength: 200 }),
      200,
    ).toLocaleLowerCase('und')
    if (CTA_TERMS.some((term) => text.includes(term))) strongCount += 1
  }
  return Object.freeze({ strongCount, generalContactLinkCount })
}

function collectJsonLdTypes(value, output, budget = { remaining: 100 }) {
  if (budget.remaining <= 0 || value === null || typeof value !== 'object') return
  budget.remaining -= 1
  if (Array.isArray(value)) {
    for (const item of value) collectJsonLdTypes(item, output, budget)
    return
  }
  const rawType = value['@type']
  const types = Array.isArray(rawType) ? rawType : [rawType]
  for (const type of types) if (typeof type === 'string' && JSON_LD_TYPES.has(type)) output.add(type)
  if (Array.isArray(value['@graph'])) collectJsonLdTypes(value['@graph'], output, budget)
}

function analyzeStructuredData(elements) {
  const blocks = elements.filter((node) => (
    getElementName(node) === 'script' && (getAttribute(node, 'type') || '').trim().toLowerCase() === 'application/ld+json'
  )).slice(0, MAX_JSON_LD_BLOCKS)
  let parseableCount = 0
  let oversizedCount = 0
  const types = new Set()

  for (const block of blocks) {
    const content = getTextContent(block, { maxLength: MAX_JSON_LD_BLOCK_BYTES + 1 })
    if (Buffer.byteLength(content, 'utf8') > MAX_JSON_LD_BLOCK_BYTES) {
      oversizedCount += 1
      continue
    }
    try {
      const value = JSON.parse(content)
      parseableCount += 1
      collectJsonLdTypes(value, types)
    } catch {
      // A malformed block affects only this rule, never the complete analysis.
    }
  }

  return Object.freeze({
    blockCount: blocks.length,
    parseableCount,
    oversizedCount,
    detectedTypes: Object.freeze([...types].sort()),
  })
}

function analyzeTrust(elements, visibleText, structuredData) {
  const sectionSignal = elements.some((node) => {
    const name = getElementName(node)
    if (!['section', 'article', 'div'].includes(name)) return false
    const marker = `${getAttribute(node, 'id') || ''} ${getAttribute(node, 'class') || ''}`.toLowerCase()
    return /(?:testimonial|review|bewertung|kundenstimme|referenz|praxisbeispiel|zertifikat)/.test(marker)
  })
  const textHint = TRUST_TERMS.some((term) => visibleText.toLocaleLowerCase('und').includes(term))
  return Object.freeze({
    structuredSignal: structuredData.detectedTypes.includes('AggregateRating'),
    sectionSignal,
    textHint,
  })
}

function extractFacts(document, input) {
  const elements = findElements(document, () => true)
  const visibleText = getTextContent(document, { visibleOnly: true, maxLength: MAX_ANALYSIS_TEXT_LENGTH })
  const linkFacts = analyzeLinks(elements, input.finalUrl)
  const structuredData = analyzeStructuredData(elements)
  const viewport = analyzeViewport(document)
  const contact = Object.freeze({
    ...linkFacts.contact,
    phoneTextHint: /(?:\+\d{1,3}[\s()./-]*)?(?:\d[\s()./-]*){6,}/.test(visibleText),
    emailTextHint: /\b[^\s@]{1,64}@[^\s@]{1,190}\.[a-z]{2,24}\b/i.test(visibleText),
  })

  return Object.freeze({
    title: analyzeTitle(elements),
    metaDescription: analyzeMetaDescription(document),
    h1: analyzeHeadings(elements),
    language: analyzeLanguage(elements),
    viewport,
    canonical: analyzeCanonical(elements, input.finalUrl),
    https: Object.freeze({ finalHttps: input.https, httpsDowngrade: input.httpsDowngrade }),
    contact,
    forms: analyzeForms(elements),
    contactCta: analyzeCtas(elements, linkFacts.contact.contactLinkCount, input.finalUrl),
    imprint: linkFacts.imprint,
    privacy: linkFacts.privacy,
    structuredData,
    trust: analyzeTrust(elements, visibleText, structuredData),
    http: Object.freeze({ statusCode: input.httpStatus, htmlAvailable: true }),
  })
}

function summarizeChecks(checks) {
  const summary = { good: 0, review: 0, priority: 0, notDetected: 0, notCheckable: 0 }
  for (const check of checks) {
    if (check.status === 'not_detected') summary.notDetected += 1
    else if (check.status === 'not_checkable') summary.notCheckable += 1
    else summary[check.status] += 1
  }
  return Object.freeze(summary)
}

function createDocumentSummary(facts, encoding) {
  return Object.freeze({
    titleDetected: facts.title.nonEmptyCount > 0,
    languageDetected: facts.language.present,
    h1Count: facts.h1.nonEmptyCount,
    formCount: facts.forms.count,
    structuredDataCount: facts.structuredData.blockCount,
    utf8BomDetected: encoding.bomDetected,
    declaredCharsetRecognized: encoding.declaredCharsetSupported,
  })
}

export function analyzeWebsiteHtml(value, { parseDocument = parseHtmlBuffer } = {}) {
  try {
    const input = validateAnalysisInput(value)
    const parsed = parseDocument(input.htmlBuffer)
    if (!parsed?.document || !parsed?.encoding) throw createWebsiteCheckError('HTML_ANALYSIS_FAILED')
    const facts = extractFacts(parsed.document, input)
    const checks = buildChecks(facts)
    const recommendations = selectRecommendations(checks)

    return Object.freeze({
      analysisVersion: ANALYSIS_VERSION,
      document: createDocumentSummary(facts, parsed.encoding),
      checks,
      recommendations,
      limitations: LIMITATIONS,
      summary: summarizeChecks(checks),
    })
  } catch (error) {
    if (error instanceof WebsiteCheckError) throw error
    throw createWebsiteCheckError('HTML_ANALYSIS_FAILED')
  }
}
