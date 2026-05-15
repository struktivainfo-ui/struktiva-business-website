import React, { useEffect, useState } from 'react'
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
  ClipboardList,
  LayoutTemplate,
  Megaphone,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  MousePointerClick,
  PanelsTopLeft,
  PhoneCall,
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
  pricing: '/#preise',
  demos: '/#demos',
  apps: '/apps',
  googleAds: '/google-ads',
  process: '/#ablauf',
  contact: '/kontakt',
  webseitenPage: '/webseiten',
  landingpagesPage: '/landingpages',
  appsPage: '/apps',
  googleAdsPage: '/google-ads',
  demoHandwerker: '/demo-handwerker',
  demoBeauty: '/demo-beauty',
  demoDienstleister: '/demo-dienstleister',
  impressum: '/impressum',
  datenschutz: '/datenschutz',
  widerruf: '/widerruf',
}

const brand = {
  name: 'STRUKTIVA Unternehmensarchitektur',
  descriptor: 'Unternehmensarchitektur',
  line: 'Professionelle Online-Präsenz. Kundengewinnung. Digitale Struktur. Optionale App-Lösungen.',
}

const struktivaImages = {
  hero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
  structure: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
}

const contactDetails = {
  email: 'struktiva.info@gmail.com',
  phoneLabel: '07051 8162292',
  phoneHref: 'tel:+4970518162292',
  whatsappLabel: '07051 8162292',
  whatsappHref: 'https://wa.me/4970518162292',
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
  ['Apps', siteLinks.apps],
  ['Google Ads', siteLinks.googleAds],
  ['Ablauf', siteLinks.process],
  ['Kontakt', siteLinks.contact],
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
        points: ['Renovierung & Sanierung', 'Reparaturservice', 'Wartung & Instandhaltung', 'individuelle Projektanfragen', 'Notfall- oder Schnellservice optional'],
      },
      {
        title: 'Warum dieser Aufbau funktioniert',
        text: 'Kunden wollen schnell verstehen, ob ein Betrieb zuverlässig ist, welche Leistungen angeboten werden und wie sie unkompliziert Kontakt aufnehmen können. Eine klare digitale Struktur reduziert Unsicherheit und führt Besucher gezielt zur Anfrage.',
      },
      {
        title: 'Vertrauenselemente (Demo)',
        points: ['regionale Ausrichtung', 'klare Kontaktmöglichkeiten', 'Bewertungsbereich als Beispiel', 'Vorher-Nachher-Bereich als Platzhalterstruktur', 'WhatsApp- oder Telefon-CTA'],
      },
    ],
    formFields: ['Name', 'Telefonnummer', 'E-Mail', 'Gewünschte Leistung', 'Nachricht'],
    formCta: 'Projekt anfragen',
    optional:
      'Auf Wunsch kann ein Newsletter oder Infoverteiler eingebunden werden, z. B. für saisonale Angebote, Wartungserinnerungen oder Kundeninformationen.',
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
    optional:
      'Auf Wunsch kann ein kleiner Newsletter-Bereich integriert werden, z. B. für Aktionen, Pflege-Tipps oder freie Termine.',
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
    optional:
      'Ein Newsletter kann optional eingebunden werden, um Interessenten regelmäßig über Angebote, freie Termine oder neue Leistungen zu informieren.',
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
  [LayoutTemplate, 'Professionelle Webseiten', 'Die zentrale digitale Basis mit klarer Leistungsdarstellung, vertrauenswürdiger Struktur und starker Kontaktführung.'],
  [Target, 'Landingpages', 'Gezielte Angebotsseiten, die ein Angebot verständlich erklären und Besucher aktiv zur Anfrage führen.'],
  [Smartphone, 'Digitale Unternehmensstruktur', 'WhatsApp-Kontakt, Google-Struktur, Social-Media-Logik und Angebotsarchitektur werden sinnvoll in ein Gesamtsystem eingebunden.'],
  [Megaphone, 'Kundengewinnung', 'Google Ads und Landingpages werden strategisch verbunden, damit aus Sichtbarkeit qualifizierte Anfragen entstehen.'],
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
    price: 'ab 499 €',
    badge: 'Professioneller Einstieg',
    description: 'Für Betriebe, die online professioneller gefunden werden wollen.',
    features: [
      'moderne Onepage-Webseite',
      'mobile Optimierung',
      'klare Angebotsstruktur',
      'WhatsApp-Kontakt',
      'Google-Bewertungslink',
      'einfache Kontaktführung',
      'Newsletter-Einbindung optional',
    ],
    note: 'Ein klarer Start für Betriebe, die digital professioneller auftreten und erreichbar sein möchten.',
    cta: 'Sichtbarkeit anfragen',
    strong: true,
  },
  {
    title: 'Kundengewinnung',
    price: 'ab 999 €',
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
    price: 'ab 1.999 €',
    subtitle: 'Optionale App- oder Dashboard-Lösung möglich',
    badge: 'Ganzheitliches System',
    description: 'Für Betriebe, die ein vollständiges digitales System brauchen.',
    features: [
      'Website oder Mehrseiten-Struktur',
      'Landingpages',
      'Google-Struktur',
      'Social-Media-System',
      'Kundenanfrage-System',
      'App- oder Dashboard-Konzept optional',
      'Newsletter-System als zusätzlicher Baustein möglich',
      '30 Tage Begleitung',
    ],
    note: 'Für Unternehmen, die nicht nur einen Auftritt, sondern ein klares digitales Unternehmenssystem aufbauen wollen.',
    cta: 'Unternehmensarchitektur anfragen',
    premium: true,
  },
  {
    title: 'Monatliche Betreuung',
    price: 'ab 149 € / Monat',
    badge: 'Laufende Begleitung',
    description: 'Für Unternehmen, die nach der Erstellung dauerhaft Unterstützung bei Webseite, Landingpage, Google Ads oder App-Systemen möchten.',
    tiers: [
      {
        title: 'Basic',
        price: 'ab 149 € / Monat',
        description: 'Für einfache laufende Unterstützung.',
        features: [
          'kleinere Webseiten- oder Landingpage-Anpassungen',
          'kurze digitale Prüfung',
          'kleine Textanpassungen',
          'Empfehlung für nächste Schritte',
        ],
      },
      {
        title: 'Standard',
        price: 'ab 299 € / Monat',
        description: 'Für regelmäßige digitale Weiterentwicklung.',
        features: [
          'Webseiten- oder Landingpage-Optimierungen',
          'Google-Ads-Strukturprüfung',
          'Optimierung der Kundenführung',
          'kleinere App- oder Struktur-Anpassungen',
          'konkrete Verbesserungsvorschläge',
        ],
      },
      {
        title: 'Premium',
        price: 'ab 499 € / Monat',
        description: 'Für intensivere Betreuung.',
        features: [
          'laufende Optimierung von Webseite, Landingpage oder App',
          'Google-Ads-Begleitung',
          'regelmäßige Anpassungen',
          'Weiterentwicklung digitaler Abläufe',
          'priorisierte Betreuung',
        ],
      },
    ],
    note: 'Der genaue monatliche Umfang wird im persönlichen Gespräch festgelegt.',
    cta: 'Betreuung anfragen',
  },
]

const processSteps = [
  ['1', 'Kostenlose Ersteinschätzung', 'Wir schauen uns an, wo dein Unternehmen aktuell digital steht.'],
  ['2', 'Strukturplan', 'Du bekommst einen klaren Plan, welche Webseite, Landingpage oder Systemstruktur sinnvoll ist.'],
  ['3', 'Umsetzung', 'STRUKTIVA erstellt deine digitale Struktur professionell und verständlich.'],
  ['4', 'Optimierung', 'Nach dem Start wird geprüft, ob Kontaktwege, Texte und Aufbau sauber funktionieren.'],
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
  'Website, Landingpage, WhatsApp, Google, Social Media und optional Newsletter als zusammenhängende Struktur',
  'Verständliche Umsetzung ohne Technik-Blabla',
  'Systeme, die kleine Unternehmen wirklich im Alltag nutzen können',
]

const qualityPoints = [
  ['Klar verständlich', 'Keine unnötig komplizierten Systeme, sondern Lösungen, die nachvollziehbar aufgebaut sind.'],
  ['Sauber umgesetzt', 'Professionelle Texte, klare Struktur, mobile Optimierung und technische Stabilität.'],
  ['Praxisnah gedacht', 'Digitale Lösungen, die nicht nur gut aussehen, sondern im echten Unternehmensalltag helfen.'],
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

function useDocumentTitle(pathname) {
  useEffect(() => {
    const titles = {
      '/': 'STRUKTIVA Unternehmensarchitektur – Digitale Systeme für kleine Unternehmen',
      '/webseiten': 'Professionelle Webseiten – STRUKTIVA Unternehmensarchitektur',
      '/landingpages': 'Landingpages – STRUKTIVA Unternehmensarchitektur',
      '/apps': 'Unternehmens-Apps – STRUKTIVA Unternehmensarchitektur',
      '/google-ads': 'Google Ads – STRUKTIVA Unternehmensarchitektur',
      '/demo-handwerker': 'Demo Handwerker – STRUKTIVA Unternehmensarchitektur',
      '/demo-beauty': 'Demo Beauty & Kosmetik – STRUKTIVA Unternehmensarchitektur',
      '/demo-dienstleister': 'Demo Dienstleister – STRUKTIVA Unternehmensarchitektur',
      '/impressum': 'Impressum – STRUKTIVA Unternehmensarchitektur',
      '/datenschutz': 'Datenschutz – STRUKTIVA Unternehmensarchitektur',
      '/widerruf': 'Widerruf – STRUKTIVA Unternehmensarchitektur',
      '/kontakt': 'Kontakt – STRUKTIVA Unternehmensarchitektur',
    }

    document.title = titles[pathname] || titles['/']
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

function SplashScreen({ onDone }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hideTimer = window.setTimeout(onDone, reducedMotion ? 900 : 1400)
    const safetyTimer = window.setTimeout(onDone, 2000)
    return () => {
      window.clearTimeout(hideTimer)
      window.clearTimeout(safetyTimer)
    }
  }, [onDone])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.015 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className="splash-screen fixed inset-0 z-[120] flex items-center justify-center px-4"
      aria-label="STRUKTIVA Splashscreen"
    >
      <div className="splash-glow" />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-[1] text-center"
      >
        <img
          src="/struktiva-logo.jpeg"
          alt="STRUKTIVA Unternehmensarchitektur Logo"
          className="mx-auto h-20 w-20 rounded-full object-contain shadow-[0_0_32px_rgba(216,180,90,0.22)] md:h-24 md:w-24"
        />
        <p className="mt-5 text-base font-semibold tracking-[0.2em] text-white md:text-lg">Unternehmensarchitektur</p>
        <div className="splash-line mx-auto mt-3 h-px w-40 max-w-[70vw]" />
        <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[#D7DCE5] md:text-[13px]">Digitale Systeme. Sichtbarkeit. Struktur.</p>
      </motion.div>
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
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.9rem] lg:leading-[1.08]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[#D7DCE5] md:text-lg">{text}</p>
    </div>
  )
}

function Header({ pathname }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

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
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-2.5 transition md:px-5 ${
          scrolled
            ? 'border-[#D8B45A]/25 bg-white/[0.05] shadow-[0_20px_70px_rgba(8,12,24,0.35)]'
            : 'border-white/12 bg-white/[0.05]'
        }`}
      >
        <a href={siteLinks.home} className="flex min-w-0 items-center gap-3">
          <img
            src="/struktiva-logo.jpeg"
            alt="STRUKTIVA Unternehmensarchitektur Logo"
            className="h-8 w-8 rounded-full object-contain md:h-10 md:w-10"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white md:text-[15px]">{brand.name}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#94A3B8]">{brand.descriptor}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium text-[#D7DCE5] transition hover:text-[#D8B45A]">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={siteLinks.contact}
            className="inline-flex items-center gap-2 rounded-full bg-[#D8B45A] px-4.5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(17,24,39,0.15)] transition hover:bg-[#A9822D] hover:-translate-y-0.5"
          >
            Kostenlose Ersteinschätzung anfragen
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/14 bg-white/[0.05] text-white lg:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 max-w-7xl rounded-[1.8rem] border border-white/14 bg-[#07111F]/90 p-4 shadow-premium backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-2">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[#D7DCE5] transition hover:bg-white/[0.08] hover:text-[#D8B45A]"
                >
                  {label}
                </a>
              ))}
              <a
                href={siteLinks.contact}
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
              {brand.name}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-[34rem] text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.08] xl:text-[58px]"
            >
              Mehr Kunden. Mehr Struktur. Mehr digitale Wirkung.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-[35rem] text-[15px] leading-7 text-[#D7DCE5] md:text-base"
            >
              STRUKTIVA entwickelt digitale Unternehmenssysteme für Selbstständige, lokale Betriebe und kleine Unternehmen – mit Website, Landingpage, WhatsApp-Struktur, Google-Auftritt, Social Media und auf Wunsch Newsletter-Einbindung als zusätzlichem Baustein.
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

function ServicesSection() {
  const serviceRoutes = {
    'Professionelle Webseiten': siteLinks.webseitenPage,
    Landingpages: siteLinks.landingpagesPage,
    'Unternehmens-Apps': siteLinks.appsPage,
    'Google Ads': siteLinks.googleAdsPage,
  }

  return (
    <section id="leistungen" className="scroll-mt-28 px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Leistungen"
            title="Digitale Struktur statt Online-Chaos."
            text="STRUKTIVA ist keine klassische Webagentur. STRUKTIVA baut digitale Strukturen, die kleine Unternehmen sichtbarer, professioneller und verkaufsfähiger machen."
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
          className="mt-12 grid gap-5 lg:grid-cols-2"
        >
          {coreServices.map(([Icon, title, text]) => (
            <motion.a
              key={title}
              href={serviceRoutes[title]}
              variants={fadeUp}
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="service-card-3d group block cursor-pointer rounded-[2rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium transition hover:-translate-y-1 hover:border-[#D8B45A]/35 md:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D8B45A]/12 text-[#D8B45A]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#D7DCE5] md:text-base">{text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#D8B45A]">
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <Reveal className="mt-8">
          <div className="rounded-[1.5rem] border border-white/14 bg-white/[0.04] p-5 text-sm leading-7 text-[#D7DCE5]">
            Texte, Struktur, Google-Unternehmensprofil, WhatsApp oder Social Media können je nach Projekt unterstützend eingebunden werden, sind aber keine separaten Hauptangebote mehr.
          </div>
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
            return (
              <motion.a
                key={demo.title}
                href={demo.href}
                variants={fadeUp}
                transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-[1.9rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium transition hover:-translate-y-1 hover:border-[#D8B45A]/30"
              >
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
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function PricingCard({ pkg }) {
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
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D8B45A]/35 to-transparent" />
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
            <div className="rounded-[1.8rem] border border-[#D8B45A]/20 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-6 shadow-premium md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/80">Faire Kennenlernpreise zum Start</p>
              <h3 className="mt-3 text-2xl font-semibold text-white md:text-[1.75rem]">Professioneller Einstieg mit klarer Struktur statt Agentur-Standard</h3>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-[#D7DCE5] md:text-base">
                STRUKTIVA positioniert sich bewusst als digitaler Systemanbieter für kleine Unternehmen. Die Umsetzung verbindet Präsenz, Kundenführung und Kontaktwege in einer Struktur, die im Alltag funktioniert und verkaufsfähig bleibt.
              </p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/80">Optionaler Zusatzbaustein</p>
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
            <p className="mt-5 text-lg font-semibold text-[#D8B45A]">ab 249 € optional</p>
          </div>
        </Reveal>

          <Reveal className="mt-8">
            <div className="rounded-[1.6rem] border border-white/14 bg-white/[0.05] p-6 text-center text-sm leading-7 text-[#D7DCE5]">
              Alle Preise verstehen sich als Kennenlern- und Einstiegspreise. Der genaue Leistungsumfang wird im persönlichen Gespräch festgelegt und richtet sich nach Projektumfang, technischer Umsetzung, Hosting, Speicherbedarf, Betreuungsaufwand und Arbeitszeit. Werbebudget für Google Ads oder Social-Media-Werbung ist nicht enthalten.
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
            text="STRUKTIVA verbindet Website, Landingpage, WhatsApp, Google, Social Media und optional Newsletter zu einem digitalen System, das im Alltag wirklich nutzbar ist."
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

function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-28 px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#D8B45A]/20 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-6 shadow-[0_14px_34px_rgba(17,24,39,0.16)] md:p-8 lg:p-10">
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
            </div>
          </Reveal>
        </div>
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

          <ServiceSection title="Optionaler Zusatzbaustein">
            <p>{demo.optional}</p>
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
    <footer className="px-5 pb-8 pt-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-[#D8B45A]/35 bg-[#0B1F3A] px-6 py-7 shadow-premium lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">{brand.name}</p>
          <p className="mt-2 text-sm text-[#D7DCE5]">Jessica Wacker</p>
          <div className="mt-3 grid gap-1.5 text-sm text-[#D7DCE5]">
            <a href={`mailto:${contactDetails.email}`} className="transition hover:text-[#F2D98B]">{contactDetails.email}</a>
            <a href={contactDetails.phoneHref} className="transition hover:text-[#F2D98B]">{contactDetails.phoneLabel}</a>
            <a href={contactDetails.whatsappHref} className="transition hover:text-[#F2D98B]">WhatsApp Business</a>
          </div>
        </div>
        <div className="grid gap-5 text-sm text-[#D7DCE5] md:grid-cols-2">
          <div className="flex flex-wrap gap-4">
            <a href={siteLinks.demos} className="transition hover:text-[#F2D98B]">Demos</a>
            <a href={siteLinks.impressum} className="transition hover:text-[#F2D98B]">Impressum</a>
            <a href={siteLinks.datenschutz} className="transition hover:text-[#F2D98B]">Datenschutz</a>
            <a href={siteLinks.widerruf} className="transition hover:text-[#F2D98B]">Widerruf</a>
            <a href={siteLinks.contact} className="transition hover:text-[#F2D98B]">Kontakt</a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F2D98B]/80">Leistungen</p>
            <div className="mt-2 grid gap-1.5">
              <a href={siteLinks.webseitenPage} className="transition hover:text-[#F2D98B]">Professionelle Webseiten</a>
              <a href={siteLinks.landingpagesPage} className="transition hover:text-[#F2D98B]">Landingpages</a>
              <a href={siteLinks.appsPage} className="transition hover:text-[#F2D98B]">Unternehmens-Apps</a>
              <a href={siteLinks.googleAdsPage} className="transition hover:text-[#F2D98B]">Google Ads</a>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-[#D7DCE5] lg:max-w-md">
          <p>Zufrieden mit STRUKTIVA? Ich freue mich über deine Google-Bewertung.</p>
          <a
            href={contactDetails.googleReviewHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 font-semibold text-[#F2D98B] transition hover:text-white"
          >
            Google-Bewertung schreiben
            <ArrowRight className="h-4 w-4" />
          </a>
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
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-start">
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/20 bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
              <Sparkles className="h-3.5 w-3.5" />
              {brand.name}
            </motion.div>
            <motion.h1 variants={fadeUp} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mt-5 max-w-[35rem] text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.05] xl:text-[58px]">
              Mehr Kunden. Mehr Struktur. Mehr digitale Wirkung.
            </motion.h1>
            <motion.p variants={fadeUp} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mt-4 max-w-[36rem] text-[15px] leading-7 text-[#D7DCE5] md:text-[17px] md:leading-8">
              STRUKTIVA entwickelt digitale Unternehmenssysteme für Selbstständige, lokale Betriebe und kleine Unternehmen – mit Website, Landingpage, WhatsApp-Struktur, Google-Auftritt, Social Media und auf Wunsch Newsletter-Einbindung als zusätzlichem Baustein.
            </motion.p>
            <motion.p variants={fadeUp} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mt-4 inline-flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#D7DCE5]">
              {brand.line.split('. ').filter(Boolean).map((item) => (
                <span key={item} className="rounded-full border border-white/14 bg-white/[0.05] px-2.5 py-1">{item.replace('.', '')}</span>
              ))}
            </motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <a href={siteLinks.contact} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45A] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(17,24,39,0.2)] transition hover:bg-[#A9822D] hover:-translate-y-0.5">
                Kostenlose Ersteinschätzung anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={siteLinks.pricing} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/25 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white transition hover:border-[#D8B45A]/30 hover:text-[#D8B45A]">
                Angebote ansehen
              </a>
            </motion.div>
            <motion.p variants={fadeUp} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mt-4 max-w-[36rem] rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-[#D7DCE5]">
              STRUKTIVA ist keine klassische Webagentur. STRUKTIVA baut digitale Strukturen, die kleine Unternehmen sichtbarer, professioneller und verkaufsfähiger machen.
            </motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mt-4 grid gap-2 text-sm text-[#D7DCE5] md:grid-cols-2">
              {[
                'Für kleine Unternehmen, Selbstständige und lokale Dienstleister',
                'Klare Struktur statt Technik-Chaos',
                'Verständliche Umsetzung ohne Agentur-Blabla',
                'Digitale Systeme, die im Alltag nutzbar sind',
              ].map((item) => (
                <p key={item} className="rounded-xl border border-white/12 bg-white/[0.03] px-3 py-2">{item}</p>
              ))}
            </motion.div>
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
              src={struktivaImages.hero}
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
  const serviceRoutes = {
    'Professionelle Webseiten': siteLinks.webseitenPage,
    Landingpages: siteLinks.landingpagesPage,
    'Unternehmens-Apps': siteLinks.appsPage,
    'Google Ads': siteLinks.googleAdsPage,
  }

  return (
    <section id="leistungen" className="scroll-mt-28 px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Leistungen"
            title="Digitale Struktur statt Online-Chaos."
            text="STRUKTIVA ist keine klassische Webagentur. STRUKTIVA baut digitale Strukturen, die kleine Unternehmen sichtbarer, professioneller und verkaufsfähiger machen."
          />
        </Reveal>
        <Reveal className="mt-8">
          <div className="service-image-spotlight grid items-center gap-5 rounded-[1.8rem] border border-white/14 bg-white/[0.04] p-4 md:grid-cols-[0.96fr_1.04fr] md:p-5">
              <img
                src={struktivaImages.structure}
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
          {coreServices.map(([Icon, title, text]) => (
            <motion.a
              key={title}
              href={serviceRoutes[title]}
              variants={fadeUp}
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="service-card-3d group block cursor-pointer rounded-[2rem] border border-white/14 bg-white/[0.05] p-6 shadow-premium transition hover:-translate-y-1 hover:border-[#D8B45A]/35 md:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D8B45A]/12 text-[#D8B45A]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#D7DCE5] md:text-base">{text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#D8B45A]">
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <Reveal className="mt-8">
          <div className="rounded-[1.5rem] border border-white/14 bg-white/[0.04] p-5 text-sm leading-7 text-[#D7DCE5]">
            Texte, Struktur, Google-Unternehmensprofil, WhatsApp oder Social Media können je nach Projekt unterstützend eingebunden werden, sind aber keine separaten Hauptangebote mehr.
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <>
      <HeroSectionPremium />
      <TrustSection />
      <ProblemSection />
      <ServicesSectionPremium />
      <WebsiteFocusSection />
      <AppsSection />
      <GoogleAdsSection />
      <DemoOverviewSection />
      <PricingSection />
      <ProcessSection />
      <TargetSection />
      <WhySection />
      <QualitySection />
      <ContactSection />
    </>
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
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
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
        <p className="text-lg font-semibold text-[#D8B45A]">Paket Sichtbarkeit – ab 499 €</p>
        <p>Für strukturierte Onepage-Webseiten mit professioneller Außendarstellung, WhatsApp-Kontakt und klarer Angebotsführung.</p>
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
        <p className="text-lg font-semibold text-[#D8B45A]">Paket Kundengewinnung – ab 999 €</p>
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
        <p className="text-lg font-semibold text-[#D8B45A]">Paket Unternehmensarchitektur – ab 1.999 €</p>
        <p>App- oder Dashboard-Lösungen sind eine hochwertige Zusatzoption für Unternehmen, die neben Sichtbarkeit auch mehr interne Struktur brauchen.</p>
        <p className="text-lg font-semibold text-[#D8B45A]">Monatliche Betreuung – ab 149 € / Monat</p>
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
        <p>- Kampagnenstruktur entwickeln</p><p>- Keyword-Grundlogik planen</p><p>- Anzeigentexte formulieren</p><p>- Angebot klar ausrichten</p><p>- passende Zielseite empfehlen</p><p>- Anfrageprozess verbessern</p><p>- optional Social-Media-Werbeideen vorbereiten</p>
      </ServiceSection>
      <ServiceSection title="So könnte es aussehen">
        <div className="grid gap-3 md:grid-cols-2">
          {['Suchanfrage', 'Anzeige', 'Landingpage-Verbindung', 'Anfrageziel'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/12 bg-white/[0.04] p-4">{item}</div>
          ))}
        </div>
      </ServiceSection>
      <ServiceSection title="Preis & Umfang">
        <p className="text-lg font-semibold text-[#D8B45A]">Google Ads Startpaket – ab 349 €</p>
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

function DemoOverviewSection() {
  const cards = [
    {
      title: 'Handwerker-Modell',
      text: 'Solide, direkt und vertrauensstark – für Betriebe, die Leistungen klar zeigen und Projektanfragen gewinnen wollen.',
      href: siteLinks.demoHandwerker,
      image: demoImageConfigs.handwerker.hero,
      alt: 'Handwerker auf einer Baustelle',
      tone: 'border-[#f59e0b]/40 bg-[linear-gradient(165deg,rgba(17,24,39,0.95),rgba(55,65,81,0.92))] text-white',
      accent: 'text-[#fbbf24]',
      icon: Building2,
    },
    {
      title: 'Beauty-Modell',
      text: 'Elegant, emotional und hochwertig – für Studios, die Atmosphäre, Vertrauen und Buchungen verbinden wollen.',
      href: siteLinks.demoBeauty,
      image: demoImageConfigs.beauty.hero,
      alt: 'Beauty-Behandlung in einem Studio',
      tone: 'border-[#e9c9ac]/70 bg-[linear-gradient(165deg,rgba(253,244,236,0.98),rgba(248,229,217,0.96))] text-[#3b2f2f]',
      accent: 'text-[#b8894b]',
      icon: Sparkles,
    },
    {
      title: 'Dienstleister-Modell',
      text: 'Klar, seriös und strukturiert – für Selbstständige und lokale Dienstleister, die ihr Angebot professionell erklären möchten.',
      href: siteLinks.demoDienstleister,
      image: demoImageConfigs.dienstleister.hero,
      alt: 'Beratungsgespräch am Tisch',
      tone: 'border-[#60a5fa]/35 bg-[linear-gradient(165deg,rgba(10,25,47,0.95),rgba(15,40,75,0.92))] text-white',
      accent: 'text-[#93c5fd]',
      icon: BriefcaseBusiness,
    },
  ]

  return (
    <section id="demos" className="scroll-mt-28 px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Live-Demos"
            title="Drei Branchen. Drei Modelle. Eine klare Struktur."
            text="Diese Beispielseiten zeigen, wie unterschiedlich ein professioneller digitaler Auftritt aussehen kann – je nach Branche, Zielgruppe und Wirkung."
          />
        </Reveal>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} variants={stagger} className="mt-12 grid gap-5 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.a key={card.title} href={card.href} variants={fadeUp} transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }} className={`group overflow-hidden rounded-[1.9rem] border shadow-premium transition hover:-translate-y-1 ${card.tone}`}>
                <div className="relative h-44 overflow-hidden">
                  <img src={card.image} alt={card.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                  <p className="absolute left-4 top-4 rounded-full border border-white/35 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">Demo-Beispiel</p>
                </div>
                <div className="p-6">
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ${card.accent}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 opacity-90">{card.text}</p>
                  <span className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${card.accent}`}>Demo ansehen<ArrowRight className="h-4 w-4" /></span>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
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
            <p>- Renovierung & Sanierung</p><p>- Reparaturservice</p><p>- Wartung & Instandhaltung</p><p>- individuelle Projektanfragen</p><p>- Notfall- oder Schnellservice optional</p>
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
        <DemoSectionCard title="Optionaler Zusatzbaustein: Newsletter-Einbindung" className="border-gray-600/50 bg-gray-900/60 text-gray-100">
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
        <DemoSectionCard title="Optionaler Zusatzbaustein: Newsletter-Einbindung" className="border-[#e4cabb] bg-white text-[#3b2f2f]">
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
        <DemoSectionCard title="Optionaler Zusatzbaustein: Newsletter-Einbindung" className="border-[#334155] bg-[#0b1f3a] text-[#dbe7ff]">
          <p>Ein Newsletter kann optional eingebunden werden, um Interessenten regelmäßig über Angebote, freie Termine oder neue Leistungen zu informieren.</p>
        </DemoSectionCard>
        <DemoFinalSection />
      </div>
    </main>
  )
}

function Page() {
  const pathname = useCurrentPath()
  const [showSplash, setShowSplash] = useState(false)
  useDocumentTitle(pathname)

  useEffect(() => {
    try {
      const splashSeen = window.sessionStorage.getItem('struktiva_splash_seen')
      if (!splashSeen) {
        setShowSplash(true)
        window.sessionStorage.setItem('struktiva_splash_seen', '1')
      }
    } catch {
      setShowSplash(true)
    }
  }, [])

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
  } else if (pathname === '/demo-handwerker') {
    content = <DemoHandwerkerPage />
  } else if (pathname === '/demo-beauty') {
    content = <DemoBeautyPage />
  } else if (pathname === '/demo-dienstleister') {
    content = <DemoDienstleisterPage />
  }

  return (
    <div className="min-h-screen text-white">
      <Header pathname={pathname} />
      {content}
      <Footer />
      <FloatingWhatsAppButton />
      <AnimatePresence>
        {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}
      </AnimatePresence>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
)





