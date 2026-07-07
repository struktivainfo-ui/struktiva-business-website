import HomeHero from '../components/home/HomeHero.jsx'
import HomeProblemSection from '../components/home/HomeProblemSection.jsx'
import HomeSolutionsSection from '../components/home/HomeSolutionsSection.jsx'
import HomeCaseStudySection from '../components/home/HomeCaseStudySection.jsx'
import HomeTrustSection from '../components/home/HomeTrustSection.jsx'
import HomeDigitalCheckSection from '../components/home/HomeDigitalCheckSection.jsx'
import { HomeLegacyContinuation } from '../legacy/legacyContent.jsx'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProblemSection />
      <HomeSolutionsSection />
      <HomeCaseStudySection />
      <HomeTrustSection />
      <HomeDigitalCheckSection />
      <HomeLegacyContinuation
        skipServiceTicker
        skipProblemSection
        skipFlowSection
        skipServicesSection
        skipReferencesDemosSection
        skipTrustSection
        skipPricingSection
        skipContactSection
      />
    </>
  )
}
