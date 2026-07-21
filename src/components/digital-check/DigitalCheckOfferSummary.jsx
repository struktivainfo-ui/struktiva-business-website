import { ArrowRight } from 'lucide-react'
import {
  digitalCheckCreditText,
  digitalCheckIndependenceText,
  digitalCheckIntroductoryOfferText,
  digitalCheckOrderDefinitionText,
  personalDigitalCheckOffer,
} from '../../config/digitalCheckOffer.js'
import { trackDigitalCheckEvent } from '../../lib/digitalCheckTracking.js'

export function DigitalCheckPrimaryLink({ location, className = 'campaign-button' }) {
  return (
    <a
      className={className}
      href="#digital-check-anfrage"
      onClick={() =>
        trackDigitalCheckEvent('digital_check_cta_click', {
          page_path: '/digital-check',
          lead_type: personalDigitalCheckOffer.leadType,
          cta_location: location,
        })
      }
    >
      <span>{personalDigitalCheckOffer.primaryCtaText}</span>
      <ArrowRight aria-hidden="true" />
    </a>
  )
}

export default function DigitalCheckOfferSummary() {
  return (
    <section className="dc-section dc-offer" aria-labelledby="dc-offer-title">
      <div className="dc-shell dc-offer__grid">
        <div className="dc-copy">
          <p className="dc-eyebrow">Das Angebot</p>
          <h2 id="dc-offer-title">Ein klarer Blick auf Ihren digitalen Weg zum Kunden</h2>
          <p>
            Wir prüfen die wichtigsten öffentlich sichtbaren Kontaktpunkte Ihres Betriebs: vom ersten Eindruck in
            Google über Ihre Website bis zur konkreten Kontaktaufnahme. Sie erfahren, was bereits trägt, wo
            Interessenten aussteigen können und welche Schritte zuerst sinnvoll sind.
          </p>
          <p className="dc-credit-copy">{digitalCheckCreditText}</p>
          <p>{digitalCheckIndependenceText}</p>
        </div>
        <aside className="dc-offer__summary" aria-label="Angebotszusammenfassung">
          <span>Persönlicher Digital-Check</span>
          <div className="dc-price-block dc-price-block--large">
            <strong>{personalDigitalCheckOffer.priceBaseLabel}</strong>
            <span className="dc-tax-note">{personalDigitalCheckOffer.taxNote}</span>
          </div>
          {digitalCheckIntroductoryOfferText ? <p className="dc-offer-note">{digitalCheckIntroductoryOfferText}</p> : null}
          <p>{digitalCheckOrderDefinitionText}</p>
          <p>{personalDigitalCheckOffer.scope}</p>
          <p>Ergebnis innerhalb von {personalDigitalCheckOffer.deliveryBusinessDays} Werktagen nach Eingang aller benötigten Informationen.</p>
          <DigitalCheckPrimaryLink location="offer_summary" />
        </aside>
      </div>
    </section>
  )
}
