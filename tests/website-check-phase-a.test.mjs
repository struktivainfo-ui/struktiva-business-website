import test from 'node:test'
import assert from 'node:assert/strict'
import { Readable } from 'node:stream'

import { MAX_REDIRECTS } from '../api/_website-check/config.js'
import {
  createBoundDestination,
  evaluateDestination,
  evaluateDnsResults,
  evaluateRedirectTarget,
} from '../api/_website-check/destination-policy.js'
import { WebsiteCheckError } from '../api/_website-check/errors.js'
import { classifyIpAddress, isPublicIpAddress } from '../api/_website-check/ip-policy.js'
import { normalizeWebsiteUrl } from '../api/_website-check/normalize-url.js'
import { createWebsiteCheckHandler } from '../api/website-check.js'

function expectCode(fn, code) {
  assert.throws(fn, (error) => error instanceof WebsiteCheckError && error.code === code)
}

function createRequest({ method = 'POST', contentType = 'application/json', rawBody, contentLength } = {}) {
  const req = Readable.from(rawBody === undefined ? [] : [Buffer.from(rawBody)])
  req.method = method
  req.headers = {}
  if (contentType !== null) req.headers['content-type'] = contentType
  if (contentLength !== undefined) req.headers['content-length'] = String(contentLength)
  return req
}

function createResponse() {
  const headers = new Map()
  return {
    statusCode: 200,
    body: '',
    setHeader(name, value) {
      headers.set(name.toLowerCase(), value)
    },
    getHeader(name) {
      return headers.get(name.toLowerCase())
    },
    end(value = '') {
      this.body += value
    },
  }
}

async function callHandler(request, env = { WEBSITE_CHECK_ENABLED: 'true' }) {
  const response = createResponse()
  const handler = createWebsiteCheckHandler({
    env,
    createRequestId: () => 'test-request-id',
    runWebsiteCheck: async ({ normalizedUrl }) => Object.freeze({ normalizedUrl }),
    createPublicResult: (result, { requestId }) => ({
      ok: true,
      status: 'complete',
      data: { normalizedUrl: result.normalizedUrl },
      meta: { apiVersion: '1', requestId },
    }),
  })
  await handler(request, response)
  return { response, payload: JSON.parse(response.body) }
}

for (const method of ['GET', 'PUT']) {
  test(`${method} is rejected with 405`, async () => {
    const { response, payload } = await callHandler(createRequest({ method }))
    assert.equal(response.statusCode, 405)
    assert.equal(response.getHeader('allow'), 'POST')
    assert.equal(payload.error.code, 'METHOD_NOT_ALLOWED')
  })
}

test('disabled feature returns 503 before request parsing', async () => {
  const { response, payload } = await callHandler(createRequest({ contentType: null }), {})
  assert.equal(response.statusCode, 503)
  assert.equal(payload.error.code, 'SERVICE_NOT_READY')
})

for (const value of ['TRUE', '1', 'yes', 'false']) {
  test(`feature flag value ${value} remains disabled`, async () => {
    const { response, payload } = await callHandler(createRequest({ rawBody: '{}' }), {
      WEBSITE_CHECK_ENABLED: value,
    })
    assert.equal(response.statusCode, 503)
    assert.equal(payload.error.code, 'SERVICE_NOT_READY')
  })
}

for (const contentType of [null, 'text/plain', 'application/x-www-form-urlencoded']) {
  test(`content type ${String(contentType)} is rejected`, async () => {
    const { response, payload } = await callHandler(createRequest({ contentType, rawBody: '{}' }))
    assert.equal(response.statusCode, 415)
    assert.equal(payload.error.code, 'INVALID_CONTENT_TYPE')
  })
}

test('application/json with charset is accepted', async () => {
  const { response, payload } = await callHandler(createRequest({
    contentType: 'application/json; charset=utf-8',
    rawBody: JSON.stringify({ url: 'example.com' }),
  }))
  assert.equal(response.statusCode, 200)
  assert.equal(payload.status, 'complete')
  assert.equal(payload.data.normalizedUrl, 'https://example.com/')
})

test('invalid JSON is rejected', async () => {
  const { response, payload } = await callHandler(createRequest({ rawBody: '{broken' }))
  assert.equal(response.statusCode, 400)
  assert.equal(payload.error.code, 'INVALID_JSON')
})

const invalidRequests = [
  ['array body', []],
  ['missing url', {}],
  ['numeric url', { url: 42 }],
  ['empty url', { url: '   ' }],
  ['extra field', { url: 'example.com', email: 'test@example.com' }],
  ['overlong url', { url: `https://${'a'.repeat(2049)}.de` }],
]

for (const [name, body] of invalidRequests) {
  test(`${name} is rejected by the request schema`, async () => {
    const { response, payload } = await callHandler(createRequest({ rawBody: JSON.stringify(body) }))
    assert.equal(response.statusCode, 400)
    assert.equal(payload.error.code, 'INVALID_REQUEST')
  })
}

test('declared body over 4096 bytes is rejected before reading', async () => {
  const request = createRequest({ rawBody: '{}', contentLength: 4097 })
  const { response, payload } = await callHandler(request)
  assert.equal(response.statusCode, 413)
  assert.equal(payload.error.code, 'REQUEST_TOO_LARGE')
})

test('streamed body over 4096 bytes is rejected while reading', async () => {
  const request = createRequest({ rawBody: 'x'.repeat(4097) })
  const { response, payload } = await callHandler(request)
  assert.equal(response.statusCode, 413)
  assert.equal(payload.error.code, 'REQUEST_TOO_LARGE')
})

test('handler errors are versioned and do not expose internals', async () => {
  const { response, payload } = await callHandler(createRequest({ rawBody: '{broken' }))
  assert.equal(response.getHeader('cache-control'), 'no-store')
  assert.deepEqual(payload.meta, { apiVersion: '1', requestId: 'test-request-id' })
  assert.equal('stack' in payload.error, false)
  assert.equal(response.body.includes('C:\\'), false)
})

const validUrls = [
  ['example.com', 'https://example.com/'],
  ['https://example.com', 'https://example.com/'],
  ['http://example.com', 'http://example.com/'],
  ['https://www.example.com', 'https://www.example.com/'],
  ['https://example.com/unterseite', 'https://example.com/'],
  ['https://example.com/?utm_source=test', 'https://example.com/'],
  ['https://EXAMPLE.com/#kontakt', 'https://example.com/'],
  ['https://buecher.de:443/path', 'https://buecher.de/'],
  ['https://bücher.de/angebot', 'https://xn--bcher-kva.de/'],
]

for (const [input, expected] of validUrls) {
  test(`normalizes ${input}`, () => {
    assert.equal(evaluateDestination(input).normalizedUrl, expected)
  })
}

const unsupportedProtocols = [
  'file:///etc/passwd',
  'ftp://example.com',
  'javascript:alert(1)',
  'data:text/plain,test',
  'gopher://example.com',
  'ws://example.com',
  'wss://example.com',
  'mailto:test@example.com',
]

for (const input of unsupportedProtocols) {
  test(`rejects unsupported protocol in ${input}`, () => {
    expectCode(() => evaluateDestination(input), 'UNSUPPORTED_PROTOCOL')
  })
}

const blockedDestinations = [
  'https://user:pass@example.com',
  'http://localhost',
  'http://localhost.localdomain',
  'http://intranet',
  'http://example.local',
  'http://example.internal',
  'http://example.localhost',
  'http://example.home',
  'http://example.lan',
  'http://127.0.0.1',
  'http://2130706433',
  'http://0x7f000001',
  'http://0177.0.0.1',
  'http://127.1',
  'http://0.0.0.0',
  'http://10.0.0.1',
  'http://100.64.0.1',
  'http://169.254.169.254',
  'http://172.16.0.1',
  'http://192.168.0.1',
  'http://198.18.0.1',
  'http://192.0.2.1',
  'http://198.51.100.1',
  'http://203.0.113.1',
  'http://224.0.0.1',
  'http://240.0.0.1',
  'http://[::1]',
  'http://[::]',
  'http://[fc00::1]',
  'http://[fe80::1]',
  'http://[2001:db8::1]',
  'http://[::ffff:127.0.0.1]',
  'http://example.com:3000',
  'https://example.com:8443',
  'http://example.com:443',
  'https://example.com:80',
]

for (const input of blockedDestinations) {
  test(`blocks destination ${input}`, () => {
    expectCode(() => evaluateDestination(input), 'BLOCKED_DESTINATION')
  })
}

test('rejects protocol-relative and backslash input as ambiguous', () => {
  expectCode(() => normalizeWebsiteUrl('//example.com'), 'INVALID_URL')
  expectCode(() => normalizeWebsiteUrl('https:\\example.com'), 'INVALID_URL')
})

const blockedIpv4 = [
  '0.1.2.3', '10.0.0.1', '100.64.0.1', '127.0.0.1', '169.254.169.254',
  '172.16.0.1', '192.0.0.1', '192.0.2.1', '192.88.99.1', '192.168.0.1',
  '198.18.0.1', '198.51.100.1', '203.0.113.1', '224.0.0.1', '240.0.0.1',
]

for (const address of blockedIpv4) {
  test(`classifies blocked IPv4 ${address}`, () => {
    assert.equal(isPublicIpAddress(address), false)
  })
}

const blockedIpv6 = [
  '::', '::1', '100::1', '64:ff9b:1::1', '2001:2::1', '2001:db8::1',
  'fc00::1', 'fd00::1', 'fe80::1', 'ff00::1', '::ffff:127.0.0.1',
  '64:ff9b::7f00:1', 'fe80::1%eth0',
]

for (const address of blockedIpv6) {
  test(`classifies blocked IPv6 ${address}`, () => {
    assert.equal(isPublicIpAddress(address), false)
  })
}

test('allows clearly public IPv4 and IPv6 addresses', () => {
  assert.equal(isPublicIpAddress('93.184.216.34'), true)
  assert.equal(isPublicIpAddress('2606:2800:220:1:248:1893:25c8:1946'), true)
  assert.equal(isPublicIpAddress('::ffff:93.184.216.34'), true)
  assert.equal(isPublicIpAddress('64:ff9b::5db8:d822'), true)
})

test('IP classification is numeric and immutable', () => {
  const result = classifyIpAddress('::ffff:127.0.0.1')
  assert.equal(result.embeddedIpv4, '127.0.0.1')
  assert.equal(result.isPublic, false)
  assert.equal(Object.isFrozen(result), true)
})

test('DNS policy allows public IPv4 only', () => {
  assert.deepEqual(evaluateDnsResults([{ address: '93.184.216.34', family: 4 }]), [
    { address: '93.184.216.34', family: 4 },
  ])
})

test('DNS policy allows public IPv6 only', () => {
  assert.equal(evaluateDnsResults([
    { address: '2606:2800:220:1:248:1893:25c8:1946', family: 6 },
  ]).length, 1)
})

test('DNS policy allows public dual stack', () => {
  assert.equal(evaluateDnsResults([
    { address: '93.184.216.34', family: 4 },
    { address: '2606:2800:220:1:248:1893:25c8:1946', family: 6 },
  ]).length, 2)
})

test('DNS policy rejects mixed public and private answers', () => {
  expectCode(() => evaluateDnsResults([
    { address: '93.184.216.34', family: 4 },
    { address: '127.0.0.1', family: 4 },
  ]), 'BLOCKED_DESTINATION')
})

test('DNS policy rejects private-only answers', () => {
  expectCode(() => evaluateDnsResults([{ address: '10.0.0.1', family: 4 }]), 'BLOCKED_DESTINATION')
})

test('DNS policy rejects malformed and family-mismatched answers', () => {
  expectCode(() => evaluateDnsResults([{ address: 'not-an-ip', family: 4 }]), 'BLOCKED_DESTINATION')
  expectCode(() => evaluateDnsResults([{ address: '93.184.216.34', family: 6 }]), 'BLOCKED_DESTINATION')
})

test('DNS policy rejects an empty result', () => {
  expectCode(() => evaluateDnsResults([]), 'DNS_LOOKUP_FAILED')
})

test('DNS policy rejects mapped private IPv6', () => {
  expectCode(() => evaluateDnsResults([{ address: '::ffff:127.0.0.1', family: 6 }]), 'BLOCKED_DESTINATION')
})

test('DNS policy deduplicates and freezes public answers', () => {
  const result = evaluateDnsResults([
    { address: '93.184.216.34', family: 4 },
    { address: '93.184.216.34', family: 4 },
  ])
  assert.equal(result.length, 1)
  assert.equal(Object.isFrozen(result), true)
  assert.equal(Object.isFrozen(result[0]), true)
})

test('bound destination carries the approved immutable decision', () => {
  const destination = evaluateDestination('example.com')
  const result = createBoundDestination(destination, [
    { address: '93.184.216.34', family: 4 },
  ], { checkedAt: new Date('2026-07-14T12:00:00.000Z') })
  assert.equal(result.normalizedUrl, 'https://example.com/')
  assert.equal(result.selectedAddress.address, '93.184.216.34')
  assert.equal(result.checkedAt, '2026-07-14T12:00:00.000Z')
  assert.equal(Object.isFrozen(result), true)
})

test('relative redirect is resolved with path and query preserved', () => {
  const result = evaluateRedirectTarget({
    currentUrl: 'https://example.com/',
    location: '/de/?source=test#top',
    redirectCount: 0,
    resolvedAddresses: [{ address: '93.184.216.34', family: 4 }],
  })
  assert.equal(result.destination.normalizedUrl, 'https://example.com/de/?source=test')
  assert.equal(result.redirectCount, 1)
})

test('absolute redirect to another public domain preserves its fetch path', () => {
  const result = evaluateRedirectTarget({
    currentUrl: 'https://example.com/',
    location: 'https://www.example.org/path',
    redirectCount: 1,
    resolvedAddresses: [{ address: '93.184.216.34', family: 4 }],
  })
  assert.equal(result.destination.normalizedUrl, 'https://www.example.org/path')
  assert.equal(result.redirectCount, 2)
})

const blockedRedirects = [
  'http://localhost/',
  'http://127.0.0.1/',
  'http://[::1]/',
  'https://example.com:8443/',
  'https://user:pass@example.com/',
  'ftp://example.com/',
]

for (const location of blockedRedirects) {
  test(`redirect target ${location} is rejected`, () => {
    assert.throws(() => evaluateRedirectTarget({
      currentUrl: 'https://example.com/', location, redirectCount: 0,
    }), WebsiteCheckError)
  })
}

test('a fourth redirect is rejected', () => {
  assert.equal(MAX_REDIRECTS, 3)
  expectCode(() => evaluateRedirectTarget({
    currentUrl: 'https://example.com/', location: '/next', redirectCount: 3,
  }), 'TOO_MANY_REDIRECTS')
})
