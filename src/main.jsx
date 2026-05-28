import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  LayoutTemplate,
  Linkedin,
  Megaphone,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  MousePointerClick,
  PanelsTopLeft,
  PhoneCall,
  QrCode,
  Search,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Target,
  Workflow,
  X,
} from 'lucide-react'
import './styles.css'

const siteLinks = {
  home: '/#start',
  services: '/#leistungen',
  leistungenPage: '/leistungen',
  pricing: '/preise',
  demos: '/demos',
  apps: '/apps',
  googleAds: '/google-ads',
  process: '/#ablauf',
  contact: '/kontakt',
  contactSection: '/#kontakt',
  webseitenPage: '/webseiten',
  landingpagesPage: '/landingpages',
  appsPage: '/apps',
  googleAdsPage: '/google-ads',
  demoHandwerker: '/demo-handwerker',
  demoBeauty: '/demo-beauty',
  demoDienstleister: '/demo-dienstleister',
  demoFriseursalonV2: '/demos/friseursalon',
  demoHandwerkerV2: '/demos/handwerker',
  demoKosmetikstudioV2: '/demos/kosmetikstudio',
  demoBewertungsstrukturV2: '/demos/bewertungsstruktur',
  demoDashboardV2: '/demos/dashboard',
  brancheFriseursalons: '/branchen/friseursalons',
  brancheHandwerker: '/branchen/handwerker',
  brancheKosmetikstudios: '/branchen/kosmetikstudios',
  brancheLokaleDienstleister: '/branchen/lokale-dienstleister',
  brancheBeratung: '/branchen/beratung',
  landingpageDigitaleStruktur: '/landingpage-digitale-struktur',
  bewertungsQrCode: '/bewertungs-qr-code',
  digitaleSoforthilfe: '/digitale-soforthilfe',
  digitaleOrdnungssysteme: '/digitale-ordnungssysteme',
  websiteFuerKleineUnternehmen: '/website-fuer-kleine-unternehmen',
  landingpageErstellenLassen: '/landingpage-erstellen-lassen',
  googleSichtbarkeitKleineUnternehmen: '/google-sichtbarkeit-kleine-unternehmen',
  digitaleKundenfuehrung: '/digitale-kundenfuehrung',
  whatsappKontaktstruktur: '/whatsapp-kontaktstruktur',
  socialMediaStruktur: '/social-media-struktur',
  newsletterEinbindung: '/newsletter-einbindung',
  unternehmensApps: '/unternehmens-apps',
  betriebsDashboards: '/betriebs-dashboards',
  angebotsarchitektur: '/angebotsarchitektur',
  digitaleUnternehmensstruktur: '/digitale-unternehmensstruktur',
  impressum: '/impressum',
  datenschutz: '/datenschutz',
  widerruf: '/widerruf',
  wissen: '/wissen',
  wissenWebsiteAllein: '/wissen/warum-eine-schoene-website-keine-kunden-bringt',
  wissenGrundsysteme: '/wissen/digitale-grundsysteme-kleine-unternehmen',
  wissenWebsiteLandingpageFunnel: '/wissen/website-landingpage-funnel-unterschied',
}

const brand = {
  name: 'STRUKTIVA Unternehmensarchitektur',
  descriptor: 'Unternehmensarchitektur',
  line: 'Professionelle Online-Präsenz. Kundengewinnung. Digitale Struktur. Optionale App-Lösungen.',
}

const struktivaImages = {
  hero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
  structure: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
  businessHero: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80',
  structurePlanning: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1500&q=80',
  digitalDashboard: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
  consulting: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=80',
  localBusiness: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1400&q=80',
  workspace: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1400&q=80',
  handwerker: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  beauty: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80',
  dienstleister: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
  ctaBackdrop: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80',
}

const contactDetails = {
  email: 'struktiva.info@gmail.com',
  phoneLabel: '07051 8162292',
  phoneHref: 'tel:+4970518162292',
  whatsappLabel: '07051 8162292',
  whatsappHref: 'https://wa.me/4970518162292',
  linkedinHref: 'https://www.linkedin.com/in/sven-matzke-960b63411',
  founderSvenImage: '/images/founder-sven.jpg',
  founderJessicaImage: '/images/founder-jessica.jpg',
  googleReviewHref: 'https://g.page/r/CZvwYJbOSShgEBM/review',
  addressLine1: 'Ostlandstraße 3',
  addressLine2: '75365 Calw',
  country: 'Deutschland',
}

const navItems = [
  ['Start', siteLinks.home],
  ['Leistungen', siteLinks.services],
  ['Preise', siteLinks.pricing],
  ['Demos', siteLinks.demos],
  ['Wissen', siteLinks.wissen],
  ['Apps', siteLinks.apps],
  ['Google Ads', siteLinks.googleAds],
  ['Bewertungs-QR-Code', siteLinks.bewertungsQrCode],
  ['Ablauf', siteLinks.process],
  ['Kontakt', siteLinks.contact],
  ['Digitale Ordnungssysteme', siteLinks.digitaleOrdnungssysteme],
]

const desktopNavItems = [
  ['Preise', siteLinks.pricing],
  ['Wissen', siteLinks.wissen],
  ['Kontakt', siteLinks.contact],
]

const leistungenDropdownItems = [
  ['Website & Landingpage', siteLinks.websiteFuerKleineUnternehmen],
  ['Google-Sichtbarkeit', siteLinks.googleSichtbarkeitKleineUnternehmen],
  ['Digitale Kundenführung', siteLinks.digitaleUnternehmensstruktur],
  ['Digitale Soforthilfe', siteLinks.digitaleSoforthilfe],
  ['Digitale Ordnungssysteme', siteLinks.digitaleOrdnungssysteme],
  ['Unternehmens-Apps & Dashboards', siteLinks.unternehmensApps],
]

const demoDropdownItems = [
  ['Referenzprojekt Salon Karola', 'Echte Umsetzung: vom Baukasten-Auftritt zur modernen digitalen Salon-Struktur.', 'https://salon-karola-webseite.vercel.app/', Sparkles],
  ['Handwerker-Demo', 'Robuste Website-Struktur für Leistungen, Referenzen und Anfragen.', siteLinks.demoHandwerkerV2, Building2],
  ['Kosmetikstudio-Demo', 'Elegante Beauty-Struktur mit Behandlungen, Preisen und Termin-Anfrage.', siteLinks.demoKosmetikstudioV2, BadgeCheck],
  ['Lokaler Dienstleister-Demo', 'Digitale Struktur für lokale Betriebe mit klarer Positionierung und Kontaktführung.', siteLinks.demoDienstleister, BriefcaseBusiness],
  ['Bewertungsstruktur-Demo', 'QR-Code, Bewertungslink und klare Kundenführung zur Bewertung.', siteLinks.demoBewertungsstrukturV2, QrCode],
]

const demoCards = [
  {
    title: 'Demo Handwerker',
    text: 'Eine klare Website-Struktur für Handwerksbetriebe, die Vertrauen aufbauen, Leistungen verständlich zeigen und mehr qualifizierte Anfragen erhalten wollen.',
    href: siteLinks.demoHandwerker,
    icon: Building2,
  },
  {
    title: 'Demo Beauty & Kosmetik',
    text: 'Eine elegante Beispielseite für Kosmetikstudios, Beauty-Dienstleister und lokale Anbieter, die professioneller auftreten und Buchungen leichter machen möchten.',
    href: siteLinks.demoBeauty,
    icon: Sparkles,
  },
  {
    title: 'Demo Dienstleister',
    text: 'Eine moderne Struktur für Selbstständige, Berater, Reinigungsfirmen, Fahrschulen oder lokale Dienstleister, die online klarer und hochwertiger wirken wollen.',
    href: siteLinks.demoDienstleister,
    icon: BriefcaseBusiness,
  },
]

const demoPages = {
  handwerker: {
    title: 'Demo Handwerker – Digitale Struktur für regionale Handwerksbetriebe',
    hero: 'Mehr Anfragen für deinen Handwerksbetrieb – mit einem klaren digitalen Auftritt.',
    subheadline:
      'Diese Beispielseite zeigt, wie ein Handwerksbetrieb seine Leistungen professionell präsentiert, Vertrauen aufbaut und Interessenten direkt zur Anfrage führt.',
    tags: ['Beispielansicht', 'Regional ausgerichtet', 'Anfragefokus'],
    sections: [
      {
        title: 'Leistungen',
        points: ['Renovierung & Sanierung', 'Reparaturservice', 'Wartung & Instandhaltung', 'individuelle Projektanfragen', 'Notfall- oder Schnellservice'],
      },
      {
        title: 'Warum dieser Aufbau funktioniert',
        text: 'Kunden wollen schnell verstehen, ob ein Betrieb zuverlässig ist, welche Leistungen angeboten werden und wie sie unkompliziert Kontakt aufnehmen können. Eine klare digitale Struktur reduziert Unsicherheit und führt Besucher gezielt zur Anfrage.',
      },
      {
        title: 'Vertrauenselemente (Demo)',
        points: ['regionale Ausrichtung', 'klare Kontaktmöglichkeiten', 'Bewertungsbereich als Beispiel', 'Vorher-Nachher-Bereich', 'WhatsApp- oder Telefon-CTA'],
      },
    ],
    formFields: ['Name', 'Telefonnummer', 'E-Mail', 'Gewünschte Leistung', 'Nachricht'],
    formCta: 'Projekt anfragen',
  },
  beauty: {
    title: 'Demo Beauty & Kosmetik – Professioneller Auftritt für lokale Beauty-Dienstleister',
    hero: 'Ein Beauty-Auftritt, der hochwertig wirkt und Buchungen leichter macht.',
    subheadline:
      'Diese Beispielseite zeigt, wie ein Kosmetikstudio oder Beauty-Dienstleister Leistungen elegant präsentiert, Vertrauen schafft und Kundinnen direkt zur Anfrage oder Buchung führt.',
    tags: ['Beispielansicht', 'Elegante Darstellung', 'Buchungsorientiert'],
    sections: [
      {
        title: 'Leistungen',
        points: ['Gesichtsbehandlungen', 'Hautpflege-Beratung', 'Augenbrauen & Wimpern', 'Make-up / Styling', 'Wellness- oder Verwöhnpakete'],
      },
      {
        title: 'Angebotsstruktur',
        points: ['Kennenlernbehandlung', 'Premium-Behandlung', 'Monatsangebot', 'Gutscheinangebot'],
      },
      {
        title: 'Warum dieser Aufbau funktioniert',
        text: 'Beauty-Kunden entscheiden stark über Vertrauen, Optik und Klarheit. Eine professionelle Seite zeigt sofort Stil, Leistungen, Preiseinstieg und Kontaktmöglichkeiten.',
      },
      {
        title: 'Kontakt & Buchung',
        points: ['WhatsApp-Button', 'Telefon-Button', 'Anfrageformular', 'Öffnungszeiten', 'Standortbereich'],
      },
    ],
    formFields: ['Name', 'Telefonnummer', 'E-Mail', 'Gewünschte Behandlung', 'Nachricht'],
    formCta: 'Unverbindlich anfragen',
  },
  dienstleister: {
    title: 'Demo Dienstleister – Digitale Struktur für Selbstständige und lokale Unternehmen',
    hero: 'Zeige klar, was du anbietest – und mache Interessenten zu Anfragen.',
    subheadline:
      'Diese Beispielseite zeigt, wie ein lokaler Dienstleister oder Selbstständiger sein Angebot strukturiert, Vertrauen aufbaut und Kunden einfach zur Kontaktaufnahme führt.',
    tags: ['Beispielansicht', 'Leistungsfokus', 'Kontaktklarheit'],
    sections: [
      {
        title: 'Geeignet für',
        points: ['Reinigungsfirmen', 'Fahrschulen', 'Berater', 'Coaches', 'lokale Services', 'Einzelunternehmer', 'kleine Dienstleistungsbetriebe'],
      },
      {
        title: 'Angebot klar erklären',
        points: ['Erstgespräch', 'Standard-Leistung', 'Premium-Service', 'laufende Betreuung'],
      },
      {
        title: 'Problem-Lösung-Struktur',
        text: 'Viele Dienstleister erklären online nicht klar genug, für wen ihr Angebot gedacht ist und welchen Nutzen es bringt. Diese Demo zeigt, wie Besucher Schritt für Schritt zur Anfrage geführt werden.',
      },
      {
        title: 'Vertrauenselemente',
        points: ['klare Leistungsübersicht', 'Ablauf in 3 Schritten', 'FAQ-Bereich', 'Kontaktbereich', 'Google-Bewertungsbereich als Beispielstruktur'],
      },
    ],
    formFields: ['Name', 'Unternehmen', 'E-Mail', 'Telefonnummer', 'Gewünschte Leistung', 'Nachricht'],
    formCta: 'Unverbindlich anfragen',
  },
}

const demoImageConfigs = {
  handwerker: {
    hero: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1600&q=80',
    sectionA: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    sectionB: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  },
  beauty: {
    hero: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1600&q=80',
    sectionA: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
    sectionB: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
  },
  dienstleister: {
    hero: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80',
    sectionA: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    sectionB: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  },
}

const trustCards = [
  [PanelsTopLeft, 'Professionelle Wirkung', 'Ein klarer digitaler Auftritt zeigt sofort, wofür dein Unternehmen steht und warum Kunden dir vertrauen können.'],
  [MousePointerClick, 'Kundenführung statt Zufall', 'Website, Landingpage, WhatsApp und Angebotsstruktur werden so aufgebaut, dass aus Besuchern konkrete Anfragen werden.'],
  [Workflow, 'Digitale Ordnung im Alltag', 'Google-Struktur, Social-Media-Logik und interne Abläufe werden sinnvoll verbunden statt einzeln verwaltet.'],
  [ShieldCheck, 'Verständlich und umsetzbar', 'Keine Technik-Überforderung, sondern ein System, das kleine Betriebe wirklich nutzen und weiterführen können.'],
]

const problemCards = [
  ['Die Webseite wirkt nicht professionell genug', 'Potenzielle Kunden gewinnen nicht sofort Vertrauen in den Betrieb.'],
  ['Kunden finden keine klare Kontaktmöglichkeit', 'Anfragen gehen verloren, weil Kontaktwege nicht eindeutig geführt sind.'],
  ['Google-Bewertungen werden nicht systematisch aufgebaut', 'Die lokale Sichtbarkeit bleibt unter den Möglichkeiten des Unternehmens.'],
  ['Social Media kostet Zeit, bringt aber keine Struktur', 'Inhalte entstehen unregelmäßig und zahlen nicht auf ein klares Ziel ein.'],
  ['Angebote sind nicht klar formuliert', 'Besucher verstehen den Nutzen nicht schnell genug und springen ab.'],
  ['Es fehlt ein System, das Besucher zu Anfragen macht', 'Einzelmaßnahmen sind vorhanden, aber kein durchgängiger digitaler Ablauf.'],
]

const coreServices = [
  {
    icon: LayoutTemplate,
    title: 'Professionelle Webseiten',
    description: 'Moderne Webseiten für kleine Unternehmen, die Vertrauen aufbauen, Leistungen klar darstellen und Kontaktwege sinnvoll verbinden.',
    price: 'ab 599 € inklusive Mehrwertsteuer',
    href: siteLinks.webseitenPage,
  },
  {
    icon: Target,
    title: 'Landingpages',
    description: 'Klar fokussierte Seiten für Angebote, Aktionen, Produkte oder Dienstleistungen mit sauberer Struktur und direkter Handlungsaufforderung.',
    price: 'ab 299 € inklusive Mehrwertsteuer',
    href: siteLinks.landingpagesPage,
  },
  {
    icon: Search,
    title: 'Google-Sichtbarkeit',
    description: 'Strukturierte Unterstützung für bessere Auffindbarkeit über Google, lokale Suchanfragen, Unternehmensprofil-Texte und saubere Online-Grundlagen.',
    price: 'auf Anfrage',
    href: siteLinks.googleSichtbarkeit,
  },
  {
    icon: MousePointerClick,
    title: 'Digitale Kundenführung',
    description: 'Klare Kontaktwege über Webseite, WhatsApp, Bewertungssysteme, Anfrageformulare und sinnvolle digitale Abläufe.',
    price: 'auf Anfrage',
    href: siteLinks.digitaleUnternehmensstruktur,
  },
  {
    icon: Smartphone,
    title: 'Unternehmens-Apps',
    description: 'Individuelle Web-Apps für interne Abläufe, Kundenverwaltung, Aufgaben, Termine, Checklisten und mobile Nutzung im Betrieb.',
    price: 'ab 999 € inklusive Mehrwertsteuer',
    href: siteLinks.unternehmensApps,
  },
  {
    icon: PanelsTopLeft,
    title: 'Betriebs-Dashboards',
    description: 'Übersichtliche digitale Steuerungsflächen für Aufgaben, Tagesplanung, Kennzahlen, Abläufe und betriebliche Kontrolle.',
    price: 'ab 799 € inklusive Mehrwertsteuer',
    href: siteLinks.unternehmensApps,
  },
  {
    icon: ClipboardList,
    title: 'Digitale Ordnungssysteme',
    description: 'Digitale Strukturen für wiederkehrende Aufgaben, Checklisten, Dokumentation, Vorlagen, Ablage und klare Zuständigkeiten.',
    price: 'ab 899 € inklusive Mehrwertsteuer',
    href: siteLinks.digitaleOrdnungssysteme,
  },
  {
    icon: Sparkles,
    title: 'Digitale Soforthilfe',
    subtitle: 'Wenn online schnell etwas funktionieren muss.',
    description: 'Schnelle Unterstützung bei Website-Anpassungen, Landingpages, Google-Texten, Social-Media-Beiträgen, WhatsApp- und Bewertungstexten sowie digitalen Kleinkorrekturen.',
    price: 'ab 99 € inklusive Mehrwertsteuer',
    ctaLabel: 'Mehr zur Soforthilfe',
    href: siteLinks.digitaleSoforthilfe,
  },
]

const websiteFocusCards = [
  ['Professionelle Webseiten', 'Digitale Basis für einen hochwertigen Unternehmensauftritt.'],
  ['Landingpages', 'Fokussierte Seiten für Angebote, Aktionen, Produkte oder Dienstleistungen.'],
  ['Angebotsseiten', 'Klare Seiten für Leistungen, Pakete und digitale Produkte.'],
]

const appModules = [
  'Kundenverwaltung',
  'Terminübersicht',
  'Mitarbeiterorganisation',
  'Aufgabensteuerung',
  'Checklisten',
  'Dashboards',
  'Bewertungsprozesse',
  'Kundenkommunikation',
]

const googleAdsCards = [
  ['Kampagnenstruktur', 'Klare Ordnung für Angebote, Zielgruppen und Suchintentionen.'],
  ['Anzeigentexte', 'Professionelle Texte, die verständlich machen, warum Kunden anfragen sollten.'],
  ['Landingpage-Verbindung', 'Google Ads funktionieren besser, wenn die Zielseite klar, schnell und überzeugend aufgebaut ist.'],
  ['Betreuung', 'Auf Wunsch können Kampagnenstruktur und Zielseiten regelmäßig geprüft und verbessert werden.'],
]

const pricingPackages = [
  {
    title: 'Sichtbarkeit',
    price: 'ab 599 €',
    badge: 'Professioneller Einstieg',
    description: 'Für Betriebe, die online professioneller gefunden werden wollen.',
    features: [
      'moderne Onepage-Webseite',
      'mobile Optimierung',
      'klare Angebotsstruktur',
      'WhatsApp-Kontakt',
      'Google-Bewertungslink',
      'einfache Kontaktführung',
      'Newsletter-Einbindung',
    ],
    note: 'Ein klarer Start für Betriebe, die digital professioneller auftreten und erreichbar sein möchten.',
    cta: 'Sichtbarkeit anfragen',
    strong: true,
  },
  {
    title: 'Kundengewinnung',
    price: 'ab 899 €',
    badge: 'Verkaufsstarke Struktur',
    description: 'Für Unternehmen, die mehr Anfragen aus ihrem digitalen Auftritt machen wollen.',
    features: [
      'verkaufsstarke Landingpage',
      'Angebotsarchitektur',
      'WhatsApp-CTA',
      'Google-Bewertungsstrategie',
      'Social-Media-Startstruktur',
      'klare Kundenführung',
      'einfache Newsletter-Einbindung auf Wunsch',
    ],
    note: 'Der Fokus liegt auf verständlicher Angebotskommunikation und qualifizierter Anfrageführung.',
    cta: 'Kundengewinnung anfragen',
    strong: true,
  },
  {
    title: 'Unternehmensarchitektur',
    price: 'ab 1.499 €',
    subtitle: 'Optionale App- oder Dashboard-Lösung möglich',
    badge: 'Ganzheitliches System',
    description: 'Für Betriebe, die ein vollständiges digitales System brauchen.',
    features: [
      'Website oder Mehrseiten-Struktur',
      'Landingpages',
      'Google-Struktur',
      'Social-Media-System',
      'Kundenanfrage-System',
      'App- oder Dashboard-Konzept',
      'Newsletter-System als zusätzlicher Baustein möglich',
      '30 Tage Begleitung',
    ],
    note: 'Für Unternehmen, die nicht nur einen Auftritt, sondern ein klares digitales Unternehmenssystem aufbauen wollen.',
    cta: 'Unternehmensarchitektur anfragen',
    premium: true,
  },
  {
    title: 'Monatliche Betreuung',
    price: 'ab 199 € / Monat',
    badge: 'Laufende Begleitung',
    description: 'Für Unternehmen, die nach der Erstellung dauerhaft Unterstützung bei Webseite, Landingpage, Google Ads oder App-Systemen möchten.',
    features: [
      'kleine Änderungen',
      'neue Inhalte',
      'Social-Media-Vorlagen',
      'Google-Bewertungen',
      'technische Pflege',
      'Auswertung und Optimierung',
    ],
    note: 'Der genaue monatliche Umfang wird im persönlichen Gespräch festgelegt. Die monatliche Betreuung erfolgt im vereinbarten Umfang. Zusätzliche Arbeiten werden nach Aufwand angeboten. Basis-Betreuung ab 199 € / Monat, Struktur-Betreuung ab 299 € / Monat und Premium-Betreuung ab 499 € / Monat.',
    cta: 'Betreuung anfragen',
  },
]

const processSteps = [
  ['1', 'Digitale Analyse', 'Wir prüfen, welche Struktur Ihr Unternehmen aktuell braucht.'],
  ['2', 'Strukturplanung', 'Wir definieren Website, Google, Kontaktwege, Bewertungen und digitale Abläufe.'],
  ['3', 'Umsetzung', 'Wir bauen die passenden digitalen Bausteine professionell auf.'],
  ['4', 'Betreuung & Erweiterung', 'Auf Wunsch betreuen, verbessern und erweitern wir Ihre digitale Struktur dauerhaft.'],
]

const targetGroups = [
  'Handwerksbetriebe',
  'Kosmetikstudios',
  'Friseursalons',
  'Fahrschulen',
  'Reinigungsfirmen',
  'Restaurants',
  'lokale Dienstleister',
  'kleine Einzelhändler',
  'Einzelunternehmer',
  'Selbstständige',
  'Coaches und Berater',
  'kleine und mittlere Unternehmen',
]

const whyPoints = [
  'Klarer Aufbau statt schöner, aber wirkungsloser Webseite',
  'Fokus auf Anfragen, Vertrauen und Kontakt',
  'Website, Landingpage, WhatsApp, Google, Social Media und Newsletter als zusammenhängende Struktur',
  'Verständliche Umsetzung ohne Technik-Blabla',
  'Systeme, die kleine Unternehmen wirklich im Alltag nutzen können',
]

const qualityPoints = [
  ['Klar verständlich', 'Keine unnötig komplizierten Systeme, sondern Lösungen, die nachvollziehbar aufgebaut sind.'],
  ['Sauber umgesetzt', 'Professionelle Texte, klare Struktur, mobile Optimierung und technische Stabilität.'],
  ['Praxisnah gedacht', 'Digitale Lösungen, die nicht nur gut aussehen, sondern im echten Unternehmensalltag helfen.'],
]

const differentiatorCards = [
  ['Mehr als Webdesign', 'Wir verbinden Website, Google, Kontaktwege und Kundenführung.'],
  ['Für kleine Unternehmen gebaut', 'Klare Lösungen ohne unnötige Komplexität.'],
  ['Transparente Einstiegspreise', 'Planbare Pakete inklusive Mehrwertsteuer.'],
  ['Struktur statt Einzellösung', 'Digitale Systeme, die im Alltag funktionieren.'],
]

const ordnungssystemVorteile = [
  'klare tägliche Erfassung',
  'weniger Zettelwirtschaft',
  'strukturierte Monatsübersicht',
  'Zugriff für Betrieb und Steuerberater',
  'Export als CSV oder PDF',
  'Rollenverwaltung mit Leserechten',
  'individuelle Anpassung an den Betrieb',
  'einfache Bedienung auf Laptop, Tablet und Handy',
]

const ordnungssystemModule = [
  ['Digitale Tagesabschluss-Erfassung', 'Für Betriebe, die tägliche Werte sauber und nachvollziehbar erfassen möchten.'],
  ['Kassenstruktur-Systeme', 'Für Wechselgeld, Bar-Anteil, EC-Zahlungen, Abschöpfung und Differenzkontrolle.'],
  ['Beleg-Hinweis-Systeme', 'Ohne Dateiablage, aber mit Belegnummern, Hinweisen und klarer Zuordnung.'],
  ['Monatsübersichten', 'Übersichtliche Auswertungen für Betrieb und Steuerberater.'],
  ['Exportlösungen', 'CSV- und PDF-Ausgaben zur Weitergabe oder internen Kontrolle.'],
  ['Individuelle Ordnungssysteme', 'Digitale Abläufe, die an den tatsächlichen Betrieb angepasst werden.'],
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0 },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
}

function useCurrentPath() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocation = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onLocation)
    return () => window.removeEventListener('popstate', onLocation)
  }, [])

  return path
}

function useDocumentTitleSafe(pathname) {
  useEffect(() => {
    const titles = {
      '/': 'STRUKTIVA Unternehmensarchitektur | Digitale Struktur für kleine Unternehmen',
      '/webseiten': 'Professionelle Webseiten - STRUKTIVA Unternehmensarchitektur',
      '/landingpages': 'Landingpages - STRUKTIVA Unternehmensarchitektur',
      '/apps': 'Unternehmens-Apps - STRUKTIVA Unternehmensarchitektur',
      '/google-ads': 'Google Ads - STRUKTIVA Unternehmensarchitektur',
      '/bewertungs-qr-code': 'Google-Bewertungssystem mit QR-Code | STRUKTIVA',
      '/digitale-ordnungssysteme': 'Digitale Ordnungssysteme fuer kleine Betriebe - STRUKTIVA',
      '/website-fuer-kleine-unternehmen': 'Website-Erstellung fuer kleine Unternehmen - STRUKTIVA',
      '/landingpage-erstellen-lassen': 'Landingpages erstellen lassen - STRUKTIVA',
      '/google-sichtbarkeit-kleine-unternehmen': 'Google-Sichtbarkeit fuer kleine Unternehmen - STRUKTIVA',
      '/digitale-kundenfuehrung': 'Digitale Kundenfuehrung - STRUKTIVA',
      '/whatsapp-kontaktstruktur': 'WhatsApp-Kontaktstruktur - STRUKTIVA',
      '/social-media-struktur': 'Social-Media-Struktur - STRUKTIVA',
      '/newsletter-einbindung': 'Newsletter-Einbindung - STRUKTIVA',
      '/unternehmens-apps': 'Unternehmens-Apps - STRUKTIVA',
      '/betriebs-dashboards': 'Betriebs-Dashboards - STRUKTIVA',
      '/angebotsarchitektur': 'Angebotsarchitektur - STRUKTIVA',
      '/digitale-unternehmensstruktur': 'Digitale Unternehmensstruktur - STRUKTIVA',
      '/digitale-soforthilfe': 'Digitale Soforthilfe für kleine Unternehmen | STRUKTIVA',
      '/demo-handwerker': 'Demo Handwerker - STRUKTIVA Unternehmensarchitektur',
      '/demo-beauty': 'Demo Beauty & Kosmetik - STRUKTIVA Unternehmensarchitektur',
      '/demo-dienstleister': 'Demo Dienstleister - STRUKTIVA Unternehmensarchitektur',
      '/demos/friseursalon': 'Friseursalon Demo | STRUKTIVA Unternehmensarchitektur',
      '/demos/handwerker': 'Handwerker Demo | STRUKTIVA Unternehmensarchitektur',
      '/demos/kosmetikstudio': 'Kosmetikstudio Demo | STRUKTIVA Unternehmensarchitektur',
      '/demos/bewertungsstruktur': 'Bewertungsstruktur Demo | STRUKTIVA Unternehmensarchitektur',
      '/demos/dashboard': 'Dashboard Demo | STRUKTIVA Unternehmensarchitektur',
      '/branchen/friseursalons': 'Digitale Struktur für Friseursalons | STRUKTIVA',
      '/branchen/handwerker': 'Digitale Struktur für Handwerker | STRUKTIVA',
      '/branchen/kosmetikstudios': 'Digitale Struktur für Kosmetikstudios | STRUKTIVA',
      '/branchen/lokale-dienstleister': 'Digitale Struktur für lokale Dienstleister | STRUKTIVA',
      '/branchen/beratung': 'Digitale Struktur für Beratungsbetriebe | STRUKTIVA',
      '/landingpage-digitale-struktur': 'Digitale Struktur fuer kleine Unternehmen - STRUKTIVA Unternehmensarchitektur',
      '/wissen': 'STRUKTIVA Wissen - Digitale Unternehmensstruktur für kleine Unternehmen',
      '/wissen/warum-eine-schoene-website-keine-kunden-bringt': 'Warum eine schöne Website allein keine Kunden bringt - STRUKTIVA Wissen',
      '/wissen/digitale-grundsysteme-kleine-unternehmen': 'Die 5 digitalen Grundsysteme für kleine Unternehmen - STRUKTIVA Wissen',
      '/wissen/website-landingpage-funnel-unterschied': 'Website, Landingpage oder Funnel - STRUKTIVA Wissen',
      '/leistungen': 'Leistungen - STRUKTIVA Unternehmensarchitektur',
      '/impressum': 'Impressum - STRUKTIVA Unternehmensarchitektur',
      '/datenschutz': 'Datenschutz - STRUKTIVA Unternehmensarchitektur',
      '/widerruf': 'Widerruf - STRUKTIVA Unternehmensarchitektur',
      '/kontakt': 'Kontakt - STRUKTIVA Unternehmensarchitektur',
      '/preise': 'Preise - STRUKTIVA Unternehmensarchitektur',
      '/demos': 'Demo-Beispiele für Websites & digitale Strukturen – STRUKTIVA',
    }

    const descriptions = {
      '/bewertungs-qr-code':
        'STRUKTIVA erstellt ein einfaches Google-Bewertungssystem mit QR-Code, Bewertungslink und Anleitung fuer lokale Unternehmen wie Salons, Handwerker, Kosmetikstudios und Dienstleister.',
      '/digitale-ordnungssysteme':
        'STRUKTIVA entwickelt digitale Ordnungssysteme fuer kleine Betriebe - mit Tagesabschluss, Kassenstruktur, Monatsuebersicht, Exportfunktionen und steuerberaterfreundlicher Vorbereitung.',
      '/digitale-soforthilfe':
        'Schnelle digitale Unterstützung für Website-Anpassungen, Landingpages, Google-Texte, Social-Media-Beiträge, WhatsApp- und Bewertungstexte. STRUKTIVA Digitale Soforthilfe ab 99 € inklusive Mehrwertsteuer.',
      '/website-fuer-kleine-unternehmen':
        'Moderne Website-Erstellung fuer kleine Unternehmen und Selbststaendige mit klarer Struktur und professioneller Kundenfuehrung.',
      '/landingpage-erstellen-lassen':
        'Verkaufsstarke Landingpages fuer Angebote, Aktionen und Anfragen - klar aufgebaut und professionell umgesetzt.',
      '/google-sichtbarkeit-kleine-unternehmen':
        'Google-Sichtbarkeit fuer kleine Unternehmen mit klarer Struktur, lokaler Auffindbarkeit und professioneller Praesenz.',
      '/leistungen':
        'Alle STRUKTIVA Leistungen im Ueberblick: Website, Landingpages, Google-Sichtbarkeit, Kundenfuehrung, Systeme, Dashboards und strukturierte Umsetzung.',
      '/preise':
        'Einstiegspreise fuer kleine Unternehmen: Sichtbarkeit, Kundengewinnung und Unternehmensarchitektur mit transparenter, strukturierter Umsetzung.',
      '/demos':
        'STRUKTIVA zeigt Demo-Beispiele für Handwerk, Beauty und Dienstleister – mit Website, Google-Sichtbarkeit, Kontaktwegen und klarer digitaler Kundenführung.',
      '/demos/friseursalon':
        'Beispielhafte digitale Struktur für Friseursalons mit Website, Google, Bewertungen, WhatsApp-Anfrage und Kundenführung.',
      '/demos/handwerker':
        'Beispielhafte Website-Struktur für Handwerker mit Leistungen, Referenzen, Anfragewegen und regionaler Sichtbarkeit.',
      '/demos/kosmetikstudio':
        'Beispielhafte digitale Struktur für Kosmetikstudios mit Behandlungen, Preisen, Bewertungen und Termin-Anfrage.',
      '/demos/bewertungsstruktur':
        'Beispielhafte Bewertungsstruktur mit QR-Code, Bewertungslink, WhatsApp-Text und Website-Einbindung.',
      '/demos/dashboard':
        'Beispielhaftes Betriebs-Dashboard für kleine Unternehmen mit Aufgaben, Terminen, Tagesübersicht und Kennzahlen.',
      '/branchen/friseursalons':
        'Digitale Struktur für Friseursalons mit Website, Leistungsstruktur, Bewertungen, Google-Profil und WhatsApp-Terminführung.',
      '/branchen/handwerker':
        'Digitale Struktur für Handwerker mit Leistungsseiten, Referenzen, regionaler Sichtbarkeit und klaren Anfragewegen.',
      '/branchen/kosmetikstudios':
        'Digitale Struktur für Kosmetikstudios mit Behandlungen, Preisen, Vertrauen, Bewertungen und Terminführung.',
      '/branchen/lokale-dienstleister':
        'Digitale Struktur für lokale Dienstleister mit professionellem Auftritt, Kontaktwegen und klarer Kundenführung.',
      '/branchen/beratung':
        'Digitale Struktur für Beratungsbetriebe mit Angebotslogik, Vertrauensaufbau und klarer Termin-Anfrageführung.',
      '/wissen':
        'STRUKTIVA Wissen: praxisnahe Artikel zu Website-Struktur, Landingpages, Google-Sichtbarkeit, WhatsApp-Kontaktwegen und digitalen Abläufen für kleine Unternehmen.',
      '/wissen/warum-eine-schoene-website-keine-kunden-bringt':
        'Warum Design allein nicht reicht und wie kleine Unternehmen mit klarer digitaler Struktur mehr qualifizierte Anfragen erhalten.',
      '/wissen/digitale-grundsysteme-kleine-unternehmen':
        'Die 5 digitalen Grundsysteme, die kleine Unternehmen für Sichtbarkeit, Vertrauen und verlässliche Kundenanfragen wirklich brauchen.',
      '/wissen/website-landingpage-funnel-unterschied':
        'Website, Landingpage oder Funnel: welche Struktur kleine Unternehmen wirklich brauchen, um online klar und anfragebereit aufzutreten.',
    }

    const defaultDescription =
      'STRUKTIVA entwickelt Webseiten, Google-Sichtbarkeit, Kontaktwege, Apps, Dashboards und digitale Strukturen für kleine Unternehmen, Selbstständige und lokale Dienstleister.'

    document.title = titles[pathname] || titles['/']

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[pathname] || defaultDescription)
    }

    const canonicalHref = `https://struktiva-unternehmensarchitektur.vercel.app${pathname === '/' ? '/' : pathname}`
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonicalHref)

    const upsertMeta = (selector, createEl) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = createEl()
        document.head.appendChild(el)
      }
      return el
    }

    const setMeta = (attribute, value, content) => {
      const meta = upsertMeta(`meta[${attribute}="${value}"]`, () => {
        const el = document.createElement('meta')
        el.setAttribute(attribute, value)
        return el
      })
      meta.setAttribute('content', content)
    }

    const activeTitle = titles[pathname] || titles['/']
    const activeDescription = descriptions[pathname] || defaultDescription
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:title', activeTitle)
    setMeta('property', 'og:description', activeDescription)
    setMeta('property', 'og:url', canonicalHref)
    setMeta('property', 'og:image', 'https://struktiva-unternehmensarchitektur.vercel.app/struktiva-logo.jpeg')
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', activeTitle)
    setMeta('name', 'twitter:description', activeDescription)
    setMeta('name', 'twitter:image', 'https://struktiva-unternehmensarchitektur.vercel.app/struktiva-logo.jpeg')
    setMeta('name', 'robots', 'index, follow')
  }, [pathname])
}

function Reveal({ children, className = '', delay = 0 }) {

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={fadeUp}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function FloatingWhatsAppButton() {
  return (
    <a
      href={contactDetails.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="STRUKTIVA per WhatsApp Business kontaktieren"
      title="Per WhatsApp Business kontaktieren"
      className="floating-whatsapp-button"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M20.52 3.48A11.82 11.82 0 0 0 12.06 0C5.54 0 .24 5.3.24 11.82c0 2.08.54 4.1 1.56 5.9L0 24l6.45-1.7a11.74 11.74 0 0 0 5.61 1.43h.01c6.52 0 11.82-5.3 11.82-11.82 0-3.15-1.23-6.11-3.37-8.43Zm-8.46 18.26h-.01a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.83 1.01 1.03-3.74-.23-.39a9.81 9.81 0 0 1-1.5-5.23c0-5.42 4.41-9.83 9.84-9.83 2.62 0 5.08 1.02 6.93 2.88a9.74 9.74 0 0 1 2.89 6.95c0 5.42-4.41 9.83-9.83 9.83Zm5.39-7.39c-.29-.14-1.72-.85-1.98-.95-.27-.1-.46-.14-.66.14-.19.29-.76.95-.93 1.14-.17.2-.34.22-.63.08-.29-.15-1.21-.45-2.3-1.45-.85-.76-1.42-1.7-1.59-1.99-.17-.29-.02-.45.13-.6.13-.12.29-.31.43-.46.14-.14.19-.24.29-.41.1-.17.05-.31-.02-.46-.08-.14-.66-1.58-.9-2.17-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.51.08-.78.36-.27.29-1.03 1.01-1.03 2.47 0 1.46 1.05 2.88 1.2 3.08.14.2 2.05 3.13 4.96 4.39.69.3 1.22.48 1.64.61.69.22 1.32.19 1.81.11.55-.08 1.72-.7 1.96-1.39.24-.69.24-1.29.17-1.4-.07-.11-.26-.17-.55-.31Z"
        />
      </svg>
    </a>
  )
}

function SectionHeader({ eyebrow, title, text, centered = true }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/80">{eyebrow}</p>
      <h2 className="text-gold-glow mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.9rem] lg:leading-[1.08]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[#D7DCE5] md:text-lg">{text}</p>
    </div>
  )
}

function Header({ pathname }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false)
  const [desktopDemoDropdownOpen, setDesktopDemoDropdownOpen] = useState(false)
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false)
  const [mobileDemosOpen, setMobileDemosOpen] = useState(false)
  const menuPanelRef = useRef(null)
  const desktopDropdownRef = useRef(null)
  const desktopDemoDropdownRef = useRef(null)

  const closeMobileMenu = () => {
    setMenuOpen(false)
    setMobileLeistungenOpen(false)
    setMobileDemosOpen(false)
    document.body.classList.remove('menu-open', 'open', 'active', 'is-open', 'mobile-menu-open')
    document.body.style.overflow = ''
  }

  const closeDesktopDropdown = () => setDesktopDropdownOpen(false)
  const closeDesktopDemoDropdown = () => setDesktopDemoDropdownOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    closeMobileMenu()
    closeDesktopDropdown()
    closeDesktopDemoDropdown()
  }, [pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open', 'mobile-menu-open')
      document.body.style.overflow = 'hidden'
      return
    }
    document.body.classList.remove('menu-open', 'mobile-menu-open')
    document.body.style.overflow = ''
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMobileMenu()
        closeDesktopDropdown()
        closeDesktopDemoDropdown()
      }
    }

    const onPointerDownOutside = (event) => {
      if (!menuOpen) return
      if (menuPanelRef.current && !menuPanelRef.current.contains(event.target)) {
        closeMobileMenu()
      }
    }

    const onResize = () => {
      if (window.innerWidth >= 1024) {
        closeMobileMenu()
      }
      if (window.innerWidth < 1024) {
        closeDesktopDropdown()
        closeDesktopDemoDropdown()
      }
    }

    const onClickOutsideDesktopDropdown = (event) => {
      if (
        desktopDropdownOpen &&
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target)
      ) {
        closeDesktopDropdown()
      }
      if (
        desktopDemoDropdownOpen &&
        desktopDemoDropdownRef.current &&
        !desktopDemoDropdownRef.current.contains(event.target)
      ) {
        closeDesktopDemoDropdown()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onPointerDownOutside)
    document.addEventListener('touchstart', onPointerDownOutside, { passive: true })
    document.addEventListener('mousedown', onClickOutsideDesktopDropdown)
    window.addEventListener('resize', onResize)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onPointerDownOutside)
      document.removeEventListener('touchstart', onPointerDownOutside)
      document.removeEventListener('mousedown', onClickOutsideDesktopDropdown)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen, desktopDropdownOpen, desktopDemoDropdownOpen])

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 px-4 pt-3 lg:px-6 ${
        scrolled ? 'backdrop-blur-xl' : ''
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1240px] items-center justify-between rounded-full border px-4 py-2.5 transition md:px-5 lg:py-3 ${
          scrolled
            ? 'border-[#D8B45A]/25 bg-white/[0.05] shadow-[0_20px_70px_rgba(8,12,24,0.35)]'
            : 'border-white/12 bg-white/[0.05]'
        }`}
      >
        <a href={siteLinks.home} className="flex min-w-0 max-w-[320px] items-center gap-3 xl:max-w-[380px]">
          <img
            src="/struktiva-logo.jpeg"
            alt="STRUKTIVA Unternehmensarchitektur Logo"
            className="h-8 w-8 rounded-full object-contain md:h-10 md:w-10"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white lg:text-[14px] xl:text-[15px]">{brand.name}</p>
            <p className="truncate text-[10px] uppercase tracking-[0.24em] text-[#94A3B8] lg:text-[11px]">{brand.descriptor}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-4 xl:gap-6 lg:flex">
          <a href={siteLinks.home} className="whitespace-nowrap text-sm font-medium text-[#D7DCE5] transition hover:text-[#D8B45A]">
            Start
          </a>

          <div
            ref={desktopDropdownRef}
            className="relative"
            onMouseEnter={() => setDesktopDropdownOpen(true)}
            onMouseLeave={closeDesktopDropdown}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={desktopDropdownOpen}
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-[#D7DCE5] transition hover:text-[#D8B45A]"
              onClick={() => setDesktopDropdownOpen((open) => !open)}
            >
              Leistungen
              <ChevronDown className={`h-3.5 w-3.5 transition ${desktopDropdownOpen ? 'rotate-180 text-[#D8B45A]' : 'rotate-0'}`} />
            </button>

            <AnimatePresence>
              {desktopDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-1/2 top-[calc(100%+12px)] z-50 w-[360px] max-w-[92vw] -translate-x-1/2 overflow-hidden rounded-2xl border border-[#D8B45A]/30 bg-[#07111F]/96 p-2.5 shadow-[0_20px_45px_rgba(3,8,16,0.55)] backdrop-blur-xl"
                >
                  <div className="mb-2 h-px w-full bg-gradient-to-r from-transparent via-[#D8B45A]/55 to-transparent" />
                  <div className="grid gap-1">
                    {leistungenDropdownItems.map(([label, href]) => (
                      <a
                        key={label}
                        href={href}
                        role="menuitem"
                        onClick={closeDesktopDropdown}
                        className="rounded-xl px-3 py-2.5 text-sm font-medium text-[#D7DCE5] transition hover:bg-white/[0.06] hover:text-[#D8B45A]"
                      >
                        {label}
                      </a>
                    ))}
                    <a
                      href={siteLinks.leistungenPage}
                      role="menuitem"
                      onClick={closeDesktopDropdown}
                      className="mt-1 rounded-xl border border-[#D8B45A]/28 bg-white/[0.03] px-3 py-2.5 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white"
                    >
                      Alle Leistungen ansehen
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            ref={desktopDemoDropdownRef}
            className="relative"
            onMouseEnter={() => setDesktopDemoDropdownOpen(true)}
            onMouseLeave={closeDesktopDemoDropdown}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={desktopDemoDropdownOpen}
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-[#D7DCE5] transition hover:text-[#D8B45A]"
              onClick={() => setDesktopDemoDropdownOpen((open) => !open)}
            >
              Demos
              <ChevronDown className={`h-3.5 w-3.5 transition ${desktopDemoDropdownOpen ? 'rotate-180 text-[#D8B45A]' : 'rotate-0'}`} />
            </button>

            <AnimatePresence>
              {desktopDemoDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-1/2 top-[calc(100%+12px)] z-50 w-[460px] max-w-[94vw] -translate-x-1/2 overflow-hidden rounded-2xl border border-[#D8B45A]/30 bg-[#07111F]/96 p-3 shadow-[0_20px_45px_rgba(3,8,16,0.55)] backdrop-blur-xl"
                >
                  <div className="mb-2 h-px w-full bg-gradient-to-r from-transparent via-[#D8B45A]/55 to-transparent" />
                  <div className="grid gap-2">
                    {demoDropdownItems.map(([label, text, href, Icon]) => (
                      <a
                        key={label}
                        href={href}
                        role="menuitem"
                        onClick={closeDesktopDemoDropdown}
                        className="group rounded-xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-[#D8B45A]/35 hover:bg-white/[0.06]"
                      >
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#D8B45A]/30 bg-[#D8B45A]/10 text-[#D8B45A]">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-white group-hover:text-[#F2D98B]">{label}</p>
                            <p className="mt-1 text-xs leading-6 text-[#D7DCE5]">{text}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {desktopNavItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="whitespace-nowrap text-sm font-medium text-[#D7DCE5] transition hover:text-[#D8B45A]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={siteLinks.contact}
            className="inline-flex h-11 items-center gap-1.5 whitespace-nowrap rounded-full bg-[#D8B45A] px-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(17,24,39,0.14)] transition hover:bg-[#C9A247] hover:-translate-y-0.5"
          >
            Ersteinschätzung
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-controls="mobile-menu-panel"
          aria-expanded={menuOpen}
          onClick={() => {
            if (menuOpen) {
              closeMobileMenu()
              return
            }
            setMenuOpen(true)
          }}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/14 bg-white/[0.05] text-white lg:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu-panel"
            ref={menuPanelRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-50 mx-auto mt-3 max-w-7xl rounded-[1.8rem] border border-white/14 bg-[#07111F]/90 p-4 shadow-premium backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-2">
              <a
                href={siteLinks.home}
                onClick={closeMobileMenu}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[#D7DCE5] transition hover:bg-white/[0.08] hover:text-[#D8B45A]"
              >
                Start
              </a>
              <button
                type="button"
                aria-expanded={mobileLeistungenOpen}
                onClick={() => setMobileLeistungenOpen((open) => !open)}
                className="inline-flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-[#D7DCE5] transition hover:bg-white/[0.08] hover:text-[#D8B45A]"
              >
                Leistungen
                <ChevronDown className={`h-4 w-4 transition ${mobileLeistungenOpen ? 'rotate-180 text-[#D8B45A]' : 'rotate-0'}`} />
              </button>
              <AnimatePresence>
                {mobileLeistungenOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="rounded-2xl border border-white/12 bg-white/[0.03] p-2"
                  >
                    <div className="grid gap-1">
                      {leistungenDropdownItems.map(([label, href]) => (
                        <a
                          key={label}
                          href={href}
                          onClick={closeMobileMenu}
                          className="rounded-lg px-2.5 py-2 text-sm text-[#D7DCE5] transition hover:bg-white/[0.06] hover:text-[#D8B45A]"
                        >
                          {label}
                        </a>
                      ))}
                      <a
                        href={siteLinks.leistungenPage}
                        onClick={closeMobileMenu}
                        className="mt-1 rounded-lg border border-[#D8B45A]/28 bg-white/[0.03] px-2.5 py-2 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white"
                      >
                        Alle Leistungen ansehen
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                type="button"
                aria-expanded={mobileDemosOpen}
                onClick={() => setMobileDemosOpen((open) => !open)}
                className="inline-flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-[#D7DCE5] transition hover:bg-white/[0.08] hover:text-[#D8B45A]"
              >
                Demos
                <ChevronDown className={`h-4 w-4 transition ${mobileDemosOpen ? 'rotate-180 text-[#D8B45A]' : 'rotate-0'}`} />
              </button>
              <AnimatePresence>
                {mobileDemosOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="rounded-2xl border border-white/12 bg-white/[0.03] p-2"
                  >
                    <div className="grid gap-1">
                      {demoDropdownItems.map(([label, text, href, Icon]) => (
                        <a
                          key={label}
                          href={href}
                          onClick={closeMobileMenu}
                          className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-2.5 text-sm text-[#D7DCE5] transition hover:bg-white/[0.06] hover:text-[#D8B45A]"
                        >
                          <span className="inline-flex items-center gap-2 font-semibold"><Icon className="h-3.5 w-3.5" />{label}</span>
                          <span className="mt-1 block text-xs leading-6 text-[#94A3B8]">{text}</span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {desktopNavItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMobileMenu}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[#D7DCE5] transition hover:bg-white/[0.08] hover:text-[#D8B45A]"
                >
                  {label}
                </a>
              ))}
              <a
                href={siteLinks.contact}
                onClick={closeMobileMenu}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]"
              >
                  Kostenlose Ersteinschätzung anfragen
                  <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function HeroSection() {
  return (
    <section id="start" className="relative scroll-mt-24 overflow-hidden px-5 pb-12 pt-7 lg:px-8 lg:pb-16 lg:pt-9">
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-[40rem]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col items-start"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/20 bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span className="text-gold-glow-soft text-gold-glow-animated">{brand.name}</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="text-gold-glow mt-5 max-w-[34rem] text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.08] xl:text-[58px]"
            >
              Mehr Kunden. Mehr Struktur. Mehr digitale Wirkung.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-[35rem] text-[15px] leading-7 text-[#D7DCE5] md:text-base"
            >
              STRUKTIVA verbindet Website, Landingpage, Google-Sichtbarkeit, WhatsApp-Kontaktwege, Social Media und digitale Systeme zu einer klaren Struktur – damit Kunden schneller verstehen, was du anbietest und leichter Kontakt aufnehmen.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 inline-flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#D7DCE5]"
            >
              {brand.line.split('. ').filter(Boolean).map((item) => (
                <span key={item} className="rounded-full border border-white/14 bg-white/[0.05] px-2.5 py-1">{item.replace('.', '')}</span>
              ))}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex flex-col gap-2.5 sm:flex-row"
            >
              <a
                href={siteLinks.contact}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(17,24,39,0.16)] transition hover:bg-[#A9822D] hover:-translate-y-0.5"
              >
                  Kostenlose Ersteinschätzung anfragen
                  <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={siteLinks.pricing}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/25 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#D8B45A]/30 hover:text-[#D8B45A]"
              >
                Angebote ansehen
              </a>
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 max-w-[36rem] text-sm leading-7 text-[#D7DCE5]"
            >
              Keine klassische Webagentur. Sondern digitale Unternehmensarchitektur für Betriebe, die sichtbar, professionell und verkaufsfähig auftreten wollen.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeRight}
          transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[25rem] lg:max-w-[26.5rem]"
        >
            <div className="hero-architecture-card hero-3d-shell rounded-[1.55rem] border border-[#D8B45A]/25 bg-white/[0.05] p-3 shadow-[0_12px_30px_rgba(15,36,76,0.10)] backdrop-blur-xl">
            <div className="hero-3d-plane relative overflow-hidden rounded-[1.25rem] border border-[#D8B45A]/25 bg-[linear-gradient(180deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88))] p-4 md:p-4.5">
              <div className="hero-architecture-grid" />
              <div className="hero-architecture-line hero-architecture-line-1" />
              <div className="hero-architecture-line hero-architecture-line-2" />
              <div className="hero-architecture-line hero-architecture-line-3" />
              <div className="hero-architecture-node hero-architecture-node-1" />
              <div className="hero-architecture-node hero-architecture-node-2" />
              <div className="hero-architecture-node hero-architecture-node-3" />
              <div className="hero-architecture-node hero-architecture-node-4" />

              <div className="relative z-[1]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D8B45A]/82">Digitale Architektur</p>
                <h2 className="mt-2 text-xl font-semibold text-white">Webseiten. Apps. Werbung. Struktur.</h2>

                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  {['Webseite', 'Landingpage', 'App-System', 'Google Ads'].map((item) => (
                    <div key={item} className="hero-floating-chip rounded-xl border border-white/14 bg-white/[0.06] px-3 py-2 text-center text-[12px] font-medium text-white">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-[1rem] border border-[#D8B45A]/18 bg-white/[0.06] p-3.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D8B45A]/82">Ergebnis</p>
                  <p className="mt-1.5 text-[13px] leading-6 text-[#D7DCE5]">
                    Ein klarer digitaler Aufbau für Sichtbarkeit, Anfragen und bessere Abläufe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TrustSection() {
  return (
    <section className="px-5 py-6 lg:px-8 lg:py-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={stagger}
        className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        {trustCards.map(([Icon, title, text]) => (
          <motion.div
            key={title}
            variants={fadeUp}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[1.6rem] border border-white/14 bg-white/[0.05] p-5 shadow-premium transition hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D8B45A]/12 text-[#D8B45A]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

function ProblemSection() {
  return (
    <section className="px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Ausgangslage"
            title="Viele kleine Unternehmen verlieren Kunden, bevor sie überhaupt Kontakt aufnehmen."
            text="Viele Betriebe haben gute Leistungen, aber keinen klaren digitalen Auftritt. Die Webseite wirkt veraltet, Google-Bewertungen werden nicht aktiv genutzt, WhatsApp ist nicht sauber eingebunden, Social Media wirkt unregelmäßig und potenzielle Kunden wissen nicht sofort, warum sie genau hier anfragen sollen."
            centered={false}
          />
        </Reveal>

        <Reveal className="mt-8">
          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/14 shadow-premium">
            <img
              src={struktivaImages.workspace}
              alt="Unstrukturierte digitale Planung mit Laptop und Notizen"
              loading="lazy"
              decoding="async"
              className="h-48 w-full object-cover md:h-56"
            />
            <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(7,17,31,0.82),rgba(7,17,31,0.5),rgba(5,10,18,0.88))]" />
            <p className="absolute bottom-4 left-4 max-w-2xl rounded-xl border border-white/14 bg-white/[0.06] px-3 py-2 text-xs text-[#D7DCE5] md:text-sm">
              Digitale Sichtbarkeit scheitert selten an Leistung, sondern oft an fehlender Struktur.
            </p>
          </div>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
          className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {problemCards.map(([title, text]) => (
            <motion.div
              key={title}
              variants={fadeUp}
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[1.7rem] border border-white/14 bg-white/[0.04] p-5 shadow-premium"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D8B45A]/78">Problem</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-8">
          <p className="max-w-3xl text-base leading-8 text-[#D7DCE5]">
            STRUKTIVA verbindet Webseite, Landingpage, Google, WhatsApp, Social Media und Angebotsstruktur zu einem klaren System. Ziel ist nicht einfach nur ein schöner Auftritt, sondern ein digitaler Weg, der Vertrauen aufbaut und mehr qualifizierte Anfragen erzeugt.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#D7DCE5]">
            Auf Wunsch kann auch ein Newsletter-System eingebunden werden, um Interessenten und Bestandskunden professionell zu informieren und langfristig an das Unternehmen zu binden.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function WebsiteFocusSection() {
  return (
    <section id="webseiten" className="scroll-mt-28 px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.4rem] border border-white/14 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-6 shadow-premium md:p-8 lg:p-10">
        <Reveal>
          <SectionHeader
            eyebrow="Webseiten & Landingpages"
            title="Professionelle Webseiten & Landingpages mit klarer Wirkung."
            text="Eine professionelle Webseite erklärt schnell, was ein Unternehmen anbietet, warum es vertrauenswürdig ist und wie Kunden Kontakt aufnehmen können. STRUKTIVA entwickelt hochwertige Webseiten, Landingpages und Angebotsseiten mit klarer Struktur, professionellen Texten und sauberer Kundenführung."
            centered={false}
          />
        </Reveal>
        <Reveal className="mt-6">
          <p className="max-w-3xl rounded-[1.3rem] border border-white/14 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-[#D7DCE5]">
            Eine Landingpage ist eine einzelne Angebotsseite, die ein bestimmtes Produkt, eine Dienstleistung oder Aktion klar erklärt und Besucher gezielt zur Anfrage führt.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
          className="mt-10 grid gap-5 md:grid-cols-3"
        >
          {websiteFocusCards.map(([title, text]) => (
            <motion.div
              key={title}
              variants={fadeUp}
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[1.6rem] border border-white/14 bg-white/[0.05] p-5 transition hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B45A]/78">Fokus</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-8">
          <a
            href={siteLinks.contact}
            className="inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(17,24,39,0.16)] transition hover:bg-[#A9822D] hover:-translate-y-0.5"
          >
            Webseite oder Landingpage anfragen
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

function AppsSection() {
  return (
    <section id="app-loesungen" className="scroll-mt-28 px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Unternehmens-Apps"
            title="Professionelle Unternehmens-Apps für bessere Abläufe."
            text="Individuelle App-Systeme für Kundenverwaltung, Termine, Aufgaben, Checklisten und interne Prozesse – klar aufgebaut, alltagstauglich und passend zum Unternehmen."
            centered={false}
          />
        </Reveal>

        <Reveal className="mt-6">
          <div className="max-w-3xl rounded-[1.4rem] border border-white/14 bg-white/[0.04] p-4 text-sm leading-7 text-[#D7DCE5]">
            <p className="font-semibold text-white">Nicht sicher, ob eine eigene App sinnvoll ist?</p>
            <p className="mt-2">Starte mit einer kostenlosen App-Ersteinschätzung. Dabei wird geprüft, ob eine App für deine Abläufe wirklich Nutzen bringt oder ob eine einfachere digitale Lösung ausreicht.</p>
          </div>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
          className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {appModules.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-white/14 bg-white/[0.05] px-4 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-9">
            <div className="app-preview-3d mx-auto max-w-3xl rounded-[2rem] border border-white/14 bg-white/[0.05] p-4 shadow-premium backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-[#D8B45A]/20 bg-white/[0.05] p-4 md:p-5">
              <div className="mb-4">
                <p className="text-sm font-medium text-[#D7DCE5]">So kann eine STRUKTIVA App-Lösung aussehen</p>
                <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">
                  Individuelle App-Systeme können Kunden, Termine, Aufgaben, Checklisten und interne Abläufe übersichtlich an einem Ort bündeln.
                </p>
              </div>
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[#D7DCE5]">App-Beispiel für Unternehmen</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">STRUKTIVA Business App</h3>
                </div>
                <div className="rounded-full bg-[#D8B45A]/12 px-3 py-1 text-xs font-semibold text-[#D8B45A]">Vorschau</div>
              </div>
              <div className="grid gap-2.5">
                {[
                  ['Kundenverwaltung', 'übersichtlich'],
                  ['Terminübersicht', 'strukturiert'],
                  ['Aufgabensteuerung', 'klar'],
                  ['Bewertungsprozess', 'integriert'],
                ].map(([label, state]) => (
                  <div key={label} className="app-layer flex items-center justify-between gap-3 rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-2.5">
                    <div className="flex items-center gap-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#D8B45A] shadow-[0_0_16px_rgba(216,180,90,0.22)]" />
                      <span className="text-sm font-medium text-white">{label}</span>
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#94A3B8]">{state}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-[1.2rem] border border-white/14 bg-white/[0.06] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B45A]/82">Ergebnis</p>
                <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">
                  Ein digitaler Ort für Kunden, Termine, Aufgaben und interne Abläufe.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <a
            href={siteLinks.contact}
            className="inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/28 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-[#D8B45A] transition hover:-translate-y-0.5 hover:bg-[#D8B45A] hover:text-white"
          >
            Kostenlose App-Ersteinschätzung anfragen
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

function GoogleAdsSection() {
  return (
    <section id="google-ads" className="scroll-mt-28 px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Google Ads"
            title="Google Ads für gezielte Kundenanfragen."
            text="Google Ads können sinnvoll sein, wenn ein Unternehmen gezielt Menschen erreichen möchte, die bereits nach einer Leistung suchen. STRUKTIVA unterstützt bei Struktur, Anzeigentexten, Angebotsausrichtung und passenden Landingpages."
            centered={false}
          />
        </Reveal>

        <Reveal className="mt-6">
          <div className="max-w-4xl rounded-[1.5rem] border border-white/14 bg-white/[0.04] p-5 text-sm leading-7 text-[#D7DCE5] md:text-base">
            Je nach Unternehmen kann zusätzlich auch Social-Media-Werbung sinnvoll sein – zum Beispiel für lokale Aktionen, Angebote, neue Leistungen oder mehr regionale Sichtbarkeit. STRUKTIVA kann dabei helfen, Kampagnenideen, Anzeigentexte und passende Landingpages dafür vorzubereiten.
          </div>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
          className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {googleAdsCards.map(([title, text]) => (
            <motion.div
              key={title}
              variants={fadeUp}
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[1.7rem] border border-white/14 bg-white/[0.05] p-5 shadow-premium transition hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B45A]/78">Google Ads</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-8">
          <div className="flex flex-col gap-5 rounded-[1.8rem] border border-white/14 bg-white/[0.04] p-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl text-sm leading-7 text-[#D7DCE5]">
              Das Werbebudget wird separat direkt bei Google oder der jeweiligen Werbeplattform eingesetzt und ist nicht im STRUKTIVA-Preis enthalten.
            </p>
            <a
              href={siteLinks.contact}
              className="inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(17,24,39,0.16)] transition hover:bg-[#A9822D] hover:-translate-y-0.5"
            >
              Google Ads anfragen
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function DemoOverviewSectionPremium() {
  return (
    <section id="demos" className="scroll-mt-28 px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Live-Demos"
            title="So könnte dein digitaler Auftritt aussehen"
            text="Wähle eine Beispielbranche und sieh dir an, wie STRUKTIVA digitale Struktur, klare Angebote, Kontaktwege und Kundengewinnung für kleine Unternehmen sichtbar macht."
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {demoCards.map((demo) => {
            const Icon = demo.icon
            const previewImage =
              demo.title === 'Demo Handwerker'
                ? struktivaImages.handwerker
                : demo.title === 'Demo Beauty & Kosmetik'
                ? struktivaImages.beauty
                : struktivaImages.dienstleister
            return (
              <motion.a
                key={demo.title}
                href={demo.href}
                variants={fadeUp}
                transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-[1.9rem] border border-white/14 bg-white/[0.05] shadow-premium transition hover:-translate-y-1 hover:border-[#D8B45A]/30"
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={previewImage} alt={`${demo.title} Vorschau`} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D8B45A]/12 text-[#D8B45A]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#D8B45A]/82">Demo / Beispielansicht</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{demo.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">{demo.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D8B45A]">
                    Demo ansehen
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
        <Reveal className="mt-6">
          <a
            href={siteLinks.landingpageDigitaleStruktur}
            className="inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/25 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white"
          >
            Digitale Struktur ansehen
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

function PricingCard({ pkg }) {
  const packageImage =
    pkg.title === 'Sichtbarkeit'
      ? struktivaImages.localBusiness
      : pkg.title === 'Kundengewinnung'
      ? struktivaImages.consulting
      : pkg.title === 'Unternehmensarchitektur'
      ? struktivaImages.digitalDashboard
      : null

  return (
      <motion.article
        variants={fadeUp}
        transition={{ duration: 0.54, ease: [0.22, 1, 0.36, 1] }}
        className={`pricing-card-3d relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-5 shadow-premium transition hover:-translate-y-1 md:p-6 ${
          pkg.premium
            ? 'border-[#D8B45A]/35 bg-[linear-gradient(165deg,rgba(216,180,90,0.12),rgba(11,31,58,0.88),rgba(5,10,18,0.95))]'
            : pkg.strong
            ? 'border-[#D8B45A]/25 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))]'
            : 'border-white/14 bg-white/[0.05]'
      }`}
    >
      {packageImage && (
        <>
          <img src={packageImage} alt={`${pkg.title} visuelle Vorschau`} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-18" />
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(7,17,31,0.82),rgba(7,17,31,0.7),rgba(5,10,18,0.84))]" />
        </>
      )}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D8B45A]/35 to-transparent" />
      <div className="relative z-[1]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/14 bg-white/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D7DCE5]">
              Einstiegspreis
            </span>
            {pkg.badge && (
              <span
                className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                  pkg.premium
                    ? 'border border-[#D8B45A]/28 bg-[#D8B45A]/12 text-[#D8B45A]'
                    : 'border border-white/14 bg-white/[0.04] text-[#D7DCE5]'
                }`}
              >
                {pkg.badge}
              </span>
            )}
          </div>
          <h3 className="max-w-[22rem] text-2xl font-semibold text-white">{pkg.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">{pkg.description}</p>
        </div>
        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#D8B45A]/12 text-[#D8B45A] sm:flex">
          {pkg.premium ? <ShieldCheck className="h-5 w-5" /> : <BadgeCheck className="h-5 w-5" />}
        </div>
      </div>

      <div className="mt-6 rounded-[1.4rem] border border-white/14 bg-white/[0.04] p-4">
        <p className="text-3xl font-semibold tracking-tight text-[#D8B45A]">{pkg.price}</p>
        {pkg.subtitle && <p className="mt-2 text-sm font-medium text-[#D7DCE5]">{pkg.subtitle}</p>}
      </div>

      {pkg.tiers ? (
        <div className="mt-6 grid gap-4 xl:grid-cols-3">
          {pkg.tiers.map((tier) => (
            <div key={tier.title} className="rounded-[1.4rem] border border-white/14 bg-white/[0.04] p-4">
              <div className="border-b border-white/12 pb-3">
                <p className="text-lg font-semibold text-white">{tier.title}</p>
                <p className="mt-1 text-sm font-medium text-[#D8B45A]">{tier.price}</p>
                <p className="mt-2 text-sm leading-6 text-[#D7DCE5]">{tier.description}</p>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm leading-6 text-[#D7DCE5]">
                {tier.features.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#D8B45A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className={`mt-6 grid gap-4 ${pkg.extras ? 'xl:grid-cols-[1fr_0.94fr]' : ''}`}>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">Enthalten</p>
            <ul className="space-y-2.5 text-sm leading-6 text-[#D7DCE5]">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#D8B45A]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {pkg.extras && (
            <div className="rounded-[1.4rem] border border-white/14 bg-white/[0.04] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">{pkg.extraTitle}</p>
              <ul className="mt-4 space-y-2.5 text-sm leading-6 text-[#D7DCE5]">
                {pkg.extras.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#D8B45A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {pkg.callout && (
        <div className="mt-6 rounded-[1.3rem] border border-[#D8B45A]/20 bg-white/[0.06] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B45A]/82">{pkg.callout}</p>
          <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">{pkg.calloutText}</p>
        </div>
      )}

      <div className={`mt-6 rounded-[1.3rem] border p-4 text-sm leading-7 ${
        pkg.premium ? 'border-[#D8B45A]/18 bg-white/[0.04] text-[#D7DCE5]' : 'border-white/14 bg-white/[0.04] text-[#D7DCE5]'
      }`}>
        {pkg.note}
      </div>

      <a
        href={siteLinks.contact}
        className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
          pkg.premium
            ? 'bg-[#D8B45A] text-white shadow-[0_14px_34px_rgba(17,24,39,0.16)] hover:bg-[#A9822D] hover:-translate-y-0.5'
            : 'border border-[#D8B45A]/30 text-[#D8B45A] hover:-translate-y-0.5 hover:bg-[#D8B45A] hover:text-white'
        }`}
      >
        {pkg.cta}
        <ArrowRight className="h-4 w-4" />
      </a>
      </div>
    </motion.article>
  )
}

function PricingSection() {
  return (
    <section id="preise" className="scroll-mt-28 px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Angebote & Preise"
            title="Systemangebote für mehr Sichtbarkeit, Anfragen und digitale Struktur."
            text="Keine isolierten Einzelmaßnahmen, sondern klar aufgebaute Leistungspakete für Betriebe, die online professioneller auftreten und ihre Kundengewinnung systematisch aufbauen wollen."
          />
        </Reveal>

        <Reveal className="mt-8">
            <div className="overflow-hidden rounded-[1.8rem] border border-[#D8B45A]/20 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] shadow-premium md:p-0">
              <div className="grid gap-0 md:grid-cols-[0.92fr_1.08fr]">
                <div className="relative min-h-[180px]">
                  <img src={struktivaImages.consulting} alt="Strategisches Beratungsgespräch im Unternehmenskontext" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(7,17,31,0.78),rgba(7,17,31,0.52),rgba(5,10,18,0.86))]" />
                </div>
                <div className="p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/80">Faire Kennenlernpreise zum Start</p>
              <h3 className="mt-3 text-2xl font-semibold text-white md:text-[1.75rem]">Professioneller Einstieg mit klarer Struktur statt Agentur-Standard</h3>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-[#D7DCE5] md:text-base">
                STRUKTIVA positioniert sich bewusst als digitaler Systemanbieter für kleine Unternehmen. Die Umsetzung verbindet Präsenz, Kundenführung und Kontaktwege in einer Struktur, die im Alltag funktioniert und verkaufsfähig bleibt.
              </p>
                </div>
              </div>
            </div>
          </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={stagger}
          className="mt-12 grid gap-6 xl:grid-cols-6"
        >
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.title}
              className={
                pkg.premium || pkg.title === 'Monatliche Betreuung'
                  ? 'xl:col-span-6'
                  : pkg.strong
                    ? 'xl:col-span-3'
                    : 'xl:col-span-2'
              }
            >
              <PricingCard pkg={pkg} />
            </div>
          ))}
        </motion.div>

        <Reveal className="mt-8">
          <div className="rounded-[1.8rem] border border-[#D8B45A]/20 bg-white/[0.05] p-6 shadow-premium md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/80">Newsletter-Einbindung</p>
            <h3 className="mt-3 text-2xl font-semibold text-white md:text-[1.65rem]">Newsletter-Einbindung</h3>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-[#D7DCE5] md:text-base">
              Für Unternehmen, die Interessenten und Bestandskunden regelmäßig professionell informieren möchten, kann STRUKTIVA ein passendes Newsletter-System in die bestehende Website- oder Landingpage-Struktur einbinden.
            </p>
            <div className="mt-5 grid gap-2 text-sm text-[#D7DCE5] md:grid-cols-2">
              {[
                'Newsletter-Anmeldeformular einbinden',
                'Newsletter-System verbinden',
                'erste Grundstruktur vorbereiten',
                'Kontaktliste sauber aufbauen',
                'Verbindung mit Website oder Landingpage herstellen',
                'DSGVO-bewusste Einbindung vorbereiten',
              ].map((item) => (
                <div key={item} className="rounded-xl border border-white/12 bg-white/[0.04] px-3.5 py-2.5">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-5 text-lg font-semibold text-[#D8B45A]">ab 99 € inklusive Mehrwertsteuer</p>
          </div>
        </Reveal>

          <Reveal className="mt-8">
            <div className="rounded-[1.6rem] border border-white/14 bg-white/[0.05] p-6 text-center text-sm leading-7 text-[#D7DCE5]">
              <p>Aktuelle Einstiegspreise für kleine Unternehmen und Selbstständige.</p>
              <p className="mt-2">Alle Preise verstehen sich inklusive gesetzlicher Mehrwertsteuer. Der finale Preis richtet sich nach Umfang, Seitenanzahl, Funktionen, Textaufwand, Bildern und gewünschter technischer Umsetzung.</p>
              <p className="mt-2">Individuelle digitale Systeme werden nach Umfang, Betrieb und benötigten Funktionen kalkuliert.</p>
              <a
                href={siteLinks.landingpageDigitaleStruktur}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/25 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white"
              >
                Digitale Struktur ansehen
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section id="ablauf" className="scroll-mt-28 px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Ablauf"
            title="So läuft die Zusammenarbeit ab"
            text="Klar, verständlich und auf den Betrieb abgestimmt – von der Ersteinschätzung bis zur laufenden Optimierung."
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
          className="mt-12 grid gap-5 lg:grid-cols-5"
        >
          {processSteps.map(([step, title, text]) => (
            <motion.div
              key={step}
              variants={fadeUp}
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[1.7rem] border border-white/14 bg-white/[0.05] p-5 shadow-premium"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D8B45A]/12 text-lg font-semibold text-[#D8B45A]">
                {step}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TargetSection() {
  return (
    <section id="fuer-wen" className="scroll-mt-28 px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.4rem] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(11,17,32,0.9))] p-6 shadow-premium md:p-8 lg:p-10">
        <Reveal>
          <SectionHeader
            eyebrow="Für wen"
            title="Für kleine Unternehmen, die digital professioneller auftreten wollen."
            text="STRUKTIVA richtet sich an kleine und mittlere Unternehmen, Selbstständige und lokale Betriebe, die mehr Anfragen, mehr Ordnung und eine professionelle Online-Präsenz brauchen."
            centered={false}
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
          className="mt-10 flex flex-wrap gap-3"
        >
          {targetGroups.map((group) => (
            <motion.div
              key={group}
              variants={fadeUp}
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-full border border-white/14 bg-white/[0.05] px-4 py-2.5 text-sm font-medium text-white"
            >
              {group}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function WhySection() {
  return (
    <section className="px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <Reveal>
          <SectionHeader
            eyebrow="Was STRUKTIVA anders macht"
            title="Nicht nur Design. Sondern Struktur."
            text="STRUKTIVA verbindet Website, Landingpage, WhatsApp, Google, Social Media und Newsletter zu einem digitalen System, das im Alltag wirklich nutzbar ist."
            centered={false}
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid gap-4"
        >
          {whyPoints.map((point) => (
            <motion.div
              key={point}
              variants={fadeUp}
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 rounded-[1.6rem] border border-white/14 bg-white/[0.05] px-5 py-4 shadow-premium"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D8B45A]/12 text-[#D8B45A]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <span className="text-base font-medium text-white">{point}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function QualitySection() {
  return (
    <section className="px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-[#D8B45A]/22 bg-[linear-gradient(165deg,rgba(7,17,31,0.9),rgba(11,31,58,0.86),rgba(5,10,18,0.95))] p-6 shadow-premium md:p-8 lg:p-10">
        <Reveal>
          <SectionHeader
            eyebrow="Unser Anspruch"
            title="Digitale Lösungen, die klar, professionell und im Alltag nutzbar sind."
            text="Unser Anspruch ist es, digitale Lösungen zu entwickeln, die klar verständlich, professionell gestaltet und im Alltag nutzbar sind. Ob Webseite, Landingpage, App-System oder Google Ads: Entscheidend ist, dass die Lösung zum Unternehmen passt und sauber umgesetzt wird."
            centered={false}
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="mt-10 grid gap-5 md:grid-cols-3"
        >
          {qualityPoints.map(([title, text]) => (
            <motion.div
              key={title}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[1.6rem] border border-white/14 bg-white/[0.05] p-5 shadow-premium transition hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F2D98B]/78">Anspruch</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function OrdnungssystemeSection() {
  return (
    <section id="ordnungssysteme" className="scroll-mt-28 px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.3rem] border border-[#D8B45A]/22 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-6 shadow-premium md:p-8 lg:p-10">
        <Reveal>
          <SectionHeader
            eyebrow="Neues Angebot"
            title="Digitale Ordnungssysteme für steuerberaterfreundliche Abläufe"
            text="Kassenstruktur, Tagesabschluss und Monatsübersicht – klar erfasst, digital gespeichert und für den Steuerberater vorbereitet."
            centered={false}
          />
        </Reveal>

        <Reveal className="mt-6">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[1.5rem] border border-white/14 bg-white/[0.05] p-5">
              <p className="text-sm leading-8 text-[#D7DCE5] md:text-base">
                Viele kleine Betriebe verlieren Zeit durch Zettel, Excel-Listen, unklare Ablagen und Rückfragen vom Steuerberater.
              </p>
              <p className="mt-3 text-sm leading-8 text-[#D7DCE5] md:text-base">
                STRUKTIVA entwickelt einfache digitale Erfassungssysteme, mit denen betriebliche Werte strukturiert dokumentiert, gespeichert und übersichtlich bereitgestellt werden können.
              </p>
              <p className="mt-3 text-sm leading-8 text-[#D7DCE5] md:text-base">
                Ob Tagesabschluss digital, Kassenkontrolle, Beleg-Hinweise, Monatsübersicht oder Export für Steuerberater – wir bauen ein System, das zu Ihrem betrieblichen Ablauf passt.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {ordnungssystemVorteile.map((item) => (
                <div key={item} className="rounded-2xl border border-white/14 bg-white/[0.05] px-4 py-3 text-sm font-medium text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
          className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {ordnungssystemModule.map(([title, text]) => (
            <motion.article
              key={title}
              variants={fadeUp}
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[1.45rem] border border-white/14 bg-white/[0.05] p-5 shadow-premium transition hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B45A]/80">System</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">{text}</p>
            </motion.article>
          ))}
        </motion.div>

        <Reveal className="mt-10">
          <div className="rounded-[1.7rem] border border-[#D8B45A]/28 bg-white/[0.05] p-6">
            <h3 className="text-2xl font-semibold text-white">Vom Chaos zur klaren Struktur</h3>
            <p className="mt-3 text-sm leading-8 text-[#D7DCE5] md:text-base">
              Ein gutes System ersetzt keine fachliche Beratung – aber es sorgt dafür, dass die richtigen Daten sauber, nachvollziehbar und übersichtlich bereitstehen.
            </p>
            <p className="mt-3 text-sm leading-8 text-[#D7DCE5] md:text-base">
              Genau dafür entwickelt STRUKTIVA digitale Ordnungssysteme: einfach genug für den Alltag, strukturiert genug für den Steuerberater.
            </p>
            <p className="mt-4 text-sm font-medium text-[#D7DCE5]">
              Individuelle digitale Ordnungssysteme werden nach Umfang, Betrieb und benötigten Funktionen kalkuliert.
            </p>
            <p className="mt-4 rounded-2xl border border-white/14 bg-[#050A12]/45 px-4 py-3 text-xs leading-6 text-[#D7DCE5] md:text-sm">
              Hinweis: STRUKTIVA bietet keine Steuerberatung an und ersetzt keinen Steuerberater. Unsere Systeme dienen der strukturierten Erfassung, Ordnung und Vorbereitung betrieblicher Daten. Die steuerliche Bewertung und finale Verwendung erfolgen durch Ihren Steuerberater.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteLinks.contact}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D] hover:-translate-y-0.5"
              >
                System unverbindlich anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={siteLinks.appsPage}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white"
              >
                Beispiel ansehen
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-28 px-5 py-18 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-[#D8B45A]/20 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-6 shadow-[0_14px_34px_rgba(17,24,39,0.16)] md:p-8 lg:p-10">
        <img src={struktivaImages.ctaBackdrop} alt="Moderner Arbeitsplatz als Hintergrund im Kontaktbereich" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(7,17,31,0.88),rgba(11,31,58,0.78),rgba(5,10,18,0.9))]" />
        <div className="relative z-[1]">
        <Reveal>
          <SectionHeader
            eyebrow="Kontakt"
            title="Bereit für einen digitalen Auftritt, der nicht nur gut aussieht, sondern Kunden führt?"
            text="Wenn dein Unternehmen online professioneller wirken, klarer kommunizieren und mehr Anfragen gewinnen soll, ist STRUKTIVA der richtige nächste Schritt."
            centered={false}
          />
        </Reveal>

        <Reveal className="mt-5">
          <p className="max-w-3xl text-sm leading-7 text-[#D7DCE5] md:text-base">
            Du kannst auch anfragen, wenn du Unterstützung bei Google Ads, Social-Media-Werbung oder einer passenden Landingpage für deine Kampagne brauchst.
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-[#D7DCE5] md:text-base">
            Du kannst auch eine kostenlose App-Ersteinschätzung anfragen, wenn du noch nicht sicher bist, ob eine App für dein Unternehmen sinnvoll ist.
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-[#D7DCE5] md:text-base">
            Du hast bereits mit STRUKTIVA gearbeitet? Dann kannst du hier eine Google-Bewertung abgeben.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="rounded-[1.8rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium">
              <div className="grid gap-4 text-sm leading-7 text-[#D7DCE5]">
                <a href={`mailto:${contactDetails.email}`} className="transition hover:text-[#D8B45A]">
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">E-Mail</span>
                  {contactDetails.email}
                </a>
                <a href={contactDetails.phoneHref} className="transition hover:text-[#D8B45A]">
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">Telefon</span>
                  {contactDetails.phoneLabel}
                </a>
                <a href={contactDetails.whatsappHref} className="transition hover:text-[#D8B45A]">
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">WhatsApp Business</span>
                  {contactDetails.whatsappLabel}
                </a>
                <a
                  href={contactDetails.linkedinHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#D8B45A]"
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">LinkedIn</span>
                  LinkedIn-Profil ansehen
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={siteLinks.contact}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(17,24,39,0.16)] transition hover:bg-[#A9822D] hover:-translate-y-0.5"
              >
                Kostenlose Ersteinschätzung anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={contactDetails.whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#D8B45A]/30 hover:text-[#D8B45A]"
              >
                Per WhatsApp Business kontaktieren
              </a>
              <a
                href={contactDetails.googleReviewHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-[#D7DCE5] transition hover:border-[#D8B45A]/30 hover:text-[#D8B45A]"
              >
                Bewertung abgeben
              </a>
              <a
                href={contactDetails.linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-[#D7DCE5] transition hover:border-[#D8B45A]/30 hover:text-[#D8B45A]"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn-Profil ansehen
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-5">
          <p className="text-sm leading-7 text-[#D7DCE5]">
            Vernetzen Sie sich mit STRUKTIVA auf LinkedIn:{' '}
            <a
              href={contactDetails.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#D8B45A] transition hover:text-[#F2D98B]"
            >
              LinkedIn-Profil ansehen
            </a>
          </p>
        </Reveal>
        </div>
      </div>
    </section>
  )
}

const demoV2Images = {
  friseurHero: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1800&q=80',
  friseurA: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
  friseurB: 'https://images.unsplash.com/photo-1596704017254-9f8e0d1a45a3?auto=format&fit=crop&w=1200&q=80',
  friseurC: 'https://images.unsplash.com/photo-1522336284039-91f7e4b6f0f2?auto=format&fit=crop&w=1200&q=80',
  handwerkerHero: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=80',
  handwerkerA: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
  handwerkerB: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  handwerkerC: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1200&q=80',
  kosmetikHero: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1800&q=80',
  kosmetikA: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
  kosmetikB: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=1200&q=80',
  kosmetikC: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
  bewertungHero: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1800&q=80',
  bewertungA: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
  bewertungB: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80',
  dashboardHero: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80',
  dashboardA: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  dashboardB: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
}

function DifferentiatorSection() {
  return (
    <section className="px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-white/14 bg-[linear-gradient(165deg,rgba(7,17,31,0.9),rgba(11,31,58,0.86),rgba(5,10,18,0.95))] p-6 shadow-premium md:p-8 lg:p-10">
        <Reveal>
          <SectionHeader
            eyebrow="Abgrenzung"
            title="Warum STRUKTIVA statt Baukasten oder Standard-Agentur?"
            text="Klare digitale Unternehmensstruktur statt Einzellösungen ohne System."
            centered={false}
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="mt-10 grid gap-5 md:grid-cols-2"
        >
          {differentiatorCards.map(([title, text]) => (
            <motion.article
              key={title}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[1.6rem] border border-white/14 bg-white/[0.05] p-5 shadow-premium transition hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F2D98B]/78">STRUKTIVA Vorteil</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function DemoFormCard({ fields, cta }) {
  return (
    <div className="rounded-[1.8rem] border border-white/14 bg-white/[0.05] p-5 shadow-premium md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D8B45A]/82">Anfragebereich (Demo)</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {fields.map((field) => (
          <div key={field} className={`${field === 'Nachricht' ? 'md:col-span-2' : ''}`}>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-[#94A3B8]">{field}</label>
            {field === 'Nachricht' ? (
              <textarea rows={4} className="w-full rounded-xl border border-white/14 bg-white/[0.04] px-3 py-2.5 text-sm text-white outline-none" />
            ) : (
              <input className="w-full rounded-xl border border-white/14 bg-white/[0.04] px-3 py-2.5 text-sm text-white outline-none" />
            )}
          </div>
        ))}
      </div>
      <button type="button" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
        {cta}
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  )
}

function DemoFinalCTA() {
  return (
    <section className="rounded-[1.9rem] border border-[#D8B45A]/22 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-6 shadow-premium">
      <h2 className="text-2xl font-semibold text-white">So könnte dein Unternehmen digital auftreten.</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-[#D7DCE5] md:text-base">
        Wenn du eine ähnliche Struktur für dein Unternehmen möchtest, erstellt STRUKTIVA einen klaren digitalen Aufbau passend zu deiner Branche, deinem Angebot und deinen Kunden.
      </p>
      <a href={siteLinks.contact} className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
        Kostenlose Ersteinschätzung anfragen
        <ArrowRight className="h-4 w-4" />
      </a>
    </section>
  )
}

function DemoPageTemplate({ demo }) {
  return (
    <main className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rounded-[2.3rem] border border-[#D8B45A]/22 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-7 shadow-premium md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/82">Demo / Beispielansicht</p>
            <p className="mt-3 text-base font-medium text-[#D7DCE5]">{demo.title}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-white md:text-5xl">{demo.hero}</h1>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[#D7DCE5] md:text-lg">{demo.subheadline}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {demo.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/14 bg-white/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#D7DCE5]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={siteLinks.contact} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
                Kostenlose Ersteinschätzung anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={siteLinks.demos} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
                Zur Demo-Übersicht
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6">
          {demo.sections.map((section) => (
            <ServiceSection key={section.title} title={section.title}>
              {section.text && <p>{section.text}</p>}
              {section.points && section.points.map((point) => <p key={point}>- {point}</p>)}
            </ServiceSection>
          ))}

          <DemoFormCard fields={demo.formFields} cta={demo.formCta} />

          <ServiceSection title="Newsletter-Einbindung">
          </ServiceSection>

          <DemoFinalCTA />
        </div>
      </div>
    </main>
  )
}

function DemoHandwerkerPagePremium() {
  return <DemoPageTemplate demo={demoPages.handwerker} />
}

function DemoBeautyPagePremium() {
  return <DemoPageTemplate demo={demoPages.beauty} />
}

function DemoDienstleisterPagePremium() {
  return <DemoPageTemplate demo={demoPages.dienstleister} />
}

function Footer() {
  return (
    <footer className="px-5 pb-24 pt-8 lg:px-8 lg:pb-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.7rem] border border-white/12 bg-[linear-gradient(160deg,rgba(7,17,31,0.95),rgba(11,31,58,0.9),rgba(5,10,18,0.96))] shadow-premium">
        <div className="h-px w-full bg-[linear-gradient(90deg,rgba(216,180,90,0),rgba(216,180,90,0.75),rgba(216,180,90,0))]" />
        <div className="grid gap-8 px-6 py-7 text-sm text-[#D7DCE5] md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <p className="text-base font-semibold text-white">STRUKTIVA Unternehmensarchitektur</p>
            <p className="mt-3">Geführt von Jessica Wacker und Sven Matzke</p>
            <a href={`mailto:${contactDetails.email}`} className="mt-1 block transition hover:text-[#F2D98B]">{contactDetails.email}</a>
            <a href={contactDetails.phoneHref} className="mt-1 block transition hover:text-[#F2D98B]">{contactDetails.phoneLabel}</a>
            <a href={contactDetails.whatsappHref} className="mt-1 block transition hover:text-[#F2D98B]">WhatsApp Business</a>
            <a
              href={contactDetails.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 transition hover:text-[#F2D98B]"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <p className="mt-3 text-xs leading-6 text-[#94A3B8]">Digitale Strukturen für kleine Unternehmen, Selbstständige und lokale Dienstleister.</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D8B45A]">Leistungen</p>
            <div className="mt-3 grid gap-2">
              <a href={siteLinks.webseitenPage} className="transition hover:text-[#F2D98B]">Webseiten</a>
              <a href={siteLinks.landingpagesPage} className="transition hover:text-[#F2D98B]">Landingpages</a>
              <a href={siteLinks.googleSichtbarkeitKleineUnternehmen} className="transition hover:text-[#F2D98B]">Google-Sichtbarkeit</a>
              <a href={siteLinks.unternehmensApps} className="transition hover:text-[#F2D98B]">Unternehmens-Apps</a>
              <a href={siteLinks.digitaleOrdnungssysteme} className="transition hover:text-[#F2D98B]">Digitale Ordnungssysteme</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D8B45A]">Unternehmen</p>
            <div className="mt-3 grid gap-2">
              <a href={siteLinks.leistungenPage} className="transition hover:text-[#F2D98B]">Leistungen</a>
              <a href={siteLinks.pricing} className="transition hover:text-[#F2D98B]">Preise</a>
              <a href={siteLinks.demos} className="transition hover:text-[#F2D98B]">Demos</a>
              <a href={siteLinks.contact} className="transition hover:text-[#F2D98B]">Kontakt</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D8B45A]">Rechtliches & Bewertung</p>
            <div className="mt-3 grid gap-2">
              <a href={siteLinks.impressum} className="transition hover:text-[#F2D98B]">Impressum</a>
              <a href={siteLinks.datenschutz} className="transition hover:text-[#F2D98B]">Datenschutz</a>
              <a href={siteLinks.widerruf} className="transition hover:text-[#F2D98B]">Widerruf</a>
            </div>
            <div className="mt-4 rounded-xl border border-white/12 bg-white/[0.03] px-3.5 py-3">
              <p className="text-sm font-medium text-white">Zufrieden mit STRUKTIVA?</p>
              <a
                href={contactDetails.googleReviewHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-flex items-center gap-2 text-sm font-semibold text-[#F2D98B] transition hover:text-white"
              >
                Google-Bewertung schreiben
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-3.5 text-xs text-[#94A3B8] md:flex md:items-center md:justify-between">
          <p>© 2026 STRUKTIVA Unternehmensarchitektur. Alle Rechte vorbehalten.</p>
          <p className="mt-1 md:mt-0">Digitale Strukturen. Klare Systeme. Mehr Wirkung.</p>
        </div>
      </div>
    </footer>
  )
}

function HeroSectionPremium() {
  return (
    <section id="start" className="relative scroll-mt-24 overflow-hidden px-5 pb-12 pt-8 lg:px-8 lg:pb-18 lg:pt-10">
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-[41rem]">
          <motion.div initial={false} animate="visible" variants={stagger} className="flex flex-col items-start">
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/20 bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
              <Sparkles className="h-3.5 w-3.5" />
              {brand.name}
            </motion.div>
            <motion.h1 variants={fadeUp} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mt-5 max-w-[35rem] text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.05] xl:text-[58px]">
              Digitale Struktur für kleine Unternehmen.
            </motion.h1>
            <motion.p variants={fadeUp} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mt-4 max-w-[36rem] text-[15px] leading-7 text-[#D7DCE5] md:text-[17px] md:leading-8">
              STRUKTIVA verbindet Website, Google-Sichtbarkeit, Kontaktwege und digitale Kundenführung zu einer klaren Unternehmensstruktur.
            </motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <a href={siteLinks.contact} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(17,24,39,0.2)] transition hover:bg-[#A9822D] hover:-translate-y-0.5">
                Digitale Struktur anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={siteLinks.leistungenPage} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/25 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white transition hover:border-[#D8B45A]/30 hover:text-[#D8B45A]">
                Leistungen ansehen
              </a>
            </motion.div>
            <motion.p variants={fadeUp} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mt-3 text-sm text-[#D7DCE5]">
              Kostenlose Ersteinschätzung für Ihr Unternehmen möglich.
            </motion.p>
            <motion.a
              variants={fadeUp}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              href={siteLinks.landingpageDigitaleStruktur}
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#D8B45A] transition hover:text-[#F2D98B]"
            >
              Fokussierte Landingpage ansehen
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.p variants={fadeUp} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mt-4 max-w-[36rem] rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-[#D7DCE5]">
              Für Selbstständige, Handwerker, Friseure, Kosmetikstudios, Beratungsbetriebe und lokale Dienstleister.
            </motion.p>
            <motion.p variants={fadeUp} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mt-4 text-sm leading-7 text-[#D7DCE5]">
              Klare Systeme statt Technik-Chaos. Verständliche Umsetzung für kleine Unternehmen und lokale Dienstleister.
            </motion.p>
          </motion.div>
        </div>
        <motion.div initial="hidden" animate="visible" variants={fadeRight} transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }} className="mx-auto w-full max-w-[25rem] lg:max-w-[26.5rem]">
          <div className="hero-architecture-card hero-3d-shell rounded-[1.55rem] border border-[#D8B45A]/25 bg-white/[0.05] p-3 shadow-[0_12px_30px_rgba(15,36,76,0.10)] backdrop-blur-xl">
            <div className="hero-3d-plane relative overflow-hidden rounded-[1.25rem] border border-[#D8B45A]/25 bg-[linear-gradient(180deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88))] p-4 md:p-4.5">
              <div className="hero-architecture-grid" />
              <div className="hero-architecture-line hero-architecture-line-1" />
              <div className="hero-architecture-line hero-architecture-line-2" />
              <div className="hero-architecture-line hero-architecture-line-3" />
              <div className="hero-architecture-node hero-architecture-node-1" />
              <div className="hero-architecture-node hero-architecture-node-2" />
              <div className="hero-architecture-node hero-architecture-node-3" />
              <div className="hero-architecture-node hero-architecture-node-4" />
              <div className="relative z-[1]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D8B45A]/82">Digitale Architektur</p>
                <h2 className="mt-2 text-xl font-semibold text-white">Webseiten. Apps. Werbung. Struktur.</h2>
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  {['Webseite', 'Landingpage', 'App-System', 'Google Ads'].map((item) => (
                    <div key={item} className="hero-floating-chip rounded-xl border border-white/14 bg-white/[0.06] px-3 py-2 text-center text-[12px] font-medium text-white">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-[1rem] border border-[#D8B45A]/18 bg-white/[0.06] p-3.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D8B45A]/82">Ergebnis</p>
                  <p className="mt-1.5 text-[13px] leading-6 text-[#D7DCE5]">Ein klarer digitaler Aufbau für Sichtbarkeit, Anfragen und bessere Abläufe.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-image-shell mt-4 overflow-hidden rounded-[1.3rem] border border-white/14">
            <img
              src={struktivaImages.businessHero}
              alt="Moderne Business-Architektur mit strukturierter Stadtansicht bei Nacht"
              loading="eager"
              fetchpriority="high"
              className="h-44 w-full object-cover md:h-52"
            />
            <div className="hero-image-overlay">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F2D98B]">Premium-Umfeld</p>
              <p className="mt-1 text-sm text-[#D7DCE5]">Digitale Struktur, die professionell wirkt und klar führt.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ServicesSectionPremium() {
  return (
    <section id="leistungen" className="scroll-mt-28 px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Leistungen"
            title="Leistungen"
            text="Digitale Strukturen für kleine Unternehmen, Selbstständige und lokale Dienstleister."
          />
        </Reveal>
        <Reveal className="mt-8">
          <div className="service-image-spotlight grid items-center gap-5 rounded-[1.8rem] border border-white/14 bg-white/[0.04] p-4 md:grid-cols-[0.96fr_1.04fr] md:p-5">
              <img
                src={struktivaImages.structurePlanning}
                alt="Strategie- und Strukturplanung auf einem modernen Arbeitstisch"
                loading="lazy"
                decoding="async"
                className="h-44 w-full rounded-[1.1rem] object-cover md:h-52"
              />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D8B45A]/82">Struktur sichtbar machen</p>
              <p className="mt-2 text-sm leading-7 text-[#D7DCE5] md:text-base">
                Ein professioneller Auftritt entsteht, wenn Angebote, Kontaktwege und Kundengewinnung als System gedacht werden – klar, verständlich und alltagstauglich.
              </p>
            </div>
          </div>
        </Reveal>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} variants={stagger} className="mt-12 grid gap-5 lg:grid-cols-2">
          {coreServices.map((service) => {
            const Icon = service.icon
            const isSoforthilfeCard = service.title === 'Digitale Soforthilfe'
            return (
            <motion.div
              key={service.title}
              id={isSoforthilfeCard ? 'digitale-soforthilfe' : undefined}
              variants={fadeUp}
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className={`service-card-3d group scroll-mt-28 rounded-[2rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium transition hover:-translate-y-1 hover:border-[#D8B45A]/35 md:p-7 ${isSoforthilfeCard ? 'cursor-pointer' : ''}`}
              onClick={isSoforthilfeCard ? () => { window.location.href = service.href } : undefined}
              onKeyDown={
                isSoforthilfeCard
                  ? (event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        window.location.href = service.href
                      }
                    }
                  : undefined
              }
              role={isSoforthilfeCard ? 'link' : undefined}
              tabIndex={isSoforthilfeCard ? 0 : undefined}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D8B45A]/12 text-[#D8B45A]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  {service.subtitle ? <p className="mt-2 text-sm font-medium text-[#F2D98B]">{service.subtitle}</p> : null}
                  <p className="mt-3 text-sm leading-7 text-[#D7DCE5] md:text-base">{service.description}</p>
                  <p className="mt-4 text-sm font-semibold text-[#D8B45A]">{service.price}</p>
                  {service.ctaLabel ? (
                    <a
                      href={service.href}
                      className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/40 px-4 py-2 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white"
                    >
                      {service.ctaLabel}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </a>
                  ) : (
                    <a href={service.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#D8B45A]">
                      Mehr erfahren
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )})}
        </motion.div>

      </div>
    </section>
  )
}

const wissenArticles = [
  {
    slug: 'warum-eine-schoene-website-keine-kunden-bringt',
    href: siteLinks.wissenWebsiteAllein,
    title: 'Warum eine schöne Website allein keine Kunden bringt',
    description:
      'Viele kleine Unternehmen investieren in Design, aber nicht in Kundenführung. Dieser Beitrag zeigt, warum Struktur wichtiger ist als reine Optik.',
    sections: [
      {
        heading: 'Eine schöne Website ist kein Verkaufssystem',
        text:
          'Design schafft einen ersten Eindruck. Anfragen entstehen aber erst dann, wenn Besucher sofort erkennen, was du anbietest, für wen dein Angebot gedacht ist und wie der nächste Schritt aussieht.',
      },
      {
        heading: 'Was in der Praxis oft fehlt',
        bullets: [
          'klare Leistungsstruktur statt allgemeiner Floskeln',
          'sichtbare Kontaktwege auf jeder wichtigen Seite',
          'eine starke Verbindung zwischen Google-Profil und Website',
          'klare Call-to-Actions mit konkretem Nutzen',
        ],
      },
      {
        heading: 'STRUKTIVA denkt in Systemen',
        text:
          'Website, Landingpage, WhatsApp-Kontaktwege, Angebotsstruktur und Google-Sichtbarkeit werden als zusammenhängender Ablauf aufgebaut. So wird aus Sichtbarkeit ein klarer Weg zur Anfrage.',
      },
    ],
  },
  {
    slug: 'digitale-grundsysteme-kleine-unternehmen',
    href: siteLinks.wissenGrundsysteme,
    title: 'Die 5 digitalen Grundsysteme für kleine Unternehmen',
    description:
      'Diese fünf Grundlagen sorgen dafür, dass kleine Unternehmen online klar auftreten, Vertrauen aufbauen und dauerhaft anfragebereit sind.',
    sections: [
      {
        heading: '1. Website-Grundsystem',
        text:
          'Die Website erklärt Leistungen klar, zeigt Kompetenz und führt Besucher direkt zur Kontaktaufnahme.',
      },
      {
        heading: '2. Google-Sichtbarkeitssystem',
        text:
          'Google-Unternehmensprofil, Bewertungsstruktur und Standortsignale schaffen lokale Auffindbarkeit und Vertrauen.',
      },
      {
        heading: '3. Kontakt- und WhatsApp-System',
        text:
          'E-Mail, Telefon und WhatsApp werden so platziert, dass Kunden den schnellsten Kontaktweg sofort erkennen.',
      },
      {
        heading: '4. Angebots- und Landingpage-System',
        text:
          'Leistungen werden in klaren Angebotsseiten strukturiert. Aktionen und Schwerpunkte laufen über fokussierte Landingpages.',
      },
      {
        heading: '5. Bewertungs- und Vertrauenssystem',
        text:
          'Bewertungsprozesse, Referenzlogik und konsistente Darstellung erhöhen die Abschlusswahrscheinlichkeit spürbar.',
      },
    ],
  },
  {
    slug: 'website-landingpage-funnel-unterschied',
    href: siteLinks.wissenWebsiteLandingpageFunnel,
    title: 'Website, Landingpage oder Funnel – was braucht dein Unternehmen wirklich?',
    description:
      'Nicht jedes Unternehmen braucht sofort einen komplexen Funnel. Dieser Beitrag zeigt, wann Website, Landingpage oder Funnel sinnvoll sind.',
    sections: [
      {
        heading: 'Website',
        text:
          'Die Website ist dein digitaler Hauptstandort. Sie gibt Orientierung, erklärt Leistungen und stärkt Vertrauen.',
      },
      {
        heading: 'Landingpage',
        text:
          'Eine Landingpage ist ideal für ein konkretes Angebot oder eine Kampagne. Sie führt Besucher mit einem klaren Fokus zur Anfrage.',
      },
      {
        heading: 'Funnel',
        text:
          'Ein Funnel ist nur dann sinnvoll, wenn mehrere Schritte und Zielgruppen sauber strukturiert geführt werden sollen.',
      },
      {
        heading: 'Was kleine Unternehmen in der Regel brauchen',
        bullets: [
          'eine professionelle Website als Basis',
          'ein bis zwei starke Landingpages für Kernangebote',
          'eine klare Kontaktlogik über WhatsApp, Telefon und Formular',
          'Google-Sichtbarkeit als dauerhafte Grundlage',
        ],
      },
    ],
  },
]

function WissenSection() {
  return (
    <section id="wissen" className="scroll-mt-28 px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="STRUKTIVA Wissen"
            title="STRUKTIVA Wissen"
            text="Praxisnahe Beiträge für kleine Unternehmen, Selbstständige und lokale Betriebe, die ihren digitalen Auftritt klarer und wirksamer strukturieren möchten."
            centered={false}
          />
        </Reveal>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {wissenArticles.map((article) => (
            <motion.a
              key={article.slug}
              href={article.href}
              variants={fadeUp}
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-[1.7rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium transition hover:-translate-y-1 hover:border-[#D8B45A]/35"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D8B45A]/85">Wissen</p>
              <h3 className="mt-3 text-xl font-semibold leading-8 text-white">{article.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">{article.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D8B45A]">
                Artikel lesen
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </motion.a>
          ))}
        </motion.div>
        <div className="mt-7">
          <a
            href={siteLinks.wissen}
            className="inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white"
          >
            Zum Wissensbereich
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function WissenOverviewPage() {
  return (
    <main className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-[2.1rem] border border-white/14 bg-[linear-gradient(160deg,rgba(7,17,31,0.94),rgba(11,31,58,0.9),rgba(5,10,18,0.96))] p-7 shadow-premium md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/82">STRUKTIVA Wissen</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Wissen für digitale Unternehmensstruktur
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[#D7DCE5] md:text-lg">
            STRUKTIVA zeigt, wie kleine Unternehmen, Selbstständige und lokale Betriebe digitale Systeme sinnvoll aufbauen: mit Website, Landingpages, Google-Sichtbarkeit, klaren Kontaktwegen und sauberen Abläufen.
          </p>
        </section>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {wissenArticles.map((article) => (
            <a
              key={article.slug}
              href={article.href}
              className="group rounded-[1.7rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium transition hover:-translate-y-1 hover:border-[#D8B45A]/35"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D8B45A]/85">Artikel</p>
              <h2 className="mt-3 text-xl font-semibold leading-8 text-white">{article.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">{article.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D8B45A]">
                Artikel lesen
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}

function WissenArticlePage({ article }) {
  if (!article) return null
  return (
    <main className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <article className="mx-auto max-w-4xl">
        <header className="rounded-[2rem] border border-white/14 bg-[linear-gradient(160deg,rgba(7,17,31,0.94),rgba(11,31,58,0.9),rgba(5,10,18,0.96))] p-7 shadow-premium md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/82">STRUKTIVA Wissen</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">{article.title}</h1>
          <p className="mt-4 text-base leading-8 text-[#D7DCE5] md:text-lg">{article.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={siteLinks.wissen} className="inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">Zurück zu Wissen</a>
            <a href={siteLinks.home} className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#D8B45A]/30 hover:text-[#D8B45A]">Zur Startseite</a>
          </div>
        </header>

        <div className="mt-8 space-y-5">
          {article.sections.map((section) => (
            <section key={section.heading} className="rounded-[1.4rem] border border-white/12 bg-white/[0.04] p-6 shadow-premium">
              <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
              {section.text ? <p className="mt-3 text-sm leading-8 text-[#D7DCE5] md:text-base">{section.text}</p> : null}
              {section.bullets ? (
                <div className="mt-3 grid gap-2.5 text-sm leading-7 text-[#D7DCE5]">
                  {section.bullets.map((bullet) => (
                    <p key={bullet}>- {bullet}</p>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-[1.6rem] border border-[#D8B45A]/25 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.86),rgba(5,10,18,0.94))] p-6 shadow-premium">
          <p className="text-base leading-8 text-[#D7DCE5]">
            Wenn deine Website nicht nur gut aussehen, sondern für dein Unternehmen arbeiten soll, dann ist STRUKTIVA der richtige nächste Schritt.
          </p>
          <a
            href={siteLinks.contact}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]"
          >
            Digitale Struktur prüfen lassen
            <ArrowRight className="h-4 w-4" />
          </a>
        </section>
      </article>
    </main>
  )
}

function WhatStruktivaBuildsSection() {
  const cards = [
    [LayoutTemplate, 'Professionelle Webseiten', 'Moderne Website-Strukturen, die Leistungen klar zeigen und Vertrauen aufbauen.'],
    [Target, 'Landingpages', 'Gezielte Seiten für Angebote, Aktionen und klare Anfrageführung.'],
    [Search, 'Google-Sichtbarkeit', 'Bessere Auffindbarkeit durch klare lokale Struktur und saubere Inhalte.'],
    [Building2, 'Google-Unternehmensprofil', 'Professionelle Profilstruktur für mehr Vertrauen und lokale Sichtbarkeit.'],
    [MousePointerClick, 'Digitale Kundenführung', 'Kontaktwege, CTAs und Seitenlogik auf Anfragen ausgerichtet.'],
    [MessageCircle, 'WhatsApp-Kontaktstruktur', 'Direkte Kontaktwege über Website, Google und Angebotsseiten.'],
    [QrCode, 'QR-Code- & Bewertungsstrukturen', 'Einfache Bewertungswege für mehr Sichtbarkeit und Vertrauen.'],
    [Smartphone, 'Unternehmens-Apps', 'Digitale Werkzeuge für wiederkehrende Abläufe im Betrieb.'],
    [PanelsTopLeft, 'Betriebs-Dashboards', 'Übersichten für Aufgaben, Kennzahlen und tägliche Steuerung.'],
    [ClipboardList, 'Digitale Ordnungssysteme', 'Strukturierte Prozesse statt digitalem Chaos.'],
    [CalendarDays, 'Tagesabschluss-Systeme', 'Saubere Erfassung täglicher Werte und klarer Ablauf.'],
    [BarChart3, 'Kassenstruktur-Systeme', 'Transparente Kassenübersicht für den Arbeitsalltag.'],
    [BadgeCheck, 'Newsletter-Einbindung', 'Professionelle Kundenbindung über klar integrierte Newsletter-Struktur.'],
    [Megaphone, 'Social-Media- & Pinterest-Struktur', 'Planbare Inhalte statt unregelmäßiger Einzelposts.'],
  ]

  return (
    <section id="leistungen" className="scroll-mt-28 px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Leistungen"
            title="Was wir für Ihr Unternehmen aufbauen"
            text="STRUKTIVA entwickelt keine losen Einzellösungen. Wir verbinden die wichtigsten digitalen Bausteine Ihres Unternehmens zu einer klaren, professionellen und verständlichen Struktur."
          />
        </Reveal>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} variants={stagger} className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map(([Icon, title, text]) => (
            <motion.article key={title} variants={fadeUp} transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }} className="rounded-[1.5rem] border border-white/14 bg-white/[0.05] p-5 shadow-premium">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D8B45A]/12 text-[#D8B45A]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SuitableForSection() {
  const cards = [
    ['Handwerker', 'Leistungen, Kontaktwege und Google-Sichtbarkeit werden klar auf Projektanfragen ausgerichtet.'],
    ['Friseursalons', 'Website, Google-Profil, Bewertungen, WhatsApp-Anfragen und digitale Kundenführung klar verbunden.'],
    ['Kosmetikstudios', 'Elegante Darstellung, klare Terminwege und professionelle Vertrauenselemente.'],
    ['Lokale Dienstleister', 'Angebotsstruktur und Kontaktführung für schnelle und verständliche Anfragen.'],
    ['Selbstständige', 'Professioneller Außenauftritt mit klaren Angeboten und sauberer Positionierung.'],
    ['Beratungsbetriebe', 'Seriöse Struktur mit klaren Leistungsseiten und nachvollziehbarer Anfrageführung.'],
    ['Kleine Unternehmen', 'Website, Google, Kontaktwege und Kundenführung sinnvoll verbunden als Gesamtsystem.'],
  ]

  return (
    <section className="px-5 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-white/14 bg-[linear-gradient(165deg,rgba(7,17,31,0.9),rgba(11,31,58,0.86),rgba(5,10,18,0.95))] p-6 shadow-premium md:p-8 lg:p-10">
        <Reveal>
          <SectionHeader
            eyebrow="Zielgruppen"
            title="Für wen STRUKTIVA entwickelt wurde"
            text="Bezahlbare digitale Struktur für kleine Unternehmen, die professioneller auftreten und mehr Anfragen gewinnen möchten."
            centered={false}
          />
        </Reveal>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} variants={stagger} className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map(([title, text]) => (
            <motion.article key={title} variants={fadeUp} transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }} className="rounded-[1.5rem] border border-white/14 bg-white/[0.05] p-5 shadow-premium">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ThreeStructureFieldsSection() {
  const cards = [
    {
      title: 'Digitale Außenstruktur',
      text: 'Für einen professionellen ersten Eindruck und bessere Sichtbarkeit.',
      points: ['Website', 'Landingpage', 'Google-Sichtbarkeit', 'Google-Unternehmensprofil', 'Bewertungsstruktur', 'Social-Media- und Pinterest-Struktur'],
    },
    {
      title: 'Digitale Kundenführung',
      text: 'Damit Interessenten leichter verstehen, anfragen und Kontakt aufnehmen können.',
      points: ['WhatsApp-Kontaktstruktur', 'Anfragewege', 'Kontaktbuttons', 'Bewertungslinks', 'QR-Code-Strukturen', 'Newsletter-Einbindung'],
    },
    {
      title: 'Digitale Innenstruktur',
      text: 'Für mehr Ordnung, Übersicht und klare Abläufe im Unternehmen.',
      points: ['Unternehmens-Apps', 'Betriebs-Dashboards', 'digitale Ordnungssysteme', 'Tagesabschluss-Systeme', 'kassennahe Struktur', 'Tagesübersicht'],
    },
  ]

  return (
    <section className="px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Strukturfelder"
          title="Die drei Strukturfelder von STRUKTIVA"
          text="STRUKTIVA betrachtet Ihr Unternehmen nicht nur als Website-Projekt. Wir verbinden Außenauftritt, Kontaktwege und interne Abläufe zu einer klaren digitalen Struktur."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="rounded-[1.7rem] border border-[#D8B45A]/24 bg-[linear-gradient(160deg,rgba(7,17,31,0.9),rgba(11,31,58,0.86),rgba(5,10,18,0.95))] p-6 shadow-premium">
              <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">{card.text}</p>
              <div className="mt-4 space-y-2 text-sm text-[#D7DCE5]">
                {card.points.map((point) => <p key={point}>- {point}</p>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyStructureSection() {
  const before = ['einzelne digitale Baustellen', 'unklare Kontaktwege', 'wenig Vertrauen', 'keine Bewertungsführung', 'keine klare Kundenführung', 'digitale Unordnung im Alltag']
  const after = ['klare Website-Struktur', 'bessere Auffindbarkeit', 'professionelle Kontaktwege', 'Bewertungs- und QR-Code-Struktur', 'mehr Vertrauen', 'digitale Ordnung im Unternehmen']
  return (
    <section className="px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Warum Struktur"
            title="Warum eine normale Website allein nicht reicht"
            text="Eine Website allein ist noch keine digitale Struktur. Erst wenn Website, Google-Sichtbarkeit, Kontaktwege, Bewertungen und Kundenführung sinnvoll verbunden sind, entsteht ein professioneller digitaler Auftritt."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[1.7rem] border border-white/14 bg-white/[0.04] p-6 shadow-premium">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">Vorher</p>
            <div className="mt-4 space-y-2 text-sm text-[#D7DCE5]">{before.map((item) => <p key={item}>- {item}</p>)}</div>
          </div>
          <div className="rounded-[1.7rem] border border-[#D8B45A]/26 bg-white/[0.05] p-6 shadow-premium">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B45A]/85">Nachher</p>
            <div className="mt-4 space-y-2 text-sm text-[#D7DCE5]">{after.map((item) => <p key={item}>- {item}</p>)}</div>
          </div>
        </div>
        <a href={siteLinks.contact} className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/35 px-5 py-2.5 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
          Digitale Struktur prüfen lassen
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

function ModulesSection() {
  const modules = [
    {
      title: 'Professionelle Webseiten',
      what: 'Der digitale Hauptstandort Ihres Unternehmens.',
      forWho: 'Geeignet für kleine Unternehmen, Selbstständige und lokale Betriebe.',
      solves: 'Leistungen klar erklären, Vertrauen aufbauen und Anfragen erleichtern.',
      includes: 'Klare Seitenstruktur, Kontaktbereiche, mobile Optimierung und Vertrauenselemente.',
      price: 'ab 599 € inklusive Mehrwertsteuer',
    },
    {
      title: 'Landingpages',
      what: 'Gezielte Einzelseiten für ein konkretes Angebot oder eine Aktion.',
      forWho: 'Geeignet für Kampagnen, Dienstleistungen und Angebotsseiten.',
      solves: 'Besucher schneller zur Anfrage führen.',
      includes: 'Klare Headline-Struktur, Angebotslogik, CTA-Führung und Kontaktweg.',
      price: 'ab 299 € inklusive Mehrwertsteuer',
    },
    {
      title: 'Google-Unternehmensprofil-Struktur',
      what: 'Strukturierter Aufbau der wichtigsten lokalen Google-Bausteine.',
      forWho: 'Geeignet für alle lokal arbeitenden Unternehmen.',
      solves: 'Schwache lokale Präsenz und unklare Auffindbarkeit.',
      includes: 'Leistungsbereiche, Beschreibung, Kontaktwege, Bildstruktur und Profilklarheit.',
      price: 'ab 299 € inklusive Mehrwertsteuer',
    },
    {
      title: 'Bewertungs- und QR-Code-System',
      what: 'Ein klarer Prozess für mehr und bessere Kundenbewertungen.',
      forWho: 'Geeignet für Betriebe mit direktem Kundenkontakt.',
      solves: 'Zu wenige Bewertungen trotz zufriedener Kunden.',
      includes: 'Bewertungslink, QR-Code, Bewertungskarte und Anfrage-Texte.',
      price: 'ab 149 € inklusive Mehrwertsteuer',
    },
    {
      title: 'WhatsApp-Kontaktstruktur',
      what: 'Ein professioneller Anfrageweg über WhatsApp.',
      forWho: 'Geeignet für Betriebe mit schnellen Kontaktanfragen.',
      solves: 'Unklare oder unstrukturierte Kundenanfragen.',
      includes: 'Direkte Buttons, vorbereitete Nachrichten und klare Anfrageführung.',
      price: 'ab 199 € inklusive Mehrwertsteuer',
    },
    {
      title: 'Unternehmens-App / Web-App',
      what: 'Digitaler Arbeitsbereich für wiederkehrende Abläufe.',
      forWho: 'Geeignet für Betriebe mit internen Prozessen und Tagesaufgaben.',
      solves: 'Verteilte Informationen und unklare Arbeitsabläufe.',
      includes: 'Termin-App, Kundenverwaltungs-App, Mitarbeiter-App, Aufgaben-App, Tagesabschluss-App.',
      price: 'ab 999 € inklusive Mehrwertsteuer',
    },
    {
      title: 'Betriebs-Dashboard',
      what: 'Übersicht aller wichtigen Betriebsinformationen an einem Ort.',
      forWho: 'Geeignet für Unternehmen mit mehreren Aufgabenbereichen.',
      solves: 'Fehlende Übersicht bei Terminen, Aufgaben und offenen Punkten.',
      includes: 'Tagesübersicht, Aufgaben, Kennzahlen, Monatsinfos und Notizbereiche.',
      price: 'ab 799 € inklusive Mehrwertsteuer',
    },
    {
      title: 'Digitale Ordnungssysteme',
      what: 'Strukturierte digitale Ordnung für wiederkehrende Betriebsabläufe.',
      forWho: 'Geeignet für Teams und Selbstständige mit vielen parallelen Aufgaben.',
      solves: 'Digitale Unordnung in Ablage, Prozessen und Zuständigkeiten.',
      includes: 'Vorlagen, Checklisten, Ablagestruktur, Kundenprozesse und interne Standards.',
      price: 'ab 899 € inklusive Mehrwertsteuer',
    },
    {
      title: 'Tagesabschluss-Systeme',
      what: 'Struktur für Tagesübersicht und interne Kontrolle.',
      forWho: 'Geeignet für Betriebe mit täglichem Abschlussbedarf.',
      solves: 'Fehlende Nachvollziehbarkeit im Tagesablauf.',
      includes: 'Tagesübersicht, offene Punkte, Kontrolllogik und Übergaben.',
      price: 'ab 499 € inklusive Mehrwertsteuer',
    },
    {
      title: 'Kassennahe Struktur und Tagesübersicht',
      what: 'Digitale Struktur rund um interne Übersicht und Tageskontrolle.',
      forWho: 'Geeignet für Betriebe mit bargeldnahen Abläufen.',
      solves: 'Unklare Tagesdaten und fehlende Übersicht.',
      includes: 'Keine Kassensoftware. Keine rechtliche Zertifizierung. Sondern Struktur für interne Abläufe.',
      price: 'auf Anfrage',
    },
    {
      title: 'Newsletter-Grundstruktur',
      what: 'Einfacher Einstieg in professionelle Kundenkommunikation.',
      forWho: 'Geeignet für Unternehmen mit wiederkehrenden Angeboten.',
      solves: 'Fehlende Kundenbindung nach der ersten Anfrage.',
      includes: 'Anmeldeeinbindung, Listenstruktur und Versandgrundlage.',
      price: 'ab 249 € inklusive Mehrwertsteuer',
    },
    {
      title: 'Social-Media- und Pinterest-Grundstruktur',
      what: 'Klare Content-Struktur statt zufälliger Einzelbeiträge.',
      forWho: 'Geeignet für Betriebe, die regelmäßig sichtbar sein wollen.',
      solves: 'Unregelmäßige Inhalte ohne Bezug zur Website oder Angebotslogik.',
      includes: 'Profilstruktur, Beitragsideen, Pin-/Post-Planung, Beschreibungstexte und Verlinkung.',
      price: 'ab 249 € inklusive Mehrwertsteuer',
    },
  ]

  return (
    <section className="px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Einzelmodule"
          title="Digitale Strukturbausteine"
          text="Sie können mit einem Paket starten oder einzelne Strukturbausteine gezielt ergänzen."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module, index) => {
            const includeItems = module.includes.split(',').map((item) => item.trim()).filter(Boolean)
            return (
              <article
                key={module.title}
                className={`rounded-[1.5rem] border p-5 shadow-premium transition hover:-translate-y-1 ${
                  index % 3 === 0
                    ? 'border-[#D8B45A]/25 bg-[linear-gradient(155deg,rgba(7,17,31,0.9),rgba(11,31,58,0.82))]'
                    : index % 3 === 1
                      ? 'border-white/14 bg-white/[0.05]'
                      : 'border-white/14 bg-[linear-gradient(155deg,rgba(5,10,18,0.9),rgba(15,23,42,0.86))]'
                }`}
              >
                <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">{module.what}</p>
                <p className="mt-3 text-xs leading-6 text-[#B6C2D8]"><span className="font-semibold text-white">Geeignet für:</span> {module.forWho.replace('Geeignet für ', '')}</p>
                <p className="mt-2 text-xs leading-6 text-[#B6C2D8]"><span className="font-semibold text-white">Löst:</span> {module.solves}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {includeItems.slice(0, 5).map((item) => (
                    <span key={item} className="rounded-full border border-[#D8B45A]/24 bg-white/[0.03] px-2.5 py-1 text-[11px] text-[#DCC78D]">{item}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <p className="text-sm font-semibold text-[#D8B45A]">{module.price}</p>
                  <a href={siteLinks.contact} className="inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/35 px-3.5 py-1.5 text-xs font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
                    Angebot anfragen
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function BranchenSection() {
  const items = [
    ['Friseursalons', 'Viele Salons haben eine veraltete Website, wenig Bewertungen und keine klare Terminführung.', 'STRUKTIVA verbindet Salon-Website, Leistungsstruktur, Google-Profil, Bewertungen und WhatsApp-Anfrageweg.', 'Lösung für Friseursalons ansehen', siteLinks.brancheFriseursalons, demoV2Images.friseurA, 'from-[#120f0d]/85 via-[#1f1a15]/68 to-[#100c09]/92'],
    ['Handwerker', 'Leistungen, Einsatzgebiet und Referenzen sind online oft nicht klar genug sichtbar.', 'STRUKTIVA baut Leistungsseiten, Referenzstruktur, Anfragewege und regionale Google-Grundlage.', 'Lösung für Handwerker ansehen', siteLinks.brancheHandwerker, demoV2Images.handwerkerA, 'from-[#0b1220]/88 via-[#111827]/72 to-[#090f1b]/94'],
    ['Kosmetikstudios', 'Behandlungen, Preise, Vertrauen und Terminwege sind oft unübersichtlich dargestellt.', 'STRUKTIVA strukturiert Behandlungen, Preise, Bewertungen, Bilder und Termin-Anfrage.', 'Lösung für Kosmetikstudios ansehen', siteLinks.brancheKosmetikstudios, demoV2Images.kosmetikA, 'from-[#352626]/75 via-[#5c4740]/45 to-[#2f2422]/80'],
    ['Lokale Dienstleister', 'Kein klarer Auftritt und schwache Kontaktführung kosten Vertrauen und Anfragen.', 'STRUKTIVA schafft eine professionelle Struktur mit klarer Positionierung und direkter Kundenführung.', 'Lösung für lokale Dienstleister ansehen', siteLinks.brancheLokaleDienstleister, struktivaImages.localBusiness, 'from-[#0a162c]/84 via-[#11284a]/64 to-[#081323]/90'],
    ['Beratungsbetriebe', 'Angebot und Nutzen werden online oft zu abstrakt dargestellt.', 'STRUKTIVA baut eine klare Angebotslogik mit Vertrauenselementen und Terminführung auf.', 'Lösung für Beratungsbetriebe ansehen', siteLinks.brancheBeratung, struktivaImages.consulting, 'from-[#101827]/84 via-[#1e293b]/66 to-[#0b1220]/90'],
  ]

  return (
    <section id="branchen" className="scroll-mt-28 px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium md:p-8">
        <SectionHeader
          eyebrow="Branchenlösungen"
          title="Digitale Struktur für Ihre Branche"
          text="Jede Branche braucht andere digitale Wege. STRUKTIVA entwickelt Strukturen, die zu Ihrem Betrieb passen."
          centered={false}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map(([title, problemText, solutionText, cta, href, image, overlay]) => (
            <article key={title} className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] p-4 shadow-premium transition hover:-translate-y-1 hover:border-[#D8B45A]/30">
              <img src={image} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-20 transition duration-500 group-hover:scale-105 group-hover:opacity-30" />
              <div className={`absolute inset-0 bg-gradient-to-b ${overlay}`} />
              <div className="relative">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">{problemText}</p>
              <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">{solutionText}</p>
              <a href={href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#D8B45A]">
                {cta}
                <ArrowRight className="h-4 w-4" />
              </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function OfferMatchSection() {
  const recommendations = [
    ['Keine Website vorhanden', 'STRUKTIVA Start', 'Für einen klaren Online-Auftritt mit mobiler Optimierung und strukturierter Anfrageführung.', 'Start-Paket anfragen'],
    ['Website vorhanden, aber wenig Anfragen', 'STRUKTIVA Wachstum', 'Für bessere Struktur, Google-Grundlage, Kontaktführung und Bewertungslogik.', 'Wachstums-Paket anfragen'],
    ['Google, Bewertungen und WhatsApp nicht verbunden', 'STRUKTIVA Wachstum', 'Wir verbinden Website, Google-Profil, Bewertungen und Kontaktwege zu einer klaren Kundenführung.', 'Digitale Kundenführung anfragen'],
    ['Interne Abläufe unübersichtlich', 'STRUKTIVA System', 'Für digitale Ordnungssysteme, Dashboards, Apps und klarere interne Prozesse.', 'System-Paket anfragen'],
    ['Schnell mehr Bewertungen sammeln', 'Bewertungs- & QR-Code-System', 'Bewertungslink, QR-Code, Bewertungskarte und WhatsApp-Text als klarer Bewertungsweg.', 'Bewertungsstruktur anfragen'],
  ]
  const chips = ['Website fehlt', 'wenig Anfragen', 'Google unklar', 'Bewertungen fehlen', 'interne Ordnung fehlt']

  return (
    <section className="px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-white/14 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.86),rgba(5,10,18,0.95))] p-6 shadow-premium md:p-8">
          <div className="grid items-start gap-6 xl:grid-cols-[1.02fr_0.98fr]">
            <article className="h-fit self-start rounded-[1.5rem] border border-white/12 bg-white/[0.04] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B45A]/85">Entscheidungshilfe</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Welches STRUKTIVA-Angebot passt zu Ihnen?</h2>
              <p className="mt-4 text-sm leading-8 text-[#D7DCE5] md:text-base">
                Nicht jedes Unternehmen braucht sofort alles. STRUKTIVA hilft Ihnen, mit der passenden digitalen Struktur zu starten und später sinnvoll zu erweitern.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {chips.map((chip) => (
                  <span key={chip} className="rounded-full border border-[#D8B45A]/28 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold tracking-[0.08em] text-[#E5C979]">{chip}</span>
                ))}
              </div>
              <a href={siteLinks.contact} className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
                Kostenlose Ersteinschätzung anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>

            <div className="space-y-3">
              {recommendations.map(([situation, recommendation, text, cta]) => (
                <article key={situation} className="rounded-2xl border border-white/12 bg-white/[0.04] p-4 transition hover:border-[#D8B45A]/30 hover:bg-white/[0.06]">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#94A3B8]">Situation</p>
                  <p className="mt-1 text-sm font-semibold text-white">{situation}</p>
                  <p className="mt-2 text-sm font-semibold text-[#D8B45A]">Empfehlung: {recommendation}</p>
                  <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">{text}</p>
                  <a href={siteLinks.contact} className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/35 px-4 py-2 text-xs font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
                    {cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={siteLinks.contact} className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-[#D7DCE5] transition hover:text-[#D8B45A]">
              Digitale Struktur prüfen lassen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function DemoUseCasesSection() {
  const improvements = [
    ['Design', 'Moderner, hochwertiger und professioneller Auftritt statt einfacher Baukasten-Optik.'],
    ['Kundenführung', 'Klare Wege zu Termin-Anfrage, WhatsApp, Route und Kontakt.'],
    ['Sichtbarkeit', 'Lokale Struktur für Suchbegriffe wie Friseur, Calw und Wimberg.'],
    ['Vertrauen', 'Echte Eindrücke, Bewertungen, Galerie, Team-Bereich und klare Informationen.'],
    ['Struktur', 'Leistungen, Produkte, Öffnungszeiten, FAQ und Kontakt sauber geordnet.'],
    ['Conversion', 'Besucher werden besser geführt und finden schneller den passenden Kontaktweg.'],
  ]

  const industryDemos = [
    {
      title: 'Handwerker-Demo',
      text: 'Klare Leistungsstruktur, regionale Sichtbarkeit, schnelle Kontaktaufnahme und vertrauensvoller Auftritt für Handwerksbetriebe.',
      href: siteLinks.demoHandwerkerV2,
      image: demoV2Images.handwerkerHero,
      chipTone: 'border-[#f6b74d]/36 text-[#ffd78b]',
      cardTone: 'border-[#f59e0b]/30 bg-[linear-gradient(160deg,rgba(10,22,44,0.78),rgba(17,24,39,0.62),rgba(6,11,20,0.9))]',
      overlay: 'from-[#0b1220]/74 via-[#111827]/62 to-[#090f1b]/90',
    },
    {
      title: 'Kosmetikstudio-Demo',
      text: 'Eleganter Beauty-Auftritt mit Leistungen, Buchungswegen, Vertrauen, Bildern und klarer Kundenführung.',
      href: siteLinks.demoKosmetikstudioV2,
      image: demoV2Images.kosmetikHero,
      chipTone: 'border-[#e9c2a8]/60 text-[#f5dccf]',
      cardTone: 'border-[#e9c2a8]/45 bg-[linear-gradient(160deg,rgba(54,36,33,0.66),rgba(88,61,52,0.48),rgba(37,26,23,0.78))]',
      overlay: 'from-[#f6d8d0]/26 via-[#e6bca8]/22 to-[#6e4f43]/72',
    },
    {
      title: 'Lokaler Dienstleister-Demo',
      text: 'Digitale Struktur für lokale Betriebe, die online professioneller wirken und einfacher Anfragen erhalten möchten.',
      href: siteLinks.demoDienstleister,
      image: struktivaImages.localBusiness,
      chipTone: 'border-[#7eb2ff]/40 text-[#cfe2ff]',
      cardTone: 'border-[#60a5fa]/28 bg-[linear-gradient(160deg,rgba(10,24,45,0.78),rgba(15,37,68,0.62),rgba(7,16,32,0.9))]',
      overlay: 'from-[#07111f]/68 via-[#0b1f3a]/58 to-[#081323]/88',
    },
  ]

  return (
    <section id="demos" className="scroll-mt-28 px-5 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHeader
            eyebrow="Referenzen & Demo-Beispiele"
            title="Referenzen & Demo-Beispiele"
            text="Echte Umsetzung statt Theorie – und Demo-Beispiele für weitere Branchen."
          />
          <p className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#D8B45A]">
            1 Referenzprojekt · 3 Demo-Beispiele · klare Trennung
          </p>
        </div>
        <p className="mt-6 max-w-5xl text-sm leading-8 text-[#D7DCE5] md:text-base">
          STRUKTIVA entwickelt keine Webseiten von der Stange. Wir verbinden Website, Google, Kontaktwege und Kundenführung zu einer klaren digitalen Unternehmensstruktur.
          Am Beispiel von Salon Karola sieht man, wie aus einem einfachen Online-Auftritt ein moderner, vertrauensstarker Salon-Auftritt wurde.
        </p>

        <div className="mt-10 rounded-[2rem] border border-[#D8B45A]/28 bg-[linear-gradient(160deg,rgba(17,13,10,0.9),rgba(40,29,20,0.74),rgba(11,8,6,0.92))] p-6 shadow-premium md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D8B45A]">Echtes Referenzprojekt</p>
          <h3 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Echtes Referenzprojekt: Salon Karola</h3>
          <p className="mt-3 text-base text-[#EEDBB7]">Von der einfachen Baukasten-Webseite zur modernen digitalen Salon-Struktur.</p>
          <p className="mt-4 text-sm leading-8 text-[#E7DDD0] md:text-base">
            Aus einer einfachen bestehenden Webseite wurde ein moderner digitaler Salon-Auftritt mit klarer Kundenführung, hochwertigem Design und besserer lokaler Struktur.
            STRUKTIVA hat die alte Webseite von Salon Karola in Calw-Wimberg neu aufgebaut und erweitert: mit klaren Kontaktwegen, WhatsApp-Anfrage, Google-Bewertung,
            Öffnungszeiten, Leistungen, Galerie, Vorher-Nachher-Bereich, FAQ, Social-Media-Verlinkung und lokaler SEO-Struktur.
          </p>

          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-white/14 bg-white/[0.04] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#94A3B8]">Vorher</p>
              <h4 className="mt-1 text-xl font-semibold text-white">Alte Baukasten-Webseite</h4>
              <ul className="mt-3 space-y-1.5 text-sm leading-7 text-[#D7DCE5]">
                <li>• Basisinformationen vorhanden</li>
                <li>• einfache Seitenstruktur</li>
                <li>• wenig emotionale Kundenführung</li>
                <li>• wenig moderne Markenwirkung</li>
                <li>• Kontakt vorhanden, aber nicht verkaufsstark geführt</li>
                <li>• klassische Informationsseite ohne starke digitale Struktur</li>
              </ul>
              <a href="https://salonkarola.simdif.com/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#D8B45A]/40 hover:text-[#E8C772]">
                Alte Seite ansehen
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>

            <article className="rounded-2xl border border-[#D8B45A]/32 bg-[linear-gradient(160deg,rgba(22,18,13,0.88),rgba(40,30,20,0.7))] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D8B45A]">Nachher</p>
              <h4 className="mt-1 text-xl font-semibold text-white">Neue digitale Salon-Struktur</h4>
              <ul className="mt-3 space-y-1.5 text-sm leading-7 text-[#E7DDD0]">
                <li>• moderner Premium-Auftritt</li>
                <li>• klare Termin-Anfrage</li>
                <li>• WhatsApp direkt sichtbar</li>
                <li>• Google-Bewertung eingebunden</li>
                <li>• Leistungen übersichtlich strukturiert</li>
                <li>• Galerie und echte Eindrücke</li>
                <li>• Vorher-Nachher-Bereich</li>
                <li>• FAQ-Bereich</li>
                <li>• lokale SEO-Struktur für Calw-Wimberg</li>
                <li>• bessere mobile Nutzerführung</li>
                <li>• stärkere Vertrauenswirkung</li>
              </ul>
              <a href="https://salon-karola-webseite.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
                Neue Seite ansehen
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          </div>

          <div className="mt-8">
            <h4 className="text-2xl font-semibold text-white">Was STRUKTIVA verbessert hat</h4>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {improvements.map(([title, text]) => (
                <article key={title} className="rounded-xl border border-white/12 bg-white/[0.04] p-4">
                  <p className="text-sm font-semibold text-[#D8B45A]">{title}</p>
                  <p className="mt-1.5 text-sm leading-7 text-[#D7DCE5]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-white">Demo-Beispiele für weitere Branchen</h3>
          <p className="mt-3 text-sm leading-8 text-[#D7DCE5] md:text-base">
            Damit Betriebe direkt sehen, wie eine digitale Struktur in ihrer Branche aussehen kann.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {industryDemos.map((demo) => (
              <article key={demo.title} className={`group relative overflow-hidden rounded-[1.5rem] border p-5 shadow-premium transition duration-300 hover:-translate-y-1 ${demo.cardTone}`}>
                <img src={demo.image} alt={`Vorschau ${demo.title}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30 transition duration-500 group-hover:scale-105" />
                <div className={`absolute inset-0 bg-gradient-to-br ${demo.overlay}`} />
                <div className="relative">
                  <h4 className="text-2xl font-semibold text-white">{demo.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-[#D8E1EF]">{demo.text}</p>
                  <span className={`mt-3 inline-flex rounded-full border bg-black/18 px-2.5 py-1 text-[11px] ${demo.chipTone}`}>Demo-Beispiel</span>
                  <a href={demo.href} className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#D8B45A]/40 hover:text-[#E8C772]">
                    Demo ansehen
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[1.8rem] border border-[#D8B45A]/25 bg-[linear-gradient(155deg,rgba(7,17,31,0.94),rgba(11,31,58,0.84),rgba(5,10,18,0.92))] p-6 shadow-premium">
          <h3 className="text-3xl font-semibold text-white">Soll dein Unternehmen auch so klar wirken?</h3>
          <p className="mt-3 max-w-4xl text-sm leading-8 text-[#D7DCE5] md:text-base">
            STRUKTIVA erstellt digitale Strukturen für kleine Unternehmen, Selbstständige und lokale Dienstleister – von der Website über Google-Sichtbarkeit bis zu klaren Kontaktwegen.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={siteLinks.contact} className="inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
              Kostenlose Ersteinschätzung anfragen
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={siteLinks.contact} className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-[#D7DCE5] transition hover:border-[#D8B45A]/35 hover:text-[#D8B45A]">
              Projekt besprechen
            </a>
            <a href={contactDetails.whatsappHref} className="inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
              WhatsApp-Kontakt starten
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyStruktivaSection() {
  const points = [
    ['Mehr als Webdesign', 'STRUKTIVA verbindet Website, Google, Kontaktwege, Bewertungen und digitale Abläufe.'],
    ['Für kleine Unternehmen entwickelt', 'Keine überkomplizierten Systeme, sondern verständliche digitale Struktur.'],
    ['Klarer Aufbau statt Einzelbaustellen', 'Alle digitalen Bausteine sollen sinnvoll zusammenarbeiten.'],
    ['Persönliche und direkte Umsetzung', 'Kurze Wege, klare Abstimmung und verständliche Entscheidungen.'],
    ['Erweiterbar statt starr', 'Sie können klein starten und später weitere Strukturbausteine ergänzen.'],
    ['Seriöse Kommunikation', 'Keine unrealistischen Versprechen, sondern klare Struktur, bessere Grundlagen und professionelle Wirkung.'],
  ]

  return (
    <section className="px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium md:p-8">
        <SectionHeader eyebrow="Vertrauen" title="Warum STRUKTIVA?" text="STRUKTIVA ist kein normaler Webseitenanbieter, sondern Ihr digitaler Strukturpartner." centered={false} />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {points.map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-white/12 bg-white/[0.04] p-4">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function BetreuungSection() {
  const plans = [
    ['Basis-Betreuung', 'ab 199 € / Monat inklusive Mehrwertsteuer', 'Für einfache Pflege, kleinere Anpassungen und technische Grundbetreuung.'],
    ['Struktur-Betreuung', 'ab 299 € / Monat inklusive Mehrwertsteuer', 'Für regelmäßige Anpassungen, Inhalte, Google-Struktur, Kontaktwege und laufende Optimierung.'],
    ['Premium-Betreuung', 'ab 499 € / Monat inklusive Mehrwertsteuer', 'Für intensivere Begleitung, Erweiterungen, Strukturarbeit, Kampagnen und digitale Weiterentwicklung.'],
  ]

  return (
    <section className="px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#D8B45A]/24 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-6 shadow-premium md:p-8">
        <SectionHeader
          eyebrow="Monatliche Betreuung"
          title="Laufende Betreuung für Ihre digitale Struktur"
          text="Digitale Struktur endet nicht mit der Veröffentlichung. Auf Wunsch begleitet STRUKTIVA Ihr Unternehmen dauerhaft bei Pflege, Anpassungen, Sichtbarkeit, Inhalten und Erweiterungen."
          centered={false}
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {plans.map(([title, price, text]) => (
            <article key={title} className="rounded-2xl border border-white/14 bg-white/[0.05] p-5">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm font-semibold text-[#D8B45A]">{price}</p>
              <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">{text}</p>
            </article>
          ))}
        </div>
        <a href={siteLinks.contact} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
          Betreuung anfragen
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

function PricingArchitectureSection() {
  const groups = [
    {
      title: 'Einstieg / Soforthilfe',
      items: [
        'Landingpage ab 299 € inklusive Mehrwertsteuer',
        'Onepager ab 349 € inklusive Mehrwertsteuer',
        'Website-Relaunch ab 499 € inklusive Mehrwertsteuer',
      ],
    },
    {
      title: 'Kernangebote',
      items: [
        'Unternehmenswebsite ab 599 € inklusive Mehrwertsteuer',
        'Mehrseitige Website ab 899 € inklusive Mehrwertsteuer',
        'Premium-Webauftritt ab 1.499 € inklusive Mehrwertsteuer',
      ],
    },
    {
      title: 'Systemangebote',
      items: [
        'Betriebs-Dashboard ab 799 € inklusive Mehrwertsteuer',
        'Digitale Ordnungssysteme ab 899 € inklusive Mehrwertsteuer',
        'Unternehmens-App ab 999 € inklusive Mehrwertsteuer',
      ],
    },
    {
      title: 'Monatliche Betreuung',
      items: [
        'Basis-Betreuung ab 199 € / Monat inklusive Mehrwertsteuer',
        'Struktur-Betreuung ab 299 € / Monat inklusive Mehrwertsteuer',
        'Premium-Betreuung ab 499 € / Monat inklusive Mehrwertsteuer',
      ],
    },
  ]

  const packages = [
    {
      title: 'STRUKTIVA Start',
      price: 'ab 599 € inklusive Mehrwertsteuer',
      text: 'Für kleine Unternehmen, die professionell sichtbar werden möchten.',
      points: ['professionelle Website-Grundstruktur', 'mobile Optimierung', 'klare Leistungsdarstellung', 'Kontaktbereich', 'SEO-Grundstruktur', 'einfache Kundenführung', 'Impressum-/Datenschutz-Verlinkung'],
    },
    {
      title: 'STRUKTIVA Wachstum',
      price: 'ab 899 € inklusive Mehrwertsteuer',
      text: 'Für Betriebe, die Website, Google und Kontaktwege verbinden möchten.',
      points: ['mehrseitige Website-Struktur', 'Google-Sichtbarkeitsgrundlage', 'Kontakt- und Anfrageführung', 'Bewertungsstruktur', 'WhatsApp-Kontaktweg', 'klare Vertrauenselemente'],
    },
    {
      title: 'STRUKTIVA System',
      price: 'ab 1.499 € inklusive Mehrwertsteuer',
      text: 'Für Unternehmen, die digitale Struktur im Außenauftritt und im Alltag möchten.',
      points: ['Premium-Webauftritt', 'Google- und Bewertungsstruktur', 'digitale Kundenführung', 'interne Strukturbausteine', 'Dashboard- oder App-Grundkonzept', 'erweiterbare Unternehmensarchitektur'],
    },
  ]

  const minis = [
    'Google-Unternehmensprofil-Struktur ab 299 € inklusive Mehrwertsteuer',
    'Bewertungs- und QR-Code-System ab 149 € inklusive Mehrwertsteuer',
    'WhatsApp-Kontaktstruktur ab 199 € inklusive Mehrwertsteuer',
    'Social-Media- und Pinterest-Grundstruktur ab 249 € inklusive Mehrwertsteuer',
  ]
  const compareRows = [
    ['Geeignet für', 'Erster professioneller Auftritt', 'Mehr Anfragen durch klare Verknüpfung', 'Außenwirkung plus interne Struktur'],
    ['Website-Struktur', 'Grundstruktur', 'Mehrseitige Struktur', 'Premium-Webauftritt'],
    ['Google & Bewertungen', 'Basis', 'Erweitert', 'Erweitert + Systemlogik'],
    ['Interne Struktur', 'Optional', 'Optional', 'Im Paket vorgesehen'],
  ]

  return (
    <section id="preise" className="scroll-mt-28 px-5 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader eyebrow="Preise & Pakete" title="Transparente Einstiegspreise mit klarer Struktur" text="Keine Einzellösung. Sondern Unternehmensarchitektur." />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="rounded-[1.6rem] border border-white/14 bg-white/[0.05] p-5 shadow-premium">
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-4 space-y-2 text-sm text-[#D7DCE5]">{group.items.map((item) => <p key={item}>- {item}</p>)}</div>
            </div>
          ))}
        </div>

        <h3 className="mt-12 text-2xl font-semibold text-white">Hauptpakete</h3>
        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.title} className="rounded-[1.7rem] border border-[#D8B45A]/24 bg-[linear-gradient(160deg,rgba(7,17,31,0.9),rgba(11,31,58,0.86),rgba(5,10,18,0.95))] p-5 shadow-premium">
              {pkg.title === 'STRUKTIVA Wachstum' ? (
                <p className="mb-2 inline-flex rounded-full border border-[#D8B45A]/35 bg-[#D8B45A]/12 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D8B45A]">Empfohlen</p>
              ) : null}
              <h4 className="text-xl font-semibold text-white">{pkg.title}</h4>
              <p className="mt-2 text-sm font-semibold text-[#D8B45A]">{pkg.price}</p>
              <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">{pkg.text}</p>
              <div className="mt-4 space-y-2 text-sm text-[#D7DCE5]">{pkg.points.map((point) => <p key={point}>- {point}</p>)}</div>
              <a href={siteLinks.contact} className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/40 px-4 py-2 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
                {pkg.title === 'STRUKTIVA Start' ? 'Start-Paket anfragen' : pkg.title === 'STRUKTIVA Wachstum' ? 'Wachstums-Paket anfragen' : 'System-Paket anfragen'}
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[1.7rem] border border-white/14 bg-white/[0.04] shadow-premium">
          <div className="grid grid-cols-4 border-b border-white/10 bg-white/[0.03] text-xs font-semibold uppercase tracking-[0.14em] text-[#D8B45A]">
            <p className="px-4 py-3">Vergleich</p>
            <p className="px-4 py-3">Start</p>
            <p className="px-4 py-3">Wachstum</p>
            <p className="px-4 py-3">System</p>
          </div>
          {compareRows.map(([label, start, growth, system]) => (
            <div key={label} className="grid grid-cols-4 border-b border-white/10 text-xs md:text-sm text-[#D7DCE5] last:border-b-0">
              <p className="px-4 py-3 font-semibold text-white">{label}</p>
              <p className="px-4 py-3">{start}</p>
              <p className="px-4 py-3">{growth}</p>
              <p className="px-4 py-3">{system}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[1.7rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium">
          <h3 className="text-2xl font-semibold text-white">Schnelle digitale Strukturbausteine</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {minis.map((item) => (
              <p key={item} className="rounded-xl border border-white/12 bg-white/[0.04] px-3 py-2 text-sm text-[#D7DCE5]">{item}</p>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-[#94A3B8]">
            Alle Preise verstehen sich inklusive Mehrwertsteuer. Der finale Preis richtet sich nach Umfang, Seitenanzahl, Funktionen, Textaufwand, Bildern und gewünschter technischer Umsetzung.
          </p>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const faqs = [
    ['Ist STRUKTIVA nur ein Webdesign-Angebot?', 'Nein. STRUKTIVA erstellt Webseiten und verbindet diese mit Google-Sichtbarkeit, Kontaktwegen, Bewertungen, Kundenführung und auf Wunsch internen digitalen Strukturen.'],
    ['Kann ich klein starten?', 'Ja. Sie können mit Landingpage, Onepager oder Bewertungsstruktur starten und später sinnvoll erweitern.'],
    ['Sind die Preise inklusive Mehrwertsteuer?', 'Ja. Alle genannten Preise verstehen sich inklusive Mehrwertsteuer.'],
    ['Für welche Branchen ist STRUKTIVA geeignet?', 'Für kleine Unternehmen, Selbstständige, lokale Dienstleister, Handwerker, Friseursalons, Kosmetikstudios und Beratungsbetriebe.'],
    ['Ist Google-Sichtbarkeit garantiert?', 'Nein. Seriöse Sichtbarkeit kann nicht garantiert werden. STRUKTIVA schafft eine bessere strukturelle Grundlage für Auffindbarkeit, Vertrauen und klare Kontaktwege.'],
    ['Ersetzt STRUKTIVA ein Kassensystem?', 'Nein. STRUKTIVA ersetzt keine zertifizierte Kassensoftware. Wir entwickeln digitale Strukturbausteine für Übersicht, Tageskontrolle und interne Abläufe.'],
    ['Kann meine bestehende Website verbessert werden?', 'Ja. Bestehende Websites können analysiert, strukturiert, modernisiert oder neu aufgebaut werden.'],
    ['Gibt es monatliche Betreuung?', 'Ja. Betreuungsangebote starten ab 199 € / Monat inklusive Mehrwertsteuer.'],
    ['Was ist eine Unternehmens-App?', 'Eine Unternehmens-App oder Web-App ist ein digitaler Arbeitsbereich für Termine, Aufgaben, Kunden und interne Prozesse.'],
    ['Was ist ein Betriebs-Dashboard?', 'Ein Betriebs-Dashboard bündelt wichtige Informationen wie Termine, Aufgaben, offene Punkte und Kennzahlen.'],
  ]

  return (
    <section className="px-5 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium md:p-8">
        <SectionHeader eyebrow="FAQ" title="Häufige Fragen" text="Klar, verständlich und ohne Agentur-Blabla." />
        <div className="mt-8 space-y-3">
          {faqs.map(([q, a], index) => (
            <article key={q} className="rounded-2xl border border-white/12 bg-white/[0.04]">
              <button
                type="button"
                onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
                className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
              >
                <h3 className="text-base font-semibold text-white">{q}</h3>
                <ChevronDown className={`h-4 w-4 text-[#D8B45A] transition ${openIndex === index ? 'rotate-180' : 'rotate-0'}`} />
              </button>
              {openIndex === index ? (
                <div className="border-t border-white/10 px-4 pb-4 pt-3">
                  <p className="text-sm leading-7 text-[#D7DCE5]">{a}</p>
                  {(index + 1) % 2 === 0 ? (
                    <a href={siteLinks.contact} className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/35 px-3.5 py-1.5 text-xs font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
                      Kostenlose Ersteinschätzung anfragen
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function StructureCtaSection() {
  return (
    <section className="px-5 pb-10 lg:px-8 lg:pb-14">
      <div className="mx-auto max-w-7xl rounded-[1.9rem] border border-[#D8B45A]/24 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-6 shadow-premium">
        <h2 className="text-2xl font-semibold text-white">Lassen Sie Ihre digitale Struktur prüfen.</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#D7DCE5] md:text-base">
          Sie möchten wissen, welche Website-, Google- oder Kontaktstruktur für Ihr Unternehmen sinnvoll ist? Dann fragen Sie eine unverbindliche Ersteinschätzung an.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={siteLinks.contact} className="inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
            Kostenlose Ersteinschätzung anfragen
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href={`mailto:${contactDetails.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-[#D7DCE5] transition hover:text-[#D8B45A]">
            {contactDetails.email}
          </a>
          <a href={contactDetails.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-[#D7DCE5] transition hover:text-[#D8B45A]">
            {contactDetails.phoneLabel}
          </a>
        </div>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <>
      <HeroSectionPremium />
      <OfferMatchSection />
      <WhatStruktivaBuildsSection />
      <ThreeStructureFieldsSection />
      <WhyStruktivaSection />
      <StructureCtaSection />
      <PricingArchitectureSection />
      <ModulesSection />
      <BranchenSection />
      <DemoUseCasesSection />
      <SuitableForSection />
      <WhyStructureSection />
      <ProcessSection />
      <BetreuungSection />
      <FAQSection />
      <WissenSection />
      <DifferentiatorSection />
      <ContactSection />
    </>
  )
}

function LandingpageDigitaleStrukturPage() {
  const includedCards = [
    ['Website & Landingpage', 'Klare Seitenstruktur, professionelle Darstellung und verständliche Angebotsführung.'],
    ['Google-Sichtbarkeit', 'Saubere Grundlagen für Google-Unternehmensprofil, lokale Auffindbarkeit und Leistungsdarstellung.'],
    ['WhatsApp & Kontaktwege', 'Einfache Kontaktmöglichkeiten, die Besucher direkt zur Anfrage führen.'],
    ['Social-Media-Struktur', 'Grundstruktur für Inhalte, die zum Unternehmen passen und nicht chaotisch wirken.'],
    ['Angebotsarchitektur', 'Leistungen werden so dargestellt, dass Kunden den Nutzen schneller verstehen.'],
    ['Optionaler Newsletter', 'Dezente Newsletter-Einbindung zur Kundenbindung, wenn es sinnvoll zum Unternehmen passt.'],
  ]

  return (
    <main className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <section className="rounded-[2.4rem] border border-[#D8B45A]/22 bg-[linear-gradient(160deg,rgba(7,17,31,0.94),rgba(11,31,58,0.9),rgba(5,10,18,0.96))] p-7 shadow-premium md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/82">STRUKTIVA Landingpage</p>
            <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Digitale Struktur für kleine Unternehmen, die online professioneller wirken wollen.
            </h1>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[#D7DCE5] md:text-lg">
              STRUKTIVA verbindet Website, Landingpage, Google-Sichtbarkeit, WhatsApp-Kontaktwege, Social Media und klare Kundenführung zu einem digitalen System, das verständlich, hochwertig und professionell wirkt.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={siteLinks.contact} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
                Kostenlose Ersteinschätzung anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={siteLinks.demos} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
                Demo-Seiten ansehen
              </a>
            </div>
            <p className="mt-5 rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-[#D7DCE5]">
              Für Selbstständige, lokale Betriebe und Dienstleister, die mehr Klarheit in ihren digitalen Auftritt bringen möchten.
            </p>
          </section>
        </Reveal>

        <div className="mt-8 grid gap-6">
          <ServiceSection title="Viele Unternehmen verlieren online Vertrauen, bevor ein Kunde überhaupt anfragt.">
            <p>Viele kleine Unternehmen haben gute Leistungen, aber ihr digitaler Auftritt zeigt es nicht klar genug. Die Website wirkt unstrukturiert, Kontaktwege sind unklar, Google wird nicht richtig genutzt und Social Media läuft ohne System.</p>
            <p>- Besucher verstehen nicht sofort, was angeboten wird</p>
            <p>- Kontaktmöglichkeiten sind nicht klar genug sichtbar</p>
            <p>- Google-Auftritt und Website wirken nicht verbunden</p>
            <p>- Social Media bringt keine klare Kundenführung</p>
            <p>- Angebote werden nicht überzeugend präsentiert</p>
            <p>- Es fehlt ein System, das aus Besuchern Anfragen macht</p>
          </ServiceSection>

          <ServiceSection title="STRUKTIVA bringt Ordnung in deinen digitalen Auftritt.">
            <p>Statt einzelne Bausteine unverbunden nebeneinanderzustellen, entwickelt STRUKTIVA eine klare digitale Struktur. Website, Landingpage, Google, WhatsApp, Social Media und Newsletter werden so aufgebaut, dass Besucher schneller verstehen, warum sie Kontakt aufnehmen sollten.</p>
          </ServiceSection>

          <section className="rounded-[1.8rem] border border-white/14 bg-white/[0.05] p-5 shadow-premium md:p-6">
            <h2 className="text-2xl font-semibold text-white">Was STRUKTIVA für dein Unternehmen aufbauen kann</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {includedCards.map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/12 bg-white/[0.04] p-4">
                  <p className="text-base font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <ServiceSection title="Geeignet für kleine Unternehmen, die digital klarer auftreten wollen.">
            <p>- Handwerker</p>
            <p>- Beauty & Kosmetik</p>
            <p>- Friseursalons</p>
            <p>- Reinigungsfirmen</p>
            <p>- Fahrschulen</p>
            <p>- lokale Dienstleister</p>
            <p>- Berater</p>
            <p>- Selbstständige</p>
            <p>- kleine Händler</p>
          </ServiceSection>

          <section className="rounded-[1.8rem] border border-white/14 bg-white/[0.05] p-5 shadow-premium md:p-6">
            <h2 className="text-2xl font-semibold text-white">Sieh dir an, wie verschiedene Branchen digital wirken können.</h2>
            <p className="mt-4 text-sm leading-7 text-[#D7DCE5] md:text-base">
              Die Demo-Seiten zeigen unterschiedliche Modelle für verschiedene Branchen. So wird sichtbar, dass STRUKTIVA nicht mit Standardlösungen arbeitet, sondern den digitalen Auftritt an Branche, Zielgruppe und Wirkung anpasst.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <a href={siteLinks.demoHandwerker} className="rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:border-[#D8B45A]/35 hover:text-[#D8B45A]">Handwerker-Modell · Demo ansehen</a>
              <a href={siteLinks.demoBeauty} className="rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:border-[#D8B45A]/35 hover:text-[#D8B45A]">Beauty-Modell · Demo ansehen</a>
              <a href={siteLinks.demoDienstleister} className="rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:border-[#D8B45A]/35 hover:text-[#D8B45A]">Dienstleister-Modell · Demo ansehen</a>
            </div>
          </section>

          <ServiceSection title="Einstiegspreise für kleine Unternehmen">
            <p><span className="font-semibold text-[#D8B45A]">STRUKTIVA Start – ab 599 €</span><br />Für Unternehmen, die online professioneller auftreten möchten.</p>
            <p><span className="font-semibold text-[#D8B45A]">STRUKTIVA Wachstum – ab 899 €</span><br />Für Unternehmen, die mehr Struktur in Website, Angebot und Kontaktwege bringen möchten.</p>
            <p><span className="font-semibold text-[#D8B45A]">STRUKTIVA System – ab 1.499 €</span><br />Für Unternehmen, die eine vollständige digitale Struktur brauchen.</p>
            <p><span className="font-semibold text-[#D8B45A]">Monatliche Betreuung – ab 199 € / Monat</span><br />Für regelmäßige Pflege, Inhalte, kleine Änderungen und Optimierung.</p>
            <p className="text-sm text-[#94A3B8]">Alle Preise verstehen sich inklusive gesetzlicher Mehrwertsteuer. Der finale Preis richtet sich nach Umfang, Seitenanzahl, Funktionen, Textaufwand, Bildern und gewünschter technischer Umsetzung.</p>
          </ServiceSection>

          <ServiceSection title="So läuft die Zusammenarbeit ab.">
            <p><span className="font-semibold text-white">Schritt 1: Kostenlose Ersteinschätzung</span><br />Wir schauen uns an, wo dein Unternehmen digital aktuell steht.</p>
            <p><span className="font-semibold text-white">Schritt 2: Strukturplan</span><br />Du bekommst eine klare Empfehlung, welche digitale Struktur sinnvoll ist.</p>
            <p><span className="font-semibold text-white">Schritt 3: Umsetzung</span><br />STRUKTIVA erstellt deine Website, Landingpage oder digitale Struktur professionell und verständlich.</p>
            <p><span className="font-semibold text-white">Schritt 4: Optimierung</span><br />Nach dem Start wird geprüft, ob Aufbau, Kontaktwege und Darstellung sauber funktionieren.</p>
          </ServiceSection>

          <section className="rounded-[1.9rem] border border-[#D8B45A]/22 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-6 shadow-premium">
            <h2 className="text-2xl font-semibold text-white">Bereit für einen digitalen Auftritt, der klarer und professioneller wirkt?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#D7DCE5] md:text-base">
              Wenn du wissen möchtest, welche digitale Struktur für dein Unternehmen sinnvoll ist, kannst du eine Kostenlose Ersteinschätzung anfragen.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href={siteLinks.contact} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
                Kostenlose Ersteinschätzung anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={`mailto:${contactDetails.email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
                E-Mail schreiben
              </a>
              <a href={contactDetails.whatsappHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
                WhatsApp
              </a>
            </div>
            <div className="mt-4 grid gap-1 text-sm text-[#D7DCE5]">
              <p>E-Mail: <a href={`mailto:${contactDetails.email}`} className="text-[#D8B45A]">{contactDetails.email}</a></p>
              <p>Website: <a href="https://struktiva-unternehmensarchitektur.vercel.app/" className="text-[#D8B45A]" target="_blank" rel="noopener noreferrer">struktiva-unternehmensarchitektur.vercel.app</a></p>
            </div>
            <p className="mt-4 text-xs text-[#94A3B8]">
              Du hast bereits mit STRUKTIVA gearbeitet? <a href={contactDetails.googleReviewHref} target="_blank" rel="noopener noreferrer" className="text-[#D8B45A]">Google-Bewertung schreiben</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

function LandingpageDigitaleStrukturPageV2() {
  const landingImages = {
    hero: struktivaImages.businessHero,
    problem: struktivaImages.workspace,
    solution: struktivaImages.structurePlanning,
    cta: struktivaImages.ctaBackdrop,
    demoHandwerker: struktivaImages.handwerker,
    demoBeauty: struktivaImages.beauty,
    demoDienstleister: struktivaImages.dienstleister,
  }

  const includedCards = [
    ['Website & Landingpage', 'Klare Seitenstruktur, professionelle Darstellung und verständliche Angebotsführung.'],
    ['Google-Sichtbarkeit', 'Saubere Grundlagen für Google-Unternehmensprofil, lokale Auffindbarkeit und Leistungsdarstellung.'],
    ['WhatsApp & Kontaktwege', 'Einfache Kontaktmöglichkeiten, die Besucher direkt zur Anfrage führen.'],
    ['Social-Media-Struktur', 'Grundstruktur für Inhalte, die zum Unternehmen passen und nicht chaotisch wirken.'],
    ['Angebotsarchitektur', 'Leistungen werden so dargestellt, dass Kunden den Nutzen schneller verstehen.'],
    ['Optionaler Newsletter', 'Dezente Newsletter-Einbindung zur Kundenbindung, wenn es sinnvoll zum Unternehmen passt.'],
  ]

  return (
    <main className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <section className="overflow-hidden rounded-[2.4rem] border border-[#D8B45A]/22 bg-[linear-gradient(160deg,rgba(7,17,31,0.94),rgba(11,31,58,0.9),rgba(5,10,18,0.96))] shadow-premium">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-7 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/82">STRUKTIVA Landingpage</p>
                <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  Digitale Struktur für kleine Unternehmen, die online professioneller wirken wollen.
                </h1>
                <p className="mt-4 max-w-4xl text-base leading-8 text-[#D7DCE5] md:text-lg">
                  STRUKTIVA verbindet Website, Landingpage, Google-Sichtbarkeit, WhatsApp-Kontaktwege, Social Media und klare Kundenführung zu einem digitalen System, das verständlich, hochwertig und professionell wirkt.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href={siteLinks.contact} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
                    Kostenlose Ersteinschätzung anfragen
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href={siteLinks.demos} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
                    Demo-Seiten ansehen
                  </a>
                </div>
                <p className="mt-5 rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-[#D7DCE5]">
                  Für Selbstständige, lokale Betriebe und Dienstleister, die mehr Klarheit in ihren digitalen Auftritt bringen möchten.
                </p>
              </div>
              <div className="relative min-h-[280px] lg:min-h-full">
                <img src={landingImages.hero} alt="Moderner Arbeitsplatz mit Fokus auf digitale Unternehmensstruktur" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,17,31,0.7),rgba(7,17,31,0.45),rgba(5,10,18,0.8))]" />
              </div>
            </div>
          </section>
        </Reveal>

        <div className="mt-8 grid gap-6">
          <section className="overflow-hidden rounded-[1.8rem] border border-white/14 bg-white/[0.05] shadow-premium">
            <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="p-5 md:p-6">
                <h2 className="text-2xl font-semibold text-white">Viele Unternehmen verlieren online Vertrauen, bevor ein Kunde überhaupt anfragt.</h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-[#D7DCE5] md:text-base">
                  <p>Viele kleine Unternehmen haben gute Leistungen, aber ihr digitaler Auftritt zeigt es nicht klar genug. Die Website wirkt unstrukturiert, Kontaktwege sind unklar, Google wird nicht richtig genutzt und Social Media läuft ohne System.</p>
                  <p>- Besucher verstehen nicht sofort, was angeboten wird</p>
                  <p>- Kontaktmöglichkeiten sind nicht klar genug sichtbar</p>
                  <p>- Google-Auftritt und Website wirken nicht verbunden</p>
                  <p>- Social Media bringt keine klare Kundenführung</p>
                  <p>- Angebote werden nicht überzeugend präsentiert</p>
                  <p>- Es fehlt ein System, das aus Besuchern Anfragen macht</p>
                </div>
              </div>
              <div className="relative min-h-[220px]">
                <img src={landingImages.problem} alt="Notizen, Laptop und unstrukturierte Planungssituation" loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(7,17,31,0.72),rgba(7,17,31,0.48),rgba(5,10,18,0.8))]" />
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-[1.8rem] border border-white/14 bg-white/[0.05] shadow-premium">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[220px] order-2 lg:order-1">
                <img src={landingImages.solution} alt="Strategische Planung mit klarer Struktur auf Laptop und Unterlagen" loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(7,17,31,0.72),rgba(7,17,31,0.48),rgba(5,10,18,0.8))]" />
              </div>
              <div className="p-5 md:p-6 order-1 lg:order-2">
                <h2 className="text-2xl font-semibold text-white">STRUKTIVA bringt Ordnung in deinen digitalen Auftritt.</h2>
                <p className="mt-4 text-sm leading-7 text-[#D7DCE5] md:text-base">Statt einzelne Bausteine unverbunden nebeneinanderzustellen, entwickelt STRUKTIVA eine klare digitale Struktur. Website, Landingpage, Google, WhatsApp, Social Media und Newsletter werden so aufgebaut, dass Besucher schneller verstehen, warum sie Kontakt aufnehmen sollten.</p>
              </div>
            </div>
          </section>

          <section className="rounded-[1.8rem] border border-white/14 bg-white/[0.05] p-5 shadow-premium md:p-6">
            <h2 className="text-2xl font-semibold text-white">Was STRUKTIVA für dein Unternehmen aufbauen kann</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {includedCards.map(([title, text], index) => (
                <div key={title} className={`rounded-2xl border p-4 ${index < 2 ? 'border-[#D8B45A]/25 bg-[linear-gradient(145deg,rgba(216,180,90,0.12),rgba(11,31,58,0.7),rgba(5,10,18,0.9))]' : 'border-white/12 bg-white/[0.04]'}`}>
                  <p className="text-base font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <ServiceSection title="Geeignet für kleine Unternehmen, die digital klarer auftreten wollen.">
            <p>- Handwerker</p>
            <p>- Beauty & Kosmetik</p>
            <p>- Friseursalons</p>
            <p>- Reinigungsfirmen</p>
            <p>- Fahrschulen</p>
            <p>- lokale Dienstleister</p>
            <p>- Berater</p>
            <p>- Selbstständige</p>
            <p>- kleine Händler</p>
          </ServiceSection>

          <section className="rounded-[1.8rem] border border-white/14 bg-white/[0.05] p-5 shadow-premium md:p-6">
            <h2 className="text-2xl font-semibold text-white">Sieh dir an, wie verschiedene Branchen digital wirken können.</h2>
            <p className="mt-4 text-sm leading-7 text-[#D7DCE5] md:text-base">
              Die Demo-Seiten zeigen unterschiedliche Modelle für verschiedene Branchen. So wird sichtbar, dass STRUKTIVA nicht mit Standardlösungen arbeitet, sondern den digitalen Auftritt an Branche, Zielgruppe und Wirkung anpasst.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <a href={siteLinks.demoHandwerker} className="group overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04]">
                <div className="relative h-28">
                  <img src={landingImages.demoHandwerker} alt="Handwerker bei der Arbeit als Demo-Vorschau" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.2),rgba(7,17,31,0.75))]" />
                </div>
                <div className="px-4 py-3 text-sm font-semibold text-white transition group-hover:text-[#D8B45A]">Handwerker-Modell · Demo ansehen</div>
              </a>
              <a href={siteLinks.demoBeauty} className="group overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04]">
                <div className="relative h-28">
                  <img src={landingImages.demoBeauty} alt="Beauty-Studio als Demo-Vorschau" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.2),rgba(7,17,31,0.75))]" />
                </div>
                <div className="px-4 py-3 text-sm font-semibold text-white transition group-hover:text-[#D8B45A]">Beauty-Modell · Demo ansehen</div>
              </a>
              <a href={siteLinks.demoDienstleister} className="group overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04]">
                <div className="relative h-28">
                  <img src={landingImages.demoDienstleister} alt="Dienstleister-Büro als Demo-Vorschau" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.2),rgba(7,17,31,0.75))]" />
                </div>
                <div className="px-4 py-3 text-sm font-semibold text-white transition group-hover:text-[#D8B45A]">Dienstleister-Modell · Demo ansehen</div>
              </a>
            </div>
          </section>

          <ServiceSection title="Einstiegspreise für kleine Unternehmen">
            <p><span className="font-semibold text-[#D8B45A]">STRUKTIVA Start – ab 599 €</span><br />Für Unternehmen, die online professioneller auftreten möchten.</p>
            <p><span className="font-semibold text-[#D8B45A]">STRUKTIVA Wachstum – ab 899 €</span><br />Für Unternehmen, die mehr Struktur in Website, Angebot und Kontaktwege bringen möchten.</p>
            <p><span className="font-semibold text-[#D8B45A]">STRUKTIVA System – ab 1.499 €</span><br />Für Unternehmen, die eine vollständige digitale Struktur brauchen.</p>
            <p><span className="font-semibold text-[#D8B45A]">Monatliche Betreuung – ab 199 € / Monat</span><br />Für regelmäßige Pflege, Inhalte, kleine Änderungen und Optimierung.</p>
            <p className="text-sm text-[#94A3B8]">Alle Preise verstehen sich inklusive gesetzlicher Mehrwertsteuer. Der finale Preis richtet sich nach Umfang, Seitenanzahl, Funktionen, Textaufwand, Bildern und gewünschter technischer Umsetzung.</p>
          </ServiceSection>

          <ServiceSection title="So läuft die Zusammenarbeit ab.">
            <p><span className="font-semibold text-white">Schritt 1: Kostenlose Ersteinschätzung</span><br />Wir schauen uns an, wo dein Unternehmen digital aktuell steht.</p>
            <p><span className="font-semibold text-white">Schritt 2: Strukturplan</span><br />Du bekommst eine klare Empfehlung, welche digitale Struktur sinnvoll ist.</p>
            <p><span className="font-semibold text-white">Schritt 3: Umsetzung</span><br />STRUKTIVA erstellt deine Website, Landingpage oder digitale Struktur professionell und verständlich.</p>
            <p><span className="font-semibold text-white">Schritt 4: Optimierung</span><br />Nach dem Start wird geprüft, ob Aufbau, Kontaktwege und Darstellung sauber funktionieren.</p>
          </ServiceSection>

          <section className="relative overflow-hidden rounded-[1.9rem] border border-[#D8B45A]/22 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-6 shadow-premium">
            <img src={landingImages.cta} alt="Moderner Arbeitsplatz als ruhiger CTA-Hintergrund" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(7,17,31,0.86),rgba(11,31,58,0.78),rgba(5,10,18,0.9))]" />
            <div className="relative z-[1]">
              <h2 className="text-2xl font-semibold text-white">Bereit für einen digitalen Auftritt, der klarer und professioneller wirkt?</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#D7DCE5] md:text-base">
                Wenn du wissen möchtest, welche digitale Struktur für dein Unternehmen sinnvoll ist, kannst du eine Kostenlose Ersteinschätzung anfragen.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a href={siteLinks.contact} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
                  Kostenlose Ersteinschätzung anfragen
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href={`mailto:${contactDetails.email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
                  E-Mail schreiben
                </a>
                <a href={contactDetails.whatsappHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
                  WhatsApp
                </a>
              </div>
              <div className="mt-4 grid gap-1 text-sm text-[#D7DCE5]">
                <p>E-Mail: <a href={`mailto:${contactDetails.email}`} className="text-[#D8B45A]">{contactDetails.email}</a></p>
                <p>Website: <a href="https://struktiva-unternehmensarchitektur.vercel.app/" className="text-[#D8B45A]" target="_blank" rel="noopener noreferrer">struktiva-unternehmensarchitektur.vercel.app</a></p>
              </div>
              <p className="mt-4 text-xs text-[#94A3B8]">
                Du hast bereits mit STRUKTIVA gearbeitet? <a href={contactDetails.googleReviewHref} target="_blank" rel="noopener noreferrer" className="text-[#D8B45A]">Google-Bewertung schreiben</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

function ServiceDetailLayout({ title, intro, children }) {
  return (
    <main className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rounded-[2.3rem] border border-[#D8B45A]/22 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-7 shadow-premium md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/82">STRUKTIVA Leistung</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-white md:text-5xl">{title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#D7DCE5] md:text-lg">{intro}</p>
            <div className="relative mt-6 overflow-hidden rounded-[1.2rem] border border-white/14">
              <img src={struktivaImages.structurePlanning} alt="Strategische digitale Planung im Unternehmenskontext" loading="lazy" decoding="async" className="h-28 w-full object-cover md:h-32" />
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(7,17,31,0.68),rgba(11,31,58,0.4),rgba(5,10,18,0.72))]" />
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={siteLinks.contact} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
                Anfrage stellen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={siteLinks.services} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
                Zurück zur Übersicht
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6">{children}</div>
      </div>
    </main>
  )
}

function ServiceSection({ title, children }) {
  return (
    <section className="rounded-[1.8rem] border border-white/14 bg-white/[0.05] p-5 shadow-premium md:p-6">
      <h2 className="text-gold-glow text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-7 text-[#D7DCE5] md:text-base">{children}</div>
    </section>
  )
}

function UniversalServiceCTA() {
  return (
    <section className="rounded-[1.9rem] border border-[#D8B45A]/22 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-6 shadow-premium">
      <h2 className="text-2xl font-semibold text-white">Möchtest du wissen, ob diese Lösung zu deinem Unternehmen passt?</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-[#D7DCE5] md:text-base">
        Schreibe kurz, worum es bei deinem Unternehmen geht. Danach erhältst du eine klare Einschätzung, welcher nächste Schritt sinnvoll ist.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a href={siteLinks.contact} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
          Anfrage stellen
          <ArrowRight className="h-4 w-4" />
        </a>
        <a href={contactDetails.whatsappHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
          Per WhatsApp Business kontaktieren
        </a>
      </div>
    </section>
  )
}

function WebseitenPage() {
  return (
    <ServiceDetailLayout
      title="Professionelle Webseiten für einen starken digitalen Auftritt."
      intro="Eine professionelle Webseite zeigt auf den ersten Blick, was ein Unternehmen anbietet, warum es vertrauenswürdig ist und wie Kunden Kontakt aufnehmen können."
    >
      <ServiceSection title="Worum geht es?">
        <p>STRUKTIVA erstellt hochwertige Unternehmenswebseiten mit klarer Struktur, professionellen Texten, mobiler Optimierung und sauberer Kundenführung. Ziel ist kein überladener Internetauftritt, sondern eine Webseite, die verständlich, seriös und anfrageorientiert aufgebaut ist.</p>
      </ServiceSection>
      <ServiceSection title="Für wen ist das sinnvoll?">
        <p>- kleine und mittlere Unternehmen</p><p>- lokale Betriebe</p><p>- Selbstständige</p><p>- Dienstleister</p><p>- Salons, Studios, Praxen und Handwerksbetriebe</p><p>- Unternehmen mit veralteter oder unklarer Website</p>
      </ServiceSection>
      <ServiceSection title="Was wird gemacht?">
        <p>- Seitenstruktur planen</p><p>- Startseite aufbauen</p><p>- Leistungsbereiche formulieren</p><p>- Kontaktführung verbessern</p><p>- mobile Darstellung optimieren</p><p>- Texte professionell strukturieren</p><p>- Impressum/Datenschutz/Widerruf verlinken</p><p>- technische Veröffentlichung vorbereiten</p>
      </ServiceSection>
      <ServiceSection title="So könnte es aussehen">
        <div className="grid gap-3 md:grid-cols-2">
          {['Header mit klarer Navigation', 'Hero-Bereich mit Nutzenfokus', 'Leistungsbereich mit Struktur', 'Kontaktbereich mit CTA'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/12 bg-white/[0.04] p-4">{item}</div>
          ))}
        </div>
      </ServiceSection>
      <ServiceSection title="Preis & Umfang">
        <p className="text-lg font-semibold text-[#D8B45A]">Unternehmenswebsite – ab 599 € inklusive Mehrwertsteuer</p>
        <p>Für strukturierte Unternehmenswebseiten mit professioneller Außendarstellung, klarer Angebotsführung und sauberer Kontaktstruktur.</p>
      </ServiceSection>
      <ServiceSection title="Ablauf">
        <p>1. Kurze Anfrage und Zielklärung</p><p>2. Struktur- und Inhaltsplanung</p><p>3. Design und Textumsetzung</p><p>4. Feedback und Feinschliff</p><p>5. Technische Veröffentlichung und Übergabe</p>
      </ServiceSection>
      <UniversalServiceCTA />
    </ServiceDetailLayout>
  )
}

function LandingpagesPage() {
  return (
    <ServiceDetailLayout
      title="Landingpages für klare Angebote und gezielte Anfragen."
      intro="Eine Landingpage ist eine einzelne Angebotsseite, die ein bestimmtes Produkt, eine Dienstleistung oder Aktion klar erklärt und Besucher gezielt zur Anfrage führt."
    >
      <ServiceSection title="Worum geht es?">
        <p>Eine Landingpage konzentriert sich auf ein klares Ziel: Der Besucher soll schnell verstehen, worum es geht, welchen Nutzen das Angebot hat und wie er Kontakt aufnehmen kann. Sie eignet sich besonders für Aktionen, Dienstleistungen, Kampagnen oder Google Ads.</p>
      </ServiceSection>
      <ServiceSection title="Für wen ist das sinnvoll?">
        <p>- Unternehmen mit konkretem Angebot</p><p>- Aktionen oder Sonderleistungen</p><p>- Google-Ads-Kampagnen</p><p>- lokale Dienstleistungen</p><p>- digitale Produkte</p><p>- Betriebe, die gezielt Anfragen gewinnen möchten</p>
      </ServiceSection>
      <ServiceSection title="Was wird gemacht?">
        <p>- Angebotsstruktur entwickeln</p><p>- Nutzen klar herausarbeiten</p><p>- Texte verkaufsorientiert formulieren</p><p>- Call-to-Action-Bereiche einbauen</p><p>- Kontaktbereich optimieren</p><p>- mobile Darstellung verbessern</p><p>- technische Veröffentlichung vorbereiten</p>
      </ServiceSection>
      <ServiceSection title="So könnte es aussehen">
        <div className="grid gap-3 md:grid-cols-2">
          {['Angebots-Headline', 'Nutzenpunkte', 'Leistungsbox', 'Kontakt-CTA mit Vertrauenselement'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/12 bg-white/[0.04] p-4">{item}</div>
          ))}
        </div>
      </ServiceSection>
      <ServiceSection title="Preis & Umfang">
        <p className="text-lg font-semibold text-[#D8B45A]">Landingpage – ab 299 € inklusive Mehrwertsteuer</p>
        <p>Für verkaufsstarke Landingpages mit Angebotsarchitektur, WhatsApp-CTA und klarer Anfrageführung.</p>
      </ServiceSection>
      <ServiceSection title="Ablauf">
        <p>1. Angebot und Ziel definieren</p><p>2. Seitenlogik und Nutzenstruktur aufbauen</p><p>3. Texte und visuelle Abschnitte ausarbeiten</p><p>4. CTA und Kontaktweg optimieren</p><p>5. Technische Veröffentlichung und Übergabe</p>
      </ServiceSection>
      <UniversalServiceCTA />
    </ServiceDetailLayout>
  )
}

function AppsPage() {
  return (
    <ServiceDetailLayout
      title="Unternehmens-Apps für klarere Abläufe."
      intro="Individuelle App-Systeme können Kunden, Termine, Aufgaben, Checklisten und interne Abläufe übersichtlich an einem Ort bündeln."
    >
      <ServiceSection title="Worum geht es?">
        <p>STRUKTIVA entwickelt App-Lösungen und digitale Systeme, die Unternehmen im Alltag unterstützen. Dabei geht es nicht um eine Spielerei, sondern um praktische digitale Werkzeuge für Organisation, Übersicht und bessere Abläufe.</p>
      </ServiceSection>
      <ServiceSection title="Für wen ist das sinnvoll?">
        <p>- Unternehmen mit vielen Kundeninformationen</p><p>- Betriebe mit Terminorganisation</p><p>- Teams mit Aufgaben und Checklisten</p><p>- Salons, Studios und Dienstleister</p><p>- Unternehmen mit wiederkehrenden Abläufen</p><p>- Betriebe, die weniger Zettelwirtschaft wollen</p>
      </ServiceSection>
      <ServiceSection title="Was wird gemacht?">
        <p>- kostenlose App-Ersteinschätzung</p><p>- Abläufe analysieren</p><p>- sinnvolle Funktionen definieren</p><p>- Nutzerrollen planen</p><p>- App-Struktur aufbauen</p><p>- mobile und Desktop-Ansicht berücksichtigen</p><p>- technische Umsetzung vorbereiten</p><p>- Betreuung und Hosting klären</p>
      </ServiceSection>
      <ServiceSection title="So könnte es aussehen">
        <div className="app-preview-3d mx-auto max-w-3xl rounded-[2rem] border border-white/14 bg-white/[0.05] p-4 shadow-premium">
          <div className="rounded-[1.5rem] border border-[#D8B45A]/20 bg-white/[0.05] p-4 md:p-5">
            <p className="text-sm font-medium text-[#D7DCE5]">App-Beispiel für Unternehmen</p>
            <h3 className="mt-1 text-xl font-semibold text-white">STRUKTIVA Business App</h3>
            <div className="mt-3 rounded-full bg-[#D8B45A]/12 px-3 py-1 text-xs font-semibold text-[#D8B45A] inline-block">Vorschau</div>
            <div className="mt-4 grid gap-2.5">
              {[
                ['Kundenverwaltung', 'übersichtlich'],
                ['Terminübersicht', 'strukturiert'],
                ['Aufgabensteuerung', 'klar'],
                ['Bewertungsprozess', 'integriert'],
              ].map(([label, state]) => (
                <div key={label} className="app-layer flex items-center justify-between gap-3 rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-2.5">
                  <span className="text-sm font-medium text-white">{label}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#94A3B8]">{state}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ServiceSection>
      <ServiceSection title="Preis & Umfang">
        <p className="text-lg font-semibold text-[#D8B45A]">STRUKTIVA System – ab 1.499 € inklusive Mehrwertsteuer</p>
        <p>App- oder Dashboard-Lösungen sind eine hochwertige Zusatzoption für Unternehmen, die neben Sichtbarkeit auch mehr interne Struktur brauchen.</p>
        <p className="text-lg font-semibold text-[#D8B45A]">Monatliche Betreuung – ab 199 € / Monat</p>
      </ServiceSection>
      <ServiceSection title="Ablauf">
        <p>1. Kostenlose Ersteinschätzung</p><p>2. Ablaufanalyse und Funktionsrahmen</p><p>3. Strukturplanung und Umsetzung</p><p>4. Testphase und Freigabe</p><p>5. Go-live mit Betreuung</p>
      </ServiceSection>
      <UniversalServiceCTA />
    </ServiceDetailLayout>
  )
}

function GoogleAdsPage() {
  return (
    <ServiceDetailLayout
      title="Google Ads für gezielte Kundenanfragen."
      intro="Google Ads können sinnvoll sein, wenn ein Unternehmen Menschen erreichen möchte, die bereits aktiv nach einer Leistung suchen."
    >
      <ServiceSection title="Worum geht es?">
        <p>STRUKTIVA unterstützt bei Kampagnenstruktur, Anzeigentexten, Angebotsausrichtung und passenden Landingpages. Ziel ist nicht einfach Werbung zu schalten, sondern die Anzeige mit einer klaren Zielseite und verständlicher Kundenführung zu verbinden.</p>
      </ServiceSection>
      <ServiceSection title="Für wen ist das sinnvoll?">
        <p>- lokale Betriebe</p><p>- Dienstleister</p><p>- Unternehmen mit konkreten Angeboten</p><p>- Betriebe mit neuer Webseite oder Landingpage</p><p>- Unternehmen, die gezielt Anfragen gewinnen möchten</p>
      </ServiceSection>
      <ServiceSection title="Was wird gemacht?">
        <p>- Kampagnenstruktur entwickeln</p><p>- Keyword-Grundlogik planen</p><p>- Anzeigentexte formulieren</p><p>- Angebot klar ausrichten</p><p>- passende Zielseite empfehlen</p><p>- Anfrageprozess verbessern</p><p>- Social-Media-Werbeideen vorbereiten</p>
      </ServiceSection>
      <ServiceSection title="So könnte es aussehen">
        <div className="grid gap-3 md:grid-cols-2">
          {['Suchanfrage', 'Anzeige', 'Landingpage-Verbindung', 'Anfrageziel'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/12 bg-white/[0.04] p-4">{item}</div>
          ))}
        </div>
      </ServiceSection>
      <ServiceSection title="Preis & Umfang">
        <p className="text-lg font-semibold text-[#D8B45A]">Google Ads Startpaket – ab 249 €</p>
        <p><span className="font-semibold text-white">Wichtig:</span> Werbebudget ist nicht enthalten und wird separat direkt bei Google oder der jeweiligen Werbeplattform eingesetzt.</p>
        <p>Google Ads wird bei STRUKTIVA nicht isoliert, sondern mit Landingpage, Angebotsstruktur und Kontaktführung verbunden.</p>
      </ServiceSection>
      <ServiceSection title="Ablauf">
        <p>1. Angebot und Zielgruppen klären</p><p>2. Kampagnenstruktur und Keywords aufsetzen</p><p>3. Anzeigen und Zielseitenlogik abstimmen</p><p>4. Start und erste Auswertung</p><p>5. Optimierung der Anfragequalität</p>
      </ServiceSection>
      <UniversalServiceCTA />
    </ServiceDetailLayout>
  )
}

function BewertungsQrCodePage() {
  const whatsappRequestHref =
    'https://wa.me/4970518162292?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20das%20Google-Bewertungssystem%20mit%20QR-Code.'

  return (
    <main className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <section className="rounded-[2.3rem] border border-white/14 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-7 shadow-premium md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B45A]/80">STRUKTIVA Leistung</p>
            <h1 className="mt-4 text-3xl font-semibold text-white md:text-5xl">Google-Bewertungssystem mit QR-Code</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#D7DCE5] md:text-lg">
              Mehr Vertrauen bei Google aufbauen – mit einem einfachen System, das zufriedene Kunden direkt zur Bewertung führt.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappRequestHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D] hover:-translate-y-0.5"
              >
                Bewertungssystem anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={siteLinks.home}
                className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D7DCE5] transition hover:border-[#D8B45A]/35 hover:text-[#D8B45A]"
              >
                Zurück zur Startseite
              </a>
            </div>
          </section>
        </Reveal>

        <div className="mt-8 space-y-6">
          <Reveal>
            <section className="rounded-[1.8rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium md:p-7">
              <h2 className="text-2xl font-semibold text-white">Warum Bewertungen wichtig sind</h2>
              <p className="mt-4 text-sm leading-8 text-[#D7DCE5] md:text-base">
                Viele Kunden prüfen vor einer Anfrage zuerst Google-Bewertungen. Ein professionelles Bewertungssystem macht es zufriedenen Kunden leichter, eine Bewertung abzugeben – ohne komplizierte Suche, ohne Umwege und ohne technische Hürden.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section className="rounded-[1.8rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium md:p-7">
              <h2 className="text-2xl font-semibold text-white">Was enthalten ist</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {[
                  'QR-Code zur direkten Google-Bewertung',
                  'Bewertungslink für WhatsApp, E-Mail oder Website',
                  'kleine Druckvorlage für Theke, Empfang oder Rechnung',
                  'kurzer Kundentext zum freundlichen Bitten um eine Bewertung',
                  'einfache Anleitung für den Alltag',
                  'Einbau auf Website oder Landingpage',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-[#D7DCE5]">
                    <span className="font-semibold text-[#D8B45A]">✓</span> {item}
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="rounded-[1.8rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium md:p-7">
              <h2 className="text-2xl font-semibold text-white">Für wen ist das geeignet?</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  'Friseursalons',
                  'Kosmetikstudios',
                  'Handwerker',
                  'lokale Dienstleister',
                  'kleine Geschäfte',
                  'Restaurants und Cafés',
                  'Solo-Selbstständige',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white">
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="rounded-[1.8rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium md:p-7">
              <h2 className="text-2xl font-semibold text-white">So funktioniert es</h2>
              <ol className="mt-5 space-y-3 text-sm leading-7 text-[#D7DCE5] md:text-base">
                <li>1. Google-Bewertungslink wird erstellt oder geprüft</li>
                <li>2. QR-Code wird professionell gestaltet</li>
                <li>3. Vorlage und Textbausteine werden vorbereitet</li>
                <li>4. Der QR-Code wird im Geschäft, auf der Website oder in WhatsApp eingesetzt</li>
                <li>5. Kunden können direkt bewerten</li>
              </ol>
            </section>
          </Reveal>

          <Reveal>
            <section className="rounded-[1.8rem] border border-[#D8B45A]/28 bg-white/[0.05] p-6 shadow-premium md:p-7">
              <h2 className="text-2xl font-semibold text-white">Startpreis</h2>
              <p className="mt-4 text-lg font-semibold text-[#D8B45A]">Google-Bewertungssystem mit QR-Code ab 149 € inklusive Mehrwertsteuer</p>
              <p className="mt-3 text-sm leading-7 text-[#D7DCE5] md:text-base">
                Ideal als einzelnes Mini-Angebot oder als Teil des STRUKTIVA Sichtbarkeitspakets.
              </p>
              <p className="mt-2 text-sm leading-7 text-[#94A3B8]">
                Der finale Preis richtet sich nach Umfang, Einbindung, Druckvorlage, Textbausteinen und technischer Umsetzung.
              </p>
              <a
                href={whatsappRequestHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D] hover:-translate-y-0.5"
              >
                Jetzt Bewertungssystem anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
            </section>
          </Reveal>
        </div>
      </div>
    </main>
  )
}

function DigitaleSoforthilfePage() {
  const soforthilfePakete = [
    {
      title: 'Soforthilfe S',
      price: 'ab 99 € inklusive Mehrwertsteuer',
      description: 'Für kleine digitale Aufgaben, die schnell und sauber erledigt werden sollen.',
      items: [
        'kurze Website-Texte',
        'Google-Beiträge',
        'WhatsApp-Texte',
        'Social-Media-Texte',
        'Bewertungstexte',
        'kleinere Textkorrekturen',
        'kleine Anpassungen an bestehenden Inhalten',
      ],
    },
    {
      title: 'Soforthilfe M',
      price: 'ab 249 € inklusive Mehrwertsteuer',
      description: 'Für mittlere digitale Aufgaben mit mehr Struktur, Textumfang oder mehreren Elementen.',
      items: [
        'Angebotsseiten',
        'Flyertexte',
        'mehrere Social-Media-Beiträge',
        'Google-Profil-Texte',
        'kleinere Landingpage-Strukturen',
        'Aktionsseiten im kleinen Umfang',
        'mehrere Kunden- oder WhatsApp-Nachrichten',
      ],
    },
    {
      title: 'Soforthilfe L',
      price: 'ab 449 € inklusive Mehrwertsteuer',
      description: 'Für größere kurzfristige Aufgaben, bei denen mehrere digitale Bausteine zusammengeführt werden.',
      items: [
        'vollständige Landingpages',
        'Verkaufsseiten',
        'Mini-Kampagnen',
        'Website-Bereichsüberarbeitungen',
        'Angebotsstruktur mit Texten und CTA',
        'Kombination aus Website, Social Media und Google-Texten',
      ],
    },
  ]

  return (
    <main className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <section className="rounded-[2.3rem] border border-[#D8B45A]/24 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-7 shadow-premium md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B45A]/82">STRUKTIVA Leistung</p>
            <h1 className="mt-4 text-3xl font-semibold text-white md:text-5xl">Digitale Soforthilfe</h1>
            <p className="mt-3 text-lg font-medium text-[#F2D98B]">Wenn online schnell etwas funktionieren muss.</p>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[#D7DCE5] md:text-lg">
              Nicht jede digitale Aufgabe braucht ein großes Projekt. Manchmal muss eine Webseite kurzfristig angepasst werden, ein Angebot schnell raus, eine Aktion online sichtbar werden oder ein professioneller Text erstellt werden.
            </p>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[#D7DCE5] md:text-lg">
              STRUKTIVA unterstützt kleine Unternehmen, Selbstständige und lokale Dienstleister mit klarer digitaler Soforthilfe – schnell, sauber und strukturiert.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={contactDetails.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
                Soforthilfe anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#soforthilfe-pakete" className="inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
                Pakete ansehen
              </a>
              <a href={siteLinks.home} className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#D8B45A]/30 hover:text-[#D8B45A]">
                Zurück zur Startseite
              </a>
            </div>
          </section>
        </Reveal>

        <section className="mt-8 rounded-[1.8rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium md:p-7">
          <h2 className="text-2xl font-semibold text-white">Wobei STRUKTIVA kurzfristig unterstützt</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {[
              'Webseiten-Anpassungen',
              'schnelle Landingpages',
              'Angebots- und Verkaufstexte',
              'Google-Unternehmensprofil-Texte',
              'Social-Media-Beiträge',
              'Flyer- und Aktionstexte',
              'WhatsApp- und Bewertungstexte',
              'technische Kleinkorrekturen an bestehenden Seiten',
              'schnelle Strukturierung digitaler Unterlagen',
            ].map((item) => (
              <article key={item} className="rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-[#D7DCE5]">
                {item}
              </article>
            ))}
          </div>
        </section>

        <section id="soforthilfe-pakete" className="scroll-mt-28 mt-8 rounded-[1.8rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium md:p-7">
          <h2 className="text-2xl font-semibold text-white">Soforthilfe-Pakete</h2>
          <p className="mt-2 text-sm text-[#D7DCE5] md:text-base">Wähle den passenden Umfang für deine aktuelle digitale Aufgabe.</p>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {soforthilfePakete.map((paket) => (
              <article key={paket.title} className="rounded-[1.6rem] border border-white/14 bg-white/[0.04] p-5 shadow-premium">
                <h3 className="text-2xl font-semibold text-white">{paket.title}</h3>
                <p className="mt-2 text-sm font-semibold text-[#D8B45A]">{paket.price}</p>
                <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">{paket.description}</p>
                <div className="mt-4 space-y-2">
                  {paket.items.map((item) => (
                    <p key={item} className="rounded-xl border border-white/12 bg-white/[0.03] px-3 py-2 text-xs leading-6 text-[#D7DCE5]">
                      {item}
                    </p>
                  ))}
                </div>
                <a href={contactDetails.whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/35 px-4 py-2 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
                  {paket.title} anfragen
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[1.8rem] border border-[#D8B45A]/24 bg-[linear-gradient(150deg,rgba(7,17,31,0.94),rgba(11,31,58,0.86))] p-6 shadow-premium md:p-7">
          <h2 className="text-2xl font-semibold text-white">Digitale Aufgabe besprechen</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#D7DCE5] md:text-base">
            Beschreibe kurz, wobei du Unterstützung brauchst. STRUKTIVA prüft den passenden Umfang und gibt dir eine klare Einschätzung.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={contactDetails.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
              WhatsApp anfragen
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={siteLinks.contact} className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D7DCE5] transition hover:border-[#D8B45A]/35 hover:text-[#D8B45A]">
              Kontakt aufnehmen
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

function DigitaleOrdnungssystemePage() {
  return (
    <main className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <section className="rounded-[2.3rem] border border-[#D8B45A]/22 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-7 shadow-premium md:p-10">
            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Digitale Ordnungssysteme für steuerberaterfreundliche Abläufe
            </h1>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[#D7DCE5] md:text-lg">
              Kassenstruktur, Tagesabschluss und Monatsübersicht – klar erfasst, digital gespeichert und für den Steuerberater vorbereitet.
            </p>
            <div className="mt-6 space-y-3 text-sm leading-8 text-[#D7DCE5] md:text-base">
              <p>Viele kleine Betriebe verlieren Zeit durch Zettel, Excel-Listen, unklare Ablagen und wiederkehrende Rückfragen.</p>
              <p>STRUKTIVA entwickelt einfache digitale Erfassungssysteme, mit denen tägliche Werte strukturiert dokumentiert, gespeichert und übersichtlich bereitgestellt werden können.</p>
              <p>Ob Tagesabschluss, Kassenkontrolle, Beleg-Hinweise, Monatsübersicht oder Exportfunktion – das System wird an den tatsächlichen Ablauf des Betriebs angepasst.</p>
            </div>
          </section>
        </Reveal>

        <section className="mt-8 rounded-[1.8rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium md:p-7">
          <h2 className="text-2xl font-semibold text-white">Was das System leisten kann</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              ['Digitale Tagesabschluss-Erfassung', 'Tägliche Werte strukturiert erfassen und nachvollziehbar speichern.'],
              ['Kassenstruktur-Systeme', 'Wechselgeld, Bar-Anteil, EC-Zahlungen, Abschöpfung und Differenzen übersichtlich dokumentieren.'],
              ['Monatsübersichten', 'Klare Auswertungen für Betrieb und Steuerberater.'],
              ['Exportfunktionen', 'CSV- oder PDF-Export zur Weitergabe oder internen Kontrolle.'],
              ['Rollen & Zugriff', 'Betrieb und Steuerberater können je nach Bedarf unterschiedliche Zugriffsrechte erhalten.'],
              ['Individuelle Anpassung', 'Das System wird an den tatsächlichen betrieblichen Ablauf angepasst.'],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-white/12 bg-white/[0.04] p-4">
                <p className="text-base font-semibold text-white">{title}</p>
                <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-[#D8B45A]/24 bg-white/[0.04] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B45A]/82">Preisorientierung</p>
            <div className="mt-3 grid gap-2 md:grid-cols-2">
              {[
                'Digitale Ordnungssysteme ab 899 €',
                'Tagesabschluss-System ab 699 €',
                'Kassenstruktur-System ab 799 €',
                'Monatsübersicht / Export-System ab 699 €',
                'Steuerberaterfreundliche Erfassungsstruktur ab 899 €',
              ].map((item) => (
                <p key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-[#D7DCE5]">
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-[#94A3B8]">
              Alle Preise verstehen sich inklusive gesetzlicher Mehrwertsteuer. Der finale Preis richtet sich nach Umfang, Seitenanzahl, Funktionen, Textaufwand, Bildern und gewünschter technischer Umsetzung.
            </p>
            <p className="mt-2 text-sm leading-7 text-[#94A3B8]">
              Individuelle digitale Systeme werden nach Umfang, Betrieb und benötigten Funktionen kalkuliert.
            </p>
          </div>

          <p className="mt-6 rounded-2xl border border-white/14 bg-[#050A12]/45 px-4 py-3 text-xs leading-6 text-[#D7DCE5] md:text-sm">
            Hinweis: STRUKTIVA bietet keine Steuerberatung an und ersetzt keinen Steuerberater. Unsere Systeme dienen der strukturierten Erfassung, Ordnung und Vorbereitung betrieblicher Daten. Die steuerliche Bewertung und finale Verwendung erfolgen durch Ihren Steuerberater.
          </p>

          <a
            href={siteLinks.contact}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]"
          >
            System unverbindlich anfragen
            <ArrowRight className="h-4 w-4" />
          </a>
        </section>
      </div>
    </main>
  )
}

const offerPageContent = {
  '/website-fuer-kleine-unternehmen': {
    title: 'Website-Erstellung für kleine Unternehmen',
    intro: 'Moderne Websites für kleine Unternehmen und Selbstständige – klar strukturiert, mobil optimiert und auf Anfragen ausgerichtet.',
    points: ['klare Seitenstruktur', 'professionelle Darstellung', 'mobile Optimierung', 'saubere Kontaktführung'],
  },
  '/landingpage-erstellen-lassen': {
    title: 'Landingpages erstellen lassen',
    intro: 'Verkaufsstarke Seiten für Angebote, Aktionen und Anfragen – mit klarer Angebotslogik und starker Kundenführung.',
    points: ['Angebotsstruktur', 'Nutzenkommunikation', 'CTA-Bereiche', 'messbare Anfrageziele'],
  },
  '/google-sichtbarkeit-kleine-unternehmen': {
    title: 'Google-Sichtbarkeit für kleine Unternehmen',
    intro: 'Saubere Grundlagen für lokale Auffindbarkeit, bessere Präsenz und klare Verknüpfung mit Website und Kontaktwegen.',
    points: ['Google-Unternehmensprofil', 'lokale Struktur', 'Angebotsverknüpfung', 'Sichtbarkeit mit System'],
  },
  '/digitale-kundenfuehrung': {
    title: 'Digitale Kundenführung',
    intro: 'Klare Wege von Interesse zur Anfrage – damit Besucher schneller verstehen, was angeboten wird und wie sie Kontakt aufnehmen.',
    points: ['klare Kontaktwege', 'Anfrage-Logik', 'Landingpage-Verknüpfung', 'strukturierte Nutzerführung'],
  },
  '/whatsapp-kontaktstruktur': {
    title: 'WhatsApp-Kontaktstruktur',
    intro: 'Direkte Kontaktwege über Website, Google und Landingpage – professionell eingebunden und alltagstauglich aufgebaut.',
    points: ['WhatsApp-CTA-Logik', 'Kontaktintegration', 'Anfrage-Vorqualifizierung', 'schnelle Erreichbarkeit'],
  },
  '/social-media-struktur': {
    title: 'Social-Media-Struktur',
    intro: 'Inhalte und Kanäle mit klarer Richtung statt Zufall – passend zur Positionierung und zur gewünschten Kundenansprache.',
    points: ['Themenstruktur', 'Kanal-Logik', 'Angebotsbezug', 'Content-Rhythmus'],
  },
  '/newsletter-einbindung': {
    title: 'Newsletter-Einbindung',
    intro: 'Dezente Kundenbindung über professionelle Newsletter-Systeme als Zusatzbaustein zur Website- und Landingpage-Struktur.',
    points: ['Anmelde-Integration', 'Verteilerstruktur', 'Grundautomationen', 'DSGVO-bewusste Vorbereitung'],
  },
  '/unternehmens-apps': {
    title: 'Unternehmens-Apps',
    intro: 'Individuelle App- und Dashboard-Konzepte für kleine Unternehmen – alltagstauglich, klar und funktional aufgebaut.',
    points: ['Prozessdigitalisierung', 'Rollen & Rechte', 'mobile Nutzung', 'strukturierte Datenführung'],
  },
  '/betriebs-dashboards': {
    title: 'Betriebs-Dashboards',
    intro: 'Übersichten für Termine, Kunden, Zahlen und interne Abläufe – damit wichtige Informationen schnell verfügbar bleiben.',
    points: ['Live-Übersichten', 'KPI-Darstellung', 'Teamzugriffe', 'exportierbare Berichte'],
  },
  '/angebotsarchitektur': {
    title: 'Angebotsarchitektur',
    intro: 'Leistungen klar darstellen, damit Kunden schneller verstehen, worum es geht und warum sie anfragen sollten.',
    points: ['Leistungslogik', 'Nutzenfokus', 'Anfrageführung', 'strukturierte Angebotsseiten'],
  },
  '/digitale-unternehmensstruktur': {
    title: 'Digitale Unternehmensstruktur',
    intro: 'Website, Google, WhatsApp, Social Media und Prozesse als System – für mehr Klarheit, Sichtbarkeit und stabile Abläufe.',
    points: ['Systemarchitektur', 'kanalübergreifende Struktur', 'Prozessanbindung', 'skalierbare Weiterentwicklung'],
  },
}

const websiteFormats = [
  ['Unternehmenswebsite', 'Für kleine Unternehmen, Selbstständige und Dienstleister, die professionell sichtbar werden und Vertrauen aufbauen möchten.'],
  ['Landingpage', 'Für einzelne Angebote, Aktionen, Kampagnen oder Dienstleistungen, bei denen Besucher gezielt zur Anfrage geführt werden sollen.'],
  ['Onepager', 'Eine kompakte Website auf einer Seite – ideal für klare Angebote, lokale Dienstleister oder den schnellen professionellen Start.'],
  ['Mehrseitige Website', 'Für Unternehmen mit mehreren Leistungen, Referenzen, Team, Preisen, Kontaktbereich und ausführlicher Struktur.'],
  ['Branchenwebsite', 'Websites speziell für Handwerk, Beauty, Friseur, Kosmetik, Beratung, Dienstleistung oder lokale Betriebe.'],
  ['Portfolio-Website', 'Für Selbstständige, Kreative, Berater oder Dienstleister, die Arbeiten, Projekte oder Referenzen hochwertig präsentieren möchten.'],
  ['Angebotsseite', 'Für einzelne Leistungen oder Pakete, die klar erklärt und verkaufsstark dargestellt werden sollen.'],
  ['Vertrauensseite', 'Für Unternehmen, die Bewertungen, Referenzen, Vorher-Nachher-Beispiele oder Qualität stärker sichtbar machen möchten.'],
  ['Termin- und Kontaktwebsite', 'Für Betriebe, bei denen schnelle Kontaktaufnahme, WhatsApp, Telefon, Buchungsanfrage oder Terminwunsch im Mittelpunkt stehen.'],
  ['Website mit Blog oder Ratgeberbereich', 'Für Unternehmen, die langfristig über Google gefunden werden möchten und regelmäßig Inhalte veröffentlichen wollen.'],
  ['Website mit Newsletter-Einbindung', 'Für Unternehmen, die Interessenten sammeln, Kunden binden oder Angebote regelmäßig kommunizieren möchten.'],
  ['Website mit QR-Code-Anbindung', 'Für Flyer, Visitenkarten, Schaufenster, Bewertungen oder Aktionen, die direkt auf passende Seiten führen sollen.'],
  ['Demo-Website', 'Als Vorschau oder Konzeptseite, damit Kunden vorab sehen können, wie ihr digitaler Auftritt wirken könnte.'],
  ['Website-Relaunch', 'Für bestehende Webseiten, die moderner, klarer, schneller und professioneller aufgebaut werden sollen.'],
  ['Premium-Webauftritt', 'Für Unternehmen, die einen hochwertigen digitalen Markenauftritt mit starker Optik, klarer Struktur und überzeugender Kundenführung wünschen.'],
]

const websiteFormatsWithPrices = [
  { title: 'Unternehmenswebsite', price: 'ab 599 €', text: 'Für kleine Unternehmen, Selbstständige und Dienstleister, die professionell sichtbar werden und Vertrauen aufbauen möchten.' },
  { title: 'Landingpage', price: 'ab 299 €', text: 'Für einzelne Angebote, Aktionen, Kampagnen oder Dienstleistungen, bei denen Besucher gezielt zur Anfrage geführt werden sollen.' },
  { title: 'Onepager', price: 'ab 349 €', text: 'Eine kompakte Website auf einer Seite – ideal für klare Angebote, lokale Dienstleister oder den schnellen professionellen Start.' },
  { title: 'Mehrseitige Website', price: 'ab 899 €', text: 'Für Unternehmen mit mehreren Leistungen, Referenzen, Team, Preisen, Kontaktbereich und ausführlicher Struktur.' },
  { title: 'Branchenwebsite', price: 'ab 749 €', text: 'Websites speziell für Handwerk, Beauty, Friseur, Kosmetik, Beratung, Dienstleistung oder lokale Betriebe.' },
  { title: 'Portfolio-Website', price: 'ab 499 €', text: 'Für Selbstständige, Kreative, Berater oder Dienstleister, die Arbeiten, Projekte oder Referenzen hochwertig präsentieren möchten.' },
  { title: 'Angebotsseite', price: 'ab 249 €', text: 'Für einzelne Leistungen oder Pakete, die klar erklärt und verkaufsstark dargestellt werden sollen.' },
  { title: 'Vertrauensseite', price: 'ab 299 €', text: 'Für Unternehmen, die Bewertungen, Referenzen, Vorher-Nachher-Beispiele oder Qualität stärker sichtbar machen möchten.' },
  { title: 'Termin- und Kontaktwebsite', price: 'ab 399 €', text: 'Für Betriebe, bei denen schnelle Kontaktaufnahme, WhatsApp, Telefon, Buchungsanfrage oder Terminwunsch im Mittelpunkt stehen.' },
  { title: 'Website mit Blog oder Ratgeberbereich', price: 'ab 999 €', text: 'Für Unternehmen, die langfristig über Google gefunden werden möchten und regelmäßig Inhalte veröffentlichen wollen.' },
  { title: 'Website mit Newsletter-Einbindung', price: 'ab 599 €', text: 'Für Unternehmen, die Interessenten sammeln, Kunden binden oder Angebote regelmäßig kommunizieren möchten.' },
  { title: 'Website mit QR-Code-Anbindung', price: 'ab 449 €', text: 'Für Flyer, Visitenkarten, Schaufenster, Bewertungen oder Aktionen, die direkt auf passende Seiten führen sollen.' },
  { title: 'Demo-Website', price: 'ab 249 €', text: 'Als Vorschau oder Konzeptseite, damit Kunden vorab sehen können, wie ihr digitaler Auftritt wirken könnte.' },
  { title: 'Website-Relaunch', price: 'ab 499 €', text: 'Für bestehende Webseiten, die moderner, klarer, schneller und professioneller aufgebaut werden sollen.' },
  { title: 'Premium-Webauftritt', price: 'ab 1.499 €', text: 'Für Unternehmen, die einen hochwertigen digitalen Markenauftritt mit starker Optik, klarer Struktur und überzeugender Kundenführung wünschen.' },
]

function WebsiteFuerKleineUnternehmenPage() {
  return (
    <main className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-6xl">
        <section className="rounded-[2.1rem] border border-[#D8B45A]/22 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-7 shadow-premium md:p-10">
          <h1 className="text-3xl font-semibold text-white md:text-5xl">Website für kleine Unternehmen professionell erstellen lassen</h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[#D7DCE5] md:text-lg">
            STRUKTIVA entwickelt professionelle Unternehmenswebsites, Onepager, Landingpages und Relaunch-Konzepte für kleine Unternehmen, Selbstständige und lokale Dienstleister – mit klarer Struktur, verständlicher Kundenführung und mobiler Optimierung.
          </p>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {['klare Seitenstruktur', 'professionelle Darstellung', 'mobile Optimierung', 'saubere Kontaktführung'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm font-medium text-[#D7DCE5]">
                {item}
              </div>
            ))}
          </div>
          <a
            href={siteLinks.contact}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]"
          >
            Kostenlose Ersteinschätzung anfragen
            <ArrowRight className="h-4 w-4" />
          </a>
        </section>

        <section className="mt-8 rounded-[1.8rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium md:p-7">
          <h2 className="text-gold-glow text-2xl font-semibold text-white md:text-3xl">Welche Website passt zu deinem Unternehmen?</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-[#D7DCE5] md:text-base">
            Nicht jedes Unternehmen braucht dieselbe Website. STRUKTIVA entwickelt den passenden digitalen Auftritt – je nach Ziel, Branche und gewünschter Wirkung.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {websiteFormatsWithPrices.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/12 bg-white/[0.04] p-4">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-[#D8B45A]">{item.price} inklusive Mehrwertsteuer</p>
                <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">{item.text}</p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-[#D7DCE5] md:text-base">
            Nicht jede Website muss groß sein. Entscheidend ist, dass sie zum Unternehmen, zum Angebot und zum Ziel passt.
          </p>
          <p className="mt-2 text-sm leading-7 text-[#D7DCE5] md:text-base">
            STRUKTIVA entwickelt Webseiten nicht als einfache Online-Visitenkarte, sondern als klare digitale Struktur: verständlich, mobil optimiert, vertrauensbildend und auf Anfragen ausgerichtet.
          </p>

          <p className="mt-2 text-sm leading-7 text-[#94A3B8]">
            Alle Preise verstehen sich inklusive gesetzlicher Mehrwertsteuer. Der finale Preis richtet sich nach Umfang, Seitenanzahl, Funktionen, Textaufwand, Bildern und gewünschter technischer Umsetzung.
          </p>

          <a
            href={`mailto:${contactDetails.email}`}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]"
          >
            Website-Format unverbindlich besprechen
            <ArrowRight className="h-4 w-4" />
          </a>
        </section>
      </div>
    </main>
  )
}

const offerPriceInfo = {
  '/website-fuer-kleine-unternehmen': {
    main: 'ab 599 €',
    extras: ['Onepager ab 349 €', 'Mehrseitige Website ab 899 €', 'Website-Relaunch ab 499 €'],
  },
  '/landingpage-erstellen-lassen': {
    main: 'ab 299 €',
    extras: ['Angebotsseite ab 249 €', 'Vertrauensseite ab 299 €'],
  },
  '/google-sichtbarkeit-kleine-unternehmen': {
    main: 'ab 299 €',
    extras: ['Google-Unternehmensprofil Einrichtung ab 249 €', 'Lokale Sichtbarkeits-Grundstruktur ab 349 €', 'Website + Google-Grundstruktur ab 699 €'],
  },
  '/digitale-kundenfuehrung': {
    main: 'ab 299 €',
    extras: ['Kontaktformular-Integration ab 149 €', 'WhatsApp-Kontaktstruktur ab 149 €'],
  },
  '/whatsapp-kontaktstruktur': {
    main: 'ab 149 €',
    extras: ['Kundenführungsstruktur ab 299 €'],
  },
  '/social-media-struktur': {
    main: 'ab 249 €',
    extras: ['Content-Grundstruktur für kleine Unternehmen ab 299 €', 'Pinterest-/Instagram-Startstruktur ab 249 €'],
  },
  '/newsletter-einbindung': {
    main: 'ab 199 €',
    extras: ['Newsletter-Grundstruktur ab 299 €'],
  },
  '/unternehmens-apps': {
    main: 'ab 999 €',
    extras: ['App-Konzept / Demo-App ab 499 €', 'Betriebs-Dashboard ab 799 €', 'Kundenverwaltungs-System ab 899 €', 'Termin-/Planungsübersicht ab 699 €', 'Digitale Kundenkartei ab 799 €'],
  },
  '/betriebs-dashboards': {
    main: 'ab 799 €',
    extras: ['Kundenverwaltungs-System ab 899 €', 'Termin-/Planungsübersicht ab 699 €'],
  },
  '/angebotsarchitektur': {
    main: 'ab 299 €',
    extras: ['Digitale Strukturberatung ab 149 €'],
  },
  '/digitale-unternehmensstruktur': {
    main: 'ab 499 €',
    extras: ['Digitale Strukturberatung ab 149 €', 'Digitale Ersteinschätzung kostenlos'],
  },
}

function OfferDetailPage({ title, intro, points, pathname }) {
  const priceInfo = offerPriceInfo[pathname]
  return (
    <main className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-6xl">
        <section className="rounded-[2.1rem] border border-[#D8B45A]/22 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-7 shadow-premium md:p-10">
          <h1 className="text-3xl font-semibold text-white md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[#D7DCE5] md:text-lg">{intro}</p>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {points.map((item) => (
              <div key={item} className="rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm font-medium text-[#D7DCE5]">
                {item}
              </div>
            ))}
          </div>
          {priceInfo && (
            <div className="mt-7 rounded-2xl border border-[#D8B45A]/24 bg-white/[0.04] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B45A]/82">Preisorientierung</p>
              <p className="mt-2 text-lg font-semibold text-[#D8B45A]">{priceInfo.main} inklusive Mehrwertsteuer</p>
              {priceInfo.extras && (
                <div className="mt-3 grid gap-2 md:grid-cols-2">
                  {priceInfo.extras.map((item) => (
                    <p key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-[#D7DCE5]">{item}</p>
                  ))}
                </div>
              )}
              <p className="mt-3 text-sm leading-7 text-[#94A3B8]">
                Alle Preise verstehen sich inklusive gesetzlicher Mehrwertsteuer. Der finale Preis richtet sich nach Umfang, Seitenanzahl, Funktionen, Textaufwand, Bildern und gewünschter technischer Umsetzung.
              </p>
            </div>
          )}
          <a
            href={siteLinks.contact}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]"
          >
            Kostenlose Ersteinschätzung anfragen
            <ArrowRight className="h-4 w-4" />
          </a>
        </section>
      </div>
    </main>
  )
}

function LeistungenPage() {
  const allLeistungPrices = {
    'Website-Erstellung': 'ab 599 €',
    Landingpages: 'ab 299 €',
    'Google-Sichtbarkeit': 'ab 299 €',
    'Digitale Soforthilfe': 'ab 99 €',
    'Digitale Kundenführung': 'ab 299 €',
    'WhatsApp-Kontaktstruktur': 'ab 149 €',
    'Social-Media-Struktur': 'ab 249 €',
    'Newsletter-Einbindung': 'ab 199 €',
    'Unternehmens-Apps': 'ab 999 €',
    'Betriebs-Dashboards': 'ab 799 €',
    'Digitale Ordnungssysteme': 'ab 899 €',
    Angebotsarchitektur: 'ab 299 €',
    'Beratung & Ersteinschätzung': 'Kostenlos',
  }

  const allLeistungen = [
    ['Website-Erstellung', 'STRUKTIVA erstellt unterschiedliche Webseiten-Formate – von Onepager, Unternehmenswebsite und Landingpage bis zu mehrseitigen Premium-Webauftritten, Branchenwebsites, Angebotsseiten und Websites mit Newsletter-, QR-Code- oder Kontaktstruktur.'],
    ['Landingpages', 'Verkaufsstarke Seiten für Angebote, Aktionen und Anfragen.'],
    ['Google-Sichtbarkeit', 'Struktur für bessere Auffindbarkeit und lokale Präsenz.'],
    ['Digitale Soforthilfe', 'Wenn online schnell etwas funktionieren muss. Schnelle Unterstützung bei Website-Anpassungen, Landingpages, Google-Texten, Social-Media-Beiträgen, WhatsApp- und Bewertungstexten sowie digitalen Kleinkorrekturen.'],
    ['Digitale Kundenführung', 'Klare Wege von Interesse zur Anfrage.'],
    ['WhatsApp-Kontaktstruktur', 'Direkte Kontaktwege über Website, Google und Landingpage.'],
    ['Social-Media-Struktur', 'Inhalte und Kanäle mit klarer Richtung statt Zufall.'],
    ['Newsletter-Einbindung', 'Dezente Kundenbindung über professionelle Newsletter-Systeme.'],
    ['Unternehmens-Apps', 'Individuelle App- und Dashboard-Konzepte für kleine Unternehmen.'],
    ['Betriebs-Dashboards', 'Übersichten für Termine, Kunden, Zahlen und interne Abläufe.'],
    ['Digitale Ordnungssysteme', 'Tagesabschluss, Kassenstruktur und steuerberaterfreundliche Abläufe.'],
    ['Angebotsarchitektur', 'Leistungen klar darstellen, damit Kunden schneller verstehen.'],
    ['Beratung & Ersteinschätzung', 'Kostenlose Einschätzung für den passenden digitalen Aufbau.'],
  ]

  return (
    <main className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-[2.2rem] border border-[#D8B45A]/22 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-7 shadow-premium md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/82">Leistungsübersicht</p>
          <h1 className="mt-4 text-3xl font-semibold text-white md:text-5xl">Alle STRUKTIVA Leistungen im Überblick</h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[#D7DCE5] md:text-lg">
            Die Leistungen sind bewusst so aufgebaut, dass Sichtbarkeit, Kundenführung und digitale Abläufe als zusammenhängendes System funktionieren.
          </p>
        </section>

        <section className="mt-8 rounded-[1.8rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium md:p-7">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {allLeistungen.map(([title, text]) => (
              <article
                key={title}
                id={title === 'Digitale Soforthilfe' ? 'digitale-soforthilfe' : undefined}
                className="rounded-2xl border border-white/12 bg-white/[0.04] p-4"
              >
                <h2 className="text-base font-semibold text-white">{title}</h2>
                {allLeistungPrices[title] && (
                  <p className="mt-1 text-sm font-semibold text-[#D8B45A]">
                    {allLeistungPrices[title] === 'Kostenlos'
                      ? 'Kostenlos'
                      : `${allLeistungPrices[title]} inklusive Mehrwertsteuer`}
                  </p>
                )}
                <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-[#94A3B8]">
            Alle Preise verstehen sich inklusive gesetzlicher Mehrwertsteuer. Der finale Preis richtet sich nach Umfang, Seitenanzahl, Funktionen, Textaufwand, Bildern und gewünschter technischer Umsetzung.
          </p>
          <a
            href={siteLinks.contact}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]"
          >
            Kostenlose Ersteinschätzung anfragen
            <ArrowRight className="h-4 w-4" />
          </a>
        </section>
      </div>
    </main>
  )
}

function LegalSection({ title, children }) {
  return (
    <section className="rounded-[1.6rem] border border-white/14 bg-white/[0.05] p-5 shadow-premium md:p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-7 text-[#D7DCE5] md:text-base">{children}</div>
    </section>
  )
}

function LegalLayout({ title, intro, children }) {
  return (
    <main className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="rounded-[2.3rem] border border-white/14 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-7 shadow-premium md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/78">{brand.name}</p>
            <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">{title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#D7DCE5] md:text-lg">{intro}</p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6">{children}</div>
      </div>
    </main>
  )
}

function ContactBlock() {
  return (
    <>
      <p>{brand.name}</p>
      <p>Jessica Wacker</p>
      <p>{contactDetails.addressLine1}</p>
      <p>{contactDetails.addressLine2}</p>
      <p>{contactDetails.country}</p>
      <p>E-Mail: <a href={`mailto:${contactDetails.email}`} className="text-[#D8B45A]">{contactDetails.email}</a></p>
      <p>Telefon: <a href={contactDetails.phoneHref} className="text-[#D8B45A]">{contactDetails.phoneLabel}</a></p>
      <p>WhatsApp Business: <a href={contactDetails.whatsappHref} className="text-[#D8B45A]">{contactDetails.whatsappLabel}</a></p>
    </>
  )
}

function ImpressumPage() {
  return (
    <LegalLayout
      title="Impressum"
      intro="Rechtliche Angaben und Kontaktinformationen zu STRUKTIVA Unternehmensarchitektur."
    >
      <LegalSection title="Angaben gemäß § 5 DDG">
        <ContactBlock />
      </LegalSection>

      <LegalSection title="Vertreten durch">
        <p>Jessica Wacker</p>
      </LegalSection>

      <LegalSection title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
        <p>Jessica Wacker</p>
        <p>{contactDetails.addressLine1}</p>
        <p>{contactDetails.addressLine2}</p>
        <p>{contactDetails.country}</p>
      </LegalSection>

      <LegalSection title="Haftung für Inhalte">
        <p>Die Inhalte dieser Webseite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.</p>
      </LegalSection>

      <LegalSection title="Haftung für Links">
        <p>Diese Webseite kann Links zu externen Webseiten Dritter enthalten. Auf deren Inhalte habe ich keinen Einfluss. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.</p>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <p>Die auf dieser Webseite erstellten Inhalte, Texte, Grafiken und Designs unterliegen dem deutschen Urheberrecht. Eine Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung.</p>
      </LegalSection>
    </LegalLayout>
  )
}

function DatenschutzPage() {
  return (
    <LegalLayout
      title="Datenschutzerklärung"
      intro="Diese Datenschutzerklärung informiert darüber, welche personenbezogenen Daten beim Besuch dieser Webseite und bei einer Kontaktaufnahme verarbeitet werden."
    >
      <LegalSection title="1. Verantwortlicher">
        <ContactBlock />
      </LegalSection>

      <LegalSection title="2. Hosting der Webseite">
        <p>Diese Webseite wird über Vercel bereitgestellt.</p>
        <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
        <p>Beim Aufruf der Webseite können durch den Hosting-Anbieter technische Daten verarbeitet werden. Dazu gehören insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp und Browserversion, verwendetes Betriebssystem, aufgerufene Seiten, Referrer-URL und technische Logdaten.</p>
        <p>Die Verarbeitung erfolgt, um die Webseite sicher, stabil und zuverlässig bereitzustellen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
      </LegalSection>

      <LegalSection title="3. Kontakt per E-Mail, Telefon und WhatsApp Business">
        <p>Wenn du per E-Mail, Telefon oder WhatsApp Business Kontakt aufnimmst, werden die von dir übermittelten Daten verarbeitet, um deine Anfrage zu beantworten.</p>
        <p>Dazu können insbesondere Name, E-Mail-Adresse, Telefonnummer, Nachrichteninhalte und weitere freiwillig übermittelte Angaben gehören.</p>
        <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage mit einem möglichen Vertrag oder einer Leistung zusammenhängt. In anderen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
      </LegalSection>

      <LegalSection title="4. Cookies und Tracking">
        <p>Diese Webseite verwendet derzeit keine eigenen Analyse- oder Marketing-Cookies.</p>
      </LegalSection>

      <LegalSection title="5. Speicherdauer">
        <p>Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.</p>
      </LegalSection>

      <LegalSection title="6. Deine Rechte">
        <p>Du hast im Rahmen der gesetzlichen Vorgaben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch gegen die Verarbeitung und Beschwerde bei einer Datenschutzaufsichtsbehörde.</p>
      </LegalSection>

      <LegalSection title="7. Stand">
        <p>Stand: Mai 2026</p>
      </LegalSection>
    </LegalLayout>
  )
}

function WiderrufPage() {
  return (
    <LegalLayout
      title="Widerrufsbelehrung"
      intro="Hinweise zum gesetzlichen Widerrufsrecht für Verbraucher und zum Muster-Widerrufsformular."
    >
      <LegalSection title="Widerrufsrecht für Verbraucher">
        <p>Verbraucher haben grundsätzlich das Recht, binnen vierzehn Tagen ohne Angabe von Gründen einen Vertrag zu widerrufen, sofern ein gesetzliches Widerrufsrecht besteht.</p>
        <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.</p>
        <p>Um dein Widerrufsrecht auszuüben, musst du mich mittels einer eindeutigen Erklärung über deinen Entschluss informieren, diesen Vertrag zu widerrufen.</p>
      </LegalSection>

      <LegalSection title="Kontakt für Widerruf">
        <ContactBlock />
      </LegalSection>

      <LegalSection title="Folgen des Widerrufs">
        <p>Wenn du diesen Vertrag widerrufst, werden alle Zahlungen, die ich von dir erhalten habe, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückgezahlt, an dem die Mitteilung über deinen Widerruf eingegangen ist.</p>
        <p>Für diese Rückzahlung wird dasselbe Zahlungsmittel verwendet, das du bei der ursprünglichen Zahlung eingesetzt hast, sofern nicht ausdrücklich etwas anderes vereinbart wurde.</p>
      </LegalSection>

      <LegalSection title="Widerruf bei Dienstleistungen und digitalen Inhalten">
        <p>Hast du verlangt, dass die Dienstleistung bereits während der Widerrufsfrist beginnen soll, so ist für bereits erbrachte Leistungen ein angemessener Betrag zu zahlen, sofern dies gesetzlich vorgesehen ist.</p>
        <p>Bei digitalen Inhalten oder digitalen Leistungen kann das Widerrufsrecht unter bestimmten gesetzlichen Voraussetzungen vorzeitig erlöschen, wenn mit der Ausführung begonnen wurde und der Verbraucher ausdrücklich zugestimmt hat, dass mit der Ausführung vor Ablauf der Widerrufsfrist begonnen wird.</p>
      </LegalSection>

      <LegalSection title="Muster-Widerrufsformular">
        <p>Wenn du den Vertrag widerrufen möchtest, kannst du dieses Formular ausfüllen und per E-Mail senden.</p>
        <p>An:</p>
        <p>{brand.name}</p>
        <p>Jessica Wacker</p>
        <p>E-Mail: {contactDetails.email}</p>
        <p>Telefon: {contactDetails.phoneLabel}</p>
        <p className="pt-2">Hiermit widerrufe ich den von mir abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung:</p>
        <p>__________________________________________________</p>
        <p>Bestellt am:</p>
        <p>__________________________________________________</p>
        <p>Name des Verbrauchers:</p>
        <p>__________________________________________________</p>
        <p>Anschrift des Verbrauchers:</p>
        <p>__________________________________________________</p>
        <p>E-Mail-Adresse:</p>
        <p>__________________________________________________</p>
        <p>Datum:</p>
        <p>__________________________________________________</p>
        <p>Unterschrift nur bei Mitteilung auf Papier:</p>
        <p>__________________________________________________</p>
      </LegalSection>
    </LegalLayout>
  )
}

function ContactPage() {
  return (
    <LegalLayout
      title="Kontakt"
      intro="Du möchtest dein Unternehmen sichtbarer, professioneller oder digital besser organisiert aufstellen? Schreibe kurz, wobei du Unterstützung brauchst."
    >
      <LegalSection title="Kontakt zu STRUKTIVA Unternehmensarchitektur">
        <p>Mögliche Themen:</p>
        <p>- Professionelle Webseite</p>
        <p>- Landingpage</p>
        <p>- Google Ads</p>
        <p>- kostenlose App-Ersteinschätzung</p>
        <p>- Unternehmens-App</p>
        <p>- monatliche Betreuung</p>
      </LegalSection>

      <LegalSection title="Persönlich geführt">
        <div className="grid gap-5 md:grid-cols-[auto,1fr] md:items-center">
          <figure className="rounded-2xl border border-[#D8B45A]/30 bg-white/[0.03] p-3">
            <div className="flex items-center gap-3">
              <div className="h-24 w-24 overflow-hidden rounded-full border border-[#D8B45A]/45 shadow-[0_0_22px_rgba(212,175,55,0.12)]">
                <img
                  src={contactDetails.founderSvenImage}
                  alt="Sven Matzke"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-[50%_18%]"
                />
              </div>
              <div className="h-24 w-24 overflow-hidden rounded-full border border-[#D8B45A]/45 shadow-[0_0_22px_rgba(212,175,55,0.12)]">
                <img
                  src={contactDetails.founderJessicaImage}
                  alt="Jessica Wacker"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full scale-160 object-cover object-[52%_84%]"
                />
              </div>
            </div>
            <figcaption className="mt-3 text-center">
              <p className="text-sm font-semibold text-white">Sven Matzke & Jessica Wacker</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#D8B45A]/85">Gründer von STRUKTIVA Unternehmensarchitektur</p>
            </figcaption>
          </figure>
          <div className="space-y-2">
            <p className="text-base font-semibold text-white">STRUKTIVA Unternehmensarchitektur wird von Jessica Wacker und Sven Matzke geführt.</p>
            <p>
              Gemeinsam entwickeln wir digitale Strukturen für kleine Unternehmen, Selbstständige und lokale Dienstleister – mit klaren Websites, Google-Sichtbarkeit, Kontaktwegen und digitalen Systemen.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="Kontaktmöglichkeiten">
        <p>E-Mail: <a href={`mailto:${contactDetails.email}`} className="text-[#D8B45A]">{contactDetails.email}</a></p>
        <p>Telefon: <a href={contactDetails.phoneHref} className="text-[#D8B45A]">{contactDetails.phoneLabel}</a></p>
        <p>WhatsApp Business: <a href={contactDetails.whatsappHref} className="text-[#D8B45A]">{contactDetails.whatsappLabel}</a></p>
        <div className="pt-3">
          <a
            href={contactDetails.whatsappHref}
            className="inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]"
          >
            Per WhatsApp Business kontaktieren
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </LegalSection>

      <LegalSection title="Adresse">
        <p>{brand.name}</p>
        <p>Jessica Wacker</p>
        <p>{contactDetails.addressLine1}</p>
        <p>{contactDetails.addressLine2}</p>
      </LegalSection>

      <LegalSection title="Hinweis">
        <p>Bitte beschreibe kurz dein Unternehmen und wobei du Unterstützung brauchst. Danach kann ich besser einschätzen, welches Paket oder welche Lösung sinnvoll ist.</p>
      </LegalSection>
    </LegalLayout>
  )
}

function DemoSectionCard({ title, children, className = '' }) {
  return (
    <section className={`rounded-[1.6rem] border p-5 shadow-premium md:p-6 ${className}`}>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-7 md:text-base">{children}</div>
    </section>
  )
}

function DemoLead({ title, subtitle, image, imageAlt, theme }) {
  return (
    <section className={`overflow-hidden rounded-[2.1rem] border shadow-premium ${theme.heroWrap}`}>
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-6 md:p-8 lg:p-10">
          <p className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] ${theme.badge}`}>
            Demo-Beispiel – keine echte Kundenseite
          </p>
          <p className={`mt-3 max-w-2xl text-sm leading-7 ${theme.text}`}>
            Demo- und Musterprojekt von STRUKTIVA. Dieses Beispiel zeigt, wie eine digitale Struktur für diese Branche aussehen kann.
          </p>
          <h1 className={`mt-5 text-3xl font-semibold leading-tight md:text-5xl ${theme.title}`}>{title}</h1>
          <p className={`mt-4 max-w-2xl text-base leading-8 md:text-lg ${theme.text}`}>{subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={siteLinks.contact} className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${theme.primaryBtn}`}>
              {theme.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={siteLinks.demos} className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition ${theme.secondaryBtn}`}>
              Zur Demo-Übersicht
            </a>
          </div>
        </div>
        <div className="relative min-h-[280px]">
          <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
          <div className={`absolute inset-0 ${theme.heroOverlay}`} />
        </div>
      </div>
    </section>
  )
}

function DemoForm({ fields, cta, theme }) {
  return (
    <div className={`rounded-[1.7rem] border p-5 shadow-premium md:p-6 ${theme.formWrap}`}>
      <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${theme.kicker}`}>Anfragebereich (Demo)</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {fields.map((field) => (
          <div key={field} className={`${field === 'Nachricht' ? 'md:col-span-2' : ''}`}>
            <label className={`mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] ${theme.label}`}>{field}</label>
            {field === 'Nachricht' ? (
              <textarea rows={4} className={`w-full rounded-xl border px-3 py-2.5 text-sm outline-none ${theme.input}`} />
            ) : (
              <input className={`w-full rounded-xl border px-3 py-2.5 text-sm outline-none ${theme.input}`} />
            )}
          </div>
        ))}
      </div>
      <button type="button" className={`mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${theme.primaryBtn}`}>
        {cta}
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  )
}

function DemoFinalSection() {
  return (
    <section className="rounded-[1.9rem] border border-[#D8B45A]/22 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-6 shadow-premium">
      <h2 className="text-2xl font-semibold text-white">So könnte dein Unternehmen digital auftreten.</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-[#D7DCE5] md:text-base">
        Wenn du eine ähnliche Struktur für dein Unternehmen möchtest, erstellt STRUKTIVA einen klaren digitalen Aufbau passend zu deiner Branche, deinem Angebot und deinen Kunden.
      </p>
      <a href={siteLinks.contact} className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
        Kostenlose Ersteinschätzung anfragen
        <ArrowRight className="h-4 w-4" />
      </a>
    </section>
  )
}

function DemoHandwerkerPage() {
  const theme = {
    heroWrap: 'border-[#f59e0b]/30 bg-[#111827]',
    heroOverlay: 'bg-gradient-to-t from-[#111827]/70 via-[#111827]/15 to-transparent',
    badge: 'border-[#f59e0b]/35 bg-[#f59e0b]/12 text-[#fbbf24]',
    title: 'text-white',
    text: 'text-gray-200',
    kicker: 'text-[#fbbf24]',
    label: 'text-gray-400',
    input: 'border-gray-600/60 bg-gray-800/60 text-white',
    formWrap: 'border-gray-600/50 bg-gray-900/60',
    primaryBtn: 'bg-[#f59e0b] text-white hover:bg-[#d97706]',
    secondaryBtn: 'border-[#f59e0b]/30 text-[#fbbf24] hover:bg-[#f59e0b] hover:text-white',
    cta: 'Projekt anfragen',
  }

  return (
    <main className="bg-[#0f172a] px-5 pb-16 pt-10 text-white lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-7xl space-y-6">
        <DemoLead
          title="Mehr Anfragen für deinen Handwerksbetrieb – mit einem klaren digitalen Auftritt."
          subtitle="Diese Demo zeigt, wie ein regionaler Handwerksbetrieb Leistungen, Vertrauen und Kontaktmöglichkeiten professionell präsentiert."
          image={demoImageConfigs.handwerker.hero}
          imageAlt="Handwerker arbeitet auf einer Baustelle"
          theme={theme}
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <DemoSectionCard title="Leistungsübersicht" className="border-gray-600/50 bg-gray-900/60 text-gray-100">
            <p>- Renovierung & Sanierung</p><p>- Reparaturservice</p><p>- Wartung & Instandhaltung</p><p>- individuelle Projektanfragen</p><p>- Notfall- oder Schnellservice</p>
          </DemoSectionCard>
          <DemoSectionCard title="Warum Kunden Vertrauen brauchen" className="border-gray-600/50 bg-gray-900/60 text-gray-100">
            <p>Kunden entscheiden im Handwerk schnell nach Vertrauen, Klarheit und Erreichbarkeit. Diese Struktur zeigt Leistungen eindeutig und führt Interessenten direkt zur Anfrage.</p>
          </DemoSectionCard>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <img src={demoImageConfigs.handwerker.sectionA} alt="Baustelle mit professioneller Renovierung" loading="lazy" decoding="async" className="h-56 w-full rounded-[1.4rem] object-cover" />
          <img src={demoImageConfigs.handwerker.sectionB} alt="Werkzeug und Handwerksdetails in moderner Umgebung" loading="lazy" decoding="async" className="h-56 w-full rounded-[1.4rem] object-cover" />
        </div>
        <DemoSectionCard title="Vorher-Nachher-Struktur (Demo-Bereich)" className="border-gray-600/50 bg-gray-900/60 text-gray-100">
          <p>Vorher: unklare Leistungsdarstellung, kaum Vertrauen, unsaubere Kontaktführung.</p>
          <p>Nachher: klare Leistungsblöcke, sichtbare Kontaktwege, strukturierte Anfrageführung.</p>
        </DemoSectionCard>
        <DemoSectionCard title="Ablauf in 3 Schritten" className="border-gray-600/50 bg-gray-900/60 text-gray-100">
          <p>1. Anfrage und Leistungswunsch</p><p>2. Kurze Einschätzung und passender Vorschlag</p><p>3. Umsetzung mit klaren Kontaktwegen</p>
          <a href={siteLinks.contact} className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#f59e0b] px-5 py-2.5 text-sm font-semibold text-white">Projekt anfragen<ArrowRight className="h-4 w-4" /></a>
        </DemoSectionCard>
        <DemoForm fields={['Name', 'Telefonnummer', 'E-Mail', 'Gewünschte Leistung', 'Nachricht']} cta="Projekt anfragen" theme={theme} />
        <DemoSectionCard title="Bewertungsbereich (Beispielstruktur)" className="border-gray-600/50 bg-gray-900/60 text-gray-100">
          <p>Hier kann ein Bewertungsbereich als strukturierte Vertrauensfläche integriert werden – klar als Referenz-Modul vorbereitet, ohne erfundene Kundenstimmen.</p>
        </DemoSectionCard>
        <DemoSectionCard title="Newsletter-Einbindung" className="border-gray-600/50 bg-gray-900/60 text-gray-100">
          <p>Auf Wunsch kann ein Newsletter oder Infoverteiler eingebunden werden, z. B. für saisonale Angebote, Wartungserinnerungen oder Kundeninformationen.</p>
        </DemoSectionCard>
        <DemoFinalSection />
      </div>
    </main>
  )
}

function DemoBeautyPage() {
  const theme = {
    heroWrap: 'border-[#e9c9ac]/70 bg-[#fdf4ec]',
    heroOverlay: 'bg-gradient-to-t from-[#3b2f2f]/30 via-transparent to-transparent',
    badge: 'border-[#d4a574]/45 bg-white/80 text-[#9b6d3e]',
    title: 'text-[#3b2f2f]',
    text: 'text-[#5a4740]',
    kicker: 'text-[#9b6d3e]',
    label: 'text-[#8b6f65]',
    input: 'border-[#e4cabb] bg-white text-[#3b2f2f]',
    formWrap: 'border-[#e4cabb] bg-[#fff8f3]',
    primaryBtn: 'bg-[#b8894b] text-white hover:bg-[#a5743d]',
    secondaryBtn: 'border-[#d4a574]/60 text-[#9b6d3e] hover:bg-[#b8894b] hover:text-white',
    cta: 'Termin anfragen',
  }

  return (
    <main className="bg-[linear-gradient(180deg,#fffaf6,#fdeee4)] px-5 pb-16 pt-10 text-[#3b2f2f] lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-7xl space-y-6">
        <DemoLead
          title="Ein Beauty-Auftritt, der hochwertig wirkt und Buchungen leichter macht."
          subtitle="Diese Demo zeigt, wie ein Kosmetikstudio oder Beauty-Dienstleister Leistungen elegant präsentiert und Kundinnen direkt zur Anfrage führt."
          image={demoImageConfigs.beauty.hero}
          imageAlt="Kosmetikbehandlung in einem eleganten Studio"
          theme={theme}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <DemoSectionCard title="Beauty-Leistungen" className="border-[#e4cabb] bg-white text-[#3b2f2f]">
            <p>- Gesichtsbehandlungen</p><p>- Hautpflege-Beratung</p><p>- Augenbrauen & Wimpern</p><p>- Make-up / Styling</p><p>- Wellness- oder Verwöhnpakete</p>
          </DemoSectionCard>
          <DemoSectionCard title="Angebotskarten" className="border-[#e4cabb] bg-white text-[#3b2f2f]">
            <p>- Kennenlernbehandlung</p><p>- Premium-Behandlung</p><p>- Monatsangebot</p><p>- Gutscheinangebot</p>
            <a href={siteLinks.contact} className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#b8894b] px-5 py-2.5 text-sm font-semibold text-white">Termin anfragen<ArrowRight className="h-4 w-4" /></a>
          </DemoSectionCard>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <img src={demoImageConfigs.beauty.sectionA} alt="Elegante Pflegeprodukte in Beauty-Atmosphäre" loading="lazy" decoding="async" className="h-56 w-full rounded-[1.4rem] object-cover" />
          <img src={demoImageConfigs.beauty.sectionB} alt="Ruhige Wellness-Atmosphäre für Kosmetikbehandlungen" loading="lazy" decoding="async" className="h-56 w-full rounded-[1.4rem] object-cover" />
        </div>
        <DemoSectionCard title="Warum Optik und Vertrauen entscheidend sind" className="border-[#e4cabb] bg-white text-[#3b2f2f]">
          <p>Beauty-Kundinnen achten auf Stil, Klarheit und Gefühl. Eine hochwertige Seite macht Leistungen sofort verständlich und führt direkt zu Buchung oder Anfrage.</p>
        </DemoSectionCard>
        <DemoSectionCard title="Öffnungszeiten & Kontakt" className="border-[#e4cabb] bg-white text-[#3b2f2f]">
          <p>Mo–Fr 09:00–18:00 · Sa 09:00–14:00</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a href={contactDetails.whatsappHref} className="rounded-full border border-[#d4a574] px-4 py-2 text-sm font-semibold text-[#9b6d3e]">WhatsApp</a>
            <a href={contactDetails.phoneHref} className="rounded-full border border-[#d4a574] px-4 py-2 text-sm font-semibold text-[#9b6d3e]">Telefon</a>
            <a href={siteLinks.contact} className="rounded-full bg-[#b8894b] px-4 py-2 text-sm font-semibold text-white">Buchung anfragen</a>
          </div>
        </DemoSectionCard>
        <DemoForm fields={['Name', 'Telefonnummer', 'E-Mail', 'Gewünschte Behandlung', 'Nachricht']} cta="Termin anfragen" theme={theme} />
        <DemoSectionCard title="Newsletter-Einbindung" className="border-[#e4cabb] bg-white text-[#3b2f2f]">
          <p>Auf Wunsch kann ein kleiner Newsletter-Bereich integriert werden, z. B. für Aktionen, Pflege-Tipps oder freie Termine.</p>
        </DemoSectionCard>
        <DemoFinalSection />
      </div>
    </main>
  )
}

function DemoDienstleisterPage() {
  const theme = {
    heroWrap: 'border-[#60a5fa]/35 bg-[#0b1f3a]',
    heroOverlay: 'bg-gradient-to-t from-[#07111f]/65 via-transparent to-transparent',
    badge: 'border-[#60a5fa]/35 bg-[#1e3a5f]/60 text-[#bfdbfe]',
    title: 'text-white',
    text: 'text-[#dbe7ff]',
    kicker: 'text-[#93c5fd]',
    label: 'text-[#94a3b8]',
    input: 'border-[#334155] bg-[#0f172a] text-white',
    formWrap: 'border-[#334155] bg-[#0b1f3a]',
    primaryBtn: 'bg-[#2563eb] text-white hover:bg-[#1d4ed8]',
    secondaryBtn: 'border-[#60a5fa]/35 text-[#bfdbfe] hover:bg-[#2563eb] hover:text-white',
    cta: 'Unverbindlich anfragen',
  }

  return (
    <main className="bg-[linear-gradient(180deg,#081427,#0b1f3a)] px-5 pb-16 pt-10 text-white lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-7xl space-y-6">
        <DemoLead
          title="Zeige klar, was du anbietest – und mache Interessenten zu Anfragen."
          subtitle="Diese Demo zeigt, wie Selbstständige, Berater und lokale Dienstleister ihr Angebot verständlich strukturieren und Vertrauen aufbauen."
          image={demoImageConfigs.dienstleister.hero}
          imageAlt="Beratungsgespräch in professionellem Büro"
          theme={theme}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <DemoSectionCard title="Angebot klar erklären" className="border-[#334155] bg-[#0b1f3a] text-[#dbe7ff]">
            <p>- Erstgespräch</p><p>- Standard-Leistung</p><p>- Premium-Service</p><p>- laufende Betreuung</p>
          </DemoSectionCard>
          <DemoSectionCard title="Geeignet für" className="border-[#334155] bg-[#0b1f3a] text-[#dbe7ff]">
            <p>Reinigungsfirmen · Fahrschulen · Berater · Coaches · lokale Services · Einzelunternehmer · kleine Dienstleistungsbetriebe</p>
          </DemoSectionCard>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <img src={demoImageConfigs.dienstleister.sectionA} alt="Team bei strategischer Planung" loading="lazy" decoding="async" className="h-56 w-full rounded-[1.4rem] object-cover" />
          <img src={demoImageConfigs.dienstleister.sectionB} alt="Laptop und Geschäftsunterlagen im Beratungskontext" loading="lazy" decoding="async" className="h-56 w-full rounded-[1.4rem] object-cover" />
        </div>
        <DemoSectionCard title="Problem-Lösung-Struktur" className="border-[#334155] bg-[#0b1f3a] text-[#dbe7ff]">
          <p>Viele Dienstleister erklären online nicht klar genug, für wen ihr Angebot gedacht ist und welchen Nutzen es bringt. Diese Demo zeigt, wie Besucher Schritt für Schritt zur Anfrage geführt werden.</p>
        </DemoSectionCard>
        <DemoSectionCard title="Ablauf in 3 Schritten" className="border-[#334155] bg-[#0b1f3a] text-[#dbe7ff]">
          <p>1. Angebot und Zielgruppe präzisieren</p><p>2. Strukturierte Leistungsseite aufbauen</p><p>3. Anfragewege klar und professionell führen</p>
          <a href={siteLinks.contact} className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white">Unverbindlich anfragen<ArrowRight className="h-4 w-4" /></a>
        </DemoSectionCard>
        <DemoSectionCard title="FAQ & Bewertungsbereich (Beispielstruktur)" className="border-[#334155] bg-[#0b1f3a] text-[#dbe7ff]">
          <p>FAQ-Baustein für typische Fragen, dazu ein strukturierter Google-Bewertungsbereich als Vertrauensfläche – klar als Demo dargestellt, ohne erfundene Bewertungen.</p>
        </DemoSectionCard>
        <DemoForm fields={['Name', 'Unternehmen', 'E-Mail', 'Telefonnummer', 'Gewünschte Leistung', 'Nachricht']} cta="Unverbindlich anfragen" theme={theme} />
        <DemoSectionCard title="Newsletter-Einbindung" className="border-[#334155] bg-[#0b1f3a] text-[#dbe7ff]">
          <p>Ein Newsletter kann eingebunden werden, um Interessenten regelmäßig über Angebote, freie Termine oder neue Leistungen zu informieren.</p>
        </DemoSectionCard>
        <DemoFinalSection />
      </div>
    </main>
  )
}

function Page() {
  const pathname = useCurrentPath()
  useDocumentTitleSafe(pathname)
  const isDemoRoute = pathname.startsWith('/demos/')
  const wissenArticle = wissenArticles.find((article) => article.href === pathname)
  const homeSectionByPath = {
    '/preise': 'preise',
    '/demos': 'demos',
  }

  useEffect(() => {
    const targetId = homeSectionByPath[pathname]
    if (!targetId) return
    const scrollToSection = () => {
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    const timer = window.setTimeout(scrollToSection, 0)
    return () => window.clearTimeout(timer)
  }, [pathname])

  let content = <HomePage />

  if (pathname === '/impressum') {
    content = <ImpressumPage />
  } else if (pathname === '/datenschutz') {
    content = <DatenschutzPage />
  } else if (pathname === '/widerruf') {
    content = <WiderrufPage />
  } else if (pathname === '/kontakt') {
    content = <ContactPage />
  } else if (pathname === '/webseiten') {
    content = <WebseitenPage />
  } else if (pathname === '/landingpages') {
    content = <LandingpagesPage />
  } else if (pathname === '/apps') {
    content = <AppsPage />
  } else if (pathname === '/google-ads') {
    content = <GoogleAdsPage />
  } else if (pathname === '/bewertungs-qr-code') {
    content = <BewertungsQrCodePage />
  } else if (pathname === '/digitale-soforthilfe') {
    content = <DigitaleSoforthilfePage />
  } else if (pathname === '/digitale-ordnungssysteme') {
    content = <DigitaleOrdnungssystemePage />
  } else if (pathname === '/website-fuer-kleine-unternehmen') {
    content = <WebsiteFuerKleineUnternehmenPage />
  } else if (pathname === '/leistungen') {
    content = <LeistungenPage />
  } else if (pathname === '/wissen') {
    content = <WissenOverviewPage />
  } else if (wissenArticle) {
    content = <WissenArticlePage article={wissenArticle} />
  } else if (offerPageContent[pathname]) {
    const page = offerPageContent[pathname]
    content = <OfferDetailPage title={page.title} intro={page.intro} points={page.points} pathname={pathname} />
  } else if (pathname === '/demo-handwerker') {
    content = <DemoHandwerkerPage />
  } else if (pathname === '/demo-beauty') {
    content = <DemoBeautyPage />
  } else if (pathname === '/demo-dienstleister') {
    content = <DemoDienstleisterPage />
  } else if (pathname === '/demos/friseursalon') {
    content = <DemoFriseursalonPage />
  } else if (pathname === '/demos/handwerker') {
    content = <DemoHandwerkerV2Page />
  } else if (pathname === '/demos/kosmetikstudio') {
    content = <DemoKosmetikstudioPage />
  } else if (pathname === '/demos/bewertungsstruktur') {
    content = <DemoBewertungsstrukturPage />
  } else if (pathname === '/demos/dashboard') {
    content = <DemoDashboardPage />
  } else if (pathname === '/branchen/friseursalons') {
    content = <BrancheFriseursalonsPage />
  } else if (pathname === '/branchen/handwerker') {
    content = <BrancheHandwerkerPage />
  } else if (pathname === '/branchen/kosmetikstudios') {
    content = <BrancheKosmetikstudiosPage />
  } else if (pathname === '/branchen/lokale-dienstleister') {
    content = <BrancheLokaleDienstleisterPage />
  } else if (pathname === '/branchen/beratung') {
    content = <BrancheBeratungPage />
  } else if (pathname === '/landingpage-digitale-struktur') {
    content = <LandingpageDigitaleStrukturPageV2 />
  }

  return (
    <div className="min-h-screen text-white">
      {!isDemoRoute ? <Header pathname={pathname} /> : null}
      {content}
      {!isDemoRoute ? <Footer /> : null}
      <FloatingWhatsAppButton />
    </div>
  )
}

function DemoPageDisclaimer() {
  return (
    <section className="rounded-[1.5rem] border border-white/14 bg-white/[0.04] p-5 text-sm leading-7 text-[#D7DCE5]">
      Diese Demo zeigt beispielhaft, wie STRUKTIVA digitale Struktur für diese Branche aufbauen kann. Inhalte, Farben und Funktionen können individuell angepasst werden.
    </section>
  )
}

function DemoBackgroundLayer({ image, overlay = 'from-[#07111F]/88 via-[#07111F]/68 to-[#050A12]/90' }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover opacity-20"
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${overlay}`} />
    </div>
  )
}

function DemoContactCTA({ text }) {
  return (
    <section className="rounded-[1.8rem] border border-[#D8B45A]/24 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-6 shadow-premium">
      <h2 className="text-2xl font-semibold text-white">Eigene digitale Struktur anfragen</h2>
      <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">{text}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a href={siteLinks.contact} className="inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-5 py-2.5 text-sm font-semibold text-white">
          Eigene digitale Struktur anfragen
          <ArrowRight className="h-4 w-4" />
        </a>
        <a href={`mailto:${contactDetails.email}`} className="rounded-full border border-white/14 px-4 py-2 text-sm font-semibold text-[#D7DCE5]">
          {contactDetails.email}
        </a>
        <a href={contactDetails.phoneHref} className="rounded-full border border-white/14 px-4 py-2 text-sm font-semibold text-[#D7DCE5]">
          {contactDetails.phoneLabel}
        </a>
      </div>
    </section>
  )
}

function DemoMiniNav({ label, links, theme = 'dark' }) {
  const tone =
    theme === 'light'
      ? 'border-[#d4a574]/45 bg-white/85 text-[#5a4740]'
      : 'border-white/14 bg-white/[0.04] text-[#D7DCE5]'

  return (
    <nav className={`rounded-2xl border px-4 py-3 ${tone}`}>
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
        <span className={theme === 'light' ? 'text-[#b8894b]' : 'text-[#D8B45A]'}>{label}</span>
        {links.map(([title, href]) => (
          <a key={title} href={href} className="rounded-full border border-current/20 px-3 py-1.5 normal-case tracking-normal transition hover:opacity-80">
            {title}
          </a>
        ))}
      </div>
    </nav>
  )
}

function DemoSiteBar({ name, primaryCta, theme = 'dark' }) {
  const wrap =
    theme === 'light'
      ? 'border-[#d4a574]/45 bg-white/90 text-[#5a4740]'
      : 'border-white/14 bg-white/[0.05] text-[#D7DCE5]'

  return (
    <div className={`rounded-2xl border px-4 py-3 ${wrap}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em]">Beispielhafte Demo von STRUKTIVA</p>
          <p className="text-base font-semibold">{name}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a href={siteLinks.home} className="rounded-full border border-current/25 px-3 py-1.5 text-xs font-semibold">Zur Startseite</a>
          <a href={siteLinks.contact} className="rounded-full bg-[#D8B45A] px-4 py-2 text-xs font-semibold text-white">{primaryCta}</a>
        </div>
      </div>
    </div>
  )
}

function DemoWebsiteHeader({ brandName, links, theme = 'dark' }) {
  const tone =
    theme === 'light'
      ? 'border-[#d4a574]/55 bg-[#fffaf6]/92 text-[#5a4740]'
      : 'border-white/14 bg-[#07111F]/62 text-[#D7DCE5]'

  return (
    <header className={`rounded-2xl border px-4 py-3 backdrop-blur-lg md:px-5 ${tone}`}>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <p className="text-lg font-semibold">{brandName}</p>
          <span className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${theme === 'light' ? 'border-[#d4a574]/40 text-[#9b6d3e]' : 'border-[#D8B45A]/30 text-[#D8B45A]'}`}>
            Demo von STRUKTIVA
          </span>
        </div>
        <nav className="flex flex-wrap items-center gap-2 text-sm">
          {links.map(([title, href]) => (
            <a key={title} href={href} className={`rounded-full px-3 py-1.5 transition ${theme === 'light' ? 'hover:bg-[#f2e2d8]' : 'hover:bg-white/10'}`}>
              {title}
            </a>
          ))}
          <a href={siteLinks.home} className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] ${theme === 'light' ? 'border-[#d4a574]/45 text-[#9b6d3e]' : 'border-white/20 text-[#D8B45A]'}`}>
            Zurück zu STRUKTIVA
          </a>
        </nav>
      </div>
    </header>
  )
}

function DemoFriseursalonPage() {
  return (
    <main className="relative bg-[linear-gradient(180deg,#2a1f17,#1d1611)] px-5 pb-16 pt-6 text-white lg:px-8 lg:pb-24 lg:pt-8">
      <DemoBackgroundLayer image={demoV2Images.friseurHero} overlay="from-[#f0d9b3]/18 via-[#7a5b32]/20 to-[#120d09]/88" />
      <div className="mx-auto max-w-7xl space-y-6">
        <DemoWebsiteHeader
          brandName="Salon Muster"
          links={[
            ['Leistungen', '#salon-leistungen'],
            ['Atmosphäre', '#salon-vorteile'],
            ['Team', '#salon-team'],
            ['Bewertungen', '#salon-reviews'],
            ['Termin', '#salon-ablauf'],
          ]}
        />
        <section className="rounded-[2rem] bg-[linear-gradient(160deg,rgba(63,46,30,0.7),rgba(27,21,15,0.72))] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.26)] md:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B45A]">Beispielhafte Demo von STRUKTIVA</p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Moderne Salon-Website mit klarer Terminführung</h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[#E7DDD0]">Leistungen, Atmosphäre, Bewertungen und WhatsApp-Anfrage sind klar verbunden. Diese Musterseite zeigt, wie ein Salon online Vertrauen und Terminanfragen zusammenführt.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={siteLinks.contact} className="rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white">Salon-Struktur anfragen</a>
            <a href="#salon-leistungen" className="rounded-full border border-[#D8B45A]/35 px-6 py-3 text-sm font-semibold text-[#F2D98B]">Leistungen ansehen</a>
            <a href={siteLinks.home} className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white">Zur Startseite</a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {['Persönliche Beratung', 'Klare Leistungen', 'Bewertungen sichtbar', 'WhatsApp-Termin'].map((item) => (
              <span key={item} className="rounded-full border border-[#E4C57A]/35 bg-black/20 px-3 py-1.5 text-xs text-[#F3DEAF]">{item}</span>
            ))}
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#D8B45A]/22">
            <div className="relative h-64 md:h-80">
              <img src={demoV2Images.friseurHero} alt="Beispielbild für modernen Friseursalon" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <img src={demoV2Images.friseurA} alt="Beispielhafte Haarpflege und Styling im Salon" loading="lazy" className="h-44 w-full rounded-2xl object-cover" />
          <img src={demoV2Images.friseurB} alt="Beispielbild für Friseurwerkzeuge und Salonatmosphäre" loading="lazy" className="h-44 w-full rounded-2xl object-cover" />
          <img src={demoV2Images.friseurC} alt="Beispielhafte Friseurbehandlung in warmer Salonumgebung" loading="lazy" className="h-44 w-full rounded-2xl object-cover" />
        </section>
        <section className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-[#D8B45A]/22 bg-[#1f1a15] p-5">
            <h2 className="text-2xl font-semibold text-white">Warum Salons digitale Struktur brauchen</h2>
            <p className="mt-3 text-sm leading-7 text-[#E7DDD0]">
              Viele Salons haben starke Leistungen, aber online fehlen klare Leistungswege, Terminführung und ein sichtbarer Vertrauensaufbau. Diese Demo zeigt, wie aus einer reinen Informationsseite ein echter Anfrageweg wird.
            </p>
          </article>
          <article className="rounded-2xl border border-[#D8B45A]/22 bg-[#1f1a15] p-5">
            <h2 className="text-2xl font-semibold text-white">Vom Besuch zur Terminanfrage</h2>
            <p className="mt-3 text-sm leading-7 text-[#E7DDD0]">Website ansehen → Behandlung wählen → Bewertung prüfen → WhatsApp oder Formular nutzen → Rückmeldung erhalten.</p>
          </article>
        </section>
        <section id="salon-leistungen" className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-[#D8B45A]/22 bg-[#221c17] p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[#D8B45A]">Highlight-Leistung</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Damenhaarschnitt & Farbberatung</h3>
            <p className="mt-3 text-sm leading-7 text-[#E7DDD0]">Individuelle Schnitte, Farbkonzept und Stylingberatung für einen gepflegten Look. Der Ablauf ist auf der Website so strukturiert, dass Interessentinnen schnell die passende Leistung wählen können.</p>
          </article>
          <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-[#D8B45A]/22 bg-[#221c17] p-4"><h3 className="font-semibold text-white">Damenhaarschnitt</h3><p className="mt-2 text-sm text-[#E7DDD0]">Individuelle Schnitte, Beratung und Styling für einen gepflegten Look mit klarer Terminführung auf der Website.</p></article>
          <article className="rounded-2xl border border-[#D8B45A]/22 bg-[#221c17] p-4"><h3 className="font-semibold text-white">Herrenhaarschnitt</h3><p className="mt-2 text-sm text-[#E7DDD0]">Moderne und klassische Herrenhaarschnitte mit einfacher Online-Anfrage und klaren Leistungsdetails.</p></article>
          <article className="rounded-2xl border border-[#D8B45A]/22 bg-[#221c17] p-4"><h3 className="font-semibold text-white">Farbe & Strähnen</h3><p className="mt-2 text-sm text-[#E7DDD0]">Farbveränderungen und Strähnen werden verständlich erklärt, damit Kundinnen sicherer entscheiden können.</p></article>
          <article className="rounded-2xl border border-[#D8B45A]/22 bg-[#221c17] p-4"><h3 className="font-semibold text-white">Styling</h3><p className="mt-2 text-sm text-[#E7DDD0]">Styling-Angebote für Alltag und Anlässe mit emotionaler Darstellung und direktem Kontaktweg.</p></article>
          <article className="rounded-2xl border border-[#D8B45A]/22 bg-[#221c17] p-4"><h3 className="font-semibold text-white">Hochsteckfrisuren</h3><p className="mt-2 text-sm text-[#E7DDD0]">Leistungsbereich für besondere Momente mit Bildfokus, Ablaufhinweisen und gezielter Anfrage.</p></article>
          <article className="rounded-2xl border border-[#D8B45A]/22 bg-[#221c17] p-4"><h3 className="font-semibold text-white">Pflegebehandlungen</h3><p className="mt-2 text-sm text-[#E7DDD0]">Pflege und Haarqualität werden als eigene Leistung sichtbar und nicht nur als Nebenpunkt erwähnt.</p></article>
          </div>
        </section>
        <section id="salon-vorteile" className="rounded-2xl border border-[#D8B45A]/22 bg-[#1f1a15] p-5">
          <h2 className="text-2xl font-semibold text-white">Team & Vertrauen</h2>
          <p className="mt-3 text-sm leading-7 text-[#E7DDD0]">Persönliche Beratung, familiäre Atmosphäre, klare Terminführung und professionelle Außenwirkung als Beispielstruktur.</p>
        </section>
        <section id="salon-team" className="grid gap-4 md:grid-cols-3">
          {['Persönliche Beratung vor jedem Termin', 'Ruhige Atmosphäre im gesamten Salon', 'Klare Kommunikation zu Leistungen und Zeitbedarf'].map((item) => (
            <article key={item} className="rounded-xl border border-[#D8B45A]/20 bg-[#221c17] p-4 text-sm text-[#E7DDD0]">{item}</article>
          ))}
        </section>
        <section className="rounded-2xl border border-[#D8B45A]/22 bg-[#1f1a15] p-5">
          <h2 className="text-2xl font-semibold text-white">Kundenführung</h2>
          <p className="mt-3 text-sm leading-7 text-[#E7DDD0]">Website, Google-Profil, Bewertungen, WhatsApp-Terminfrage und Kontaktbutton arbeiten als klare digitale Kundenführung zusammen.</p>
        </section>
        <section id="salon-reviews" className="rounded-2xl border border-[#D8B45A]/22 bg-[#1f1a15] p-5">
          <h2 className="text-2xl font-semibold text-white">Bewertungsbereich (Muster)</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <article className="rounded-xl border border-[#D8B45A]/20 bg-[#221c17] p-3 text-sm text-[#E7DDD0]">„Sehr angenehme Beratung und klarer Ablauf bei der Terminvergabe.“</article>
            <article className="rounded-xl border border-[#D8B45A]/20 bg-[#221c17] p-3 text-sm text-[#E7DDD0]">„Leistungen online sofort verständlich, Anfrage direkt möglich.“</article>
            <article className="rounded-xl border border-[#D8B45A]/20 bg-[#221c17] p-3 text-sm text-[#E7DDD0]">„Vom ersten Klick bis zur Bestätigung sehr strukturiert geführt.“</article>
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[#D8B45A]/82">Beispielbewertungen – Demo, keine echten Kundenstimmen</p>
        </section>
        <section id="salon-ablauf" className="rounded-2xl border border-[#D8B45A]/22 bg-[#1f1a15] p-5">
          <h2 className="text-2xl font-semibold text-white">Beispiel-Ablauf</h2>
          <p className="mt-3 text-sm leading-7 text-[#E7DDD0]">1. Anfrage senden · 2. Beratung erhalten · 3. Termin oder Angebot abstimmen · 4. Umsetzung im Salon.</p>
        </section>
        <section id="salon-kontakt" className="rounded-2xl border border-[#D8B45A]/22 bg-[#1f1a15] p-5">
          <h2 className="text-2xl font-semibold text-white">Kontakt / Termin-Anfrage (Demo)</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <input placeholder="Name" className="rounded-xl border border-[#D8B45A]/25 bg-[#221c17] px-3 py-2.5 text-sm text-white" />
            <input placeholder="Telefon oder E-Mail" className="rounded-xl border border-[#D8B45A]/25 bg-[#221c17] px-3 py-2.5 text-sm text-white" />
            <textarea placeholder="Gewünschte Leistung und Wunschtermin" rows={4} className="md:col-span-2 rounded-xl border border-[#D8B45A]/25 bg-[#221c17] px-3 py-2.5 text-sm text-white" />
          </div>
        </section>
        <DemoContactCTA text="So könnte auch Ihr Salon digital klarer wirken." />
        <DemoPageDisclaimer />
        <footer className="rounded-2xl border border-[#D8B45A]/18 bg-[#1a1511] p-4 text-xs leading-6 text-[#d9c8af]">
          Diese Seite ist eine beispielhafte STRUKTIVA-Demo.
        </footer>
      </div>
    </main>
  )
}

function DemoHandwerkerV2Page() {
  return (
    <main className="relative bg-[linear-gradient(180deg,#0a162b,#0f1f3a)] px-5 pb-16 pt-6 text-white lg:px-8 lg:pb-24 lg:pt-8">
      <DemoBackgroundLayer image={demoV2Images.handwerkerHero} overlay="from-[#081322]/88 via-[#0f1f3a]/76 to-[#0a1528]/95" />
      <div className="mx-auto max-w-7xl space-y-6">
        <DemoWebsiteHeader
          brandName="Muster Handwerk"
          links={[
            ['Leistungen', '#hw-leistungen'],
            ['Referenzen', '#hw-refs'],
            ['Einsatzgebiet', '#hw-region'],
            ['Anfrage', '#hw-flow'],
            ['Kontakt', '#hw-contact'],
          ]}
        />
        <section className="rounded-[2.1rem] bg-[linear-gradient(160deg,rgba(12,29,55,0.84),rgba(17,24,39,0.82))] p-7 shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fbbf24]">Beispielhafte Demo von STRUKTIVA</p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Handwerkerbetrieb mit klarer digitaler Anfrageführung</h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-gray-200">Leistungen, Referenzen, Einsatzgebiet und Kontaktwege sind sofort verständlich aufgebaut. Diese Musterseite zeigt eine robuste Handwerker-Struktur mit klarer Kundenführung.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={siteLinks.contact} className="rounded-full bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-white">Handwerker-Struktur anfragen</a>
            <a href="#hw-refs" className="rounded-full border border-[#f59e0b]/35 px-6 py-3 text-sm font-semibold text-[#fbbf24]">Referenzen ansehen</a>
            <a href={siteLinks.home} className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white">Zur Startseite</a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {['Regional erreichbar', 'Klare Leistungen', 'Referenzen sichtbar', 'Direkte Anfrage'].map((item) => (
              <span key={item} className="rounded-full border border-[#f59e0b]/35 bg-black/20 px-3 py-1.5 text-xs text-[#fcd68a]">{item}</span>
            ))}
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#f59e0b]/25">
            <div className="relative h-64 md:h-80">
              <img src={demoV2Images.handwerkerHero} alt="Beispielbild für Handwerker bei Montagearbeit" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <img src={demoV2Images.handwerkerA} alt="Beispielhafte regionale Handwerksleistung" loading="lazy" className="h-44 w-full rounded-2xl object-cover" />
          <img src={demoV2Images.handwerkerB} alt="Beispielbild für Werkzeug und Innenausbau" loading="lazy" className="h-44 w-full rounded-2xl object-cover" />
          <img src={demoV2Images.handwerkerC} alt="Beispielhafte Montagearbeit im Handwerk" loading="lazy" className="h-44 w-full rounded-2xl object-cover" />
        </section>
        <section id="hw-leistungen" className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-[#f59e0b]/30 bg-[#0f172a]/88 p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-[#fbbf24]">Highlight-Leistung</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Renovierung & Innenausbau</h3>
            <p className="mt-3 text-sm leading-7 text-gray-200">Saubere Renovierungsarbeiten für Wohn- und Geschäftsräume. Leistungsumfang, Materialien und Anfragewege werden so dargestellt, dass Interessenten schnell die passende Leistung erkennen.</p>
          </article>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-gray-600/60 bg-gray-900/60 p-4"><h3 className="font-semibold text-white">Reparaturen</h3><p className="mt-2 text-sm text-gray-200">Kleine Schäden und Ausbesserungen mit kurzen Kontaktwegen.</p></article>
            <article className="rounded-2xl border border-gray-600/60 bg-gray-900/60 p-4"><h3 className="font-semibold text-white">Montage</h3><p className="mt-2 text-sm text-gray-200">Montageleistungen werden übersichtlich und verständlich dargestellt.</p></article>
            <article className="rounded-2xl border border-gray-600/60 bg-gray-900/60 p-4"><h3 className="font-semibold text-white">Wartung</h3><p className="mt-2 text-sm text-gray-200">Regelmäßige Wartungen mit klarer Leistungsbeschreibung.</p></article>
            <article className="rounded-2xl border border-gray-600/60 bg-gray-900/60 p-4"><h3 className="font-semibold text-white">Schnelle Anfrage</h3><p className="mt-2 text-sm text-gray-200">Telefon, WhatsApp oder Formular sind jederzeit direkt verfügbar.</p></article>
          </div>
        </section>
        <section id="hw-refs" className="rounded-2xl border border-gray-600/60 bg-gray-900/60 p-5">
          <h2 className="text-2xl font-semibold text-white">Referenzen (Muster)</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <article className="rounded-xl border border-gray-600/60 bg-gray-800/45 p-3"><p className="font-semibold text-white">Beispielprojekt Badezimmermodernisierung</p><p className="mt-1 text-sm text-gray-200">Ablauf, Materialwahl und Anfrageweg klar dargestellt.</p></article>
            <article className="rounded-xl border border-gray-600/60 bg-gray-800/45 p-3"><p className="font-semibold text-white">Beispielprojekt Innenausbau eines Wohnraums</p><p className="mt-1 text-sm text-gray-200">Projektübersicht mit Leistungsbereichen und Zeitrahmen.</p></article>
            <article className="rounded-xl border border-gray-600/60 bg-gray-800/45 p-3"><p className="font-semibold text-white">Beispielprojekt Montageauftrag</p><p className="mt-1 text-sm text-gray-200">Direkte Anfrageführung für schnelle Umsetzungen.</p></article>
            <article className="rounded-xl border border-gray-600/60 bg-gray-800/45 p-3"><p className="font-semibold text-white">Beispielprojekt Reparatur im Bestand</p><p className="mt-1 text-sm text-gray-200">Kurzfristige Reparatur mit transparenter Rückmeldung.</p></article>
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[#94a3b8]">Hinweis: Beispielhafte Demo-Projekte</p>
        </section>
        <section className="grid gap-4 md:grid-cols-4">
          {[
            ['Neue Anfragen heute', '3'],
            ['Laufende Projekte', '8'],
            ['Rückmeldungen offen', '2'],
            ['Einsatzgebiete aktiv', '5'],
          ].map(([title, value]) => (
            <article key={title} className="rounded-2xl border border-[#f59e0b]/35 bg-[#111827] p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[#fbbf24]">{title}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
            </article>
          ))}
        </section>
        <section className="rounded-2xl border border-gray-600/60 bg-gray-900/60 p-5">
          <h2 className="text-2xl font-semibold text-white">Anfrageführung</h2>
          <p className="mt-3 text-sm leading-7 text-gray-200">Was soll gemacht werden? Wo ist der Einsatzort? Gibt es Bilder? Wann soll es erledigt werden? So wird eine Anfrage klar strukturiert.</p>
        </section>
        <section id="hw-region" className="rounded-2xl border border-gray-600/60 bg-gray-900/60 p-5">
          <h2 className="text-2xl font-semibold text-white">Google & regionale Sichtbarkeit</h2>
          <p className="mt-3 text-sm leading-7 text-gray-200">Einsatzgebiet, Leistungen, Bewertungen und Kontaktwege werden als regionale Struktur sichtbar gemacht.</p>
        </section>
        <section id="hw-flow" className="rounded-2xl border border-gray-600/60 bg-gray-900/60 p-5">
          <h2 className="text-2xl font-semibold text-white">So wird aus einem Besucher eine klare Anfrage</h2>
          <p className="mt-3 text-sm leading-7 text-gray-200">1. Leistung auswählen · 2. Einsatzort nennen · 3. Bilder oder Beschreibung senden · 4. Rückmeldung erhalten.</p>
        </section>
        <section id="hw-contact" className="rounded-2xl border border-gray-600/60 bg-gray-900/60 p-5">
          <h2 className="text-2xl font-semibold text-white">Kontaktbereich (Beispielstruktur)</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <input placeholder="Name" className="rounded-xl border border-gray-600/60 bg-gray-800/60 px-3 py-2.5 text-sm text-white" />
            <input placeholder="Ort" className="rounded-xl border border-gray-600/60 bg-gray-800/60 px-3 py-2.5 text-sm text-white" />
            <input placeholder="Gewünschte Leistung" className="rounded-xl border border-gray-600/60 bg-gray-800/60 px-3 py-2.5 text-sm text-white md:col-span-2" />
            <textarea placeholder="Beschreibung des Anliegens" rows={4} className="rounded-xl border border-gray-600/60 bg-gray-800/60 px-3 py-2.5 text-sm text-white md:col-span-2" />
          </div>
        </section>
        <DemoContactCTA text="So wird Ihr Handwerksbetrieb online klarer gefunden und besser angefragt." />
        <DemoPageDisclaimer />
        <footer className="rounded-2xl border border-white/10 bg-[#0a1324]/75 p-4 text-xs leading-6 text-gray-300">
          Diese Seite ist eine beispielhafte STRUKTIVA-Demo.
        </footer>
      </div>
    </main>
  )
}

function DemoKosmetikstudioPage() {
  return (
    <main className="relative bg-[linear-gradient(180deg,#fff9f6,#f6e6de)] px-5 pb-16 pt-6 text-[#3b2f2f] lg:px-8 lg:pb-24 lg:pt-8">
      <DemoBackgroundLayer image={demoV2Images.kosmetikHero} overlay="from-[#fff9f6]/82 via-[#f5ded3]/62 to-[#d3b4a5]/64" />
      <div className="mx-auto max-w-7xl space-y-6">
        <DemoWebsiteHeader
          brandName="Beauty Musterstudio"
          links={[
            ['Behandlungen', '#beauty-services'],
            ['Preise', '#beauty-pricing'],
            ['Vertrauen', '#beauty-trust'],
            ['Bewertungen', '#beauty-reviews'],
            ['Termin', '#beauty-booking'],
          ]}
          theme="light"
        />
        <section className="rounded-[2.1rem] bg-[linear-gradient(155deg,#fffaf7,#f8ebe4)] p-7 shadow-[0_16px_42px_rgba(145,94,52,0.16)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b8894b]">Beispielhafte Demo von STRUKTIVA</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#3b2f2f] md:text-5xl">Kosmetikstudio mit klarer Behandlungs- und Terminstruktur</h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[#5a4740]">Behandlungen, Preise, Vertrauen und Termin-Anfrage sind hochwertig verbunden. Diese Musterseite zeigt eine ruhige Beauty-Struktur mit klarer Kundenführung.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={siteLinks.contact} className="rounded-full bg-[#b8894b] px-6 py-3 text-sm font-semibold text-white">Kosmetik-Struktur anfragen</a>
            <a href="#beauty-services" className="rounded-full border border-[#d4a574]/55 px-6 py-3 text-sm font-semibold text-[#9b6d3e]">Behandlungen ansehen</a>
            <a href={siteLinks.home} className="rounded-full border border-[#d4a574]/60 px-6 py-3 text-sm font-semibold text-[#9b6d3e]">Zur Startseite</a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {['Beratung', 'Hygiene', 'Klare Preise', 'Termin-Anfrage'].map((item) => (
              <span key={item} className="rounded-full border border-[#d4a574]/55 bg-white/60 px-3 py-1.5 text-xs text-[#8a5b35]">{item}</span>
            ))}
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#e9c9ac]/75">
            <div className="relative h-64 md:h-80">
              <img src={demoV2Images.kosmetikHero} alt="Beispielbild für Kosmetikbehandlung" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3b2f2f]/45 via-[#3b2f2f]/10 to-transparent" />
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <img src={demoV2Images.kosmetikA} alt="Beispielhafte Beauty- und Pflegeanwendung" loading="lazy" className="h-44 w-full rounded-2xl object-cover" />
          <img src={demoV2Images.kosmetikB} alt="Beispielhafte Hautanalyse im Kosmetikstudio" loading="lazy" className="h-44 w-full rounded-2xl object-cover" />
          <img src={demoV2Images.kosmetikC} alt="Beispielbild für ruhige Studioatmosphäre" loading="lazy" className="h-44 w-full rounded-2xl object-cover" />
        </section>
        <section id="beauty-services" className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-[#e4cabb] bg-white p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[#b8894b]">Highlight-Behandlung</p>
            <h3 className="mt-2 text-2xl font-semibold text-[#3b2f2f]">Gesichtsbehandlung mit Hautanalyse</h3>
            <p className="mt-3 text-sm leading-7 text-[#5a4740]">Pflege, Reinigung und Analyse werden als klarer Einstieg erklärt. So verstehen Kundinnen den Nutzen vor der Anfrage und können den passenden Terminweg wählen.</p>
          </article>
          <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-[#e4cabb] bg-white p-4"><h3 className="font-semibold text-[#3b2f2f]">Gesichtsbehandlung</h3><p className="mt-2 text-sm text-[#5a4740]">Klare Darstellung von Pflege, Reinigung und Entspannung für einen verständlichen Einstieg.</p></article>
          <article className="rounded-2xl border border-[#e4cabb] bg-white p-4"><h3 className="font-semibold text-[#3b2f2f]">Hautanalyse</h3><p className="mt-2 text-sm text-[#5a4740]">Die Hautanalyse erklärt den Start der Behandlung und stärkt Vertrauen durch Beratung.</p></article>
          <article className="rounded-2xl border border-[#e4cabb] bg-white p-4"><h3 className="font-semibold text-[#3b2f2f]">Wimpern & Augenbrauen</h3><p className="mt-2 text-sm text-[#5a4740]">Beauty-Leistungen werden übersichtlich gezeigt und direkt mit Terminwegen verbunden.</p></article>
          <article className="rounded-2xl border border-[#e4cabb] bg-white p-4"><h3 className="font-semibold text-[#3b2f2f]">Make-up</h3><p className="mt-2 text-sm text-[#5a4740]">Make-up für Alltag, Event oder besondere Anlässe mit hochwertiger, klarer Erklärung.</p></article>
          <article className="rounded-2xl border border-[#e4cabb] bg-white p-4"><h3 className="font-semibold text-[#3b2f2f]">Pflegepakete</h3><p className="mt-2 text-sm text-[#5a4740]">Pakete bündeln mehrere Leistungen sinnvoll und machen Angebote leichter verständlich.</p></article>
          <article className="rounded-2xl border border-[#e4cabb] bg-white p-4"><h3 className="font-semibold text-[#3b2f2f]">Beratung</h3><p className="mt-2 text-sm text-[#5a4740]">Persönliche Beratung als Vertrauenselement unterstützt die Entscheidung zur Anfrage.</p></article>
          </div>
        </section>
        <section id="beauty-pricing" className="rounded-2xl border border-[#e4cabb] bg-white p-5">
          <h2 className="text-2xl font-semibold text-[#3b2f2f]">Preise / Pakete (Demo)</h2>
          <p className="mt-3 text-sm leading-7 text-[#5a4740]">Basisbehandlung · Premiumbehandlung · Beauty-Paket – als Musterstruktur gekennzeichnet.</p>
        </section>
        <section id="beauty-trust" className="rounded-2xl border border-[#e4cabb] bg-white p-5">
          <h2 className="text-2xl font-semibold text-[#3b2f2f]">Vertrauen</h2>
          <p className="mt-3 text-sm leading-7 text-[#5a4740]">Hygiene, Beratung, ruhige Atmosphäre, professionelle Behandlung und Bewertungsführung als digitale Vertrauensbasis.</p>
        </section>
        <section id="beauty-booking" className="rounded-2xl border border-[#e4cabb] bg-white p-5">
          <h2 className="text-2xl font-semibold text-[#3b2f2f]">Terminführung</h2>
          <p className="mt-3 text-sm leading-7 text-[#5a4740]">Termin anfragen, Behandlung auswählen, Kontakt über WhatsApp oder Formular und klare Rückmeldung.</p>
        </section>
        <section id="beauty-reviews" className="rounded-2xl border border-[#e4cabb] bg-white p-5">
          <h2 className="text-2xl font-semibold text-[#3b2f2f]">Bewertungen (Demo)</h2>
          <p className="mt-3 text-sm leading-7 text-[#5a4740]">„Sehr ruhige Behandlung und klare Beratung.“ · „Website wirkt hochwertig und Terminweg ist einfach.“ · „Leistungen online sofort verständlich.“</p>
        </section>
        <section id="beauty-contact" className="rounded-2xl border border-[#e4cabb] bg-white p-5">
          <h2 className="text-2xl font-semibold text-[#3b2f2f]">Kontakt / Termin-Anfrage (Demo)</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <input placeholder="Name" className="rounded-xl border border-[#e4cabb] bg-white px-3 py-2.5 text-sm text-[#3b2f2f]" />
            <input placeholder="Telefon oder E-Mail" className="rounded-xl border border-[#e4cabb] bg-white px-3 py-2.5 text-sm text-[#3b2f2f]" />
            <textarea placeholder="Gewünschte Behandlung und Terminwunsch" rows={4} className="md:col-span-2 rounded-xl border border-[#e4cabb] bg-white px-3 py-2.5 text-sm text-[#3b2f2f]" />
          </div>
        </section>
        <DemoContactCTA text="So könnte Ihr Kosmetikstudio online hochwertiger und klarer wirken." />
        <DemoPageDisclaimer />
        <footer className="rounded-2xl border border-[#e4cabb] bg-[#fff7f2] p-4 text-xs leading-6 text-[#5a4740]">
          Diese Seite ist eine beispielhafte STRUKTIVA-Demo.
        </footer>
      </div>
    </main>
  )
}

function DemoBewertungsstrukturPage() {
  return (
    <main className="relative bg-[linear-gradient(180deg,#0a1424,#123046)] px-5 pb-16 pt-6 text-white lg:px-8 lg:pb-24 lg:pt-8">
      <DemoBackgroundLayer image={demoV2Images.bewertungHero} overlay="from-[#0a1424]/88 via-[#11344b]/72 to-[#0b1b30]/93" />
      <div className="mx-auto max-w-7xl space-y-6">
        <DemoWebsiteHeader
          brandName="Bewertungsstruktur Demo"
          links={[
            ['Ablauf', '#review-flow'],
            ['QR-Code', '#review-qr'],
            ['WhatsApp-Text', '#review-whatsapp'],
            ['Bewertungskarte', '#review-card'],
            ['Kontakt', '#review-contact'],
          ]}
        />
        <section className="rounded-[2.1rem] bg-[linear-gradient(160deg,rgba(11,24,43,0.9),rgba(17,52,75,0.84))] p-7 shadow-[0_18px_44px_rgba(0,0,0,0.28)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B45A]">Beispielhafte Demo von STRUKTIVA</p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Bewertungen einfacher sammeln</h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[#D7DCE5]">QR-Code, Bewertungslink, Bewertungskarte und WhatsApp-Text werden als klarer Bewertungsweg verbunden.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={siteLinks.contact} className="rounded-full bg-[#2fb989] px-6 py-3 text-sm font-semibold text-white">Bewertungsstruktur anfragen</a>
            <a href="#review-flow" className="rounded-full border border-[#D8B45A]/35 px-6 py-3 text-sm font-semibold text-[#F2D98B]">Beispiel ansehen</a>
            <a href={siteLinks.home} className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white">Zur Startseite</a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {['QR-Code', 'Bewertungslink', 'WhatsApp-Text', 'Bewertungskarte'].map((item) => (
              <span key={item} className="rounded-full border border-[#5ed6ab]/35 bg-black/20 px-3 py-1.5 text-xs text-[#a7f3d0]">{item}</span>
            ))}
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#D8B45A]/25">
            <div className="relative h-64 md:h-80">
              <img src={demoV2Images.bewertungHero} alt="Beispielhafte digitale Bewertungsstruktur" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-2">
          <img src={demoV2Images.bewertungA} alt="Beispielhafte Bewertungskarte mit QR-Code" loading="lazy" className="h-48 w-full rounded-2xl object-cover" />
          <img src={demoV2Images.bewertungB} alt="Beispielhafte Smartphone-Bewertungssituation" loading="lazy" className="h-48 w-full rounded-2xl object-cover" />
        </section>
        <section id="review-flow" className="rounded-2xl border border-white/14 bg-white/[0.04] p-5">
          <h2 className="text-2xl font-semibold text-white">Wie es funktioniert</h2>
          <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">1. Kunde ist zufrieden · 2. QR-Code scannen · 3. Bewertung öffnen · 4. Bewertung abgeben · 5. Vertrauen für neue Kunden stärken.</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {['Kunde zufrieden', 'QR scannen', 'Bewertung öffnen', 'Bewertung abgeben', 'Vertrauen stärken'].map((step) => (
              <span key={step} className="rounded-full border border-[#D8B45A]/35 bg-white/[0.02] px-3 py-1.5 text-xs text-[#D8B45A]">{step}</span>
            ))}
          </div>
        </section>
        <section id="review-components" className="grid gap-4 md:grid-cols-3">
          {['Google-Bewertungslink', 'QR-Code', 'Bewertungskarte', 'WhatsApp-Text', 'Website-Einbindung', 'Bewertungsbereich'].map((item) => (
            <article key={item} className="rounded-2xl border border-white/14 bg-white/[0.04] p-4">
              <h3 className="font-semibold text-white">{item}</h3>
              <p className="mt-2 text-sm text-[#D7DCE5]">Beispielhafter Strukturbaustein für eine saubere Bewertungsführung.</p>
            </article>
          ))}
        </section>
        <section id="review-whatsapp" className="rounded-2xl border border-white/14 bg-white/[0.04] p-5">
          <h2 className="text-2xl font-semibold text-white">Beispieltext (WhatsApp)</h2>
          <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">„Vielen Dank für Ihren Besuch. Wenn Sie zufrieden waren, freuen wir uns über eine kurze Bewertung.“</p>
        </section>
        <section id="review-qr" className="rounded-2xl border border-dashed border-[#D8B45A]/45 bg-[#0f172a] p-5">
          <h2 className="text-2xl font-semibold text-white">QR-Code-Demo</h2>
          <div className="mt-4 inline-flex h-36 w-36 items-center justify-center rounded-xl border border-[#D8B45A]/45 bg-white text-xs font-semibold text-[#0f172a]">
            Beispiel-QR-Code
          </div>
        </section>
        <section id="review-card" className="rounded-2xl border border-white/14 bg-white/[0.04] p-5">
          <h2 className="text-2xl font-semibold text-white">Beispiel-Bewertungskarte</h2>
          <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">Kleine Karte für Theke/Empfang mit kurzem Hinweistext und QR-Code für direkte Bewertung.</p>
        </section>
        <section id="review-contact" className="rounded-2xl border border-white/14 bg-white/[0.04] p-5">
          <h2 className="text-2xl font-semibold text-white">Anfragebereich (Beispiel)</h2>
          <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">Anfrage senden für QR-Code-Setup, Bewertungslink-Struktur und passende Nachrichtentexte.</p>
        </section>
        <DemoContactCTA text="Machen Sie es zufriedenen Kunden leichter, eine Bewertung abzugeben." />
        <DemoPageDisclaimer />
        <footer className="rounded-2xl border border-white/10 bg-[#0d1a2d]/75 p-4 text-xs leading-6 text-[#C8D6EA]">
          Diese Seite ist eine beispielhafte STRUKTIVA-Demo.
        </footer>
      </div>
    </main>
  )
}

function DemoDashboardPage() {
  const cards = [
    ['Termine heute', '8'], ['Offene Aufgaben', '5'], ['Neue Anfragen', '3'], ['Tagesnotizen', '2'], ['Monatsübersicht', '26'], ['Umsatzübersicht (Demo)', '12.480 €'], ['Offene Punkte', '7'],
  ]
  const dashboardModules = [
    ['Tagesübersicht', 'Alle wichtigen Informationen des Tages werden an einem Ort gesammelt, damit nichts untergeht.'],
    ['Aufgaben', 'Aufgaben, Zuständigkeiten und Prioritäten werden sichtbar und können besser verfolgt werden.'],
    ['Termine', 'Termine werden übersichtlich dargestellt und helfen bei der Tages- und Wochenplanung.'],
    ['Kundenanfragen', 'Neue Anfragen werden gesammelt sichtbar, damit kein Kontakt verloren geht.'],
    ['Kennzahlen', 'Wichtige Demo-Werte zeigen Entwicklungen auf einen Blick.'],
    ['Notizen', 'Interne Notizen halten offene Punkte und Hinweise im Team fest.'],
    ['Monatsplanung', 'Wiederkehrende Aufgaben und Ziele werden planbar strukturiert.'],
    ['Teamübersicht', 'Aufgaben oder Termine können nach Personen strukturiert sichtbar gemacht werden.'],
  ]
  return (
    <main className="relative bg-[linear-gradient(180deg,#060f1c,#0a1931)] px-5 pb-16 pt-6 text-white lg:px-8 lg:pb-24 lg:pt-8">
      <DemoBackgroundLayer image={demoV2Images.dashboardHero} overlay="from-[#060f1c]/90 via-[#0a1f3b]/76 to-[#050b17]/95" />
      <div className="mx-auto max-w-7xl space-y-6">
        <DemoWebsiteHeader
          brandName="STRUKTIVA Dashboard Demo"
          links={[
            ['Heute', '#dashboard-metrics'],
            ['Aufgaben', '#dashboard-tasks'],
            ['Termine', '#dashboard-schedule'],
            ['Anfragen', '#dashboard-flow'],
            ['Kennzahlen', '#dashboard-modules'],
          ]}
        />
        <section className="rounded-[2.1rem] bg-[linear-gradient(155deg,rgba(7,20,39,0.93),rgba(8,29,55,0.86))] p-7 shadow-[0_18px_44px_rgba(0,0,0,0.3)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7dd3fc]">Beispielhafte Demo von STRUKTIVA</p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Digitale Übersicht für kleine Unternehmen</h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[#dbe7ff]">Eine beispielhafte Dashboard-Struktur für Termine, Aufgaben, offene Punkte, Tagesübersicht, Monatsstruktur und Kennzahlen.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={siteLinks.contact} className="rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white">Dashboard anfragen</a>
            <a href="#dashboard-modules" className="rounded-full border border-[#60a5fa]/35 px-6 py-3 text-sm font-semibold text-[#bfdbfe]">Funktionen ansehen</a>
            <a href={siteLinks.home} className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white">Zur Startseite</a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {['Tagesübersicht', 'Aufgaben', 'Termine', 'Anfragen'].map((item) => (
              <span key={item} className="rounded-full border border-[#38bdf8]/35 bg-black/20 px-3 py-1.5 text-xs text-[#bae6fd]">{item}</span>
            ))}
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#38bdf8]/25">
            <div className="relative h-64 md:h-80">
              <img src={demoV2Images.dashboardHero} alt="Beispielhafte Dashboard-Ansicht für kleine Unternehmen" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-2">
          <img src={demoV2Images.dashboardA} alt="Digitale Übersicht mit Aufgaben und Kennzahlen" loading="lazy" className="h-48 w-full rounded-2xl object-cover" />
          <img src={demoV2Images.dashboardB} alt="Beispielbild für Business-Software und Teamplanung" loading="lazy" className="h-48 w-full rounded-2xl object-cover" />
        </section>
        <section id="dashboard-metrics" className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map(([title, value]) => (
            <article key={title} className="rounded-2xl border border-[#334155] bg-[#0b1f3a] p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[#94a3b8]">{title}</p>
              <p className="mt-2 text-2xl font-semibold text-[#7dd3fc]">{value}</p>
            </article>
          ))}
        </section>
        <section className="grid gap-4 lg:grid-cols-[0.28fr_0.72fr]">
          <aside className="rounded-2xl border border-[#334155] bg-[#091527] p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-[#7dd3fc]">Navigation</p>
            <div className="mt-3 space-y-2 text-sm text-[#dbe7ff]">
              {['Heute', 'Aufgaben', 'Termine', 'Anfragen', 'Kennzahlen'].map((item) => (
                <p key={item} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">{item}</p>
              ))}
            </div>
          </aside>
          <div className="grid gap-4 md:grid-cols-2">
            <article id="dashboard-tasks" className="rounded-2xl border border-[#334155] bg-[#0b1f3a] p-4">
              <h3 className="font-semibold text-white">Aufgabenliste</h3>
              <p className="mt-2 text-sm text-[#dbe7ff]">Prioritäten, Zuständigkeiten und Fristen an einem Ort.</p>
            </article>
            <article id="dashboard-schedule" className="rounded-2xl border border-[#334155] bg-[#0b1f3a] p-4">
              <h3 className="font-semibold text-white">Terminübersicht</h3>
              <p className="mt-2 text-sm text-[#dbe7ff]">Tages- und Wochenplanung mit klaren Zeitblöcken.</p>
            </article>
          </div>
        </section>
        <section id="dashboard-modules" className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardModules.map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-[#334155] bg-[#0b1f3a] p-4">
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-[#dbe7ff]">{text}</p>
            </article>
          ))}
        </section>
        <section className="rounded-2xl border border-[#334155] bg-[#0b1f3a] p-5">
          <h2 className="text-2xl font-semibold text-white">Für wen geeignet?</h2>
          <p className="mt-3 text-sm leading-7 text-[#dbe7ff]">Friseursalons, Handwerker, Kosmetikstudios, Beratungsbetriebe und lokale Dienstleister.</p>
          <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#94a3b8]">Alle Werte sind Demo-Werte.</p>
        </section>
        <section id="dashboard-flow" className="rounded-2xl border border-[#334155] bg-[#0b1f3a] p-5">
          <h2 className="text-2xl font-semibold text-white">Kundenführung im Dashboard-Beispiel</h2>
          <p className="mt-3 text-sm leading-7 text-[#dbe7ff]">Anfrage erfassen → Aufgabe zuweisen → Termin planen → Status aktualisieren → Tagesübersicht prüfen.</p>
        </section>
        <section id="dashboard-contact" className="rounded-2xl border border-[#334155] bg-[#0b1f3a] p-5">
          <h2 className="text-2xl font-semibold text-white">Kontakt / Anfragebereich (Demo)</h2>
          <p className="mt-3 text-sm leading-7 text-[#dbe7ff]">Diese Musterseite zeigt, wie ein Dashboard-Angebot mit klarer Anfrageführung strukturiert werden kann.</p>
        </section>
        <DemoContactCTA text="Bringen Sie mehr Übersicht in Ihren Betriebsalltag." />
        <DemoPageDisclaimer />
        <footer className="rounded-2xl border border-white/10 bg-[#081427]/75 p-4 text-xs leading-6 text-[#C8D6EA]">
          Diese Seite ist eine beispielhafte STRUKTIVA-Demo. Alle Werte sind Demo-Werte.
        </footer>
      </div>
    </main>
  )
}

function BrancheFriseursalonsPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#120f0d,#1b1713)] px-5 pb-16 pt-10 text-white lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-7xl space-y-6">
        <DemoMiniNav label="Branchenlösung Friseursalon" links={[['Leistungen', '#branche-friseur-services'], ['Vorteile', '#branche-friseur-benefits'], ['Ablauf', '#branche-friseur-flow'], ['Kontakt', '#branche-friseur-contact'], ['Zurück zu STRUKTIVA', siteLinks.home]]} />
        <section className="rounded-[2rem] border border-[#D8B45A]/25 bg-[linear-gradient(160deg,rgba(35,28,23,0.95),rgba(20,17,14,0.92))] p-7 shadow-premium">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B45A]">Branchenbeispiel von STRUKTIVA</p>
          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Digitale Struktur für Friseursalons</h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[#E7DDD0]">Website, Leistungen, Google-Profil, Bewertungen und WhatsApp-Terminführung klar verbunden.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={siteLinks.contact} className="rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white">Salon-Struktur anfragen</a>
            <a href={siteLinks.demoFriseursalonV2} className="rounded-full border border-[#D8B45A]/35 px-6 py-3 text-sm font-semibold text-[#F2D98B]">Beispiel ansehen</a>
          </div>
        </section>
        <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-[#D8B45A]/22 bg-[#1f1a15] p-5">
            <h2 className="text-2xl font-semibold text-white">Warum Salons klare Struktur brauchen</h2>
            <p className="mt-3 text-sm leading-7 text-[#E7DDD0]">Veraltete Website, wenig Bewertungen und unklare Terminwege kosten Vertrauen. Mit einer klaren Salonstruktur werden Leistungen, Atmosphäre und Kontakt logisch geführt.</p>
          </article>
          <img src={demoV2Images.friseurA} alt="Beispielbild für modernen Friseursalon" loading="lazy" className="h-full min-h-56 w-full rounded-2xl object-cover" />
        </section>
        <section id="branche-friseur-services" className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <article className="rounded-2xl border border-[#D8B45A]/22 bg-[#221c17] p-4"><h3 className="font-semibold">Leistungsstruktur</h3><p className="mt-2 text-sm text-[#E7DDD0]">Leistungen werden verständlich gegliedert, damit Kundinnen sofort den passenden Bereich finden.</p></article>
          <article className="rounded-2xl border border-[#D8B45A]/22 bg-[#221c17] p-4"><h3 className="font-semibold">Team & Atmosphäre</h3><p className="mt-2 text-sm text-[#E7DDD0]">Persönlichkeit und Vertrauen werden sichtbar gemacht statt nur genannt.</p></article>
          <article className="rounded-2xl border border-[#D8B45A]/22 bg-[#221c17] p-4"><h3 className="font-semibold">Terminführung</h3><p className="mt-2 text-sm text-[#E7DDD0]">Website-Besucher werden direkt zu WhatsApp oder Anfrageformular geführt.</p></article>
        </section>
        <section id="branche-friseur-benefits" className="rounded-2xl border border-[#D8B45A]/22 bg-[#1f1a15] p-5">
          <h2 className="text-2xl font-semibold">STRUKTIVA-Lösung für Salons</h2>
          <p className="mt-3 text-sm leading-7 text-[#E7DDD0]">Salon-Website → Google-Profil → Bewertungen → WhatsApp-Anfrage → Terminführung.</p>
        </section>
        <section id="branche-friseur-flow" className="rounded-2xl border border-[#D8B45A]/22 bg-[#1f1a15] p-5">
          <h2 className="text-2xl font-semibold">Beispiel-Ablauf</h2>
          <p className="mt-3 text-sm leading-7 text-[#E7DDD0]">1. Anfrage senden · 2. Beratung erhalten · 3. Termin abstimmen · 4. Umsetzung.</p>
        </section>
        <section id="branche-friseur-contact" className="rounded-2xl border border-[#D8B45A]/22 bg-[#1f1a15] p-5">
          <h2 className="text-2xl font-semibold">Kontaktbereich</h2>
          <p className="mt-3 text-sm text-[#E7DDD0]">So könnte Ihr Salon digital klarer, hochwertiger und vertrauensvoller wirken.</p>
          <a href={siteLinks.contact} className="mt-4 inline-flex rounded-full bg-[#D8B45A] px-5 py-2.5 text-sm font-semibold text-white">Friseursalon-Lösung anfragen</a>
        </section>
      </div>
    </main>
  )
}

function BrancheHandwerkerPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#0b1220,#111827)] px-5 pb-16 pt-10 text-white lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-7xl space-y-6">
        <DemoMiniNav label="Branchenlösung Handwerker" links={[['Leistungen', '#branche-hw-services'], ['Referenzen', '#branche-hw-projects'], ['Ablauf', '#branche-hw-flow'], ['Kontakt', '#branche-hw-contact'], ['Zurück zu STRUKTIVA', siteLinks.home]]} />
        <section className="rounded-[2rem] border border-[#f59e0b]/30 bg-[#111827] p-7 shadow-premium">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fbbf24]">Branchenbeispiel von STRUKTIVA</p>
          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Digitale Struktur für Handwerker</h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-gray-200">Leistungen, Referenzen, Einsatzgebiet, Anfrageformular und regionale Sichtbarkeit klar aufgebaut.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={siteLinks.contact} className="rounded-full bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-white">Handwerker-Struktur anfragen</a>
            <a href={siteLinks.demoHandwerkerV2} className="rounded-full border border-[#f59e0b]/35 px-6 py-3 text-sm font-semibold text-[#fbbf24]">Leistungen ansehen</a>
          </div>
        </section>
        <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-2xl border border-gray-600/60 bg-gray-900/60 p-5">
            <h2 className="text-2xl font-semibold">Typische Probleme</h2>
            <p className="mt-3 text-sm leading-7 text-gray-200">Leistungen unklar · Referenzen fehlen · Anfragewege unklar · Einsatzgebiet unsichtbar · regionale Auffindbarkeit schwach.</p>
          </aside>
          <img src={demoV2Images.handwerkerA} alt="Beispielhafte regionale Handwerksleistung" loading="lazy" className="h-full min-h-56 w-full rounded-2xl object-cover" />
        </section>
        <section id="branche-hw-services" className="space-y-3 rounded-2xl border border-gray-600/60 bg-gray-900/60 p-5">
          <h2 className="text-2xl font-semibold">Leistungsstruktur</h2>
          <p className="text-sm text-gray-200">Renovierung: Klarer Leistungsumfang mit direkter Anfrage.</p>
          <p className="text-sm text-gray-200">Reparaturen: Schnelle Kontaktwege für dringende Anliegen.</p>
          <p className="text-sm text-gray-200">Montage: Transparente Darstellung von Montageleistungen und Ablauf.</p>
          <p className="text-sm text-gray-200">Wartung: Wiederkehrende Leistungen klar und verständlich erklärt.</p>
          <p className="text-sm text-gray-200">Innenausbau: Projektfokus mit Bildbelegen und Angebotslogik.</p>
          <p className="text-sm text-gray-200">Schnelle Anfrage: Telefon, WhatsApp und Formular sichtbar priorisiert.</p>
        </section>
        <section id="branche-hw-projects" className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-600/60 bg-gray-900/60 p-4"><h3 className="font-semibold">Beispielprojekt: Badmodernisierung</h3><p className="mt-2 text-sm text-gray-200">Vorher/Nachher-Logik mit klarer Leistungsbeschreibung.</p></article>
          <article className="rounded-2xl border border-gray-600/60 bg-gray-900/60 p-4"><h3 className="font-semibold">Beispielprojekt: Innenausbau</h3><p className="mt-2 text-sm text-gray-200">Material, Ablauf und Ergebnis strukturiert erklärt.</p></article>
          <article className="rounded-2xl border border-gray-600/60 bg-gray-900/60 p-4"><h3 className="font-semibold">Beispielprojekt: Montageauftrag</h3><p className="mt-2 text-sm text-gray-200">Schnelle Anfrage bis Ausführung als klarer Prozess.</p></article>
          <article className="rounded-2xl border border-gray-600/60 bg-gray-900/60 p-4"><h3 className="font-semibold">Beispielprojekt: Reparatur im Bestand</h3><p className="mt-2 text-sm text-gray-200">Kurzfristiger Auftrag mit direkter Kundenführung.</p></article>
        </section>
        <section id="branche-hw-flow" className="rounded-2xl border border-gray-600/60 bg-gray-900/60 p-5">
          <h2 className="text-2xl font-semibold">Anfrageführung</h2>
          <p className="mt-3 text-sm text-gray-200">Leistung wählen → Einsatzort nennen → Bilder senden → Rückmeldung erhalten.</p>
        </section>
        <section id="branche-hw-contact" className="rounded-2xl border border-gray-600/60 bg-gray-900/60 p-5">
          <h2 className="text-2xl font-semibold">Kontakt-CTA</h2>
          <p className="mt-3 text-sm text-gray-200">So wird Ihr Handwerksbetrieb regional klarer sichtbar und einfacher anfragbar.</p>
          <a href={siteLinks.contact} className="mt-4 inline-flex rounded-full bg-[#f59e0b] px-5 py-2.5 text-sm font-semibold text-white">Handwerker-Lösung anfragen</a>
        </section>
      </div>
    </main>
  )
}

function BrancheKosmetikstudiosPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#fff8f5,#f9e7de)] px-5 pb-16 pt-10 text-[#3b2f2f] lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-7xl space-y-6">
        <DemoMiniNav label="Branchenlösung Kosmetikstudio" links={[['Behandlungen', '#branche-kosmetik-services'], ['Vertrauen', '#branche-kosmetik-trust'], ['Termine', '#branche-kosmetik-flow'], ['Kontakt', '#branche-kosmetik-contact'], ['Zurück zu STRUKTIVA', siteLinks.home]]} theme="light" />
        <section className="rounded-[2rem] border border-[#e9c9ac]/80 bg-[#fff8f3] p-7 shadow-premium">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b8894b]">Branchenbeispiel von STRUKTIVA</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#3b2f2f] md:text-5xl">Digitale Struktur für Kosmetikstudios</h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[#5a4740]">Behandlungen, Preise, Vertrauen, Bewertungen und Termin-Anfrage hochwertig und klar dargestellt.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={siteLinks.contact} className="rounded-full bg-[#b8894b] px-6 py-3 text-sm font-semibold text-white">Kosmetik-Struktur anfragen</a>
            <a href={siteLinks.demoKosmetikstudioV2} className="rounded-full border border-[#d4a574]/55 px-6 py-3 text-sm font-semibold text-[#9b6d3e]">Behandlungen ansehen</a>
          </div>
        </section>
        <section id="branche-kosmetik-trust" className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <img src={demoV2Images.kosmetikA} alt="Beispielbild für Kosmetikbehandlung" loading="lazy" className="h-full min-h-56 w-full rounded-2xl object-cover" />
          <article className="rounded-2xl border border-[#e4cabb] bg-white p-5">
            <h2 className="text-2xl font-semibold text-[#3b2f2f]">Vertrauensbereich</h2>
            <p className="mt-3 text-sm leading-7 text-[#5a4740]">Beratung, Hygiene, Behandlungserklärung, ruhige Atmosphäre, klare Preise und Bewertungen werden als Vertrauenssystem sichtbar gemacht.</p>
          </article>
        </section>
        <section id="branche-kosmetik-services" className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <article className="rounded-2xl border border-[#e4cabb] bg-white p-4"><h3 className="font-semibold text-[#3b2f2f]">Gesichtsbehandlung</h3><p className="mt-2 text-sm text-[#5a4740]">Pflege und Entspannung werden klar verständlich dargestellt.</p></article>
          <article className="rounded-2xl border border-[#e4cabb] bg-white p-4"><h3 className="font-semibold text-[#3b2f2f]">Hautanalyse</h3><p className="mt-2 text-sm text-[#5a4740]">Ein strukturierter Einstieg in die passende Behandlung.</p></article>
          <article className="rounded-2xl border border-[#e4cabb] bg-white p-4"><h3 className="font-semibold text-[#3b2f2f]">Wimpern & Augenbrauen</h3><p className="mt-2 text-sm text-[#5a4740]">Detailleistungen mit klarem Terminweg und Nutzenfokus.</p></article>
          <article className="rounded-2xl border border-[#e4cabb] bg-white p-4"><h3 className="font-semibold text-[#3b2f2f]">Make-up</h3><p className="mt-2 text-sm text-[#5a4740]">Leistungsdarstellung für Alltag, Event und besondere Anlässe.</p></article>
          <article className="rounded-2xl border border-[#e4cabb] bg-white p-4"><h3 className="font-semibold text-[#3b2f2f]">Pflegepakete</h3><p className="mt-2 text-sm text-[#5a4740]">Pakete machen Angebote verständlich und vergleichbar.</p></article>
          <article className="rounded-2xl border border-[#e4cabb] bg-white p-4"><h3 className="font-semibold text-[#3b2f2f]">Beratung</h3><p className="mt-2 text-sm text-[#5a4740]">Persönliche Beratung stärkt die Terminentscheidung.</p></article>
        </section>
        <section className="rounded-2xl border border-[#e4cabb] bg-white p-5">
          <h2 className="text-2xl font-semibold text-[#3b2f2f]">Preis-/Paketlogik (Demo)</h2>
          <p className="mt-3 text-sm text-[#5a4740]">Basisbehandlung · Premiumbehandlung · Beauty-Paket – als beispielhafte Struktur.</p>
        </section>
        <section id="branche-kosmetik-flow" className="rounded-2xl border border-[#e4cabb] bg-white p-5">
          <h2 className="text-2xl font-semibold text-[#3b2f2f]">Terminführung</h2>
          <p className="mt-3 text-sm text-[#5a4740]">Behandlung auswählen → Termin anfragen → Rückmeldung erhalten.</p>
        </section>
        <section id="branche-kosmetik-contact" className="rounded-2xl border border-[#e4cabb] bg-white p-5">
          <h2 className="text-2xl font-semibold text-[#3b2f2f]">Kontakt-CTA</h2>
          <p className="mt-3 text-sm text-[#5a4740]">So kann Ihr Kosmetikstudio online hochwertiger, klarer und vertrauensvoller wirken.</p>
          <a href={siteLinks.contact} className="mt-4 inline-flex rounded-full bg-[#b8894b] px-5 py-2.5 text-sm font-semibold text-white">Kosmetik-Lösung anfragen</a>
        </section>
      </div>
    </main>
  )
}

function BrancheLokaleDienstleisterPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#0a162c,#11284a)] px-5 pb-16 pt-10 text-white lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-6xl space-y-6">
        <DemoSiteBar name="Branchenlösung lokale Dienstleister" primaryCta="Lösung anfragen" />
        <h1 className="text-4xl font-semibold md:text-5xl">Digitale Struktur für lokale Dienstleister</h1>
        <p className="max-w-4xl text-base leading-8 text-[#dbe7ff]">Branchenbeispiel von STRUKTIVA: professioneller Auftritt, lokale Sichtbarkeit und klare Anfragewege.</p>
        <div className="rounded-2xl border border-[#60a5fa]/30 bg-[#0b1f3a] p-6">
          <p className="text-sm leading-7 text-[#dbe7ff]">Typische Probleme: kein klarer digitaler Auftritt, wenig Vertrauen, schwache Kontaktführung. STRUKTIVA löst mit strukturierter Website, lokaler Google-Grundlage und klarer Kundenführung.</p>
        </div>
        <section className="grid gap-4 md:grid-cols-3">
          {['Leistungsdarstellung', 'Google-Grundlage', 'Kontakt- und Anfragewege'].map((item) => (
            <article key={item} className="rounded-2xl border border-[#60a5fa]/30 bg-[#0b1f3a] p-4 text-sm text-[#dbe7ff]">{item}</article>
          ))}
        </section>
        <a href={siteLinks.contact} className="inline-flex rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white">Lösung für lokale Dienstleister anfragen</a>
      </div>
    </main>
  )
}

function BrancheBeratungPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#101827,#1e293b)] px-5 pb-16 pt-10 text-white lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-6xl space-y-6">
        <DemoSiteBar name="Branchenlösung Beratungsbetriebe" primaryCta="Beratungslösung anfragen" />
        <h1 className="text-4xl font-semibold md:text-5xl">Digitale Struktur für Beratungsbetriebe</h1>
        <p className="max-w-4xl text-base leading-8 text-[#d7dce5]">Branchenbeispiel von STRUKTIVA: klare Angebotsstruktur, Vertrauenselemente und professionelle Termin-Anfrageführung.</p>
        <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-6">
          <p className="text-sm leading-7 text-[#d7dce5]">Typische Probleme: Angebot schwer verständlich, Positionierung unklar, keine klare Termin-Anfrage. STRUKTIVA verbindet Angebotslogik, LinkedIn-/Google-Verknüpfung und klare Kontaktführung.</p>
        </div>
        <section className="grid gap-4 md:grid-cols-3">
          {['Positionierung', 'Angebotsarchitektur', 'Terminführung'].map((item) => (
            <article key={item} className="rounded-2xl border border-white/15 bg-white/[0.04] p-4 text-sm text-[#d7dce5]">{item}</article>
          ))}
        </section>
        <a href={siteLinks.contact} className="inline-flex rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white">Lösung für Beratungsbetriebe anfragen</a>
      </div>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
)
