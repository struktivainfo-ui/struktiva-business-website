import { AlertCircle } from 'lucide-react'
import { personalPresentation, serviceBoundaries } from './servicesData.js'

export default function ServicesBoundaries() {
  return (
    <section className="struktiva-services-section struktiva-services-boundaries" aria-labelledby="struktiva-services-boundaries-title">
      <div className="struktiva-services-boundaries__main">
        <p className="struktiva-services-eyebrow">Bewusste Einordnung</p>
        <h2 id="struktiva-services-boundaries-title">Mehr Funktionen sind nicht automatisch mehr Fortschritt.</h2>
        <p>
          STRUKTIVA empfiehlt digitale Leistungen nicht nach maximalem Umfang, sondern nach tatsächlichem Bedarf, technischer
          Ausgangslage und Nutzen im Alltag.
        </p>
      </div>
      <ul className="struktiva-services-boundaries__list">
        {serviceBoundaries.map((item) => (
          <li key={item}>
            <AlertCircle aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <aside className="struktiva-services-personal">
        <p className="struktiva-services-eyebrow">Sonderfall persönliche Präsentation</p>
        <h3>{personalPresentation.title}</h3>
        <p>{personalPresentation.text}</p>
        <a className="struktiva-services-text-link" href="/pakete">
          Zusammenarbeit und Einordnung ansehen
        </a>
      </aside>
    </section>
  )
}
