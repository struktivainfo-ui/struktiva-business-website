import { motion, useReducedMotion } from 'framer-motion'
import { aboutQuestions } from './aboutData.js'

export default function AboutPhilosophy() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-about-philosophy" aria-labelledby="struktiva-about-philosophy-title">
      <motion.div
        className="struktiva-about-philosophy__inner"
        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="struktiva-about-eyebrow">Erst die Situation verstehen</p>
          <h2 id="struktiva-about-philosophy-title">
            Nicht jede Herausforderung braucht eine neue Website, App oder Automatisierung.
          </h2>
        </div>
        <div className="struktiva-about-philosophy__copy">
          <p>Digitale Möglichkeiten gibt es viele.</p>
          <p>Die entscheidende Frage ist nicht, was technisch gebaut werden kann.</p>
          <p>
            Die entscheidende Frage ist, was für das Unternehmen, seine Kunden und den betrieblichen Alltag tatsächlich sinnvoll ist.
          </p>
          <p>Deshalb beginnt STRUKTIVA mit Zusammenhängen:</p>
          <ul aria-label="Fragen, mit denen STRUKTIVA beginnt">
            {aboutQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </div>
        <p className="struktiva-about-philosophy__statement">
          Die beste Lösung ist nicht die mit den meisten Funktionen. Sondern die, die im Alltag funktioniert.
        </p>
      </motion.div>
    </section>
  )
}
