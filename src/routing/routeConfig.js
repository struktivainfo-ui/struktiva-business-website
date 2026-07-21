const defaultDescription =
  'STRUKTIVA entwickelt Webseiten, Google-Sichtbarkeit, Kontaktwege und digitale Strukturen für Unternehmen, Selbstständige und lokale Dienstleister.'

import { personalDigitalCheckOffer } from '../config/digitalCheckOffer.js'

export const ACTIVE_ROUTE_META = {
  '/': {
    title: 'STRUKTIVA Digitale Unternehmensberatung | Digitale Struktur für Unternehmen',
    description: defaultDescription,
    canonicalPath: '/',
    isHomeRoute: true,
    isPricingRoute: true,
  },
  '/leistungen': {
    title: 'Digitale Leistungen für Unternehmen | STRUKTIVA',
    description:
      'Konkrete digitale Leistungen von STRUKTIVA: Websites, Sichtbarkeit, Kundenführung, Kundenbindung, interne Abläufe, Systeme und Automatisierungen.',
    canonicalPath: '/leistungen',
  },
  '/loesungen': {
    title: 'Digitale Lösungen für Unternehmen | STRUKTIVA',
    description:
      'STRUKTIVA verbindet digitale Sichtbarkeit, Kundenführung und interne Abläufe zu Lösungen, die zum Unternehmen und seinem Alltag passen.',
    canonicalPath: '/loesungen',
  },
  '/praxisbeispiele': {
    title: 'Praxisbeispiele digitaler Lösungen | STRUKTIVA',
    description:
      'Entdecken Sie echte Praxisprojekte und klar gekennzeichnete Demo-Konzepte von STRUKTIVA für Sichtbarkeit, Kundenführung und digitale Abläufe.',
    canonicalPath: '/praxisbeispiele',
  },
  '/praxisbeispiele/salon-karola': {
    title: 'Salon Karola Praxisbeispiel | STRUKTIVA',
    description:
      'Praxisbeispiel von STRUKTIVA: Wie bei Salon Karola Website, Sichtbarkeit, Kundenkontakt, Kundenbindung und digitale Abläufe schrittweise verbunden wurden.',
    canonicalPath: '/praxisbeispiele/salon-karola',
  },
  '/digital-check': {
    title: 'Digital-Check für lokale Betriebe | STRUKTIVA Calw',
    description: `Website, Google-Unternehmensprofil, Kontaktwege und Bewertungen prüfen lassen: persönlicher STRUKTIVA Digital-Check für lokale Betriebe, ${personalDigitalCheckOffer.priceBaseLabel} ${personalDigitalCheckOffer.taxNote}`,
    canonicalPath: '/digital-check',
    layout: 'campaign',
    ogTitle: `STRUKTIVA Digital-Check für lokale Betriebe – ${personalDigitalCheckOffer.price} €`,
    ogDescription: `Persönliche Prüfung, klar priorisierter Maßnahmenplan und Ergebnisgespräch für lokale Betriebe – ${personalDigitalCheckOffer.priceBaseLabel} ${personalDigitalCheckOffer.taxNote}`,
    socialImage: '/images/inhaber-sven-jessica.webp',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: personalDigitalCheckOffer.name,
      serviceType: 'Digitaler Unternehmens- und Kontaktwege-Check',
      url: 'https://struktiva.de/digital-check',
      provider: {
        '@type': 'ProfessionalService',
        name: 'STRUKTIVA Digitale Unternehmensberatung',
        url: 'https://struktiva.de/',
        telephone: '+49 7051 8162292',
        email: 'struktiva.info@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Ostlandstraße 3',
          postalCode: '75365',
          addressLocality: 'Calw',
          addressCountry: 'DE',
        },
      },
      areaServed: [
        { '@type': 'City', name: 'Calw' },
        { '@type': 'Country', name: 'Deutschland' },
      ],
      offers: {
        '@type': 'Offer',
        price: personalDigitalCheckOffer.price,
        priceCurrency: personalDigitalCheckOffer.currency,
        url: 'https://struktiva.de/digital-check',
      },
    },
  },
  '/digital-check/danke': {
    title: 'Anfrage eingegangen | STRUKTIVA Digital-Check',
    description: 'Bestätigung Ihrer Anfrage zum STRUKTIVA Digital-Check.',
    canonicalPath: '/digital-check/danke',
    layout: 'campaign',
    noindex: true,
    ogTitle: 'Anfrage zum STRUKTIVA Digital-Check',
    ogDescription: 'Bestätigung Ihrer Anfrage zum STRUKTIVA Digital-Check.',
  },
  '/pakete': {
    title: 'Pakete und Zusammenarbeit | STRUKTIVA',
    description:
      'Erfahren Sie, welche Formen der Zusammenarbeit STRUKTIVA anbietet - vom klar abgegrenzten Einzelprojekt bis zur schrittweisen Weiterentwicklung und laufenden Betreuung.',
    canonicalPath: '/pakete',
    isPricingRoute: true,
  },
  '/ueber-uns': {
    title: 'Über STRUKTIVA | Digitale Unternehmensberatung',
    description:
      'Lernen Sie STRUKTIVA Digitale Unternehmensberatung, die persönliche Arbeitsweise und den Ansatz aus Verstehen, Strukturieren, Umsetzen und Weiterentwickeln kennen.',
    canonicalPath: '/ueber-uns',
  },
  '/kontakt': {
    title: 'Kontakt | STRUKTIVA Digitale Unternehmensberatung',
    description:
      'Nehmen Sie Kontakt mit STRUKTIVA auf. Beschreiben Sie, wo digitale Abläufe, Kundenwege oder bestehende Systeme heute nicht gut zusammenspielen.',
    canonicalPath: '/kontakt',
  },
  '/datenschutz': {
    title: 'Datenschutz - STRUKTIVA Digitale Unternehmensberatung',
    description: 'Datenschutzerklärung von STRUKTIVA Digitale Unternehmensberatung.',
    canonicalPath: '/datenschutz',
  },
  '/impressum': {
    title: 'Impressum - STRUKTIVA Digitale Unternehmensberatung',
    description: 'Impressum und rechtliche Angaben von STRUKTIVA Digitale Unternehmensberatung.',
    canonicalPath: '/impressum',
  },
  '/demos/handwerker': {
    title: 'Seite nicht gefunden - STRUKTIVA Digitale Unternehmensberatung',
    description: 'Diese Seite gehört nicht mehr zur aktuellen STRUKTIVA Website-Struktur.',
    canonicalPath: '/demos/handwerker',
    hideChrome: true,
    noindex: true,
  },
  '/demos/kosmetik': {
    title: 'Seite nicht gefunden - STRUKTIVA Digitale Unternehmensberatung',
    description: 'Diese Seite gehört nicht mehr zur aktuellen STRUKTIVA Website-Struktur.',
    canonicalPath: '/demos/kosmetik',
    hideChrome: true,
    noindex: true,
  },
  '/demos/lokaler-dienstleister': {
    title: 'Seite nicht gefunden - STRUKTIVA Digitale Unternehmensberatung',
    description: 'Diese Seite gehört nicht mehr zur aktuellen STRUKTIVA Website-Struktur.',
    canonicalPath: '/demos/lokaler-dienstleister',
    hideChrome: true,
    noindex: true,
  },
}

export const DEFAULT_ROUTE_META = {
  title: 'Seite nicht gefunden - STRUKTIVA Digitale Unternehmensberatung',
  description: 'Diese Seite gehört nicht mehr zur aktuellen STRUKTIVA Website-Struktur.',
  noindex: true,
}

export const ACTIVE_ROUTE_PATHS = Object.keys(ACTIVE_ROUTE_META)

export const LEGACY_ROUTE_REDIRECTS = {
  '/demos': '/praxisbeispiele',
  '/referenzen': '/praxisbeispiele',
}

export function getLegacyRedirectTarget(pathname) {
  return LEGACY_ROUTE_REDIRECTS[pathname] || null
}

export function getRouteMeta(pathname) {
  const activeMeta = ACTIVE_ROUTE_META[pathname]
  if (!activeMeta) return DEFAULT_ROUTE_META

  return {
    ...activeMeta,
    noindex: Boolean(activeMeta.noindex),
  }
}

export function createRouteClass(pathname) {
  if (pathname === '/') return 'route-home'
  return `route-${pathname.replace(/^\/+/, '').replace(/[^a-z0-9-]/gi, '-') || 'home'}`
}

export const currentNavigation = {
  primary: [
    { label: 'Start', href: '/' },
    { label: 'Lösungen', href: '/loesungen', transitionFor: '/loesungen' },
    { label: 'Praxisbeispiele', href: '/praxisbeispiele', transitionFor: '/praxisbeispiele' },
    { label: 'Digital-Check', href: '/digital-check', transitionFor: '/digital-check', ctaRole: 'primary' },
    { label: 'Über STRUKTIVA', href: '/ueber-uns' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  desktop: [
    { label: 'Start', href: '/' },
    { label: 'Lösungen', href: '/loesungen', transitionFor: '/loesungen' },
    { label: 'Praxisbeispiele', href: '/praxisbeispiele', transitionFor: '/praxisbeispiele' },
    { label: 'Digital-Check', href: '/digital-check', transitionFor: '/digital-check', ctaRole: 'primary' },
    { label: 'Über STRUKTIVA', href: '/ueber-uns' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  mobile: [
    { label: 'Start', href: '/' },
    { label: 'Lösungen', href: '/loesungen', transitionFor: '/loesungen' },
    { label: 'Praxisbeispiele', href: '/praxisbeispiele', transitionFor: '/praxisbeispiele' },
    { label: 'Digital-Check', href: '/digital-check', transitionFor: '/digital-check', ctaRole: 'primary' },
    { label: 'Über STRUKTIVA', href: '/ueber-uns' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  leistungenDropdown: [
    { label: 'Lösungen', href: '/loesungen', transitionFor: '/loesungen' },
    { label: 'Praxisbeispiele', href: '/praxisbeispiele', transitionFor: '/praxisbeispiele' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  primaryCta: { label: personalDigitalCheckOffer.primaryCtaText, href: personalDigitalCheckOffer.primaryFormTarget, transitionFor: '/digital-check' },
  secondaryCta: { label: 'Praxisbeispiel ansehen', href: '/praxisbeispiele', transitionFor: '/praxisbeispiele' },
}

export const futureNavigation = {
  status: 'partially-active',
  primary: [
    { label: 'Start', href: '/', plannedSource: 'rebuild-home' },
    { label: 'Lösungen', href: '/loesungen', plannedSource: 'active-step-12' },
    { label: 'Praxisbeispiele', href: '/praxisbeispiele', plannedSource: 'active-step-13' },
    { label: 'Digital-Check', href: '/digital-check', plannedSource: 'active-step-15' },
    { label: 'Über STRUKTIVA', href: '/ueber-uns', plannedSource: '/ueber-uns' },
    { label: 'Kontakt', href: '/kontakt', plannedSource: '/kontakt' },
  ],
}

export const FUTURE_ROUTE_PLAN = [
  { path: '/', role: 'Startseite für STRUKTIVA Digitale Unternehmensberatung', status: 'replace-existing-route-later' },
  { path: '/leistungen', role: 'Konkrete digitale Leistungen ohne Preis- und Paketlogik erklaeren', status: 'active-step-20' },
  { path: '/loesungen', role: 'Drei Lösungswelten bündeln', status: 'active-step-12' },
  { path: '/praxisbeispiele', role: 'Referenzen und echte Praxisbeweise bündeln', status: 'active-step-13' },
  { path: '/praxisbeispiele/salon-karola', role: 'Detail-Praxisbeispiel Salon Karola', status: 'active-step-14' },
  { path: '/digital-check', role: 'Verständlicher Digital-Check-Einstieg mit Lead-Verweis', status: 'active-step-15' },
  { path: '/pakete', role: 'Zusammenarbeitsmodelle, bestaetigte Pakete und Betreuung transparent erklaeren', status: 'active-step-19' },
  { path: '/ueber-uns', role: 'Haltung, Menschen und Arbeitsweise', status: 'active-step-16' },
  { path: '/kontakt', role: 'Direkte Kontaktwege und alternative Anfrage', status: 'active-step-17' },
  { path: '/impressum', role: 'Rechtliche Anbieterangaben', status: 'keep' },
  { path: '/datenschutz', role: 'Datenschutzangaben', status: 'keep' },
]

export const ROUTE_MIGRATION_PLAN = [
  { from: '/', to: '/', action: 'REBUILD', redirectType: 'none', seoRisk: 'medium', activateWhen: 'new home is ready' },
  { from: '/leistungen', to: '/leistungen', action: 'REBUILD ACTIVE', redirectType: 'none', seoRisk: 'medium', activateWhen: 'active-step-20' },
  { from: '/pakete', to: '/pakete', action: 'REBUILD ACTIVE', redirectType: 'none', seoRisk: 'medium', activateWhen: 'active-step-19' },
  { from: '/demos', to: '/praxisbeispiele', action: 'REDIRECT ACTIVE', redirectType: 'permanent exact', seoRisk: 'medium', activateWhen: 'active-step-21' },
  { from: '/referenzen', to: '/praxisbeispiele', action: 'REDIRECT ACTIVE', redirectType: 'permanent exact', seoRisk: 'low', activateWhen: 'active-step-21' },
  { from: '/ueber-uns', to: '/ueber-uns', action: 'REBUILD', redirectType: 'none', seoRisk: 'low', activateWhen: 'content rewrite phase' },
  { from: '/kontakt', to: '/kontakt', action: 'REBUILD ACTIVE', redirectType: 'none', seoRisk: 'low', activateWhen: 'active-step-17' },
  { from: '/impressum', to: '/impressum', action: 'KEEP', redirectType: 'none', seoRisk: 'low', activateWhen: 'already active' },
  { from: '/datenschutz', to: '/datenschutz', action: 'KEEP', redirectType: 'none', seoRisk: 'low', activateWhen: 'already active' },
  { from: '/demos/handwerker', to: '/demos/handwerker', action: 'KEEP PROTECTED', redirectType: 'none; static rewrite remains', seoRisk: 'low because noindex demo', activateWhen: 'active-step-21 protected' },
  { from: '/demos/kosmetik', to: '/demos/kosmetik', action: 'KEEP PROTECTED', redirectType: 'none; static rewrite remains', seoRisk: 'low because noindex demo', activateWhen: 'active-step-21 protected' },
  { from: '/demos/lokaler-dienstleister', to: '/demos/lokaler-dienstleister', action: 'KEEP PROTECTED', redirectType: 'none; static rewrite remains', seoRisk: 'low because noindex demo', activateWhen: 'active-step-21 protected' },
]
