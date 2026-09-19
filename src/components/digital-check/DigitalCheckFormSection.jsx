import DigitalCheckLeadForm from './DigitalCheckLeadForm.jsx'
import { personalDigitalCheckOffer } from '../../config/digitalCheckOffer.js'

export default function DigitalCheckFormSection() {
  return (
    <section id="digital-check-anfrage" className="dc-section dc-form-section" aria-labelledby="dc-form-title">
      <div className="dc-shell dc-form-section__grid">
        <div className="dc-form-section__intro">
          <p className="dc-eyebrow">Ihr nächster Schritt</p>
          <h2 id="dc-form-title">Digital-Check anfragen</h2>
          <p>Beschreiben Sie kurz Ihre Situation. Wir schauen persönlich darauf und melden uns mit einem passenden nächsten Schritt.</p>
          <div className="dc-price-block dc-form-section__price" aria-label={personalDigitalCheckOffer.priceBaseLabel}>
            <strong>{personalDigitalCheckOffer.priceBaseLabel}</strong>
            {personalDigitalCheckOffer.taxNote ? <span className="dc-tax-note">{personalDigitalCheckOffer.taxNote}</span> : null}
          </div>
          <div className="dc-form-section__trust">
            <strong>Persönlich bearbeitet, nicht automatisch als Massenanalyse.</strong>
            <p>Ihre Kontaktdaten werden nicht zu Werbezwecken weitergegeben. Es besteht keine Verpflichtung zu einem Folgeauftrag.</p>
          </div>
        </div>
        <DigitalCheckLeadForm />
      </div>
    </section>
  )
}
