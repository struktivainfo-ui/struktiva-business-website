import HomeHero from '../components/home/HomeHero.jsx'
import HomeProblemSection from '../components/home/HomeProblemSection.jsx'
import { HomeLegacyContinuation } from '../legacy/legacyContent.jsx'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProblemSection />
      <HomeLegacyContinuation skipProblemSection />
    </>
  )
}
