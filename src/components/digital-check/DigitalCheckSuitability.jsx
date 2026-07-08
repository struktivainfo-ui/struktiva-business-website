import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { digitalCheckFitSituations } from './digitalCheckData.js'

export default function DigitalCheckSuitability() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-digital-check-suitability" aria-labelledby="struktiva-digital-check-suitability-title">
      <div className="struktiva-digital-check-suitability__inner">
        <motion.div
          className="struktiva-digital-check-suitability__intro"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.34 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-digital-check-eyebrow">Typische Ausgangssituationen</p>
          <h2 id="struktiva-digital-check-suitability-title">
            Sinnvoll, wenn Sie merken, dass digital etwas nicht rund läuft - aber der richtige Startpunkt unklar ist.
          </h2>
        </motion.div>

        <motion.ul
          className="struktiva-digital-check-situation-list"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          {digitalCheckFitSituations.map((situation) => (
            <li key={situation}>{situation}</li>
          ))}
        </motion.ul>

        <motion.div
          className="struktiva-digital-check-not-for-all"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h2>Nicht jeder braucht sofort ein großes Digitalprojekt.</h2>
            <p>Wenn aktuell nur eine kleine technische Änderung notwendig ist, braucht es dafür keine umfassende Beratung.</p>
            <p>Auch wenn bereits klar definiert ist, welche einzelne Leistung umgesetzt werden soll, kann ein direkter Kontakt sinnvoller sein.</p>
            <p>
              Der Digital-Check ist besonders dann hilfreich, wenn mehrere digitale Themen zusammenhängen oder der richtige Startpunkt noch unklar ist.
            </p>
          </div>
          <a href="/kontakt" className="struktiva-digital-check-text-link">
            <span>Direkt Kontakt aufnehmen</span>
            <ArrowRight aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
