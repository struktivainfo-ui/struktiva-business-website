export function trackGetResponseClick(placement) {
  if (typeof window === 'undefined' || !window.__struktivaConsentState?.statistics || typeof window.gtag !== 'function') return

  window.gtag('event', 'affiliate_click', {
    affiliate_program: 'getresponse',
    affiliate_page: window.location.pathname,
    affiliate_placement: placement,
    page_path: window.location.pathname,
    page_location: window.location.href,
    link_url: 'https://try.getresponsetoday.com/71f61c5tu71k',
  })
}
