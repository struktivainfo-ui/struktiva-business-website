import { ArrowRight } from 'lucide-react'
import { personalDigitalCheckOffer } from '../../config/digitalCheckOffer.js'
import { trackDigitalCheckEvent } from '../../lib/digitalCheckTracking.js'

export default function CampaignHeader({ pathname }) {
  const isSuccessPage = pathname === '/digital-check/danke'

  return (
    <header className="campaign-header">
      <div className="campaign-header__inner">
        <a className="campaign-brand" href="/" aria-label="STRUKTIVA Startseite">
          <img src="/struktiva-logo.jpeg" alt="" />
          <span>
            <strong>STRUKTIVA</strong>
            <small>Digitale Unternehmensberatung</small>
          </span>
        </a>
        {isSuccessPage ? (
          <a className="campaign-header__back" href="/digital-check">
            Zum Digital-Check
          </a>
        ) : (
          <a
            className="campaign-button campaign-button--compact"
            href="#digital-check-anfrage"
            onClick={() =>
              trackDigitalCheckEvent('digital_check_cta_click', {
                page_path: pathname,
                lead_type: personalDigitalCheckOffer.leadType,
                cta_location: 'campaign_header',
              })
            }
          >
            <span>{personalDigitalCheckOffer.primaryCtaText}</span>
            <ArrowRight aria-hidden="true" />
          </a>
        )}
      </div>
    </header>
  )
}
