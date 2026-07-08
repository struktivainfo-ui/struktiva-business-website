import PackagesHero from '../components/packages/PackagesHero.jsx'
import PackagesModels from '../components/packages/PackagesModels.jsx'
import PackagesOffers from '../components/packages/PackagesOffers.jsx'
import PackagesCareAndSmallTasks from '../components/packages/PackagesCareAndSmallTasks.jsx'
import PackagesPriceFactors from '../components/packages/PackagesPriceFactors.jsx'
import PackagesFaq from '../components/packages/PackagesFaq.jsx'
import PackagesCta from '../components/packages/PackagesCta.jsx'

export default function PackagesPage() {
  return (
    <main className="struktiva-packages-page">
      <PackagesHero />
      <div className="struktiva-packages-page__body">
        <PackagesModels />
        <PackagesOffers />
        <PackagesCareAndSmallTasks />
        <PackagesPriceFactors />
        <PackagesFaq />
        <PackagesCta />
      </div>
    </main>
  )
}
