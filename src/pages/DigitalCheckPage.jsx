import { useEffect } from 'react'
import DigitalCheckHero from '../components/digital-check/DigitalCheckHero.jsx'
import DigitalCheckOfferSummary from '../components/digital-check/DigitalCheckOfferSummary.jsx'
import DigitalCheckTrustSection from '../components/digital-check/DigitalCheckTrustSection.jsx'
import DigitalCheckProcess from '../components/digital-check/DigitalCheckProcess.jsx'
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
      <DigitalCheckOfferSummary />
      <DigitalCheckProcess />
      <DigitalCheckTrustSection />
      <DigitalCheckFormSection />
    </main>
  )
}
