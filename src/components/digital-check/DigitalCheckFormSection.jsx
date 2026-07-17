import DigitalCheckLeadForm from './DigitalCheckLeadForm.jsx'

export default function DigitalCheckFormSection() {
  return (
    <section id="digital-check-anfrage" className="dc-section dc-form-section" aria-labelledby="dc-form-title">
      <div className="dc-shell dc-form-section__grid">
        <div className="dc-form-section__intro">
          <p className="dc-eyebrow">Ihr nächster Schritt</p>
          <h2 id="dc-form-title">Digital-Check anfragen</h2>
          <p>Erzählen Sie uns kurz, wo es digital hakt. Wir prüfen Ihre Anfrage persönlich und melden uns mit dem passenden nächsten Schritt.</p>
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
