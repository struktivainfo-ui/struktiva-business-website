import { useEffect } from 'react'
import DigitalCheckHero from '../components/digital-check/DigitalCheckHero.jsx'
import DigitalCheckIntro from '../components/digital-check/DigitalCheckIntro.jsx'
import DigitalCheckOfferSummary from '../components/digital-check/DigitalCheckOfferSummary.jsx'
import DigitalCheckAreas from '../components/digital-check/DigitalCheckAreas.jsx'
import DigitalCheckExpectations from '../components/digital-check/DigitalCheckExpectations.jsx'
import DigitalCheckTrustSection from '../components/digital-check/DigitalCheckTrustSection.jsx'
import DigitalCheckProcess from '../components/digital-check/DigitalCheckProcess.jsx'
import DigitalCheckSuitability from '../components/digital-check/DigitalCheckSuitability.jsx'
import DigitalCheckFaq from '../components/digital-check/DigitalCheckFaq.jsx'
import DigitalCheckFormSection from '../components/digital-check/DigitalCheckFormSection.jsx'
import { useCampaignAttribution } from '../hooks/useCampaignAttribution.js'
import { buildDigitalCheckTrackingParameters, trackDigitalCheckEvent } from '../lib/digitalCheckTracking.js'

export default function DigitalCheckPage() {
  const attribution = useCampaignAttribution()

  useEffect(() => {
    const trackPageView = () => {
      trackDigitalCheckEvent('digital_check_page_view', buildDigitalCheckTrackingParameters(attribution), {
        onceKey: window.location.href,
      })
    }
    trackPageView()
    window.addEventListener('struktiva:consent-changed', trackPageView)
    return () => window.removeEventListener('struktiva:consent-changed', trackPageView)
  }, [attribution])

  return (
    <main className="digital-check-campaign">
      <DigitalCheckHero />
      <DigitalCheckIntro />
      <DigitalCheckOfferSummary />
      <DigitalCheckAreas />
      <DigitalCheckExpectations />
      <DigitalCheckTrustSection />
      <DigitalCheckProcess />
      <DigitalCheckSuitability />
      <DigitalCheckFaq />
      <DigitalCheckFormSection />
    </main>
  )
}
