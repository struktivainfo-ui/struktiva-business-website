import SolutionsHero from '../components/solutions/SolutionsHero.jsx'
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
      <SolutionsWorlds />
      <SolutionsConnectionSection />
      <SolutionsProcessSection />
      <SolutionsBoundarySection />
      <SolutionsCtaSection />
    </main>
  )
}
