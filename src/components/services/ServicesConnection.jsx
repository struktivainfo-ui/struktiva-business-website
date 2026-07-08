import { ArrowRight } from 'lucide-react'
import { connectionFlow } from './servicesData.js'

export default function ServicesConnection() {
  return (
    <section className="struktiva-services-section struktiva-services-connection" aria-labelledby="struktiva-services-connection-title">
      <div className="struktiva-services-section__intro">
        <p className="struktiva-services-eyebrow">Zusammenhang statt Insellösung</p>
        <h2 id="struktiva-services-connection-title">Eine Leistung endet dort nicht, wo der nächste digitale Schritt beginnt.</h2>
        <p>
          Der Nutzen entsteht oft zwischen den Bausteinen: Menschen finden ein Unternehmen, verstehen das Angebot, nehmen Kontakt auf,
          stellen eine Anfrage, werden betreut und kommen später wieder oder bewerten die Leistung.
        </p>
      </div>

      <div className="struktiva-services-connection__rail" aria-label="Typischer digitaler Weg vom ersten Kontakt bis zur Wiederkehr">
        {connectionFlow.map((item, index) => (
          <div className="struktiva-services-connection__item" key={item}>
            <span>{item}</span>
            {index < connectionFlow.length - 1 ? <ArrowRight aria-hidden="true" /> : null}
          </div>
        ))}
      </div>
    </section>
  )
}
