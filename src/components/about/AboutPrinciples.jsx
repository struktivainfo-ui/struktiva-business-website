import { motion, useReducedMotion } from 'framer-motion'
import { aboutPrinciples } from './aboutData.js'

export default function AboutPrinciples() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-about-principles" aria-labelledby="struktiva-about-principles-title">
      <div className="struktiva-about-principles__inner">
        <motion.div
          className="struktiva-about-principles__intro"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-about-eyebrow">Haltung und Arbeitsprinzipien</p>
          <h2 id="struktiva-about-principles-title">Drei Prinzipien, die Entscheidungen einfacher machen.</h2>
        </motion.div>
        <ol className="struktiva-about-principle-flow" aria-label="Arbeitsprinzipien von STRUKTIVA">
          {aboutPrinciples.map((principle, index) => (
            <motion.li
              key={principle.title}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.46, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
