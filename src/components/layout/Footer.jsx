import { currentNavigation } from '../../routing/routeConfig.js'
import { openCookieSettings } from '../../cookieConsent.jsx'
import { contactDetails } from '../../legacy/legacyContent.jsx'

const footerLinks = currentNavigation.primary
const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="struktiva-global-footer">
      <div className="struktiva-global-footer__inner">
        <section className="struktiva-footer-brand" aria-label="STRUKTIVA">
          <a className="struktiva-footer-brand__name" href="/">
            STRUKTIVA
          </a>
          <p className="struktiva-footer-brand__descriptor">Digitale Unternehmensberatung</p>
          <p className="struktiva-footer-brand__text">
            STRUKTIVA verbindet Sichtbarkeit, Kundenführung und digitale Abläufe zu einer klaren Struktur für Unternehmen.
          </p>
          <a className="struktiva-footer-cta" href={currentNavigation.primaryCta.href}>
            {currentNavigation.primaryCta.label}
          </a>
        </section>

        <nav className="struktiva-footer-nav" aria-label="Footer Navigation">
          <h2>Navigation</h2>
          <ul>
            {footerLinks.map((item) => (
              <li key={`footer-${item.label}-${item.href}`}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="struktiva-footer-contact" aria-label="Kontakt">
          <h2>Kontakt</h2>
          <address>
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            <a href={contactDetails.phoneHref}>{contactDetails.phoneLabel}</a>
            <span>{contactDetails.addressLine1}</span>
            <span>{contactDetails.addressLine2}</span>
          </address>
        </section>

        <section className="struktiva-footer-legal" aria-label="Rechtliches">
          <h2>Rechtliches</h2>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <button type="button" onClick={openCookieSettings}>
            Cookie-Einstellungen
          </button>
        </section>
      </div>

      <div className="struktiva-global-footer__bottom">
        <p>© {currentYear} STRUKTIVA Digitale Unternehmensberatung. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  )
}
