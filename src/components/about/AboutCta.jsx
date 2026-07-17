import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function AboutCta() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-about-cta" aria-labelledby="struktiva-about-cta-title">
      <motion.div
        className="struktiva-about-cta__inner"
        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.38 }}
        transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <h2>Sie sprechen mit Menschen, die Ihr Thema wirklich kennen.</h2>
          <p>Die Zusammenarbeit soll klar und nachvollziehbar bleiben.</p>
          <p>Fragen dürfen verständlich gestellt werden.</p>
          <p>Probleme müssen nicht zuerst in technische Fachbegriffe übersetzt werden.</p>
          <p>
            Es reicht, zu beschreiben, was heute nicht gut funktioniert, unnötig kompliziert ist oder besser zusammenspielen sollte.
          </p>
        </div>
        <div className="struktiva-about-cta__close">
          <p className="struktiva-about-eyebrow">Der erste Schritt</p>
          <h2 id="struktiva-about-cta-title">Sie müssen nicht wissen, welche technische Lösung Sie brauchen.</h2>
          <p>Beginnen Sie mit Ihrer tatsächlichen Situation.</p>
          <p>Der Digital-Check hilft dabei, Zusammenhänge einzuordnen und sinnvolle nächste Schritte zu erkennen.</p>
          <div className="struktiva-about-cta__actions">
            <a className="struktiva-about-primary" href="/digital-check#digital-check-anfrage">
              <span>Digital-Check anfragen</span>
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="struktiva-about-cta__text-link" href="/kontakt">
              Direkt Kontakt aufnehmen
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
