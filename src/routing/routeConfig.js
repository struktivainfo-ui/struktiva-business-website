const defaultDescription =
  'STRUKTIVA entwickelt Webseiten, Google-Sichtbarkeit, Kontaktwege und digitale Strukturen für Unternehmen, Selbstständige und lokale Dienstleister.'

export const ACTIVE_ROUTE_META = {
  '/': {
    title: 'STRUKTIVA Unternehmensarchitektur | Digitale Struktur für Unternehmen',
    description: defaultDescription,
    canonicalPath: '/',
    isHomeRoute: true,
    isPricingRoute: true,
  },
  '/leistungen': {
    title: 'Leistungen - STRUKTIVA Unternehmensarchitektur',
    description:
      'Alle STRUKTIVA Leistungen im Überblick: Website, Landingpages, Google-Sichtbarkeit, Kundenführung, Systeme, Dashboards und strukturierte Umsetzung.',
    canonicalPath: '/leistungen',
  },
  '/pakete': {
    title: 'Pakete & Betreuung - STRUKTIVA Unternehmensarchitektur',
    description:
      'Pakete und Betreuung von STRUKTIVA: klare Einstiege für Website, Sichtbarkeit, Kundenführung und digitale Systeme.',
    canonicalPath: '/pakete',
    isPricingRoute: true,
  },
  '/referenzen': {
    title: 'Referenzen & Demos - STRUKTIVA Unternehmensarchitektur',
    description: 'Referenzen und Demo-Beispiele von STRUKTIVA für Handwerk, Beauty, Beratung und lokale Dienstleister.',
    canonicalPath: '/demos',
  },
  '/demos': {
    title: 'Referenzen & Demos - STRUKTIVA Unternehmensarchitektur',
    description:
      'Echte Referenzen und Demo-Beispiele von STRUKTIVA für Handwerk, Beauty, Beratung und lokale Dienstleister.',
    canonicalPath: '/demos',
    isHomeRoute: true,
  },
  '/ueber-uns': {
    title: 'Über uns - STRUKTIVA Unternehmensarchitektur',
    description: 'Mehr über STRUKTIVA Unternehmensarchitektur: digitale Struktur für Unternehmen, lokale Dienstleister und Selbstständige.',
    canonicalPath: '/ueber-uns',
  },
  '/kontakt': {
    title: 'Kontakt - STRUKTIVA Unternehmensarchitektur',
    description: 'Kontakt und Projektanfrage bei STRUKTIVA Unternehmensarchitektur.',
    canonicalPath: '/kontakt',
  },
  '/datenschutz': {
    title: 'Datenschutz - STRUKTIVA Unternehmensarchitektur',
    description: 'Datenschutzerklärung von STRUKTIVA Unternehmensarchitektur.',
    canonicalPath: '/datenschutz',
  },
  '/impressum': {
    title: 'Impressum - STRUKTIVA Unternehmensarchitektur',
    description: 'Impressum und rechtliche Angaben von STRUKTIVA Unternehmensarchitektur.',
    canonicalPath: '/impressum',
  },
  '/demos/handwerker': {
    title: 'Seite nicht gefunden - STRUKTIVA Unternehmensarchitektur',
    description: 'Diese Seite gehört nicht mehr zur aktuellen STRUKTIVA Website-Struktur.',
    canonicalPath: '/demos/handwerker',
    hideChrome: true,
    noindex: true,
  },
  '/demos/kosmetik': {
    title: 'Seite nicht gefunden - STRUKTIVA Unternehmensarchitektur',
    description: 'Diese Seite gehört nicht mehr zur aktuellen STRUKTIVA Website-Struktur.',
    canonicalPath: '/demos/kosmetik',
    hideChrome: true,
    noindex: true,
  },
  '/demos/lokaler-dienstleister': {
    title: 'Seite nicht gefunden - STRUKTIVA Unternehmensarchitektur',
    description: 'Diese Seite gehört nicht mehr zur aktuellen STRUKTIVA Website-Struktur.',
    canonicalPath: '/demos/lokaler-dienstleister',
    hideChrome: true,
    noindex: true,
  },
}

export const DEFAULT_ROUTE_META = {
  title: 'Seite nicht gefunden - STRUKTIVA Unternehmensarchitektur',
  description: 'Diese Seite gehört nicht mehr zur aktuellen STRUKTIVA Website-Struktur.',
  noindex: true,
}

export const ACTIVE_ROUTE_PATHS = Object.keys(ACTIVE_ROUTE_META)

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
    { label: 'Leistungen', href: '/leistungen' },
    { label: 'Pakete', href: '/pakete' },
    { label: 'Referenzen', href: '/demos' },
    { label: 'Demos', href: '/demos' },
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  desktop: [
    { label: 'Pakete', href: '/pakete' },
    { label: 'Referenzen / Demos', href: '/demos' },
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  mobile: [
    { label: 'Pakete', href: '/pakete' },
    { label: 'Referenzen / Demos', href: '/demos' },
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  leistungenDropdown: [
    { label: 'Leistungen im Überblick', href: '/leistungen' },
    { label: 'Pakete & Angebote', href: '/pakete' },
    { label: 'Referenzen', href: '/demos' },
    { label: 'Demos', href: '/demos' },
  ],
}

export const futureNavigation = {
  status: 'planned-not-publicly-linked',
  primary: [
    { label: 'Start', href: '/', plannedSource: 'rebuild-home' },
    { label: 'Lösungen', href: '/loesungen', plannedSource: '/leistungen' },
    { label: 'Praxisbeispiele', href: '/praxisbeispiele', plannedSource: '/demos + /referenzen' },
    { label: 'Digital-Check', href: '/digital-check', plannedSource: '/kontakt#lead-form' },
    { label: 'Über STRUKTIVA', href: '/ueber-uns', plannedSource: '/ueber-uns' },
    { label: 'Kontakt', href: '/kontakt', plannedSource: '/kontakt' },
  ],
}

export const FUTURE_ROUTE_PLAN = [
  { path: '/', role: 'Startseite für STRUKTIVA Unternehmensberatung', status: 'replace-existing-route-later' },
  { path: '/loesungen', role: 'Drei Lösungswelten bündeln', status: 'planned' },
  { path: '/praxisbeispiele', role: 'Referenzen und echte Praxisbeweise bündeln', status: 'planned' },
  { path: '/praxisbeispiele/salon-karola', role: 'Detail-Praxisbeispiel Salon Karola', status: 'planned' },
  { path: '/digital-check', role: 'Primärer Lead-Einstieg', status: 'planned' },
  { path: '/ueber-uns', role: 'Haltung, Menschen und Arbeitsweise', status: 'keep-and-rebuild-content-later' },
  { path: '/kontakt', role: 'Direkte Kontaktwege und alternative Anfrage', status: 'keep' },
  { path: '/impressum', role: 'Rechtliche Anbieterangaben', status: 'keep' },
  { path: '/datenschutz', role: 'Datenschutzangaben', status: 'keep' },
]

export const ROUTE_MIGRATION_PLAN = [
  { from: '/', to: '/', action: 'REBUILD', redirectType: 'none', seoRisk: 'medium', activateWhen: 'new home is ready' },
  { from: '/leistungen', to: '/loesungen', action: 'REDIRECT LATER', redirectType: '301 later', seoRisk: 'high', activateWhen: '/loesungen is complete and indexed plan is approved' },
  { from: '/pakete', to: '/loesungen', action: 'MERGE', redirectType: '301 or keep as support route later', seoRisk: 'medium', activateWhen: 'pricing role is decided' },
  { from: '/demos', to: '/praxisbeispiele', action: 'REDIRECT LATER', redirectType: '301 later', seoRisk: 'medium', activateWhen: '/praxisbeispiele is complete' },
  { from: '/referenzen', to: '/praxisbeispiele', action: 'REDIRECT LATER', redirectType: '301 later', seoRisk: 'low', activateWhen: '/praxisbeispiele is complete' },
  { from: '/ueber-uns', to: '/ueber-uns', action: 'REBUILD', redirectType: 'none', seoRisk: 'low', activateWhen: 'content rewrite phase' },
  { from: '/kontakt', to: '/kontakt', action: 'KEEP', redirectType: 'none', seoRisk: 'low', activateWhen: 'already active' },
  { from: '/impressum', to: '/impressum', action: 'KEEP', redirectType: 'none', seoRisk: 'low', activateWhen: 'already active' },
  { from: '/datenschutz', to: '/datenschutz', action: 'KEEP', redirectType: 'none', seoRisk: 'low', activateWhen: 'already active' },
  { from: '/demos/handwerker', to: '/praxisbeispiele', action: 'REMOVE AFTER MIGRATION', redirectType: 'optional 301 later', seoRisk: 'low because noindex demo', activateWhen: 'demo strategy is decided' },
  { from: '/demos/kosmetik', to: '/praxisbeispiele', action: 'REMOVE AFTER MIGRATION', redirectType: 'optional 301 later', seoRisk: 'low because noindex demo', activateWhen: 'demo strategy is decided' },
  { from: '/demos/lokaler-dienstleister', to: '/praxisbeispiele', action: 'REMOVE AFTER MIGRATION', redirectType: 'optional 301 later', seoRisk: 'low because noindex demo', activateWhen: 'demo strategy is decided' },
]
