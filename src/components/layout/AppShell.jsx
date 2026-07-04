import { CookieConsentLayer } from '../../cookieConsent.jsx'
import { createRouteClass } from '../../routing/routeConfig.js'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import FloatingWhatsAppButton from './FloatingWhatsAppButton.jsx'

export default function AppShell({ pathname, routeMeta, children }) {
  const isDemoRoute = Boolean(routeMeta.hideChrome)
  const isHomeRoute = Boolean(routeMeta.isHomeRoute)
  const isPricingRoute = Boolean(routeMeta.isPricingRoute)
  const routeClass = createRouteClass(pathname)

  return (
    <div className={`struktiva-metallic ${routeClass} ${isHomeRoute ? 'struktiva-home' : ''} ${isPricingRoute ? 'struktiva-pricing-route' : ''} min-h-screen`}>
      {!isDemoRoute ? (
        <a className="struktiva-skip-link" href="#main-content">
          Zum Inhalt springen
        </a>
      ) : null}
      {!isDemoRoute ? <Header pathname={pathname} isHomeRoute={isHomeRoute} /> : null}
      <div id="main-content" tabIndex={-1} className="struktiva-main-content">
        {children}
      </div>
      {!isDemoRoute ? <Footer /> : null}
      <CookieConsentLayer pathname={pathname} />
      <FloatingWhatsAppButton />
    </div>
  )
}
