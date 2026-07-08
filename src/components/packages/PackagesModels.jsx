import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { collaborationModels } from './packagesData.js'

export default function PackagesModels() {
  return (
    <>
      <section className="struktiva-packages-section struktiva-packages-orientation" aria-labelledby="struktiva-packages-orientation-title">
        <div className="struktiva-packages-section__intro">
          <p className="struktiva-packages-eyebrow">Der Bedarf entscheidet</p>
          <h2 id="struktiva-packages-orientation-title">Ein Projekt kann einmalig sein. Digitale Entwicklung kann aber auch weitergehen.</h2>
          <p>
            Manche Aufgaben sind klar abgegrenzt. Zum Beispiel eine neue Website, eine Landingpage oder eine konkrete technische Umsetzung. Andere Unternehmen möchten mehrere Bereiche schrittweise weiterentwickeln oder benötigen regelmäßig Unterstützung bei digitalen Abläufen, Kundenwegen oder Systemen.
          </p>
        </div>
        <div className="struktiva-packages-orientation__terms" aria-label="Grundmodelle">
          <span>Einzelprojekt</span>
          <span>schrittweise Weiterentwicklung</span>
          <span>laufende Betreuung</span>
        </div>
      </section>

      <section className="struktiva-packages-section" aria-labelledby="struktiva-packages-models-title">
        <div className="struktiva-packages-section__intro">
          <p className="struktiva-packages-eyebrow">Drei Zusammenarbeitsmodelle</p>
          <h2 id="struktiva-packages-models-title">Nicht als Tarifleiter, sondern als Entscheidungshilfe.</h2>
        </div>
        <div className="struktiva-packages-models">
          {collaborationModels.map((model, index) => (
            <motion.article
              key={model.key}
              className="struktiva-packages-model"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.48, delay: index * 0.06 }}
            >
              <div className="struktiva-packages-model__label">{model.label}</div>
              <div>
                <h3>{model.title}</h3>
                <p className="struktiva-packages-model__fit">Geeignet wenn:</p>
                <ul>
                  {model.fit.map((item) => (
                    <li key={item}>
                      <CheckCircle2 aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="struktiva-packages-model__statement">{model.statement}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  )
}
