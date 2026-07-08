import { motion, useReducedMotion } from 'framer-motion'
import { salonKarolaJourney } from './salonKarolaCaseData.js'

export default function CaseStudyDevelopmentJourney() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-salon-journey" aria-labelledby="struktiva-salon-journey-title">
      <div className="struktiva-salon-section-grid">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-salon-eyebrow">Schrittweise Entwicklung</p>
          <h2 id="struktiva-salon-journey-title">Ein digitales System entsteht nicht an einem Wochenende.</h2>
          <p>
            Das Projekt entwickelte sich über mehrere Etappen. Neue Anforderungen wurden betrachtet, Lösungen entwickelt und vorhandene Bereiche weiter verbunden.
          </p>
        </motion.div>
        <motion.ol
          className="struktiva-salon-journey__steps"
          aria-label="Projektentwicklung in Etappen"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          {salonKarolaJourney.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
