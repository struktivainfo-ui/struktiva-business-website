import { Check } from 'lucide-react'
import { digitalCheckDeliverables } from './digitalCheckData.js'
import { DigitalCheckPrimaryLink } from './DigitalCheckOfferSummary.jsx'

export default function DigitalCheckExpectations() {
  return (
    <section className="dc-section dc-results" aria-labelledby="dc-results-title">
      <div className="dc-shell dc-results__grid">
        <div className="dc-section-heading">
          <p className="dc-eyebrow">Ihr Ergebnis</p>
          <h2 id="dc-results-title">Am Ende wissen Sie, was zuerst zu tun ist</h2>
          <p>Sie erhalten keine lose Sammlung von Einzelmeinungen, sondern eine kompakte Entscheidungsgrundlage für Ihren Betrieb.</p>
          <DigitalCheckPrimaryLink location="results" />
        </div>
        <ul className="dc-results__list">
          {digitalCheckDeliverables.map((item) => (
            <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
