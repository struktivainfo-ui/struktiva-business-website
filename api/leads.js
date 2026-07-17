import { Resend } from 'resend'
import { digitalCheckPriceLabel, personalDigitalCheckOffer } from '../src/config/digitalCheckOffer.js'

const ALLOWED_INTERESTS = new Set([
  'Website / Landingpage',
  'Google-Sichtbarkeit',
  'KI & Automatisierung',
  'Kundenanfragen-System',
  'Digitale Ordnung',
  'Unternehmens-App / Dashboard',
  'Ich bin mir noch unsicher',
])
const ALLOWED_PROJECT_STARTS = new Set(['Sofort', 'In den nächsten Wochen', 'In den nächsten Monaten', 'Noch offen'])
const ALLOWED_BUDGETS = new Set(['Unter 500 €', '500 € – 1.000 €', '1.000 € – 2.500 €', 'Über 2.500 €', 'Noch offen'])
const ALLOWED_CONTACTS = new Set(['E-Mail', 'Telefon', 'WhatsApp'])
const ALLOWED_INDUSTRIES = new Set([
  'Handwerk',
  'Gesundheit & Beauty',
  'Gastronomie',
  'Einzelhandel',
  'Lokale Dienstleistung',
  'B2B-Dienstleistung',
  'Andere Branche',
])
const ALLOWED_LEAD_TYPES = new Set(['contact', 'digital_check'])
const MAX_BODY_BYTES = 24_000
const DEDUPE_TTL_MS = 10 * 60 * 1000

function json(res, statusCode, payload) {
  res.statusCode = statusCode
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.end(JSON.stringify(payload))
}

function rawString(value) {
  return typeof value === 'string' ? value.replace(/\r/g, '').trim() : ''
}

function sanitizeText(value, maxLength) {
  return rawString(value).slice(0, maxLength)
}

function isTooLong(value, maxLength) {
  return rawString(value).length > maxLength
}

function normalizeOptionalValue(value, allowedValues) {
  const nextValue = sanitizeText(value, 200)
  if (!nextValue) return ''
  return allowedValues.has(nextValue) ? nextValue : null
}

function normalizeWebsite(value) {
  const input = sanitizeText(value, 300)
  if (!input) return ''
  try {
    const url = new URL(/^https?:\/\//i.test(input) ? input : `https://${input}`)
    if (!['http:', 'https:'].includes(url.protocol)) return null
    return url.toString().slice(0, 300)
  } catch {
    return null
  }
}

function normalizeLandingPage(value) {
  const path = sanitizeText(value, 300)
  return path.startsWith('/') && !path.includes('?') && !path.includes('#') ? path : '/digital-check'
}

function normalizeReferrer(value) {
  const input = sanitizeText(value, 500)
  if (!input) return ''
  try {
    const url = new URL(input)
    return `${url.origin}${url.pathname}`.slice(0, 500)
  } catch {
    return ''
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

async function parseRequestBody(req) {
  const contentLength = Number(req.headers?.['content-length'] || 0)
  if (contentLength > MAX_BODY_BYTES) throw Object.assign(new Error('body_too_large'), { publicCode: 'validation' })
  if (req.body && typeof req.body === 'object') return req.body
  if (typeof req.body === 'string' && req.body.trim()) {
    if (Buffer.byteLength(req.body, 'utf8') > MAX_BODY_BYTES) throw Object.assign(new Error('body_too_large'), { publicCode: 'validation' })
    return JSON.parse(req.body)
  }

  const chunks = []
  let totalBytes = 0
  for await (const chunk of req) {
    const buffer = Buffer.from(chunk)
    totalBytes += buffer.length
    if (totalBytes > MAX_BODY_BYTES) throw Object.assign(new Error('body_too_large'), { publicCode: 'validation' })
    chunks.push(buffer)
  }
  if (!chunks.length) return {}
  return JSON.parse(Buffer.concat(chunks).toString('utf8'))
}

function validationError(error, field) {
  return { ok: false, statusCode: 400, errorCode: 'validation', error, field }
}

function validateSharedFields(input, leadType) {
  if (isTooLong(input.name, 120)) return validationError('Der Name ist zu lang.', 'name')
  if (isTooLong(input.company, 160)) return validationError('Der Unternehmensname ist zu lang.', 'company')
  if (isTooLong(input.email, 160)) return validationError('Die E-Mail-Adresse ist zu lang.', 'email')
  if (isTooLong(input.phone, 50)) return validationError('Die Telefonnummer ist zu lang.', 'phone')

  const name = sanitizeText(input.name, 120)
  const company = sanitizeText(input.company, 160)
  const email = sanitizeText(input.email, 160).toLowerCase()
  const phone = sanitizeText(input.phone, 50)
  const preferredContact = normalizeOptionalValue(input.preferredContact, ALLOWED_CONTACTS)
  const privacyAccepted = leadType === 'digital_check' ? input.privacyAccepted === true : input.privacyConsent === true

  if (sanitizeText(input.contactTrap || input.website, 200)) return validationError('Die Anfrage konnte nicht verarbeitet werden.', 'contactTrap')
  if (!name) return validationError('Bitte Namen angeben.', 'name')
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return validationError('Bitte eine gültige E-Mail-Adresse angeben.', 'email')
  if (preferredContact === null) return validationError('Bitte einen gültigen Kontaktweg auswählen.', 'preferredContact')
  if (!privacyAccepted) return validationError('Bitte der Verarbeitung der Anfrage zustimmen.', leadType === 'digital_check' ? 'privacyAccepted' : 'privacyConsent')

  return { ok: true, value: { name, company, email, phone, preferredContact } }
}

export function validateLeadInput(input = {}) {
  const requestedLeadType = sanitizeText(input.leadType || 'contact', 40)
  if (!ALLOWED_LEAD_TYPES.has(requestedLeadType)) return validationError('Unbekannter Anfragetyp.', 'leadType')

  const shared = validateSharedFields(input, requestedLeadType)
  if (!shared.ok) return shared

  const baseLead = {
    createdAt: new Date().toISOString(),
    status: 'Neu',
    leadType: requestedLeadType,
    ...shared.value,
  }

  if (requestedLeadType === 'contact') {
    if (isTooLong(input.message, 5000)) return validationError('Die Nachricht ist zu lang.', 'message')
    const message = sanitizeText(input.message, 5000)
    if (!message || message.length < 12) return validationError('Bitte das Anliegen etwas genauer beschreiben.', 'message')

    const interest = normalizeOptionalValue(input.interest, ALLOWED_INTERESTS)
    const projectStart = normalizeOptionalValue(input.projectStart, ALLOWED_PROJECT_STARTS)
    const budgetRange = normalizeOptionalValue(input.budgetRange, ALLOWED_BUDGETS)
    if ([interest, projectStart, budgetRange].includes(null)) return validationError('Eine Auswahl ist ungültig.', 'selection')

    return {
      ok: true,
      lead: {
        ...baseLead,
        source: sanitizeText(input.source || 'Website', 80) || 'Website',
        interest,
        projectStart,
        budgetRange,
        message,
      },
    }
  }

  if (!baseLead.company) return validationError('Bitte Betrieb oder Unternehmen angeben.', 'company')
  if (isTooLong(input.companyWebsite, 300)) return validationError('Die Website-Adresse ist zu lang.', 'companyWebsite')
  if (isTooLong(input.primaryChallenge, 2000)) return validationError('Die Problembeschreibung ist zu lang.', 'primaryChallenge')
  const companyWebsite = normalizeWebsite(input.companyWebsite)
  const industry = normalizeOptionalValue(input.industry, ALLOWED_INDUSTRIES)
  const primaryChallenge = sanitizeText(input.primaryChallenge, 2000)
  const submissionId = sanitizeText(input.submissionId, 100)
  if (companyWebsite === null) return validationError('Bitte eine gültige Website-Adresse angeben.', 'companyWebsite')
  if (!industry) return validationError('Bitte eine gültige Branche auswählen.', 'industry')
  if (!primaryChallenge || primaryChallenge.length < 12) return validationError('Bitte die wichtigste digitale Frage etwas genauer beschreiben.', 'primaryChallenge')
  if (!/^[a-zA-Z0-9-]{12,100}$/.test(submissionId)) return validationError('Die Anfrage-ID ist ungültig.', 'submissionId')

  return {
    ok: true,
    lead: {
      ...baseLead,
      offerName: personalDigitalCheckOffer.name,
      companyWebsite,
      industry,
      primaryChallenge,
      submissionId,
      landingPage: normalizeLandingPage(input.landingPage),
      source: sanitizeText(input.source || 'direct', 200) || 'direct',
      medium: sanitizeText(input.medium || 'none', 200) || 'none',
      campaign: sanitizeText(input.campaign, 200),
      content: sanitizeText(input.content, 200),
      term: sanitizeText(input.term, 200),
      referrer: normalizeReferrer(input.referrer),
      gclid: sanitizeText(input.gclid, 200),
    },
  }
}

function tableRows(rows) {
  return rows.map(([label, value]) => `
    <tr>
      <td style="padding:8px 10px;border:1px solid #e5e7eb;font-weight:700;background:#f9fafb;width:220px">${escapeHtml(label)}</td>
      <td style="padding:8px 10px;border:1px solid #e5e7eb">${escapeHtml(value || '—')}</td>
    </tr>`).join('')
}

export function buildInternalMailHtml(lead) {
  const commonRows = [
    ['Datum/Uhrzeit', lead.createdAt],
    ['Anfragetyp', lead.leadType === 'digital_check' ? 'Digital-Check' : 'Allgemeine Kontaktanfrage'],
    ['Name', lead.name],
    ['Unternehmen', lead.company],
    ['E-Mail', lead.email],
    ['Telefon', lead.phone],
    ['Bevorzugter Kontaktweg', lead.preferredContact],
  ]
  const detailRows = lead.leadType === 'digital_check'
    ? [
        ['Angebot', lead.offerName],
        ['Gesamtpreis', digitalCheckPriceLabel],
        ['Branche', lead.industry],
        ['Website', lead.companyWebsite],
        ['Quelle / Medium', `${lead.source} / ${lead.medium}`],
        ['Kampagne', lead.campaign],
        ['Inhalt / Begriff', [lead.content, lead.term].filter(Boolean).join(' / ')],
        ['Landingpage', lead.landingPage],
        ['Referrer', lead.referrer],
        ['GCLID', lead.gclid],
        ['Submission-ID', lead.submissionId],
      ]
    : [
        ['Interesse / Bedarf', lead.interest],
        ['Projektstart', lead.projectStart],
        ['Budgetrahmen', lead.budgetRange],
        ['Quelle', lead.source],
      ]
  const message = lead.leadType === 'digital_check' ? lead.primaryChallenge : lead.message

  return `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
    <h2>${lead.leadType === 'digital_check' ? 'Neue Digital-Check-Anfrage' : 'Neue STRUKTIVA-Anfrage über die Website'}</h2>
    <table style="border-collapse:collapse;width:100%;max-width:760px"><tbody>
      ${tableRows([...commonRows, ...detailRows])}
      <tr><td style="padding:8px 10px;border:1px solid #e5e7eb;font-weight:700;background:#f9fafb">${lead.leadType === 'digital_check' ? 'Größtes digitales Problem' : 'Nachricht'}</td><td style="padding:8px 10px;border:1px solid #e5e7eb;white-space:pre-wrap">${escapeHtml(message)}</td></tr>
    </tbody></table>
  </div>`
}

export function buildConfirmationMailHtml(lead) {
  if (lead.leadType === 'digital_check') {
    return `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
      <p>Hallo ${escapeHtml(lead.name)},</p>
      <p>vielen Dank für Ihre Anfrage zum STRUKTIVA Digital-Check für lokale Betriebe.</p>
      <p>Der Gesamtpreis für den Digital-Check beträgt ${escapeHtml(digitalCheckPriceLabel)} Es wird keine weitere Umsatzsteuer auf diesen Betrag aufgeschlagen.</p>
      <p>Ihre Anfrage ist eingegangen und wird persönlich geprüft. Wir melden uns in der Regel innerhalb eines Werktags, um den passenden Rahmen und gegebenenfalls noch benötigte Informationen zu klären.</p>
      <p>Das Absenden der Anfrage ist noch keine kostenpflichtige Bestellung. Ein Auftrag entsteht erst nach unserer gesonderten Bestätigung.</p>
      <p>Viele Grüße<br />Sven Matzke<br />STRUKTIVA Digitale Unternehmensberatung</p>
    </div>`
  }
  return `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
    <p>Hallo ${escapeHtml(lead.name)},</p>
    <p>vielen Dank für Ihre Anfrage bei STRUKTIVA Digitale Unternehmensberatung.</p>
    <p>Ihre Nachricht ist eingegangen. Wir prüfen Ihr Anliegen und melden uns mit einer passenden Rückmeldung.</p>
    <p>Viele Grüße<br />Sven Matzke<br />STRUKTIVA Digitale Unternehmensberatung</p>
  </div>`
}

function createDefaultMailer() {
  if (!process.env.RESEND_API_KEY || !process.env.SMTP_FROM || !process.env.LEAD_RECEIVER_EMAIL) return null
  return new Resend(process.env.RESEND_API_KEY)
}

function getClientIp(req) {
  return req.headers?.['x-forwarded-for']?.split(',')[0].trim() || req.socket?.remoteAddress || 'unknown'
}

export function createLeadHandler({
  createMailer = createDefaultMailer,
  fetchImpl = globalThis.fetch,
  logger = console,
  now = () => Date.now(),
} = {}) {
  const rateLimit = new Map()
  const deliveredSubmissions = new Map()

  return async function leadHandler(req, res) {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST')
      return json(res, 405, { errorCode: 'method_not_allowed', error: 'Methode nicht erlaubt.' })
    }

    const timestamp = now()
    const ip = getClientIp(req)
    const entry = rateLimit.get(ip) || { count: 0, start: timestamp }
    if (timestamp - entry.start > 60_000) rateLimit.set(ip, { count: 1, start: timestamp })
    else if (entry.count >= 5) return json(res, 429, { errorCode: 'rate_limited', error: 'Zu viele Anfragen. Bitte warten Sie kurz.' })
    else {
      entry.count += 1
      rateLimit.set(ip, entry)
    }

    try {
      const body = await parseRequestBody(req)
      const validation = validateLeadInput(body)
      if (!validation.ok) return json(res, validation.statusCode, { errorCode: validation.errorCode, field: validation.field, error: validation.error })
      const lead = validation.lead

      if (lead.submissionId) {
        const deliveredAt = deliveredSubmissions.get(lead.submissionId)
        if (deliveredAt && timestamp - deliveredAt < DEDUPE_TTL_MS) {
          return json(res, 200, { ok: true, deduplicated: true, submissionId: lead.submissionId })
        }
      }

      const mailer = createMailer()
      if (!mailer || !process.env.SMTP_FROM || !process.env.LEAD_RECEIVER_EMAIL) {
        return json(res, 503, { errorCode: 'server', error: 'Die Anfrage kann gerade nicht zugestellt werden. Bitte kontaktieren Sie STRUKTIVA per E-Mail.' })
      }

      await mailer.emails.send({
        from: process.env.SMTP_FROM,
        to: process.env.LEAD_RECEIVER_EMAIL,
        subject: lead.leadType === 'digital_check' ? `Digital-Check-Anfrage: ${lead.company}` : `Neue Anfrage von ${lead.name}`,
        html: buildInternalMailHtml(lead),
      })

      if (lead.submissionId) deliveredSubmissions.set(lead.submissionId, timestamp)

      try {
        await mailer.emails.send({
          from: process.env.SMTP_FROM,
          to: lead.email,
          subject: lead.leadType === 'digital_check' ? 'Ihre Anfrage zum STRUKTIVA Digital-Check' : 'Ihre Anfrage bei STRUKTIVA',
          html: buildConfirmationMailHtml(lead),
        })
      } catch {
        logger.warn('Lead confirmation delivery failed', { code: 'confirmation_failed' })
      }

      if (process.env.LEAD_WEBHOOK_URL && fetchImpl) {
        try {
          const response = await fetchImpl(process.env.LEAD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(lead),
          })
          if (!response.ok) throw new Error('webhook_failed')
        } catch {
          logger.warn('Lead webhook delivery failed', { code: 'webhook_failed' })
        }
      }

      return json(res, 200, {
        ok: true,
        submissionId: lead.submissionId || undefined,
        message: 'Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt.',
      })
    } catch (error) {
      const errorCode = error?.publicCode === 'validation' || error instanceof SyntaxError ? 'validation' : 'server'
      logger.error('Lead submission failed', { code: errorCode })
      return json(res, errorCode === 'validation' ? 400 : 500, {
        errorCode,
        error: errorCode === 'validation'
          ? 'Die Anfrage enthält ungültige Daten.'
          : 'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie STRUKTIVA per E-Mail.',
      })
    }
  }
}

const handler = createLeadHandler()
export default handler
