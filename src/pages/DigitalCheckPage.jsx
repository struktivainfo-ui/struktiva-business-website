import DigitalCheckHero from '../components/digital-check/DigitalCheckHero.jsx'
import DigitalCheckIntro from '../components/digital-check/DigitalCheckIntro.jsx'
import DigitalCheckAreas from '../components/digital-check/DigitalCheckAreas.jsx'
import DigitalCheckProcess from '../components/digital-check/DigitalCheckProcess.jsx'
import DigitalCheckExpectations from '../components/digital-check/DigitalCheckExpectations.jsx'
import DigitalCheckSuitability from '../components/digital-check/DigitalCheckSuitability.jsx'
import DigitalCheckTrustSection from '../components/digital-check/DigitalCheckTrustSection.jsx'
import DigitalCheckCta from '../components/digital-check/DigitalCheckCta.jsx'

export default function DigitalCheckPage() {
  return (
    <main className="struktiva-digital-check-page">
      <DigitalCheckHero />
      <DigitalCheckIntro />
      <DigitalCheckAreas />
      <DigitalCheckProcess />
      <DigitalCheckExpectations />
      <DigitalCheckSuitability />
      <DigitalCheckTrustSection />
      <DigitalCheckCta />
    </main>
  )
}
