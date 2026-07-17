import { ArrowRight } from 'lucide-react'

export default function ServicesCta() {
  return (
    <section className="struktiva-services-cta" aria-labelledby="struktiva-services-cta-title">
      <p className="struktiva-services-eyebrow">Vom Leistungsbereich zum sinnvollen nächsten Schritt</p>
      <h2 id="struktiva-services-cta-title">Welche Leistung wirklich sinnvoll ist, zeigt sich erst im Zusammenhang mit Ihrem Unternehmen.</h2>
      <p>
        Der Digital-Check ordnet Sichtbarkeit, Kundenwege und interne Abläufe gemeinsam ein. Wenn der Bedarf bereits klar ist,
        können Sie auch direkt Kontakt aufnehmen.
      </p>
      <div className="struktiva-services-cta__actions">
        <a className="struktiva-services-primary-link" href="/digital-check#digital-check-anfrage">
          <span>Digital-Check anfragen</span>
          <ArrowRight aria-hidden="true" />
        </a>
        <a className="struktiva-services-text-link" href="/kontakt">
          Direkt Kontakt aufnehmen
        </a>
      </div>
    </section>
  )
}
