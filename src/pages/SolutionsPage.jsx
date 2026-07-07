import SolutionsHero from '../components/solutions/SolutionsHero.jsx'
import SolutionsIntro from '../components/solutions/SolutionsIntro.jsx'
import SolutionsWorlds from '../components/solutions/SolutionsWorlds.jsx'
import {
  SolutionsBoundarySection,
  SolutionsConnectionSection,
  SolutionsCtaSection,
  SolutionsProcessSection,
} from '../components/solutions/SolutionsFinalSections.jsx'

export default function SolutionsPage() {
  return (
    <main className="struktiva-solutions-page">
      <SolutionsHero />
      <SolutionsIntro />
      <SolutionsWorlds />
      <SolutionsConnectionSection />
      <SolutionsProcessSection />
      <SolutionsBoundarySection />
      <SolutionsCtaSection />
    </main>
  )
}
