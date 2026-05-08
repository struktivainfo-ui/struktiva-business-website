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
  apps: '/#app-loesungen',
  googleAds: '/#google-ads',
  process: '/#ablauf',
  contact: '/kontakt',
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
  [Target, 'Landingpages', 'Fokussierte Angebotsseiten für Dienstleistungen, Produkte, Aktionen oder Kampagnen mit klarer Handlungsaufforderung.'],
  [Smartphone, 'Unternehmens-Apps', 'Individuelle App-Systeme für Kundenverwaltung, Termine, Aufgaben, Checklisten, Mitarbeiterorganisation und interne Abläufe.'],
  [Megaphone, 'Google Ads & digitale Werbung', 'Kampagnenstruktur, Anzeigentexte und passende Zielseiten für Unternehmen, die gezielt Kundenanfragen über Google oder ergänzende Social-Media-Werbung gewinnen möchten.'],
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
    price: 'ab 899 €',
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
    price: 'ab 1.699 €',
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
    price: 'ab 399 €',
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
    price: '0 €',
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
    price: 'ab 2.590 €',
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
  ['4', 'Umsetzung', 'STRUKTIVA erstellt die vereinbarte Lösung: Webseite, Landingpage, kostenlose App-Ersteinschätzung, App-System oder Google-Ads-Struktur.'],
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

function SectionHeader({ eyebrow, title, text, centered = true }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B11226]/80">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1F3A] md:text-4xl lg:text-[2.9rem] lg:leading-[1.08]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[#475569] md:text-lg">{text}</p>
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
            ? 'border-[#cfe0ff] bg-white shadow-[0_20px_70px_rgba(8,12,24,0.35)]'
            : 'border-[#e2ecff] bg-white'
        }`}
      >
        <a href={siteLinks.home} className="flex min-w-0 items-center gap-3">
          <img
            src="/struktiva-logo.jpeg"
            alt="STRUKTIVA Unternehmensarchitektur Logo"
            className="h-8 w-8 rounded-full object-contain md:h-10 md:w-10"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[#0B1F3A] md:text-[15px]">{brand.name}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#64748b]">{brand.descriptor}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium text-[#475569] transition hover:text-[#B11226]">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={siteLinks.contact}
            className="inline-flex items-center gap-2 rounded-full bg-[#B11226] px-4.5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(17,24,39,0.15)] transition hover:bg-[#7A0F1E] hover:-translate-y-0.5"
          >
            Kostenlose Anfrage stellen
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d9e7ff] bg-white text-[#0B1F3A] lg:hidden"
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
            className="mx-auto mt-3 max-w-7xl rounded-[1.8rem] border border-[#d9e7ff] bg-white/95 p-4 shadow-premium backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-2">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[#1f3656] transition hover:bg-white hover:text-[#B11226]"
                >
                  {label}
                </a>
              ))}
              <a
                href={siteLinks.contact}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#B11226] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7A0F1E]"
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
              className="inline-flex items-center gap-2 rounded-full border border-[#102A4C]/14 bg-[#eef4ff] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0B1F3A]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {brand.name}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-[34rem] text-3xl font-semibold tracking-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl lg:leading-[1.08] xl:text-[58px]"
            >
              Webseiten, Apps und Werbung professionell aufgebaut.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-[35rem] text-[15px] leading-7 text-[#334e68] md:text-base"
            >
              STRUKTIVA unterstützt kleine und mittlere Unternehmen, Selbstständige und lokale Betriebe dabei, online professioneller sichtbar zu werden, Kundenanfragen zu gewinnen und digitale Abläufe klarer zu organisieren.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 inline-flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#475569]"
            >
              {brand.line.split('. ').filter(Boolean).map((item) => (
                <span key={item} className="rounded-full border border-[#d9e7ff] bg-white px-2.5 py-1">{item.replace('.', '')}</span>
              ))}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex flex-col gap-2.5 sm:flex-row"
            >
              <a
                href={siteLinks.contact}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B11226] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(17,24,39,0.16)] transition hover:bg-[#7A0F1E] hover:-translate-y-0.5"
              >
                Kostenlose Anfrage stellen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={siteLinks.pricing}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cfe0ff] bg-[#f8fbff] px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#B11226]/30 hover:text-[#B11226]"
              >
                Angebote ansehen
              </a>
            </motion.div>

            <motion.a
              variants={fadeUp}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              href={siteLinks.apps}
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#334e68] transition hover:text-[#B11226]"
            >
              App-Lösungen entdecken
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
          <div className="rounded-[1.55rem] border border-[#cfe0ff] bg-white p-3 shadow-[0_12px_30px_rgba(15,36,76,0.10)] backdrop-blur-xl">
            <div className="rounded-[1.25rem] border border-[#cfe0ff] bg-[linear-gradient(180deg,#ffffff,#f3f7ff)] p-4 md:p-4.5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[#475569]">STRUKTIVA System</p>
                  <h2 className="mt-1.5 text-xl font-semibold text-[#0B1F3A]">Digitale Struktur für Unternehmen</h2>
                </div>
                <div className="rounded-full bg-[#b11226]/10 px-2.5 py-1 text-[11px] font-semibold text-[#B11226]">
                  Startklar
                </div>
              </div>

              <div className="mt-4 grid gap-2.5 sm:grid-cols-[1fr_auto] sm:items-start">
                <div className="grid gap-2.5">
                  {['Webseite', 'Landingpage', 'App-System', 'Google Ads'].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 rounded-xl border border-[#d9e7ff] bg-white px-3 py-2">
                      <div className="h-2 w-2 rounded-full bg-[#B11226] shadow-[0_0_12px_rgba(177,18,38,0.2)]" />
                      <span className="text-[13px] font-medium text-[#0B1F3A]">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="grid gap-1.5 text-right text-[10px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
                  <span>professionell</span>
                  <span>fokussiert</span>
                  <span>digital</span>
                  <span>sichtbar</span>
                </div>
              </div>

              <div className="mt-4 rounded-[1rem] border border-[#102A4C]/12 bg-[#eef4ff] p-3.5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#B11226]/82">Ergebnis</p>
                <p className="mt-1.5 text-[13px] leading-6 text-[#1f3656]">
                  Ein klarer digitaler Auftritt mit Struktur, Sichtbarkeit und System.
                </p>
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
            className="rounded-[1.6rem] border border-[#d9e7ff] bg-white p-5 shadow-premium transition hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b11226]/10 text-[#B11226]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-[#0B1F3A]">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#475569]">{text}</p>
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
              className="rounded-[1.7rem] border border-[#d9e7ff] bg-[#f8fbff] p-5 shadow-premium"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B11226]/78">Problem</p>
              <h3 className="mt-4 text-xl font-semibold text-[#0B1F3A]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#475569]">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-8">
          <p className="max-w-3xl text-base leading-8 text-[#475569]">
            STRUKTIVA setzt genau dort an: bei professionellen Webseiten, klaren Landingpages, gezielter Sichtbarkeit und digitalen App-Systemen.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function ServicesSection() {
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
            <motion.article
              key={title}
              variants={fadeUp}
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[2rem] border border-[#d9e7ff] bg-white p-6 shadow-premium transition hover:-translate-y-1 md:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#b11226]/10 text-[#B11226]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#0B1F3A]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#475569] md:text-base">{text}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <Reveal className="mt-8">
          <div className="rounded-[1.5rem] border border-[#d9e7ff] bg-[#f8fbff] p-5 text-sm leading-7 text-[#475569]">
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
      <div className="mx-auto max-w-7xl rounded-[2.4rem] border border-[#d9e7ff] bg-[linear-gradient(160deg,#ffffff,rgba(234,242,255,0.95),rgba(240,246,255,0.98))] p-6 shadow-premium md:p-8 lg:p-10">
        <Reveal>
          <SectionHeader
            eyebrow="Webseiten & Landingpages"
            title="Professionelle Webseiten & Landingpages mit klarer Wirkung."
            text="Eine professionelle Webseite erklärt schnell, was ein Unternehmen anbietet, warum es vertrauenswürdig ist und wie Kunden Kontakt aufnehmen können. STRUKTIVA entwickelt hochwertige Webseiten, Landingpages und Angebotsseiten mit klarer Struktur, professionellen Texten und sauberer Kundenführung."
            centered={false}
          />
        </Reveal>
        <Reveal className="mt-6">
          <p className="max-w-3xl rounded-[1.3rem] border border-[#d9e7ff] bg-[#f8fbff] px-4 py-3 text-sm leading-7 text-[#475569]">
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
              className="rounded-[1.6rem] border border-[#d9e7ff] bg-white p-5 transition hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B11226]/78">Fokus</p>
              <h3 className="mt-4 text-xl font-semibold text-[#0B1F3A]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#475569]">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-8">
          <a
            href={siteLinks.contact}
            className="inline-flex items-center gap-2 rounded-full bg-[#B11226] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(17,24,39,0.16)] transition hover:bg-[#7A0F1E] hover:-translate-y-0.5"
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
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
        <div>
          <Reveal>
            <SectionHeader
              eyebrow="Unternehmens-Apps"
              title="Professionelle Unternehmens-Apps für bessere Abläufe."
              text="Individuelle App-Systeme für Kundenverwaltung, Termine, Aufgaben, Checklisten und interne Prozesse – klar aufgebaut, alltagstauglich und passend zum Unternehmen."
              centered={false}
            />
          </Reveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={stagger}
            className="mt-8 grid gap-3 sm:grid-cols-2"
          >
            {appModules.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-[#d9e7ff] bg-white px-4 py-3 text-sm font-medium text-[#0B1F3A] transition hover:-translate-y-0.5"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>

          <Reveal className="mt-8">
            <a
              href={siteLinks.contact}
              className="inline-flex items-center gap-2 rounded-full border border-[#B11226]/28 bg-[#eef4ff] px-6 py-3.5 text-sm font-semibold text-[#B11226] transition hover:-translate-y-0.5 hover:bg-[#B11226] hover:text-white"
            >
              App-Lösung anfragen
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
          <Reveal className="mt-6">
            <div className="max-w-3xl rounded-[1.4rem] border border-[#d9e7ff] bg-[#f8fbff] p-4 text-sm leading-7 text-[#475569]">
              <p className="font-semibold text-[#0B1F3A]">Nicht sicher, ob eine eigene App sinnvoll ist?</p>
              <p className="mt-2">Dann starte mit einer kostenlosen App-Ersteinschätzung. Dabei wird geprüft, ob eine App für deine Abläufe wirklich Nutzen bringt oder ob eine einfachere digitale Lösung ausreicht.</p>
              <a
                href={siteLinks.contact}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#B11226]/28 bg-white px-5 py-2.5 text-sm font-semibold text-[#B11226] transition hover:bg-[#B11226] hover:text-white"
              >
                Kostenlose App-Ersteinschätzung anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="rounded-[2rem] border border-[#d9e7ff] bg-white p-4 shadow-premium backdrop-blur-xl">
            <div className="rounded-[1.6rem] border border-[#102A4C]/14 bg-white p-5 md:p-6">
              <div className="mb-5">
                <p className="text-sm font-medium text-[#475569]">So kann eine STRUKTIVA App-Lösung aussehen</p>
                <p className="mt-3 text-sm leading-7 text-[#475569] md:text-base">
                  Individuelle App-Systeme können Kunden, Termine, Aufgaben, Checklisten und interne Abläufe übersichtlich an einem Ort bündeln.
                </p>
              </div>
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[#475569]">App-Beispiel für Unternehmen</p>
                  <h3 className="mt-1 text-2xl font-semibold text-[#0B1F3A]">STRUKTIVA Business App</h3>
                </div>
                <div className="rounded-full bg-[#b11226]/10 px-3 py-1 text-xs font-semibold text-[#B11226]">Vorschau</div>
              </div>
              <div className="grid gap-3">
                {[
                  ['Kundenverwaltung', 'übersichtlich'],
                  ['Terminübersicht', 'strukturiert'],
                  ['Aufgabensteuerung', 'klar'],
                  ['Bewertungsprozess', 'integriert'],
                ].map(([label, state]) => (
                  <div key={label} className="flex items-center justify-between gap-4 rounded-2xl border border-[#e2ecff] bg-white px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#B11226] shadow-[0_0_16px_rgba(177,18,38,0.25)]" />
                      <span className="text-sm font-medium text-[#0B1F3A]">{label}</span>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">{state}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-[1.3rem] border border-[#d9e7ff] bg-[#eef4ff] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B11226]/82">Ergebnis</p>
                <p className="mt-2 text-sm leading-7 text-[#334e68]">
                  Ein digitaler Ort für Kunden, Termine, Aufgaben und interne Abläufe.
                </p>
              </div>
            </div>
          </div>
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
          <div className="max-w-4xl rounded-[1.5rem] border border-[#d9e7ff] bg-[#f8fbff] p-5 text-sm leading-7 text-[#334e68] md:text-base">
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
              className="rounded-[1.7rem] border border-[#d9e7ff] bg-white p-5 shadow-premium transition hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B11226]/78">Google Ads</p>
              <h3 className="mt-4 text-xl font-semibold text-[#0B1F3A]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#475569]">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-8">
          <div className="flex flex-col gap-5 rounded-[1.8rem] border border-[#d9e7ff] bg-[#f8fbff] p-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl text-sm leading-7 text-[#475569]">
              Das Werbebudget wird separat direkt bei Google eingesetzt und ist nicht im STRUKTIVA-Preis enthalten.
            </p>
            <a
              href={siteLinks.contact}
              className="inline-flex items-center gap-2 rounded-full bg-[#B11226] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(17,24,39,0.16)] transition hover:bg-[#7A0F1E] hover:-translate-y-0.5"
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
      className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-5 shadow-premium transition hover:-translate-y-1 md:p-6 ${
        pkg.premium
          ? 'border-[#B11226]/35 bg-[linear-gradient(165deg,rgba(177,18,38,0.08),#ffffff,rgba(234,242,255,0.95))]'
          : pkg.strong
            ? 'border-[#cfe0ff] bg-[linear-gradient(160deg,#ffffff,rgba(234,242,255,0.88),rgba(248,250,252,0.98))]'
            : 'border-[#d9e7ff] bg-white'
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B11226]/35 to-transparent" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[#d9e7ff] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#475569]">
              Einstiegspreis
            </span>
            {pkg.badge && (
              <span
                className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                  pkg.premium
                    ? 'border border-[#B11226]/28 bg-[#b11226]/10 text-[#B11226]'
                    : 'border border-[#d9e7ff] bg-[#f8fbff] text-[#475569]'
                }`}
              >
                {pkg.badge}
              </span>
            )}
          </div>
          <h3 className="max-w-[22rem] text-2xl font-semibold text-[#0B1F3A]">{pkg.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#475569]">{pkg.description}</p>
        </div>
        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#b11226]/10 text-[#B11226] sm:flex">
          {pkg.premium ? <ShieldCheck className="h-5 w-5" /> : <BadgeCheck className="h-5 w-5" />}
        </div>
      </div>

      <div className="mt-6 rounded-[1.4rem] border border-[#d9e7ff] bg-[#f8fbff] p-4">
        <p className="text-3xl font-semibold tracking-tight text-[#B11226]">{pkg.price}</p>
        {pkg.subtitle && <p className="mt-2 text-sm font-medium text-[#334e68]">{pkg.subtitle}</p>}
      </div>

      {pkg.tiers ? (
        <div className="mt-6 grid gap-4 xl:grid-cols-3">
          {pkg.tiers.map((tier) => (
            <div key={tier.title} className="rounded-[1.4rem] border border-[#d9e7ff] bg-[#f8fbff] p-4">
              <div className="border-b border-[#e2ecff] pb-3">
                <p className="text-lg font-semibold text-[#0B1F3A]">{tier.title}</p>
                <p className="mt-1 text-sm font-medium text-[#B11226]">{tier.price}</p>
                <p className="mt-2 text-sm leading-6 text-[#475569]">{tier.description}</p>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm leading-6 text-[#334e68]">
                {tier.features.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#B11226]" />
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">Enthalten</p>
            <ul className="space-y-2.5 text-sm leading-6 text-[#334e68]">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#B11226]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {pkg.extras && (
            <div className="rounded-[1.4rem] border border-[#d9e7ff] bg-[#f8fbff] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">{pkg.extraTitle}</p>
              <ul className="mt-4 space-y-2.5 text-sm leading-6 text-[#334e68]">
                {pkg.extras.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#B11226]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {pkg.callout && (
        <div className="mt-6 rounded-[1.3rem] border border-[#102A4C]/14 bg-[#eef4ff] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B11226]/82">{pkg.callout}</p>
          <p className="mt-2 text-sm leading-7 text-[#334e68]">{pkg.calloutText}</p>
        </div>
      )}

      <div className={`mt-6 rounded-[1.3rem] border p-4 text-sm leading-7 ${
        pkg.premium ? 'border-[#102A4C]/12 bg-[#f8fbff] text-[#1f3656]' : 'border-[#d9e7ff] bg-[#f8fbff] text-[#475569]'
      }`}>
        {pkg.note}
      </div>

      <a
        href={siteLinks.contact}
        className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
          pkg.premium
            ? 'bg-[#B11226] text-white shadow-[0_14px_34px_rgba(17,24,39,0.16)] hover:bg-[#7A0F1E] hover:-translate-y-0.5'
            : 'border border-[#B11226]/30 text-[#B11226] hover:-translate-y-0.5 hover:bg-[#B11226] hover:text-white'
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
            title="Klare Einstiegspreise für professionelle Webseiten, Landingpages, Apps und Google Ads."
            text="STRUKTIVA Unternehmensarchitektur konzentriert sich auf digitale Lösungen, die Unternehmen wirklich weiterbringen: professionelle Webseiten, starke Landingpages, individuelle App-Systeme und Google-Ads-Strukturen für mehr Anfragen. Zum Start gibt es ausgewählte Kennenlern-Angebote. Der genaue Umfang wird im persönlichen Gespräch festgelegt und richtet sich nach Bedarf, Projektumfang und technischer Umsetzung."
          />
        </Reveal>

        <Reveal className="mt-8">
          <div className="rounded-[1.8rem] border border-[#102A4C]/14 bg-[linear-gradient(160deg,#ffffff,rgba(234,242,255,0.92),rgba(248,250,252,0.98))] p-6 shadow-premium md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B11226]/80">Kennenlern-Angebote zum Start</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#0B1F3A] md:text-[1.75rem]">Professioneller Einstieg mit klar abgestimmtem Umfang</h3>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-[#334e68] md:text-base">
              STRUKTIVA Unternehmensarchitektur befindet sich im Aufbau. Deshalb gibt es zum Start ausgewählte Kennenlern-Angebote für Unternehmen, die ihre Webseite, Landingpage, Sichtbarkeit oder digitalen Abläufe professioneller aufstellen möchten.
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-[#475569] md:text-base">
              Diese Einstiegspreise sollen den Start erleichtern und eine erste Zusammenarbeit ermöglichen. Der genaue Umfang wird im persönlichen Gespräch festgelegt und transparent abgestimmt.
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
          <div className="rounded-[1.6rem] border border-[#d9e7ff] bg-white p-6 text-center text-sm leading-7 text-[#334e68]">
            Alle Preise verstehen sich als Kennenlern- und Einstiegspreise zum Start von STRUKTIVA Unternehmensarchitektur. Der genaue Leistungsumfang wird im persönlichen Gespräch festgelegt und richtet sich nach Bedarf, Projektumfang, technischer Umsetzung, Hosting, Speicherbedarf, Betreuungsaufwand und Arbeitszeit. Werbebudget für Google Ads oder Social-Media-Werbung ist nicht enthalten.
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
              className="rounded-[1.7rem] border border-[#d9e7ff] bg-white p-5 shadow-premium"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b11226]/10 text-lg font-semibold text-[#B11226]">
                {step}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#0B1F3A]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#475569]">{text}</p>
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
      <div className="mx-auto max-w-7xl rounded-[2.4rem] border border-[#d9e7ff] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(11,17,32,0.9))] p-6 shadow-premium md:p-8 lg:p-10">
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
              className="rounded-full border border-[#d9e7ff] bg-white px-4 py-2.5 text-sm font-medium text-[#0B1F3A]"
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
              className="flex items-center gap-4 rounded-[1.6rem] border border-[#d9e7ff] bg-white px-5 py-4 shadow-premium"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#b11226]/10 text-[#B11226]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <span className="text-base font-medium text-[#0B1F3A]">{point}</span>
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
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#102A4C]/14 bg-[linear-gradient(160deg,#ffffff,rgba(234,242,255,0.92),rgba(248,250,252,0.98))] p-6 shadow-[0_14px_34px_rgba(17,24,39,0.16)] md:p-8 lg:p-10">
        <Reveal>
          <SectionHeader
            eyebrow="Kontakt"
            title="Bereit für einen professionelleren digitalen Auftritt?"
            text="Schreibe kurz, ob es um eine professionelle Webseite, Landingpage, App-Lösung oder Google Ads geht. Danach erhältst du eine klare Einschätzung, welches Angebot sinnvoll ist."
            centered={false}
          />
        </Reveal>

        <Reveal className="mt-5">
          <p className="max-w-3xl text-sm leading-7 text-[#475569] md:text-base">
            Du kannst auch anfragen, wenn du Unterstützung bei Google Ads, Social-Media-Werbung oder einer passenden Landingpage für deine Kampagne brauchst.
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-[#475569] md:text-base">
            Du kannst auch eine kostenlose App-Ersteinschätzung anfragen, wenn du noch nicht sicher bist, ob eine App für dein Unternehmen sinnvoll ist.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="rounded-[1.8rem] border border-[#d9e7ff] bg-white p-6 shadow-premium">
              <div className="grid gap-4 text-sm leading-7 text-[#334e68]">
                <a href={`mailto:${contactDetails.email}`} className="transition hover:text-[#B11226]">
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">E-Mail</span>
                  {contactDetails.email}
                </a>
                <a href={contactDetails.phoneHref} className="transition hover:text-[#B11226]">
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">Telefon</span>
                  {contactDetails.phoneLabel}
                </a>
                <a href={contactDetails.whatsappHref} className="transition hover:text-[#B11226]">
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">WhatsApp Business</span>
                  {contactDetails.whatsappLabel}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={siteLinks.contact}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B11226] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(17,24,39,0.16)] transition hover:bg-[#7A0F1E] hover:-translate-y-0.5"
              >
                Anfrage senden
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={contactDetails.whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cfe0ff] bg-[#f8fbff] px-6 py-3.5 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#B11226]/30 hover:text-[#B11226]"
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
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-[#102A4C] bg-[#0B1F3A] px-6 py-7 shadow-premium md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">{brand.name}</p>
          <p className="mt-2 text-sm text-[#c7d7ef]">Jessica Wacker</p>
          <div className="mt-3 grid gap-1.5 text-sm text-[#c7d7ef]">
            <a href={`mailto:${contactDetails.email}`} className="transition hover:text-[#ff7a87]">{contactDetails.email}</a>
            <a href={contactDetails.phoneHref} className="transition hover:text-[#ff7a87]">{contactDetails.phoneLabel}</a>
            <a href={contactDetails.whatsappHref} className="transition hover:text-[#ff7a87]">WhatsApp Business</a>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-[#c7d7ef]">
          <a href={siteLinks.impressum} className="transition hover:text-[#ff7a87]">Impressum</a>
          <a href={siteLinks.datenschutz} className="transition hover:text-[#ff7a87]">Datenschutz</a>
          <a href={siteLinks.widerruf} className="transition hover:text-[#ff7a87]">Widerruf</a>
          <a href={siteLinks.contact} className="transition hover:text-[#ff7a87]">Kontakt</a>
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
      <ContactSection />
    </>
  )
}

function LegalSection({ title, children }) {
  return (
    <section className="rounded-[1.6rem] border border-[#d9e7ff] bg-white p-5 shadow-premium md:p-6">
      <h2 className="text-xl font-semibold text-[#0B1F3A]">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-7 text-[#334e68] md:text-base">{children}</div>
    </section>
  )
}

function LegalLayout({ title, intro, children }) {
  return (
    <main className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="rounded-[2.3rem] border border-[#d9e7ff] bg-[linear-gradient(160deg,#ffffff,rgba(234,242,255,0.9),rgba(248,250,252,0.98))] p-7 shadow-premium md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B11226]/78">{brand.name}</p>
            <h1 className="mt-4 text-4xl font-semibold text-[#0B1F3A] md:text-5xl">{title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#475569] md:text-lg">{intro}</p>
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
      <p>E-Mail: <a href={`mailto:${contactDetails.email}`} className="text-[#B11226]">{contactDetails.email}</a></p>
      <p>Telefon: <a href={contactDetails.phoneHref} className="text-[#B11226]">{contactDetails.phoneLabel}</a></p>
      <p>WhatsApp Business: <a href={contactDetails.whatsappHref} className="text-[#B11226]">{contactDetails.whatsappLabel}</a></p>
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
        <p>E-Mail: <a href={`mailto:${contactDetails.email}`} className="text-[#B11226]">{contactDetails.email}</a></p>
        <p>Telefon: <a href={contactDetails.phoneHref} className="text-[#B11226]">{contactDetails.phoneLabel}</a></p>
        <p>WhatsApp Business: <a href={contactDetails.whatsappHref} className="text-[#B11226]">{contactDetails.whatsappLabel}</a></p>
        <div className="pt-3">
          <a
            href={contactDetails.whatsappHref}
            className="inline-flex items-center gap-2 rounded-full bg-[#B11226] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7A0F1E]"
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
  useDocumentTitle(pathname)

  let content = <HomePage />

  if (pathname === '/impressum') {
    content = <ImpressumPage />
  } else if (pathname === '/datenschutz') {
    content = <DatenschutzPage />
  } else if (pathname === '/widerruf') {
    content = <WiderrufPage />
  } else if (pathname === '/kontakt') {
    content = <ContactPage />
  }

  return (
    <div className="min-h-screen text-[#0B1F3A]">
      <Header pathname={pathname} />
      {content}
      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
)



