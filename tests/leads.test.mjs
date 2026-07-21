import assert from 'node:assert/strict'
import test from 'node:test'
import { createLeadHandler } from '../api/leads.js'
import { trackDigitalCheckEvent } from '../src/lib/digitalCheckTracking.js'

process.env.SMTP_FROM = 'STRUKTIVA <test@example.invalid>'
process.env.LEAD_RECEIVER_EMAIL = 'receiver@example.invalid'

function validDigitalLead(overrides = {}) {
  return {
    leadType: 'digital_check',
    name: 'Erika Muster',
    company: 'Musterbetrieb',
    email: 'erika@example.invalid',
    phone: '07051 12345',
    companyWebsite: 'musterbetrieb.de',
    industry: 'Handwerk',
    primaryChallenge: 'Über die Website kommen derzeit nur wenige Anfragen.',
    preferredContact: 'E-Mail',
    privacyAccepted: true,
    contactTrap: '',
    landingPage: '/digital-check',
    source: 'google',
    medium: 'cpc',
    campaign: 'digital-check-calw',
    content: 'hero',
    term: 'website check',
    referrer: 'https://www.google.de/search',
    gclid: 'test-click-id',
    submissionId: '12345678-1234-1234-1234-123456789012',
    ...overrides,
  }
}

function createRequest(body, ip = '127.0.0.1') {
  return {
    method: 'POST',
    headers: { 'x-forwarded-for': ip },
    socket: { remoteAddress: ip },
    body,
  }
}

function createResponse() {
  return {
    statusCode: 0,
    headers: {},
    setHeader(name, value) { this.headers[name] = value },
    end(value) { this.body = JSON.parse(value) },
  }
}

function setup({ send, fetchImpl, logger } = {}) {
  const deliveries = []
  const mailer = {
    emails: {
      send: send || (async (message) => {
        deliveries.push(message)
        return { id: `mail-${deliveries.length}` }
      }),
    },
  }
  const logs = []
  const safeLogger = logger || {
    warn: (...args) => logs.push(['warn', ...args]),
    error: (...args) => logs.push(['error', ...args]),
  }
  const handler = createLeadHandler({ createMailer: () => mailer, fetchImpl, logger: safeLogger })
  return { handler, deliveries, logs }
}

async function submit(handler, body, ip) {
  const response = createResponse()
  await handler(createRequest(body, ip), response)
  return response
}

test('accepts a valid Digital-Check lead and sends internal plus confirmation mail', async () => {
  const { handler, deliveries } = setup()
  const response = await submit(handler, validDigitalLead())
  assert.equal(response.statusCode, 200)
  assert.equal(response.body.ok, true)
  assert.equal(deliveries.length, 2)
  assert.match(deliveries[0].subject, /Digital-Check-Anfrage/)
  assert.match(deliveries[0].html, /Musterbetrieb/)
  assert.match(deliveries[0].html, /79 € einmalig inkl\. 19 % MwSt\./)
  assert.match(deliveries[0].html, /ersten 10 verbindlich beauftragten Digital-Checks/)
  assert.match(deliveries[0].html, /reserviert oder reduziert keinen Einführungsplatz/)
  assert.match(deliveries[1].html, /zunächst eine unverbindliche Anfrage/)
  assert.match(deliveries[1].html, /79 € einmalig inkl\. 19 % MwSt\./)
  assert.match(deliveries[1].html, /Danach 129 € einmalig inkl\. 19 % MwSt\./)
  assert.match(deliveries[1].html, /ausdrücklichen Bestätigung durch STRUKTIVA/)
  assert.doesNotMatch(`${deliveries[0].html}${deliveries[1].html}`, /zzgl\.|zuzüglich|Kleinunternehmer|§\s*19/i)
  assert.doesNotMatch(`${deliveries[0].html}${deliveries[1].html}`, /MwSt\.\./)
})

test('rejects missing required Digital-Check fields', async () => {
  const { handler } = setup()
  const response = await submit(handler, validDigitalLead({ company: '' }))
  assert.equal(response.statusCode, 400)
  assert.equal(response.body.field, 'company')
})

test('rejects an invalid email address', async () => {
  const { handler } = setup()
  const response = await submit(handler, validDigitalLead({ email: 'not-an-email' }))
  assert.equal(response.statusCode, 400)
  assert.equal(response.body.field, 'email')
})

test('rejects overlong inputs instead of silently accepting them', async () => {
  const { handler } = setup()
  const response = await submit(handler, validDigitalLead({ primaryChallenge: 'x'.repeat(2001) }))
  assert.equal(response.statusCode, 400)
  assert.equal(response.body.field, 'primaryChallenge')
})

test('rejects a filled honeypot', async () => {
  const { handler } = setup()
  const response = await submit(handler, validDigitalLead({ contactTrap: 'spam' }))
  assert.equal(response.statusCode, 400)
  assert.equal(response.body.field, 'contactTrap')
})

test('accepts companyWebsite independently from the honeypot and normalizes it', async () => {
  const { handler, deliveries } = setup()
  const response = await submit(handler, validDigitalLead({ companyWebsite: 'www.musterbetrieb.de' }))
  assert.equal(response.statusCode, 200)
  assert.match(deliveries[0].html, /https:\/\/www\.musterbetrieb\.de\//)
})

test('rejects a missing privacy acknowledgement', async () => {
  const { handler } = setup()
  const response = await submit(handler, validDigitalLead({ privacyAccepted: false }))
  assert.equal(response.statusCode, 400)
  assert.equal(response.body.field, 'privacyAccepted')
})

test('rejects an unknown leadType', async () => {
  const { handler } = setup()
  const response = await submit(handler, validDigitalLead({ leadType: 'unknown' }))
  assert.equal(response.statusCode, 400)
  assert.equal(response.body.field, 'leadType')
})

test('keeps the user-facing success when only the confirmation mail fails', async () => {
  let callCount = 0
  const { handler, logs } = setup({
    send: async () => {
      callCount += 1
      if (callCount === 2) throw new Error('confirmation failure with private content')
      return { id: 'internal-ok' }
    },
  })
  const response = await submit(handler, validDigitalLead())
  assert.equal(response.statusCode, 200)
  assert.equal(response.body.ok, true)
  assert.equal(logs[0][2].code, 'confirmation_failed')
  assert.doesNotMatch(JSON.stringify(logs), /private content|Erika Muster/)
})

test('keeps the user-facing success when the optional webhook fails', async () => {
  const previousWebhook = process.env.LEAD_WEBHOOK_URL
  process.env.LEAD_WEBHOOK_URL = 'https://webhook.example.invalid/lead'
  try {
    const { handler, logs } = setup({ fetchImpl: async () => ({ ok: false }) })
    const response = await submit(handler, validDigitalLead())
    assert.equal(response.statusCode, 200)
    assert.equal(response.body.ok, true)
    assert.equal(logs[0][2].code, 'webhook_failed')
  } finally {
    if (previousWebhook === undefined) delete process.env.LEAD_WEBHOOK_URL
    else process.env.LEAD_WEBHOOK_URL = previousWebhook
  }
})

test('deduplicates a repeated submissionId after internal delivery', async () => {
  const { handler, deliveries } = setup()
  const lead = validDigitalLead()
  const first = await submit(handler, lead)
  const second = await submit(handler, lead)
  assert.equal(first.statusCode, 200)
  assert.equal(second.statusCode, 200)
  assert.equal(second.body.deduplicated, true)
  assert.equal(deliveries.length, 2)
})

test('drops personal data from analytics payloads', () => {
  const calls = []
  globalThis.window = {
    location: { pathname: '/digital-check' },
    __struktivaConsentState: { statistics: true, marketing: false },
    gtag: (...args) => calls.push(args),
  }
  trackDigitalCheckEvent('digital_check_form_submit_success', {
    page_path: '/digital-check',
    lead_type: 'digital_check',
    event_id: 'analytics-test-id',
    name: 'Erika Muster',
    email: 'erika@example.invalid',
    phone: '07051 12345',
    company: 'Musterbetrieb',
    message: 'private challenge',
    gclid: 'raw-click-id',
    gclid_present: true,
  }, { onceKey: 'analytics-test-id' })

  const serialized = JSON.stringify(calls)
  assert.match(serialized, /digital_check_form_submit_success/)
  assert.match(serialized, /gclid_present/)
  assert.doesNotMatch(serialized, /Erika Muster|erika@example|07051|Musterbetrieb|private challenge|raw-click-id/)
  delete globalThis.window
})
