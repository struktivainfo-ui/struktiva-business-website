import { useEffect } from 'react'

function classifyContactHref(href = '') {
  const value = href.trim().toLowerCase()
  if (value.startsWith('tel:')) return 'phone'
  if (value.startsWith('mailto:')) return 'email'
  if (value.includes('wa.me/') || value.includes('api.whatsapp.com')) return 'whatsapp'
  if (value === '/kontakt' || value.startsWith('/kontakt?') || value.startsWith('/kontakt#')) return 'contact_page'
  return ''
}

export function useMarketingLeadTracking() {
  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target instanceof Element ? event.target : null
      const link = target?.closest('a[href]')
      if (!link) return
      const channel = classifyContactHref(link.getAttribute('href'))
      if (!channel || !window.__struktivaConsentState?.statistics || typeof window.gtag !== 'function') return

      window.gtag('event', 'contact_click', {
        channel,
        page_path: window.location.pathname,
      })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}
