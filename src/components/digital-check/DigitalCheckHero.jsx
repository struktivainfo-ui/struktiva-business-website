import { motion, useReducedMotion } from 'framer-motion'
import { personalDigitalCheckOffer } from '../../config/digitalCheckOffer.js'
import { DigitalCheckPrimaryLink } from './DigitalCheckOfferSummary.jsx'

export default function DigitalCheckHero() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="dc-hero" aria-labelledby="dc-hero-title">
      <div className="dc-hero__glow" aria-hidden="true" />
      <div className="dc-shell dc-hero__grid">
        <motion.div
          className="dc-hero__copy"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="dc-eyebrow">{personalDigitalCheckOffer.name}</p>
          <h1 id="dc-hero-title">Ihre Website ist online. Aber bringt sie Ihnen auch Anfragen?</h1>
          <p className="dc-hero__lead">
            Der STRUKTIVA Digital-Check zeigt Ihnen verständlich, wo Interessenten verloren gehen – und welche
            Verbesserungen für Ihren Betrieb wirklich sinnvoll sind.
          </p>
          <div className="dc-hero__offer-line">
            <div className="dc-price-block">
              <strong>{personalDigitalCheckOffer.priceBaseLabel}</strong>
              <span className="dc-tax-note">{personalDigitalCheckOffer.taxNote}</span>
            </div>
            <span className="dc-hero__offer-detail">Persönliche Prüfung, priorisierter Maßnahmenplan und etwa 30 Minuten Ergebnisgespräch.</span>
          </div>
          <DigitalCheckPrimaryLink location="hero" />
          <p className="dc-hero__trust">Persönlich geprüft. Klar priorisiert. Ohne Verpflichtung zu einem Folgeauftrag.</p>
        </motion.div>
        <motion.figure
          className="dc-hero__visual"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src="/images/inhaber-sven-jessica.webp" alt="Sven Matzke und Jessica Wacker von STRUKTIVA" />
          <figcaption>
            <span>Persönlich statt automatisiert</span>
            <strong>Geprüft und eingeordnet von STRUKTIVA in Calw.</strong>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
