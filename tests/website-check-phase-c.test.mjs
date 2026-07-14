import test from 'node:test'
import assert from 'node:assert/strict'

import {
  MAX_HTML_RESPONSE_BYTES,
  MAX_JSON_LD_BLOCK_BYTES,
} from '../api/_website-check/config.js'
import { WebsiteCheckError } from '../api/_website-check/errors.js'
import { analyzeWebsiteHtml } from '../api/_website-check/html-analysis.js'
import {
  findElements,
  getDirectTextContent,
  getElementName,
  getTextContent,
  normalizeText,
  parseHtmlBuffer,
  resolvePassiveHttpUrl,
} from '../api/_website-check/html-parser.js'
import { selectRecommendations } from '../api/_website-check/recommendations.js'

const COMPLETE_HTML = `<!doctype html><html lang="de"><head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Digitale Unternehmensberatung fuer den Mittelstand</title>
  <meta name="description" content="STRUKTIVA begleitet Unternehmen bei klaren digitalen Strukturen und wirksamen Verbesserungen.">
  <link rel="canonical" href="/">
  <script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"Nicht ausgeben"}</script>
</head><body>
  <h1>Digitale Strukturen, die im Alltag funktionieren</h1>
  <section class="kundenstimmen"><p>Praxisbeispiele</p></section>
  <a href="/kontakt">Kontakt</a><a href="tel:+49123456789">Anrufen</a>
  <a href="mailto:secret@example.com">E-Mail</a><a href="https://wa.me/49123456789">WhatsApp</a>
  <a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a>
  <form><input name="message"><button type="submit">Beratung anfragen</button></form>
</body></html>`

function inputFor(html = COMPLETE_HTML, overrides = {}) {
  const htmlBuffer = Buffer.isBuffer(html) ? html : Buffer.from(html)
  return {
    htmlBuffer,
    requestedUrl: 'https://example.com/',
    finalUrl: 'https://example.com/',
    finalOrigin: 'https://example.com',
    httpStatus: 200,
    https: true,
    contentType: 'text/html; charset=utf-8',
    byteLength: htmlBuffer.length,
    redirectCount: 0,
    httpsDowngrade: false,
    ...overrides,
  }
}

function check(result, id) {
  const value = result.checks.find((item) => item.id === id)
  assert.ok(value, `missing check ${id}`)
  return value
}

function expectCode(fn, code) {
  assert.throws(fn, (error) => error instanceof WebsiteCheckError && error.code === code)
}

test('Phase C returns a bounded deterministic result with 16 documented checks', () => {
  const first = analyzeWebsiteHtml(inputFor())
  const second = analyzeWebsiteHtml(inputFor())
  assert.deepEqual(first, second)
  assert.equal(first.analysisVersion, '1')
  assert.equal(first.checks.length, 16)
  assert.ok(first.recommendations.length <= 3)
  assert.equal(first.limitations.length, 7)
  assert.equal(Object.values(first.summary).reduce((sum, value) => sum + value, 0), 16)
  assert.equal('score' in first, false)
  assert.equal(check(first, 'mobile-usability').status, 'not_checkable')
  for (const item of first.checks) {
    assert.ok(['good', 'review', 'priority', 'not_detected', 'not_checkable'].includes(item.status))
    assert.ok(['GUT', 'PRÜFEN', 'PRIORITÄT', 'NICHT ERKANNT', 'NICHT PRÜFBAR'].includes(item.statusLabel))
  }
})

test('parse5 accepts documents, fragments, malformed markup, comments, umlauts and UTF-8 BOM', () => {
  for (const html of [
    COMPLETE_HTML,
    '<h1>Fragment</h1><p>Text</p>',
    '<html><body><div><p>Nicht geschlossen<h1>Trotzdem da',
    '<!doctype html><!-- verborgen --><html><body><h1>Änderung für Köln</h1></body></html>',
  ]) {
    const parsed = parseHtmlBuffer(Buffer.from(html))
    assert.ok(parsed.document)
  }
  const bom = parseHtmlBuffer(Buffer.concat([Buffer.from([0xef, 0xbb, 0xbf]), Buffer.from('<h1>Text</h1>')]))
  assert.equal(bom.encoding.bomDetected, true)
  assert.equal(bom.encoding.used, 'utf-8')
})

test('parser helpers normalize safely, hide non-visible text and resolve only passive HTTP URLs', () => {
  const parsed = parseHtmlBuffer(Buffer.from('<body>A\u0000  B<script>secret</script><style>hidden</style><!-- comment --><p>C</p></body>'))
  const body = findElements(parsed.document, (node) => getElementName(node) === 'body')[0]
  assert.equal(normalizeText('  A\u0000 \n B  ', 10), 'A B')
  assert.equal(getDirectTextContent(body), 'A B')
  assert.equal(getTextContent(parsed.document, { visibleOnly: true }), 'A B C')
  assert.equal(resolvePassiveHttpUrl('/kontakt#top', 'https://example.com/a').href, 'https://example.com/kontakt')
  assert.equal(resolvePassiveHttpUrl('javascript:alert(1)', 'https://example.com/'), null)
  assert.equal(resolvePassiveHttpUrl('https://user:pass@example.com/', 'https://example.com/'), null)
})

test('parser rejects non-buffers and buffers above the Phase B response limit', () => {
  expectCode(() => parseHtmlBuffer('<html></html>'), 'HTML_ANALYSIS_FAILED')
  expectCode(() => parseHtmlBuffer(Buffer.alloc(MAX_HTML_RESPONSE_BYTES + 1)), 'RESPONSE_TOO_LARGE')
})

test('encoding metadata recognizes UTF-8 declarations without attempting conversion', () => {
  assert.equal(parseHtmlBuffer(Buffer.from('<meta charset="UTF-8">')).encoding.declaredCharsetSupported, true)
  const legacy = parseHtmlBuffer(Buffer.from('<meta http-equiv="content-type" content="text/html; charset=windows-1252">'))
  assert.equal(legacy.encoding.declaredCharset, 'windows-1252')
  assert.equal(legacy.encoding.declaredCharsetSupported, false)
  assert.ok(parseHtmlBuffer(Buffer.from([0x3c, 0x70, 0x3e, 0xff, 0xfe, 0x3c, 0x2f, 0x70, 0x3e])).document)
})

test('title, description, H1, language and viewport matrices are classified conservatively', () => {
  const cases = [
    ['<html><head></head><body></body></html>', ['page-title', 'priority'], ['meta-description', 'not_detected'], ['h1-structure', 'priority'], ['document-language', 'review'], ['viewport-foundation', 'priority']],
    ['<html lang="de"><head><title>Kurz</title><meta name="description" content="kurz"><meta name="viewport" content="width=device-width"></head><body><h1>A</h1><h1>B</h1></body></html>', ['page-title', 'review'], ['meta-description', 'review'], ['h1-structure', 'review'], ['document-language', 'good'], ['viewport-foundation', 'review']],
  ]
  for (const [html, ...expectations] of cases) {
    const result = analyzeWebsiteHtml(inputFor(html))
    for (const [id, status] of expectations) assert.equal(check(result, id).status, status)
  }
  const good = analyzeWebsiteHtml(inputFor())
  for (const id of ['page-title', 'meta-description', 'h1-structure', 'document-language', 'viewport-foundation']) {
    assert.equal(check(good, id).status, 'good')
  }
})

test('duplicate and empty title or description values remain reviewable', () => {
  const html = '<html lang="de"><head><title></title><title>Ein ausreichend langer zweiter Seitentitel</title><meta name="description"><meta name="description" content="Eine zweite und ausreichend lange Beschreibung, die bewusst mehrfach im Dokument vorhanden ist."><meta name="viewport" content="width=device-width,initial-scale=1"></head><body><h1>Titel</h1></body></html>'
  const result = analyzeWebsiteHtml(inputFor(html))
  assert.equal(check(result, 'page-title').status, 'review')
  assert.equal(check(result, 'meta-description').status, 'review')
})

test('meta names and attributes are matched case-insensitively by the HTML parser', () => {
  const html = '<HTML LANG="de"><HEAD><TITLE>Ein ausreichend langer Seitentitel fuer den Test</TITLE><META NAME="DESCRIPTION" CONTENT="Eine ausreichend lange und klare Beschreibung fuer die getestete Seite und ihre Inhalte."><META NAME="VIEWPORT" CONTENT="width=device-width, initial-scale=1"></HEAD><BODY><H1>Test</H1></BODY></HTML>'
  const result = analyzeWebsiteHtml(inputFor(html))
  assert.equal(check(result, 'meta-description').status, 'good')
  assert.equal(check(result, 'viewport-foundation').status, 'good')
})

test('canonical detection distinguishes missing, invalid, single and duplicate declarations without returning URLs', () => {
  const cases = [
    ['<link rel="stylesheet" href="/a.css">', 'not_detected'],
    ['<link rel="canonical" href="javascript:bad">', 'review'],
    ['<link rel="alternate canonical" href="/seite">', 'good'],
    ['<link rel="canonical" href="/"><link rel="canonical" href="https://other.example/">', 'review'],
  ]
  for (const [markup, status] of cases) {
    const result = analyzeWebsiteHtml(inputFor(`<html><head>${markup}</head><body></body></html>`))
    assert.equal(check(result, 'canonical').status, status)
    assert.equal(JSON.stringify(check(result, 'canonical')).includes('https://'), false)
  }
})

test('HTTP and HTTPS metadata drive only their own transport checks', () => {
  assert.equal(check(analyzeWebsiteHtml(inputFor('', { httpStatus: 404 })), 'http-reachability').status, 'review')
  assert.equal(check(analyzeWebsiteHtml(inputFor('', { httpStatus: 429 })), 'http-reachability').status, 'priority')
  assert.equal(check(analyzeWebsiteHtml(inputFor('', { httpStatus: 503 })), 'http-reachability').status, 'priority')
  const http = inputFor('', { requestedUrl: 'http://example.com/', finalUrl: 'http://example.com/', finalOrigin: 'http://example.com', https: false })
  assert.equal(check(analyzeWebsiteHtml(http), 'https').status, 'priority')
  assert.equal(check(analyzeWebsiteHtml(inputFor('', { httpsDowngrade: true })), 'https').status, 'priority')
})

test('direct contact methods, contact links and weak visible hints are separated', () => {
  const direct = analyzeWebsiteHtml(inputFor('<a href="tel:+49123456789">Telefon</a><a href="mailto:x@example.com">Mail</a><a href="https://wa.me/49123">Chat</a>'))
  assert.deepEqual(check(direct, 'contact-methods').evidence.contactMethodsDetected, ['email', 'phone', 'whatsapp'])
  assert.equal(check(direct, 'contact-methods').status, 'good')
  assert.equal(check(analyzeWebsiteHtml(inputFor('<a href="/kontakt">Kontakt</a>')), 'contact-methods').status, 'good')
  assert.equal(check(analyzeWebsiteHtml(inputFor('<p>Rufen Sie +49 123 456789 an.</p>')), 'contact-methods').status, 'review')
  assert.equal(check(analyzeWebsiteHtml(inputFor('<p>Keine Kontaktdaten vorhanden.</p>')), 'contact-methods').status, 'priority')
})

test('unsafe links and hidden script text never create contact, CTA or legal positives', () => {
  const html = '<script>Kontakt secret@example.com +49 123456789</script><style>.x{content:"Impressum"}</style><a href="javascript:alert(1)">Kontakt Impressum Datenschutz Beratung anfragen</a>'
  const result = analyzeWebsiteHtml(inputFor(html))
  assert.equal(check(result, 'contact-methods').status, 'priority')
  assert.equal(check(result, 'contact-cta').status, 'not_detected')
  assert.equal(check(result, 'imprint-link').status, 'not_detected')
  assert.equal(check(result, 'privacy-link').status, 'not_detected')
})

test('forms require a field and a submit control, while absence creates no form recommendation', () => {
  assert.equal(check(analyzeWebsiteHtml(inputFor('<form><input><button>Absenden</button></form>')), 'contact-form').status, 'good')
  assert.equal(check(analyzeWebsiteHtml(inputFor('<form><input></form>')), 'contact-form').status, 'review')
  const absent = analyzeWebsiteHtml(inputFor('<a href="mailto:a@example.com">E-Mail</a>'))
  assert.equal(check(absent, 'contact-form').status, 'not_detected')
  assert.equal(absent.recommendations.some((item) => item.checkIds.includes('contact-form')), false)
})

test('contact CTA detection supports links, buttons and inputs but does not invent one', () => {
  for (const html of ['<a href="/kontakt">Beratung anfragen</a>', '<button>Termin buchen</button>', '<input type="submit" value="Jetzt starten">', '<div role="button">Rueckruf anfragen</div>']) {
    assert.equal(check(analyzeWebsiteHtml(inputFor(html)), 'contact-cta').status, 'good')
  }
  assert.equal(check(analyzeWebsiteHtml(inputFor('<a href="/kontakt">Kontaktseite</a>')), 'contact-cta').status, 'good')
  assert.equal(check(analyzeWebsiteHtml(inputFor('<p>Wir beraten Unternehmen.</p>')), 'contact-cta').status, 'not_detected')
})

test('legal and trust checks distinguish strong, weak and missing signals', () => {
  const strong = analyzeWebsiteHtml(inputFor('<a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a><section id="referenzen"></section>'))
  assert.equal(check(strong, 'imprint-link').status, 'good')
  assert.equal(check(strong, 'privacy-link').status, 'good')
  assert.equal(check(strong, 'trust-signals').status, 'good')
  const weak = analyzeWebsiteHtml(inputFor('<a href="/legal">Anbieter</a><a href="/data">Daten</a><p>Kundenstimmen</p>'))
  assert.equal(check(weak, 'imprint-link').status, 'review')
  assert.equal(check(weak, 'privacy-link').status, 'review')
  assert.equal(check(weak, 'trust-signals').status, 'review')
})

test('JSON-LD accepts objects, arrays and graph types while isolating malformed blocks', () => {
  const html = `<script type="application/ld+json">{"@type":"Organization"}</script>
    <script type="application/ld+json">[{"@type":"Service"},{"@graph":[{"@type":"AggregateRating"}]}]</script>
    <script type="application/ld+json">{bad}</script>`
  const evidence = check(analyzeWebsiteHtml(inputFor(html)), 'structured-data').evidence
  assert.equal(evidence.blockCount, 3)
  assert.equal(evidence.parseableCount, 2)
  assert.deepEqual(evidence.detectedTypes, ['AggregateRating', 'Organization', 'Service'])
})

test('oversized JSON-LD is bounded and never aborts the document analysis', () => {
  const payload = `{"@type":"Organization","value":"${'x'.repeat(MAX_JSON_LD_BLOCK_BYTES)}"}`
  const result = analyzeWebsiteHtml(inputFor(`<h1>Test</h1><script type="application/ld+json">${payload}</script>`))
  const evidence = check(result, 'structured-data').evidence
  assert.equal(evidence.oversizedCount, 1)
  assert.equal(evidence.parseableCount, 0)
})

test('analysis is passive: scripts, event handlers, iframes, images and JSON-LD contexts cause no fetch', () => {
  const originalFetch = globalThis.fetch
  let calls = 0
  globalThis.fetch = () => { calls += 1; throw new Error('network access is forbidden') }
  try {
    analyzeWebsiteHtml(inputFor('<script>fetch("https://example.invalid")</script><img src="https://example.invalid/a"><iframe src="https://example.invalid/b"></iframe><button onclick="fetch(\'x\')">Termin</button><script type="application/ld+json">{"@context":"https://example.invalid/schema","@type":"Organization"}</script>'))
    assert.equal(calls, 0)
  } finally {
    globalThis.fetch = originalFetch
  }
})

test('result privacy excludes raw HTML, URLs, credentials, contact values and JSON-LD properties', () => {
  const secret = 'UNIQUE-SECRET-7f4db'
  const html = `<title>${secret} ist ein ausreichend langer Seitentitel</title><p>${secret}</p><a href="mailto:private-${secret}@example.com">Mail</a><a href="tel:+49111222333444">Telefon</a><a href="https://wa.me/49111222333444?text=${secret}">Chat</a><script type="application/ld+json">{"@type":"Organization","name":"${secret}"}</script>`
  const serialized = JSON.stringify(analyzeWebsiteHtml(inputFor(html)))
  for (const forbidden of [secret, 'private-', '+49111222333444', 'wa.me', '<title>', 'example.com/']) {
    assert.equal(serialized.includes(forbidden), false, `result leaked ${forbidden}`)
  }
})

test('recommendations are stable, topic-deduplicated and capped at five', () => {
  const result = analyzeWebsiteHtml(inputFor(''))
  const expanded = selectRecommendations(result.checks, { preferredLimit: 99, maxLimit: 5 })
  assert.equal(expanded.length, 5)
  assert.equal(new Set(expanded.map((item) => item.id)).size, expanded.length)
  assert.deepEqual(expanded, selectRecommendations(result.checks, { preferredLimit: 99, maxLimit: 5 }))
  assert.equal(selectRecommendations(result.checks, { preferredLimit: 0 }).length, 0)
})

test('input objects and buffers are not mutated', () => {
  const value = inputFor()
  const beforeKeys = Object.keys(value)
  const beforeBuffer = Buffer.from(value.htmlBuffer)
  analyzeWebsiteHtml(value)
  assert.deepEqual(Object.keys(value), beforeKeys)
  assert.deepEqual(value.htmlBuffer, beforeBuffer)
})

test('invalid Phase C contracts map to controlled errors', () => {
  const invalid = [
    null,
    inputFor('', { htmlBuffer: '<html></html>' }),
    inputFor('', { byteLength: 3 }),
    inputFor('', { httpStatus: 99 }),
    inputFor('', { redirectCount: 4 }),
    inputFor('', { https: 'yes' }),
    inputFor('', { requestedUrl: 'file:///secret' }),
    inputFor('', { finalOrigin: 'https://other.example' }),
    inputFor('', { contentType: 'application/json' }),
  ]
  for (const value of invalid) expectCode(() => analyzeWebsiteHtml(value), 'HTML_ANALYSIS_FAILED')
  expectCode(() => analyzeWebsiteHtml(inputFor('', { htmlBuffer: Buffer.alloc(MAX_HTML_RESPONSE_BYTES + 1), byteLength: MAX_HTML_RESPONSE_BYTES + 1 })), 'RESPONSE_TOO_LARGE')
})

test('unexpected parser failures and invalid parser results are contained', () => {
  expectCode(() => analyzeWebsiteHtml(inputFor(), { parseDocument: () => { throw new Error('parse failed') } }), 'HTML_ANALYSIS_FAILED')
  expectCode(() => analyzeWebsiteHtml(inputFor(), { parseDocument: () => ({}) }), 'HTML_ANALYSIS_FAILED')
})

test('element traversal remains bounded on large but valid documents', () => {
  const html = `<main>${'<div>Text</div>'.repeat(12000)}</main>`
  const parsed = parseHtmlBuffer(Buffer.from(html))
  const elements = findElements(parsed.document, () => true)
  assert.ok(elements.length > 10000)
  assert.ok(elements.length <= 20000)
  assert.equal(elements.some((node) => getElementName(node) === 'main'), true)
})
