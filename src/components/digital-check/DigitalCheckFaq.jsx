import { digitalCheckFaqs } from './digitalCheckData.js'
import { DigitalCheckPrimaryLink } from './DigitalCheckOfferSummary.jsx'

export default function DigitalCheckFaq() {
  return (
    <section className="dc-section dc-faq" aria-labelledby="dc-faq-title">
      <div className="dc-shell dc-faq__grid">
        <div className="dc-section-heading">
          <p className="dc-eyebrow">Offen beantwortet</p>
          <h2 id="dc-faq-title">Häufige Fragen zum Digital-Check</h2>
          <DigitalCheckPrimaryLink location="faq" />
        </div>
        <div className="dc-faq__list">
          {digitalCheckFaqs.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
