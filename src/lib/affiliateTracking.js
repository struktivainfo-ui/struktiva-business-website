const GETRESPONSE_REFERRAL_HOST = 'try.getresponsetoday.com'
const DUPLICATE_CLICK_WINDOW_MS = 1_000

let lastTrackedClick = { key: '', timestamp: 0 }

function cleanValue(value, limit = 100) {
  return String(value || '')
    .replace(/[^a-zA-Z0-9 äöüÄÖÜß._~+\-/]/g, '')
    .trim()
    .slice(0, limit)
}

function getTrafficContext() {
  const parameters = new URLSearchParams(window.location.search)
  const source = cleanValue(parameters.get('utm_source'))
  const medium = cleanValue(parameters.get('utm_medium'))
  const campaign = cleanValue(parameters.get('utm_campaign'))
  const content = cleanValue(parameters.get('utm_content'))

  return {
    affiliate_utm_source: source || undefined,
    affiliate_utm_medium: medium || undefined,
    affiliate_utm_campaign: campaign || undefined,
    affiliate_utm_content: content || undefined,
  }
}

export function trackGetResponseClick(placement) {
  if (typeof window === 'undefined' || !window.__struktivaConsentState?.statistics || typeof window.gtag !== 'function') return false

  const affiliatePage = window.location.pathname
  const affiliatePlacement = cleanValue(placement, 50)
  const clickKey = `${affiliatePage}:${affiliatePlacement}`
  const now = Date.now()

  // A double click can otherwise create two affiliate events for one outbound action.
  if (lastTrackedClick.key === clickKey && now - lastTrackedClick.timestamp < DUPLICATE_CLICK_WINDOW_MS) return false

  lastTrackedClick = { key: clickKey, timestamp: now }

  window.gtag('event', 'getresponse_affiliate_click', {
    affiliate_program: 'getresponse',
    affiliate_page: affiliatePage,
    affiliate_placement: affiliatePlacement,
    affiliate_destination_host: GETRESPONSE_REFERRAL_HOST,
    page_path: affiliatePage,
    page_location: window.location.href,
    ...getTrafficContext(),
  })

  return true
}

export const getResponseAffiliateTrackingConfig = {
  eventName: 'getresponse_affiliate_click',
  duplicateClickWindowMs: DUPLICATE_CLICK_WINDOW_MS,
}
