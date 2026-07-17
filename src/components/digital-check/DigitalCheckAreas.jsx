import { digitalCheckAreas } from './digitalCheckData.js'

export default function DigitalCheckAreas() {
  return (
    <section className="dc-section dc-areas" aria-labelledby="dc-areas-title">
      <div className="dc-shell">
        <div className="dc-section-heading">
          <p className="dc-eyebrow">Was wir prüfen</p>
          <h2 id="dc-areas-title">Vier Bereiche, die gemeinsam über Anfragen entscheiden</h2>
        </div>
        <div className="dc-areas__list">
          {digitalCheckAreas.map((area, index) => (
            <article key={area.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
        <p className="dc-fineprint">Geprüft werden repräsentative, für die Anfrage relevante Seiten und öffentlich sichtbare Kontaktpunkte. Ein vollständiges technisches, rechtliches oder SEO-Audit ist nicht Bestandteil des Angebots.</p>
      </div>
    </section>
  )
}
