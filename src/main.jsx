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
  Instagram,
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
import { CookieConsentLayer, openCookieSettings, trackMarketingLead } from './cookieConsent.jsx'

const siteLinks = {
  home: '/#start',
  services: '/#leistungen',
  about: '/ueber-uns',
  leistungenPage: '/leistungen',
  websites: '/websites',
  leadSysteme: '/lead-systeme',
  paketePage: '/pakete',
  referenzen: '/referenzen',
  salonKarolaReferenz: '/referenzen/salon-karola',
  pricing: '/preise',
  demos: '/demos',
  apps: '/apps',
  googleAds: '/google-ads',
  kiAutomatisierung: '/ki-automatisierung',
  projectRequest: '/projekt-anfragen',
  projectRequestForm: '/projekt-anfragen#lead-form',
  process: '/#ablauf',
  contact: '/kontakt',
  contactSection: '/#kontakt',
  webseitenPage: '/webseiten',
  landingpagesPage: '/landingpages',
  appsPage: '/apps',
  googleAdsPage: '/google-ads',
  demoHandwerker: '/demos/handwerker',
  demoBeauty: '/demos/kosmetik',
  demoDienstleister: '/demos/lokaler-dienstleister',
  demoHandwerkerV2: '/demos/handwerker',
  demoKosmetikstudioV2: '/demos/kosmetik',
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
  descriptor: 'Digitale Systeme',
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
  youtubeHref: 'https://www.youtube.com/@Struktiva',
  pinterestHref: 'https://de.pinterest.com/struktiva/',
  xHref: 'https://x.com/matzke_sven',
  maltHref: 'https://www.malt.de/profile/svenmatzke',
  linkedinHref: 'https://www.linkedin.com/in/sven-matzke-960b63411',
  instagramHref: 'https://www.instagram.com/struktiva1',
  founderSvenImage: '/images/founder-sven.jpg',
  founderJessicaImage: '/images/founder-jessica.jpg',
  googleReviewHref: 'https://g.page/r/CZvwYJbOSShgEBM/review',
  addressLine1: 'Ostlandstraße 3',
  addressLine2: '75365 Calw',
  country: 'Deutschland',
}

const externalProfileLinks = [
  ['YouTube', 'YouTube ansehen', contactDetails.youtubeHref],
  ['Pinterest', 'Pinterest ansehen', contactDetails.pinterestHref],
  ['X', 'X-Profil ansehen', contactDetails.xHref],
  ['Malt', 'Malt-Profil ansehen', contactDetails.maltHref],
  ['LinkedIn', 'LinkedIn-Profil ansehen', contactDetails.linkedinHref],
  ['Instagram', 'Instagram ansehen', contactDetails.instagramHref],
]

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
  ['Pakete', siteLinks.paketePage],
  ['Referenzen', siteLinks.referenzen],
  ['Kontakt', siteLinks.contact],
]

const mobileNavItems = [
  ['Pakete', siteLinks.paketePage],
  ['Referenzen', siteLinks.referenzen],
  ['Kontakt', siteLinks.contact],
]

const leistungenDropdownItems = [
  ['Leistungen im Überblick', siteLinks.leistungenPage],
  ['Websites', siteLinks.websites],
  ['Lead-Systeme', siteLinks.leadSysteme],
  ['KI & Automatisierung', siteLinks.kiAutomatisierung],
  ['Demos', siteLinks.demos],
]

const kiAutomationCards = [
  [Workflow, 'Anfrage-Systeme', 'Kontaktformulare, automatische Bestätigungen, interne Benachrichtigungen und saubere Weiterleitung von Kundenanfragen.'],
  [MessageCircle, 'KI-Antwortvorlagen', 'Professionelle Antwortvorschläge für häufige Kundenfragen, E-Mails, WhatsApp-Nachrichten und Angebotsanfragen.'],
  [BarChart3, 'Lead-Übersicht', 'Kundenanfragen gesammelt in einer klaren Übersicht mit Status, Kontaktdaten und Notizen.'],
  [QrCode, 'Bewertungsstruktur', 'QR-Codes, Bewertungsanfragen und passende Antwortvorlagen für Google-Bewertungen.'],
  [CalendarDays, 'Termin-Kommunikation', 'Vorlagen und Abläufe für Terminbestätigungen, Erinnerungen und Rückfragen.'],
  [ClipboardList, 'Digitale Abläufe', 'Wiederkehrende Aufgaben einfacher organisieren, vorbereiten und nachvollziehbar machen.'],
]

const kiAutomationAudience = [
  ['Friseure & Beauty-Betriebe', Sparkles],
  ['Handwerker & Dienstleister', Building2],
  ['Beratungsbetriebe', BriefcaseBusiness],
  ['Lokale Betriebe & Dienstleister', BadgeCheck],
]

const leadInterestOptions = [
  'Website / Landingpage',
  'Google-Sichtbarkeit',
  'KI & Automatisierung',
  'Kundenanfragen-System',
  'Digitale Ordnung',
  'Unternehmens-App / Dashboard',
  'Ich bin mir noch unsicher',
]

const leadProjectStartOptions = [
  'Sofort',
  'In den nächsten Wochen',
  'In den nächsten Monaten',
  'Noch offen',
]

const leadBudgetOptions = [
  'Unter 500 €',
  '500 € – 1.000 €',
  '1.000 € – 2.500 €',
  'Über 2.500 €',
  'Noch offen',
]

const leadPreferredContactOptions = ['E-Mail', 'Telefon', 'WhatsApp']

const demoDropdownItems = [
  ['Referenzprojekt Salon Karola', 'Echte Umsetzung: vom Baukasten-Auftritt zur modernen digitalen Salon-Struktur.', 'https://salon-karola-webseite.vercel.app/', Sparkles],
  ['Handwerker-Demo', 'Professionelle Website-Struktur für Handwerker mit Leistungen, Einsatzgebiet, Kontaktwegen, Kundenvertrauen und klarer Anfrageführung.', siteLinks.demoHandwerkerV2, Building2],
  ['Kosmetikstudio-Demo', 'Moderne Website-Struktur für Kosmetikstudios mit Leistungen, Atmosphäre, Vertrauen, Termin-Anfrage und klarer Kundenführung.', siteLinks.demoKosmetikstudioV2, BadgeCheck],
  ['Lokaler-Dienstleister-Demo', 'Digitale Struktur für lokale Betriebe mit Leistungen, Einsatzgebiet, Vertrauen, Anfragewegen und klarer Kundenführung.', siteLinks.demoDienstleister, BriefcaseBusiness],
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
    title: 'Kosmetikstudio-Demo',
    text: 'Moderne Website-Struktur für Kosmetikstudios mit Leistungen, Atmosphäre, Vertrauen, Termin-Anfrage und klarer Kundenführung.',
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
    title: 'Kosmetikstudio-Demo – Kreativer Auftritt für lokale Beauty-Dienstleister',
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
  [ShieldCheck, 'Verständlich und umsetzbar', 'Keine Technik-Überforderung, sondern ein System, das Betriebe wirklich nutzen und weiterführen können.'],
]

const homeThemeBandItems = [
  'Webseiten',
  'Landingpages',
  'Google-Sichtbarkeit',
  'Lead-Systeme',
  'KI & Automatisierung',
  'Kundenanfragen',
  'WhatsApp-Kontaktwege',
  'Bewertungsstruktur',
  'QR-Code-Systeme',
  'Unternehmens-Apps',
  'Betriebs-Dashboards',
  'Digitale Ordnungssysteme',
  'Social Media Struktur',
  'Pinterest Struktur',
  'Kundenführung',
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
    description: 'Moderne Webseiten für Unternehmen, die Vertrauen aufbauen, Leistungen klar darstellen und Kontaktwege sinnvoll verbinden.',
    price: 'ab 699 € inklusive Mehrwertsteuer',
    href: siteLinks.webseitenPage,
  },
  {
    icon: Target,
    title: 'Landingpages',
    description: 'Klar fokussierte Seiten für Angebote, Aktionen, Produkte oder Dienstleistungen mit sauberer Struktur und direkter Handlungsaufforderung.',
    price: 'ab 399 € inklusive Mehrwertsteuer',
    href: siteLinks.landingpagesPage,
  },
  {
    icon: Search,
    title: 'Google-Sichtbarkeit',
    description: 'Strukturierte Unterstützung für bessere Auffindbarkeit über Google, lokale Suchanfragen, Unternehmensprofil-Texte und saubere Online-Grundlagen.',
    price: 'ab 199 € inklusive Mehrwertsteuer',
    href: siteLinks.googleSichtbarkeit,
  },
  {
    icon: MousePointerClick,
    title: 'Digitale Kundenführung',
    description: 'Klare Kontaktwege über Webseite, WhatsApp, Bewertungssysteme, Anfrageformulare und sinnvolle digitale Abläufe.',
    price: 'ab 149 € inklusive Mehrwertsteuer',
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
    title: 'STRUKTIVA Soforthilfe',
    price: 'ab 99 € inklusive Mehrwertsteuer',
    badge: 'Kleine Einzelmaßnahme',
    description: 'Für einzelne digitale Aufgaben, schnelle Anpassungen oder professionelle Soforthilfe.',
    features: [
      'kleine Website-Anpassungen',
      'kurze Texte oder Korrekturen',
      'Google- oder Social-Media-Texte',
      'WhatsApp- und Bewertungstexte',
    ],
    note: 'Für einzelne Aufgaben mit klar begrenztem Umfang.',
    cta: 'Soforthilfe anfragen',
    strong: true,
  },
  {
    title: 'Website Start',
    price: 'ab 499 € inklusive Mehrwertsteuer',
    badge: 'Webseiten-Einstieg',
    description: 'Für Betriebe, die eine saubere erste Website- oder Onepager-Grundlage brauchen.',
    features: [
      'Onepager-Grundstruktur',
      'mobile Optimierung',
      'klare Angebotsdarstellung',
      'Kontaktführung',
    ],
    note: 'Der Einstieg bleibt fair und kann später erweitert werden.',
    cta: 'Website Start anfragen',
    strong: true,
  },
  {
    title: 'Sichtbarkeits-Paket',
    price: 'ab 799 € inklusive Mehrwertsteuer',
    badge: 'Website & Sichtbarkeit',
    description: 'Für Unternehmen, die Website, Google-Grundlage und Kontaktwege sinnvoll verbinden möchten.',
    features: [
      'Website- oder Landingpage-Struktur',
      'Google-Unternehmensprofil-Grundlage',
      'Bewertungs- und Kontaktwege',
      'klare Kundenführung',
    ],
    note: 'Für mehr Klarheit in Sichtbarkeit, Vertrauen und Kontaktaufnahme.',
    cta: 'Sichtbarkeit anfragen',
    premium: true,
  },
  {
    title: 'Struktur-Paket',
    price: 'ab 1.199 € inklusive Mehrwertsteuer',
    badge: 'Mehr Bausteine',
    description: 'Für Unternehmen, die mehrere digitale Bausteine professionell zusammenführen möchten.',
    features: [
      'mehrseitige Website-Struktur',
      'Lead- oder Anfrage-System',
      'Bewertungs- und QR-Struktur',
      'digitale Angebotslogik',
    ],
    note: 'Der Umfang richtet sich nach Ziel, Ausgangslage und gewünschter Umsetzung.',
    cta: 'Struktur-Paket anfragen',
  },
  {
    title: 'Premium-Struktur',
    price: 'ab 1.499 € inklusive Mehrwertsteuer',
    badge: 'Umfassende Struktur',
    description: 'Für Betriebe, die eine umfangreichere digitale Struktur mit mehreren Systembausteinen brauchen.',
    features: [
      'vollständigere Website-Struktur',
      'digitale Kundenführung',
      'Dashboard- oder App-Konzept möglich',
      'erweiterbare Unternehmensarchitektur',
    ],
    note: 'Für größere Vorhaben mit hochwertiger, klar abgestimmter Umsetzung.',
    cta: 'Premium-Struktur anfragen',
    premium: true,
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
  'Unternehmen und Betriebe',
]

const whyPoints = [
  'Klarer Aufbau statt schöner, aber wirkungsloser Webseite',
  'Fokus auf Anfragen, Vertrauen und Kontakt',
  'Website, Landingpage, WhatsApp, Google, Social Media und Newsletter als zusammenhängende Struktur',
  'Verständliche Umsetzung ohne Technik-Blabla',
  'Systeme, die Unternehmen wirklich im Alltag nutzen können',
]

const qualityPoints = [
  ['Klar verständlich', 'Keine unnötig komplizierten Systeme, sondern Lösungen, die nachvollziehbar aufgebaut sind.'],
  ['Sauber umgesetzt', 'Professionelle Texte, klare Struktur, mobile Optimierung und technische Stabilität.'],
  ['Praxisnah gedacht', 'Digitale Lösungen, die nicht nur gut aussehen, sondern im echten Unternehmensalltag helfen.'],
]

const differentiatorCards = [
  ['Mehr als Webdesign', 'Wir verbinden Website, Google, Kontaktwege und Kundenführung.'],
  ['Für Unternehmen gebaut', 'Klare Lösungen ohne unnötige Komplexität.'],
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
      '/': 'STRUKTIVA Unternehmensarchitektur | Digitale Struktur für Unternehmen',
      '/ueber-uns': 'Über uns - STRUKTIVA Unternehmensarchitektur',
      '/websites': 'Websites & Landingpages - STRUKTIVA Unternehmensarchitektur',
      '/lead-systeme': 'Lead-Systeme & Kundenanfragen - STRUKTIVA Unternehmensarchitektur',
      '/pakete': 'Pakete & Betreuung - STRUKTIVA Unternehmensarchitektur',
      '/referenzen': 'Referenzen - STRUKTIVA Unternehmensarchitektur',
      '/referenzen/salon-karola': 'Salon Karola Referenz - STRUKTIVA Unternehmensarchitektur',
      '/demos': 'Demos - STRUKTIVA Unternehmensarchitektur',
      '/webseiten': 'Professionelle Webseiten - STRUKTIVA Unternehmensarchitektur',
      '/landingpages': 'Landingpages - STRUKTIVA Unternehmensarchitektur',
      '/apps': 'Unternehmens-Apps - STRUKTIVA Unternehmensarchitektur',
      '/google-ads': 'Google Ads - STRUKTIVA Unternehmensarchitektur',
      '/ki-automatisierung': 'KI & Automatisierung für Unternehmen - STRUKTIVA',
      '/projekt-anfragen': 'Projekt anfragen - STRUKTIVA Unternehmensarchitektur',
      '/bewertungs-qr-code': 'Google-Bewertungssystem mit QR-Code | STRUKTIVA',
      '/digitale-ordnungssysteme': 'Digitale Ordnungssysteme fuer Betriebe - STRUKTIVA',
      '/website-fuer-kleine-unternehmen': 'Website-Erstellung fuer Unternehmen - STRUKTIVA',
      '/landingpage-erstellen-lassen': 'Landingpages erstellen lassen - STRUKTIVA',
      '/google-sichtbarkeit-kleine-unternehmen': 'Google-Sichtbarkeit fuer Unternehmen - STRUKTIVA',
      '/digitale-kundenfuehrung': 'Digitale Kundenfuehrung - STRUKTIVA',
      '/whatsapp-kontaktstruktur': 'WhatsApp-Kontaktstruktur - STRUKTIVA',
      '/social-media-struktur': 'Social-Media-Struktur - STRUKTIVA',
      '/newsletter-einbindung': 'Newsletter-Einbindung - STRUKTIVA',
      '/unternehmens-apps': 'Unternehmens-Apps - STRUKTIVA',
      '/betriebs-dashboards': 'Betriebs-Dashboards - STRUKTIVA',
      '/angebotsarchitektur': 'Angebotsarchitektur - STRUKTIVA',
      '/digitale-unternehmensstruktur': 'Digitale Unternehmensstruktur - STRUKTIVA',
      '/digitale-soforthilfe': 'Digitale Soforthilfe für Unternehmen | STRUKTIVA',
      '/demos/handwerker': 'Handwerker Demo | STRUKTIVA Unternehmensarchitektur',
      '/demos/kosmetik': 'Kosmetikstudio Demo | STRUKTIVA Unternehmensarchitektur',
      '/demos/lokaler-dienstleister': 'Lokaler Dienstleister Demo | STRUKTIVA Unternehmensarchitektur',
      '/demos/bewertungsstruktur': 'Bewertungsstruktur Demo | STRUKTIVA Unternehmensarchitektur',
      '/demos/dashboard': 'Dashboard Demo | STRUKTIVA Unternehmensarchitektur',
      '/branchen/friseursalons': 'Digitale Struktur für Friseursalons | STRUKTIVA',
      '/branchen/handwerker': 'Digitale Struktur für Handwerker | STRUKTIVA',
      '/branchen/kosmetikstudios': 'Digitale Struktur für Kosmetikstudios | STRUKTIVA',
      '/branchen/lokale-dienstleister': 'Digitale Struktur für lokale Dienstleister | STRUKTIVA',
      '/branchen/beratung': 'Digitale Struktur für Beratungsbetriebe | STRUKTIVA',
      '/landingpage-digitale-struktur': 'Digitale Struktur fuer Unternehmen - STRUKTIVA Unternehmensarchitektur',
      '/wissen': 'STRUKTIVA Wissen - Digitale Unternehmensstruktur für Unternehmen',
      '/wissen/warum-eine-schoene-website-keine-kunden-bringt': 'Warum eine schöne Website allein keine Kunden bringt - STRUKTIVA Wissen',
      '/wissen/digitale-grundsysteme-kleine-unternehmen': 'Die 5 digitalen Grundsysteme für Unternehmen - STRUKTIVA Wissen',
      '/wissen/website-landingpage-funnel-unterschied': 'Website, Landingpage oder Funnel - STRUKTIVA Wissen',
      '/leistungen': 'Leistungen - STRUKTIVA Unternehmensarchitektur',
      '/impressum': 'Impressum - STRUKTIVA Unternehmensarchitektur',
      '/datenschutz': 'Datenschutz - STRUKTIVA Unternehmensarchitektur',
      '/widerruf': 'Widerruf - STRUKTIVA Unternehmensarchitektur',
      '/kontakt': 'Kontakt - STRUKTIVA Unternehmensarchitektur',
      '/preise': 'Preise - STRUKTIVA Unternehmensarchitektur',
    }

    const descriptions = {
      '/ueber-uns':
        'Mehr über STRUKTIVA Unternehmensarchitektur: digitale Struktur für Unternehmen, lokale Dienstleister und Selbstständige.',
      '/websites':
        'Websites und Landingpages von STRUKTIVA: klare Struktur, professionelle Darstellung, mobile Optimierung und saubere Anfrageführung.',
      '/lead-systeme':
        'Lead-Systeme, Kundenanfragen und Kontaktwege von STRUKTIVA: Formular, WhatsApp, Bewertungen und klare digitale Kundenführung.',
      '/pakete':
        'Pakete und Betreuung von STRUKTIVA: vier klare Einstiege für Website, Sichtbarkeit, Kundenführung und digitale Systeme.',
      '/referenzen':
        'Referenzen, Branchenlösungen und Demo-Beispiele von STRUKTIVA für Handwerk, Beauty, Beratung und lokale Dienstleister.',
      '/referenzen/salon-karola':
        'Salon Karola als echte STRUKTIVA Referenz: Website-Relaunch, Kundenführung, mobile Optimierung, Bewertungsstruktur und lokale Sichtbarkeit.',
      '/demos':
        'Demo-Beispiele von STRUKTIVA für Handwerk, Beauty und lokale Dienstleister sowie weitere digitale Musterseiten für klare Unternehmensstrukturen.',
      '/bewertungs-qr-code':
        'STRUKTIVA erstellt ein einfaches Google-Bewertungssystem mit QR-Code, Bewertungslink und Anleitung fuer lokale Unternehmen wie Salons, Handwerker, Kosmetikstudios und Dienstleister.',
      '/digitale-ordnungssysteme':
        'STRUKTIVA entwickelt digitale Ordnungssysteme fuer Betriebe - mit Tagesabschluss, Kassenstruktur, Monatsuebersicht, Exportfunktionen und steuerberaterfreundlicher Vorbereitung.',
      '/digitale-soforthilfe':
        'Schnelle digitale Unterstützung für Website-Anpassungen, Landingpages, Google-Texte, Social-Media-Beiträge, WhatsApp- und Bewertungstexte. STRUKTIVA Digitale Soforthilfe ab 99 € inklusive Mehrwertsteuer.',
      '/ki-automatisierung':
        'KI & Automatisierung für Unternehmen: STRUKTIVA verbindet Anfragen, Kommunikation und digitale Abläufe zu klaren, alltagstauglichen Systemen.',
      '/projekt-anfragen':
        'Projekt anfragen bei STRUKTIVA: professionelle Ersteinschätzung für Website, Google-Sichtbarkeit, Automatisierung, digitale Ordnung und Unternehmenssysteme.',
      '/website-fuer-kleine-unternehmen':
        'Moderne Website-Erstellung fuer Unternehmen und Selbststaendige mit klarer Struktur und professioneller Kundenfuehrung.',
      '/landingpage-erstellen-lassen':
        'Verkaufsstarke Landingpages fuer Angebote, Aktionen und Anfragen - klar aufgebaut und professionell umgesetzt.',
      '/google-sichtbarkeit-kleine-unternehmen':
        'Google-Sichtbarkeit fuer Unternehmen mit klarer Struktur, lokaler Auffindbarkeit und professioneller Praesenz.',
      '/leistungen':
        'Alle STRUKTIVA Leistungen im Ueberblick: Website, Landingpages, Google-Sichtbarkeit, Kundenfuehrung, Systeme, Dashboards und strukturierte Umsetzung.',
      '/preise':
        'Einstiegspreise fuer Unternehmen: Sichtbarkeit, Kundengewinnung und Unternehmensarchitektur mit transparenter, strukturierter Umsetzung.',
      '/demos/handwerker':
        'Professionelle Website-Struktur für Handwerker mit Leistungen, Einsatzgebiet, Kontaktwegen, Kundenvertrauen und klarer Anfrageführung.',
      '/demos/kosmetik':
        'Moderne Website-Struktur für Kosmetikstudios mit Leistungen, Atmosphäre, Vertrauen, Termin-Anfrage und klarer Kundenführung.',
      '/demos/lokaler-dienstleister':
        'Digitale Struktur für lokale Betriebe mit Leistungen, Einsatzgebiet, Vertrauen, Anfragewegen und klarer Kundenführung.',
      '/demos/bewertungsstruktur':
        'Beispielhafte Bewertungsstruktur mit QR-Code, Bewertungslink, WhatsApp-Text und Website-Einbindung.',
      '/demos/dashboard':
        'Beispielhaftes Betriebs-Dashboard für Unternehmen mit Aufgaben, Terminen, Tagesübersicht und Kennzahlen.',
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
        'STRUKTIVA Wissen: praxisnahe Artikel zu Website-Struktur, Landingpages, Google-Sichtbarkeit, WhatsApp-Kontaktwegen und digitalen Abläufen für Unternehmen.',
      '/wissen/warum-eine-schoene-website-keine-kunden-bringt':
        'Warum Design allein nicht reicht und wie Unternehmen mit klarer digitaler Struktur mehr qualifizierte Anfragen erhalten.',
      '/wissen/digitale-grundsysteme-kleine-unternehmen':
        'Die 5 digitalen Grundsysteme, die Unternehmen für Sichtbarkeit, Vertrauen und verlässliche Kundenanfragen wirklich brauchen.',
      '/wissen/website-landingpage-funnel-unterschied':
        'Website, Landingpage oder Funnel: welche Struktur Unternehmen wirklich brauchen, um online klar und anfragebereit aufzutreten.',
    }

    const defaultDescription =
      'STRUKTIVA entwickelt Webseiten, Google-Sichtbarkeit, Kontaktwege, Apps, Dashboards und digitale Strukturen für Unternehmen, Selbstständige und lokale Dienstleister.'

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
    const noIndexPaths = new Set([
      '/demos/handwerker',
      '/demos/kosmetik',
      '/demos/lokaler-dienstleister',
    ])
    setMeta('name', 'robots', noIndexPaths.has(pathname) ? 'noindex, nofollow' : 'index, follow')
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

function SectionHeader({ eyebrow, title, text, centered = true, tone = 'dark' }) {
  const isLight = tone === 'light'
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${isLight ? 'text-[#A9822D]' : 'text-[#D8B45A]/80'}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.9rem] lg:leading-[1.08] ${isLight ? 'metallic-section-title' : 'metallic-dark-title'}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-8 md:text-lg ${isLight ? 'text-[#3f3f3b]' : 'text-[#E0BF6A]'}`}>{text}</p>
    </div>
  )
}

function Header({ pathname, isHomeRoute = false }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false)
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false)
  const menuPanelRef = useRef(null)
  const desktopDropdownRef = useRef(null)

  const closeMobileMenu = () => {
    setMenuOpen(false)
    setMobileLeistungenOpen(false)
    document.body.classList.remove('menu-open', 'open', 'active', 'is-open', 'mobile-menu-open')
    document.body.style.overflow = ''
  }

  const closeDesktopDropdown = () => setDesktopDropdownOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    closeMobileMenu()
    closeDesktopDropdown()
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
  }, [menuOpen, desktopDropdownOpen])

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-[9999] px-4 pt-3 lg:px-6 ${
        isHomeRoute
          ? 'border-b border-white/55 bg-[linear-gradient(180deg,rgba(248,248,244,0.94),rgba(223,223,217,0.9))] shadow-[0_10px_35px_rgba(0,0,0,0.12),0_0_24px_rgba(214,168,79,0.08)] backdrop-blur-[18px]'
          : scrolled
          ? 'backdrop-blur-[18px]'
          : ''
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1240px] items-center justify-between gap-4 rounded-[1.8rem] border px-4 py-2.5 transition md:px-5 lg:py-2.5 ${
          scrolled
            ? 'border-white/75 bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(218,218,213,0.72))] shadow-[0_10px_35px_rgba(0,0,0,0.12)]'
            : isHomeRoute
            ? 'border-white/75 bg-[linear-gradient(145deg,rgba(255,255,255,0.84),rgba(218,218,213,0.74))] shadow-[0_10px_30px_rgba(0,0,0,0.1)]'
            : 'border-white/70 bg-[linear-gradient(145deg,rgba(255,255,255,0.8),rgba(223,223,218,0.68))]'
        }`}
      >
        <a href={siteLinks.home} className="flex min-w-0 shrink-0 items-center gap-3">
          <img
            src="/struktiva-logo.jpeg"
            alt="STRUKTIVA Unternehmensarchitektur Logo"
            className="h-8 w-8 rounded-full object-contain md:h-10 md:w-10"
          />
          <div className="leading-none">
            <p className="text-sm font-semibold tracking-[0.02em] text-[#111111] md:text-[15px]">STRUKTIVA</p>
            <p className="mt-1 hidden text-[10px] uppercase tracking-[0.2em] text-[#6b6b66] md:block">{brand.descriptor}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-4 xl:gap-6 lg:flex">
          <a href={siteLinks.home} className="whitespace-nowrap text-sm font-medium text-[#111111] transition hover:text-[#8f6d27]">
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
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-[#111111] transition hover:text-[#8f6d27]"
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
                  className="header-dropdown-panel absolute left-1/2 top-[calc(100%+12px)] z-[10000] w-[360px] max-w-[92vw] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/75 bg-[linear-gradient(145deg,rgba(250,250,247,0.98),rgba(221,221,216,0.96))] p-2.5 shadow-[0_20px_45px_rgba(0,0,0,0.14)] backdrop-blur-xl"
                >
                  <div className="mb-2 h-px w-full bg-gradient-to-r from-transparent via-[#D8B45A]/55 to-transparent" />
                  <div className="grid gap-1">
                    {leistungenDropdownItems.map(([label, href]) => (
                      <a
                        key={label}
                        href={href}
                        role="menuitem"
                        onClick={closeDesktopDropdown}
                        className="header-dropdown-link rounded-xl border border-transparent px-3 py-2.5 text-sm font-medium text-[#111111] transition hover:border-[#D8B45A]/38 hover:bg-white/60 hover:text-[#8f6d27]"
                      >
                        {label}
                      </a>
                    ))}
                    <a
                      href={siteLinks.leistungenPage}
                      role="menuitem"
                      onClick={closeDesktopDropdown}
                      className="header-dropdown-cta metallic-btn-primary mt-1 rounded-xl px-3 py-2.5 text-sm font-semibold transition"
                    >
                      Alle Leistungen ansehen
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {desktopNavItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="whitespace-nowrap text-sm font-medium text-[#111111] transition hover:text-[#8f6d27]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={siteLinks.projectRequest}
            className="metallic-btn-primary inline-flex h-10 items-center gap-1 whitespace-nowrap rounded-full px-3.5 text-sm font-semibold transition hover:-translate-y-0.5"
          >
            Projekt anfragen
            <ArrowRight className="h-3 w-3" />
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/70 text-[#111111] lg:hidden"
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
            className="relative z-[9999] mx-auto mt-3 max-w-7xl rounded-[1.8rem] border border-white/80 bg-[linear-gradient(145deg,rgba(250,250,247,0.98),rgba(221,221,216,0.96))] p-4 shadow-premium backdrop-blur-[18px] lg:hidden"
          >
            <div className="grid gap-2">
      <a
        href={siteLinks.home}
        onClick={closeMobileMenu}
        className="rounded-2xl px-4 py-3 text-sm font-medium text-[#111111] transition hover:bg-white/60 hover:text-[#8f6d27]"
      >
        Start
      </a>
      <button
        type="button"
        aria-expanded={mobileLeistungenOpen}
        onClick={() => setMobileLeistungenOpen((open) => !open)}
                className={`mobile-leistungen-toggle inline-flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  mobileLeistungenOpen
                    ? 'bg-[linear-gradient(145deg,rgba(20,20,20,0.98),rgba(38,38,38,0.95))] text-[#F3DEAF]'
                    : 'text-[#111111] hover:bg-white/60 hover:text-[#8f6d27]'
                }`}
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
                    className="mobile-leistungen-submenu rounded-2xl border border-white/80 bg-[linear-gradient(145deg,rgba(250,250,247,0.98),rgba(221,221,216,0.96))] p-2"
                  >
                    <div className="grid gap-1">
                      {leistungenDropdownItems.map(([label, href]) => (
                        <a
                          key={label}
                          href={href}
                          onClick={closeMobileMenu}
                          className="mobile-leistungen-link rounded-lg border border-transparent px-2.5 py-2 text-sm text-[#111111] transition hover:border-[#D8B45A]/38 hover:bg-white/60 hover:text-[#8f6d27]"
                        >
                          {label}
                        </a>
                      ))}
                      <a
                        href={siteLinks.leistungenPage}
                        onClick={closeMobileMenu}
                        className="mobile-leistungen-cta metallic-btn-primary mt-1 rounded-lg px-2.5 py-2 text-sm font-semibold transition"
                      >
                        Alle Leistungen ansehen
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {mobileNavItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMobileMenu}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[#111111] transition hover:bg-white/60 hover:text-[#8f6d27]"
                >
                  {label}
                </a>
              ))}
              <a
                href={siteLinks.projectRequest}
                onClick={closeMobileMenu}
                className="metallic-btn-primary mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition"
              >
                  Projekt anfragen
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

                <div className="metallic-result-box mt-4 rounded-[1rem] p-3.5">
                  <p className="metallic-result-label text-[11px] font-semibold uppercase tracking-[0.15em]">Ergebnis</p>
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
            title="Viele Unternehmen verlieren Kunden, bevor sie überhaupt Kontakt aufnehmen."
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
              <div className="metallic-result-box mt-4 rounded-[1.2rem] p-4">
                <p className="metallic-result-label text-xs font-semibold uppercase tracking-[0.18em]">Ergebnis</p>
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
            text="Wähle eine Beispielbranche und sieh dir an, wie STRUKTIVA digitale Struktur, klare Angebote, Kontaktwege und Kundengewinnung für Unternehmen sichtbar macht."
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
                : demo.title === 'Kosmetikstudio-Demo'
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
                STRUKTIVA positioniert sich bewusst als digitaler Systemanbieter für Unternehmen. Die Umsetzung verbindet Präsenz, Kundenführung und Kontaktwege in einer Struktur, die im Alltag funktioniert und verkaufsfähig bleibt.
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
              <p>Aktuelle Einstiegspreise für Unternehmen und Selbstständige.</p>
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
            tone="light"
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
              className="rounded-[1.7rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,254,250,0.94),rgba(247,239,225,0.9))] p-5 shadow-premium"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D8B45A]/12 text-lg font-semibold text-[#D8B45A]">
                {step}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#151515]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[rgba(21,21,21,0.68)]">{text}</p>
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
            title="Für Unternehmen, die digital professioneller auftreten wollen."
            text="STRUKTIVA richtet sich an Unternehmen, Selbstständige und lokale Betriebe, die mehr Anfragen, mehr Ordnung und eine professionelle Online-Präsenz brauchen."
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
                Viele Betriebe verlieren Zeit durch Zettel, Excel-Listen, unklare Ablagen und Rückfragen vom Steuerberater.
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
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,252,246,0.98),rgba(248,241,229,0.96),rgba(244,235,218,0.92))] p-6 shadow-[0_24px_56px_rgba(83,62,22,0.08)] md:p-8 lg:p-10">
        <img src={struktivaImages.ctaBackdrop} alt="Moderner Arbeitsplatz als Hintergrund im Kontaktbereich" loading="lazy" decoding="async" className="contact-backdrop-image absolute inset-0 h-full w-full object-cover" />
        <div className="contact-surface-overlay absolute inset-0 bg-[linear-gradient(150deg,rgba(255,249,239,0.9),rgba(247,238,222,0.88),rgba(243,232,212,0.9))]" />
        <div className="relative z-[1]">
        <Reveal>
          <SectionHeader
            eyebrow="Kontakt"
            title="Bereit für eine digitale Struktur, die Ihr Unternehmen klarer verkauft?"
            text="Wenn Ihr Unternehmen online professioneller wirken, besser verstanden werden und schneller zu Anfragen führen soll, ist STRUKTIVA der richtige nächste Schritt."
            centered={false}
            tone="light"
          />
        </Reveal>

        <Reveal className="mt-5">
          <div className="grid gap-4 lg:grid-cols-[1.04fr_0.96fr]">
            <div className="contact-info-card rounded-[1.7rem] border border-white/80 bg-white/76 p-5 shadow-[0_18px_38px_rgba(83,62,22,0.05)] backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A9822D]">Wofür Sie anfragen können</p>
              <div className="mt-4 grid gap-3 text-sm leading-7 text-[#5B5348] md:grid-cols-2">
                {[
                  'Website oder Relaunch',
                  'Google-Sichtbarkeit',
                  'Landingpage für ein Angebot',
                  'WhatsApp- und Kontaktstruktur',
                  'Bewertungs- und QR-Code-System',
                  'App, Dashboard oder Ordnungssystem',
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-[#E9DEC9] bg-[#FFFDF8]/92 px-4 py-3 text-[#16120E]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="contact-info-card rounded-[1.7rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,249,238,0.88),rgba(248,240,225,0.82),rgba(243,233,214,0.76))] p-5 shadow-[0_18px_38px_rgba(83,62,22,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A9822D]">Schneller Start</p>
              <p className="mt-3 text-sm leading-7 text-[#5B5348]">
                Sie müssen noch nicht alles genau wissen. Beschreiben Sie kurz Ihr Unternehmen und die aktuelle Ausgangslage. STRUKTIVA sortiert den sinnvollen nächsten Schritt mit Ihnen gemeinsam.
              </p>
              <div className="mt-4 space-y-2 text-sm text-[#5B5348]">
                <p>• klare Ersteinschätzung statt Agentur-Blabla</p>
                <p>• passende Struktur statt unnötiger Komplettlösung</p>
                <p>• direkter Kontakt über E-Mail, Telefon oder WhatsApp</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 xl:grid-cols-[0.88fr_0.64fr_0.9fr] xl:items-start">
          <Reveal>
            <div className="contact-info-card rounded-[1.8rem] border border-white/80 bg-white/76 p-6 shadow-[0_18px_38px_rgba(83,62,22,0.05)] backdrop-blur-sm">
              <div className="grid gap-4 text-sm leading-7 text-[#5B5348]">
                <a href={`mailto:${contactDetails.email}`} className="transition hover:text-[#D8B45A]">
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#8B7A62]">E-Mail</span>
                  {contactDetails.email}
                </a>
                <a href={contactDetails.phoneHref} className="transition hover:text-[#D8B45A]">
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#8B7A62]">Telefon</span>
                  {contactDetails.phoneLabel}
                </a>
                <a href={contactDetails.whatsappHref} className="transition hover:text-[#D8B45A]">
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#8B7A62]">WhatsApp Business</span>
                  {contactDetails.whatsappLabel}
                </a>
                <a
                  href={contactDetails.linkedinHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#D8B45A]"
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#8B7A62]">LinkedIn</span>
                  LinkedIn-Profil ansehen
                </a>
                <a
                  href={contactDetails.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#D8B45A]"
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#8B7A62]">Instagram</span>
                  STRUKTIVA auf Instagram
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="contact-info-card rounded-[1.8rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,252,246,0.92),rgba(248,240,225,0.88))] p-6 shadow-[0_18px_38px_rgba(83,62,22,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A9822D]">Direkte Wege</p>
              <div className="mt-4 grid gap-3">
                <a
                  href={siteLinks.projectRequestForm}
                  className="inline-flex items-center justify-between rounded-[1.1rem] border border-[#E5D7B9] bg-white/88 px-4 py-3 text-sm font-semibold text-[#16120E] transition hover:border-[#D8B45A]/45 hover:text-[#A9822D]"
                >
                  Kontaktformular / Ersteinschätzung
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={contactDetails.whatsappHref}
                  className="inline-flex items-center justify-between rounded-[1.1rem] border border-[#E5D7B9] bg-white/88 px-4 py-3 text-sm font-semibold text-[#16120E] transition hover:border-[#D8B45A]/45 hover:text-[#A9822D]"
                >
                  WhatsApp Business
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={contactDetails.phoneHref}
                  className="inline-flex items-center justify-between rounded-[1.1rem] border border-[#E5D7B9] bg-white/88 px-4 py-3 text-sm font-semibold text-[#16120E] transition hover:border-[#D8B45A]/45 hover:text-[#A9822D]"
                >
                  Telefonischer Kontakt
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col gap-4">
              <a
                href={siteLinks.projectRequestForm}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(17,24,39,0.16)] transition hover:bg-[#A9822D] hover:-translate-y-0.5"
              >
                Kostenlose Ersteinschätzung anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={contactDetails.whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/28 bg-white/78 px-6 py-3.5 text-sm font-semibold text-[#16120E] transition hover:border-[#D8B45A]/45 hover:text-[#A9822D]"
              >
                Per WhatsApp Business kontaktieren
              </a>
              <a
                href={contactDetails.googleReviewHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5D7B9] bg-[#FFF9EE] px-6 py-3.5 text-sm font-semibold text-[#5B5348] transition hover:border-[#D8B45A]/45 hover:text-[#A9822D]"
              >
                Bewertung abgeben
              </a>
              <a
                href={contactDetails.linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5D7B9] bg-[#FFF9EE] px-6 py-3.5 text-sm font-semibold text-[#5B5348] transition hover:border-[#D8B45A]/45 hover:text-[#A9822D]"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn-Profil ansehen
              </a>
              <a
                href={contactDetails.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5D7B9] bg-[#FFF9EE] px-6 py-3.5 text-sm font-semibold text-[#5B5348] transition hover:border-[#D8B45A]/45 hover:text-[#A9822D]"
              >
                <Instagram className="h-4 w-4" />
                STRUKTIVA auf Instagram
              </a>
              <div className="contact-profile-grid grid gap-3 sm:grid-cols-2">
                {externalProfileLinks.slice(0, 4).map(([label, buttonLabel, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between rounded-full border border-[#E5D7B9] bg-[#FFF9EE] px-5 py-3 text-sm font-semibold text-[#151515] transition hover:border-[#D8B45A]/45 hover:text-[#A9822D]"
                  >
                    <span>{buttonLabel}</span>
                    <ArrowRight className="h-4 w-4 text-[#D8B45A]" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-5">
          <p className="text-sm leading-7 text-[rgba(21,21,21,0.7)]">
            Vernetzen Sie sich mit STRUKTIVA auf LinkedIn:{' '}
            <a
              href={contactDetails.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#D8B45A] transition hover:text-[#F2D98B]"
            >
              LinkedIn-Profil ansehen
            </a>
            {' '}oder auf Instagram:{' '}
            <a
              href={contactDetails.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#D8B45A] transition hover:text-[#F2D98B]"
            >
              STRUKTIVA auf Instagram
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
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.7rem] border border-white/65 bg-[linear-gradient(145deg,rgba(5,5,5,0.98),rgba(21,21,21,0.96),rgba(42,42,42,0.94))] shadow-premium">
        <div className="h-px w-full bg-[linear-gradient(90deg,rgba(216,180,90,0),rgba(216,180,90,0.75),rgba(216,180,90,0))]" />
        <div className="grid gap-8 px-6 py-7 text-sm text-[#E0BF6A] md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <p className="text-base font-semibold text-[#FFF8E8]">STRUKTIVA Unternehmensarchitektur</p>
            <p className="mt-3">Geführt von Jessica Wacker und Sven Matzke</p>
            <a href={`mailto:${contactDetails.email}`} className="mt-1 block transition hover:text-[#F2D98B]">{contactDetails.email}</a>
            <a href={contactDetails.phoneHref} className="mt-1 block transition hover:text-[#F2D98B]">{contactDetails.phoneLabel}</a>
            <a href={contactDetails.whatsappHref} className="mt-1 block transition hover:text-[#F2D98B]">WhatsApp Business</a>
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#CFC8B5]">
              {externalProfileLinks.map(([label, , href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#F2D98B]"
                >
                  {label}
                </a>
              ))}
            </div>
            <p className="mt-3 text-xs leading-6 text-[#CFC8B5]">Digitale Strukturen für Unternehmen, Selbstständige und lokale Dienstleister.</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D8B45A]">Leistungen</p>
            <div className="mt-3 grid gap-2">
              <a href={siteLinks.websites} className="transition hover:text-[#F2D98B]">Websites & Landingpages</a>
              <a href={siteLinks.kiAutomatisierung} className="transition hover:text-[#F2D98B]">KI & Automatisierung</a>
              <a href={siteLinks.leadSysteme} className="transition hover:text-[#F2D98B]">Lead-Systeme</a>
              <a href={siteLinks.paketePage} className="transition hover:text-[#F2D98B]">Pakete & Betreuung</a>
              <a href={siteLinks.referenzen} className="transition hover:text-[#F2D98B]">Referenzen</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D8B45A]">Unternehmen</p>
            <div className="mt-3 grid gap-2">
              <a href={siteLinks.home} className="transition hover:text-[#F2D98B]">Start</a>
              <a href={siteLinks.leistungenPage} className="transition hover:text-[#F2D98B]">Leistungen</a>
              <a href={siteLinks.about} className="transition hover:text-[#F2D98B]">Über uns</a>
              <a href={siteLinks.projectRequest} className="transition hover:text-[#F2D98B]">Projekt anfragen</a>
              <a href={siteLinks.contact} className="transition hover:text-[#F2D98B]">Kontakt</a>
              <a href={siteLinks.wissen} className="transition hover:text-[#F2D98B]">Wissen</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D8B45A]">Rechtliches & Bewertung</p>
            <div className="mt-3 grid gap-2">
              <a href={siteLinks.impressum} className="transition hover:text-[#F2D98B]">Impressum</a>
              <a href={siteLinks.datenschutz} className="transition hover:text-[#F2D98B]">Datenschutz</a>
              <a href={siteLinks.widerruf} className="transition hover:text-[#F2D98B]">Widerruf</a>
              <button
                type="button"
                className="text-left transition hover:text-[#F2D98B]"
                onClick={openCookieSettings}
              >
                Cookie-Einstellungen ändern
              </button>
            </div>
            <div className="mt-4 rounded-xl border border-white/18 bg-white/[0.04] px-3.5 py-3">
              <p className="text-sm font-medium text-[#FFF8E8]">Zufrieden mit STRUKTIVA?</p>
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
        <div className="border-t border-white/12 px-6 py-3.5 text-xs text-[#CFC8B5] md:flex md:items-center md:justify-between">
          <div>
            <p>© 2026 STRUKTIVA Unternehmensarchitektur. Alle Rechte vorbehalten.</p>
            <p className="mt-1 flex flex-wrap gap-x-2 gap-y-1">
              {externalProfileLinks.map(([label, , href], index) => (
                <React.Fragment key={label}>
                  {index > 0 ? <span aria-hidden="true">·</span> : null}
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-[#F2D98B]"
                  >
                    {label}
                  </a>
                </React.Fragment>
              ))}
            </p>
          </div>
          <p className="mt-1 md:mt-0">Digitale Strukturen. Klare Systeme. Mehr Wirkung.</p>
        </div>
      </div>
    </footer>
  )
}

function HeroSectionPremium() {
  return (
    <section id="start" className="hero-premium-section relative isolate scroll-mt-24 overflow-hidden px-5 pb-14 pt-8 lg:px-8 lg:pb-20 lg:pt-12">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/videos/struktiva-poster.jpg"
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchpriority="high"
          className="h-full w-full object-cover opacity-55"
        />
        <video
          className="hero-video-layer"
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/struktiva-poster.jpg"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
        >
          <source src="/videos/struktiva-background.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(252,248,238,0.92),rgba(248,241,226,0.9),rgba(242,232,211,0.84))]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(180deg,rgba(248,241,226,0),rgba(248,241,226,0.9))]" />
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[1.06fr_0.94fr] xl:items-center">
        <div className="max-w-[43rem]">
          <motion.div initial={false} animate="visible" variants={stagger} className="flex flex-col items-start">
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/70 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E1A15] shadow-[0_14px_32px_rgba(91,68,24,0.08)] backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              {brand.name}
            </motion.div>
            <motion.p variants={fadeUp} transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }} className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#A9822D]">
              Keine Einzellösung.
            </motion.p>
            <motion.h1 variants={fadeUp} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="metallic-display-title mt-3 max-w-[42rem] text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[62px] lg:leading-[1.02]">
              Digitale Lösungen für Webseiten, Kundenanfragen und klare Abläufe.
            </motion.h1>
            <motion.p variants={fadeUp} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mt-4 max-w-[38rem] text-[15px] leading-7 text-[#4E463A] md:text-[17px] md:leading-8">
              STRUKTIVA erstellt moderne Webseiten, Lead-Systeme, KI-gestützte Vorlagen und digitale Strukturen, die Unternehmen im Alltag wirklich nutzen können. Verständlich aufgebaut, professionell umgesetzt und Schritt für Schritt erweiterbar.
            </motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mt-6 max-w-[39rem] rounded-[1.8rem] border border-white/75 bg-white/66 p-4 shadow-[0_26px_54px_rgba(83,62,22,0.1)] backdrop-blur-md md:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A9822D]">Digitale Unternehmensarchitektur</p>
              <p className="mt-2 text-sm leading-7 text-[#4E463A] md:text-base">
                Der Einstieg soll sofort zeigen, welche digitalen Systeme sinnvoll zusammenarbeiten: Website, Sichtbarkeit, Kundenanfragen und interne Abläufe.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <a href={siteLinks.projectRequestForm} className="metallic-btn-primary inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5">
                Projekt anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={siteLinks.leistungenPage} className="metallic-btn-secondary inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition">
                Leistungen ansehen
              </a>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ['Website & Sichtbarkeit', 'Professioneller Einstieg für Angebot, Vertrauen und Auffindbarkeit.'],
                ['Lead-Systeme', 'Klare Anfragewege statt verstreuter Kontaktpunkte.'],
                ['KI & Automatisierung', 'Einfachere Abläufe, Vorlagen und digitale Ordnung im Alltag.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[1.45rem] border border-white/75 bg-white/58 p-4 shadow-[0_20px_40px_rgba(83,62,22,0.08)] backdrop-blur-md">
                  <p className="text-sm font-semibold text-[#1E1A15]">{title}</p>
                  <p className="mt-2 text-xs leading-6 text-[#5E564A]">{text}</p>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mt-6 flex flex-wrap gap-3 text-sm text-[#4E463A]">
              <a href={contactDetails.phoneHref} className="rounded-full border border-[#D8B45A]/28 bg-white/56 px-4 py-2 transition hover:border-[#D8B45A]/42 hover:text-[#A9822D]">
                {contactDetails.phoneLabel}
              </a>
              <a href={`mailto:${contactDetails.email}`} className="rounded-full border border-[#D8B45A]/28 bg-white/56 px-4 py-2 transition hover:border-[#D8B45A]/42 hover:text-[#A9822D]">
                {contactDetails.email}
              </a>
              <a href={contactDetails.whatsappHref} className="rounded-full border border-[#D8B45A]/30 bg-[#D8B45A]/12 px-4 py-2 font-medium text-[#8C6B28] transition hover:bg-[#D8B45A] hover:text-white">
                WhatsApp Business
              </a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div initial="hidden" animate="visible" variants={fadeRight} transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }} className="mx-auto w-full max-w-[25rem] lg:max-w-[27rem]">
          <div className="hero-architecture-card hero-3d-shell rounded-[1.9rem] border border-white/70 bg-white/54 p-3 shadow-[0_26px_54px_rgba(83,62,22,0.1)] backdrop-blur-xl">
            <div className="hero-3d-plane relative overflow-hidden rounded-[1.45rem] border border-[#D8B45A]/24 bg-[linear-gradient(180deg,rgba(18,22,29,0.96),rgba(31,39,51,0.94))] p-5">
              <div className="hero-architecture-grid" />
              <div className="hero-architecture-line hero-architecture-line-1" />
              <div className="hero-architecture-line hero-architecture-line-2" />
              <div className="hero-architecture-line hero-architecture-line-3" />
              <div className="relative z-[1]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D8B45A]/82">Digitale Architektur</p>
                <h2 className="mt-2 text-[1.35rem] font-semibold text-white">Verstehen. Vertrauen. Kontakt.</h2>
                <div className="mt-5 space-y-3">
                  {[
                    ['1', 'Sichtbarkeit', 'Website, Landingpages und digitale Präsenz greifen klar ineinander.'],
                    ['2', 'Anfragen', 'Kontaktwege, Formulare und Weiterleitungen werden systematisch aufgebaut.'],
                    ['3', 'Abläufe', 'Digitale Prozesse bleiben verständlich, nutzbar und erweiterbar.'],
                  ].map(([step, title, text]) => (
                    <div key={step} className="rounded-[1.1rem] border border-white/12 bg-white/[0.05] p-3.5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D8B45A]/28 bg-[#D8B45A]/10 text-xs font-semibold text-[#F2D98B]">
                          {step}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{title}</p>
                          <p className="mt-1 text-xs leading-6 text-[#D7DCE5]">{text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="metallic-result-box mt-4 rounded-[1rem] p-3.5">
                  <p className="metallic-result-label text-[11px] font-semibold uppercase tracking-[0.15em]">Ergebnis</p>
                  <p className="mt-1.5 text-[13px] leading-6 text-[#D7DCE5]">Ein klarer Einstieg, der digitale Systeme strukturiert zusammenführt.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-image-shell mt-4 overflow-hidden rounded-[1.65rem] border border-white/70 shadow-[0_22px_44px_rgba(83,62,22,0.08)]">
            <img
              src={struktivaImages.businessHero}
              alt="Moderne Business-Architektur mit strukturierter Stadtansicht"
              loading="eager"
              fetchpriority="high"
              className="h-48 w-full object-cover md:h-56"
            />
            <div className="hero-image-overlay">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F2D98B]">Premium-Umfeld</p>
              <p className="mt-1 text-sm text-[#ECE7DE]">Digitale Struktur, die professionell wirkt, Vertrauen aufbaut und den nächsten Schritt klar macht.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ServicesSectionPremium() {
  const leistungGruppen = [
    {
      title: 'Webseiten & Auftritt',
      items: ['professionelle Webseiten', 'Landingpages', 'Onepager', 'Unternehmenswebseiten', 'Website-Relaunch'],
    },
    {
      title: 'Sichtbarkeit & Kontaktwege',
      items: ['Google-Sichtbarkeit', 'digitale Kundenführung', 'WhatsApp-Kontaktstruktur', 'Bewertungsstruktur', 'QR-Code-Strukturen'],
    },
    {
      title: 'Kommunikation & Reichweite',
      items: ['Social-Media-Struktur', 'Newsletter-Einbindung'],
    },
    {
      title: 'Systeme & Unternehmensstruktur',
      items: ['Unternehmens-Apps', 'Betriebs-Dashboards', 'digitale Ordnungssysteme', 'Tagesabschluss-Systeme', 'Kassenstruktur-Systeme', 'interne Strukturbausteine', 'digitale Unternehmensarchitektur'],
    },
  ]

  return (
    <section id="leistungen" className="scroll-mt-28 px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Leistungen"
            title="Leistungen"
            text="Digitale Strukturen für Unternehmen, Selbstständige und lokale Dienstleister."
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
                  {isSoforthilfeCard ? <p className="mt-4 text-sm font-semibold text-[#D8B45A]">{service.price}</p> : null}
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

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {leistungGruppen.map((group) => (
            <article key={group.title} className="rounded-[1.7rem] border border-white/14 bg-white/[0.04] p-5 shadow-premium">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-[#D8B45A]/28 bg-[#D8B45A]/10 px-3 py-1 text-xs font-medium text-[#F2D98B]">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[1.8rem] border border-[#D8B45A]/24 bg-white/[0.05] p-6 shadow-premium">
          <p className="text-sm leading-7 text-[#D7DCE5] md:text-base">
            Die Kosten richten sich nach Umfang, Ausgangslage und gewünschter Struktur. Manche Betriebe benötigen nur eine einfache digitale Grundlage, andere eine vollständige Unternehmensstruktur mit Website, Google-Sichtbarkeit, Kontaktwegen, Kundenführung und internen Systemen. Deshalb besprechen wir zuerst, was wirklich sinnvoll ist.
          </p>
          <a href={siteLinks.contact} className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
            Kostenlose Ersteinschätzung anfragen
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

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
      'Viele Unternehmen investieren in Design, aber nicht in Kundenführung. Dieser Beitrag zeigt, warum Struktur wichtiger ist als reine Optik.',
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
    title: 'Die 5 digitalen Grundsysteme für Unternehmen',
    description:
      'Diese fünf Grundlagen sorgen dafür, dass Unternehmen online klar auftreten, Vertrauen aufbauen und dauerhaft anfragebereit sind.',
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
        heading: 'Was Unternehmen in der Regel brauchen',
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
            text="Praxisnahe Beiträge für Unternehmen, Selbstständige und lokale Betriebe, die ihren digitalen Auftritt klarer und wirksamer strukturieren möchten."
            centered={false}
            tone="light"
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
              className="group rounded-[1.7rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,254,250,0.94),rgba(247,239,225,0.9))] p-6 shadow-premium transition hover:-translate-y-1 hover:border-[#D8B45A]/35"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B98524]">Wissen</p>
              <h3 className="mt-3 text-xl font-semibold leading-8 text-[#151515]">{article.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[rgba(21,21,21,0.68)]">{article.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#B98524]">
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
            STRUKTIVA zeigt, wie Unternehmen, Selbstständige und lokale Betriebe digitale Systeme sinnvoll aufbauen: mit Website, Landingpages, Google-Sichtbarkeit, klaren Kontaktwegen und sauberen Abläufen.
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
  const impactSteps = [
    ['1', 'Sichtbarkeit aufbauen', 'Website, Google und digitale Präsenz werden so verbunden, dass Ihr Unternehmen klarer wahrgenommen wird.'],
    ['2', 'Vertrauen erzeugen', 'Design, Struktur, Bewertungen und professionelle Kommunikation schaffen einen hochwertigen ersten Eindruck.'],
    ['3', 'Kontaktwege vereinfachen', 'Telefon, E-Mail, Formular und WhatsApp werden sichtbar, verständlich und passend eingebunden.'],
    ['4', 'Anfragen strukturieren', 'Interessenten werden nicht dem Zufall überlassen, sondern gezielt zur richtigen Anfrage geführt.'],
    ['5', 'digitale Ordnung schaffen', 'Aus einzelnen Maßnahmen entsteht ein ruhiges, nutzbares System für Außenauftritt und Abläufe.'],
  ]

  return (
    <section id="leistungen" className="scroll-mt-28 px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rounded-[2rem] border border-[#E6D9BE] bg-[linear-gradient(180deg,rgba(252,249,243,0.98),rgba(246,238,224,0.94))] shadow-[0_24px_56px_rgba(83,62,22,0.08)]">
            <div className="theme-band-shell">
              <div className="theme-band-track" aria-hidden="true">
                {[0, 1].flatMap((copyIndex) =>
                  homeThemeBandItems.map((item) => (
                    <span key={`${copyIndex}-${item}`} className="theme-band-item">
                      {item}
                    </span>
                  )),
                )}
              </div>
            </div>
          </div>
        </Reveal>
        <div className="mt-10 rounded-[2.15rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,253,248,0.97),rgba(248,241,228,0.95),rgba(243,233,214,0.9))] p-6 shadow-[0_28px_60px_rgba(83,62,22,0.08)] md:p-8 lg:p-10">
          <div className="grid gap-8 xl:grid-cols-[0.78fr_1.22fr] xl:items-start">
            <div>
              <SectionHeader
                eyebrow="Was STRUKTIVA daraus macht"
                title="Aus einzelnen Themen wird ein klar geführter digitaler Auftritt."
                text="Die Begriffe oben sind keine losen Einzelleistungen. STRUKTIVA verbindet sie so, dass ein verständlicher Weg entsteht: vom ersten Eindruck über Vertrauen bis zur sauberen Anfrage und zu ruhigeren digitalen Abläufen."
                centered={false}
                tone="light"
              />
              <a href={siteLinks.contact} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
                Kostenlose Ersteinschätzung anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} variants={stagger} className="grid gap-3 md:grid-cols-2 xl:grid-cols-1">
              {impactSteps.map(([step, title, text]) => (
                <motion.article
                  key={step}
                  variants={fadeUp}
                  transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[1.5rem] border border-[#D8B45A]/26 bg-[linear-gradient(135deg,rgba(18,18,18,0.96),rgba(35,35,35,0.92))] p-4 shadow-[0_18px_42px_rgba(3,8,16,0.2)] backdrop-blur-md md:p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#F0C45C]/44 bg-[#D8B45A]/18 text-sm font-semibold text-[#FFF4D0] shadow-[0_6px_18px_rgba(0,0,0,0.16)]">
                      {step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#FFF8E8]">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[rgba(248,241,227,0.78)]">{text}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
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
            text="Bezahlbare digitale Struktur für Unternehmen, die professioneller auftreten und mehr Anfragen gewinnen möchten."
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
      title: 'Sichtbar werden',
      text: 'Außenwirkung, Auffindbarkeit und erster Eindruck greifen professionell ineinander.',
      points: ['klarer Auftritt statt Einzelbausteine', 'ruhige Leistungsdarstellung', 'sichtbare Relevanz für Google und Besucher'],
    },
    {
      title: 'Verstehen und anfragen',
      text: 'Interessenten sollen nicht rätseln, sondern den nächsten Schritt sofort erkennen.',
      points: ['klare Kontaktlogik', 'weniger Reibung bis zur Anfrage', 'vertrauensvolle digitale Führung'],
    },
    {
      title: 'Im Alltag weiterführen',
      text: 'Digitale Struktur endet nicht beim Design, sondern unterstützt auch Abläufe und Ordnung.',
      points: ['mehr Übersicht', 'saubere Übergänge zwischen Anfrage und Bearbeitung', 'erweiterbar um Systeme, Apps und Dashboards'],
    },
  ]

  return (
    <section className="px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Wie es zusammenarbeitet"
          title="STRUKTIVA denkt nicht in einzelnen Seiten, sondern in einer zusammenhängenden Wirkung."
          text="So bleibt der Auftritt hochwertig, verständlich und anschlussfähig: vom ersten Eindruck bis zu geordneten digitalen Abläufen."
          tone="light"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="rounded-[1.85rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(248,241,228,0.92))] p-6 shadow-[0_22px_46px_rgba(83,62,22,0.07)]">
              <h3 className="text-2xl font-semibold text-[#16120E]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5B5348]">{card.text}</p>
              <div className="mt-4 space-y-2 text-sm text-[#5B5348]">
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
  const chapters = [
    {
      id: 'webseiten-landingpages',
      eyebrow: 'Leistungsbereich 01',
      title: 'Webseiten & Landingpages',
      text: 'Für Unternehmen, die online klarer auftreten, Leistungen verständlicher zeigen und Besucher gezielt zur Anfrage führen möchten.',
      highlights: ['Professionelle Webseiten', 'Landingpages'],
      details: [
        'Professionelle Webseiten: Der digitale Hauptstandort Ihres Unternehmens. Geeignet für Unternehmen, Selbstständige und lokale Betriebe. Löst unklare Leistungsdarstellung und schwache Anfrageführung. Preis: ab 699 € inklusive Mehrwertsteuer.',
        'Landingpages: Gezielte Einzelseiten für ein konkretes Angebot oder eine Aktion. Geeignet für Kampagnen, Dienstleistungen und Angebotsseiten. Preis: ab 399 € inklusive Mehrwertsteuer.',
      ],
    },
    {
      id: 'google-sichtbarkeit',
      eyebrow: 'Leistungsbereich 02',
      title: 'Google-Sichtbarkeit',
      text: 'Für lokal arbeitende Unternehmen, die online nicht nur vorhanden sein, sondern verständlich auffindbar wirken wollen.',
      highlights: ['Google-Unternehmensprofil-Struktur', 'lokale Auffindbarkeit', 'klare Profilbausteine'],
      details: [
        'Google-Unternehmensprofil-Struktur: Strukturierter Aufbau der wichtigsten lokalen Google-Bausteine mit Leistungsbereichen, Beschreibung, Kontaktwegen, Bildstruktur und Profilklarheit.',
        'Geeignet für alle lokal arbeitenden Unternehmen. Preis: ab 199 € inklusive Mehrwertsteuer.',
      ],
    },
    {
      id: 'kundenfuehrung-anfragewege',
      eyebrow: 'Leistungsbereich 03',
      title: 'Kundenführung & Anfragewege',
      text: 'Damit Besucher nicht nur lesen, sondern schneller verstehen, Vertrauen aufbauen und zum passenden Kontaktweg geführt werden.',
      highlights: ['klare CTA-Führung', 'Angebotslogik', 'schnellere Anfragewege'],
      details: [
        'Kundenführung bedeutet bei STRUKTIVA: Leistungen klar strukturieren, Reibung im Kontakt verringern und digitale Wege so aufbauen, dass Anfragen nachvollziehbar und natürlich entstehen.',
        'Dieser Bereich verbindet Website-Struktur, Kontaktbuttons, Angebotslogik und die sinnvolle Führung zu Formular, Telefon oder WhatsApp.',
      ],
    },
    {
      id: 'whatsapp-kontaktstruktur',
      eyebrow: 'Leistungsbereich 04',
      title: 'WhatsApp-Kontaktstruktur',
      text: 'Für Betriebe mit schnellen Kontaktanfragen, die nicht in unklaren Nachrichten oder chaotischen Rückfragen enden sollen.',
      highlights: ['Direkte Buttons', 'vorbereitete Nachrichten', 'klare Anfrageführung'],
      details: [
        'WhatsApp-Kontaktstruktur: Ein professioneller Anfrageweg über WhatsApp mit direkter Einbindung über Website, Angebotsseiten oder Google.',
        'Geeignet für Betriebe mit schnellen Kontaktanfragen. Preis: ab 149 € inklusive Mehrwertsteuer.',
      ],
    },
    {
      id: 'bewertungs-qr-strukturen',
      eyebrow: 'Leistungsbereich 05',
      title: 'Bewertungs- & QR-Strukturen',
      text: 'Für Unternehmen mit direktem Kundenkontakt, die zufriedene Kunden einfacher zur Bewertung führen möchten.',
      highlights: ['Bewertungslink', 'QR-Code', 'Bewertungskarte'],
      details: [
        'Bewertungs- und QR-Code-System: Ein klarer Prozess für mehr und bessere Kundenbewertungen mit Bewertungslink, QR-Code, Bewertungskarte und Anfrage-Texten.',
        'Geeignet für Betriebe mit direktem Kundenkontakt. Preis: ab 149 € inklusive Mehrwertsteuer.',
      ],
    },
    {
      id: 'unternehmens-apps',
      eyebrow: 'Leistungsbereich 06',
      title: 'Unternehmens-Apps',
      text: 'Für Betriebe mit wiederkehrenden internen Abläufen, die einen eigenen digitalen Arbeitsbereich brauchen.',
      highlights: ['Termin-App', 'Kundenverwaltungs-App', 'Mitarbeiter-App', 'Aufgaben-App'],
      details: [
        'Unternehmens-App / Web-App: Digitaler Arbeitsbereich für wiederkehrende Abläufe und verteilte Informationen.',
        'Geeignet für Betriebe mit internen Prozessen und Tagesaufgaben. Preis: ab 999 € inklusive Mehrwertsteuer.',
      ],
    },
    {
      id: 'betriebs-dashboards',
      eyebrow: 'Leistungsbereich 07',
      title: 'Betriebs-Dashboards',
      text: 'Für Unternehmen, die Termine, Aufgaben, offene Punkte und Kennzahlen an einem Ort sichtbar machen wollen.',
      highlights: ['Tagesübersicht', 'Aufgaben', 'Kennzahlen', 'Notizbereiche'],
      details: [
        'Betriebs-Dashboard: Übersicht aller wichtigen Betriebsinformationen an einem Ort.',
        'Geeignet für Unternehmen mit mehreren Aufgabenbereichen. Preis: ab 799 € inklusive Mehrwertsteuer.',
      ],
    },
    {
      id: 'digitale-ordnungssysteme',
      eyebrow: 'Leistungsbereich 08',
      title: 'Digitale Ordnungssysteme',
      text: 'Für Teams und Selbstständige, die digitale Unordnung in Ablage, Prozessen und Tagesabläufen reduzieren möchten.',
      highlights: ['Digitale Ordnungssysteme', 'Tagesabschluss-Systeme', 'kassennahe Struktur'],
      details: [
        'Digitale Ordnungssysteme: Vorlagen, Checklisten, Ablagestruktur, Kundenprozesse und interne Standards. Preis: ab 899 € inklusive Mehrwertsteuer.',
        'Tagesabschluss-Systeme: Struktur für Tagesübersicht und interne Kontrolle. Preis: ab 899 € inklusive Mehrwertsteuer.',
        'Kassennahe Struktur und Tagesübersicht: Keine Kassensoftware, keine rechtliche Zertifizierung, sondern Struktur für interne Abläufe. Der Umfang wird passend zum Bedarf kalkuliert.',
      ],
    },
    {
      id: 'social-media-struktur',
      eyebrow: 'Leistungsbereich 09',
      title: 'Social-Media-Struktur',
      text: 'Für Betriebe, die regelmäßig sichtbar sein wollen und dafür eine klare Content-Struktur statt zufälliger Einzelbeiträge brauchen.',
      highlights: ['Profilstruktur', 'Beitragsideen', 'Kanalstruktur', 'Newsletter-Grundstruktur'],
      details: [
        'Social-Media-Struktur: Profilstruktur, Beitragsideen, Kanalplanung, Beschreibungstexte und Verlinkung. Preis: ab 199 € inklusive Mehrwertsteuer.',
        'Newsletter-Grundstruktur: Einfacher Einstieg in professionelle Kundenkommunikation mit Anmeldeeinbindung, Listenstruktur und Versandgrundlage. Preis: ab 199 € inklusive Mehrwertsteuer.',
      ],
    },
  ]

  return (
    <section className="px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Einzelmodule"
          title="Die Leistungsbereiche im Detail"
          text="Hier sehen Sie die einzelnen STRUKTIVA-Kapitel in ruhigerer Form. Sie können gezielt in den passenden Bereich einsteigen oder mehrere Strukturbausteine sinnvoll verbinden."
          tone="light"
        />
        <div className="mt-10 space-y-6">
          {chapters.map((chapter, index) => (
            <article
              key={chapter.id}
              id={chapter.id}
              className={`scroll-mt-28 rounded-[1.9rem] border p-6 shadow-premium md:p-7 ${
                index % 2 === 0
                  ? 'border-[#E5D7B9] bg-[linear-gradient(155deg,rgba(255,252,245,0.98),rgba(247,239,223,0.95))]'
                  : 'border-[#E5D7B9] bg-[linear-gradient(155deg,rgba(255,255,255,0.9),rgba(248,241,228,0.9))]'
              }`}
            >
              <div className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr] xl:items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D8B45A]/82">{chapter.eyebrow}</p>
                  <h3 className="mt-3 text-3xl font-semibold text-[#16120E]">{chapter.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-[#5B5348] md:text-base">{chapter.text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {chapter.highlights.map((item) => (
                      <span key={item} className="rounded-full border border-[#D8B45A]/24 bg-[#FFF9EB] px-3 py-1.5 text-[11px] font-medium text-[#9C7424]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid gap-3">
                  {chapter.details.map((detail) => (
                    <div key={detail} className="rounded-[1.2rem] border border-white/80 bg-white/74 px-4 py-3 text-sm leading-7 text-[#5B5348]">
                      {detail}
                    </div>
                  ))}
                  <a href={siteLinks.contact} className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-[#D8B45A]/35 px-4 py-2 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
                    Bereich anfragen
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-7 rounded-2xl border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,251,243,0.98),rgba(246,237,220,0.95))] p-5 shadow-[0_18px_40px_rgba(83,62,22,0.05)]">
          <h3 className="text-lg font-semibold text-[#16120E]">Strukturbausteine nach Bedarf</h3>
          <p className="mt-3 text-sm leading-7 text-[#5B5348] md:text-base">
            Digitale Strukturbausteine können einzeln geplant oder mit einem Paket kombiniert werden. Welche Bausteine sinnvoll sind, hängt vom Betrieb, den vorhandenen Abläufen und dem gewünschten Ziel ab.
          </p>
          <a href={siteLinks.contact} className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/35 px-5 py-2.5 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
            Struktur prüfen lassen
            <ArrowRight className="h-4 w-4" />
          </a>
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
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,254,250,0.96),rgba(247,239,225,0.94))] p-6 shadow-[0_24px_56px_rgba(83,62,22,0.07)] md:p-8">
        <SectionHeader
          eyebrow="Branchenlösungen"
          title="Digitale Struktur für Ihre Branche"
          text="Jede Branche braucht andere digitale Wege. STRUKTIVA entwickelt Strukturen, die zu Ihrem Betrieb passen."
          centered={false}
          tone="light"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map(([title, problemText, solutionText, cta, href, image, overlay]) => (
            <article key={title} className="industry-card group relative overflow-hidden rounded-2xl border border-[#E8D9B8]/72 bg-[linear-gradient(135deg,rgba(23,19,16,0.82),rgba(33,28,23,0.72))] p-4 shadow-[0_18px_38px_rgba(83,62,22,0.05)] transition hover:-translate-y-1 hover:border-[#D8B45A]/40">
              <img src={image} alt="" aria-hidden="true" loading="lazy" decoding="async" className="industry-card-image absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className={`industry-card-overlay absolute inset-0 bg-gradient-to-b ${overlay}`} />
              <div className="industry-card-content relative rounded-[1.2rem]">
                <h3 className="text-lg font-semibold text-[#FFF8E8]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[rgba(255,248,232,0.88)]">{problemText}</p>
                <p className="mt-2 text-sm leading-7 text-[rgba(255,248,232,0.88)]">{solutionText}</p>
                <a href={href} className="industry-card-link mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#F0C45C]">
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
        <div className="rounded-[2.1rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,254,250,0.96),rgba(247,239,225,0.94))] p-6 shadow-[0_24px_52px_rgba(83,62,22,0.07)] md:p-8">
          <div className="grid items-start gap-6 xl:grid-cols-[0.92fr_1.08fr]">
            <article className="h-fit self-start rounded-[1.7rem] border border-[#E5D7B9] bg-[linear-gradient(150deg,rgba(255,252,245,0.98),rgba(247,239,223,0.94))] p-6 shadow-[0_18px_40px_rgba(83,62,22,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B45A]/85">Entscheidungshilfe</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#16120E] md:text-4xl">Welches STRUKTIVA-Angebot passt zu Ihnen?</h2>
              <p className="mt-4 text-sm leading-8 text-[#5B5348] md:text-base">
                Nicht jedes Unternehmen braucht sofort alles. STRUKTIVA hilft Ihnen, mit der passenden digitalen Struktur zu starten und später sinnvoll zu erweitern.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {chips.map((chip) => (
                  <span key={chip} className="rounded-full border border-[#D8B45A]/28 bg-[#FFF9EB] px-3 py-1.5 text-xs font-semibold tracking-[0.08em] text-[#9C7424]">{chip}</span>
                ))}
              </div>
              <div className="mt-7 rounded-[1.35rem] border border-white/80 bg-white/72 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A9822D]">Typischer Weg</p>
                <div className="mt-3 space-y-3 text-sm text-[#5B5348]">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#D8B45A]" />
                    <p>Digitale Ausgangslage kurz prüfen</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#D8B45A]" />
                    <p>Passenden Startpunkt statt unnötiger Komplettlösung festlegen</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#D8B45A]" />
                    <p>Website, Google, Kontaktwege und Systeme sinnvoll erweitern</p>
                  </div>
                </div>
              </div>
              <a href={siteLinks.contact} className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
                Kostenlose Ersteinschätzung anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>

            <div className="space-y-3">
              {recommendations.map(([situation, recommendation, text, cta], index) => (
                <article key={situation} className="rounded-[1.45rem] border border-white/80 bg-white/74 p-4 transition hover:border-[#D8B45A]/30 hover:bg-[#fffaf0]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D8B45A]/28 bg-[#D8B45A]/10 text-xs font-semibold text-[#9C7424]">
                      {index + 1}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#94A3B8]">Situation</p>
                      <p className="mt-1 text-sm font-semibold text-[#16120E]">{situation}</p>
                      <p className="mt-2 text-sm font-semibold text-[#D8B45A]">Empfehlung: {recommendation}</p>
                      <p className="mt-2 text-sm leading-7 text-[#5B5348]">{text}</p>
                      <a href={siteLinks.contact} className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/35 px-4 py-2 text-xs font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
                        {cta}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={siteLinks.contact} className="inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/22 bg-white/70 px-6 py-3 text-sm font-semibold text-[#5B5348] transition hover:text-[#A9822D]">
              Digitale Struktur prüfen lassen
            </a>
            <a href={contactDetails.whatsappHref} className="inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/30 bg-[#D8B45A]/12 px-6 py-3 text-sm font-semibold text-[#9C7424] transition hover:bg-[#D8B45A] hover:text-white">
              Per WhatsApp vorsortieren
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function DemoUseCasesSection() {
  return (
    <section id="demos" className="scroll-mt-28 px-5 py-12 md:py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <ReferenceShowcaseSection />
        <DemosShowcaseSection />
      </div>
    </section>
  )
}

function ReferenceShowcaseSection() {
  const improvements = [
    ['Design', 'Moderner, hochwertiger und professioneller Auftritt statt einfacher Baukasten-Optik.'],
    ['Kundenführung', 'Klare Wege zu Termin-Anfrage, WhatsApp, Route und Kontakt.'],
    ['Sichtbarkeit', 'Lokale Struktur für Suchbegriffe wie Friseur, Calw und Wimberg.'],
    ['Vertrauen', 'Echte Eindrücke, Bewertungen, Galerie, Team-Bereich und klare Informationen.'],
    ['Struktur', 'Leistungen, Produkte, Öffnungszeiten, FAQ und Kontakt sauber geordnet.'],
    ['Conversion', 'Besucher werden besser geführt und finden schneller den passenden Kontaktweg.'],
  ]
  const salonKarolaTags = [
    'Website-Relaunch',
    'mobile Optimierung',
    'Kundenführung',
    'Google-Bewertungsstruktur',
    'WhatsApp-Kontaktweg',
    'lokale Sichtbarkeit',
  ]

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4 md:gap-5">
        <SectionHeader
          eyebrow="Referenzen"
          title="Referenzen"
          text="Echte Umsetzung statt Theorie: vorhandene Projekte zeigen, wie STRUKTIVA digitale Struktur in der Praxis aufbaut."
          tone="light"
        />
        <p className="rounded-full border border-[#D8B45A]/22 bg-[#FFF9EB] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A9822D]">
          Echtes Referenzprojekt
        </p>
      </div>
      <p className="mt-5 max-w-4xl text-sm leading-7 text-[#5B5348] md:mt-6 md:text-base md:leading-8">
        STRUKTIVA entwickelt keine Webseiten von der Stange. Am Beispiel von Salon Karola sieht man, wie aus einem einfachen Online-Auftritt ein moderner, vertrauensstarker Salon-Auftritt wurde.
      </p>

      <div id="salon-karola" className="mt-9 rounded-[2rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,252,246,0.98),rgba(247,238,222,0.95),rgba(242,232,213,0.9))] p-5 shadow-[0_24px_56px_rgba(83,62,22,0.07)] md:mt-10 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A9822D]">Echtes Referenzprojekt</p>
        <h3 className="mt-2 text-2xl font-semibold text-[#16120E] md:text-4xl">Salon Karola – Website, Kundenführung und digitale Struktur</h3>
        <p className="mt-3 text-sm leading-7 text-[#5B5348] md:text-base md:leading-8">
          Für Salon Karola wurde eine moderne digitale Präsenz aufgebaut, die Leistungen, Kontaktwege, Bewertungen und Kundeninformationen klarer strukturiert. Ziel war eine verständliche, mobil optimierte Website mit hochwertiger Darstellung und einfacher Kontaktaufnahme.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {salonKarolaTags.map((tag) => (
            <span key={tag} className="inline-flex rounded-full border border-[#D8B45A]/32 bg-[#FFF6E4] px-3 py-1.5 text-[11px] font-semibold text-[#A9822D]">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm font-medium text-[#9C7424] md:text-base">Von der einfachen Baukasten-Webseite zur modernen digitalen Salon-Struktur.</p>
        <p className="mt-4 max-w-5xl text-sm leading-7 text-[#5B5348] md:text-base md:leading-8">
          Aus einer einfachen Webseite wurde ein moderner Salon-Auftritt mit klarer Kundenführung, hochwertigem Design und besserer lokaler Struktur.
          STRUKTIVA hat die Seite für Salon Karola in Calw-Wimberg neu aufgebaut und um WhatsApp, Google-Bewertungen, Leistungen, Galerie, FAQ und lokale SEO-Struktur erweitert.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a href={siteLinks.salonKarolaReferenz} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5D7B9] bg-white/88 px-5 py-3 text-sm font-semibold text-[#16120E] transition hover:border-[#D8B45A]/45 hover:text-[#A9822D]">
            Referenz ansehen
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="https://salon-karola-webseite.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
            Live-Website öffnen
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-6 grid gap-4 md:mt-7 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/85 bg-white/82 p-5 shadow-[0_16px_36px_rgba(83,62,22,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8B7A62]">Vorher</p>
            <h4 className="mt-1 text-xl font-semibold text-[#16120E]">Alte Baukasten-Webseite</h4>
            <ul className="mt-3 space-y-1.5 text-sm leading-7 text-[#5B5348]">
              <li>• Basisinformationen vorhanden</li>
              <li>• einfache Seitenstruktur</li>
              <li>• wenig emotionale Kundenführung</li>
              <li>• wenig moderne Markenwirkung</li>
              <li>• Kontakt vorhanden, aber nicht verkaufsstark geführt</li>
              <li>• klassische Informationsseite ohne starke digitale Struktur</li>
            </ul>
            <a href="https://salonkarola.simdif.com/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#E5D7B9] bg-[#FFF9EE] px-4 py-2 text-sm font-semibold text-[#16120E] transition hover:border-[#D8B45A]/45 hover:text-[#A9822D]">
              Alte Seite ansehen
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>

          <article className="rounded-2xl border border-[#D8B45A]/36 bg-[linear-gradient(160deg,rgba(255,247,231,0.98),rgba(248,237,211,0.94),rgba(241,227,191,0.88))] p-5 shadow-[0_18px_40px_rgba(169,130,45,0.09)]">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A9822D]">Nachher</p>
            <h4 className="mt-1 text-xl font-semibold text-[#16120E]">Neue digitale Salon-Struktur</h4>
            <ul className="mt-3 space-y-1.5 text-sm leading-7 text-[#5B5348]">
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

        <div className="mt-7 md:mt-8">
          <h4 className="text-2xl font-semibold text-[#16120E]">Was STRUKTIVA verbessert hat</h4>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {improvements.map(([title, text]) => (
              <article key={title} className="rounded-xl border border-white/85 bg-white/78 p-4 shadow-[0_14px_30px_rgba(83,62,22,0.04)]">
                <p className="text-sm font-semibold text-[#A9822D]">{title}</p>
                <p className="mt-1.5 text-sm leading-6 text-[#5B5348] md:leading-7">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

function DemosShowcaseSection() {
  const industryDemos = [
    {
      title: 'Handwerker-Demo',
      text: 'Klare Website-Struktur für Handwerker mit Leistungen, Einsatzgebiet, Vertrauen und direkter Anfrageführung.',
      href: siteLinks.demoHandwerkerV2,
      image: demoV2Images.handwerkerHero,
    },
    {
      title: 'Kosmetikstudio-Demo',
      text: 'Elegante Website-Struktur für Kosmetikstudios mit Behandlungen, Buchungswegen, Bildern und klarer Kundenführung.',
      href: siteLinks.demoKosmetikstudioV2,
      image: demoV2Images.kosmetikHero,
    },
    {
      title: 'Lokaler-Dienstleister-Demo',
      text: 'Digitale Struktur für lokale Betriebe mit Leistungen, Vertrauen, Anfragewegen und sauberer Kundenführung.',
      href: siteLinks.demoDienstleister,
      image: struktivaImages.localBusiness,
    },
    {
      title: 'Friseur & Salon',
      text: 'Ein Beispiel dafür, wie eine moderne Salon-Website Leistungen, Kontaktwege, Bewertungen und Kundenführung klar verbinden kann – umgesetzt am Projekt Salon Karola.',
      href: siteLinks.salonKarolaReferenz,
      image: demoV2Images.friseurHero,
      ctaLabel: 'Salon-Karola-Referenz ansehen',
      badgeLabel: 'Beispiel aus der Praxis: Salon Karola',
    },
    {
      title: 'Bewertungsstruktur-Demo',
      text: 'Beispielseite für QR-Code, Bewertungslink und digitale Bewertungsführung im Alltag.',
      href: siteLinks.demoBewertungsstrukturV2,
      image: demoV2Images.bewertungHero,
    },
    {
      title: 'Dashboard-Demo',
      text: 'Digitale Übersicht für Aufgaben, Kennzahlen, Abläufe und interne Struktur in Unternehmen.',
      href: siteLinks.demoDashboardV2,
      image: demoV2Images.dashboardHero,
    },
  ]

  return (
    <>
      <div className="mt-10 md:mt-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h3 className="text-3xl font-semibold text-[#16120E]">Demo-Beispiele für weitere Branchen</h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5B5348] md:text-base md:leading-8">
              Einblicke in bestehende Beispielseiten zeigen, wie digitale Strukturen in verschiedenen Branchen konkret aussehen können.
            </p>
          </div>
          <a href={siteLinks.projectRequestForm} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#D8B45A]/35 bg-[#FFF9EE] px-5 py-2.5 text-sm font-semibold text-[#A9822D] transition hover:bg-[#D8B45A] hover:text-white sm:w-fit">
            So eine Struktur anfragen
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-5 grid gap-4 md:mt-6 xl:grid-cols-2">
          {industryDemos.map((demo) => (
            <article key={demo.title} className="group relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/76 p-5 shadow-[0_18px_40px_rgba(83,62,22,0.05)] transition duration-300 hover:-translate-y-1">
              <img src={demo.image} alt={`Vorschau ${demo.title}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-16 transition duration-500 group-hover:scale-105 group-hover:opacity-24" />
              <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,252,246,0.84),rgba(248,240,225,0.76),rgba(243,233,214,0.88))]" />
              <div className="relative flex h-full flex-col">
                <h4 className="text-2xl font-semibold text-[#16120E]">{demo.title}</h4>
                <p className="mt-2 text-sm leading-6 text-[#5B5348] md:leading-7">{demo.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex rounded-full border border-[#D8B45A]/32 bg-[#FFF6E4] px-2.5 py-1 text-[11px] font-semibold text-[#A9822D]">{demo.badgeLabel || 'Demo-Beispiel'}</span>
                  <span className="inline-flex rounded-full border border-[#E5D7B9] bg-white/82 px-2.5 py-1 text-[11px] text-[#5B5348]">Branchenvorschau</span>
                </div>
                <div className="mt-auto pt-6">
                  <a href={demo.href} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#E5D7B9] bg-white/88 px-4 py-2 text-sm font-semibold text-[#16120E] transition hover:border-[#D8B45A]/45 hover:text-[#A9822D] sm:w-auto">
                    {demo.ctaLabel || 'Demo ansehen'}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-9 rounded-[1.8rem] border border-[#E5D7B9] bg-[linear-gradient(155deg,rgba(255,250,240,0.98),rgba(248,240,224,0.94),rgba(243,232,212,0.9))] p-5 shadow-[0_22px_48px_rgba(83,62,22,0.07)] md:mt-10 md:p-6">
          <h3 className="text-3xl font-semibold text-[#16120E]">Soll dein Unternehmen auch so klar wirken?</h3>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-[#5B5348] md:text-base md:leading-8">
            STRUKTIVA erstellt digitale Strukturen für Unternehmen, Selbstständige und lokale Dienstleister – von der Website über Google-Sichtbarkeit bis zu klaren Kontaktwegen.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap">
            <a href={siteLinks.projectRequestForm} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D] sm:w-auto">
              Kostenlose Ersteinschätzung anfragen
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={siteLinks.demos} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#E5D7B9] bg-white/82 px-5 py-3 text-sm font-semibold text-[#16120E] transition hover:border-[#D8B45A]/45 hover:text-[#A9822D] sm:w-auto">
              Alle Demos ansehen
            </a>
            <a href={contactDetails.whatsappHref} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#D8B45A]/30 bg-[#FFF6E4] px-5 py-3 text-sm font-semibold text-[#A9822D] transition hover:bg-[#D8B45A] hover:text-white sm:w-auto">
              WhatsApp-Kontakt starten
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

function WhyStruktivaSection() {
  const points = [
    ['Mehr als Webdesign', 'STRUKTIVA verbindet Website, Google, Kontaktwege, Bewertungen und digitale Abläufe.'],
    ['Für Unternehmen entwickelt', 'Keine überkomplizierten Systeme, sondern verständliche digitale Struktur.'],
    ['Klarer Aufbau statt Einzelbaustellen', 'Alle digitalen Bausteine sollen sinnvoll zusammenarbeiten.'],
    ['Persönliche und direkte Umsetzung', 'Kurze Wege, klare Abstimmung und verständliche Entscheidungen.'],
    ['Erweiterbar statt starr', 'Sie können klein starten und später weitere Strukturbausteine ergänzen.'],
    ['Seriöse Kommunikation', 'Keine unrealistischen Versprechen, sondern klare Struktur, bessere Grundlagen und professionelle Wirkung.'],
  ]

  return (
    <section className="px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,254,250,0.96),rgba(247,239,225,0.94))] p-6 shadow-[0_24px_56px_rgba(83,62,22,0.07)] md:p-8">
        <SectionHeader eyebrow="Vertrauen" title="Warum STRUKTIVA?" text="STRUKTIVA ist kein normaler Webseitenanbieter, sondern Ihr digitaler Strukturpartner." centered={false} tone="light" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {points.map(([title, text]) => (
            <article key={title} className="rounded-[1.45rem] border border-white/80 bg-white/70 p-4 shadow-[0_16px_36px_rgba(83,62,22,0.05)]">
              <h3 className="text-lg font-semibold text-[#16120E]">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#5B5348]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function BetreuungSection() {
  const plans = [
    ['Basis-Betreuung', 'ab 199 € / Monat', 'inklusive Mehrwertsteuer', 'Für kleinere laufende Anpassungen, Pflege und einfache Aktualisierungen.'],
    ['Struktur-Betreuung', 'ab 299 € / Monat', 'inklusive Mehrwertsteuer', 'Für regelmäßige Weiterentwicklung, Strukturpflege, Inhalte, Kontaktwege und Sichtbarkeit.'],
    ['Premium-Betreuung', 'ab 499 € / Monat', 'inklusive Mehrwertsteuer', 'Für intensive laufende Betreuung, Erweiterungen, Systeme, Strukturaufbau und digitale Weiterentwicklung.'],
  ]

  return (
    <section className="px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,253,248,0.97),rgba(248,241,228,0.95),rgba(243,233,214,0.9))] p-6 shadow-[0_24px_56px_rgba(83,62,22,0.07)] md:p-8">
        <SectionHeader
          eyebrow="Monatliche Betreuung"
          title="Laufende Betreuung für Ihre digitale Struktur"
          text="Digitale Struktur endet nicht mit der Veröffentlichung. Auf Wunsch begleitet STRUKTIVA Ihr Unternehmen dauerhaft bei Pflege, Anpassungen, Sichtbarkeit, Inhalten und Erweiterungen."
          centered={false}
          tone="light"
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {plans.map(([title, price, vatHint, text]) => (
            <article key={title} className="rounded-2xl border border-white/80 bg-white/72 p-5 shadow-[0_16px_36px_rgba(83,62,22,0.05)]">
              <h3 className="text-xl font-semibold text-[#16120E]">{title}</h3>
              <p className="mt-2 text-lg font-semibold text-[#D8B45A]">{price}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-[#A9822D]">{vatHint}</p>
              <p className="mt-3 text-sm leading-7 text-[#5B5348]">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-7 rounded-2xl border border-[#E5D7B9] bg-white/68 p-5 shadow-[0_16px_36px_rgba(83,62,22,0.05)]">
          <h3 className="text-lg font-semibold text-[#16120E]">Betreuung nur, wenn sie wirklich sinnvoll ist</h3>
          <p className="mt-3 text-sm leading-7 text-[#5B5348] md:text-base">
            Monatliche Betreuung ist für Unternehmen gedacht, die regelmäßig Unterstützung brauchen – zum Beispiel bei Website-Pflege, neuen Inhalten, Anpassungen, Google-Sichtbarkeit, Bewertungsstruktur, Kontaktwegen oder digitalen Systemen.
          </p>
          <p className="mt-2 text-sm leading-7 text-[#5B5348] md:text-base">
            Wenn Sie nur eine Website möchten und später nur gelegentlich etwas ändern lassen, ist keine monatliche Betreuung zwingend notwendig. In diesem Fall können einzelne Anpassungen separat nach Aufwand angefragt werden.
          </p>
          <p className="mt-2 text-sm leading-7 text-[#5B5348] md:text-base">
            Wir empfehlen keine Betreuung, wenn sie nicht notwendig ist. Vorab klären wir ehrlich, ob ein monatliches Paket sinnvoll ist oder ob einzelne Änderungen ausreichen.
          </p>
        </div>
        <div className="mt-5 rounded-2xl border border-white/80 bg-white/72 p-5 shadow-[0_16px_36px_rgba(83,62,22,0.05)]">
          <h3 className="text-base font-semibold text-[#16120E]">Einzelne Änderungen sind auch möglich</h3>
          <p className="mt-2 text-sm leading-7 text-[#5B5348] md:text-base">
            Kleine Textänderungen, neue Bilder, einzelne neue Abschnitte oder gelegentliche Anpassungen können auch separat umgesetzt werden, wenn kein laufender Betreuungsbedarf besteht.
          </p>
          <a href={siteLinks.contact} className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/35 px-5 py-2.5 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
            Änderung anfragen
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-5 rounded-2xl border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,251,243,0.98),rgba(246,237,220,0.95))] p-5 shadow-[0_16px_36px_rgba(83,62,22,0.05)]">
          <h3 className="text-base font-semibold text-[#16120E]">Keine monatlichen Kosten bei seltenen Einzeländerungen</h3>
          <p className="mt-2 text-sm leading-7 text-[#5B5348] md:text-base">
            Monatliche Betreuung fällt nicht für einzelne Leistungen an und ist auch nicht notwendig, wenn nur gelegentlich kleine Änderungen gewünscht sind – zum Beispiel alle paar Wochen oder alle paar Monate ein Text, ein Bild oder ein kleiner Abschnitt. Solche Anpassungen können separat nach Aufwand angefragt werden.
          </p>
          <p className="mt-2 text-sm leading-7 text-[#5B5348] md:text-base">
            Monatliche Betreuung ist nur sinnvoll, wenn regelmäßig laufender Aufwand entsteht, zum Beispiel durch Pflege, Erweiterungen, neue Inhalte, Google-Sichtbarkeit, Kontaktwege, Bewertungen oder digitale Systeme.
          </p>
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
  const packages = [
    {
      title: 'STRUKTIVA Soforthilfe',
      price: 'ab 99 € inklusive Mehrwertsteuer',
      text: 'Für kleine Einzelmaßnahmen, schnelle Anpassungen und klar begrenzte digitale Aufgaben.',
      points: ['Website-Anpassungen', 'kurze Texte', 'Google- oder Social-Media-Texte', 'WhatsApp- und Bewertungstexte'],
      cta: 'Soforthilfe anfragen',
    },
    {
      title: 'Website Start',
      price: 'ab 499 € inklusive Mehrwertsteuer',
      text: 'Für Betriebe, die eine faire und saubere erste Website- oder Onepager-Grundlage brauchen.',
      points: ['Onepager-Grundstruktur', 'klare Leistungsdarstellung', 'Kontaktbereich', 'mobile Optimierung', 'einfache Kundenführung'],
      cta: 'Website Start anfragen',
    },
    {
      title: 'Sichtbarkeits-Paket',
      price: 'ab 799 € inklusive Mehrwertsteuer',
      text: 'Für Unternehmen, die Website, lokale Sichtbarkeit, Bewertungen und Kontaktwege professioneller verbinden möchten.',
      points: ['Website- oder Landingpage-Struktur', 'Google-Sichtbarkeitsgrundlage', 'Bewertungs- und QR-Struktur', 'WhatsApp- und Kontaktweg', 'Vertrauenselemente'],
      cta: 'Sichtbarkeits-Paket anfragen',
    },
    {
      title: 'Struktur-Paket',
      price: 'ab 1.199 € inklusive Mehrwertsteuer',
      text: 'Für Betriebe, die mehrere digitale Bausteine als zusammenhängende Struktur brauchen.',
      points: ['mehrseitige Website-Struktur', 'Lead- oder Anfrage-System', 'digitale Angebotslogik', 'Kontakt- und Bewertungsstruktur', 'erweiterbare Strukturbausteine'],
      cta: 'Struktur-Paket anfragen',
    },
    {
      title: 'Premium-Struktur',
      price: 'ab 1.499 € inklusive Mehrwertsteuer',
      text: 'Für umfangreichere Vorhaben mit hochwertiger digitaler Struktur und mehreren Systembausteinen.',
      points: ['Premium-Webauftritt', 'digitale Kundenführung', 'Dashboard- oder App-Konzept möglich', 'interne Strukturbausteine', 'skalierbare Weiterentwicklung'],
      cta: 'Premium-Struktur anfragen',
    },
  ]

  const betreuung = [
    'Basis-Betreuung ab 199 € / Monat inklusive Mehrwertsteuer',
    'Struktur-Betreuung ab 299 € / Monat inklusive Mehrwertsteuer',
    'Premium-Betreuung ab 499 € / Monat inklusive Mehrwertsteuer',
  ]

  return (
    <section id="preise" className="scroll-mt-28 px-5 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader eyebrow="Pakete & Preise" title="Fünf klare Einstiegsmöglichkeiten" text="Die Pakete geben Orientierung und machen den Start planbar." tone="light" />
        </Reveal>

        <div className="mt-10 grid gap-5 xl:grid-cols-[0.82fr_1.18fr]">
          <article className="rounded-[2rem] border border-[#D8B45A]/28 bg-[linear-gradient(135deg,rgba(18,18,18,0.96),rgba(35,35,35,0.92))] p-6 shadow-[0_24px_52px_rgba(3,8,16,0.2)] md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B45A]">Preislogik</p>
            <h3 className="mt-3 text-3xl font-semibold text-[#FFF8E8] md:text-4xl">Nicht das größte Paket zuerst. Sondern der sinnvollste Einstieg.</h3>
            <p className="mt-4 text-sm leading-8 text-[rgba(248,241,227,0.76)] md:text-base">
              Die Pakete geben Orientierung. Sie zeigen, mit welchem Umfang Unternehmen meist starten und wie sich daraus eine klare digitale Struktur entwickeln lässt.
            </p>
            <p className="mt-4 text-sm leading-8 text-[rgba(248,241,227,0.76)] md:text-base">
              Sie können einzelne Leistungen gezielt buchen oder mehrere Bausteine zu einem passenden STRUKTIVA-Paket kombinieren. So bleibt der Einstieg fair und die Umsetzung wächst mit dem tatsächlichen Bedarf.
            </p>
            <div className="mt-6 space-y-3">
              {[
                'Soforthilfe für kleine Einzelmaßnahmen.',
                'Website Start für die erste digitale Grundlage.',
                'Sichtbarkeit für Website, Google und Kontaktwege.',
                'Struktur für mehrere verbundene Bausteine.',
                'Premium-Struktur für umfangreichere Vorhaben.',
              ].map((item, index) => (
                <div key={item} className="flex items-start gap-3 rounded-[1.15rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-[rgba(248,241,227,0.76)]">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#F0C45C]/44 bg-[#D8B45A]/16 text-[11px] font-semibold text-[#FFF4D0]">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a href={siteLinks.projectRequestForm} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-[#16120E] transition hover:bg-[#F0C45C]">
              Passendes Paket anfragen
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>

          <div className="grid gap-5 md:grid-cols-2">
            {packages.map((pkg, index) => (
              <article key={pkg.title} className={`rounded-[1.8rem] border p-5 shadow-[0_20px_44px_rgba(3,8,16,0.18)] ${index === 2 ? 'border-[#D8B45A]/38 bg-[linear-gradient(135deg,rgba(24,20,15,0.98),rgba(47,37,21,0.95),rgba(35,29,22,0.94))]' : 'border-[#D8B45A]/24 bg-[linear-gradient(135deg,rgba(18,18,18,0.96),rgba(35,35,35,0.92))]'}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D8B45A]/88">Paket {index + 1}</p>
                    <h4 className="mt-2 text-xl font-semibold text-[#FFF8E8]">{pkg.title}</h4>
                  </div>
                  {index === 2 ? (
                    <span className="rounded-full border border-[#F0C45C]/38 bg-[#D8B45A]/16 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FFF4D0]">
                      häufig gewählt
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-sm font-semibold text-[#F0C45C]">{pkg.price}</p>
                <p className="mt-3 text-sm leading-7 text-[rgba(248,241,227,0.76)]">{pkg.text}</p>
                <div className="mt-4 space-y-2 text-sm text-[rgba(248,241,227,0.76)]">{pkg.points.map((point) => <p key={point}>- {point}</p>)}</div>
                <a href={siteLinks.projectRequestForm} className="package-card-cta mt-5 inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/42 bg-[linear-gradient(135deg,rgba(216,180,90,0.18),rgba(216,180,90,0.08))] px-4 py-2 text-sm font-semibold text-[#FFF8E8] shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition hover:bg-[#D8B45A] hover:text-[#16120E]">
                  {pkg.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[1.7rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,254,250,0.96),rgba(247,239,225,0.94))] p-6 shadow-[0_20px_44px_rgba(83,62,22,0.06)]">
            <h3 className="text-2xl font-semibold text-[#16120E]">Monatliche Betreuung</h3>
            <p className="mt-2 text-sm leading-7 text-[#5B5348]">Für laufende Pflege, Anpassungen, Weiterentwicklung und digitale Struktur im Betrieb.</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3 lg:grid-cols-1">
              {betreuung.map((item) => (
                <p key={item} className="rounded-xl border border-white/80 bg-white/72 px-3 py-2 text-sm text-[#5B5348]">{item}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[1.7rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,251,243,0.98),rgba(246,237,220,0.95))] p-6 shadow-[0_20px_44px_rgba(83,62,22,0.06)]">
            <h3 className="text-2xl font-semibold text-[#16120E]">Pakete sind nicht zwingend</h3>
            <p className="mt-3 text-sm leading-7 text-[#5B5348]">
              Unsere Pakete geben Orientierung und machen den Einstieg einfacher. Auf Wunsch können einzelne Leistungen aber auch separat geplant und umgesetzt werden – zum Beispiel nur eine Landingpage, ein Website-Relaunch, ein Dashboard, eine WhatsApp-Kontaktstruktur, eine Bewertungsstruktur oder ein digitales Ordnungssystem.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#5B5348]">
              Nach einer kurzen Einschätzung sagen wir ehrlich, ob ein Paket sinnvoll ist oder ob eine einzelne Leistung ausreicht.
            </p>
            <a href={siteLinks.contact} className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/40 px-5 py-2.5 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
              Einzelleistung anfragen
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
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
    ['Für welche Branchen ist STRUKTIVA geeignet?', 'Für Unternehmen, Selbstständige, lokale Dienstleister, Handwerker, Friseursalons, Kosmetikstudios und Beratungsbetriebe.'],
    ['Ist Google-Sichtbarkeit garantiert?', 'Nein. Seriöse Sichtbarkeit kann nicht garantiert werden. STRUKTIVA schafft eine bessere strukturelle Grundlage für Auffindbarkeit, Vertrauen und klare Kontaktwege.'],
    ['Ersetzt STRUKTIVA ein Kassensystem?', 'Nein. STRUKTIVA ersetzt keine zertifizierte Kassensoftware. Wir entwickeln digitale Strukturbausteine für Übersicht, Tageskontrolle und interne Abläufe.'],
    ['Kann meine bestehende Website verbessert werden?', 'Ja. Bestehende Websites können analysiert, strukturiert, modernisiert oder neu aufgebaut werden.'],
    ['Gibt es monatliche Betreuung?', 'Ja. Betreuungsangebote starten ab 199 € / Monat inklusive Mehrwertsteuer.'],
    ['Was ist eine Unternehmens-App?', 'Eine Unternehmens-App oder Web-App ist ein digitaler Arbeitsbereich für Termine, Aufgaben, Kunden und interne Prozesse.'],
    ['Was ist ein Betriebs-Dashboard?', 'Ein Betriebs-Dashboard bündelt wichtige Informationen wie Termine, Aufgaben, offene Punkte und Kennzahlen.'],
  ]

  return (
    <section className="px-5 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,254,250,0.96),rgba(247,239,225,0.94))] p-6 shadow-[0_24px_52px_rgba(83,62,22,0.07)] md:p-8">
        <SectionHeader eyebrow="FAQ" title="Häufige Fragen" text="Klar, verständlich und ohne Agentur-Blabla." tone="light" />
        <div className="mt-8 space-y-3">
          {faqs.map(([q, a], index) => (
            <article key={q} className="rounded-2xl border border-white/80 bg-white/74 shadow-[0_12px_28px_rgba(83,62,22,0.04)]">
              <button
                type="button"
                onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
                className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
              >
                <h3 className="text-base font-semibold text-[#16120E]">{q}</h3>
                <ChevronDown className={`h-4 w-4 text-[#D8B45A] transition ${openIndex === index ? 'rotate-180' : 'rotate-0'}`} />
              </button>
              {openIndex === index ? (
                <div className="border-t border-[#EDE4D2] px-4 pb-4 pt-3">
                  <p className="text-sm leading-7 text-[#5B5348]">{a}</p>
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
      <div className="mx-auto max-w-7xl rounded-[2.1rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,252,246,0.98),rgba(247,238,222,0.95))] p-6 shadow-[0_24px_52px_rgba(83,62,22,0.08)] md:p-8">
        <div className="grid gap-6 xl:grid-cols-[1.06fr_0.94fr] xl:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B45A]/85">Nächster Schritt</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-[#16120E] md:text-4xl">Lassen Sie Ihre digitale Struktur prüfen.</h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-[#5B5348] md:text-base">
              Sie möchten wissen, welche Website-, Google- oder Kontaktstruktur für Ihr Unternehmen sinnvoll ist? Dann fragen Sie eine unverbindliche Ersteinschätzung an.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                'schnelle Ersteinschätzung statt langem Agenturprozess',
                'klarer sinnvoller Startpunkt statt technischer Überforderung',
                'Kontakt direkt über Formular, E-Mail oder Telefon',
              ].map((item) => (
                <div key={item} className="rounded-[1.2rem] border border-white/80 bg-white/72 px-4 py-3 text-sm leading-7 text-[#5B5348]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.7rem] border border-white/80 bg-white/72 p-5 shadow-[0_18px_40px_rgba(83,62,22,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D8B45A]/85">Direkt erreichbar</p>
            <div className="mt-4 grid gap-3">
              <a href={siteLinks.contact} className="inline-flex items-center justify-between rounded-[1.15rem] bg-[#D8B45A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
                Kostenlose Ersteinschätzung anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={`mailto:${contactDetails.email}`} className="inline-flex items-center justify-between rounded-[1.15rem] border border-[#D8B45A]/18 bg-white px-4 py-3 text-sm font-semibold text-[#5B5348] transition hover:border-[#D8B45A]/35 hover:text-[#D8B45A]">
                {contactDetails.email}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={contactDetails.phoneHref} className="inline-flex items-center justify-between rounded-[1.15rem] border border-[#D8B45A]/18 bg-white px-4 py-3 text-sm font-semibold text-[#5B5348] transition hover:border-[#D8B45A]/35 hover:text-[#D8B45A]">
                {contactDetails.phoneLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <>
      <HeroSectionPremium />
      <HomeServiceTickerSection />
      <HomeIntroSection />
      <HomePrimarySystemsSection />
      <HomeAudienceSection />
      <HomeAboutTeaserSection />
      <HomeReferencesDemosTeaserSection />
      <HomeFinalCtaSection />
    </>
  )
}

function HomeServiceTickerSection() {
  return (
    <section
      aria-label="Leistungen im Überblick"
      className="px-5 pb-6 lg:px-8 lg:pb-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="theme-band-shell theme-band-shell-dark rounded-[1.8rem]">
          <div className="theme-band-track" aria-hidden="true">
            {[0, 1].flatMap((copyIndex) =>
              homeThemeBandItems.map((item) => (
                <span key={`${copyIndex}-${item}`} className="theme-band-item">
                  {item}
                </span>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function HomeIntroSection() {
  return (
    <section className="px-5 py-14 lg:px-8 lg:py-18">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,253,248,0.96),rgba(248,241,228,0.94),rgba(243,233,214,0.9))] p-6 shadow-[0_24px_56px_rgba(83,62,22,0.07)] md:p-8">
        <SectionHeader
          eyebrow="Einstieg"
          title="Eine Website ist nur der Anfang."
          text="Viele Unternehmen haben einzelne digitale Bausteine: eine Website, ein Kontaktformular, WhatsApp, Google oder Social Media. STRUKTIVA bringt diese Bausteine in eine klare Struktur, damit Sichtbarkeit, Kundenanfragen und Abläufe besser zusammenarbeiten."
          centered={false}
          tone="light"
        />
      </div>
    </section>
  )
}

function HomePrimarySystemsSection() {
  const cards = [
    [
      'Websites & Sichtbarkeit',
      'Moderne Websites, Landingpages und digitale Präsenz, die Vertrauen schaffen und verständlich erklären, was ein Unternehmen anbietet.',
      'Websites ansehen',
      siteLinks.websites,
    ],
    [
      'Lead-Systeme',
      'Kundenanfragen werden sauber erfasst, weitergeleitet und übersichtlich vorbereitet, damit nichts verloren geht.',
      'Lead-Systeme ansehen',
      siteLinks.leadSysteme,
    ],
    [
      'KI & Automatisierung',
      'Wiederkehrende Aufgaben, Kundenkommunikation und Antwortvorlagen werden einfacher, klarer und besser nutzbar.',
      'KI & Automatisierung ansehen',
      siteLinks.kiAutomatisierung,
    ],
  ]

  return (
    <section className="px-5 py-10 lg:px-8 lg:py-14">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
        {cards.map(([title, text, cta, href]) => (
          <article
            key={title}
            className="rounded-[1.9rem] border border-white/14 bg-[linear-gradient(165deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-6 shadow-premium"
          >
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            <p className="mt-4 text-sm leading-8 text-[#D7DCE5] md:text-base">{text}</p>
            <a
              href={href}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/38 px-5 py-2.5 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white"
            >
              {cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function HomeAudienceSection() {
  return (
    <section className="px-5 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,254,250,0.96),rgba(247,239,225,0.94))] p-6 shadow-[0_24px_56px_rgba(83,62,22,0.07)] md:p-8">
        <SectionHeader
          eyebrow="Vertrauen"
          title="Für wen STRUKTIVA arbeitet"
          text="STRUKTIVA unterstützt Selbstständige, Dienstleister, lokale Betriebe, Handwerker, Beauty-Betriebe, Beratungen und Unternehmen, die digitale Abläufe verständlicher und professioneller aufbauen möchten."
          centered={false}
          tone="light"
        />
      </div>
    </section>
  )
}

function HomeAboutTeaserSection() {
  return (
    <section className="px-5 py-10 lg:px-8 lg:py-14">
      <div className="metallic-light-panel mx-auto max-w-6xl rounded-[2rem] p-6 md:p-8">
        <SectionHeader
          eyebrow="Über STRUKTIVA"
          title="Digitale Strukturen verständlich, nutzbar und sinnvoll aufbauen."
          text="STRUKTIVA wurde entwickelt, um digitale Strukturen verständlich, nutzbar und sinnvoll aufzubauen. Im Mittelpunkt stehen keine Einzellösungen, sondern Systeme, die Website, Sichtbarkeit, Kontaktwege und interne Abläufe verbinden."
          centered={false}
          tone="light"
        />
        <a
          href={siteLinks.about}
          className="metallic-btn-secondary mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition"
        >
          Mehr über STRUKTIVA
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

function HomeFinalCtaSection() {
  return (
    <section className="px-5 pb-12 pt-8 lg:px-8 lg:pb-18 lg:pt-10">
      <div className="mx-auto max-w-6xl rounded-[2.1rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,252,246,0.98),rgba(247,238,222,0.95))] p-6 shadow-[0_24px_52px_rgba(83,62,22,0.08)] md:p-8">
        <SectionHeader
          eyebrow="Nächster Schritt"
          title="Bereit für mehr digitale Struktur?"
          text="Dann prüfen wir gemeinsam, welche Website, welches Lead-System oder welche digitale Lösung zu deinem Unternehmen passt."
          centered={false}
          tone="light"
        />
        <a
          href={siteLinks.projectRequestForm}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]"
        >
          Projekt anfragen
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

function HomeReferencesDemosTeaserSection() {
  return (
    <section className="px-5 py-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,254,250,0.96),rgba(247,239,225,0.94))] p-6 shadow-[0_24px_56px_rgba(83,62,22,0.07)] md:p-8">
        <SectionHeader
          eyebrow="Referenzen & Demos"
          title="Referenzen & Demos"
          text="Einblicke in umgesetzte Projekte und Beispielseiten zeigen, wie digitale Strukturen in der Praxis aussehen können."
          centered={false}
          tone="light"
        />
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={siteLinks.referenzen}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/38 bg-white/82 px-6 py-3 text-sm font-semibold text-[#16120E] transition hover:border-[#D8B45A]/55 hover:text-[#A9822D]"
          >
            Referenzen ansehen
            <ArrowRight className="h-4 w-4 text-[#D8B45A]" />
          </a>
          <a
            href={siteLinks.demos}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]"
          >
            Demos ansehen
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <>
      <main className="px-5 pb-8 pt-10 lg:px-8 lg:pb-10 lg:pt-14">
        <div className="mx-auto max-w-7xl">
          <section className="metallic-card rounded-[2.3rem] p-7 shadow-premium md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/82">Über STRUKTIVA</p>
            <h1 className="metallic-dark-title mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">
              Über STRUKTIVA
            </h1>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[#E0BF6A] md:text-lg">
              STRUKTIVA steht für digitale Systeme, die verständlich aufgebaut, klar strukturiert und im Alltag wirklich nutzbar sind. Im Mittelpunkt stehen keine einzelnen Insellösungen, sondern digitale Strukturen, die Website, Sichtbarkeit, Kundenanfragen, Kontaktwege und interne Abläufe sinnvoll verbinden.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={siteLinks.projectRequestForm} className="metallic-btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition">
                Projekt anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={siteLinks.contact} className="metallic-btn-secondary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition">
                Kontakt aufnehmen
              </a>
            </div>
          </section>

          <section className="metallic-light-panel mt-8 rounded-[1.9rem] p-6 shadow-premium md:p-7">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-[1.8rem] border border-white/40 bg-[linear-gradient(135deg,rgba(255,255,255,0.3),rgba(214,209,194,0.2))] p-6 shadow-[0_18px_44px_rgba(83,62,22,0.05),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm md:p-7">
                <h2 className="metallic-section-title text-2xl font-semibold md:text-[2rem]">Menschen hinter STRUKTIVA</h2>
                <p className="mt-4 text-sm leading-8 text-[#1a1a1a] md:text-base">
                  Hinter STRUKTIVA stehen Sven Matzke und Jessica Wacker. Gemeinsam steht STRUKTIVA für praktische digitale Lösungen, klare Kommunikation und Systeme, die nicht nur gut aussehen, sondern im täglichen Betrieb helfen sollen.
                </p>
                <p className="mt-3 text-sm leading-8 text-[#1a1a1a] md:text-base">
                  Der Fokus liegt auf verständlichen Websites, geordneten Kundenanfragen, digitalen Abläufen, Lead-Systemen, KI-gestützten Vorlagen und Lösungen, die Schritt für Schritt erweitert werden können. STRUKTIVA arbeitet direkt, nachvollziehbar und lösungsorientiert – ohne unnötige technische Überforderung.
                </p>
                <p className="mt-3 text-sm leading-8 text-[#1a1a1a] md:text-base">
                  Ziel ist es, digitale Möglichkeiten so aufzubauen, dass sie für Unternehmen wirklich nutzbar werden.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <section className="px-5 py-10 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#E5D7B9] bg-[linear-gradient(160deg,rgba(255,254,250,0.96),rgba(247,239,225,0.94))] p-6 shadow-[0_24px_56px_rgba(83,62,22,0.07)] md:p-8">
          <SectionHeader
            eyebrow="Was wichtig ist"
            title="Klare Systeme statt technischer Überforderung."
            text="STRUKTIVA entwickelt digitale Lösungen so, dass sie verständlich, professionell und im Alltag nutzbar bleiben. Schritt für Schritt, passend zur vorhandenen Struktur und ohne unnötige Komplexität."
            centered={false}
            tone="light"
          />
        </div>
      </section>
      <StructureCtaSection />
    </>
  )
}

function WebsitesLandingpagesPage() {
  return (
    <ServiceDetailLayout
      title="Websites & Sichtbarkeit"
      intro="STRUKTIVA entwickelt professionelle Websites, Landingpages, Relaunches und klare Sichtbarkeitsstrukturen für Unternehmen, die online verständlicher und vertrauenswürdiger auftreten möchten."
    >
      <ServiceSection title="Worum geht es?">
        <p>Eine gute Website erklärt auf den ersten Blick, was ein Unternehmen anbietet, warum es vertrauenswürdig ist und wie der passende nächste Schritt aussieht.</p>
        <p>Landingpages konzentrieren sich auf ein konkretes Angebot, einen Schwerpunkt oder eine Kampagne. Zusammen mit Google-Sichtbarkeit, mobiler Darstellung und klarer Kundenführung entsteht daraus ein professioneller digitaler Einstieg.</p>
      </ServiceSection>

      <ServiceSection title="Welche Formate STRUKTIVA umsetzt">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {websiteFormatsCards.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/12 bg-white/[0.04] p-4">
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">{item.text}</p>
            </article>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection title="Was dabei mitgedacht wird">
        <p>- klare Leistungsdarstellung statt allgemeiner Floskeln</p>
        <p>- mobile Optimierung und saubere Lesbarkeit</p>
        <p>- sichtbare Kontaktwege über Formular, Telefon, E-Mail und WhatsApp</p>
        <p>- Verbindung zu Google-Sichtbarkeit, Bewertungen und Angebotsseiten</p>
        <p>- rechtliche Seiten und technische Veröffentlichung</p>
      </ServiceSection>

      <ServiceSection title="Sichtbarkeit gehört dazu">
        <p>Websites und Landingpages wirken am stärksten, wenn sie nicht isoliert stehen. STRUKTIVA verbindet deshalb digitale Präsenz, Google-Sichtbarkeit, Vertrauenselemente und Kontaktwege so, dass Besucher schneller verstehen, warum sie anfragen sollten.</p>
      </ServiceSection>

      <ServiceSection title="Wann welches Format sinnvoll ist">
        <div className="grid gap-3 md:grid-cols-2">
          {websiteFormats.slice(0, 8).map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3">
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">{text}</p>
            </div>
          ))}
        </div>
      </ServiceSection>

      <section className="rounded-[1.9rem] border border-[#D8B45A]/22 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-6 shadow-premium">
        <h2 className="text-2xl font-semibold text-white">Website oder Landingpage unverbindlich anfragen</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#D7DCE5] md:text-base">
          Wenn Sie schon wissen, welches Format benötigt wird, oder erst eine Einschätzung möchten, nutzt STRUKTIVA dafür das bestehende Anfrageformular.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={siteLinks.projectRequestForm} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
            Projekt anfragen
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href={siteLinks.leistungenPage} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
            Zur Leistungsübersicht
          </a>
        </div>
      </section>
    </ServiceDetailLayout>
  )
}

function LeadSystemePage() {
  const leadSystemCards = [
    ['Digitale Kundenführung', 'Klare Wege von Interesse zur Anfrage – damit Besucher schneller verstehen, was angeboten wird und wie sie Kontakt aufnehmen.'],
    ['WhatsApp-Kontaktstruktur', 'Direkte Kontaktwege über Website, Google und Landingpage – professionell eingebunden und alltagstauglich aufgebaut.'],
    ['Bewertungs- & QR-System', 'Ein klarer Prozess für Bewertungslink, QR-Code, Bewertungskarte und Anfrage-Texte.'],
    ['Angebotsarchitektur', 'Leistungen so darstellen, dass Kunden den Nutzen schneller verstehen und eher anfragen.'],
  ]

  return (
    <ServiceDetailLayout
      title="Lead-Systeme & Kundenanfragen"
      intro="STRUKTIVA verbindet Website, Angebot, Formular, automatische E-Mail, Kundenbestätigung und Kontaktlogik so, dass Kundenanfragen klar erfasst und nachvollziehbar weitergeführt werden."
    >
      <ServiceSection title="Worum geht es?">
        <p>Viele Unternehmen haben mehrere Kontaktwege, aber keine klare Führung dazwischen. Dann gehen Anfragen unter, Besucher brechen ab oder melden sich über unpassende Wege.</p>
        <p>Lead-Systeme von STRUKTIVA sorgen dafür, dass Kontaktwege sichtbar, verständlich und passend zum Unternehmen aufgebaut werden.</p>
      </ServiceSection>

      <ServiceSection title="Bausteine für klarere Kundenanfragen">
        <div className="grid gap-3 md:grid-cols-2">
          {leadSystemCards.map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-white/12 bg-white/[0.04] p-4">
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">{text}</p>
            </article>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection title="Was dabei verbessert wird">
        <p>- Kontaktformulare werden klarer eingebunden und sinnvoll platziert</p>
        <p>- automatische E-Mail und Kundenbestätigung werden sauber vorbereitet</p>
        <p>- WhatsApp wird nicht zufällig, sondern als echter Anfrageweg eingesetzt</p>
        <p>- Google-Bewertungen und Vertrauenselemente unterstützen die Anfrage</p>
        <p>- Lead-Übersicht, Status und Nachfassen werden verständlicher vorbereitet</p>
        <p>- Leistungen, Nutzen und nächste Schritte werden verständlicher kommuniziert</p>
        <p>- Anfragen laufen strukturierter im Betrieb an</p>
      </ServiceSection>

      <section className="metallic-panel-dark rounded-[1.8rem] p-5 md:p-6">
        <h2 className="text-gold-glow text-2xl font-semibold text-white">Passend für Betriebe mit direktem Kundenkontakt</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {['Handwerker', 'Friseursalons', 'Kosmetikstudios', 'lokale Dienstleister'].map((item) => (
            <div key={item} className="metallic-tag-box rounded-2xl px-4 py-3 text-sm font-medium">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[1.9rem] border border-[#D8B45A]/22 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-6 shadow-premium">
        <h2 className="text-2xl font-semibold text-white">Lead-System mit bestehendem Anfrageformular starten</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#D7DCE5] md:text-base">
          Für neue Projekte nutzt STRUKTIVA weiterhin das bestehende Lead-Formular. So bleibt die Anfrage strukturiert und landet im vorhandenen System.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={siteLinks.projectRequestForm} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
            Lead-System anfragen
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href={siteLinks.bewertungsQrCode} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
            Bewertungsstruktur ansehen
          </a>
        </div>
      </section>
    </ServiceDetailLayout>
  )
}

function PaketePage() {
  return (
    <>
      <main className="px-5 pb-4 pt-10 lg:px-8 lg:pt-14">
        <div className="mx-auto max-w-7xl">
          <section id="pakete" className="scroll-mt-28 rounded-[2.3rem] border border-[#D8B45A]/24 bg-[linear-gradient(160deg,rgba(7,17,31,0.95),rgba(11,31,58,0.9),rgba(5,10,18,0.96))] p-7 shadow-premium md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/82">Pakete & Betreuung</p>
            <h1 className="mt-4 max-w-4xl break-words text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Pakete & Einstiegsmöglichkeiten
            </h1>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[#D7DCE5] md:text-lg">
              Die Pakete geben Orientierung und helfen beim sinnvollen Start. Ergänzend dazu zeigt STRUKTIVA, wann laufende Betreuung sinnvoll ist und wann einzelne Änderungen ausreichen.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={siteLinks.projectRequestForm} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
                Paket anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={siteLinks.contact} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
                Betreuung besprechen
              </a>
            </div>
          </section>
        </div>
      </main>
      <PricingArchitectureSection />
      <BetreuungSection />
      <FAQSection />
      <StructureCtaSection />
    </>
  )
}

function ReferenzenPage() {
  return (
    <>
      <main className="px-5 pb-4 pt-10 lg:px-8 lg:pt-14">
        <div className="mx-auto max-w-7xl">
          <section className="rounded-[2.3rem] border border-[#D8B45A]/24 bg-[linear-gradient(160deg,rgba(7,17,31,0.95),rgba(11,31,58,0.9),rgba(5,10,18,0.96))] p-7 shadow-premium md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/82">Referenzen</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Referenzen
            </h1>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[#D7DCE5] md:text-lg">
              Bestehende Referenzprojekte zeigen, wie STRUKTIVA digitale Struktur, Kundenführung und Sichtbarkeit in der Praxis umsetzt.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={siteLinks.projectRequestForm} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
                Ähnliches Projekt anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={siteLinks.contact} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
                Referenz besprechen
              </a>
            </div>
          </section>
        </div>
      </main>
      <section className="px-5 py-12 md:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <ReferenceShowcaseSection />
        </div>
      </section>
      <StructureCtaSection />
    </>
  )
}

function DemosPage() {
  return (
    <>
      <main className="px-5 pb-4 pt-10 lg:px-8 lg:pt-14">
        <div className="mx-auto max-w-7xl">
          <section className="rounded-[2.3rem] border border-[#D8B45A]/24 bg-[linear-gradient(160deg,rgba(7,17,31,0.95),rgba(11,31,58,0.9),rgba(5,10,18,0.96))] p-7 shadow-premium md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/82">Demos</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Demos
            </h1>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[#D7DCE5] md:text-lg">
              Vorhandene Demo-Seiten und Branchenbeispiele zeigen, wie digitale Strukturen für verschiedene Betriebe aufgebaut sein können.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={siteLinks.projectRequestForm} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
                Demo-Struktur anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={siteLinks.referenzen} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
                Referenzen ansehen
              </a>
            </div>
          </section>
        </div>
      </main>
      <section className="px-5 py-12 md:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <DemosShowcaseSection />
        </div>
      </section>
      <StructureCtaSection />
    </>
  )
}

function SalonKarolaReferencePage() {
  const salonKarolaTags = [
    'Website-Relaunch',
    'mobile Optimierung',
    'Kundenführung',
    'Google-Bewertungsstruktur',
    'WhatsApp-Kontaktweg',
    'lokale Sichtbarkeit',
  ]

  return (
    <main className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-[2.3rem] border border-[#D8B45A]/24 bg-[linear-gradient(160deg,rgba(7,17,31,0.95),rgba(11,31,58,0.9),rgba(5,10,18,0.96))] p-7 shadow-premium md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/82">Echte Referenz</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Salon Karola – Website, Kundenführung und digitale Struktur
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[#D7DCE5] md:text-lg">
            Für Salon Karola wurde eine moderne digitale Präsenz aufgebaut, die Leistungen, Kontaktwege, Bewertungen und Kundeninformationen klarer strukturiert. Ziel war eine verständliche, mobil optimierte Website mit hochwertiger Darstellung und einfacher Kontaktaufnahme.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {salonKarolaTags.map((tag) => (
              <span key={tag} className="inline-flex rounded-full border border-[#D8B45A]/32 bg-[#D8B45A]/12 px-3 py-1.5 text-[11px] font-semibold text-[#F2D98B]">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="https://salon-karola-webseite.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]">
              Live-Website öffnen
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={siteLinks.projectRequestForm} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white">
              Ähnliches Projekt anfragen
            </a>
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <section className="rounded-[1.8rem] border border-white/14 bg-white/[0.05] p-5 shadow-premium lg:col-span-1">
            <h2 className="text-gold-glow text-2xl font-semibold text-white">Ausgangslage</h2>
            <p className="mt-4 text-sm leading-7 text-[#D7DCE5]">
              Vorher bestand eine einfache Baukasten-Webseite mit Basisinformationen, aber wenig moderner Markenwirkung, wenig emotionaler Kundenführung und ohne starke digitale Struktur.
            </p>
          </section>
          <section className="rounded-[1.8rem] border border-white/14 bg-white/[0.05] p-5 shadow-premium lg:col-span-1">
            <h2 className="text-gold-glow text-2xl font-semibold text-white">Ziel der Umsetzung</h2>
            <p className="mt-4 text-sm leading-7 text-[#D7DCE5]">
              Entstehen sollte ein moderner Salon-Auftritt mit hochwertiger Darstellung, verständlicher mobiler Nutzung, klarer Termin-Anfrage und sauberer Verbindung von Leistungen, Bewertungen und Kontaktwegen.
            </p>
          </section>
          <section className="rounded-[1.8rem] border border-white/14 bg-white/[0.05] p-5 shadow-premium lg:col-span-1">
            <h2 className="text-gold-glow text-2xl font-semibold text-white">Ergebnis & Nutzen</h2>
            <p className="mt-4 text-sm leading-7 text-[#D7DCE5]">
              Die neue Struktur verbindet Leistungen, Galerie, FAQ, WhatsApp, Google-Bewertung und lokale SEO-Elemente zu einem klareren, mobil optimierten digitalen Auftritt.
            </p>
          </section>
        </div>

        <section className="mt-8 rounded-[1.9rem] border border-[#D8B45A]/22 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-6 shadow-premium">
          <h2 className="text-2xl font-semibold text-white">Umgesetzte digitale Struktur</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {[
              'moderner Premium-Auftritt',
              'klare Termin-Anfrage',
              'WhatsApp direkt sichtbar',
              'Google-Bewertung eingebunden',
              'Leistungen übersichtlich strukturiert',
              'Galerie und echte Eindrücke',
              'Vorher-Nachher-Bereich',
              'FAQ-Bereich',
              'lokale SEO-Struktur für Calw-Wimberg',
              'bessere mobile Nutzerführung',
            ].map((item) => (
              <div key={item} className="rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-[#D7DCE5]">
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
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
              Digitale Struktur für Unternehmen, die online professioneller wirken wollen.
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
            <p>Viele Unternehmen haben gute Leistungen, aber ihr digitaler Auftritt zeigt es nicht klar genug. Die Website wirkt unstrukturiert, Kontaktwege sind unklar, Google wird nicht richtig genutzt und Social Media läuft ohne System.</p>
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

          <ServiceSection title="Geeignet für Unternehmen, die digital klarer auftreten wollen.">
            <p>- Handwerker</p>
            <p>- Beauty & Kosmetik</p>
            <p>- Friseursalons</p>
            <p>- Reinigungsfirmen</p>
            <p>- Fahrschulen</p>
            <p>- lokale Dienstleister</p>
            <p>- Berater</p>
            <p>- Selbstständige</p>
            <p>- Händler</p>
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

          <ServiceSection title="Einstiegspreise für Unternehmen">
            <p><span className="font-semibold text-[#D8B45A]">Website Start – ab 499 € inklusive Mehrwertsteuer</span><br />Für Unternehmen, die online professioneller auftreten möchten.</p>
            <p><span className="font-semibold text-[#D8B45A]">Sichtbarkeits-Paket – ab 799 € inklusive Mehrwertsteuer</span><br />Für Unternehmen, die mehr Struktur in Website, Angebot und Kontaktwege bringen möchten.</p>
            <p><span className="font-semibold text-[#D8B45A]">Struktur-Paket – ab 1.199 € inklusive Mehrwertsteuer</span><br />Für Unternehmen, die mehrere digitale Bausteine verbinden möchten.</p>
            <p><span className="font-semibold text-[#D8B45A]">Premium-Struktur – ab 1.499 € inklusive Mehrwertsteuer</span><br />Für Unternehmen, die eine umfangreichere digitale Struktur brauchen.</p>
            <p><span className="font-semibold text-[#D8B45A]">Monatliche Betreuung – ab 199 € / Monat inklusive Mehrwertsteuer</span><br />Für regelmäßige Pflege, Inhalte, kleine Änderungen und Optimierung.</p>
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
                  Digitale Struktur für Unternehmen, die online professioneller wirken wollen.
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
                  <p>Viele Unternehmen haben gute Leistungen, aber ihr digitaler Auftritt zeigt es nicht klar genug. Die Website wirkt unstrukturiert, Kontaktwege sind unklar, Google wird nicht richtig genutzt und Social Media läuft ohne System.</p>
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

          <ServiceSection title="Geeignet für Unternehmen, die digital klarer auftreten wollen.">
            <p>- Handwerker</p>
            <p>- Beauty & Kosmetik</p>
            <p>- Friseursalons</p>
            <p>- Reinigungsfirmen</p>
            <p>- Fahrschulen</p>
            <p>- lokale Dienstleister</p>
            <p>- Berater</p>
            <p>- Selbstständige</p>
            <p>- Händler</p>
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

          <ServiceSection title="Einstiegspreise für Unternehmen">
            <p><span className="font-semibold text-[#D8B45A]">Website Start – ab 499 € inklusive Mehrwertsteuer</span><br />Für Unternehmen, die online professioneller auftreten möchten.</p>
            <p><span className="font-semibold text-[#D8B45A]">Sichtbarkeits-Paket – ab 799 € inklusive Mehrwertsteuer</span><br />Für Unternehmen, die mehr Struktur in Website, Angebot und Kontaktwege bringen möchten.</p>
            <p><span className="font-semibold text-[#D8B45A]">Struktur-Paket – ab 1.199 € inklusive Mehrwertsteuer</span><br />Für Unternehmen, die mehrere digitale Bausteine verbinden möchten.</p>
            <p><span className="font-semibold text-[#D8B45A]">Premium-Struktur – ab 1.499 € inklusive Mehrwertsteuer</span><br />Für Unternehmen, die eine vollständige digitale Struktur brauchen.</p>
            <p><span className="font-semibold text-[#D8B45A]">Monatliche Betreuung – ab 199 € / Monat inklusive Mehrwertsteuer</span><br />Für regelmäßige Pflege, Inhalte, kleine Änderungen und Optimierung.</p>
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
          <div className="metallic-card rounded-[2.3rem] p-7 shadow-premium md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/82">STRUKTIVA Leistung</p>
            <h1 className="metallic-dark-title mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">{title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#E0BF6A] md:text-lg">{intro}</p>
            <div className="relative mt-6 overflow-hidden rounded-[1.2rem] border border-white/14">
              <img src={struktivaImages.structurePlanning} alt="Strategische digitale Planung im Unternehmenskontext" loading="lazy" decoding="async" className="h-28 w-full object-cover md:h-32" />
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(7,17,31,0.68),rgba(11,31,58,0.4),rgba(5,10,18,0.72))]" />
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={siteLinks.projectRequestForm} className="metallic-btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition">
                Anfrage stellen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={siteLinks.services} className="metallic-btn-secondary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition">
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
    <section className="metallic-card rounded-[1.8rem] p-5 shadow-premium md:p-6">
      <h2 className="metallic-dark-title text-2xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-7 md:text-base">{children}</div>
    </section>
  )
}

function UniversalServiceCTA() {
  return (
    <section className="metallic-card rounded-[1.9rem] p-6 shadow-premium">
      <h2 className="metallic-dark-title text-2xl font-semibold">Möchtest du wissen, ob diese Lösung zu deinem Unternehmen passt?</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 md:text-base">
        Schreibe kurz, worum es bei deinem Unternehmen geht. Danach erhältst du eine klare Einschätzung, welcher nächste Schritt sinnvoll ist.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a href={siteLinks.projectRequestForm} className="metallic-btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition">
          Anfrage stellen
          <ArrowRight className="h-4 w-4" />
        </a>
        <a href={contactDetails.whatsappHref} className="metallic-btn-secondary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition">
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
        <p>- Unternehmen und Betriebe</p><p>- lokale Betriebe</p><p>- Selbstständige</p><p>- Dienstleister</p><p>- Salons, Studios, Praxen und Handwerksbetriebe</p><p>- Unternehmen mit veralteter oder unklarer Website</p>
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
        <p className="text-lg font-semibold text-[#D8B45A]">Unternehmenswebsite – ab 699 € inklusive Mehrwertsteuer</p>
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
        <p className="text-lg font-semibold text-[#D8B45A]">Landingpage – ab 399 € inklusive Mehrwertsteuer</p>
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
        <p className="text-lg font-semibold text-[#D8B45A]">Unternehmens-App – ab 999 € inklusive Mehrwertsteuer</p>
        <p>App- oder Dashboard-Lösungen sind eine hochwertige Zusatzoption für Unternehmen, die neben Sichtbarkeit auch mehr interne Struktur brauchen.</p>
        <p className="text-lg font-semibold text-[#D8B45A]">Monatliche Betreuung – ab 199 € / Monat inklusive Mehrwertsteuer</p>
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
        <p className="text-lg font-semibold text-[#D8B45A]">Google Ads Startpaket – ab 299 € inklusive Mehrwertsteuer</p>
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
      price: 'ab 299 € inklusive Mehrwertsteuer',
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
      price: 'ab 499 € inklusive Mehrwertsteuer',
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
              STRUKTIVA unterstützt Unternehmen, Selbstständige und lokale Dienstleister mit klarer digitaler Soforthilfe – schnell, sauber und strukturiert.
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
              <p>Viele Betriebe verlieren Zeit durch Zettel, Excel-Listen, unklare Ablagen und wiederkehrende Rückfragen.</p>
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
                'Digitale Ordnungssysteme ab 899 € inklusive Mehrwertsteuer',
                'Tagesabschluss-System ab 899 € inklusive Mehrwertsteuer',
                'Kassenstruktur-System ab 899 € inklusive Mehrwertsteuer',
                'Monatsübersicht / Export-System ab 899 € inklusive Mehrwertsteuer',
                'Steuerberaterfreundliche Erfassungsstruktur ab 899 € inklusive Mehrwertsteuer',
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
    title: 'Website-Erstellung für Unternehmen',
    intro: 'Moderne Websites für Unternehmen und Selbstständige – klar strukturiert, mobil optimiert und auf Anfragen ausgerichtet.',
    points: ['klare Seitenstruktur', 'professionelle Darstellung', 'mobile Optimierung', 'saubere Kontaktführung'],
  },
  '/landingpage-erstellen-lassen': {
    title: 'Landingpages erstellen lassen',
    intro: 'Verkaufsstarke Seiten für Angebote, Aktionen und Anfragen – mit klarer Angebotslogik und starker Kundenführung.',
    points: ['Angebotsstruktur', 'Nutzenkommunikation', 'CTA-Bereiche', 'messbare Anfrageziele'],
  },
  '/google-sichtbarkeit-kleine-unternehmen': {
    title: 'Google-Sichtbarkeit für Unternehmen',
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
    intro: 'Individuelle App- und Dashboard-Konzepte für Unternehmen – alltagstauglich, klar und funktional aufgebaut.',
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
  ['Unternehmenswebsite', 'Für Unternehmen, Selbstständige und Dienstleister, die professionell sichtbar werden und Vertrauen aufbauen möchten.'],
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

const websiteFormatsCards = [
  { title: 'Unternehmenswebsite', text: 'Für Unternehmen, Selbstständige und Dienstleister, die professionell sichtbar werden und Vertrauen aufbauen möchten.' },
  { title: 'Landingpage', text: 'Für einzelne Angebote, Aktionen, Kampagnen oder Dienstleistungen, bei denen Besucher gezielt zur Anfrage geführt werden sollen.' },
  { title: 'Onepager', text: 'Eine kompakte Website auf einer Seite – ideal für klare Angebote, lokale Dienstleister oder den schnellen professionellen Start.' },
  { title: 'Mehrseitige Website', text: 'Für Unternehmen mit mehreren Leistungen, Referenzen, Team, Kontaktbereich und ausführlicher Struktur.' },
  { title: 'Branchenwebsite', text: 'Websites speziell für Handwerk, Beauty, Friseur, Kosmetik, Beratung, Dienstleistung oder lokale Betriebe.' },
  { title: 'Portfolio-Website', text: 'Für Selbstständige, Kreative, Berater oder Dienstleister, die Arbeiten, Projekte oder Referenzen hochwertig präsentieren möchten.' },
]

function WebsiteFuerKleineUnternehmenPage() {
  return (
    <main className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-6xl">
        <section className="rounded-[2.1rem] border border-[#D8B45A]/22 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-7 shadow-premium md:p-10">
          <h1 className="text-3xl font-semibold text-white md:text-5xl">Website für Unternehmen professionell erstellen lassen</h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[#D7DCE5] md:text-lg">
            STRUKTIVA entwickelt professionelle Unternehmenswebsites, Onepager, Landingpages und Relaunch-Konzepte für Unternehmen, Selbstständige und lokale Dienstleister – mit klarer Struktur, verständlicher Kundenführung und mobiler Optimierung.
          </p>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {['klare Seitenstruktur', 'professionelle Darstellung', 'mobile Optimierung', 'saubere Kontaktführung'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm font-medium text-[#D7DCE5]">
                {item}
              </div>
            ))}
          </div>
          <a
            href={siteLinks.projectRequestForm}
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
            {websiteFormatsCards.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/12 bg-white/[0.04] p-4">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-[#D8B45A]/24 bg-[#D8B45A]/8 p-5">
            <h3 className="text-lg font-semibold text-white">Welche Website sinnvoll ist, hängt vom Ziel ab.</h3>
            <p className="mt-3 text-sm leading-7 text-[#D7DCE5] md:text-base">
              Die passende Lösung richtet sich nach Umfang, Branche, Ausgangslage und gewünschter Wirkung. Manche Betriebe brauchen nur eine einfache digitale Grundlage, andere eine vollständige Website mit Leistungen, Vertrauen, Google-Sichtbarkeit, Kontaktwegen und Kundenführung.
            </p>
            <p className="mt-2 text-sm leading-7 text-[#D7DCE5] md:text-base">
              Wir besprechen zuerst, was wirklich sinnvoll ist – damit keine unnötige Struktur entsteht.
            </p>
            <a
              href={siteLinks.contact}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]"
            >
              Kostenlose Ersteinschätzung anfragen
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <a
            href={siteLinks.contact}
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/35 px-5 py-2.5 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white"
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
    main: 'ab 699 €',
    extras: ['Landingpage ab 399 €', 'Onepager ab 499 €', 'Mehrseitige Website ab 999 €', 'Website-Relaunch ab 599 €'],
  },
  '/landingpage-erstellen-lassen': {
    main: 'ab 399 €',
    extras: ['Kleine Einzelmaßnahme ab 99 €', 'Onepager ab 499 €'],
  },
  '/google-sichtbarkeit-kleine-unternehmen': {
    main: 'ab 199 €',
    extras: ['Google-Unternehmensprofil / lokale Sichtbarkeit ab 199 €', 'Sichtbarkeits-Paket ab 799 €'],
  },
  '/digitale-kundenfuehrung': {
    main: 'ab 299 €',
    extras: ['WhatsApp- & Kontaktstruktur ab 149 €', 'Lead-System / Anfrage-System ab 299 €'],
  },
  '/whatsapp-kontaktstruktur': {
    main: 'ab 149 €',
    extras: ['Kundenführungsstruktur ab 299 €'],
  },
  '/social-media-struktur': {
    main: 'ab 199 €',
    extras: ['Content-Grundstruktur für Unternehmen ab 199 €', 'Social-Media-Struktur ab 199 €'],
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
    extras: ['Kleine Einzelmaßnahme ab 99 €', 'Lead-System / Anfrage-System ab 299 €'],
  },
  '/digitale-unternehmensstruktur': {
    main: 'ab 1.199 €',
    extras: ['Kleine Einzelmaßnahme ab 99 €', 'Struktur-Paket ab 1.199 €', 'Premium-Struktur ab 1.499 €'],
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
                    <p key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-[#D7DCE5]">{item} inklusive Mehrwertsteuer</p>
                  ))}
                </div>
              )}
              <p className="mt-3 text-sm leading-7 text-[#94A3B8]">
                Alle Preise verstehen sich inklusive gesetzlicher Mehrwertsteuer. Der finale Preis richtet sich nach Umfang, Seitenanzahl, Funktionen, Textaufwand, Bildern und gewünschter technischer Umsetzung.
              </p>
            </div>
          )}
          <a
            href={siteLinks.projectRequestForm}
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
  const allLeistungen = [
    ['Websites & Landingpages', 'Moderne Website-Formate für Angebote, Vertrauen, mobile Darstellung und klare Kundenführung.'],
    ['Google-Sichtbarkeit', 'Struktur für bessere Auffindbarkeit, professionelle Präsenz und saubere Verbindung zur Website.'],
    ['Lead-Systeme', 'Anfragen werden sauber erfasst, vorbereitet und klarer weitergeführt.'],
    ['KI & Automatisierung', 'Einfache Systeme für Anfragen, Kommunikation, Antwortvorlagen und nachvollziehbare digitale Abläufe.'],
    ['WhatsApp-Kontaktstruktur', 'Direkte Kontaktwege über Website, Google und Landingpage.'],
    ['Bewertungs- & QR-Strukturen', 'Klare Bewertungswege mit QR-Code, Bewertungslink und passender Kundenführung.'],
    ['Unternehmens-Apps', 'Individuelle App- und Dashboard-Konzepte für Unternehmen.'],
    ['Betriebs-Dashboards', 'Übersichten für Termine, Kunden, Zahlen und interne Abläufe.'],
    ['Digitale Ordnungssysteme', 'Tagesabschluss, Kassenstruktur und steuerberaterfreundliche Abläufe.'],
    ['Social-Media-Struktur', 'Strukturierte Inhalte, klare Kanäle und ein professioneller Social-Media-Auftritt.'],
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

        <section className="metallic-panel-dark mt-8 rounded-[1.8rem] p-6 md:p-7">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B45A]/82">Einzelmaßnahmen & Pakete</p>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-[#F2E6C8] md:text-base">
                Einzelmaßnahmen starten ab 99 € inklusive Mehrwertsteuer. Größere Leistungen können einzeln gebucht oder sinnvoll zu einem STRUKTIVA-Paket kombiniert werden. Der genaue Preis richtet sich nach Umfang, Ziel und gewünschter Umsetzung.
              </p>
            </div>
            <div className="inline-flex h-[5.5rem] w-[5.5rem] shrink-0 items-center justify-center rounded-full border border-[#F0C45C]/60 bg-[radial-gradient(circle_at_30%_20%,rgba(255,248,224,0.28),transparent_38%),linear-gradient(145deg,rgba(216,180,90,0.24),rgba(143,109,39,0.1))] px-3 text-center text-sm font-semibold leading-tight text-[#FFF4D0] shadow-[0_16px_34px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.18)]">
              ab 99 €
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {allLeistungen.map(([title, text]) => (
              <article
                key={title}
                id={title === 'Digitale Soforthilfe' ? 'digitale-soforthilfe' : undefined}
                className="metallic-feature-card rounded-2xl p-4"
              >
                <h2 className="text-base font-semibold text-white">{title}</h2>
                <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">{text}</p>
              </article>
            ))}
          </div>
          <div className="metallic-result-box mt-6 rounded-[1.5rem] p-5">
            <p className="text-sm leading-7 text-[#D7DCE5] md:text-base">
              Sie können mit einer kleinen Einzelmaßnahme starten oder mehrere Bausteine passend zum Bedarf bündeln. So bleibt die Preislogik transparent und die Umsetzung wächst mit dem tatsächlichen Umfang.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={`${siteLinks.paketePage}#pakete`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/38 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white"
              >
                Pakete ansehen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={siteLinks.projectRequestForm}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]"
              >
                Projekt anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function KiAutomatisierungPage() {
  return (
    <main className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[2.2rem] border border-[#D8B45A]/24 bg-[linear-gradient(160deg,rgba(5,5,5,0.95),rgba(11,15,20,0.96),rgba(16,23,34,0.98))] p-7 shadow-premium md:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,180,90,0.14),transparent_28%),radial-gradient(circle_at_left_center,rgba(11,31,58,0.32),transparent_38%)]" />
          <div className="relative z-[1] grid gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
            <Reveal>
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/82">Detailseite</p>
                <h1 className="text-gold-glow mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-[3.5rem] lg:leading-[1.03]">
                  KI & Automatisierung
                </h1>
                <p className="mt-5 max-w-2xl text-xl font-medium text-[#F2D98B]">
                  Weniger manuelle Arbeit. Schnellere Reaktion. Mehr digitale Ordnung.
                </p>
                <p className="mt-5 max-w-3xl text-base leading-8 text-[#D7DCE5] md:text-lg">
                  STRUKTIVA verbindet Webseite, Kundenanfragen, E-Mail, WhatsApp, Tabellen und digitale Abläufe zu einem
                  klaren System. So gehen weniger Anfragen unter, wiederkehrende Aufgaben werden einfacher und
                  Kundenkommunikation wirkt professioneller.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={siteLinks.projectRequestForm}
                    className="inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(17,24,39,0.22)] transition hover:bg-[#A9822D] hover:-translate-y-0.5"
                  >
                    Automatisierung anfragen
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={siteLinks.projectRequestForm}
                    className="inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/28 bg-white/[0.05] px-5 py-3.5 text-sm font-semibold text-[#D8B45A] transition hover:bg-[#D8B45A] hover:text-white"
                  >
                    Zum Anfrageformular
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[1.8rem] border border-[#D8B45A]/20 bg-white/[0.04] p-4 shadow-premium backdrop-blur-xl">
                <div className="rounded-[1.45rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B45A]/82">Praxisnah statt kompliziert</p>
                      <h2 className="mt-2 text-2xl font-semibold text-white">Digitale Ordnung für den Alltag</h2>
                    </div>
                    <div className="rounded-full border border-[#D8B45A]/24 bg-[#D8B45A]/10 px-3 py-1 text-xs font-semibold text-[#D8B45A]">
                      Struktur
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3">
                    {[
                      ['Anfragen kommen geordnet an', 'Formular, WhatsApp und E-Mail können klar zusammengeführt werden.'],
                      ['Antworten werden schneller', 'Vorlagen und Abläufe erleichtern die erste Reaktion auf neue Anfragen.'],
                      ['Nächste Schritte bleiben sichtbar', 'Status, Notizen und Aufgaben sind nachvollziehbar statt verstreut.'],
                    ].map(([title, text]) => (
                      <div key={title} className="rounded-[1.2rem] border border-white/12 bg-white/[0.04] p-4">
                        <p className="text-sm font-semibold text-white">{title}</p>
                        <p className="mt-2 text-sm leading-7 text-[#D7DCE5]">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mt-8 rounded-[1.9rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium md:p-8">
          <Reveal>
            <SectionHeader
              eyebrow="Einordnung"
              title="Eine Webseite ist nur der Anfang."
              text="Viele Unternehmen haben eine Webseite, aber dahinter fehlt oft ein klarer Ablauf. Kundenanfragen kommen per Formular, WhatsApp, E-Mail oder Telefon rein – und schnell geht etwas verloren. Mit digitalen Automatisierungen schafft STRUKTIVA einfache Systeme für Antwortvorlagen, Kundenkommunikation, Bewertungsantworten, Termintexte und wiederkehrende Aufgaben."
            />
          </Reveal>
        </section>

        <section className="mt-8">
          <Reveal>
            <SectionHeader
              eyebrow="Leistungen"
              title="Praktische Unterstützung für wiederkehrende Abläufe"
              text="Statt unnötiger Technikbegriffe stehen verständliche Lösungen im Vordergrund, die Unternehmen im Alltag wirklich entlasten können."
            />
          </Reveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={stagger}
            className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {kiAutomationCards.map(([Icon, title, text]) => (
              <motion.article
                key={title}
                variants={fadeUp}
                transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
                className="service-card-3d rounded-[1.8rem] border border-white/14 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-5 shadow-premium"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D8B45A]/28 bg-[#D8B45A]/10 text-[#D8B45A]">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="mt-8 rounded-[1.9rem] border border-white/14 bg-white/[0.04] p-6 shadow-premium md:p-8">
          <Reveal>
            <SectionHeader
              eyebrow="Zielgruppen"
              title="Für wen ist das sinnvoll?"
              text="Besonders sinnvoll ist KI & Automatisierung für Betriebe, die regelmäßig Kundenanfragen erhalten, schnell reagieren möchten und mehr Übersicht in ihre Abläufe bringen wollen."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {kiAutomationAudience.map(([label, Icon]) => (
              <Reveal key={label}>
                <article className="rounded-[1.4rem] border border-[#D8B45A]/18 bg-[linear-gradient(160deg,rgba(5,5,5,0.82),rgba(11,15,20,0.88),rgba(16,23,34,0.92))] p-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D8B45A]/12 text-[#D8B45A]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-base font-semibold text-white">{label}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
          <Reveal>
            <section className="h-full rounded-[1.9rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B45A]/82">Wichtig</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Verständlich statt kompliziert</h2>
              <p className="mt-4 text-base leading-8 text-[#D7DCE5]">
                STRUKTIVA setzt KI und Automatisierung nicht als Spielerei ein, sondern als praktische Unterstützung
                im Alltag. Im Mittelpunkt stehen einfache Abläufe, klare Vorlagen und Systeme, die ein kleiner Betrieb
                wirklich nutzen kann.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.06}>
            <section className="h-full rounded-[1.9rem] border border-[#D8B45A]/20 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-6 shadow-premium md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B45A]/82">Umsetzung nach Bedarf</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Passend zum vorhandenen Ablauf</h2>
              <p className="mt-4 text-base leading-8 text-[#D7DCE5]">
                Jede Automatisierung hängt vom vorhandenen System, den gewünschten Abläufen und dem Umfang ab. Kleine
                Lösungen wie Anfrage- und Antwortsysteme sind ebenso möglich wie umfangreichere digitale Strukturen.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#94A3B8]">
                Einzelne Automatisierungen können projektbezogen umgesetzt werden. Eine monatliche Betreuung ist nur
                sinnvoll, wenn regelmäßig Inhalte, Anpassungen oder laufende Optimierung benötigt werden.
              </p>
            </section>
          </Reveal>
        </div>

        <section className="mt-8 overflow-hidden rounded-[2rem] border border-[#D8B45A]/22 bg-[linear-gradient(160deg,rgba(5,5,5,0.95),rgba(11,15,20,0.96),rgba(16,23,34,0.98))] p-6 shadow-premium md:p-8 lg:p-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B45A]/82">Nächster Schritt</p>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Bereit für weniger manuelle Arbeit?</h2>
              <p className="mt-4 text-base leading-8 text-[#D7DCE5] md:text-lg">
                Dann prüfen wir gemeinsam, welche Abläufe in deinem Unternehmen einfacher, klarer und digitaler werden können.
              </p>
              <a
                href={siteLinks.projectRequestForm}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(17,24,39,0.22)] transition hover:bg-[#A9822D] hover:-translate-y-0.5"
              >
                Jetzt unverbindlich anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  )
}

function LeadField({ label, name, type = 'text', value, onChange, error, placeholder, autoComplete, required = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-white">
        {label}
        {required ? <span className="ml-1 text-[#D8B45A]">*</span> : null}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`w-full rounded-[1.1rem] border bg-[#05080d] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-[#7f8ca0] focus:border-[#D8B45A] focus:ring-2 focus:ring-[#D8B45A]/20 ${
          error ? 'border-[#d97757]' : 'border-white/12'
        }`}
      />
      {error ? <span className="mt-2 block text-sm text-[#f3b6a1]">{error}</span> : null}
    </label>
  )
}

function LeadSelect({ label, name, value, onChange, options, error, placeholder, helper }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-white">{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full rounded-[1.1rem] border bg-[#05080d] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#D8B45A] focus:ring-2 focus:ring-[#D8B45A]/20 ${
          error ? 'border-[#d97757]' : 'border-white/12'
        }`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {helper ? <span className="mt-2 block text-xs leading-6 text-[#94A3B8]">{helper}</span> : null}
      {error ? <span className="mt-2 block text-sm text-[#f3b6a1]">{error}</span> : null}
    </label>
  )
}

function ProjectRequestPage() {
  const initialFormState = {
    name: '',
    company: '',
    email: '',
    phone: '',
    preferredContact: '',
    interest: '',
    projectStart: '',
    budgetRange: '',
    message: '',
    privacyConsent: false,
    website: '',
  }

  const [form, setForm] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [submitState, setSubmitState] = useState('idle')
  const [responseMessage, setResponseMessage] = useState('')

  const handleChange = (event) => {
    const target = event.target
    const { name, type } = target
    const value = type === 'checkbox' ? target.checked : target.value

    setForm((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Bitte Namen eingeben.'
    if (!form.email.trim()) {
      nextErrors.email = 'Bitte E-Mail-Adresse eingeben.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Bitte eine gültige E-Mail-Adresse eingeben.'
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Bitte kurz beschreiben, worum es geht.'
    } else if (form.message.trim().length < 12) {
      nextErrors.message = 'Bitte Nachricht etwas genauer beschreiben.'
    }

    if (!form.privacyConsent) {
      nextErrors.privacyConsent = 'Bitte der Verarbeitung der Anfrage zustimmen.'
    }

    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = validateForm()
    setErrors(nextErrors)
    setResponseMessage('')

    if (Object.keys(nextErrors).length > 0) return

    setSubmitState('submitting')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          company: form.company.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          preferredContact: form.preferredContact,
          interest: form.interest,
          projectStart: form.projectStart,
          budgetRange: form.budgetRange,
          message: form.message.trim(),
          privacyConsent: form.privacyConsent,
          website: form.website,
          source: 'Website',
        }),
      })

      const payload = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(payload?.error || 'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuche es erneut.')
      }

      setSubmitState('success')
      setResponseMessage('Vielen Dank für deine Anfrage. Deine Nachricht wurde erfolgreich übermittelt. STRUKTIVA meldet sich zeitnah bei dir.')
      setForm(initialFormState)
      setErrors({})
    } catch (error) {
      setSubmitState('error')
      setResponseMessage(error.message || 'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuche es erneut.')
    }
  }

  return (
    <main className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-[2.2rem] border border-[#D8B45A]/24 bg-[linear-gradient(160deg,rgba(5,5,5,0.95),rgba(11,15,20,0.96),rgba(16,23,34,0.98))] p-7 shadow-premium md:p-10 lg:p-12">
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/82">Projekt anfragen</p>
              <h1 className="text-gold-glow mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
                Projekt anfragen
              </h1>
              <p className="mt-5 text-xl font-medium text-[#F2D98B]">
                Kostenlose Ersteinschätzung für dein digitales System
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#D7DCE5] md:text-lg">
                STRUKTIVA unterstützt Unternehmen, Selbstständige und lokale Betriebe bei Website-Struktur,
                Kundenanfragen, Google-Sichtbarkeit, Automatisierung und digitalen Abläufen. Über dieses Formular kann
                dein Anliegen klar und vollständig übermittelt werden.
              </p>
            </div>
          </Reveal>
        </section>

        <div className="mt-8 grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <section className="h-full rounded-[1.9rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B45A]/82">Anfrage-System</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Klare Angaben für eine passende Rückmeldung</h2>
              <p className="mt-4 text-base leading-8 text-[#D7DCE5]">
                Je genauer das Anliegen beschrieben ist, desto besser lässt sich einschätzen, welche digitale Lösung,
                welcher Umfang und welcher nächste Schritt sinnvoll sind.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  'Website, Landingpage oder Sichtbarkeit einschätzen',
                  'KI & Automatisierung oder Anfrage-Systeme anfragen',
                  'Digitale Ordnung, Dashboard oder App-Vorhaben beschreiben',
                  'Kontaktweg und zeitlichen Rahmen direkt mitgeben',
                ].map((item) => (
                  <div key={item} className="rounded-[1.1rem] border border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-[#D7DCE5]">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.35rem] border border-[#D8B45A]/20 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-5">
                <p className="text-sm font-semibold text-white">Direkter Kontakt</p>
                <a href={`mailto:${contactDetails.email}`} className="mt-3 block text-sm text-[#D8B45A] transition hover:text-[#F2D98B]">
                  {contactDetails.email}
                </a>
                <a href={contactDetails.phoneHref} className="mt-1 block text-sm text-[#D8B45A] transition hover:text-[#F2D98B]">
                  {contactDetails.phoneLabel}
                </a>
                <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">
                  Das Formular ist der strukturierte Weg für neue Projektanfragen. Für kurze Rückfragen bleiben E-Mail
                  und Telefon selbstverständlich möglich.
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.06}>
            <section id="lead-form" className="rounded-[1.9rem] border border-[#D8B45A]/24 bg-[linear-gradient(160deg,rgba(7,17,31,0.94),rgba(11,31,58,0.9),rgba(5,10,18,0.96))] p-6 shadow-premium md:p-8">
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B45A]/82">Lead-Formular</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Projekt unverbindlich anfragen</h2>
                <p className="mt-3 text-sm leading-7 text-[#D7DCE5]">
                  Bitte die wichtigsten Angaben eintragen. So kann STRUKTIVA dein Anliegen besser einordnen.
                </p>
              </div>

              <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 md:grid-cols-2">
                  <LeadField
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="Vor- und Nachname"
                    autoComplete="name"
                    required
                  />
                  <LeadField
                    label="Firma"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    error={errors.company}
                    placeholder="Optional"
                    autoComplete="organization"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <LeadField
                    label="E-Mail"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="name@unternehmen.de"
                    autoComplete="email"
                    required
                  />
                  <LeadField
                    label="Telefon"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    placeholder="Optional"
                    autoComplete="tel"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <LeadSelect
                    label="Gewünschter Kontaktweg"
                    name="preferredContact"
                    value={form.preferredContact}
                    onChange={handleChange}
                    options={leadPreferredContactOptions}
                    error={errors.preferredContact}
                    placeholder="Bitte auswählen"
                  />
                  <LeadSelect
                    label="Interesse / Bedarf"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    options={leadInterestOptions}
                    error={errors.interest}
                    placeholder="Bitte auswählen"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <LeadSelect
                    label="Projektstart"
                    name="projectStart"
                    value={form.projectStart}
                    onChange={handleChange}
                    options={leadProjectStartOptions}
                    error={errors.projectStart}
                    placeholder="Bitte auswählen"
                  />
                  <LeadSelect
                    label="Budgetrahmen"
                    name="budgetRange"
                    value={form.budgetRange}
                    onChange={handleChange}
                    options={leadBudgetOptions}
                    error={errors.budgetRange}
                    placeholder="Bitte auswählen"
                    helper="Grobe Orientierung, falls schon bekannt."
                  />
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-white">
                    Nachricht
                    <span className="ml-1 text-[#D8B45A]">*</span>
                  </span>
                  <textarea
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Worum geht es, was ist bereits vorhanden und was soll verbessert oder aufgebaut werden?"
                    className={`w-full rounded-[1.1rem] border bg-[#05080d] px-4 py-3.5 text-sm leading-7 text-white outline-none transition placeholder:text-[#7f8ca0] focus:border-[#D8B45A] focus:ring-2 focus:ring-[#D8B45A]/20 ${
                      errors.message ? 'border-[#d97757]' : 'border-white/12'
                    }`}
                  />
                  {errors.message ? <span className="mt-2 block text-sm text-[#f3b6a1]">{errors.message}</span> : null}
                </label>

                <div className="hidden" aria-hidden="true">
                  <label>
                    Website
                    <input type="text" name="website" tabIndex="-1" autoComplete="off" value={form.website} onChange={handleChange} />
                  </label>
                </div>

                <label className="rounded-[1.2rem] border border-white/12 bg-white/[0.03] px-4 py-4">
                  <span className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="privacyConsent"
                      checked={form.privacyConsent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-white/30 bg-[#05080d] text-[#D8B45A] focus:ring-[#D8B45A]"
                    />
                    <span className="text-sm leading-7 text-[#D7DCE5]">
                      Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden. Weitere
                      Informationen finden sich in der{' '}
                      <a href={siteLinks.datenschutz} className="font-semibold text-[#D8B45A] underline underline-offset-4">
                        Datenschutzerklärung
                      </a>
                      .
                    </span>
                  </span>
                  {errors.privacyConsent ? <span className="mt-2 block text-sm text-[#f3b6a1]">{errors.privacyConsent}</span> : null}
                </label>

                {responseMessage ? (
                  <div
                    aria-live="polite"
                    className={`rounded-[1.2rem] border px-4 py-3 text-sm leading-7 ${
                      submitState === 'success'
                        ? 'border-[#D8B45A]/24 bg-[#D8B45A]/10 text-[#F2D98B]'
                        : 'border-[#d97757]/30 bg-[#4a1f14]/40 text-[#f3b6a1]'
                    }`}
                  >
                    {responseMessage}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={submitState === 'submitting'}
                  className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(17,24,39,0.24)] transition hover:bg-[#A9822D] hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitState === 'submitting' ? 'Anfrage wird gesendet ...' : 'Anfrage senden'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </section>
          </Reveal>
        </div>
      </div>
    </main>
  )
}

function LegalSection({ title, children }) {
  return (
    <section className="metallic-card rounded-[1.6rem] p-5 shadow-premium md:p-6">
      <h2 className="metallic-dark-title text-xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-7 md:text-base">{children}</div>
    </section>
  )
}

function LegalLayout({ title, intro, children }) {
  return (
    <main className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="metallic-card rounded-[2.3rem] p-7 shadow-premium md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/78">{brand.name}</p>
            <h1 className="metallic-dark-title mt-4 text-4xl font-semibold md:text-5xl">{title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#E0BF6A] md:text-lg">{intro}</p>
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
      <LegalSection title="Angaben gemäß § 5 TMG">
        <p>Jessica Wacker<br />Ostlandstraße 3<br />75365 Calw</p>
        <p>Kontakt:<br />Telefon: 07051 8162292<br />E-Mail: <a href="mailto:struktiva.info@gmail.com" className="text-[#D8B45A]">struktiva.info@gmail.com</a></p>
      </LegalSection>

      <LegalSection title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
        <p>Jessica Wacker<br />Ostlandstraße 3<br />75365 Calw</p>
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
        <p>Jessica Wacker (STRUKTIVA)<br />Ostlandstraße 3, 75365 Calw<br />E-Mail: <a href="mailto:struktiva.info@gmail.com" className="text-[#D8B45A]">struktiva.info@gmail.com</a><br />Telefon: 07051 8162292</p>
      </LegalSection>

      <LegalSection title="2. Erhebung und Verarbeitung personenbezogener Daten">
        <p>Wir erheben personenbezogene Daten nur, soweit Sie uns diese im Rahmen<br />des Kontakt- bzw. Anfrageformulars freiwillig mitteilen. Dies umfasst:<br />Name, Unternehmen, E-Mail-Adresse, Telefonnummer, Nachricht sowie<br />projektbezogene Angaben (Interesse, Projektstart, Budget).</p>
      </LegalSection>

      <LegalSection title="3. Zweck der Datenverarbeitung">
        <p>Die übermittelten Daten werden ausschließlich zur Bearbeitung Ihrer<br />Anfrage verwendet. Eine Weitergabe an Dritte erfolgt nicht, außer an<br />den E-Mail-Versanddienstleister Resend (siehe unten).</p>
      </LegalSection>

      <LegalSection title="4. E-Mail-Versand über Resend">
        <p>Für den Versand von Bestätigungs- und Benachrichtigungs-E-Mails nutzen<br />wir den Dienst Resend der Resend Inc., 2261 Market Street #4008,<br />San Francisco, CA 94114, USA. Resend ist als Auftragsverarbeiter gemäß<br />Art. 28 DSGVO vertraglich gebunden. Weitere Informationen:<br /><a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#D8B45A]">https://resend.com/legal/privacy-policy</a></p>
      </LegalSection>

      <LegalSection title="5. Rechtsgrundlage">
        <p>Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. b DSGVO<br />(Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes<br />Interesse an der Bearbeitung von Geschäftsanfragen).</p>
      </LegalSection>

      <LegalSection title="6. Speicherdauer">
        <p>Ihre Daten werden gelöscht, sobald sie für die Erreichung des Zwecks<br />nicht mehr erforderlich sind, spätestens nach 6 Monaten, sofern keine<br />gesetzlichen Aufbewahrungspflichten bestehen.</p>
      </LegalSection>

      <LegalSection title="7. Ihre Rechte">
        <p>Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung<br />(Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der<br />Verarbeitung (Art. 18 DSGVO) sowie Datenübertragbarkeit (Art. 20 DSGVO).<br />Zur Geltendmachung Ihrer Rechte wenden Sie sich an:<br /><a href="mailto:struktiva.info@gmail.com" className="text-[#D8B45A]">struktiva.info@gmail.com</a></p>
      </LegalSection>

      <LegalSection title="8. Beschwerderecht">
        <p>Sie haben das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde<br />zu beschweren. Zuständig ist der Landesbeauftragte für den Datenschutz<br />Baden-Württemberg, Lautenschlagerstraße 20, 70173 Stuttgart.</p>
      </LegalSection>

      <LegalSection title="9. Hosting">
        <p>Diese Website wird über Vercel Inc., 340 Pine Street Suite 701,<br />San Francisco, CA 94104, USA gehostet. Beim Aufruf der Website werden<br />automatisch Server-Logdaten (IP-Adresse, Browsertyp, Zeitstempel)<br />erhoben. Weitere Informationen:<br /><a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#D8B45A]">https://vercel.com/legal/privacy-policy</a></p>
      </LegalSection>
    </LegalLayout>
  )
}

function WiderrufPage() {
  return (
    <LegalLayout
      title="Kein Widerrufsrecht"
      intro="Hinweis zum fehlenden gesetzlichen Widerrufsrecht für die angebotenen Dienstleistungen."
    >
      <LegalSection title="Kein Widerrufsrecht">
        <p>STRUKTIVA erbringt Dienstleistungen ausschließlich auf Basis<br />individueller Auftragsvereinbarungen. Ein gesetzliches Widerrufsrecht<br />nach § 312g BGB besteht für diese Art von Dienstleistungsverträgen<br />nicht, sofern die Leistung auf ausdrücklichen Wunsch des Auftraggebers<br />vor Ablauf der Widerrufsfrist vollständig erbracht wurde.</p>
        <p>Bei Fragen wenden Sie sich an: <a href="mailto:struktiva.info@gmail.com" className="text-[#D8B45A]">struktiva.info@gmail.com</a></p>
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
      <LegalSection title="Projekt anfragen">
        <p>Für neue Website-, Sichtbarkeits-, Automatisierungs- oder Systemanfragen gibt es jetzt eine strukturierte Anfrage-Seite mit allen wichtigen Angaben.</p>
        <a
          href={siteLinks.projectRequestForm}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A9822D]"
        >
          Projekt unverbindlich anfragen
          <ArrowRight className="h-4 w-4" />
        </a>
      </LegalSection>

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
              Gemeinsam entwickeln wir digitale Strukturen für Unternehmen, Selbstständige und lokale Dienstleister – mit klaren Websites, Google-Sichtbarkeit, Kontaktwegen und digitalen Systemen.
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
  const isHomeRoute = pathname === '/' || pathname === '/preise' || pathname === '/demos'
  const wissenArticle = wissenArticles.find((article) => article.href === pathname)
  const homeSectionByPath = {
    '/preise': 'preise',
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
        return
      }

      const button = target.closest('button')
      if (button?.type === 'submit') {
        safeTrackLead()
      }
    }

    const handleSubmit = () => {
      safeTrackLead()
    }

    document.addEventListener('click', handleClick)
    document.addEventListener('submit', handleSubmit)

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('submit', handleSubmit)
    }
  }, [])

  let content = <HomePage />

  if (pathname === '/ueber-uns') {
    content = <AboutPage />
  } else if (pathname === '/leistungen') {
    content = <LeistungenPage />
  } else if (pathname === '/websites') {
    content = <WebsitesLandingpagesPage />
  } else if (pathname === '/ki-automatisierung') {
    content = <KiAutomatisierungPage />
  } else if (pathname === '/lead-systeme') {
    content = <LeadSystemePage />
  } else if (pathname === '/pakete') {
    content = <PaketePage />
  } else if (pathname === '/referenzen') {
    content = <ReferenzenPage />
  } else if (pathname === '/referenzen/salon-karola') {
    content = <SalonKarolaReferencePage />
  } else if (pathname === '/demos') {
    content = <DemosPage />
  } else if (pathname === '/projekt-anfragen') {
    content = <ProjectRequestPage />
  } else if (pathname === '/kontakt') {
    content = <ContactPage />
  } else if (pathname === '/impressum') {
    content = <ImpressumPage />
  } else if (pathname === '/datenschutz') {
    content = <DatenschutzPage />
  } else if (pathname === '/widerruf') {
    content = <WiderrufPage />
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
  } else if (pathname === '/wissen') {
    content = <WissenOverviewPage />
  } else if (wissenArticle) {
    content = <WissenArticlePage article={wissenArticle} />
  } else if (offerPageContent[pathname]) {
    const page = offerPageContent[pathname]
    content = <OfferDetailPage title={page.title} intro={page.intro} points={page.points} pathname={pathname} />
  } else if (pathname === '/demos/handwerker') {
    content = <DemoHandwerkerHtmlPage />
  } else if (pathname === '/demos/kosmetik') {
    content = <DemoKosmetikHtmlPage />
  } else if (pathname === '/demos/lokaler-dienstleister') {
    content = <DemoDienstleisterHtmlPage />
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
    <div className={`struktiva-metallic ${isHomeRoute ? 'struktiva-home' : ''} min-h-screen`}>
      {!isDemoRoute ? <Header pathname={pathname} isHomeRoute={isHomeRoute} /> : null}
      {content}
      {!isDemoRoute ? <Footer /> : null}
      <CookieConsentLayer pathname={pathname} />
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

function DemoHandwerkerHtmlPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff]">
      <iframe
        src="/demos/handwerker/index.html"
        title="STRUKTIVA Handwerker Demo"
        className="block h-screen w-full border-0"
        loading="lazy"
      />
    </main>
  )
}

function DemoKosmetikHtmlPage() {
  return (
    <main className="min-h-screen bg-[#fff8f1]">
      <iframe
        src="/demos/kosmetik/index.html"
        title="STRUKTIVA Kosmetikstudio Demo"
        className="block h-screen w-full border-0"
        loading="lazy"
      />
    </main>
  )
}

function DemoDienstleisterHtmlPage() {
  return (
    <main className="min-h-screen bg-[#f7fbfd]">
      <iframe
        src="/demos/lokaler-dienstleister/index.html"
        title="STRUKTIVA Lokaler Dienstleister Demo"
        className="block h-screen w-full border-0"
        loading="lazy"
      />
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
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Digitale Übersicht für Unternehmen</h1>
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
              <img src={demoV2Images.dashboardHero} alt="Beispielhafte Dashboard-Ansicht für Unternehmen" loading="lazy" className="h-full w-full object-cover" />
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

