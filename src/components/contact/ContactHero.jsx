import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const startingPoints = ['Unklare Website', 'verteilte Anfragen', 'manuelle Ablaeufe', 'Kundenbindung', 'bestehende Systeme']
const pathSteps = ['Situation beschreiben', 'gemeinsam einordnen', 'naechsten Schritt entscheiden']

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
            Erzaehlen Sie uns, was heute nicht gut funktioniert. Die technische Loesung muss noch nicht feststehen.
          </h1>
          <div className="struktiva-contact-hero__lead">
            <p>Sie koennen uns schreiben, anrufen oder den Digital-Check als strukturierten Einstieg nutzen.</p>
            <p>
              Beschreiben Sie einfach, wo heute unnoetige Arbeit, unklare Kontaktwege oder digitale Brueche entstehen.
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
          aria-label="Aus unterschiedlichen Ausgangspunkten entsteht ein gemeinsamer Gespraechseinstieg"
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
