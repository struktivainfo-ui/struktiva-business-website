import HomeHero from '../components/home/HomeHero.jsx'
import HomeProblemSection from '../components/home/HomeProblemSection.jsx'
import HomeSolutionsSection from '../components/home/HomeSolutionsSection.jsx'
import { HomeLegacyContinuation } from '../legacy/legacyContent.jsx'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProblemSection />
      <HomeSolutionsSection />
      <HomeLegacyContinuation skipServiceTicker skipProblemSection skipFlowSection skipServicesSection />
    </>
  )
}
