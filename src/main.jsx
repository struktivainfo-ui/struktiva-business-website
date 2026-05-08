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
  apps: '/apps',
  googleAds: '/google-ads',
  process: '/#ablauf',
  contact: '/kontakt',
  webseitenPage: '/webseiten',
  landingpagesPage: '/landingpages',
  appsPage: '/apps',
  googleAdsPage: '/google-ads',
  impressum: '/impressum',
  datenschutz: '/datenschutz',
  widerruf: '/widerruf',
}

const brand = {
  name: 'STRUKTIVA Unternehmensarchitektur',
  descriptor: 'Unternehmensarchitektur',
  line: 'Professionelle Webseiten. Landingpages. Apps. Google Ads.',
}

const contactDetails = {
  email: 'info.struktiva@gmail.com',
  phoneLabel: '07051 8162292',
  phoneHref: 'tel:+4970518162292',
  whatsappLabel: '07051 8162292',
  whatsappHref: 'https://wa.me/4970518162292',
  addressLine1: 'Ostlandstraße 3',
  addressLine2: '75365 Calw',
  country: 'Deutschland',
}

const navItems = [
  ['Start', siteLinks.home],
  ['Leistungen', siteLinks.services],
  ['Preise', siteLinks.pricing],
  ['Apps', siteLinks.apps],
  ['Google Ads', siteLinks.googleAds],
  ['Ablauf', siteLinks.process],
  ['Kontakt', siteLinks.contact],
]

const trustCards = [
  [PanelsTopLeft, 'Professioneller Auftritt', 'Hochwertige Webseiten und Landingpages, die klar zeigen, was ein Unternehmen anbietet.'],
  [MousePointerClick, 'Mehr Anfragen', 'Google Ads und Zielseiten werden so gedacht, dass Kunden schneller verstehen und anfragen.'],
  [Workflow, 'Digitale Abläufe', 'App-Systeme können Kunden, Termine, Aufgaben und interne Prozesse übersichtlich abbilden.'],
  [ShieldCheck, 'Klarer Aufbau', 'Keine überladene Theorie, sondern digitale Lösungen, die kleine und mittlere Unternehmen wirklich nutzen können.'],
]

const problemCards = [
  ['Veralteter Online-Auftritt', 'Die bestehende Webseite wirkt oft nicht mehr klar, vertrauenswürdig oder vollständig.'],
  ['Unklare Angebotsseiten', 'Leistungen werden digital nicht verständlich genug erklärt oder sauber geführt.'],
  ['Zu wenig gezielte Anfragen', 'Google Ads ohne gute Struktur und starke Zielseite verlieren Wirkung.'],
  ['Fehlende digitale Struktur', 'Interne Abläufe sind häufig zu unsortiert, um schnell und sauber zu funktionieren.'],
]

const coreServices = [
  [LayoutTemplate, 'Professionelle Webseiten', 'Hochwertige Unternehmenswebseiten mit klarer Struktur, professionellen Texten, mobiler Optimierung und sauberer Kontaktführung.'],
  [Target, 'Landingpages', 'Eine Landingpage ist eine einzelne Angebotsseite, die ein bestimmtes Produkt, eine Dienstleistung oder Aktion klar erklärt und Besucher gezielt zur Anfrage führt.'],
  [Smartphone, 'Unternehmens-Apps', 'Individuelle App-Systeme für Kundenverwaltung, Termine, Aufgaben, Checklisten, Mitarbeiterorganisation und interne Abläufe.'],
  [Megaphone, 'Google Ads', 'Kampagnenstruktur, Anzeigentexte und passende Zielseiten für Unternehmen, die gezielt Kundenanfragen über Google gewinnen möchten.'],
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
    title: 'Landingpage',
    price: 'ab 799 €',
    badge: 'Fokussierte Zielseite',
    description: 'Für Angebote, Aktionen, Dienstleistungen oder Produkte, die klar erklärt und gezielt beworben werden sollen. Eine Landingpage ist eine einzelne Angebotsseite, die ein bestimmtes Produkt, eine Dienstleistung oder Aktion klar erklärt und Besucher gezielt zur Anfrage führt.',
    features: [
      'Seitenstruktur',
      'professionelle Texte',
      'Angebotslogik',
      'Call-to-Action-Bereiche',
      'Kontaktbereich',
      'mobile Optimierung',
      'Veröffentlichung über geeignete Plattform',
      'Grundstruktur für spätere Werbung',
    ],
    note: 'Ideal als Zielseite für Google Ads, Social Media oder direkte Kundenanfragen.',
    cta: 'Landingpage anfragen',
    strong: true,
  },
  {
    title: 'Professionelle Webseite',
    price: 'ab 1.499 €',
    badge: 'Hochwertiger Auftritt',
    description: 'Für Unternehmen, die einen hochwertigen digitalen Auftritt brauchen.',
    features: [
      'Startseite',
      'Leistungsbereiche',
      'Kontaktbereich',
      'mobile Optimierung',
      'professionelle Texte',
      'klare Kundenführung',
      'Impressum-/Datenschutz-Verlinkung',
      'technische Veröffentlichung',
    ],
    note: 'Komplette Webseiten werden je nach Seitenanzahl, Designaufwand und technischer Umsetzung individuell kalkuliert.',
    cta: 'Webseite anfragen',
    strong: true,
  },
  {
    title: 'Google Ads Startpaket',
    price: 'ab 349 €',
    badge: 'Gezielte Nachfrage',
    description: 'Für Unternehmen, die gezielt über Google neue Anfragen gewinnen möchten. Ergänzend können je nach Zielgruppe auch Social-Media-Werbeansätze berücksichtigt werden.',
    features: [
      'Kampagnenstruktur',
      'Keyword-Grundlogik',
      'Anzeigentexte',
      'klare Angebotsausrichtung',
      'Empfehlung für passende Zielseite',
      'Grundkonzept für Anfragegewinnung',
      'optional erste Ideen für Social-Media-Werbung',
    ],
    callout: 'Wichtig',
    calloutText: 'Werbebudget ist nicht enthalten und wird separat direkt bei Google oder der jeweiligen Werbeplattform eingesetzt.',
    note: 'Für Google Ads und Social-Media-Werbung wird idealerweise eine passende Landingpage empfohlen.',
    cta: 'Google Ads anfragen',
  },
  {
    title: 'Kostenlose App-Ersteinschätzung',
    price: 'kostenlos',
    badge: 'Kostenloser Einstieg',
    description: 'Für Unternehmen, die prüfen möchten, ob eine eigene App oder ein internes digitales System überhaupt sinnvoll ist.',
    features: [
      'kurzes Erstgespräch',
      'erste Einschätzung der aktuellen Abläufe',
      'grobe App-Idee passend zum Unternehmen',
      'Einschätzung möglicher Funktionen',
      'Empfehlung, ob sich eine App-Lösung lohnt',
      'grober Preisrahmen für eine mögliche Umsetzung',
    ],
    note: 'Die kostenlose App-Ersteinschätzung ersetzt kein vollständiges App-Konzept. Ein detailliertes Konzept mit Seitenstruktur, Nutzerrollen, Funktionsliste und UI-Planung kann bei Bedarf separat angeboten werden.',
    cta: 'App kostenlos einschätzen lassen',
  },
  {
    title: 'Unternehmens-App',
    price: 'ab 2.490 €',
    subtitle: 'Monatliche App-Betreuung ab 119 € / Monat',
    badge: 'Premium App-Lösung',
    description: 'Für Betriebe, die eine individuelle digitale Lösung für ihre Abläufe brauchen.',
    features: [
      'Kundenverwaltung',
      'Terminübersicht',
      'Mitarbeiterorganisation',
      'Aufgabensteuerung',
      'interne Checklisten',
      'Tages- und Wochenplanung',
      'Admin-Bereich',
      'mobile und Desktop-Ansicht',
      'branchenspezifische App-Module',
    ],
    extraTitle: 'Die monatliche App-Betreuung beinhaltet',
    extras: [
      'Hosting',
      'technische Bereitstellung',
      'kleinere Anpassungen',
      'Pflege und Funktionsprüfung',
      'Support bei Bedienfragen',
      'technische Grundbetreuung der App',
    ],
    note: 'Der genaue Preis hängt vom Funktionsumfang, den gewünschten Modulen, Hosting-Anforderungen, Speicherbedarf und technischem Aufwand ab.',
    cta: 'App-Lösung anfragen',
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
  ['1', 'Anfrage', 'Du beschreibst kurz, ob es um eine professionelle Webseite, Landingpage, App-Lösung oder Google Ads geht.'],
  ['2', 'Einschätzung', 'Wir prüfen gemeinsam, was für dein Unternehmen sinnvoll ist.'],
  ['3', 'Konzept', 'Du bekommst eine klare Empfehlung und ein passendes Angebot.'],
  ['4', 'Umsetzung', 'STRUKTIVA erstellt die vereinbarte Lösung: Webseite, Landingpage, App-System oder Google-Ads-Struktur.'],
  ['5', 'Übergabe & Betreuung', 'Du erhältst nutzbare Ergebnisse und kannst bei Bedarf eine laufende Betreuung vereinbaren.'],
]

const targetGroups = [
  'Friseursalons',
  'Kosmetikstudios',
  'Fußpflege',
  'Nagelstudios',
  'Handwerksbetriebe',
  'Cafés',
  'lokale Dienstleister',
  'kleine Einzelhändler',
  'Coaches und Berater',
  'Praxen und Studios',
  'Unternehmen mit Kunden-, Termin- oder Mitarbeiterorganisation',
]

const whyPoints = [
  'klarer Fokus auf digitale Ergebnisse',
  'verständlich für kleine und mittlere Unternehmen',
  'Verbindung aus Sichtbarkeit, Webseite und System',
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
      '/': 'STRUKTIVA Unternehmensarchitektur – Professionelle Webseiten, Landingpages, Apps & Google Ads',
      '/webseiten': 'Professionelle Webseiten – STRUKTIVA Unternehmensarchitektur',
      '/landingpages': 'Landingpages – STRUKTIVA Unternehmensarchitektur',
      '/apps': 'Unternehmens-Apps – STRUKTIVA Unternehmensarchitektur',
      '/google-ads': 'Google Ads – STRUKTIVA Unternehmensarchitektur',
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
            Kostenlose Anfrage stellen
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
                Kostenlose Anfrage stellen
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
              Webseiten, Apps und Werbung professionell aufgebaut.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-[35rem] text-[15px] leading-7 text-[#D7DCE5] md:text-base"
            >
              STRUKTIVA unterstützt kleine und mittlere Unternehmen, Selbstständige und lokale Betriebe dabei, online professioneller sichtbar zu werden, Kundenanfragen zu gewinnen und digitale Abläufe klarer zu organisieren.
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
                Kostenlose Anfrage stellen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={siteLinks.pricing}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/25 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#D8B45A]/30 hover:text-[#D8B45A]"
              >
                Angebote ansehen
              </a>
            </motion.div>

            <motion.a
              variants={fadeUp}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              href={siteLinks.contact}
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#D7DCE5] transition hover:text-[#D8B45A]"
            >
              App-Ersteinschätzung anfragen
              <ArrowRight className="h-4 w-4" />
            </motion.a>
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
            title="Viele Unternehmen leisten gute Arbeit – aber digital sieht man davon zu wenig."
            text="Viele kleine und mittlere Unternehmen haben keine klare digitale Außenwirkung. Die Webseite wirkt veraltet oder unvollständig, Angebote werden nicht verständlich erklärt, Google Ads führen ohne gute Zielseite oft ins Leere und interne Abläufe laufen noch zu unübersichtlich."
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
            STRUKTIVA setzt genau dort an: bei professionellen Webseiten, klaren Landingpages, gezielter Sichtbarkeit und digitalen App-Systemen.
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
            title="Vier klare digitale Lösungen für einen professionelleren Unternehmensauftritt."
            text="STRUKTIVA konzentriert sich auf die Leistungen, die für kleine und mittlere Unternehmen digital am meisten Wirkung entfalten: professionelle Webseiten, klare Landingpages, funktionale App-Systeme und Google Ads mit sauberer Angebotsführung."
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
            title="Kennenlern-Angebote für professionelle Webseiten, Landingpages, Apps und Google Ads."
            text="STRUKTIVA Unternehmensarchitektur konzentriert sich auf digitale Lösungen, die Unternehmen wirklich weiterbringen: professionelle Webseiten, starke Landingpages, individuelle App-Systeme und Google-Ads-Strukturen für mehr Anfragen. Zum Start gibt es ausgewählte Kennenlern-Angebote. Der genaue Umfang wird im persönlichen Gespräch festgelegt und richtet sich nach Bedarf, Projektumfang und technischer Umsetzung."
          />
        </Reveal>

        <Reveal className="mt-8">
          <div className="rounded-[1.8rem] border border-[#D8B45A]/20 bg-[linear-gradient(160deg,rgba(7,17,31,0.92),rgba(11,31,58,0.88),rgba(5,10,18,0.95))] p-6 shadow-premium md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]/80">Faire Kennenlernpreise zum Start</p>
              <h3 className="mt-3 text-2xl font-semibold text-white md:text-[1.75rem]">Hochwertige Umsetzung zu fairen Startkonditionen</h3>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-[#D7DCE5] md:text-base">
                STRUKTIVA Unternehmensarchitektur befindet sich im Aufbau und bietet deshalb ausgewählten Unternehmen faire Kennenlern-Angebote an. Die Preise liegen bewusst unter vielen klassischen Freelancer- und Agenturprojekten, bleiben aber auf professionelle Umsetzung, klare Struktur und langfristige Nutzbarkeit ausgerichtet.
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
            text="Klare Schritte, klare Entscheidungen und eine Umsetzung, die auf das Unternehmen und den tatsächlichen Bedarf abgestimmt ist."
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
            title="Für wen ist STRUKTIVA geeignet?"
            text="STRUKTIVA richtet sich an kleine und mittlere Unternehmen, Selbstständige und lokale Betriebe, die professioneller sichtbar werden, mehr Anfragen gewinnen oder interne Abläufe digital besser organisieren möchten."
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
            eyebrow="Warum STRUKTIVA"
            title="Digitale Lösungen mit Fokus auf Wirkung, Anfragen und klare Abläufe."
            text="STRUKTIVA verbindet professionelle Webseiten, Landingpages, Google Ads und App-Systeme zu einem klaren digitalen Gesamtbild. Dadurch entsteht nicht nur ein einzelner Online-Auftritt, sondern eine digitale Struktur, die Sichtbarkeit, Kundenanfragen und Unternehmensabläufe besser zusammenführt."
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
            title="Bereit für einen professionelleren digitalen Auftritt?"
            text="Schreibe kurz, ob es um eine professionelle Webseite, Landingpage, App-Lösung oder Google Ads geht. Danach erhältst du eine klare Einschätzung, welches Angebot sinnvoll ist."
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
                Anfrage senden
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={contactDetails.whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B45A]/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#D8B45A]/30 hover:text-[#D8B45A]"
              >
                Per WhatsApp Business kontaktieren
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
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
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProblemSection />
      <ServicesSection />
      <WebsiteFocusSection />
      <AppsSection />
      <GoogleAdsSection />
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
        <p className="text-lg font-semibold text-[#D8B45A]">Professionelle Webseite – ab 1.499 €</p>
        <p>Der genaue Preis hängt von Seitenanzahl, Designaufwand, Textumfang, technischen Anforderungen und gewünschter Betreuung ab.</p>
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
        <p className="text-lg font-semibold text-[#D8B45A]">Landingpage – ab 799 €</p>
        <p>Der genaue Preis hängt vom Umfang, Textaufwand, Design und technischer Umsetzung ab.</p>
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
        <p className="text-lg font-semibold text-[#D8B45A]">Kostenlose App-Ersteinschätzung – kostenlos</p>
        <p className="text-lg font-semibold text-[#D8B45A]">Unternehmens-App – ab 2.490 €</p>
        <p className="text-lg font-semibold text-[#D8B45A]">Monatliche App-Betreuung – ab 119 € / Monat</p>
        <p>Die kostenlose App-Ersteinschätzung ersetzt kein vollständiges App-Konzept. Der genaue Preis hängt von Funktionsumfang, Hosting, Speicherbedarf, Modulen und Betreuungsaufwand ab.</p>
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
        <p>Für Google Ads wird idealerweise eine passende Landingpage empfohlen.</p>
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
  }

  return (
    <div className="min-h-screen text-white">
      <Header pathname={pathname} />
      {content}
      <Footer />
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





