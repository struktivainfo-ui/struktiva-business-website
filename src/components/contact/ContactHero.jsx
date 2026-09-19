import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const contactHeroImage = '/images/inhaber-sven-jessica.webp'

export default function ContactHero() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-contact-hero" aria-labelledby="struktiva-contact-hero-title">
      <div className="struktiva-contact-hero__media" aria-hidden="true">
        <img src={contactHeroImage} alt="" />
      </div>
      <div className="struktiva-contact-hero__inner">
        <motion.div
          className="struktiva-contact-hero__content"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-contact-eyebrow">STRUKTIVA · Direkter Kontakt</p>
          <h1 id="struktiva-contact-hero-title">
            Sie kennen das Problem. Den Rest klären wir gemeinsam.
          </h1>
          <div className="struktiva-contact-hero__lead">
            <p>Die technische Lösung muss noch nicht feststehen. Schreiben Sie uns, rufen Sie an oder starten Sie mit dem Digital-Check – wir ordnen Ihre Situation persönlich ein.</p>
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
      </div>
    </section>
  )
}
