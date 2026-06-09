import nodemailer from 'nodemailer'

const ALLOWED_INTERESTS = new Set([
  'Website / Landingpage',
  'Google-Sichtbarkeit',
  'KI & Automatisierung',
  'Kundenanfragen-System',
  'Digitale Ordnung',
  'Unternehmens-App / Dashboard',
  'Ich bin mir noch unsicher',
])

const ALLOWED_PROJECT_STARTS = new Set([
  'Sofort',
  'In den nächsten Wochen',
  'In den nächsten Monaten',
  'Noch offen',
])

const ALLOWED_BUDGETS = new Set([
  'Unter 500 €',
  '500 € – 1.000 €',
  '1.000 € – 2.500 €',
  'Über 2.500 €',
  'Noch offen',
])

const ALLOWED_CONTACTS = new Set(['E-Mail', 'Telefon', 'WhatsApp'])

function json(res, statusCode, payload) {
  res.statusCode = statusCode
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(payload))
}

function sanitizeText(value, maxLength = 5000) {
  if (typeof value !== 'string') return ''
  return value.replace(/\r/g, '').trim().slice(0, maxLength)
}

function normalizeOptionalValue(value, allowedValues) {
  const nextValue = sanitizeText(value, 200)
  if (!nextValue) return ''
  if (allowedValues && !allowedValues.has(nextValue)) return ''
  return nextValue
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
  if (req.body && typeof req.body === 'object') return req.body
  if (typeof req.body === 'string' && req.body.trim()) return JSON.parse(req.body)

  const chunks = []
  for await (const chunk of req) {
    chunks.push(Buffer.from(chunk))
  }

  if (chunks.length === 0) return {}

  const rawBody = Buffer.concat(chunks).toString('utf8')
  return rawBody ? JSON.parse(rawBody) : {}
}

function validateLeadInput(input) {
  const name = sanitizeText(input.name, 160)
  const company = sanitizeText(input.company, 160)
  const email = sanitizeText(input.email, 160).toLowerCase()
  const phone = sanitizeText(input.phone, 80)
  const preferredContact = normalizeOptionalValue(input.preferredContact, ALLOWED_CONTACTS)
  const interest = normalizeOptionalValue(input.interest, ALLOWED_INTERESTS)
  const projectStart = normalizeOptionalValue(input.projectStart, ALLOWED_PROJECT_STARTS)
  const budgetRange = normalizeOptionalValue(input.budgetRange, ALLOWED_BUDGETS)
  const message = sanitizeText(input.message, 5000)
  const website = sanitizeText(input.website, 200)
  const source = sanitizeText(input.source || 'Website', 80) || 'Website'
  const privacyConsent = input.privacyConsent === true

  if (website) {
    return { ok: false, statusCode: 400, error: 'Die Anfrage konnte nicht verarbeitet werden.' }
  }

  if (!name) {
    return { ok: false, statusCode: 400, error: 'Bitte Namen angeben.' }
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, statusCode: 400, error: 'Bitte eine gültige E-Mail-Adresse angeben.' }
  }

  if (!message || message.length < 12) {
    return { ok: false, statusCode: 400, error: 'Bitte das Anliegen etwas genauer beschreiben.' }
  }

  if (!privacyConsent) {
    return { ok: false, statusCode: 400, error: 'Bitte der Verarbeitung der Anfrage zustimmen.' }
  }

  return {
    ok: true,
    lead: {
      createdAt: new Date().toISOString(),
      source,
      status: 'Neu',
      name,
      company,
      email,
      phone,
      preferredContact,
      interest,
      projectStart,
      budgetRange,
      message,
    },
  }
}

function buildAdminEmailHtml(lead) {
  const rows = [
    ['Datum/Uhrzeit', lead.createdAt],
    ['Name', lead.name],
    ['Firma', lead.company || '—'],
    ['E-Mail', lead.email],
    ['Telefon', lead.phone || '—'],
    ['Gewünschter Kontaktweg', lead.preferredContact || '—'],
    ['Interesse / Bedarf', lead.interest || '—'],
    ['Projektstart', lead.projectStart || '—'],
    ['Budgetrahmen', lead.budgetRange || '—'],
    ['Quelle', lead.source],
    ['Status', lead.status],
  ]

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
      <h2>Neue STRUKTIVA-Anfrage über die Website</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding:8px 10px;border:1px solid #e5e7eb;font-weight:700;background:#f9fafb;width:220px">${escapeHtml(label)}</td>
                  <td style="padding:8px 10px;border:1px solid #e5e7eb">${escapeHtml(value)}</td>
                </tr>
              `,
            )
            .join('')}
          <tr>
            <td style="padding:8px 10px;border:1px solid #e5e7eb;font-weight:700;background:#f9fafb">Nachricht</td>
            <td style="padding:8px 10px;border:1px solid #e5e7eb;white-space:pre-wrap">${escapeHtml(lead.message)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
}

function buildAdminEmailText(lead) {
  return [
    'Neue STRUKTIVA-Anfrage über die Website',
    '',
    `Datum/Uhrzeit: ${lead.createdAt}`,
    `Name: ${lead.name}`,
    `Firma: ${lead.company || '—'}`,
    `E-Mail: ${lead.email}`,
    `Telefon: ${lead.phone || '—'}`,
    `Gewünschter Kontaktweg: ${lead.preferredContact || '—'}`,
    `Interesse / Bedarf: ${lead.interest || '—'}`,
    `Projektstart: ${lead.projectStart || '—'}`,
    `Budgetrahmen: ${lead.budgetRange || '—'}`,
    `Quelle: ${lead.source}`,
    `Status: ${lead.status}`,
    '',
    'Nachricht:',
    lead.message,
  ].join('\n')
}

function buildConfirmationHtml(lead) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
      <p>Hallo ${escapeHtml(lead.name)},</p>
      <p>vielen Dank für deine Anfrage bei STRUKTIVA Unternehmensarchitektur.</p>
      <p>Deine Nachricht ist eingegangen. Ich prüfe dein Anliegen und melde mich mit einer passenden Rückmeldung.</p>
      <p>Viele Grüße<br />Sven Matzke<br />STRUKTIVA Unternehmensarchitektur</p>
    </div>
  `
}

function buildConfirmationText(lead) {
  return [
    `Hallo ${lead.name},`,
    '',
    'vielen Dank für deine Anfrage bei STRUKTIVA Unternehmensarchitektur.',
    '',
    'Deine Nachricht ist eingegangen. Ich prüfe dein Anliegen und melde mich mit einer passenden Rückmeldung.',
    '',
    'Viele Grüße',
    'Sven Matzke',
    'STRUKTIVA Unternehmensarchitektur',
  ].join('\n')
}

function createSmtpTransporter() {
  const host = process.env.SMTP_HOST
  const portValue = process.env.SMTP_PORT
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  const port = Number.parseInt(String(portValue || ''), 10)
  if (!host || !Number.isFinite(port) || !user || !pass) {
    throw new Error('SMTP environment variables are incomplete.')
  }

  const secure = port === 465

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  })
}

async function sendLeadEmails(lead) {
  const to = process.env.LEAD_RECEIVER_EMAIL
  const from = process.env.SMTP_FROM

  if (!to || !from) {
    throw new Error('Lead email environment variables are incomplete.')
  }

  const transporter = createSmtpTransporter()

  await transporter.sendMail({
    from,
    to,
    replyTo: lead.email,
    subject: 'Neue STRUKTIVA-Anfrage über die Website',
    html: buildAdminEmailHtml(lead),
    text: buildAdminEmailText(lead),
  })

  await transporter.sendMail({
    from,
    to: lead.email,
    subject: 'Deine Anfrage bei STRUKTIVA ist eingegangen',
    html: buildConfirmationHtml(lead),
    text: buildConfirmationText(lead),
  })
}

async function sendLeadWebhook(lead) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL
  if (!webhookUrl) return

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(lead),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Webhook request failed: ${errorText}`)
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return json(res, 405, { error: 'Methode nicht erlaubt.' })
  }

  try {
    const body = await parseRequestBody(req)
    const validation = validateLeadInput(body)

    if (!validation.ok) {
      return json(res, validation.statusCode, { error: validation.error })
    }

    const lead = validation.lead

    await sendLeadEmails(lead)
    await sendLeadWebhook(lead)

    return json(res, 200, {
      ok: true,
      message:
        'Vielen Dank für deine Anfrage. Deine Nachricht wurde erfolgreich übermittelt. STRUKTIVA meldet sich zeitnah bei dir.',
    })
  } catch (error) {
    console.error('Lead submission failed', error)
    return json(res, 500, {
      error: 'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuche es erneut oder kontaktiere STRUKTIVA per E-Mail.',
    })
  }
}
