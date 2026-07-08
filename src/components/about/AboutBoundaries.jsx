import { motion, useReducedMotion } from 'framer-motion'
import { aboutBoundaries } from './aboutData.js'

export default function AboutBoundaries() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-about-boundaries" aria-labelledby="struktiva-about-boundaries-title">
      <div className="struktiva-about-boundaries__inner">
        <motion.div
          className="struktiva-about-implementation"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>Beratung endet nicht zwangsläufig bei einer Präsentation.</h2>
          <p>STRUKTIVA verbindet Analyse, Struktur und praktische Umsetzung.</p>
          <p>Wenn eine neue Website sinnvoll ist, kann sie umgesetzt werden.</p>
          <p>
            Wenn der größere Hebel in Kundenwegen, internen Abläufen, einer App oder einer kleinen Automatisierung liegt, kann dort angesetzt werden.
          </p>
          <p>Entscheidend ist, dass die Lösung aus der tatsächlichen Situation entsteht.</p>
        </motion.div>
        <motion.div
          className="struktiva-about-boundary-list"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-about-eyebrow">Klare Abgrenzung</p>
          <h2 id="struktiva-about-boundaries-title">Nicht jede technische Möglichkeit muss verkauft werden.</h2>
          <ol aria-label="Was STRUKTIVA bewusst nicht ist">
            {aboutBoundaries.map((item, index) => (
              <li key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}
