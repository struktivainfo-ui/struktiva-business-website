import CaseStudyHero from '../components/case-study/CaseStudyHero.jsx'
import CaseStudyContext from '../components/case-study/CaseStudyContext.jsx'
import CaseStudySystemMap from '../components/case-study/CaseStudySystemMap.jsx'
import CaseStudyModules from '../components/case-study/CaseStudyModules.jsx'
import CaseStudyDevelopmentJourney from '../components/case-study/CaseStudyDevelopmentJourney.jsx'
import CaseStudyMethodOutcome from '../components/case-study/CaseStudyMethodOutcome.jsx'
import CaseStudyCta from '../components/case-study/CaseStudyCta.jsx'

export default function SalonKarolaCaseStudyPage() {
  return (
    <main className="struktiva-salon-case-page">
      <CaseStudyHero />
      <CaseStudyContext />
      <CaseStudySystemMap />
      <CaseStudyModules />
      <CaseStudyDevelopmentJourney />
      <CaseStudyMethodOutcome />
      <CaseStudyCta />
    </main>
  )
}
