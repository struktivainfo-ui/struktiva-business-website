import { motion, useReducedMotion } from 'framer-motion'

export const practiceLabels = {
  real: 'Echtes Praxisprojekt',
  demo: 'Demo-Konzept',
}

export default function PracticeTransparency() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-practice-transparency" aria-labelledby="struktiva-practice-transparency-title">
      <div className="struktiva-practice-transparency__inner">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-practice-eyebrow">Transparenz zuerst</p>
          <h2 id="struktiva-practice-transparency-title">Echte Projekte und Demonstrationsbeispiele - klar getrennt.</h2>
        </motion.div>
        <motion.div
          className="struktiva-practice-transparency__copy"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>Nicht jedes Beispiel auf dieser Seite ist ein Kundenauftrag.</p>
          <p>Echte Praxisprojekte werden als solche gekennzeichnet.</p>
          <p>
            Zusätzliche Demo-Konzepte zeigen, wie digitale Strukturen für unterschiedliche Branchen oder Situationen aufgebaut werden könnten.
          </p>
          <p>So bleibt transparent, was real umgesetzt wurde und was als konzeptionelles Beispiel dient.</p>
          <div className="struktiva-practice-label-system" aria-label="Kennzeichnung der Beispiele">
            <span data-practice-label="real">{practiceLabels.real}</span>
            <span data-practice-label="demo">{practiceLabels.demo}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
