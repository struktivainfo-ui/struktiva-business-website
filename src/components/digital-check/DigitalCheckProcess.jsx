import { motion, useReducedMotion } from 'framer-motion'
import { digitalCheckProcess } from './digitalCheckData.js'

export default function DigitalCheckProcess() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="ablauf" className="struktiva-digital-check-process" aria-labelledby="struktiva-digital-check-process-title">
      <div className="struktiva-digital-check-process__inner">
        <motion.div
          className="struktiva-digital-check-process__intro"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-digital-check-eyebrow">So läuft der erste Austausch ab</p>
          <h2 id="struktiva-digital-check-process-title">Klarer Einstieg. Kein unnötiger Beratungsapparat.</h2>
        </motion.div>
        <motion.ol
          className="struktiva-digital-check-process-line"
          aria-label="Ablauf des ersten Austauschs"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {digitalCheckProcess.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
