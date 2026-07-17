import { motion, useReducedMotion } from 'framer-motion'
import { digitalCheckProblems } from './digitalCheckData.js'

export default function DigitalCheckIntro() {
  const reducedMotion = useReducedMotion()
  return (
    <section className="dc-section dc-problems" aria-labelledby="dc-problems-title">
      <div className="dc-shell">
        <div className="dc-section-heading">
          <p className="dc-eyebrow">Typische Bruchstellen</p>
          <h2 id="dc-problems-title">Kommt Ihnen das bekannt vor?</h2>
          <p>Viele lokale Betriebe sind digital sichtbar – aber Website, Google, Bewertungen und Kontaktwege arbeiten nicht als gemeinsamer Weg zur Anfrage.</p>
        </div>
        <ol className="dc-problems__list">
          {digitalCheckProblems.map((problem, index) => (
            <motion.li
              key={problem}
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{problem}</p>
            </motion.li>
          ))}
        </ol>
        <p className="dc-problems__close">Genau hier setzt der Digital-Check an: nicht mit mehr Technik, sondern mit einer verständlichen Priorisierung.</p>
      </div>
    </section>
  )
}
