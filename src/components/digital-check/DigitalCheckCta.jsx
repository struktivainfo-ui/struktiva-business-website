import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function DigitalCheckCta() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-digital-check-cta" aria-labelledby="struktiva-digital-check-cta-title">
      <motion.div
        className="struktiva-digital-check-cta__inner"
        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.38 }}
        transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="struktiva-digital-check-eyebrow">Der erste Schritt muss nicht kompliziert sein</p>
          <h2 id="struktiva-digital-check-cta-title">
            Beschreiben Sie, was heute nicht gut funktioniert. Wir schauen gemeinsam auf den Zusammenhang.
          </h2>
          <p>Sie müssen keine technische Lösung benennen.</p>
          <p>Ein kurzer Überblick über Ihre Situation reicht für den Einstieg.</p>
        </div>
        <div className="struktiva-digital-check-cta__actions">
          <a className="struktiva-digital-check-primary" href="/kontakt#lead-form">
            <span>Digital-Check anfragen</span>
            <ArrowRight aria-hidden="true" />
          </a>
          <a className="struktiva-digital-check-cta__text-link" href="/kontakt">
            Direkt Kontakt aufnehmen
          </a>
        </div>
      </motion.div>
    </section>
  )
}
