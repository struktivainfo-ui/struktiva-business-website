import { Resend } from 'resend'

const MAX_BODY_BYTES = 4_000
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 5
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const rateLimit = new Map()

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.end(JSON.stringify(payload))
}

function getClientIp(req) {
  return req.headers?.['x-forwarded-for']?.split(',')[0].trim() || req.socket?.remoteAddress || 'unknown'
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body
  if (typeof req.body === 'string') return JSON.parse(req.body)

  const chunks = []
  let size = 0
  for await (const chunk of req) {
    const buffer = Buffer.from(chunk)
    size += buffer.length
    if (size > MAX_BODY_BYTES) throw new Error('body_too_large')
    chunks.push(buffer)
  }
  return chunks.length ? JSON.parse(Buffer.concat(chunks).toString('utf8')) : {}
}

export default async function newsletterHandler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return sendJson(res, 405, { error: 'Methode nicht erlaubt.' })
  }

  const ip = getClientIp(req)
  const now = Date.now()
  const entry = rateLimit.get(ip) || { count: 0, startedAt: now }
  if (now - entry.startedAt > RATE_LIMIT_WINDOW_MS) rateLimit.set(ip, { count: 1, startedAt: now })
  else if (entry.count >= RATE_LIMIT_MAX) return sendJson(res, 429, { error: 'Bitte warte kurz, bevor du es erneut versuchst.' })
  else rateLimit.set(ip, { count: entry.count + 1, startedAt: entry.startedAt })

  try {
    const body = await readBody(req)
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase().slice(0, 160) : ''
    if (!EMAIL_PATTERN.test(email)) return sendJson(res, 400, { error: 'Bitte gib eine gültige E-Mail-Adresse ein.' })
    if (body.consent !== true) return sendJson(res, 400, { error: 'Bitte bestätige deine Newsletter-Anmeldung.' })

    if (!process.env.RESEND_API_KEY || !process.env.SMTP_FROM || !process.env.LEAD_RECEIVER_EMAIL) {
      return sendJson(res, 503, { error: 'Die Anmeldung ist gerade nicht verfügbar. Bitte schreibe uns kurz per E-Mail.' })
    }

    const mailer = new Resend(process.env.RESEND_API_KEY)
    const timestamp = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })
    await mailer.emails.send({
      from: process.env.SMTP_FROM,
      to: process.env.LEAD_RECEIVER_EMAIL,
      subject: `Newsletter-Anmeldung: ${email}`,
      html: `<p>Neue Newsletter-Anmeldung von <strong>${escapeHtml(email)}</strong>.</p><p>Einwilligung erteilt am ${escapeHtml(timestamp)} Uhr.</p>`,
    })
    await mailer.emails.send({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Deine STRUKTIVA Newsletter-Anmeldung',
      html: '<p>Vielen Dank für deine Anmeldung zum STRUKTIVA Newsletter. Wir haben deine Anfrage erhalten.</p><p>Du kannst dich jederzeit wieder abmelden.</p>',
    })

    return sendJson(res, 200, { message: 'Danke. Deine Newsletter-Anmeldung ist eingegangen.' })
  } catch (error) {
    console.error('Newsletter signup failed', { code: error?.message || 'unknown' })
    return sendJson(res, 500, { error: 'Die Anmeldung konnte gerade nicht gesendet werden. Bitte versuche es später erneut.' })
  }
}
