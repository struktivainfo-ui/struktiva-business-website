import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Globe2,
  LayoutDashboard,
  Menu,
  MessageCircle,
  PenLine,
  Rocket,
  ShieldCheck,
  Sparkles,
  Smartphone,
  UsersRound,
  X,
} from 'lucide-react'
import './styles.css'

const siteLinks = {
  home: '/#start',
  services: '/#leistungen',
  pricing: '/#preise',
  apps: '/#apps',
  websites: '/#webseiten',
  targets: '/#zielgruppen',
  process: '/#ablauf',
  contactSection: '/#kontakt',
  impressum: '/impressum',
  datenschutz: '/datenschutz',
  widerruf: '/widerruf',
  contact: '/kontakt',
}

const brand = {
  name: 'STRUKTIVA Unternehmensarchitektur',
  line: 'Sichtbarkeit. Struktur. App-Systeme.',
}

const contactDetails = {
  email: 'info.struktiva@gmail.com',
  phone: '[Telefonnummer eintragen oder „auf Anfrage“]',
  whatsapp: 'https://wa.me/49DEINENUMMER',
}

const navItems = [
  ['Start', siteLinks.home],
  ['Leistungen', siteLinks.services],
  ['Preise', siteLinks.pricing],
  ['App-Lösungen', siteLinks.apps],
  ['Webseiten', siteLinks.websites],
  ['Für wen', siteLinks.targets],
  ['Ablauf', siteLinks.process],
  ['Kontakt', siteLinks.contactSection],
]

const trustCards = [
  ['Klarer Auftritt', 'Professionelle Texte, Webseiten und Inhalte, damit dein Unternehmen verständlicher wirkt.'],
  ['Bessere Kommunikation', 'Google, WhatsApp und Social Media werden strukturierter und kundenfreundlicher aufgebaut.'],
  ['Digitale Abläufe', 'Abläufe, Checklisten, Kundenprozesse und App-Systeme werden übersichtlich gedacht.'],
  ['Praxisnah umgesetzt', 'Keine komplizierte Theorie, sondern Lösungen, die kleine Unternehmen wirklich nutzen können.'],
]

const problemCards = [
  'Unklare Webseite',
  'Unregelmäßige Werbung',
  'Chaotische Kundenkommunikation',
  'Fehlende digitale Struktur',
]

const solutionPillars = [
  ['Sichtbarkeit', 'Klare Außenwirkung durch Webseiten, Inhalte, Google-Texte und professionell aufgebaute Angebotsseiten.'],
  ['Kommunikation', 'WhatsApp, Social Media und Kundenansprache werden verständlicher, strukturierter und vertrauenswürdiger.'],
  ['Struktur', 'Interne Abläufe, Checklisten, Kundenprozesse und digitale Ordnung werden praxisnah aufgebaut.'],
  ['App-Systeme', 'Individuelle App-Lösungen schaffen Übersicht für Termine, Aufgaben, Kunden und interne Prozesse.'],
]

const services = [
  [LayoutDashboard, 'Webseiten & Landingpages', 'Professionelle Webseiten, Landingpages und Angebotsseiten mit klarer Struktur, Texten und Kontaktführung.', true],
  [PenLine, 'Werbung & Content', 'Texte für Social Media, Google, Beiträge, Reels, Shorts, Pinterest und lokale Werbung.', false],
  [Globe2, 'Google & lokale Sichtbarkeit', 'Optimierte Google-Unternehmensdarstellung, Beiträge, FAQ-Texte und Bewertungsprozesse.', false],
  [MessageCircle, 'WhatsApp-Business-Systeme', 'Schnellantworten, Begrüßungen, Termintexte, Nachfass-Texte und professionelle Kundenkommunikation.', false],
  [ClipboardList, 'Digitale Struktur-Systeme', 'Checklisten, Wochenpläne, Kundenprozesse, interne Abläufe und Organisationsstrukturen.', false],
  [Smartphone, 'Professionelle Unternehmens-Apps', 'Individuelle App-Lösungen für Kundenverwaltung, Termine, Aufgaben, Mitarbeiterorganisation und interne Prozesse.', false],
  [BriefcaseBusiness, 'Digitale Produkte & Verkaufsseiten', 'PDFs, Angebotskonzepte, Produktseiten und Verkaufsstrukturen für Selbstständige und Unternehmen.', false],
]

const appModules = [
  ['Kundenverwaltung', UsersRound],
  ['Terminübersicht', CalendarDays],
  ['Mitarbeiterorganisation', BriefcaseBusiness],
  ['Aufgabensteuerung', CheckCircle2],
  ['Checklisten', ClipboardList],
  ['Dashboards', BarChart3],
  ['Bewertungsprozesse', BadgeCheck],
  ['Kundenkommunikation', MessageCircle],
]

const websiteFocusCards = [
  ['Webseiten', 'Digitale Basis für einen professionellen Unternehmensauftritt.'],
  ['Landingpages', 'Fokussierte Seiten für Angebote, Aktionen, Produkte oder Dienstleistungen.'],
  ['Angebotsseiten', 'Klare Seiten für Leistungen, Pakete und digitale Produkte.'],
]

const pricePackages = [
  {
    group: 'visibility',
    title: 'Sichtbarkeits-Starter',
    price: 'ab 149 €',
    description: 'Für kleine Unternehmen, die online professioneller wirken und erste konkrete Verbesserungen umsetzen möchten.',
    features: [
      'kurze Analyse der aktuellen Außenwirkung',
      'Optimierung der grundlegenden Unternehmensdarstellung',
      'erste Textvorschläge für Google, Social Media oder WhatsApp',
      'Bewertungsanfrage für Kunden',
      'konkrete Empfehlungen für bessere Sichtbarkeit',
      'klare nächste Schritte für den digitalen Auftritt',
    ],
    note: 'Der genaue Umfang wird im persönlichen Gespräch festgelegt.',
    cta: 'Starterpaket anfragen',
  },
  {
    group: 'visibility',
    title: 'Google & WhatsApp Business',
    price: 'ab 199 €',
    description: 'Für lokale Betriebe, die besser gefunden werden und professioneller mit Kunden kommunizieren möchten.',
    features: [
      'optimierte Google-Unternehmensbeschreibung',
      'Google-Beiträge nach Bedarf',
      'FAQ-Texte für Google',
      'Bewertungsanfrage-Texte',
      'WhatsApp-Schnellantworten',
      'Begrüßungs- und Abwesenheitsnachricht',
      'Terminbestätigungs- und Nachfass-Texte',
      'Empfehlungen für bessere lokale Sichtbarkeit',
    ],
    note: 'Der genaue Umfang richtet sich nach dem Betrieb und wird vorab abgestimmt.',
    cta: 'Google & WhatsApp anfragen',
  },
  {
    group: 'visibility',
    title: 'Social-Media & Content',
    price: 'ab 249 €',
    description: 'Für Unternehmen, die regelmäßig bessere Inhalte veröffentlichen und professioneller sichtbar werden möchten.',
    features: [
      'individueller Contentplan',
      'Social-Media-Texte passend zum Unternehmen',
      'starke Hooks für Beiträge, Reels und Shorts',
      'Story-Ideen',
      'Titel, Beschreibungen und Hashtags',
      'Ideen für TikTok, Instagram, YouTube Shorts und Pinterest',
      'Empfehlungen für regelmäßige Veröffentlichung',
      'klare Themenstruktur für den Unternehmensauftritt',
    ],
    note: 'Der genaue Umfang wird im persönlichen Gespräch festgelegt und an das Unternehmen angepasst.',
    cta: 'Content-Paket anfragen',
  },
  {
    group: 'visibility',
    title: 'Webseiten & Landingpages',
    price: 'ab 499 €',
    badge: 'Wichtige Leistung',
    description: 'Für Unternehmen, die eine professionelle Webseite, Landingpage oder Angebotsseite benötigen.',
    features: [
      'Seitenstruktur und Aufbau',
      'professionelle Texte',
      'Überschriften und Angebotslogik',
      'Leistungsbeschreibung',
      'Call-to-Action-Bereiche',
      'Kontaktbereich',
      'mobile Optimierung',
      'klare Kundenansprache',
      'Empfehlungen für einen professionellen Online-Auftritt',
    ],
    extraTitle: 'Optional je nach Projekt',
    extras: [
      'WhatsApp-, E-Mail- oder Formular-Anbindung',
      'Verlinkung zu Digistore24, Systeme.io oder externen Angeboten',
      'einfache SEO-Grundstruktur',
      'Angebotsseiten für Produkte oder Dienstleistungen',
      'technische Veröffentlichung über GitHub/Vercel oder passende Plattform',
    ],
    note: 'Landingpages starten ab 499 €. Komplette Webseiten werden je nach Umfang, Seitenanzahl, Designaufwand und technischer Umsetzung individuell kalkuliert.',
    cta: 'Webseite anfragen',
    highlight: true,
  },
  {
    group: 'systems',
    title: 'App-Konzept Paket',
    price: '399 €',
    description: 'Für Unternehmen, die prüfen möchten, ob eine eigene Unternehmens-App oder ein internes digitales System sinnvoll ist.',
    features: [
      'Analyse der aktuellen Abläufe',
      'App-Idee passend zum Unternehmen',
      'Funktionsliste',
      'Seitenstruktur',
      'Nutzerrollen',
      'UI-Konzept',
      'Umsetzungsplan',
      'Preisrahmen für die Entwicklung',
    ],
    note: 'Das App-Konzept dient als klare Entscheidungsgrundlage vor der eigentlichen Umsetzung.',
    cta: 'App-Konzept anfragen',
  },
  {
    group: 'systems',
    title: 'Professionelle Unternehmens-App',
    price: 'ab 1.990 €',
    subtitle: 'Monatliche App-Betreuung ab 89 € / Monat',
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
      'digitale Unternehmensprozesse',
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
    group: 'systems',
    title: 'Monatliche STRUKTIVA Betreuung',
    price: 'ab 149 € / Monat',
    description: 'Für Unternehmen, die dauerhaft Unterstützung bei Sichtbarkeit, Texten, Webseiten, Struktur oder digitalen Anpassungen möchten.',
    features: [
      'neue Google- oder Social-Media-Texte',
      'kleine Webseiten- oder Landingpage-Anpassungen',
      'neue WhatsApp-Texte',
      'Optimierung der Kundenkommunikation',
      'kleine App- oder Struktur-Anpassungen',
      'monatlicher Struktur-Check',
      'Empfehlungen für die nächsten digitalen Schritte',
    ],
    plans: [
      'Basic – ab 149 € / Monat',
      'Standard – ab 299 € / Monat',
      'Premium – ab 499 € / Monat',
    ],
    note: 'Die monatliche Betreuung wird passend zum Bedarf des Unternehmens zusammengestellt.',
    cta: 'Betreuung anfragen',
  },
]

const pricingGroups = [
  {
    key: 'visibility',
    title: 'Sichtbarkeit & Webseiten',
    text: 'Für den professionellen Außenauftritt, klarere Kommunikation und eine digitale Basis, die hochwertig wirkt.',
  },
  {
    key: 'systems',
    title: 'App-Systeme & Betreuung',
    text: 'Für Unternehmen, die interne Abläufe digital abbilden und dauerhaft technisch begleitet werden möchten.',
  },
]

const appCareReasons = [
  'Hosting und Serverkosten',
  'technische Pflege',
  'kleinere Anpassungen',
  'Funktionsprüfung',
  'Support bei Bedienfragen',
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

const processSteps = [
  ['1', 'Anfrage', 'Du beschreibst kurz dein Unternehmen und wobei du Unterstützung brauchst.'],
  ['2', 'Erstgespräch', 'Wir schauen gemeinsam, was sinnvoll ist: Webseite, Texte, Sichtbarkeit, Struktur oder App-Lösung.'],
  ['3', 'Konzept', 'Du bekommst eine klare Empfehlung und ein passendes Angebot.'],
  ['4', 'Umsetzung', 'STRUKTIVA erstellt die vereinbarten Texte, Strukturen, Webseiten oder App-Lösungen.'],
  ['5', 'Übergabe', 'Du bekommst nutzbare Ergebnisse, die du direkt im Unternehmen einsetzen kannst.'],
]

const whyPoints = [
  'verständlich für kleine Unternehmen',
  'praxisnah statt kompliziert',
  'digitale Lösungen mit Struktur',
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

function Reveal({ children, className = '', delay = 0, amount = 0.2 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function SectionHeader({ eyebrow, title, text, centered = true }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-struktivaGold md:text-sm">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-white/72 md:text-lg">{text}</p>}
    </div>
  )
}

function useHeaderState() {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return isScrolled
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const isScrolled = useHeaderState()

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-white/10 bg-[rgba(12,18,33,0.86)] shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl'
          : 'border-white/8 bg-[rgba(12,18,33,0.64)] backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <a href={siteLinks.home} className="flex min-w-0 items-center gap-3" aria-label="STRUKTIVA Unternehmensarchitektur Startseite">
          <img
            src="/struktiva-logo.jpeg"
            alt="STRUKTIVA Unternehmensarchitektur"
            className="h-[38px] w-auto max-w-[190px] rounded-xl object-contain md:h-12 md:max-w-[240px]"
          />
          <span className="hidden text-xs font-medium uppercase tracking-[0.26em] text-white/68 md:inline">
            Unternehmensarchitektur
          </span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm text-white/74 transition hover:text-struktivaGold">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteLinks.contact}
            className="hidden rounded-full border border-struktivaGold/40 px-5 py-2 text-sm font-medium text-struktivaGold transition hover:-translate-y-0.5 hover:bg-struktivaGold hover:text-struktivaDark md:inline-flex"
          >
            Kostenlose Anfrage stellen
          </a>
          <button
            type="button"
            aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-struktivaGold/35 hover:text-struktivaGold lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/8 lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/76 transition hover:border-struktivaGold/30 hover:text-struktivaGold"
                >
                  {label}
                </a>
              ))}
              <a
                href={siteLinks.contact}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-struktivaGold/30 px-4 py-3 text-sm font-medium text-struktivaGold transition hover:bg-struktivaGold hover:text-struktivaDark"
              >
                Kostenlose Anfrage stellen
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function Hero() {
  return (
    <section id="start" className="relative overflow-hidden px-5 pb-18 pt-32 lg:px-8 lg:pb-24 lg:pt-36">
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(246,217,160,0.18),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(72,104,158,0.24),transparent_24%),linear-gradient(135deg,#10182c,#16233e_56%,#1a2946)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-struktivaGold/25 bg-white/[0.06] px-4 py-2 text-sm text-white/82 backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-struktivaGold" /> {brand.name}
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.06]"
          >
            Digitale Architektur für Sichtbarkeit, Struktur und App-Systeme.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-xl md:leading-9"
          >
            Professionelle Webseiten, Landingpages, klare Kundenkommunikation und digitale Unternehmenssysteme für kleine Unternehmen, Selbstständige und lokale Betriebe.
          </motion.p>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-struktivaCream/86"
          >
            Webseiten. Struktur. Kommunikation. App-Lösungen.
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            <a
              href={siteLinks.contact}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-struktivaGold px-7 py-4 font-semibold text-struktivaDark shadow-gold transition hover:-translate-y-0.5 hover:scale-[1.01]"
            >
              Kostenlose Anfrage stellen <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={siteLinks.pricing}
              className="inline-flex items-center justify-center rounded-full border border-white/18 px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:border-struktivaGold hover:text-struktivaGold"
            >
              Angebote ansehen
            </a>
            <a
              href={siteLinks.apps}
              className="inline-flex items-center justify-center px-2 py-4 text-sm font-semibold text-struktivaCream transition hover:text-struktivaGold"
            >
              App-Lösungen entdecken
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeRight}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[32rem]"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(160deg,rgba(255,255,255,0.10),rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4 shadow-premium backdrop-blur-xl md:p-5">
            <div className="rounded-[1.55rem] border border-struktivaGold/20 bg-[#111a30]/96 p-5 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-white/60">STRUKTIVA System</p>
                  <p className="mt-2 text-xl font-semibold text-white md:text-2xl">Digitale Struktur für Unternehmen</p>
                </div>
                <span className="rounded-full border border-struktivaGold/30 bg-struktivaGold/10 px-3 py-1 text-xs font-semibold text-struktivaGold">
                  Startklar
                </span>
              </div>

              <div className="mt-7 grid gap-3">
                {[
                  ['Webseite', 'klar'],
                  ['Sichtbarkeit', 'sichtbar'],
                  ['Struktur', 'geordnet'],
                  ['App-System', 'digital'],
                ].map(([item, status]) => (
                  <div key={item} className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.05] px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-struktivaGold shadow-[0_0_16px_rgba(232,194,94,0.35)]" />
                      <span className="text-sm font-medium text-white/86 md:text-base">{item}</span>
                    </div>
                    <span className="text-right text-xs font-medium text-white/54 md:text-sm">{status}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-gradient-to-br from-struktivaGold/14 to-blue-500/10 p-4 md:p-5">
                <p className="text-sm font-medium text-white/60">Ergebnis</p>
                <p className="mt-2 text-base font-semibold leading-7 text-white">
                  Ein professioneller digitaler Auftritt mit klaren Abläufen.
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
    <section className="px-5 pb-8 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        {trustCards.map(([title, text]) => (
          <motion.div
            key={title}
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 shadow-premium transition hover:-translate-y-1"
          >
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/68">{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

function ProblemSection() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Problem"
            title="Viele Unternehmen leisten gute Arbeit – aber digital sieht man davon zu wenig."
            text="Viele kleine Unternehmen haben keine klare digitale Außenwirkung. Die Webseite wirkt unvollständig oder veraltet, Social Media läuft unregelmäßig, Google wird nicht aktiv genutzt, WhatsApp-Kommunikation ist unsortiert und interne Abläufe sind oft nicht sauber dokumentiert."
          />
        </Reveal>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {problemCards.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[1.5rem] border border-white/10 bg-struktivaDark/35 p-5 transition hover:-translate-y-1"
            >
              <p className="text-lg font-semibold text-white">{item}</p>
            </motion.div>
          ))}
        </motion.div>
        <Reveal className="mt-8">
          <div className="rounded-[1.6rem] border border-struktivaGold/18 bg-struktivaGold/[0.08] p-6 text-center text-base leading-8 text-white/78">
            STRUKTIVA setzt genau dort an: bei Sichtbarkeit, Kommunikation, Struktur und digitalen Lösungen.
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function SolutionSection() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Lösung"
            title="STRUKTIVA verbindet Sichtbarkeit, Struktur und digitale Systeme."
            text="STRUKTIVA erstellt nicht nur einzelne Texte oder einzelne Posts. Der Fokus liegt auf einem klaren digitalen Gesamtbild: professionelle Außenwirkung, bessere Kundenkommunikation, strukturierte Abläufe und auf Wunsch individuelle App-Lösungen für das Unternehmen."
          />
        </Reveal>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {solutionPillars.map(([title, text]) => (
            <motion.div
              key={title}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[1.7rem] border border-white/10 bg-white/[0.055] p-6 transition hover:-translate-y-1"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-struktivaGold">{title}</p>
              <p className="mt-4 leading-7 text-white/70">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section id="leistungen" className="px-5 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Leistungen"
            title="Alles, was kleine Unternehmen für einen professionelleren digitalen Auftritt brauchen."
            text=""
          />
        </Reveal>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
          className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map(([Icon, title, text, featured]) => (
            <motion.div
              key={title}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-[1.7rem] border p-6 transition hover:-translate-y-1 ${
                featured
                  ? 'border-struktivaGold/28 bg-[linear-gradient(160deg,rgba(232,194,94,0.10),rgba(255,255,255,0.06),rgba(37,99,235,0.06))] shadow-gold'
                  : 'border-white/12 bg-white/[0.055] hover:border-struktivaGold/24'
              }`}
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-struktivaGold/12 text-struktivaGold">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function PricingCard({ pkg }) {
  return (
    <motion.article
      variants={fadeUp}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border p-5 shadow-premium transition hover:-translate-y-1 md:p-6 ${
        pkg.premium
          ? 'border-struktivaGold/50 bg-[linear-gradient(160deg,rgba(232,194,94,0.17),rgba(255,255,255,0.08),rgba(59,130,246,0.11))] shadow-gold'
          : pkg.highlight
            ? 'border-struktivaGold/30 bg-[linear-gradient(160deg,rgba(232,194,94,0.10),rgba(255,255,255,0.06),rgba(37,99,235,0.07))]'
            : 'border-white/12 bg-white/[0.055] hover:border-struktivaGold/28'
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-struktivaGold/50 to-transparent" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-struktivaCream/10 px-3 py-1 text-[11px] font-medium text-struktivaCream">Startangebot</span>
            {pkg.badge && (
              <span
                className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                  pkg.premium
                    ? 'border border-struktivaGold/35 bg-struktivaGold/12 text-struktivaGold'
                    : 'border border-white/12 bg-white/[0.05] text-white/70'
                }`}
              >
                {pkg.badge}
              </span>
            )}
          </div>
          <h3 className="max-w-[22rem] text-xl font-semibold leading-tight text-white md:text-2xl">{pkg.title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68">{pkg.description}</p>
        </div>
        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-struktivaGold/12 text-struktivaGold sm:flex">
          {pkg.premium ? <ShieldCheck className="h-5 w-5" /> : <BadgeCheck className="h-5 w-5" />}
        </div>
      </div>

      <div className="mt-6 rounded-[1.3rem] border border-white/10 bg-struktivaDark/34 p-4">
        <p className="text-3xl font-semibold tracking-tight text-struktivaGold md:text-[2rem]">{pkg.price}</p>
        {pkg.subtitle && <p className="mt-2 text-sm font-medium text-white/74">{pkg.subtitle}</p>}
      </div>

      <div className={`mt-6 grid gap-4 ${pkg.premium ? 'xl:grid-cols-[1fr_0.92fr]' : ''}`}>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/52">Enthalten</p>
          <ul className="space-y-2.5 text-sm leading-6 text-white/74">
            {pkg.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-struktivaGold" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {pkg.extras && (
          <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.045] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/52">{pkg.extraTitle}</p>
            <ul className="mt-4 space-y-2.5 text-sm leading-6 text-white/74">
              {pkg.extras.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-struktivaGold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {pkg.plans && (
        <div className="mt-6 rounded-[1.3rem] border border-white/10 bg-white/[0.04] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/52">Betreuungsstufen</p>
          <ul className="mt-4 grid gap-2.5 text-sm leading-6 text-white/76">
            {pkg.plans.map((plan) => (
              <li key={plan} className="rounded-2xl border border-white/8 bg-struktivaDark/32 px-3.5 py-2.5">
                {plan}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={`mt-6 rounded-[1.3rem] border p-4 text-sm leading-7 ${
        pkg.premium ? 'border-struktivaGold/18 bg-struktivaDark/42 text-white/76' : 'border-white/10 bg-white/[0.04] text-white/68'
      }`}>
        {pkg.note}
      </div>

      <a
        href={siteLinks.contact}
        className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
          pkg.premium
            ? 'bg-struktivaGold text-struktivaDark shadow-gold hover:-translate-y-0.5 hover:scale-[1.01]'
            : 'border border-struktivaGold/40 text-struktivaGold hover:-translate-y-0.5 hover:bg-struktivaGold hover:text-struktivaDark'
        }`}
      >
        {pkg.cta} <ArrowRight className="h-4 w-4" />
      </a>
    </motion.article>
  )
}

function PricingSection() {
  return (
    <section id="preise" className="px-5 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Startangebote & Preise"
            title="Professionelle Einstiegspakete für Sichtbarkeit, Webseiten, Struktur und digitale Systeme."
            text="STRUKTIVA Unternehmensarchitektur bietet klare Einstiegspakete für kleine Unternehmen, Selbstständige und lokale Betriebe. Die Preise berücksichtigen nicht nur die Umsetzung, sondern auch Konzeption, technische Arbeit, laufende Tools, Hosting, Betreuung und Arbeitszeit. Der genaue Umfang wird im persönlichen Gespräch festgelegt."
          />
        </Reveal>
        <div className="mt-12 space-y-8">
          {pricingGroups.map((group) => {
            const packages = pricePackages.filter((pkg) => pkg.group === group.key)

            return (
              <Reveal key={group.key}>
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-premium md:p-7">
                  <div className="mb-6 flex flex-col gap-3 border-b border-white/8 pb-5 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-struktivaGold/78">{group.title}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white md:text-[1.75rem]">
                        {group.key === 'visibility' ? 'Leistungen für Auftritt und Sichtbarkeit' : 'Digitale Systeme mit laufender Betreuung'}
                      </h3>
                    </div>
                    <p className="max-w-2xl text-sm leading-7 text-white/68">{group.text}</p>
                  </div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={stagger}
                    className="grid gap-6 xl:grid-cols-6"
                  >
                    {packages.map((pkg) => (
                      <div key={pkg.title} className={pkg.premium || pkg.highlight ? 'xl:col-span-3' : 'xl:col-span-2'}>
                        <PricingCard pkg={pkg} />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </Reveal>
            )
          })}
        </div>
        <Reveal className="mt-8">
          <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="rounded-[1.6rem] border border-struktivaGold/18 bg-[linear-gradient(160deg,rgba(232,194,94,0.09),rgba(255,255,255,0.05),rgba(37,99,235,0.05))] p-6 shadow-premium md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-struktivaGold/80">App-Betreuung</p>
              <h3 className="mt-3 text-2xl font-semibold text-white md:text-[1.75rem]">Warum gibt es eine monatliche App-Betreuung?</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                Damit eine Unternehmens-App dauerhaft nutzbar bleibt, entstehen laufende Kosten für Hosting, technische Bereitstellung, Speicher, Wartung, kleinere Anpassungen und Support. Deshalb wird die App-Erstellung einmalig berechnet und die laufende technische Betreuung separat monatlich abgerechnet.
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/52">Enthalten in der laufenden Betreuung</p>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/76">
                {appCareReasons.map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-struktivaDark/32 px-4 py-3">
                    <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-struktivaGold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
        <Reveal className="mt-8">
          <div className="rounded-[1.5rem] border border-white/12 bg-white/[0.055] p-6 text-center text-sm leading-7 text-white/72">
            Alle Preise verstehen sich als Einstiegspreise. Der genaue Leistungsumfang wird im persönlichen Gespräch festgelegt und richtet sich nach Bedarf, Projektumfang, technischer Umsetzung, Hosting, Speicherbedarf, Betreuungsaufwand und Arbeitszeit. Nach einer kurzen Analyse erhältst du ein klares Angebot.
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function AppSection() {
  return (
    <section id="apps" className="px-5 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.4rem] border border-struktivaGold/20 bg-gradient-to-br from-white/[0.07] to-struktivaGold/[0.07] p-7 shadow-gold md:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <Reveal>
            <SectionHeader
              centered={false}
              eyebrow="App-Lösungen"
              title="Professionelle Unternehmens-Apps für bessere Abläufe."
              text="Individuelle App-Systeme für Kundenverwaltung, Termine, Aufgaben, Checklisten und interne Prozesse – klar aufgebaut, alltagstauglich und passend zum Unternehmen."
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              {appModules.map(([label, Icon]) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3 rounded-2xl border border-white/12 bg-struktivaDark/45 p-4 transition hover:-translate-y-1"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-struktivaGold/13 text-struktivaGold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-white/82">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </Reveal>

          <Reveal>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto w-full max-w-[31rem] rounded-[1.9rem] border border-white/12 bg-white/[0.07] p-4 shadow-premium backdrop-blur-xl"
            >
              <div className="rounded-[1.5rem] border border-struktivaGold/20 bg-struktivaDark/88 p-5 md:p-6">
                <div className="mb-5">
                  <p className="text-xl font-semibold text-white md:text-2xl">So kann eine STRUKTIVA App-Lösung aussehen</p>
                  <p className="mt-3 text-sm leading-7 text-white/68 md:text-base">
                    Individuelle App-Systeme können Kunden, Termine, Aufgaben, Checklisten und interne Abläufe übersichtlich an einem Ort bündeln.
                  </p>
                </div>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-white/68">App-Beispiel für Unternehmen</p>
                    <p className="mt-1 text-xl font-semibold text-white">STRUKTIVA Business App</p>
                  </div>
                  <div className="shrink-0 rounded-full bg-struktivaGold/15 px-3 py-1 text-xs font-semibold text-struktivaGold">Vorschau</div>
                </div>
                <div className="grid gap-3">
                  {[
                    ['Kundenverwaltung', 'übersichtlich'],
                    ['Terminübersicht', 'strukturiert'],
                    ['Aufgabensteuerung', 'klar'],
                    ['Bewertungsprozess', 'integriert'],
                  ].map(([item, status]) => (
                    <div key={item} className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.055] p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-2.5 w-2.5 rounded-full bg-struktivaGold shadow-[0_0_18px_rgba(232,194,94,0.35)]" />
                        <span className="text-sm font-medium text-white/86 md:text-base">{item}</span>
                      </div>
                      <span className="text-right text-xs font-medium text-white/55 md:text-sm">{status}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-gradient-to-br from-struktivaGold/18 to-blue-500/10 p-4 md:p-5">
                  <p className="text-sm font-medium text-white/64">Ergebnis</p>
                  <p className="mt-2 text-base font-semibold leading-7 text-white">Ein digitaler Ort für Kunden, Termine, Aufgaben und interne Abläufe.</p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function WebsiteFocusSection() {
  return (
    <section id="webseiten" className="px-5 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.3rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.04))] p-8 shadow-premium md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal>
            <SectionHeader
              centered={false}
              eyebrow="Webseiten"
              title="Webseiten & Landingpages mit klarer Wirkung."
              text="Eine gute Webseite erklärt schnell, was ein Unternehmen anbietet, warum es vertrauenswürdig ist und wie Kunden Kontakt aufnehmen können. STRUKTIVA entwickelt Webseiten, Landingpages und Angebotsseiten mit klarer Struktur, professionellen Texten und sauberer Kundenführung."
            />
            <a
              href={siteLinks.contact}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-struktivaGold/40 px-6 py-3 font-semibold text-struktivaGold transition hover:-translate-y-0.5 hover:bg-struktivaGold hover:text-struktivaDark"
            >
              Webseite oder Landingpage anfragen <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={stagger}
            className="grid gap-5 md:grid-cols-3"
          >
            {websiteFocusCards.map(([title, text]) => (
              <motion.div
                key={title}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[1.6rem] border border-white/12 bg-struktivaDark/38 p-6 transition hover:-translate-y-1"
              >
                <p className="text-xl font-semibold text-white">{title}</p>
                <p className="mt-4 text-sm leading-7 text-white/70">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TargetSection() {
  return (
    <section id="zielgruppen" className="px-5 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Für wen"
            title="Für wen ist STRUKTIVA geeignet?"
            text="STRUKTIVA richtet sich an kleine Unternehmen, Selbstständige und lokale Betriebe, die professioneller sichtbar und digital besser organisiert sein möchten."
          />
        </Reveal>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {targetGroups.map((target) => (
            <motion.span
              key={target}
              variants={fadeUp}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-full border border-white/12 bg-white/[0.055] px-5 py-3 text-white/72"
            >
              {target}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section id="ablauf" className="px-5 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Ablauf"
            title="So läuft die Zusammenarbeit ab"
            text="Die Zusammenarbeit ist klar aufgebaut, damit aus Ideen nutzbare Ergebnisse werden."
          />
        </Reveal>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
          className="mt-14 grid gap-5 lg:grid-cols-5"
        >
          {processSteps.map(([number, title, text]) => (
            <motion.div
              key={number}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[1.55rem] border border-white/12 bg-white/[0.055] p-6 transition hover:-translate-y-1"
            >
              <p className="text-3xl font-semibold text-struktivaGold">{number}</p>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function WhySection() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-white/12 bg-white/[0.055] p-8 shadow-premium md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-struktivaGold">Warum STRUKTIVA?</p>
              <h2 className="text-3xl font-semibold text-white md:text-5xl">Ein klarer digitaler Auftritt statt einzelner lose verbundener Maßnahmen.</h2>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div>
              <p className="leading-8 text-white/72">
                STRUKTIVA verbindet Werbung, Webseiten, Kundenkommunikation, Struktur und App-Systeme zu einem klaren digitalen Gesamtbild. Dadurch entsteht nicht nur ein einzelner Post oder eine einzelne Seite, sondern ein professionellerer Auftritt und bessere Übersicht im Unternehmensalltag.
              </p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={stagger}
                className="mt-8 grid gap-4 sm:grid-cols-3"
              >
                {whyPoints.map((point) => (
                  <motion.div
                    key={point}
                    variants={fadeUp}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-[1.35rem] border border-white/10 bg-struktivaDark/35 p-5 text-sm font-medium text-white/82"
                  >
                    {point}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="kontakt" className="px-5 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-struktivaGold/22 bg-gradient-to-br from-struktivaGold/14 via-white/[0.06] to-blue-500/10 p-8 text-center shadow-gold md:p-12">
        <Reveal>
          <Rocket className="mx-auto h-12 w-12 text-struktivaGold" />
          <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">Bereit für einen professionelleren digitalen Auftritt?</h2>
          <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/74">
            Schreibe kurz, wobei dein Unternehmen Unterstützung braucht – Webseite, Sichtbarkeit, Struktur oder App-Lösung. Danach erhältst du eine klare Einschätzung, welches Paket sinnvoll ist.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/62">
            {contactDetails.email} · Telefon / WhatsApp: auf Anfrage oder echte Nummer eintragen
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={siteLinks.contact}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-struktivaGold px-7 py-4 font-semibold text-struktivaDark transition hover:-translate-y-0.5 hover:scale-[1.01]"
            >
              Anfrage senden <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={contactDetails.whatsapp}
              className="inline-flex items-center justify-center rounded-full border border-white/18 px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:border-struktivaGold hover:text-struktivaGold"
            >
              Per WhatsApp kontaktieren
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/12 px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-white/48 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <img
            src="/struktiva-logo.jpeg"
            alt="STRUKTIVA Unternehmensarchitektur"
            className="h-12 w-fit max-w-[230px] rounded-xl object-contain opacity-90"
          />
          <p>© {new Date().getFullYear()} STRUKTIVA Unternehmensarchitektur. Alle Rechte vorbehalten.</p>
          <p className="text-white/55">{brand.name}</p>
          <p className="text-white/55">{contactDetails.email}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <a href={siteLinks.impressum} className="transition hover:text-struktivaGold">Impressum</a>
          <a href={siteLinks.datenschutz} className="transition hover:text-struktivaGold">Datenschutz</a>
          <a href={siteLinks.widerruf} className="transition hover:text-struktivaGold">Widerruf</a>
          <a href={siteLinks.contact} className="transition hover:text-struktivaGold">Kontakt</a>
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <main className="min-h-screen bg-struktivaDark text-white selection:bg-struktivaGold selection:text-struktivaDark">
      <Header />
      <Hero />
      <TrustSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <PricingSection />
      <AppSection />
      <WebsiteFocusSection />
      <TargetSection />
      <ProcessSection />
      <WhySection />
      <ContactSection />
      <Footer />
    </main>
  )
}

function LegalHeader() {
  return (
    <header className="border-b border-white/12 bg-struktivaDark/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href={siteLinks.home} className="flex min-w-0 items-center gap-3" aria-label="STRUKTIVA Unternehmensarchitektur Startseite">
          <img
            src="/struktiva-logo.jpeg"
            alt="STRUKTIVA Unternehmensarchitektur"
            className="h-[38px] w-auto max-w-[190px] rounded-xl object-contain md:h-12 md:max-w-[240px]"
          />
        </a>
        <a
          href={siteLinks.home}
          className="rounded-full border border-struktivaGold/40 px-5 py-2 text-sm font-medium text-struktivaGold transition hover:bg-struktivaGold hover:text-struktivaDark"
        >
          Zur Startseite
        </a>
      </div>
    </header>
  )
}

function LegalSection({ title, children }) {
  return (
    <section className="rounded-[1.6rem] border border-white/12 bg-white/[0.05] p-6 md:p-8">
      <h2 className="text-xl font-semibold text-white md:text-2xl">{title}</h2>
      <div className="mt-5 space-y-4 text-sm leading-7 text-white/74 md:text-base">{children}</div>
    </section>
  )
}

function LegalLayout({ eyebrow, title, intro, children }) {
  return (
    <main className="min-h-screen bg-struktivaDark text-white selection:bg-struktivaGold selection:text-struktivaDark">
      <LegalHeader />
      <section className="relative overflow-hidden px-5 pb-16 pt-18 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(246,217,160,0.12),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(58,92,154,0.22),transparent_26%),linear-gradient(135deg,#0f172a,#15213b_48%,#192846)]" />
        <div className="mx-auto max-w-[56rem]">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-struktivaGold md:text-sm">{eyebrow}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 md:text-lg">{intro}</p>
          </Reveal>
          <div className="mt-12 space-y-6">{children}</div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

function ImpressumPage() {
  return (
    <LegalLayout
      eyebrow="Impressum"
      title="Impressum"
      intro="Diese Seite enthält die Anbieterkennzeichnung für STRUKTIVA Unternehmensarchitektur."
    >
      <LegalSection title="Angaben gemäß § 5 DDG">
        <p>STRUKTIVA Unternehmensarchitektur</p>
        <p>Jessica Wacker</p>
        <p>[Deine vollständige Straße und Hausnummer eintragen]</p>
        <p>[PLZ und Ort eintragen]</p>
        <p>Deutschland</p>
      </LegalSection>
      <LegalSection title="Kontakt">
        <p>E-Mail: <a href={`mailto:${contactDetails.email}`} className="text-struktivaGold">{contactDetails.email}</a></p>
        <p>Telefon / WhatsApp: [Telefonnummer eintragen oder „auf Anfrage“]</p>
      </LegalSection>
      <LegalSection title="Vertreten durch">
        <p>Jessica Wacker</p>
      </LegalSection>
      <LegalSection title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
        <p>Jessica Wacker</p>
        <p>[Deine vollständige Straße und Hausnummer eintragen]</p>
        <p>[PLZ und Ort eintragen]</p>
      </LegalSection>
      <LegalSection title="Umsatzsteuer">
        <p>[Falls vorhanden: Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz eintragen]</p>
        <p>[Falls nicht vorhanden: Diesen Abschnitt entfernen oder später ergänzen]</p>
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
      eyebrow="Datenschutz"
      title="Datenschutzerklärung"
      intro="Diese Datenschutzerklärung informiert darüber, welche personenbezogenen Daten beim Besuch dieser Webseite und bei einer Kontaktaufnahme verarbeitet werden."
    >
      <LegalSection title="1. Datenschutz auf einen Blick">
        <p>Der Schutz personenbezogener Daten ist mir wichtig. Diese Datenschutzerklärung informiert darüber, welche personenbezogenen Daten beim Besuch dieser Webseite und bei einer Kontaktaufnahme verarbeitet werden.</p>
        <p>Personenbezogene Daten sind alle Daten, mit denen eine Person direkt oder indirekt identifiziert werden kann, zum Beispiel Name, E-Mail-Adresse, Telefonnummer oder IP-Adresse.</p>
      </LegalSection>
      <LegalSection title="2. Verantwortlicher">
        <p>Verantwortlich für die Datenverarbeitung auf dieser Webseite ist:</p>
        <p>STRUKTIVA Unternehmensarchitektur</p>
        <p>Jessica Wacker</p>
        <p>[Deine vollständige Straße und Hausnummer eintragen]</p>
        <p>[PLZ und Ort eintragen]</p>
        <p>Deutschland</p>
        <p>E-Mail: <a href={`mailto:${contactDetails.email}`} className="text-struktivaGold">{contactDetails.email}</a></p>
        <p>Telefon / WhatsApp: [Telefonnummer eintragen oder „auf Anfrage“]</p>
      </LegalSection>
      <LegalSection title="3. Hosting der Webseite">
        <p>Diese Webseite wird über Vercel bereitgestellt.</p>
        <p>Anbieter:</p>
        <p>Vercel Inc.</p>
        <p>440 N Barranca Ave #4133</p>
        <p>Covina, CA 91723</p>
        <p>USA</p>
        <p>Beim Aufruf der Webseite können durch den Hosting-Anbieter technische Daten verarbeitet werden. Dazu gehören insbesondere:</p>
        <p>- IP-Adresse</p>
        <p>- Datum und Uhrzeit des Zugriffs</p>
        <p>- Browsertyp und Browserversion</p>
        <p>- verwendetes Betriebssystem</p>
        <p>- aufgerufene Seiten</p>
        <p>- Referrer-URL</p>
        <p>- technische Logdaten</p>
        <p>Die Verarbeitung erfolgt, um die Webseite sicher, stabil und zuverlässig bereitzustellen.</p>
        <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der sicheren und technisch fehlerfreien Bereitstellung dieser Webseite.</p>
        <p>Hinweis: Falls später weitere Dienste wie Analyse-Tools, Tracking, Newsletter, externe Formulare oder Zahlungsanbieter eingebunden werden, muss diese Datenschutzerklärung entsprechend erweitert werden.</p>
      </LegalSection>
      <LegalSection title="4. Kontaktaufnahme per E-Mail">
        <p>Wenn du mich per E-Mail kontaktierst, werden die von dir übermittelten Daten verarbeitet, um deine Anfrage zu beantworten.</p>
        <p>Dazu können gehören:</p>
        <p>- Name</p>
        <p>- E-Mail-Adresse</p>
        <p>- Inhalt der Nachricht</p>
        <p>- weitere freiwillig übermittelte Angaben</p>
        <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage mit einem möglichen Vertrag oder einer Leistung zusammenhängt. In anderen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, da ein berechtigtes Interesse an der Beantwortung von Anfragen besteht.</p>
      </LegalSection>
      <LegalSection title="5. Kontaktaufnahme per WhatsApp">
        <p>Wenn du über WhatsApp Kontakt aufnimmst, werden die von dir übermittelten Daten verarbeitet, um deine Anfrage zu beantworten. Dazu können insbesondere Telefonnummer, Name, Profilinformationen und Nachrichteninhalte gehören.</p>
        <p>Bitte beachte, dass bei der Nutzung von WhatsApp auch Daten durch den Anbieter von WhatsApp verarbeitet werden können. Auf diese Datenverarbeitung habe ich keinen vollständigen Einfluss.</p>
        <p>Wenn du dies nicht möchtest, kannst du alternativ per E-Mail Kontakt aufnehmen: {contactDetails.email}</p>
      </LegalSection>
      <LegalSection title="6. Kontaktformular">
        {/* Nur verwenden, wenn ein Kontaktformular aktiv eingebunden ist. */}
        <p>Falls auf der Webseite ein Kontaktformular verwendet wird, werden die dort eingegebenen Daten verarbeitet, um die Anfrage zu beantworten.</p>
        <p>Dazu können gehören:</p>
        <p>- Name</p>
        <p>- E-Mail-Adresse</p>
        <p>- Telefonnummer</p>
        <p>- Unternehmensname</p>
        <p>- Nachrichtentext</p>
        <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO.</p>
        <p>Falls aktuell kein Kontaktformular verwendet wird, diesen Abschnitt im Code mit einem klaren Kommentar markieren: "Nur verwenden, wenn ein Kontaktformular aktiv eingebunden ist."</p>
      </LegalSection>
      <LegalSection title="7. Cookies und Tracking">
        <p>Diese Webseite verwendet derzeit keine eigenen Analyse- oder Marketing-Cookies.</p>
        <p>Falls später Tools wie Google Analytics, Meta Pixel, Vercel Analytics, Newsletter-Tools, Zahlungsanbieter, eingebettete Videos, externe Karten oder andere Tracking-/Analyse-Dienste eingebunden werden, muss diese Datenschutzerklärung entsprechend angepasst werden.</p>
      </LegalSection>
      <LegalSection title="8. Speicherdauer">
        <p>Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.</p>
        <p>Anfragen per E-Mail oder WhatsApp werden gelöscht, sobald sie nicht mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
      </LegalSection>
      <LegalSection title="9. Deine Rechte">
        <p>Du hast im Rahmen der gesetzlichen Vorgaben folgende Rechte:</p>
        <p>- Recht auf Auskunft</p>
        <p>- Recht auf Berichtigung</p>
        <p>- Recht auf Löschung</p>
        <p>- Recht auf Einschränkung der Verarbeitung</p>
        <p>- Recht auf Datenübertragbarkeit</p>
        <p>- Recht auf Widerspruch gegen die Verarbeitung</p>
        <p>- Recht auf Widerruf einer erteilten Einwilligung</p>
        <p>- Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde</p>
      </LegalSection>
      <LegalSection title="10. Beschwerderecht bei der Aufsichtsbehörde">
        <p>Wenn du der Ansicht bist, dass die Verarbeitung deiner personenbezogenen Daten gegen Datenschutzrecht verstößt, hast du das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren.</p>
      </LegalSection>
      <LegalSection title="11. Änderung dieser Datenschutzerklärung">
        <p>Diese Datenschutzerklärung kann angepasst werden, wenn sich technische, rechtliche oder organisatorische Änderungen ergeben.</p>
        <p>Stand: [Monat Jahr eintragen]</p>
      </LegalSection>
    </LegalLayout>
  )
}

function WiderrufPage() {
  return (
    <LegalLayout
      eyebrow="Widerruf"
      title="Widerrufsbelehrung"
      intro="Diese Widerrufsbelehrung ist eine allgemeine Vorlage und muss je nach konkretem Angebot, Zahlungsweg und Leistungsart angepasst werden."
    >
      <LegalSection title="Widerrufsrecht für Verbraucher">
        <p>Verbraucher haben grundsätzlich das Recht, binnen vierzehn Tagen ohne Angabe von Gründen einen Vertrag zu widerrufen, sofern ein gesetzliches Widerrufsrecht besteht.</p>
        <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.</p>
      </LegalSection>
      <LegalSection title="Ausübung des Widerrufs">
        <p>Um dein Widerrufsrecht auszuüben, musst du mich mittels einer eindeutigen Erklärung über deinen Entschluss informieren, diesen Vertrag zu widerrufen.</p>
      </LegalSection>
      <LegalSection title="Kontakt für Widerruf">
        <p>STRUKTIVA Unternehmensarchitektur</p>
        <p>Jessica Wacker</p>
        <p>[Deine vollständige Straße und Hausnummer eintragen]</p>
        <p>[PLZ und Ort eintragen]</p>
        <p>Deutschland</p>
        <p>E-Mail: <a href={`mailto:${contactDetails.email}`} className="text-struktivaGold">{contactDetails.email}</a></p>
      </LegalSection>
      <LegalSection title="Hinweis zur Frist">
        <p>Du kannst dafür das unten stehende Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>
        <p>Zur Wahrung der Widerrufsfrist reicht es aus, dass du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.</p>
      </LegalSection>
      <LegalSection title="Folgen des Widerrufs">
        <p>Wenn du diesen Vertrag widerrufst, werden alle Zahlungen, die ich von dir erhalten habe, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückgezahlt, an dem die Mitteilung über deinen Widerruf eingegangen ist.</p>
        <p>Für diese Rückzahlung wird dasselbe Zahlungsmittel verwendet, das du bei der ursprünglichen Zahlung eingesetzt hast, sofern nicht ausdrücklich etwas anderes vereinbart wurde.</p>
      </LegalSection>
      <LegalSection title="Widerruf bei Dienstleistungen">
        <p>Hast du verlangt, dass die Dienstleistung bereits während der Widerrufsfrist beginnen soll, so ist für bereits erbrachte Leistungen ein angemessener Betrag zu zahlen, sofern dies gesetzlich vorgesehen ist.</p>
      </LegalSection>
      <LegalSection title="Widerruf bei digitalen Inhalten">
        <p>Bei digitalen Inhalten oder digitalen Leistungen kann das Widerrufsrecht unter bestimmten gesetzlichen Voraussetzungen vorzeitig erlöschen, wenn mit der Ausführung begonnen wurde und der Verbraucher ausdrücklich zugestimmt hat, dass mit der Ausführung vor Ablauf der Widerrufsfrist begonnen wird.</p>
      </LegalSection>
      <LegalSection title="Muster-Widerrufsformular">
        <p>Wenn du den Vertrag widerrufen möchtest, kannst du dieses Formular ausfüllen und per E-Mail senden.</p>
        <p>An:</p>
        <p>STRUKTIVA Unternehmensarchitektur</p>
        <p>Jessica Wacker</p>
        <p>E-Mail: {contactDetails.email}</p>
        <p>Hiermit widerrufe ich den von mir abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung:</p>
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
      <LegalSection title="Hinweis">
        <p>Diese Widerrufsbelehrung ist eine allgemeine Vorlage und muss je nach konkretem Angebot, Zahlungsweg und Leistungsart angepasst werden.</p>
      </LegalSection>
    </LegalLayout>
  )
}

function ContactPage() {
  return (
    <LegalLayout
      eyebrow="Kontakt"
      title="Kontakt"
      intro="Kontakt zu STRUKTIVA Unternehmensarchitektur"
    >
      <LegalSection title="Kontakt zu STRUKTIVA Unternehmensarchitektur">
        <p>E-Mail: <a href={`mailto:${contactDetails.email}`} className="text-struktivaGold">{contactDetails.email}</a></p>
        <p>Telefon / WhatsApp: [Telefonnummer eintragen oder „auf Anfrage“]</p>
      </LegalSection>
      <LegalSection title="Mögliche Themen">
        <p>- Webseite oder Landingpage</p>
        <p>- Social-Media-Texte</p>
        <p>- Google-Unternehmensprofil</p>
        <p>- WhatsApp-Business-Vorlagen</p>
        <p>- Kundenkommunikation</p>
        <p>- digitale Struktur-Systeme</p>
        <p>- App-Konzept</p>
        <p>- professionelle Unternehmens-App</p>
        <p>- monatliche Betreuung</p>
      </LegalSection>
      <LegalSection title="WhatsApp-Link">
        <p><a href={contactDetails.whatsapp} className="text-struktivaGold">{contactDetails.whatsapp}</a></p>
      </LegalSection>
      <LegalSection title="Kurzer Anfragehinweis">
        <p>Bitte beschreibe kurz dein Unternehmen und wobei du Unterstützung brauchst. Danach kann ich besser einschätzen, welches Paket oder welche Lösung sinnvoll ist.</p>
      </LegalSection>
      <LegalSection title="Optionaler Kontaktformular-Text, falls ein Formular eingebaut wird">
        <p>Felder:</p>
        <p>- Name</p>
        <p>- Unternehmen</p>
        <p>- E-Mail</p>
        <p>- Telefon optional</p>
        <p>- Worum geht es?</p>
        <p>- Nachricht</p>
        <p>Button:</p>
        <p>Anfrage senden</p>
        <p>Hinweis unter dem Formular:</p>
        <p>Mit dem Absenden deiner Anfrage erklärst du dich damit einverstanden, dass deine Angaben zur Bearbeitung der Anfrage verarbeitet werden. Weitere Informationen findest du in der Datenschutzerklärung.</p>
      </LegalSection>
    </LegalLayout>
  )
}

function NotFoundPage() {
  return (
    <LegalLayout
      eyebrow="Seite nicht gefunden"
      title="Diese Seite wurde nicht gefunden"
      intro="Die gewünschte Seite ist nicht verfügbar. Über den folgenden Link kommst du direkt zurück zur STRUKTIVA Startseite."
    >
      <LegalSection title="Zurück zur Website">
        <p><a href={siteLinks.home} className="text-struktivaGold">Zur Startseite von STRUKTIVA</a></p>
      </LegalSection>
    </LegalLayout>
  )
}

function getCurrentPath() {
  return window.location.pathname.replace(/\/+$/, '') || '/'
}

function AppRouter() {
  const currentPath = getCurrentPath()

  if (currentPath === '/impressum') return <ImpressumPage />
  if (currentPath === '/datenschutz') return <DatenschutzPage />
  if (currentPath === '/widerruf') return <WiderrufPage />
  if (currentPath === '/kontakt') return <ContactPage />
  if (currentPath === '/') return <HomePage />

  return <NotFoundPage />
}

createRoot(document.getElementById('root')).render(<AppRouter />)
