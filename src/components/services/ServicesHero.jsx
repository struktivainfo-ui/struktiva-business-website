import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { serviceBuildingBlocks, serviceFlow } from './servicesData.js'

export default function ServicesHero() {
  return (
    <section className="struktiva-services-hero" aria-labelledby="struktiva-services-title">
      <motion.div
        className="struktiva-services-hero__content"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="struktiva-services-eyebrow">Konkrete digitale Leistungen</p>
        <h1 id="struktiva-services-title">Digitale Leistungen, die Website, Kundenkontakt und interne Abläufe sinnvoll verbinden.</h1>
        <p>
          STRUKTIVA Digitale Unternehmensberatung plant, entwickelt, verbindet und verbessert digitale Bausteine für Unternehmen.
          Diese Übersicht zeigt, was konkret umgesetzt werden kann - unabhängig davon, ob daraus ein Einzelprojekt, eine
          schrittweise Weiterentwicklung oder eine laufende Zusammenarbeit entsteht.
        </p>
        <div className="struktiva-services-hero__actions" aria-label="Weiterführende Seiten">
          <a className="struktiva-services-primary-link" href="/loesungen">
            <span>Probleme und Lösungen ansehen</span>
            <ArrowRight aria-hidden="true" />
          </a>
          <a className="struktiva-services-secondary-link" href="/pakete">
            Pakete und Zusammenarbeit
          </a>
        </div>
      </motion.div>

      <motion.div
        className="struktiva-services-visual"
        aria-label="Leistungsbausteine werden vom Bedarf bis zur Nutzung verbunden"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="struktiva-services-visual__flow">
          {serviceFlow.map((item, index) => (
            <div className="struktiva-services-visual__step" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
        <div className="struktiva-services-visual__blocks" aria-label="Typische digitale Bausteine">
          {serviceBuildingBlocks.map((block) => (
            <span key={block}>{block}</span>
          ))}
        </div>
        <div className="struktiva-services-visual__result">
          <span>nicht isoliert</span>
          <strong>als nutzbare Struktur verbunden</strong>
        </div>
      </motion.div>
    </section>
  )
}
