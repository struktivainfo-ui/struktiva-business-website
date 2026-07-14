import test from 'node:test'
import assert from 'node:assert/strict'
import { Readable } from 'node:stream'

import { MAX_HTML_RESPONSE_BYTES } from '../api/_website-check/config.js'
import { createWebsiteCheckError, WebsiteCheckError } from '../api/_website-check/errors.js'
import { createPublicWebsiteCheckResult } from '../api/_website-check/public-result.js'
import { sendError } from '../api/_website-check/response.js'
import { runWebsiteCheck } from '../api/_website-check/run-website-check.js'
import { createWebsiteCheckHandler } from '../api/website-check.js'

const FIXED_TIME = '2026-07-14T10:00:00.000Z'
const REQUEST_ID = 'phase-d-request-id'
const SECRET = 'SECRET-PHASE-D-7f4db'

function validCheck(overrides = {}) {
  return {
    id: 'page-title',
    category: 'visibility',
    title: 'Seitentitel',
    status: 'good',
    statusLabel: 'GUT',
    summary: 'Ein klar erkennbarer Seitentitel ist vorhanden.',
    evidence: { count: 1, nonEmptyCount: 1, distinctCount: 1, lengths: [42] },
    recommendation: null,
    source: 'html',
    confidence: 'high',
    ...overrides,
  }
}

function validAnalysis(overrides = {}) {
  return {
    analysisVersion: '1',
    document: { internalOnly: SECRET },
    summary: { good: 1, review: 0, priority: 0, notDetected: 0, notCheckable: 0 },
    checks: [validCheck()],
    recommendations: [{
      id: 'recommendation-title',
      category: 'visibility',
      priority: 'medium',
      text: 'Pruefen Sie den Seitentitel.',
      checkIds: ['page-title'],
    }],
    limitations: ['Es wurde nur das empfangene HTML geprueft.'],
    internalSecret: SECRET,
    ...overrides,
  }
}

function validFetchResult({ statusCode = 200, html = '<html><title>Test</title></html>', ...overrides } = {}) {
  const buffer = Buffer.isBuffer(html) ? html : Buffer.from(html)
  return {
    requestedUrl: 'https://example.com/',
    finalUrl: `https://www.example.com/de/start?secret=${SECRET}#fragment`,
    finalOrigin: 'https://www.example.com',
    statusCode,
    headers: { 'set-cookie': `session=${SECRET}`, authorization: `Bearer ${SECRET}` },
    contentType: 'text/html',
    byteLength: buffer.length,
    redirectCount: 1,
    redirectHistory: [{ fromOrigin: 'https://example.com', toOrigin: 'https://www.example.com', path: `/secret/${SECRET}` }],
    https: true,
    httpsDowngrade: false,
    responseTimeMs: 850.4,
    html: buffer,
    dnsAddresses: ['203.0.113.99'],
    selectedAddress: '203.0.113.99',
    ...overrides,
  }
}

function dependencies({ fetchResult = validFetchResult(), analysis = validAnalysis(), fetchError, analysisError } = {}) {
  const calls = { fetch: 0, analyze: 0, analysisInput: null }
  return {
    calls,
    value: {
      fetchWebsite: async () => {
        calls.fetch += 1
        if (fetchError) throw fetchError
        return fetchResult
      },
      analyzeWebsiteHtml: (input) => {
        calls.analyze += 1
        calls.analysisInput = input
        if (analysisError) throw analysisError
        return analysis
      },
      now: () => new Date(FIXED_TIME),
    },
  }
}

function createResponse() {
  const headers = new Map()
  return {
    statusCode: 200,
    body: '',
    setHeader(name, value) { headers.set(name.toLowerCase(), value) },
    getHeader(name) { return headers.get(name.toLowerCase()) },
    end(value = '') { this.body += value },
  }
}

function createRequest({ method = 'POST', contentType = 'application/json', body = { url: 'example.com' } } = {}) {
  const rawBody = typeof body === 'string' ? body : JSON.stringify(body)
  const request = Readable.from([Buffer.from(rawBody)])
  request.method = method
  request.headers = {}
  if (contentType !== null) request.headers['content-type'] = contentType
  return request
}

function completeInternal(overrides = {}) {
  return {
    status: 'complete',
    request: { normalizedUrl: 'https://example.com/', checkedAt: FIXED_TIME },
    website: {
      reachable: true,
      httpStatus: 200,
      finalOrigin: 'https://www.example.com',
      originChanged: true,
      https: true,
      httpsDowngrade: false,
      redirectCount: 1,
      responseTimeMs: 850,
    },
    analysis: validAnalysis(),
    warnings: [],
    ...overrides,
  }
}

async function invokeHandler({ request = createRequest(), env = { WEBSITE_CHECK_ENABLED: 'true' }, run, publicResult } = {}) {
  const response = createResponse()
  const handler = createWebsiteCheckHandler({
    env,
    createRequestId: () => REQUEST_ID,
    now: () => new Date(FIXED_TIME),
    runWebsiteCheck: run || (async () => completeInternal()),
    createPublicResult: publicResult || createPublicWebsiteCheckResult,
  })
  await handler(request, response)
  return { response, payload: JSON.parse(response.body) }
}

test('orchestration connects one fetch to one analysis and passes the Buffer only internally', async () => {
  const deps = dependencies()
  const result = await runWebsiteCheck({ normalizedUrl: 'https://example.com/', dependencies: deps.value })
  assert.equal(deps.calls.fetch, 1)
  assert.equal(deps.calls.analyze, 1)
  assert.equal(Buffer.isBuffer(deps.calls.analysisInput.htmlBuffer), true)
  assert.equal(deps.calls.analysisInput.httpStatus, 200)
  assert.equal(result.status, 'complete')
  assert.equal(result.request.checkedAt, FIXED_TIME)
  assert.equal(result.website.finalOrigin, 'https://www.example.com')
  assert.equal(result.website.responseTimeMs, 850)
  assert.equal(JSON.stringify(result).includes('<html>'), false)
  assert.equal('html' in result, false)
})

test('fetch errors prevent analysis and remain stable WebsiteCheckErrors', async () => {
  const error = createWebsiteCheckError('REQUEST_TIMEOUT')
  const deps = dependencies({ fetchError: error })
  await assert.rejects(
    runWebsiteCheck({ normalizedUrl: 'https://example.com/', dependencies: deps.value }),
    (value) => value === error,
  )
  assert.equal(deps.calls.fetch, 1)
  assert.equal(deps.calls.analyze, 0)
})

test('controlled HTML analysis failures create a real partial result', async () => {
  const deps = dependencies({ analysisError: createWebsiteCheckError('HTML_ANALYSIS_FAILED') })
  const result = await runWebsiteCheck({ normalizedUrl: 'https://example.com/', dependencies: deps.value })
  assert.equal(result.status, 'partial')
  assert.equal(result.analysis, null)
  assert.equal(result.website.httpStatus, 200)
  assert.deepEqual(result.warnings, [{
    code: 'HTML_ANALYSIS_UNAVAILABLE',
    message: 'Die Website war erreichbar, konnte aber nicht vollstaendig ausgewertet werden.',
  }])
})

test('unexpected analysis failures are not disguised as partial results', async () => {
  const deps = dependencies({ analysisError: new Error(`stack ${SECRET}`) })
  await assert.rejects(
    runWebsiteCheck({ normalizedUrl: 'https://example.com/', dependencies: deps.value }),
    (error) => !(error instanceof WebsiteCheckError) && error.message.includes(SECRET),
  )
})

test('orchestration validates normalized origin input before fetching', async () => {
  for (const value of [undefined, 'example.com', 'https://example.com/path', 'https://example.com/?secret=x', 'file:///tmp/x', 'https://user:pass@example.com/']) {
    const deps = dependencies()
    await assert.rejects(
      runWebsiteCheck({ normalizedUrl: value, dependencies: deps.value }),
      (error) => error instanceof WebsiteCheckError && error.code === 'INVALID_RESPONSE',
    )
    assert.equal(deps.calls.fetch, 0)
  }
})

test('invalid fetch result structures are rejected before analysis', async () => {
  const invalidResults = [
    null,
    [],
    { ...validFetchResult(), html: 'not-a-buffer', byteLength: 12 },
    validFetchResult({ byteLength: 999 }),
    validFetchResult({ requestedUrl: 'https://other.example/' }),
    validFetchResult({ finalUrl: 'file:///secret' }),
    validFetchResult({ finalOrigin: 'https://other.example' }),
    validFetchResult({ statusCode: 99 }),
    validFetchResult({ redirectCount: 4 }),
    validFetchResult({ https: false }),
    validFetchResult({ httpsDowngrade: 'false' }),
    validFetchResult({ contentType: 'application/json' }),
    validFetchResult({ responseTimeMs: -1 }),
  ]
  for (const fetchResult of invalidResults) {
    const deps = dependencies({ fetchResult })
    await assert.rejects(
      runWebsiteCheck({ normalizedUrl: 'https://example.com/', dependencies: deps.value }),
      (error) => error instanceof WebsiteCheckError && error.code === 'INVALID_RESPONSE',
    )
    assert.equal(deps.calls.analyze, 0)
  }
})

test('oversized internal HTML remains a controlled response-size error', async () => {
  const html = Buffer.alloc(MAX_HTML_RESPONSE_BYTES + 1)
  const deps = dependencies({ fetchResult: validFetchResult({ html, byteLength: html.length }) })
  await assert.rejects(
    runWebsiteCheck({ normalizedUrl: 'https://example.com/', dependencies: deps.value }),
    (error) => error instanceof WebsiteCheckError && error.code === 'RESPONSE_TOO_LARGE',
  )
})

test('orchestration does not mutate input, dependency, fetch, Buffer or analysis objects', async () => {
  const fetchResult = validFetchResult()
  const analysis = validAnalysis()
  const deps = dependencies({ fetchResult, analysis })
  const input = { normalizedUrl: 'https://example.com/', dependencies: deps.value }
  const inputKeys = Object.keys(input)
  const dependencyKeys = Object.keys(deps.value)
  const fetchKeys = Object.keys(fetchResult)
  const bufferCopy = Buffer.from(fetchResult.html)
  const analysisCopy = JSON.stringify(analysis)
  await runWebsiteCheck(input)
  assert.deepEqual(Object.keys(input), inputKeys)
  assert.deepEqual(Object.keys(deps.value), dependencyKeys)
  assert.deepEqual(Object.keys(fetchResult), fetchKeys)
  assert.deepEqual(fetchResult.html, bufferCopy)
  assert.equal(JSON.stringify(analysis), analysisCopy)
})

test('orchestration is deterministic with identical mocks and clock', async () => {
  const first = await runWebsiteCheck({ normalizedUrl: 'https://example.com/', dependencies: dependencies().value })
  const second = await runWebsiteCheck({ normalizedUrl: 'https://example.com/', dependencies: dependencies().value })
  assert.deepEqual(first, second)
})

test('public complete result is versioned, frontend-friendly and newly allocated', () => {
  const internal = completeInternal()
  const result = createPublicWebsiteCheckResult(internal, { requestId: REQUEST_ID })
  assert.equal(result.ok, true)
  assert.equal(result.status, 'complete')
  assert.equal(result.meta.apiVersion, '1')
  assert.equal(result.meta.requestId, REQUEST_ID)
  assert.equal(result.data.request.checkedAt, FIXED_TIME)
  assert.equal(result.data.website.finalOrigin, 'https://www.example.com')
  assert.equal(result.data.analysis.analysisVersion, '1')
  assert.notEqual(result, internal)
  assert.notEqual(result.data.analysis, internal.analysis)
})

test('public partial result contains website metadata, null analysis and a fixed warning', () => {
  const internal = completeInternal({
    status: 'partial',
    analysis: null,
    warnings: [{ code: 'HTML_ANALYSIS_UNAVAILABLE', message: SECRET, stack: SECRET }],
  })
  const result = createPublicWebsiteCheckResult(internal, { requestId: REQUEST_ID })
  assert.equal(result.status, 'partial')
  assert.equal(result.data.analysis, null)
  assert.equal(result.data.warnings.length, 1)
  assert.equal(JSON.stringify(result).includes(SECRET), false)
})

test('public analysis enforces check, recommendation, limitation and string limits', () => {
  const long = 'x'.repeat(900)
  const checks = Array.from({ length: 25 }, (_, index) => validCheck({ title: long, summary: long, recommendation: long, evidence: { count: index } }))
  const recommendations = Array.from({ length: 8 }, (_, index) => ({
    id: `recommendation-${index}`, category: 'visibility', priority: 'medium', text: long, checkIds: ['page-title'],
  }))
  const result = createPublicWebsiteCheckResult(completeInternal({
    analysis: validAnalysis({ checks, recommendations, limitations: Array(12).fill(long) }),
  }), { requestId: REQUEST_ID })
  assert.equal(result.data.analysis.checks.length, 20)
  assert.equal(result.data.analysis.recommendations.length, 5)
  assert.equal(result.data.analysis.limitations.length, 10)
  assert.equal(result.data.analysis.checks[0].title.length, 120)
  assert.equal(result.data.analysis.checks[0].summary.length, 500)
  assert.equal(result.data.analysis.recommendations[0].text.length, 500)
  assert.equal(result.data.analysis.limitations[0].length, 500)
})

test('check allowlist discards unknown checks and unknown check fields', () => {
  const result = createPublicWebsiteCheckResult(completeInternal({
    analysis: validAnalysis({
      checks: [validCheck({ secret: SECRET }), validCheck({ id: 'unknown-check', evidence: { secret: SECRET } })],
    }),
  }), { requestId: REQUEST_ID })
  assert.equal(result.data.analysis.checks.length, 1)
  assert.equal('secret' in result.data.analysis.checks[0], false)
})

test('check allowlist discards unsupported status, category and source values', () => {
  const result = createPublicWebsiteCheckResult(completeInternal({
    analysis: validAnalysis({
      checks: [
        validCheck({ status: 'unknown' }),
        validCheck({ category: 'unknown' }),
        validCheck({ source: 'pagespeed' }),
      ],
    }),
  }), { requestId: REQUEST_ID })
  assert.deepEqual(result.data.analysis.checks, [])
})

test('evidence allowlist retains only explicitly typed fields for each known check', () => {
  const result = createPublicWebsiteCheckResult(completeInternal({
    analysis: validAnalysis({
      checks: [validCheck({ evidence: {
        count: 1,
        nonEmptyCount: 1,
        distinctCount: 1,
        lengths: [42, -1, 100001],
        url: `https://example.com/?secret=${SECRET}`,
        email: `person-${SECRET}@example.com`,
        nested: { secret: SECRET },
        buffer: Buffer.from(SECRET),
      } })],
    }),
  }), { requestId: REQUEST_ID })
  assert.deepEqual(result.data.analysis.checks[0].evidence, {
    count: 1, nonEmptyCount: 1, distinctCount: 1, lengths: [42],
  })
})

test('public result rejects invalid status, categories, sources and structural fields', () => {
  const invalid = [
    completeInternal({ status: 'unknown' }),
    completeInternal({ request: { normalizedUrl: 'https://example.com/path', checkedAt: FIXED_TIME } }),
    completeInternal({ request: { normalizedUrl: 'https://example.com/', checkedAt: 'invalid' } }),
    completeInternal({ website: { ...completeInternal().website, finalOrigin: 'https://example.com/path' } }),
    completeInternal({ website: { ...completeInternal().website, https: false } }),
    completeInternal({ analysis: validAnalysis({ checks: null }) }),
    completeInternal({ analysis: validAnalysis({ analysisVersion: '2' }) }),
  ]
  for (const value of invalid) assert.throws(
    () => createPublicWebsiteCheckResult(value, { requestId: REQUEST_ID }),
    (error) => error instanceof WebsiteCheckError,
  )
})

test('redaction removes every prohibited internal value from serialized public JSON', async () => {
  const analysis = validAnalysis({
    fullText: `Vollstaendiger Seitentext ${SECRET}`,
    jsonLd: { name: SECRET },
    checks: [validCheck({
      secret: SECRET,
      evidence: {
        count: 1, nonEmptyCount: 1, distinctCount: 1, lengths: [20],
        canonicalUrl: `https://user:pass@example.com/path?secret=${SECRET}`,
        phone: '+49 111 22233344', email: `person-${SECRET}@example.com`, whatsapp: '4911122233344',
      },
    })],
  })
  const deps = dependencies({ analysis })
  const internal = await runWebsiteCheck({ normalizedUrl: 'https://example.com/', dependencies: deps.value })
  const serialized = JSON.stringify(createPublicWebsiteCheckResult(internal, { requestId: REQUEST_ID }))
  for (const forbidden of [
    SECRET, '<html>', 'set-cookie', 'authorization', '203.0.113.99', '/de/start', 'secret=',
    'user:pass', '+49 111 22233344', 'person-', '4911122233344', 'C:\\private\\file.js',
    'ECONNRESET', 'PAGESPEED_API_KEY', 'session=',
  ]) assert.equal(serialized.includes(forbidden), false, `leaked ${forbidden}`)
})

test('foreign website HTTP statuses remain API data and never become the API status', async () => {
  for (const statusCode of [200, 403, 404, 429, 500]) {
    const deps = dependencies({ fetchResult: validFetchResult({ statusCode }) })
    const internal = await runWebsiteCheck({ normalizedUrl: 'https://example.com/', dependencies: deps.value })
    const { response, payload } = await invokeHandler({ run: async () => internal })
    assert.equal(response.statusCode, 200)
    assert.equal(payload.status, 'complete')
    assert.equal(payload.data.website.httpStatus, statusCode)
  }
})

const ERROR_STATUSES = {
  METHOD_NOT_ALLOWED: 405,
  SERVICE_NOT_READY: 503,
  INVALID_CONTENT_TYPE: 415,
  REQUEST_TOO_LARGE: 413,
  INVALID_JSON: 400,
  INVALID_REQUEST: 400,
  INVALID_URL: 400,
  UNSUPPORTED_PROTOCOL: 400,
  BLOCKED_DESTINATION: 400,
  DNS_LOOKUP_FAILED: 502,
  WEBSITE_UNREACHABLE: 502,
  CONNECTION_FAILED: 502,
  REQUEST_TIMEOUT: 504,
  TOO_MANY_REDIRECTS: 502,
  REDIRECT_LOOP: 502,
  RESPONSE_TOO_LARGE: 422,
  HTML_NOT_AVAILABLE: 422,
  INVALID_RESPONSE: 502,
  UNSUPPORTED_CONTENT_ENCODING: 422,
  TLS_VALIDATION_FAILED: 502,
  HTML_ANALYSIS_FAILED: 422,
  CHECK_NOT_IMPLEMENTED: 501,
  INTERNAL_ERROR: 500,
}

for (const [code, statusCode] of Object.entries(ERROR_STATUSES)) {
  test(`public error mapping keeps ${code} safe and versioned`, () => {
    const response = createResponse()
    const error = createWebsiteCheckError(code)
    sendError(response, error, REQUEST_ID)
    const payload = JSON.parse(response.body)
    assert.equal(response.statusCode, statusCode)
    assert.equal(payload.error.code, code)
    assert.equal(typeof payload.error.message, 'string')
    assert.ok(payload.error.message.length > 0)
    assert.deepEqual(payload.meta, { apiVersion: '1', requestId: REQUEST_ID })
    assert.equal(response.getHeader('cache-control'), 'no-store')
    assert.equal(response.getHeader('x-content-type-options'), 'nosniff')
    assert.equal(response.body.includes(SECRET), false)
    assert.equal(response.body.includes('stack'), false)
  })
}

test('feature flag enables orchestration only for the exact string true', async () => {
  for (const value of [undefined, '', 'false', 'TRUE', '1', 'yes']) {
    let calls = 0
    const { response, payload } = await invokeHandler({
      env: value === undefined ? {} : { WEBSITE_CHECK_ENABLED: value },
      request: createRequest({ contentType: null, body: '{broken' }),
      run: async () => { calls += 1; return completeInternal() },
    })
    assert.equal(response.statusCode, 503)
    assert.equal(payload.error.code, 'SERVICE_NOT_READY')
    assert.equal(calls, 0)
  }
  let enabledCalls = 0
  const enabled = await invokeHandler({ run: async () => { enabledCalls += 1; return completeInternal() } })
  assert.equal(enabled.response.statusCode, 200)
  assert.equal(enabledCalls, 1)
})

test('handler passes only the normalized origin and fixed dependencies to orchestration', async () => {
  let received
  const { response } = await invokeHandler({
    request: createRequest({ body: { url: `https://EXAMPLE.com/path?secret=${SECRET}#fragment` } }),
    run: async (input) => { received = input; return completeInternal() },
  })
  assert.equal(response.statusCode, 200)
  assert.equal(received.normalizedUrl, 'https://example.com/')
  assert.equal(received.requestId, REQUEST_ID)
  assert.equal(typeof received.dependencies.now, 'function')
  assert.equal(Object.isFrozen(received.dependencies), true)
})

test('handler returns complete and partial pipeline results with HTTP 200', async () => {
  const complete = await invokeHandler()
  assert.equal(complete.response.statusCode, 200)
  assert.equal(complete.payload.status, 'complete')
  const partial = await invokeHandler({ run: async () => completeInternal({
    status: 'partial', analysis: null, warnings: [{ code: 'HTML_ANALYSIS_UNAVAILABLE' }],
  }) })
  assert.equal(partial.response.statusCode, 200)
  assert.equal(partial.payload.status, 'partial')
  assert.equal(partial.payload.data.analysis, null)
})

test('handler maps timeout and unexpected errors without leaking causes', async () => {
  const timeout = await invokeHandler({ run: async () => { throw createWebsiteCheckError('REQUEST_TIMEOUT') } })
  assert.equal(timeout.response.statusCode, 504)
  assert.equal(timeout.payload.error.code, 'REQUEST_TIMEOUT')
  const internal = await invokeHandler({ run: async () => { throw new Error(`C:\\secret\\file.js ${SECRET} ECONNRESET`) } })
  assert.equal(internal.response.statusCode, 500)
  assert.equal(internal.payload.error.code, 'INTERNAL_ERROR')
  assert.equal(internal.response.body.includes(SECRET), false)
  assert.equal(internal.response.body.includes('ECONNRESET'), false)
})

test('handler preserves method, content type, JSON, schema and blocked URL protections', async () => {
  const cases = [
    [createRequest({ method: 'GET' }), 405, 'METHOD_NOT_ALLOWED'],
    [createRequest({ contentType: null }), 415, 'INVALID_CONTENT_TYPE'],
    [createRequest({ body: '{broken' }), 400, 'INVALID_JSON'],
    [createRequest({ body: {} }), 400, 'INVALID_REQUEST'],
    [createRequest({ body: { url: 'http://127.0.0.1' } }), 400, 'BLOCKED_DESTINATION'],
  ]
  for (const [request, statusCode, code] of cases) {
    const { response, payload } = await invokeHandler({ request })
    assert.equal(response.statusCode, statusCode)
    assert.equal(payload.error.code, code)
  }
})

test('all handler responses include security headers and no permissive CORS header', async () => {
  for (const options of [{}, { request: createRequest({ method: 'GET' }) }, { env: {} }]) {
    const { response } = await invokeHandler(options)
    assert.equal(response.getHeader('content-type'), 'application/json; charset=utf-8')
    assert.equal(response.getHeader('cache-control'), 'no-store')
    assert.equal(response.getHeader('x-content-type-options'), 'nosniff')
    assert.equal(response.getHeader('access-control-allow-origin'), undefined)
  }
})

test('method errors retain Allow POST and never expose foreign data in headers', async () => {
  const { response } = await invokeHandler({ request: createRequest({ method: 'GET' }) })
  assert.equal(response.getHeader('allow'), 'POST')
  const serializedHeaders = JSON.stringify([...['allow', 'content-type', 'cache-control', 'x-content-type-options'].map((name) => [name, response.getHeader(name)])])
  assert.equal(serializedHeaders.includes(SECRET), false)
})
