import React, { useEffect, useRef, useState } from 'react'

const COOKIE_CONSENT_STORAGE_KEY = 'struktiva-cookie-consent-v1'
const COOKIE_SETTINGS_EVENT = 'struktiva:open-cookie-settings'

// Existing IDs from the current site setup.
const GOOGLE_ANALYTICS_ID = 'G-FN6JXMXCSP'
const PINTEREST_TAG_ID = '2612362769403'

function createDefaultConsent() {
  return {
    necessary: true,
    statistics: false,
    marketing: false,
  }
}

function normalizeConsent(value) {
  return {
    necessary: true,
    statistics: Boolean(value?.statistics),
    marketing: Boolean(value?.marketing),
  }
}

function readStoredConsent() {
  if (typeof window === 'undefined') return null

  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
    if (!raw) return null

    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return null

    return normalizeConsent(parsed)
  } catch {
    return null
  }
}

function persistConsent(consent) {
  if (typeof window === 'undefined') return

  const payload = {
    ...normalizeConsent(consent),
    version: 1,
    updatedAt: new Date().toISOString(),
  }

  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(payload))
}

function loadScriptOnce({ id, src }) {
  if (typeof document === 'undefined') return Promise.resolve()

  const existingById = id ? document.getElementById(id) : null
  if (existingById) {
    return Promise.resolve()
  }

  const existingBySrc = document.querySelector(`script[src="${src}"]`)
  if (existingBySrc) {
    return Promise.resolve()
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    if (id) script.id = id
    script.async = true
    script.src = src
    script.onload = () => {
      script.dataset.loaded = 'true'
      resolve()
    }
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
    document.head.appendChild(script)
  })
}

function ensureGtagBootstrap() {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []

  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
  }
}

async function ensureGoogleAnalytics() {
  if (typeof window === 'undefined') return

  ensureGtagBootstrap()

  await loadScriptOnce({
    id: 'struktiva-gtag-script',
    src: `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`,
  })

  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })

  if (!window.__struktivaAnalyticsInitialized) {
    window.gtag('js', new Date())
    window.gtag('config', GOOGLE_ANALYTICS_ID, { send_page_view: false })
    window.__struktivaAnalyticsInitialized = true
  }
}

function revokeGoogleAnalyticsConsent() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  window.gtag('consent', 'update', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
}

function trackStatisticsPageView(pathname) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  window.gtag('event', 'page_view', {
    page_path: pathname,
    page_location: window.location.href,
    page_title: document.title,
  })
}

function ensurePinterestBootstrap() {
  if (typeof window === 'undefined' || typeof window.pintrk === 'function') return

  const queue = []

  const pintrk = function pintrkProxy() {
    queue.push(Array.from(arguments))
  }

  pintrk.queue = queue
  pintrk.version = '3.0'
  window.pintrk = pintrk
}

async function ensurePinterestTag() {
  if (typeof window === 'undefined') return

  ensurePinterestBootstrap()

  await loadScriptOnce({
    id: 'struktiva-pinterest-script',
    src: 'https://s.pinimg.com/ct/core.js',
  })

  if (!window.__struktivaPinterestInitialized && typeof window.pintrk === 'function') {
    // Existing Pinterest Base Code ID from the previous implementation.
    window.pintrk('load', PINTEREST_TAG_ID)
    window.__struktivaPinterestInitialized = true
  }
}

function trackMarketingPageView() {
  if (typeof window === 'undefined' || typeof window.pintrk !== 'function') return
  window.pintrk('page')
}

export function trackMarketingLead() {
  if (typeof window === 'undefined') return
  if (!window.__struktivaConsentState?.marketing) return
  if (typeof window.pintrk !== 'function') return

  window.pintrk('track', 'lead')
}

export function openCookieSettings() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(COOKIE_SETTINGS_EVENT))
}

function CookieToggle({ label, description, checked, disabled, onChange }) {
  return (
    <div className={`cookie-toggle-card${disabled ? ' is-disabled' : ''}`}>
      <div className="cookie-toggle-copy">
        <p className="cookie-toggle-label">{label}</p>
        <p className="cookie-toggle-description">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={`${label} ${checked ? 'aktiviert' : 'deaktiviert'}`}
        disabled={disabled}
        className={`cookie-toggle-switch${checked ? ' is-on' : ''}`}
        onClick={() => {
          if (!disabled) onChange(!checked)
        }}
      >
        <span className="cookie-toggle-thumb" />
      </button>
    </div>
  )
}

function CookieSettingsModal({ draftConsent, setDraftConsent, onClose, onSave, onAcceptAll, onAcceptNecessaryOnly }) {
  useEffect(() => {
    document.body.classList.add('cookie-modal-open')

    return () => {
      document.body.classList.remove('cookie-modal-open')
    }
  }, [])

  return (
    <div className="cookie-modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="cookie-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="cookie-modal-header">
          <div>
            <p className="cookie-eyebrow">STRUKTIVA Datenschutz</p>
            <h2 id="cookie-settings-title" className="cookie-modal-title">Cookie-Einstellungen</h2>
            <p className="cookie-modal-text">Du kannst deine Auswahl jederzeit ändern oder widerrufen.</p>
          </div>
          <button type="button" className="cookie-close-button" aria-label="Cookie-Einstellungen schließen" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="cookie-modal-groups">
          <CookieToggle
            label="Notwendig"
            description="Diese Cookies sind erforderlich, damit die Webseite zuverlässig funktioniert."
            checked
            disabled
            onChange={() => {}}
          />
          <CookieToggle
            label="Statistik"
            description="Hilft uns zu verstehen, wie Besucher die Webseite nutzen, damit wir Inhalte und Struktur verbessern können."
            checked={draftConsent.statistics}
            onChange={(nextValue) => setDraftConsent((current) => ({ ...current, statistics: nextValue }))}
          />
          <CookieToggle
            label="Marketing"
            description="Hilft uns, relevante Inhalte und Anzeigen auszuspielen und Kampagnen besser zu messen."
            checked={draftConsent.marketing}
            onChange={(nextValue) => setDraftConsent((current) => ({ ...current, marketing: nextValue }))}
          />
        </div>

        <div className="cookie-modal-actions">
          <button type="button" className="cookie-button cookie-button-primary" onClick={onSave}>Auswahl speichern</button>
          <button type="button" className="cookie-button cookie-button-secondary" onClick={onAcceptAll}>Alle akzeptieren</button>
          <button type="button" className="cookie-button cookie-button-ghost" onClick={onAcceptNecessaryOnly}>Nur notwendige Cookies</button>
        </div>
      </div>
    </div>
  )
}

function CookieBanner({ onAcceptAll, onAcceptNecessaryOnly, onOpenSettings }) {
  return (
    <div className="cookie-banner-shell" role="dialog" aria-modal="false" aria-labelledby="cookie-banner-title">
      <div className="cookie-banner-panel">
        <div className="cookie-banner-copy">
          <p className="cookie-eyebrow">Datenschutz & Auswahl</p>
          <h2 id="cookie-banner-title" className="cookie-banner-title">Cookie-Einstellungen</h2>
          <p className="cookie-banner-text">
            Wir verwenden notwendige Cookies, damit diese Webseite zuverlässig funktioniert. Mit deiner Zustimmung
            nutzen wir außerdem Statistik- und Marketing-Technologien, um unsere Webseite zu verbessern, die
            Sichtbarkeit zu messen und unsere Angebote gezielter auszurichten. Du kannst selbst entscheiden, welche
            Kategorien du erlauben möchtest.
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button type="button" className="cookie-button cookie-button-primary" onClick={onAcceptAll}>Alle akzeptieren</button>
          <button type="button" className="cookie-button cookie-button-secondary" onClick={onAcceptNecessaryOnly}>Nur notwendige Cookies</button>
          <button type="button" className="cookie-button cookie-button-ghost" onClick={onOpenSettings}>Einstellungen</button>
        </div>
      </div>
    </div>
  )
}

export function CookieConsentLayer({ pathname }) {
  const [isReady, setIsReady] = useState(false)
  const [hasStoredChoice, setHasStoredChoice] = useState(false)
  const [consent, setConsent] = useState(createDefaultConsent)
  const [draftConsent, setDraftConsent] = useState(createDefaultConsent)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const statisticsPathRef = useRef('')
  const marketingPathRef = useRef('')

  useEffect(() => {
    const storedConsent = readStoredConsent()

    if (storedConsent) {
      setConsent(storedConsent)
      setDraftConsent(storedConsent)
      setHasStoredChoice(true)
    } else {
      const defaults = createDefaultConsent()
      setConsent(defaults)
      setDraftConsent(defaults)
      setHasStoredChoice(false)
    }

    setIsReady(true)
  }, [])

  useEffect(() => {
    if (!isReady) return

    const handleOpenSettings = () => {
      setDraftConsent(consent)
      setIsSettingsOpen(true)
    }

    window.addEventListener(COOKIE_SETTINGS_EVENT, handleOpenSettings)

    return () => {
      window.removeEventListener(COOKIE_SETTINGS_EVENT, handleOpenSettings)
    }
  }, [consent, isReady])

  useEffect(() => {
    if (!isReady) return

    window.__struktivaConsentState = consent
    document.body.classList.toggle('cookie-banner-visible', !hasStoredChoice)
  }, [consent, hasStoredChoice, isReady])

  useEffect(() => {
    if (!isReady) return

    let cancelled = false

    const syncTracking = async () => {
      if (consent.statistics) {
        await ensureGoogleAnalytics()
        if (!cancelled && statisticsPathRef.current !== pathname) {
          trackStatisticsPageView(pathname)
          statisticsPathRef.current = pathname
        }
      } else {
        statisticsPathRef.current = ''
        revokeGoogleAnalyticsConsent()
      }

      if (consent.marketing) {
        await ensurePinterestTag()
        if (!cancelled && marketingPathRef.current !== pathname) {
          trackMarketingPageView()
          marketingPathRef.current = pathname
        }
      } else {
        marketingPathRef.current = ''
      }
    }

    syncTracking()

    return () => {
      cancelled = true
    }
  }, [consent, isReady, pathname])

  useEffect(() => {
    if (!isReady) return

    return () => {
      document.body.classList.remove('cookie-banner-visible')
      document.body.classList.remove('cookie-modal-open')
    }
  }, [isReady])

  const storeConsent = (nextConsent) => {
    const normalized = normalizeConsent(nextConsent)
    persistConsent(normalized)
    setConsent(normalized)
    setDraftConsent(normalized)
    setHasStoredChoice(true)
    setIsSettingsOpen(false)
  }

  if (!isReady) return null

  return (
    <>
      {!hasStoredChoice ? (
        <CookieBanner
          onAcceptAll={() => storeConsent({ necessary: true, statistics: true, marketing: true })}
          onAcceptNecessaryOnly={() => storeConsent(createDefaultConsent())}
          onOpenSettings={() => {
            setDraftConsent(consent)
            setIsSettingsOpen(true)
          }}
        />
      ) : null}

      {isSettingsOpen ? (
        <CookieSettingsModal
          draftConsent={draftConsent}
          setDraftConsent={setDraftConsent}
          onClose={() => setIsSettingsOpen(false)}
          onSave={() => storeConsent(draftConsent)}
          onAcceptAll={() => storeConsent({ necessary: true, statistics: true, marketing: true })}
          onAcceptNecessaryOnly={() => storeConsent(createDefaultConsent())}
        />
      ) : null}
    </>
  )
}
