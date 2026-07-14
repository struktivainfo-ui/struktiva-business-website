import test from 'node:test'
import assert from 'node:assert/strict'
import { EventEmitter } from 'node:events'

import {
  CONNECT_TIMEOUT_MS,
  MAX_HTML_RESPONSE_BYTES,
  REQUEST_TIMEOUT_MS,
  TOTAL_FETCH_TIMEOUT_MS,
} from '../api/_website-check/config.js'
import {
  createBoundDestination,
  evaluateDestination,
  evaluateFetchDestination,
} from '../api/_website-check/destination-policy.js'
import { createPinnedLookup, resolveDestination } from '../api/_website-check/dns-resolver.js'
import { WebsiteCheckError } from '../api/_website-check/errors.js'
import { fetchWebsite } from '../api/_website-check/fetch-website.js'
import { createRequestOptions, requestHtml } from '../api/_website-check/http-client.js'

const PUBLIC_V4 = '93.184.216.34'
const PUBLIC_V6 = '2606:2800:220:1:248:1893:25c8:1946'

function expectCode(fn, code) {
  assert.throws(fn, (error) => error instanceof WebsiteCheckError && error.code === code)
}

async function expectRejectCode(promise, code) {
  await assert.rejects(promise, (error) => error instanceof WebsiteCheckError && error.code === code)
}

function boundDestination(url = 'https://example.com/', address = PUBLIC_V4, family = 4) {
  return createBoundDestination(evaluateFetchDestination(url), [{ address, family }], {
    checkedAt: new Date('2026-07-14T12:00:00.000Z'),
  })
}

function createIncomingResponse({ statusCode = 200, headers = { 'content-type': 'text/html' }, chunks = ['<html></html>'] } = {}) {
  const response = new EventEmitter()
  response.statusCode = statusCode
  response.headers = headers
  response.destroyed = false
  response.resumed = false
  response.destroy = () => { response.destroyed = true }
  response.resume = () => { response.resumed = true }
  response.emitBody = () => {
    if (response.resumed || response.destroyed) return
    for (const chunk of chunks) {
      response.emit('data', Buffer.from(chunk))
      if (response.destroyed) return
    }
    response.emit('end')
  }
  return response
}

function createMockRequestFactory(scenarios, captures = []) {
  let index = 0
  return ({ protocol, options, onResponse }) => {
    const scenario = scenarios[index++] || {}
    const request = new EventEmitter()
    request.destroyed = false
    request.destroy = () => { request.destroyed = true }
    request.end = () => {
      captures.push({ protocol, options, request, scenario })
      if (scenario.socket !== false) {
        const socket = new EventEmitter()
        socket.connecting = scenario.connected === false
        request.emit('socket', socket)
        if (scenario.connected === false && scenario.connectLater) {
          queueMicrotask(() => socket.emit(protocol === 'https:' ? 'secureConnect' : 'connect'))
        }
      }
      if (scenario.error) return queueMicrotask(() => request.emit('error', scenario.error))
      if (scenario.noResponse) return
      const response = createIncomingResponse(scenario)
      scenario.response = response
      queueMicrotask(() => {
        onResponse(response)
        queueMicrotask(() => response.emitBody())
      })
    }
    return request
  }
}

function mockFetchResponse(statusCode, { location, html = '<html></html>', contentType = 'text/html' } = {}) {
  return Object.freeze({
    statusCode,
    headers: Object.freeze(location ? { location } : { 'content-type': contentType }),
    contentType: location ? null : contentType,
    byteLength: location ? 0 : Buffer.byteLength(html),
    html: location ? null : Buffer.from(html),
    responseTimeMs: 12,
  })
}

test('Phase B limits are centrally configured', () => {
  assert.equal(CONNECT_TIMEOUT_MS, 3000)
  assert.equal(REQUEST_TIMEOUT_MS, 5000)
  assert.equal(TOTAL_FETCH_TIMEOUT_MS, 10000)
  assert.equal(MAX_HTML_RESPONSE_BYTES, 1.5 * 1024 * 1024)
})

const dnsCases = [
  ['public IPv4', [{ address: PUBLIC_V4, family: 4 }]],
  ['public IPv6', [{ address: PUBLIC_V6, family: 6 }]],
  ['public dual stack', [{ address: PUBLIC_V4, family: 4 }, { address: PUBLIC_V6, family: 6 }]],
]

for (const [name, records] of dnsCases) {
  test(`resolver accepts ${name}`, async () => {
    const result = await resolveDestination(evaluateDestination('example.com'), {
      lookup: async () => records,
      now: () => new Date('2026-07-14T12:00:00.000Z'),
    })
    assert.deepEqual(result.approvedAddresses, records)
    assert.deepEqual(result.selectedAddress, records[0])
    assert.equal(Object.isFrozen(result), true)
  })
}

test('resolver maps lookup failures to a stable code', async () => {
  await expectRejectCode(resolveDestination(evaluateDestination('example.com'), {
    lookup: async () => { throw Object.assign(new Error('raw resolver detail'), { code: 'ENOTFOUND' }) },
  }), 'DNS_LOOKUP_FAILED')
})

for (const [name, records, code] of [
  ['empty answers', [], 'DNS_LOOKUP_FAILED'],
  ['invalid answers', [{ address: 'invalid', family: 4 }], 'BLOCKED_DESTINATION'],
  ['mixed answers', [{ address: PUBLIC_V4, family: 4 }, { address: '127.0.0.1', family: 4 }], 'BLOCKED_DESTINATION'],
]) {
  test(`resolver rejects ${name}`, async () => {
    await expectRejectCode(resolveDestination(evaluateDestination('example.com'), {
      lookup: async () => records,
    }), code)
  })
}

test('resolver deduplicates answers before selecting an address', async () => {
  const result = await resolveDestination(evaluateDestination('example.com'), {
    lookup: async () => [
      { address: PUBLIC_V4, family: 4 },
      { address: PUBLIC_V4, family: 4 },
    ],
  })
  assert.equal(result.approvedAddresses.length, 1)
})

test('literal IPv4 skips DNS while still applying the IP policy', async () => {
  let lookupCalls = 0
  const result = await resolveDestination(evaluateDestination(`https://${PUBLIC_V4}/`), {
    lookup: async () => { lookupCalls += 1; return [] },
  })
  assert.equal(lookupCalls, 0)
  assert.equal(result.selectedAddress.address, PUBLIC_V4)
  expectCode(() => evaluateDestination('http://127.0.0.1/'), 'BLOCKED_DESTINATION')
})

test('literal IPv6 skips DNS and remains pinned to family 6', async () => {
  let lookupCalls = 0
  const result = await resolveDestination(evaluateDestination(`https://[${PUBLIC_V6}]/`), {
    lookup: async () => { lookupCalls += 1; return [] },
  })
  assert.equal(lookupCalls, 0)
  assert.equal(result.selectedAddress.address, PUBLIC_V6)
  assert.equal(result.selectedAddress.family, 6)
})

test('selected address remains attached to the bound destination', async () => {
  const result = await resolveDestination(evaluateDestination('example.com'), {
    lookup: async () => [{ address: PUBLIC_V4, family: 4 }, { address: PUBLIC_V6, family: 6 }],
    selectAddress: (addresses) => addresses[1],
  })
  assert.equal(result.selectedAddress.address, PUBLIC_V6)
  assert.equal(result.selectedAddress.family, 6)
})

for (const [family, address] of [[4, PUBLIC_V4], [6, PUBLIC_V6]]) {
  test(`pinned lookup returns only the selected IPv${family} address`, async () => {
    const bound = boundDestination('https://example.com/', address, family)
    const lookup = createPinnedLookup(bound)
    const result = await new Promise((resolve, reject) => {
      lookup('example.com', {}, (error, selectedAddress, selectedFamily) => {
        if (error) reject(error)
        else resolve({ selectedAddress, selectedFamily })
      })
    })
    assert.deepEqual(result, { selectedAddress: address, selectedFamily: family })
  })
}

test('pinned lookup performs no resolver call and rejects a different hostname', async () => {
  const lookup = createPinnedLookup(boundDestination())
  await expectRejectCode(new Promise((resolve, reject) => {
    lookup('other.example', {}, (error) => error ? reject(error) : resolve())
  }), 'BLOCKED_DESTINATION')
})

test('HTTPS request options preserve hostname, Host, SNI, TLS validation and pinning', async () => {
  const bound = boundDestination('https://example.com/path?x=1')
  const options = createRequestOptions(bound, 'https://example.com/path?x=1')
  assert.equal(options.hostname, 'example.com')
  assert.equal(options.headers.Host, 'example.com')
  assert.equal(options.servername, 'example.com')
  assert.equal(options.rejectUnauthorized, true)
  assert.equal(options.agent, false)
  assert.equal(options.method, 'GET')
  assert.equal(options.port, 443)
  assert.equal(options.path, '/path?x=1')
  const pinned = await new Promise((resolve, reject) => options.lookup('example.com', {}, (error, address, family) => {
    if (error) reject(error)
    else resolve({ address, family })
  }))
  assert.deepEqual(pinned, { address: PUBLIC_V4, family: 4 })
})

test('HTTP request options use port 80 and fixed stateless headers', () => {
  const options = createRequestOptions(boundDestination('http://example.com/'), 'http://example.com/')
  assert.equal(options.port, 80)
  assert.equal(options.servername, undefined)
  assert.deepEqual(options.headers, {
    'User-Agent': 'STRUKTIVA-Website-Check/1.0',
    Accept: 'text/html, application/xhtml+xml',
    'Accept-Language': 'de-DE,de;q=0.9,en;q=0.7',
    'Accept-Encoding': 'identity',
    Connection: 'close',
    Host: 'example.com',
  })
  assert.equal('Cookie' in options.headers, false)
  assert.equal('Authorization' in options.headers, false)
  assert.equal('Referer' in options.headers, false)
})

test('request options reject a target that differs from the bound destination', () => {
  expectCode(() => createRequestOptions(boundDestination(), 'https://other.example/'), 'BLOCKED_DESTINATION')
})

test('small HTML response is returned as an internal Buffer', async () => {
  const captures = []
  const result = await requestHtml(boundDestination(), 'https://example.com/', {
    requestFactory: createMockRequestFactory([{ chunks: ['<html>', '</html>'] }], captures),
  })
  assert.equal(result.statusCode, 200)
  assert.equal(result.html.toString(), '<html></html>')
  assert.equal(Buffer.isBuffer(result.html), true)
  assert.equal(captures[0].request.destroyed, false)
})

for (const [name, contentLength] of [
  ['below', MAX_HTML_RESPONSE_BYTES - 1],
  ['exactly at', MAX_HTML_RESPONSE_BYTES],
]) {
  test(`Content-Length ${name} the limit is accepted`, async () => {
    const result = await requestHtml(boundDestination(), 'https://example.com/', {
      requestFactory: createMockRequestFactory([{
        headers: { 'content-type': 'text/html', 'content-length': String(contentLength) },
        chunks: ['ok'],
      }]),
    })
    assert.equal(result.html.toString(), 'ok')
  })
}

test('Content-Length over the limit aborts before body buffering', async () => {
  const scenario = {
    headers: { 'content-type': 'text/html', 'content-length': String(MAX_HTML_RESPONSE_BYTES + 1) },
    chunks: ['must-not-be-read'],
  }
  await expectRejectCode(requestHtml(boundDestination(), 'https://example.com/', {
    requestFactory: createMockRequestFactory([scenario]),
  }), 'RESPONSE_TOO_LARGE')
  assert.equal(scenario.response.destroyed, true)
})

test('chunked HTML below the limit is accepted', async () => {
  const result = await requestHtml(boundDestination(), 'https://example.com/', {
    maxResponseBytes: 5,
    requestFactory: createMockRequestFactory([{ chunks: ['12', '345'] }]),
  })
  assert.equal(result.byteLength, 5)
})

test('chunked HTML is aborted immediately on the first byte over the limit', async () => {
  const captures = []
  const scenario = { chunks: ['123', '456', 'must-not-be-read'] }
  await expectRejectCode(requestHtml(boundDestination(), 'https://example.com/', {
    maxResponseBytes: 5,
    requestFactory: createMockRequestFactory([scenario], captures),
  }), 'RESPONSE_TOO_LARGE')
  assert.equal(scenario.response.destroyed, true)
  assert.equal(captures[0].request.destroyed, true)
})

for (const contentType of ['text/html', 'text/html; charset=utf-8', 'application/xhtml+xml']) {
  test(`accepts Content-Type ${contentType}`, async () => {
    const result = await requestHtml(boundDestination(), 'https://example.com/', {
      requestFactory: createMockRequestFactory([{ headers: { 'content-type': contentType } }]),
    })
    assert.equal(Buffer.isBuffer(result.html), true)
  })
}

for (const contentType of [null, 'application/pdf', 'application/json', 'image/png', 'text/css', 'application/javascript']) {
  test(`rejects Content-Type ${String(contentType)}`, async () => {
    const headers = contentType === null ? {} : { 'content-type': contentType }
    await expectRejectCode(requestHtml(boundDestination(), 'https://example.com/', {
      requestFactory: createMockRequestFactory([{ headers }]),
    }), 'HTML_NOT_AVAILABLE')
  })
}

for (const encoding of [undefined, 'identity']) {
  test(`accepts Content-Encoding ${String(encoding)}`, async () => {
    const headers = { 'content-type': 'text/html' }
    if (encoding) headers['content-encoding'] = encoding
    const result = await requestHtml(boundDestination(), 'https://example.com/', {
      requestFactory: createMockRequestFactory([{ headers }]),
    })
    assert.equal(Buffer.isBuffer(result.html), true)
  })
}

for (const encoding of ['gzip', 'br', 'deflate']) {
  test(`rejects Content-Encoding ${encoding}`, async () => {
    await expectRejectCode(requestHtml(boundDestination(), 'https://example.com/', {
      requestFactory: createMockRequestFactory([{
        headers: { 'content-type': 'text/html', 'content-encoding': encoding },
      }]),
    }), 'UNSUPPORTED_CONTENT_ENCODING')
  })
}

test('connect timeout destroys the request', async () => {
  const captures = []
  await expectRejectCode(requestHtml(boundDestination(), 'https://example.com/', {
    connectTimeoutMs: 5,
    requestTimeoutMs: 50,
    requestFactory: createMockRequestFactory([{ noResponse: true, socket: false }], captures),
  }), 'REQUEST_TIMEOUT')
  assert.equal(captures[0].request.destroyed, true)
})

test('request timeout destroys a connected request', async () => {
  const captures = []
  await expectRejectCode(requestHtml(boundDestination(), 'https://example.com/', {
    connectTimeoutMs: 50,
    requestTimeoutMs: 5,
    requestFactory: createMockRequestFactory([{ noResponse: true }], captures),
  }), 'REQUEST_TIMEOUT')
  assert.equal(captures[0].request.destroyed, true)
})

test('all request timers are cleared after success', async () => {
  const timers = new Set()
  let nextTimer = 0
  await requestHtml(boundDestination(), 'https://example.com/', {
    requestFactory: createMockRequestFactory([{}]),
    setTimer: () => { const id = ++nextTimer; timers.add(id); return id },
    clearTimer: (id) => timers.delete(id),
  })
  assert.equal(timers.size, 0)
})

test('network and TLS errors are mapped without exposing Node details', async () => {
  await expectRejectCode(requestHtml(boundDestination(), 'https://example.com/', {
    requestFactory: createMockRequestFactory([{ error: Object.assign(new Error('refused details'), { code: 'ECONNREFUSED' }) }]),
  }), 'WEBSITE_UNREACHABLE')
  await expectRejectCode(requestHtml(boundDestination(), 'https://example.com/', {
    requestFactory: createMockRequestFactory([{ error: Object.assign(new Error('certificate details'), { code: 'CERT_HAS_EXPIRED' }) }]),
  }), 'TLS_VALIDATION_FAILED')
})

test('user input remains reduced to the origin while redirect targets preserve path and query', () => {
  assert.equal(evaluateDestination('https://example.com/angebot?quelle=test#kontakt').normalizedUrl, 'https://example.com/')
  assert.equal(evaluateFetchDestination('/login?language=de#inhalt', {
    baseUrl: 'https://example.com/',
  }).normalizedUrl, 'https://example.com/login?language=de')
})

test('relative redirect preserves its path and fetch query but removes fragment', async () => {
  const urls = []
  const responses = [mockFetchResponse(302, { location: '/de/?source=test#top' }), mockFetchResponse(200)]
  const result = await fetchWebsite('example.com/path?private=value', {
    resolve: async (destination) => destination,
    request: async (_bound, url) => { urls.push(url); return responses.shift() },
  })
  assert.deepEqual(urls, ['https://example.com/', 'https://example.com/de/?source=test'])
  assert.equal(result.finalUrl, 'https://example.com/de/?source=test')
  assert.equal(result.redirectCount, 1)
  assert.deepEqual(result.redirectHistory[0], {
    statusCode: 302,
    fromOrigin: 'https://example.com',
    toOrigin: 'https://example.com',
    httpsDowngrade: false,
  })
})

test('absolute redirect to another public domain is resolved and rebound', async () => {
  const resolvedHosts = []
  const requestedHosts = []
  const responses = [mockFetchResponse(301, { location: 'https://www.example.org/de/' }), mockFetchResponse(200)]
  await fetchWebsite('example.com', {
    resolve: async (destination) => { resolvedHosts.push(destination.hostname); return destination },
    request: async (bound, url) => { requestedHosts.push([bound.hostname, url]); return responses.shift() },
  })
  assert.deepEqual(resolvedHosts, ['example.com', 'www.example.org'])
  assert.deepEqual(requestedHosts.map(([host]) => host), ['example.com', 'www.example.org'])
})

test('every same-origin redirect receives a fresh security resolution and binding', async () => {
  const selectedAddresses = []
  let resolution = 0
  const responses = [mockFetchResponse(302, { location: '/de/' }), mockFetchResponse(200)]
  await fetchWebsite('example.com', {
    resolve: async (destination) => ({
      ...destination,
      selectedAddress: { address: resolution++ === 0 ? PUBLIC_V4 : PUBLIC_V6, family: resolution === 1 ? 4 : 6 },
    }),
    request: async (bound) => {
      selectedAddresses.push(bound.selectedAddress.address)
      return responses.shift()
    },
  })
  assert.deepEqual(selectedAddresses, [PUBLIC_V4, PUBLIC_V6])
})

test('HTTPS downgrade is followed only after policy validation and is marked', async () => {
  const responses = [mockFetchResponse(307, { location: 'http://example.org/plain' }), mockFetchResponse(200)]
  const result = await fetchWebsite('https://example.com/', {
    resolve: async (destination) => destination,
    request: async () => responses.shift(),
  })
  assert.equal(result.finalUrl, 'http://example.org/plain')
  assert.equal(result.https, false)
  assert.equal(result.httpsDowngrade, true)
})

for (const location of [
  'http://localhost/',
  'http://127.0.0.1/',
  'http://[::1]/',
  'https://example.com:8443/',
  'https://user:pass@example.com/',
  'file:///etc/passwd',
]) {
  test(`redirect target ${location} is blocked before a second request`, async () => {
    let requests = 0
    await assert.rejects(fetchWebsite('example.com', {
      resolve: async (destination) => destination,
      request: async () => {
        requests += 1
        return mockFetchResponse(302, { location })
      },
    }), WebsiteCheckError)
    assert.equal(requests, 1)
  })
}

test('redirect without Location is an invalid response', async () => {
  await expectRejectCode(fetchWebsite('example.com', {
    resolve: async (destination) => destination,
    request: async () => mockFetchResponse(302),
  }), 'INVALID_RESPONSE')
})

test('redirect loops are detected using full normalized fetch URLs', async () => {
  const responses = [mockFetchResponse(302, { location: '/de/' }), mockFetchResponse(302, { location: '/' })]
  await expectRejectCode(fetchWebsite('example.com', {
    resolve: async (destination) => destination,
    request: async () => responses.shift(),
  }), 'REDIRECT_LOOP')
})

test('a fourth redirect is rejected', async () => {
  const responses = ['/one', '/two', '/three', '/four'].map((location) => mockFetchResponse(302, { location }))
  await expectRejectCode(fetchWebsite('example.com', {
    resolve: async (destination) => destination,
    request: async () => responses.shift(),
  }), 'TOO_MANY_REDIRECTS')
})

test('total deadline aborts a pending DNS resolution and clears its timer', async () => {
  const timers = new Set()
  await expectRejectCode(fetchWebsite('example.com', {
    resolve: async () => new Promise(() => {}),
    request: async () => { throw new Error('must not run') },
    totalTimeoutMs: 5,
    setTimer: (callback, delay) => {
      const id = setTimeout(callback, delay)
      timers.add(id)
      return id
    },
    clearTimer: (id) => { clearTimeout(id); timers.delete(id) },
  }), 'REQUEST_TIMEOUT')
  assert.equal(timers.size, 0)
})

test('total deadline aborts the active request across redirects', async () => {
  let aborted = false
  await expectRejectCode(fetchWebsite('example.com', {
    resolve: async (destination) => destination,
    request: async (_bound, _url, { signal }) => new Promise((resolve, reject) => {
      signal.addEventListener('abort', () => {
        aborted = true
        reject(new WebsiteCheckError('REQUEST_TIMEOUT'))
      }, { once: true })
    }),
    totalTimeoutMs: 5,
  }), 'REQUEST_TIMEOUT')
  assert.equal(aborted, true)
})

for (const statusCode of [301, 302, 303, 307, 308]) {
  test(`HTTP ${statusCode} is followed as a redirect`, async () => {
    const responses = [mockFetchResponse(statusCode, { location: '/next' }), mockFetchResponse(200)]
    const result = await fetchWebsite('example.com', {
      resolve: async (destination) => destination,
      request: async () => responses.shift(),
    })
    assert.equal(result.redirectCount, 1)
  })
}

for (const statusCode of [200, 403, 404, 429, 500]) {
  test(`HTTP ${statusCode} with HTML remains a documented response`, async () => {
    const result = await requestHtml(boundDestination(), 'https://example.com/', {
      requestFactory: createMockRequestFactory([{ statusCode }]),
    })
    assert.equal(result.statusCode, statusCode)
    assert.equal(Buffer.isBuffer(result.html), true)
  })
}

for (const statusCode of [300, 305, 306]) {
  test(`HTTP ${statusCode} is not followed automatically`, async () => {
    const result = await requestHtml(boundDestination(), 'https://example.com/', {
      requestFactory: createMockRequestFactory([{ statusCode }]),
    })
    assert.equal(result.statusCode, statusCode)
    assert.equal(Buffer.isBuffer(result.html), true)
  })
}

test('HTTP 204 is rejected as HTML_NOT_AVAILABLE', async () => {
  await expectRejectCode(requestHtml(boundDestination(), 'https://example.com/', {
    requestFactory: createMockRequestFactory([{ statusCode: 204, chunks: [] }]),
  }), 'HTML_NOT_AVAILABLE')
})

test('HTTP 304 is not followed and requires HTML like a terminal response', async () => {
  await expectRejectCode(requestHtml(boundDestination(), 'https://example.com/', {
    requestFactory: createMockRequestFactory([{ statusCode: 304, headers: {} }]),
  }), 'HTML_NOT_AVAILABLE')
})

test('redirect response body is not buffered and cookies are not propagated', async () => {
  const scenario = {
    statusCode: 302,
    headers: { location: '/next', 'set-cookie': ['secret=value'] },
    chunks: ['ignored'],
  }
  const result = await requestHtml(boundDestination(), 'https://example.com/', {
    requestFactory: createMockRequestFactory([scenario]),
  })
  assert.equal(result.html, null)
  assert.equal(result.headers['set-cookie'], undefined)
  assert.equal(scenario.response.destroyed, true)
})

test('internal fetch result is not exposed by the public Phase A handler contract', async () => {
  const source = await import('../api/website-check.js')
  assert.equal(typeof source.createWebsiteCheckHandler, 'function')
  assert.equal(JSON.stringify({ networkRequestPerformed: false }).includes('<html'), false)
})
