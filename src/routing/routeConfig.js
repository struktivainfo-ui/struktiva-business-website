const defaultDescription =
  'STRUKTIVA entwickelt Webseiten, Google-Sichtbarkeit, Kontaktwege und digitale Strukturen für Unternehmen, Selbstständige und lokale Dienstleister.'

import { personalDigitalCheckOffer } from '../config/digitalCheckOffer.js'
import { localSeoPages } from '../content/localSeoContent.js'
import { softwareGuideList } from '../content/softwareGuides.js'

const SITE_URL = 'https://struktiva.de'
const BUSINESS_ID = `${SITE_URL}/#business`

function createLocalSeoStructuredData(page) {
  const pageUrl = `${SITE_URL}${page.path}`
  const graph = [
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.metaTitle,
      description: page.metaDescription,
      inLanguage: 'de-DE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': BUSINESS_ID },
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Start', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: page.eyebrow, item: pageUrl },
      ],
    },
  ]

  if (page.path === '/ki-automatisierung-calw') {
    graph.push({
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'KI und Automatisierung für Unternehmen in Calw',
      serviceType: 'KI-Unterstützung und Prozessautomatisierung',
      description: page.metaDescription,
      url: pageUrl,
      provider: { '@id': BUSINESS_ID },
      areaServed: [
        { '@type': 'City', name: 'Calw' },
        { '@type': 'AdministrativeArea', name: 'Landkreis Calw' },
        { '@type': 'Place', name: 'Nordschwarzwald' },
      ],
    })
  }

  graph.push({
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  })

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

function createEditorialArticleData({ title, description, path, image }) {
  const pageUrl = `${SITE_URL}${path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: `${SITE_URL}${image}`,
    inLanguage: 'de-DE',
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    author: { '@type': 'Organization', name: 'Schön & Praktisch' },
    publisher: { '@type': 'Organization', name: 'STRUKTIVA', url: SITE_URL },
  }
}

const localSeoRouteMeta = Object.fromEntries(
  Object.values(localSeoPages).map((page) => [page.path, {
    title: page.metaTitle,
    description: page.metaDescription,
    canonicalPath: page.path,
    ogTitle: page.metaTitle,
    ogDescription: page.metaDescription,
    structuredData: createLocalSeoStructuredData(page),
  }]),
)

const softwareRouteMeta = Object.fromEntries(softwareGuideList.map((guide) => [guide.path, {
  title: guide.metaTitle || `${guide.title} | STRUKTIVA`,
  description: guide.description,
  canonicalPath: guide.path,
  structuredData: {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', headline: guide.title, description: guide.description, inLanguage: 'de-DE', dateModified: guide.updatedAt || '2026-10-10', author: { '@type': 'Organization', name: 'STRUKTIVA' }, publisher: { '@type': 'Organization', name: 'STRUKTIVA' }, mainEntityOfPage: `${SITE_URL}${guide.path}` },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Start', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Software & Tools', item: `${SITE_URL}/software-tools` },
        { '@type': 'ListItem', position: 3, name: guide.title, item: `${SITE_URL}${guide.path}` },
      ] },
    ],
  },
}]))

export const ACTIVE_ROUTE_META = {
  '/': {
    title: 'STRUKTIVA | Websites, Sichtbarkeit und digitale Abläufe für Unternehmen',
    description:
      'Mehr Anfragen, bessere Sichtbarkeit und klare digitale Abläufe für Unternehmen. Persönliche Beratung aus Calw, digitale Zusammenarbeit deutschlandweit. Kostenlosen Digital-Check anfragen.',
    canonicalPath: '/',
    isHomeRoute: true,
    isPricingRoute: true,
  },
  ...localSeoRouteMeta,
  '/software-tools': {
    title: 'Software & Tools für kleine Unternehmen | STRUKTIVA',
    description: 'Praxisnahe Ratgeber zu GetResponse, Newsletter-Software, E-Mail-Marketing und CRM für kleine Unternehmen und lokale Dienstleister.',
    canonicalPath: '/software-tools',
  },
  ...softwareRouteMeta,
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
    title: 'Digital-Check für Unternehmen | STRUKTIVA',
    description: 'Website, digitale Sichtbarkeit, Kontaktwege und Kundenprozesse persönlich einordnen lassen: der kostenlose STRUKTIVA Digital-Check für Unternehmen.',
    canonicalPath: '/digital-check',
    layout: 'campaign',
    ogTitle: 'STRUKTIVA Digital-Check für Unternehmen – kostenlos',
    ogDescription: 'Persönliche Prüfung, klar priorisierte Empfehlungen und ein nächster Schritt, der zu Ihrem Unternehmen passt – kostenlos.',
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
    title: 'Website & Sichtbarkeit: Preise und Pakete | STRUKTIVA',
    description:
      'Website START ab 490 € netto, PLUS 790 € netto, individuelle Websites ab 990 €. Lokale Sichtbarkeit ab 149 € monatlich und digitale Kundenführung ab 349 €.',
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
  '/werbekennzeichnung': {
    title: 'Werbekennzeichnung | STRUKTIVA',
    description: 'Hinweise zu Werbung, Affiliate-Links und bezahlten Kooperationen von STRUKTIVA.',
    canonicalPath: '/werbekennzeichnung',
  },
  '/schoen-und-praktisch': {
    title: 'Schön & Praktisch | Wohnideen für einen schönen Alltag',
    description: 'Praktische Wohnideen für kleine Räume, Flure und Stauraum – verständliche Tipps für ein Zuhause, das sich gut anfühlt.',
    canonicalPath: '/schoen-und-praktisch',
    layout: 'editorial',
    socialImage: '/images/schoen-und-praktisch-kleines-wohnzimmer.jpg',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Schön & Praktisch',
      url: `${SITE_URL}/schoen-und-praktisch`,
      description: 'Praktische Wohnideen für kleine Räume, Flure und Stauraum.',
      inLanguage: 'de-DE',
      publisher: { '@type': 'Organization', name: 'STRUKTIVA', url: SITE_URL },
    },
  },
  '/schoen-und-praktisch/kleiner-flur': {
    title: 'Kleinen Flur einrichten: 7 Ideen für mehr Platz | Schön & Praktisch',
    description: 'Sieben praktische Ideen für einen kleinen Flur: schmale Möbel, Wandstauraum, gutes Licht und feste Plätze für den Alltag.',
    canonicalPath: '/schoen-und-praktisch/kleiner-flur', layout: 'editorial', socialImage: '/images/schoen-und-praktisch-kleiner-flur.jpg',
    structuredData: createEditorialArticleData({ title: 'Kleinen Flur einrichten: 7 Ideen für mehr Platz', description: 'Sieben praktische Ideen für einen kleinen Flur: schmale Möbel, Wandstauraum, gutes Licht und feste Plätze für den Alltag.', path: '/schoen-und-praktisch/kleiner-flur', image: '/images/schoen-und-praktisch-kleiner-flur.jpg' }),
  },
  '/schoen-und-praktisch/kleines-wohnzimmer': {
    title: 'Kleines Wohnzimmer einrichten: 6 Zonen planen | Schön & Praktisch',
    description: 'Plane sechs praktische Bereiche im kleinen Wohnzimmer und halte dabei Laufwege frei – mit klaren Tipps zur Raumaufteilung.',
    canonicalPath: '/schoen-und-praktisch/kleines-wohnzimmer', layout: 'editorial', socialImage: '/images/schoen-und-praktisch-kleines-wohnzimmer.jpg',
    structuredData: createEditorialArticleData({ title: 'Kleines Wohnzimmer einrichten: 6 Zonen planen', description: 'Plane sechs praktische Bereiche im kleinen Wohnzimmer und halte dabei Laufwege frei – mit klaren Tipps zur Raumaufteilung.', path: '/schoen-und-praktisch/kleines-wohnzimmer', image: '/images/schoen-und-praktisch-kleines-wohnzimmer.jpg' }),
  },
  '/schoen-und-praktisch/dachschraege': {
    title: 'Dachschräge nutzen: 5 Stauraum-Ideen | Schön & Praktisch',
    description: 'Fünf Ideen für Stauraum unter der Dachschräge: richtig messen, niedrige Bereiche nutzen und Möbel passend planen.',
    canonicalPath: '/schoen-und-praktisch/dachschraege', layout: 'editorial', socialImage: '/images/schoen-und-praktisch-dachschraege.jpg',
    structuredData: createEditorialArticleData({ title: 'Dachschräge nutzen: 5 Stauraum-Ideen', description: 'Fünf Ideen für Stauraum unter der Dachschräge: richtig messen, niedrige Bereiche nutzen und Möbel passend planen.', path: '/schoen-und-praktisch/dachschraege', image: '/images/schoen-und-praktisch-dachschraege.jpg' }),
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

export const SEO_PRERENDER_PATHS = [
  ...Object.values(localSeoPages).map((page) => page.path),
  '/pakete',
  '/software-tools',
  ...softwareGuideList.map((guide) => guide.path),
  '/werbekennzeichnung',
  '/schoen-und-praktisch',
  '/schoen-und-praktisch/kleiner-flur',
  '/schoen-und-praktisch/kleines-wohnzimmer',
  '/schoen-und-praktisch/dachschraege',
  '/digital-check',
  '/digital-check/danke',
]

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
    { label: 'Pakete & Preise', href: '/pakete' },
    { label: 'Praxisbeispiele', href: '/praxisbeispiele', transitionFor: '/praxisbeispiele' },
    { label: 'Software & Tools', href: '/software-tools' },
    { label: 'Digital-Check', href: '/digital-check', transitionFor: '/digital-check', ctaRole: 'primary' },
    { label: 'Über STRUKTIVA', href: '/ueber-uns' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  desktop: [
    { label: 'Leistungen', href: '/leistungen' },
    { label: 'Lösungen', href: '/loesungen' },
    { label: 'Pakete', href: '/pakete' },
    { label: 'Praxisbeispiele', href: '/praxisbeispiele', transitionFor: '/praxisbeispiele' },
    { label: 'Ratgeber', href: '/software-tools' },
  ],
  mobile: [
    { label: 'Start', href: '/' },
    { label: 'Leistungen', href: '/leistungen' },
    { label: 'Lösungen', href: '/loesungen' },
    { label: 'Pakete', href: '/pakete' },
    { label: 'Praxisbeispiele', href: '/praxisbeispiele', transitionFor: '/praxisbeispiele' },
    { label: 'Ratgeber', href: '/software-tools' },
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
