import { personalDigitalCheckOffer } from '../config/digitalCheckOffer.js'

const ALLOWED_EVENTS = new Set([
  'digital_check_page_view',
  'digital_check_cta_click',
  'digital_check_form_start',
  'digital_check_form_submit_success',
  'digital_check_form_submit_error',
  'digital_check_whatsapp_click',
  'digital_check_phone_click',
  'digital_check_email_click',
])

const ALLOWED_PARAMETER_KEYS = new Set([
  'page_path',
  'lead_type',
  'source',
  'medium',
  'campaign',
  'content',
  'term',
  'referrer_domain',
  'gclid_present',
  'preferred_contact',
  'industry',
  'cta_location',
  'error_category',
  'event_id',
])

const ERROR_CATEGORIES = new Set(['validation', 'rate_limited', 'network', 'server', 'unknown'])
const trackedOnce = new Set()

function cleanValue(value) {
  if (typeof value === 'boolean') return value
  if (typeof value !== 'string' && typeof value !== 'number') return undefined
  return String(value).trim().slice(0, 200) || undefined
}

function sanitizeParameters(parameters = {}) {
  return Object.fromEntries(
    Object.entries(parameters)
      .filter(([key]) => ALLOWED_PARAMETER_KEYS.has(key))
      .map(([key, value]) => [key, cleanValue(value)])
      .filter(([, value]) => value !== undefined),
  )
}

function getConsent() {
  return window.__struktivaConsentState || { statistics: false, marketing: false }
}

function getAdsSendTo() {
  const value = String(import.meta.env.VITE_GOOGLE_ADS_DIGITAL_CHECK_SEND_TO || '').trim()
  return /^AW-\d+\/[A-Za-z0-9_-]+$/.test(value) ? value : ''
}

export function buildDigitalCheckTrackingParameters(attribution = {}, additions = {}) {
  return sanitizeParameters({
    page_path: window.location.pathname,
    lead_type: personalDigitalCheckOffer.leadType,
    source: attribution.source,
    medium: attribution.medium,
    campaign: attribution.campaign,
    content: attribution.content,
    term: attribution.term,
    referrer_domain: attribution.referrerDomain,
    gclid_present: Boolean(attribution.gclid),
    ...additions,
  })
}

export function trackDigitalCheckEvent(eventName, parameters = {}, options = {}) {
  if (typeof window === 'undefined' || !ALLOWED_EVENTS.has(eventName)) return

  const sanitized = sanitizeParameters(parameters)
  const consent = getConsent()
  const hasDestination = consent.statistics || (eventName === 'digital_check_form_submit_success' && consent.marketing)
  if (!hasDestination) return

  const onceKey = options.onceKey ? `${eventName}:${options.onceKey}` : ''
  if (onceKey && trackedOnce.has(onceKey)) return
  if (onceKey) trackedOnce.add(onceKey)

  if (consent.statistics && typeof window.gtag === 'function') {
    window.gtag('event', eventName, sanitized)

    if (eventName === 'digital_check_form_submit_success') {
      window.gtag('event', 'generate_lead', {
        ...sanitized,
        method: 'digital_check_form',
      })
    }
  }

  if (eventName !== 'digital_check_form_submit_success' || !consent.marketing) return

  const sendTo = getAdsSendTo()
  if (sendTo && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: sendTo,
      value: personalDigitalCheckOffer.price,
      currency: personalDigitalCheckOffer.currency,
      transaction_id: sanitized.event_id,
    })
  }

  if (typeof window.pintrk === 'function') {
    window.pintrk('track', 'lead')
  }
}

export function normalizeDigitalCheckErrorCategory(value) {
  return ERROR_CATEGORIES.has(value) ? value : 'unknown'
}
