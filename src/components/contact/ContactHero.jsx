import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const startingPoints = ['Unklare Website', 'verteilte Anfragen', 'manuelle Abläufe', 'Kundenbindung', 'bestehende Systeme']
const pathSteps = ['Situation beschreiben', 'gemeinsam einordnen', 'nächsten Schritt entscheiden']

export default function ContactHero() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-contact-hero" aria-labelledby="struktiva-contact-hero-title">
      <div className="struktiva-contact-hero__inner">
        <motion.div
          className="struktiva-contact-hero__content"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-contact-eyebrow">Kontakt zu STRUKTIVA</p>
          <h1 id="struktiva-contact-hero-title">
            Erzählen Sie uns, was heute nicht gut funktioniert.
          </h1>
          <div className="struktiva-contact-hero__lead">
            <p>Die technische Lösung muss noch nicht feststehen. Sie können uns schreiben, anrufen oder den Digital-Check als strukturierten Einstieg nutzen.</p>
            <p>
              Beschreiben Sie einfach, wo heute unnötige Arbeit, unklare Kontaktwege oder digitale Brüche entstehen.
            </p>
          </div>
          <div className="struktiva-contact-hero__actions" aria-label="Kontakt Einstiege">
            <a className="struktiva-contact-primary" href="#lead-form">
              <span>Anfrage beschreiben</span>
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="struktiva-contact-secondary" href="/digital-check#digital-check-anfrage">
              Digital-Check anfragen
            </a>
          </div>
        </motion.div>

        <motion.div
          className="struktiva-contact-hero__visual"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Aus unterschiedlichen Ausgangspunkten entsteht ein gemeinsamer Gesprächseinstieg"
        >
          <div className="struktiva-contact-visual__sources">
            {startingPoints.map((item, index) => (
              <span key={item} style={{ '--source-index': index }}>
                {item}
              </span>
            ))}
          </div>
          <div className="struktiva-contact-visual__thread" aria-hidden="true" />
          <ol className="struktiva-contact-visual__steps">
            {pathSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}
