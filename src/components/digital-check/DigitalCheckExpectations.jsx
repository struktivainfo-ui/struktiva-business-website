import { motion, useReducedMotion } from 'framer-motion'
import { digitalCheckExpectations, digitalCheckNotPromised } from './digitalCheckData.js'

export default function DigitalCheckExpectations() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-digital-check-expectations" aria-labelledby="struktiva-digital-check-expectations-title">
      <div className="struktiva-digital-check-expectations__inner">
        <motion.div
          className="struktiva-digital-check-expectations__promise"
          initial={reducedMotion ? false : { opacity: 0, x: -16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="struktiva-digital-check-expectations-title">Was Sie vom ersten Austausch erwarten können.</h2>
          <ul>
            {digitalCheckExpectations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="struktiva-digital-check-expectations__boundary"
          initial={reducedMotion ? false : { opacity: 0, x: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>Kein Online-Score. Kein vorgefertigtes Verkaufsgespräch.</h2>
          <p>Der Digital-Check bewertet Ihr Unternehmen nicht mit einer künstlichen Punktzahl.</p>
          <p>Und das Ergebnis steht nicht schon vor dem Gespräch fest.</p>
          <p>Nicht jedes Unternehmen braucht eine neue Website, eine App, ein CRM oder eine Automatisierung.</p>
          <p>Ziel ist zuerst Klarheit darüber, was tatsächlich verbessert werden sollte.</p>
          <div className="struktiva-digital-check-expectations__not-promised">
            <h3>Was damit nicht gemeint ist</h3>
            <ul>
              {digitalCheckNotPromised.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
