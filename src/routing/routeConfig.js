const defaultDescription =
  'STRUKTIVA entwickelt Webseiten, Google-Sichtbarkeit, Kontaktwege und digitale Strukturen für Unternehmen, Selbstständige und lokale Dienstleister.'

export const ACTIVE_ROUTE_META = {
  '/': {
    title: 'STRUKTIVA Digitale Unternehmensberatung | Digitale Struktur für Unternehmen',
    description: defaultDescription,
    canonicalPath: '/',
    isHomeRoute: true,
    isPricingRoute: true,
  },
  '/leistungen': {
    title: 'Leistungen - STRUKTIVA Digitale Unternehmensberatung',
    description:
      'Alle STRUKTIVA Leistungen im Überblick: Website, Landingpages, Google-Sichtbarkeit, Kundenführung, Systeme, Dashboards und strukturierte Umsetzung.',
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
    title: 'Digital-Check für Unternehmen | STRUKTIVA',
    description:
      'Der STRUKTIVA Digital-Check betrachtet Sichtbarkeit, Kundenwege und digitale Abläufe im Zusammenhang und hilft dabei, sinnvolle nächste Schritte einzuordnen.',
    canonicalPath: '/digital-check',
  },
  '/pakete': {
    title: 'Pakete & Betreuung - STRUKTIVA Digitale Unternehmensberatung',
    description:
      'Pakete und Betreuung von STRUKTIVA: klare Einstiege für Website, Sichtbarkeit, Kundenführung und digitale Systeme.',
    canonicalPath: '/pakete',
    isPricingRoute: true,
  },
  '/referenzen': {
    title: 'Referenzen & Demos - STRUKTIVA Digitale Unternehmensberatung',
    description: 'Referenzen und Demo-Beispiele von STRUKTIVA für Handwerk, Beauty, Beratung und lokale Dienstleister.',
    canonicalPath: '/demos',
  },
  '/demos': {
    title: 'Referenzen & Demos - STRUKTIVA Digitale Unternehmensberatung',
    description:
      'Echte Referenzen und Demo-Beispiele von STRUKTIVA für Handwerk, Beauty, Beratung und lokale Dienstleister.',
    canonicalPath: '/demos',
    isHomeRoute: true,
  },
  '/ueber-uns': {
    title: 'Über uns - STRUKTIVA Digitale Unternehmensberatung',
    description: 'Mehr über STRUKTIVA Digitale Unternehmensberatung: digitale Struktur für Unternehmen, lokale Dienstleister und Selbstständige.',
    canonicalPath: '/ueber-uns',
  },
  '/kontakt': {
    title: 'Kontakt - STRUKTIVA Digitale Unternehmensberatung',
    description: 'Kontakt und Projektanfrage bei STRUKTIVA Digitale Unternehmensberatung.',
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
  primaryCta: { label: 'Digital-Check anfragen', href: '/kontakt#lead-form', transitionFor: '/digital-check' },
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
  { path: '/loesungen', role: 'Drei Lösungswelten bündeln', status: 'active-step-12' },
  { path: '/praxisbeispiele', role: 'Referenzen und echte Praxisbeweise bündeln', status: 'active-step-13' },
  { path: '/praxisbeispiele/salon-karola', role: 'Detail-Praxisbeispiel Salon Karola', status: 'active-step-14' },
  { path: '/digital-check', role: 'Verständlicher Digital-Check-Einstieg mit Lead-Verweis', status: 'active-step-15' },
  { path: '/ueber-uns', role: 'Haltung, Menschen und Arbeitsweise', status: 'keep-and-rebuild-content-later' },
  { path: '/kontakt', role: 'Direkte Kontaktwege und alternative Anfrage', status: 'keep' },
  { path: '/impressum', role: 'Rechtliche Anbieterangaben', status: 'keep' },
  { path: '/datenschutz', role: 'Datenschutzangaben', status: 'keep' },
]

export const ROUTE_MIGRATION_PLAN = [
  { from: '/', to: '/', action: 'REBUILD', redirectType: 'none', seoRisk: 'medium', activateWhen: 'new home is ready' },
  { from: '/leistungen', to: '/loesungen', action: 'KEEP UNTIL REDIRECT DECISION', redirectType: 'none in step 12', seoRisk: 'high', activateWhen: 'only after SEO, sitemap and content decision' },
  { from: '/pakete', to: '/loesungen', action: 'MERGE', redirectType: '301 or keep as support route later', seoRisk: 'medium', activateWhen: 'pricing role is decided' },
  { from: '/demos', to: '/praxisbeispiele', action: 'KEEP UNTIL REDIRECT DECISION', redirectType: 'none in step 13', seoRisk: 'medium', activateWhen: 'only after SEO, sitemap and demo strategy decision' },
  { from: '/referenzen', to: '/praxisbeispiele', action: 'KEEP UNTIL REDIRECT DECISION', redirectType: 'none in step 13', seoRisk: 'low', activateWhen: 'only after SEO, sitemap and alias decision' },
  { from: '/ueber-uns', to: '/ueber-uns', action: 'REBUILD', redirectType: 'none', seoRisk: 'low', activateWhen: 'content rewrite phase' },
  { from: '/kontakt', to: '/kontakt', action: 'KEEP', redirectType: 'none', seoRisk: 'low', activateWhen: 'already active' },
  { from: '/impressum', to: '/impressum', action: 'KEEP', redirectType: 'none', seoRisk: 'low', activateWhen: 'already active' },
  { from: '/datenschutz', to: '/datenschutz', action: 'KEEP', redirectType: 'none', seoRisk: 'low', activateWhen: 'already active' },
  { from: '/demos/handwerker', to: '/praxisbeispiele', action: 'REMOVE AFTER MIGRATION', redirectType: 'optional 301 later', seoRisk: 'low because noindex demo', activateWhen: 'demo strategy is decided' },
  { from: '/demos/kosmetik', to: '/praxisbeispiele', action: 'REMOVE AFTER MIGRATION', redirectType: 'optional 301 later', seoRisk: 'low because noindex demo', activateWhen: 'demo strategy is decided' },
  { from: '/demos/lokaler-dienstleister', to: '/praxisbeispiele', action: 'REMOVE AFTER MIGRATION', redirectType: 'optional 301 later', seoRisk: 'low because noindex demo', activateWhen: 'demo strategy is decided' },
]
