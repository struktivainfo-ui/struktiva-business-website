import PracticeHero from '../components/practice/PracticeHero.jsx'
import PracticeFeaturedCase from '../components/practice/PracticeFeaturedCase.jsx'
import PracticeZerionCase from '../components/practice/PracticeZerionCase.jsx'
import PracticeDemoConcepts from '../components/practice/PracticeDemoConcepts.jsx'
import {
  PracticeCtaSection,
} from '../components/practice/PracticeFinalSections.jsx'

export default function PracticeExamplesPage() {
  return (
    <main className="struktiva-practice-page">
      <PracticeHero />
      <PracticeFeaturedCase />
      <PracticeZerionCase />
      <PracticeDemoConcepts />
      <PracticeCtaSection />
    </main>
  )
}
