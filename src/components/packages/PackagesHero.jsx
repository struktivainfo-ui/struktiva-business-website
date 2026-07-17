import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const situations = ['Einzelprojekt', 'Weiterentwicklung', 'Betreuung']

export default function PackagesHero() {
  return (
    <section className="struktiva-packages-hero" aria-labelledby="struktiva-packages-title">
      <motion.div
        className="struktiva-packages-hero__content"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="struktiva-packages-eyebrow">Zusammenarbeit, die zum tatsächlichen Bedarf passt</p>
        <h1 id="struktiva-packages-title">Nicht jedes Unternehmen braucht dasselbe Paket. Und nicht jedes Projekt braucht laufende Kosten.</h1>
        <p>
          STRUKTIVA verbindet Beratung und praktische Umsetzung. Je nach Ausgangssituation kann ein klar abgegrenztes Einzelprojekt sinnvoll sein, eine schrittweise Weiterentwicklung oder eine laufende Betreuung bei regelmäßigem Bedarf.
        </p>
        <div className="struktiva-packages-hero__actions" aria-label="Nächste Schritte">
          <a className="struktiva-packages-primary-link" href="/digital-check#digital-check-anfrage">
            <span>Digital-Check anfragen</span>
            <ArrowRight aria-hidden="true" />
          </a>
          <a className="struktiva-packages-secondary-link" href="/loesungen">
            Lösungen ansehen
          </a>
        </div>
      </motion.div>

      <motion.div
        className="struktiva-packages-visual"
        aria-label="Drei Bedarfssituationen führen zu unterschiedlichen Zusammenarbeitsmodellen"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="struktiva-packages-visual__paths">
          {situations.map((item, index) => (
            <motion.div
              key={item}
              className="struktiva-packages-visual__node"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.44, delay: 0.2 + index * 0.08 }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </motion.div>
          ))}
        </div>
        <div className="struktiva-packages-visual__line" aria-hidden="true" />
        <div className="struktiva-packages-visual__result">
          <span>unterschiedlicher Aufwand</span>
          <strong>passendes Modell</strong>
        </div>
      </motion.div>
    </section>
  )
}
