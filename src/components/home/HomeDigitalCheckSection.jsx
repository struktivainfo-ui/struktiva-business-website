import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import {
  digitalCheckIntroductoryOfferText,
  personalDigitalCheckOffer,
} from '../../config/digitalCheckOffer.js'

export default function HomeDigitalCheckSection() {
  const reducedMotion = useReducedMotion()
  return (
    <section className="struktiva-home-digital-check" aria-labelledby="struktiva-home-digital-check-title">
      <motion.div
        className="struktiva-home-digital-check__inner"
        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="struktiva-home-digital-check__intro">
          <p className="struktiva-home-digital-check__eyebrow">STRUKTIVA Digital-Check</p>
          <h2 id="struktiva-home-digital-check-title">Wo gehen auf Ihrem digitalen Kundenweg Anfragen verloren?</h2>
          <div className="struktiva-home-digital-check__lead">
            <p>Der persönliche Digital-Check prüft Website, Google-Unternehmensprofil, Kontaktwege und Bewertungen und ordnet die wichtigsten nächsten Schritte.</p>
          </div>
          <div className="struktiva-home-digital-check__price">
            <strong>{personalDigitalCheckOffer.priceBaseLabel}</strong>
            <span>{personalDigitalCheckOffer.taxNote}</span>
          </div>
          {digitalCheckIntroductoryOfferText ? <p>{digitalCheckIntroductoryOfferText}</p> : null}
          <a className="struktiva-digital-check-cta__primary" href="/digital-check">
            <span>Digital-Check für lokale Betriebe ansehen</span>
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
