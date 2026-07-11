import { useEffect } from 'react'
import { trackMarketingLead } from '../cookieConsent.jsx'

export function useMarketingLeadTracking() {
  useEffect(() => {
    const safeTrackLead = () => {
      trackMarketingLead()
    }

    const isContactHref = (href) => {
      if (!href) return false
      const value = href.trim().toLowerCase()
      return (
        value.startsWith('tel:') ||
        value.startsWith('mailto:') ||
        value.includes('wa.me/') ||
        value.includes('api.whatsapp.com') ||
        value === '/kontakt' ||
        value.startsWith('/kontakt?') ||
        value === '#kontakt' ||
        value.startsWith('/#kontakt')
      )
    }

    const handleClick = (event) => {
      const target = event.target instanceof Element ? event.target : null
      if (!target) return

      const link = target.closest('a[href]')
      if (link && isContactHref(link.getAttribute('href'))) {
        safeTrackLead()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])
}
