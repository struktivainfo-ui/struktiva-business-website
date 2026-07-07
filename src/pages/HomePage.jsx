import HomeHero from '../components/home/HomeHero.jsx'
import HomeProblemSection from '../components/home/HomeProblemSection.jsx'
import HomeSolutionsSection from '../components/home/HomeSolutionsSection.jsx'
import HomeCaseStudySection from '../components/home/HomeCaseStudySection.jsx'
import HomeTrustSection from '../components/home/HomeTrustSection.jsx'
import { HomeLegacyContinuation } from '../legacy/legacyContent.jsx'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProblemSection />
      <HomeSolutionsSection />
      <HomeCaseStudySection />
      <HomeTrustSection />
      <HomeLegacyContinuation skipServiceTicker skipProblemSection skipFlowSection skipServicesSection skipReferencesDemosSection skipTrustSection />
    </>
  )
}
