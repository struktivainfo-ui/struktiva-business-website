import { openCookieSettings } from '../../cookieConsent.jsx'
import { contactDetails } from '../../legacy/legacyContent.jsx'
import { trackDigitalCheckEvent } from '../../lib/digitalCheckTracking.js'

const currentYear = new Date().getFullYear()

function trackContact(eventName) {
  trackDigitalCheckEvent(eventName, {
    page_path: window.location.pathname,
    lead_type: 'digital_check',
  })
}

export default function CampaignFooter() {
  return (
    <footer className="campaign-footer">
      <div className="campaign-footer__inner">
        <div className="campaign-footer__brand">
          <strong>STRUKTIVA Digitale Unternehmensberatung</strong>
          <span>{contactDetails.addressLine1}, {contactDetails.addressLine2}</span>
          <span>Digital sinnvoll verbinden.</span>
        </div>
        <address className="campaign-footer__contact">
          <a href={`mailto:${contactDetails.email}`} onClick={() => trackContact('digital_check_email_click')}>
            {contactDetails.email}
          </a>
          <a href={contactDetails.phoneHref} onClick={() => trackContact('digital_check_phone_click')}>
            {contactDetails.phoneLabel}
          </a>
          <a
            href={contactDetails.whatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackContact('digital_check_whatsapp_click')}
          >
            WhatsApp
          </a>
        </address>
        <nav className="campaign-footer__legal" aria-label="Rechtliches">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <button type="button" onClick={openCookieSettings}>Cookie-Einstellungen</button>
        </nav>
      </div>
      <p className="campaign-footer__copyright">© {currentYear} STRUKTIVA</p>
    </footer>
  )
}
