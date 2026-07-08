import { motion, useReducedMotion } from 'framer-motion'
import { digitalCheckAreas } from './digitalCheckData.js'

export default function DigitalCheckAreas() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-digital-check-areas" aria-labelledby="struktiva-digital-check-areas-title">
      <div className="struktiva-digital-check-areas__inner">
        <motion.div
          className="struktiva-digital-check-areas__intro"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="struktiva-digital-check-areas-title">Sechs Bereiche, die wir im Zusammenhang betrachten.</h2>
          <p>
            Die Prüffelder werden nicht isoliert bewertet. Entscheidend ist, wie Sichtbarkeit, Kontakt, Kundenführung und interne Abläufe ineinandergreifen.
          </p>
        </motion.div>

        <div className="struktiva-digital-check-area-map">
          <div className="struktiva-digital-check-area-map__center">
            <span>Ihr Unternehmen</span>
            <small>Kontaktpunkte, Systeme und Alltag</small>
          </div>
          <ol aria-label="Sechs Prüffelder des Digital-Checks">
            {digitalCheckAreas.map((area, index) => (
              <motion.li
                key={area.title}
                className={`struktiva-digital-check-area struktiva-digital-check-area--${index + 1}`}
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.46, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="struktiva-digital-check-area__index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.question}</p>
                  <ul>
                    {area.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
