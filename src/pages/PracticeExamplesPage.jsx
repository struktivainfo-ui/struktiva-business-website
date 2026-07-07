import PracticeHero from '../components/practice/PracticeHero.jsx'
import PracticeTransparency from '../components/practice/PracticeTransparency.jsx'
import PracticeFeaturedCase from '../components/practice/PracticeFeaturedCase.jsx'
import PracticeDemoConcepts from '../components/practice/PracticeDemoConcepts.jsx'
import {
  PracticeCtaSection,
  PracticeMethodSection,
  PracticeQualitySection,
} from '../components/practice/PracticeFinalSections.jsx'

export default function PracticeExamplesPage() {
  return (
    <main className="struktiva-practice-page">
      <PracticeHero />
      <PracticeTransparency />
      <PracticeFeaturedCase />
      <PracticeDemoConcepts />
      <PracticeMethodSection />
      <PracticeQualitySection />
      <PracticeCtaSection />
    </main>
  )
}
