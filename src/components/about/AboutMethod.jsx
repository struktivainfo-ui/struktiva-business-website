import { motion, useReducedMotion } from 'framer-motion'
import { aboutMethodSteps } from './aboutData.js'

export default function AboutMethod() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-about-method" aria-labelledby="struktiva-about-method-title">
      <div className="struktiva-about-method__inner">
        <motion.div
          className="struktiva-about-method__intro"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-about-eyebrow">Die Arbeitsweise</p>
          <h2 id="struktiva-about-method-title">Erst verstehen. Dann strukturieren. Danach gezielt umsetzen.</h2>
        </motion.div>
        <motion.ol
          className="struktiva-about-method-line"
          aria-label="Arbeitsweise in vier Schritten"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {aboutMethodSteps.map((step, index) => (
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
