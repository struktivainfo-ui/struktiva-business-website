import { useEffect, useRef, useState } from 'react'

const MAILERLITE_ACCOUNT_ID = '2586533'
const MAILERLITE_SCRIPT_URL = 'https://assets.mailerlite.com/js/universal.js'

function loadMailerLite() {
  document.querySelector('script[data-struktiva-mailer-lite="true"]')?.remove()

  window.ml = function queueMailerLiteCommand(...args) {
    ;(window.ml.q = window.ml.q || []).push(args)
  }
  window.ml('account', MAILERLITE_ACCOUNT_ID)

  const script = document.createElement('script')
  script.src = MAILERLITE_SCRIPT_URL
  script.async = true
  script.dataset.struktivaMailerLite = 'true'
  document.head.append(script)
  return script
}

export default function HomeNewsletterSection() {
  const embedRef = useRef(null)
  const [embedUnavailable, setEmbedUnavailable] = useState(false)

  useEffect(() => {
    const script = loadMailerLite()
    const applyAccessibleFormCopy = () => {
      const input = embedRef.current?.querySelector('input[type="email"]')
      const submit = embedRef.current?.querySelector('button[type="submit"], input[type="submit"]')

      if (input) {
        input.placeholder = 'Deine E-Mail-Adresse'
        input.setAttribute('aria-label', 'Deine E-Mail-Adresse')
        input.setAttribute('autocomplete', 'email')
        input.setAttribute('inputmode', 'email')
      }

      if (submit) submit.textContent = 'Newsletter abonnieren'
    }
    const verifyEmbed = () => {
      window.setTimeout(() => {
        if (!embedRef.current?.children.length) setEmbedUnavailable(true)
        else applyAccessibleFormCopy()
      }, 2500)
    }
    const observer = new MutationObserver(applyAccessibleFormCopy)

    if (embedRef.current) observer.observe(embedRef.current, { childList: true, subtree: true })

    script.addEventListener('load', verifyEmbed, { once: true })

    return () => {
      script.removeEventListener('load', verifyEmbed)
      observer.disconnect()
    }
  }, [])

  return (
    <section className="struktiva-newsletter" aria-labelledby="struktiva-newsletter-title">
      <div className="struktiva-newsletter__inner">
        <div className="struktiva-newsletter__copy">
          <p className="struktiva-newsletter__eyebrow">STRUKTIVA Newsletter</p>
          <h2 id="struktiva-newsletter-title">STRUKTIVA Newsletter</h2>
          <p>
            Erhalte Impulse zu digitaler Struktur, Website, Sichtbarkeit, Kundenführung und einfachen digitalen
            Lösungen für Unternehmen.
          </p>
          <p className="struktiva-newsletter__note">
            Mit deiner Anmeldung akzeptierst du, dass STRUKTIVA dir E-Mails mit Tipps, Angeboten und Informationen
            senden darf. Du kannst dich jederzeit wieder abmelden.
          </p>
        </div>

        <div className="struktiva-newsletter__form">
          <div ref={embedRef} className="ml-embedded" data-form="cZ1dox" />
          {embedUnavailable ? (
            <div className="struktiva-newsletter__fallback" role="status">
              <p>Die Newsletter-Anmeldung ist gerade nicht erreichbar.</p>
              <a
                className="struktiva-newsletter__fallback-action"
                href="mailto:struktiva.info@gmail.com?subject=Newsletter-Anmeldung%20STRUKTIVA"
              >
                Newsletter öffnen
              </a>
              <p className="struktiva-newsletter__fallback-note">
                Der Button öffnet eine E-Mail an STRUKTIVA, damit wir deine Anmeldung persönlich aufnehmen können.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
