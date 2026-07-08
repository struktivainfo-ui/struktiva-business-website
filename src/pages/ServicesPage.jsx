import ServicesAreas from '../components/services/ServicesAreas.jsx'
import ServicesBoundaries from '../components/services/ServicesBoundaries.jsx'
import ServicesConnection from '../components/services/ServicesConnection.jsx'
import ServicesCta from '../components/services/ServicesCta.jsx'
import ServicesHero from '../components/services/ServicesHero.jsx'
import ServicesIntro from '../components/services/ServicesIntro.jsx'

export default function ServicesPage() {
  return (
    <main className="struktiva-services-page" data-route="leistungen">
      <ServicesHero />
      <div className="struktiva-services-page__body">
        <ServicesIntro />
        <ServicesAreas />
        <ServicesConnection />
        <ServicesBoundaries />
        <ServicesCta />
      </div>
    </main>
  )
}
