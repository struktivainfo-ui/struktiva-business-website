import { useEffect, useState } from 'react'

const STORAGE_KEY = 'struktiva-attribution-v1'
const RETENTION_MS = 30 * 60 * 1000
const PARAMETER_LIMIT = 200

let inMemoryAttribution = null

function cleanCampaignValue(value) {
  return String(value || '')
    .replace(/[^a-zA-Z0-9 äöüÄÖÜß._~+\-/]/g, '')
    .trim()
    .slice(0, PARAMETER_LIMIT)
}

function safeReferrer(value) {
  if (!value) return { referrer: '', referrerDomain: '' }
  try {
    const url = new URL(value)
    return {
      referrer: `${url.origin}${url.pathname}`.slice(0, 500),
      referrerDomain: url.hostname.slice(0, PARAMETER_LIMIT),
    }
  } catch {
    return { referrer: '', referrerDomain: '' }
  }
}

function deriveAttribution() {
  const params = new URLSearchParams(window.location.search)
  const gclid = cleanCampaignValue(params.get('gclid'))
  const referrerData = safeReferrer(document.referrer)
  const explicitSource = cleanCampaignValue(params.get('utm_source'))
  const explicitMedium = cleanCampaignValue(params.get('utm_medium'))

  return {
    source: explicitSource || (gclid ? 'google' : referrerData.referrerDomain || 'direct'),
    medium: explicitMedium || (gclid ? 'cpc' : referrerData.referrerDomain ? 'referral' : 'none'),
    campaign: cleanCampaignValue(params.get('utm_campaign')),
    content: cleanCampaignValue(params.get('utm_content')),
    term: cleanCampaignValue(params.get('utm_term')),
    gclid,
    referrer: referrerData.referrer,
    referrerDomain: referrerData.referrerDomain,
    landingPage: window.location.pathname.slice(0, 300),
    capturedAt: Date.now(),
  }
}

function readStoredAttribution() {
  try {
    const parsed = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || 'null')
    if (!parsed || Date.now() - Number(parsed.capturedAt) > RETENTION_MS) {
      window.sessionStorage.removeItem(STORAGE_KEY)
      return null
    }
    return parsed
  } catch {
    return null
  }
}

function persistIfAllowed(value) {
  if (!window.__struktivaConsentState?.marketing) return
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  } catch {
    // The current-page in-memory attribution remains available.
  }
}

function getInitialAttribution() {
  if (inMemoryAttribution) return inMemoryAttribution
  const stored = readStoredAttribution()
  inMemoryAttribution = stored || deriveAttribution()
  persistIfAllowed(inMemoryAttribution)
  return inMemoryAttribution
}

export function useCampaignAttribution() {
  const [attribution] = useState(getInitialAttribution)

  useEffect(() => {
    const handleConsentChange = (event) => {
      if (event.detail?.marketing) persistIfAllowed(attribution)
    }
    window.addEventListener('struktiva:consent-changed', handleConsentChange)
    return () => window.removeEventListener('struktiva:consent-changed', handleConsentChange)
  }, [attribution])

  return attribution
}

export const campaignAttributionRetentionMinutes = RETENTION_MS / 60_000
