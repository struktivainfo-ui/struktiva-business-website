import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { serviceAreas } from './servicesData.js'

export default function ServicesAreas() {
  return (
    <section className="struktiva-services-section struktiva-services-areas" aria-labelledby="struktiva-services-areas-title">
      <div className="struktiva-services-section__intro">
        <p className="struktiva-services-eyebrow">Leistungsbereiche</p>
        <h2 id="struktiva-services-areas-title">Konkrete digitale Bausteine, die einzeln oder im Zusammenhang umgesetzt werden können.</h2>
        <p>
          Die folgenden Bereiche sind keine starren Produktboxen. Sie zeigen, wo digitale Arbeit im Unternehmen greifbar wird und
          welche Umsetzungsthemen häufig zusammengehören.
        </p>
      </div>

      <div className="struktiva-services-areas__list">
        {serviceAreas.map((area, index) => (
          <motion.article
            className="struktiva-services-area"
            id={area.id}
            key={area.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration: 0.46, delay: index * 0.035 }}
          >
            <div className="struktiva-services-area__label">
              <span>{area.label}</span>
              <p>{area.eyebrow}</p>
            </div>
            <div className="struktiva-services-area__body">
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <ul>
                {area.includes.map((item) => (
                  <li key={item}>
                    <CheckCircle2 aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="struktiva-services-area__outcome">
                <strong>Ergebnislogik</strong>
                <p>{area.outcome}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
