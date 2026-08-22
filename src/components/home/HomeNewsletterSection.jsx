import { useState } from 'react'

const initialForm = { email: '', consent: false }

export default function HomeNewsletterSection() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    if (isSubmitting) return

    if (!form.email.trim()) {
      setStatus({ type: 'error', message: 'Bitte gib deine E-Mail-Adresse ein.' })
      return
    }
    if (!form.consent) {
      setStatus({ type: 'error', message: 'Bitte bestätige deine Newsletter-Anmeldung.' })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email.trim(), consent: form.consent }),
      })
      const payload = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(payload.error || 'Die Anmeldung konnte gerade nicht gesendet werden.')

      setStatus({ type: 'success', message: payload.message || 'Danke. Deine Newsletter-Anmeldung ist eingegangen.' })
      setForm(initialForm)
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Die Anmeldung konnte gerade nicht gesendet werden. Bitte versuche es später erneut.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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

        <form className="struktiva-newsletter__form" onSubmit={handleSubmit} noValidate>
          <label className="struktiva-newsletter__label" htmlFor="newsletter-email">E-Mail-Adresse</label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            placeholder="Deine E-Mail-Adresse"
            autoComplete="email"
            inputMode="email"
            required
          />
          <label className="struktiva-newsletter__consent">
            <input
              name="newsletter-consent"
              type="checkbox"
              checked={form.consent}
              onChange={(event) => setForm((current) => ({ ...current, consent: event.target.checked }))}
              required
            />
            <span>Ich möchte den STRUKTIVA Newsletter per E-Mail erhalten.</span>
          </label>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Wird angemeldet …' : 'Newsletter abonnieren'}
          </button>
          {status.message ? (
            <p className={`struktiva-newsletter__status struktiva-newsletter__status--${status.type}`} role="status">
              {status.message}
            </p>
          ) : null}
          <p className="struktiva-newsletter__fallback-note">
            Falls die Anmeldung nicht gesendet werden kann, erreichst du uns unter{' '}
            <a href="mailto:struktiva.info@gmail.com?subject=Newsletter-Anmeldung%20STRUKTIVA">struktiva.info@gmail.com</a>.
          </p>
        </form>
      </div>
    </section>
  )
}
