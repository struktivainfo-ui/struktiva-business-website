import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Euro,
  Globe2,
  LayoutDashboard,
  MessageCircle,
  PenLine,
  Rocket,
  ShieldCheck,
  Sparkles,
  Smartphone,
  UsersRound,
} from 'lucide-react'
import './styles.css'

const baseUrl = '/'
const siteLinks = {
  home: `${baseUrl}#start`,
  services: `${baseUrl}#leistungen`,
  pricing: `${baseUrl}#preise`,
  apps: `${baseUrl}#apps`,
  targets: `${baseUrl}#zielgruppen`,
  process: `${baseUrl}#ablauf`,
  contactSection: `${baseUrl}#kontakt`,
  impressum: `${baseUrl}impressum`,
  datenschutz: `${baseUrl}datenschutz`,
  widerruf: `${baseUrl}widerruf`,
  contact: `${baseUrl}kontakt`,
}

const contactDetails = {
  email: 'info.struktiva@gmail.com',
  whatsapp: 'https://wa.me/49DEINENUMMER',
  phoneText: 'Telefon / WhatsApp: 070518162292',
}

const navItems = [
  ['Start', siteLinks.home],
  ['Leistungen', siteLinks.services],
  ['Preise', siteLinks.pricing],
  ['App-Lösungen', siteLinks.apps],
  ['Für wen', siteLinks.targets],
  ['Ablauf', siteLinks.process],
  ['Kontakt', siteLinks.contactSection],
]

const services = [
  {
    icon: PenLine,
    title: 'Texte, Sichtbarkeit & Positionierung',
    text: 'Professionelle Inhalte für Social Media, Google, WhatsApp, Webseiten und klare Unternehmensdarstellung.',
  },
  {
    icon: Globe2,
    title: 'Google & lokale Präsenz',
    text: 'Texte und Strukturen, damit Unternehmen vor Ort verständlich auftreten und besser gefunden werden.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Business & Kundenkommunikation',
    text: 'Schnellantworten, Begrüßungen, Termintexte und Nachfass-Nachrichten für einen professionellen Kontakt.',
  },
  {
    icon: LayoutDashboard,
    title: 'Webseiten & Landingpages',
    text: 'Seitenstruktur, Angebotslogik, Headlines, Texte und mobile Ausrichtung für einen starken Online-Auftritt.',
  },
  {
    icon: ClipboardList,
    title: 'Struktur & digitale Abläufe',
    text: 'Klare Prozesse, interne Vorlagen, Checklisten und einfache digitale Organisation für den Alltag im Betrieb.',
  },
  {
    icon: Smartphone,
    title: 'Individuelle App-Lösungen',
    text: 'Unternehmens-Apps für Kunden, Termine, Aufgaben, Teams und branchenspezifische digitale Prozesse.',
  },
]

const appModules = [
  ['Kundenverwaltung', UsersRound],
  ['Terminübersichten', CalendarDays],
  ['Mitarbeiterorganisation', BriefcaseBusiness],
  ['Aufgabensteuerung', CheckCircle2],
  ['Interne Checklisten', ClipboardList],
  ['Digitale Dashboards', BarChart3],
  ['Bewertungsprozesse', BadgeCheck],
  ['Kundenkommunikation', MessageCircle],
]

const pricePackages = [
  {
    title: 'Sichtbarkeits-Starter',
    price: 'ab 99 €',
    description:
      'Für kleine Unternehmen, die online professioneller wirken und erste konkrete Verbesserungen umsetzen möchten.',
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
    title: 'Google & WhatsApp Business',
    price: 'ab 149 €',
    description:
      'Für lokale Betriebe, die besser gefunden werden und professioneller mit Kunden kommunizieren möchten.',
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
    title: 'Social-Media & Content',
    price: 'ab 179 €',
    description:
      'Für Unternehmen, die regelmäßig bessere Inhalte veröffentlichen und professioneller sichtbar werden möchten.',
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
    title: 'Webseiten & Landingpages',
    price: 'ab 299 €',
    badge: 'Wichtige Leistung',
    description:
      'Für Unternehmen, die eine professionelle Webseite, Landingpage oder Angebotsseite benötigen.',
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
    ],
    note: 'Landingpages starten ab 299 €. Komplette Webseiten werden je nach Umfang individuell kalkuliert.',
    cta: 'Webseite anfragen',
    highlight: true,
  },
  {
    title: 'App-Konzept Paket',
    price: '299 €',
    description:
      'Für Unternehmen, die prüfen möchten, ob eine eigene Unternehmens-App sinnvoll ist.',
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
    title: 'Professionelle Unternehmens-App',
    price: 'ab 1.490 €',
    subtitle: 'Monatliche Betreuung ab 49 € / Monat',
    badge: 'Premium App-Lösung',
    description:
      'Für Betriebe, die eine individuelle digitale Lösung für ihre Abläufe brauchen.',
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
    extraTitle: 'Die monatliche Betreuung beinhaltet',
    extras: [
      'Hosting',
      'technische Bereitstellung',
      'kleinere Anpassungen',
      'Pflege und Funktionsprüfung',
      'Support bei Bedienfragen',
      'technische Grundbetreuung der App',
    ],
    note: 'Der genaue Preis hängt vom Funktionsumfang, den gewünschten Modulen und dem technischen Aufwand ab.',
    cta: 'App-Lösung anfragen',
    premium: true,
    wide: true,
  },
  {
    title: 'Monatliche STRUKTIVA Betreuung',
    price: 'ab 99 € / Monat',
    description:
      'Für Unternehmen, die dauerhaft Unterstützung bei Sichtbarkeit, Texten, Webseiten, Struktur oder digitalen Anpassungen möchten.',
    features: [
      'neue Google- oder Social-Media-Texte',
      'kleine Webseiten- oder Landingpage-Anpassungen',
      'neue WhatsApp-Texte',
      'Optimierung der Kundenkommunikation',
      'kleine App- oder Struktur-Anpassungen',
      'monatlicher Struktur-Check',
      'Empfehlungen für die nächsten digitalen Schritte',
    ],
    note: 'Die monatliche Betreuung wird passend zum Bedarf des Unternehmens zusammengestellt.',
    cta: 'Betreuung anfragen',
  },
]

const targets = [
  'Friseursalons',
  'Kosmetikstudios',
  'Fußpflege',
  'Nagelstudios',
  'Handwerksbetriebe',
  'Cafés',
  'Lokale Dienstleister',
  'Kleine Einzelhändler',
  'Coaches & Berater',
  'Praxen & Studios',
]

const steps = [
  ['01', 'Erstgespräch', 'Wir schauen gemeinsam, wo dein Unternehmen aktuell steht: Sichtbarkeit, Kundenkommunikation, Abläufe und digitale Möglichkeiten.'],
  ['02', 'Analyse', 'Ich prüfe, welche Bereiche den größten Nutzen bringen: bessere Werbung, klarere Texte, Webseiten, Struktur oder ein digitales App-System.'],
  ['03', 'Konzept', 'Du bekommst eine klare Empfehlung, welche Lösung zu deinem Unternehmen passt und welche Schritte sinnvoll sind.'],
  ['04', 'Umsetzung', 'Ich entwickle die passenden Texte, Seitenstrukturen, Vorlagen, Struktur-Systeme oder professionellen App-Lösungen.'],
  ['05', 'Übergabe', 'Du bekommst nutzbare Ergebnisse, die du direkt in deinem Unternehmen einsetzen kannst.'],
]

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/12 bg-struktivaDark/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href="#start" className="group flex min-w-0 items-center gap-3" aria-label="STRUKTIVA Startseite">
          <img
            src="/struktiva-logo.jpeg"
            alt="STRUKTIVA Unternehmerarchitektur"
            className="h-[38px] w-auto max-w-[190px] rounded-xl object-contain shadow-[0_0_22px_rgba(232,194,94,0.14)] md:h-12 md:max-w-[240px]"
          />
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm text-white/74 transition hover:text-struktivaGold">
              {label}
            </a>
          ))}
        </nav>
        <a href={siteLinks.contactSection} className="hidden rounded-full border border-struktivaGold/40 px-5 py-2 text-sm font-medium text-struktivaGold transition hover:bg-struktivaGold hover:text-struktivaDark md:inline-flex">
          Anfrage stellen
        </a>
      </div>
      <div className="border-t border-white/8 lg:hidden">
        <nav className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-5 py-3 text-sm text-white/72 [scrollbar-width:none]">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 transition hover:border-struktivaGold/40 hover:text-struktivaGold"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function SectionHeader({ eyebrow, title, text, centered = true }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-struktivaGold">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-white/72 md:text-lg">{text}</p>}
    </div>
  )
}

function Hero() {
  return (
    <section id="start" className="relative overflow-hidden px-5 pb-24 pt-44 lg:px-8 lg:pb-32 lg:pt-44">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(246,217,160,0.20),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(58,92,154,0.36),transparent_30%),linear-gradient(135deg,#0b1020,#111a2e_46%,#17213a)]" />
      <div className="absolute left-1/2 top-28 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-struktivaGold/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <img
            src="/struktiva-logo.jpeg"
            alt="STRUKTIVA Unternehmerarchitektur"
            className="mb-8 w-[260px] max-w-full rounded-3xl object-contain shadow-[0_0_45px_rgba(232,194,94,0.18)] md:w-[360px]"
          />
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-struktivaGold/25 bg-white/5 px-4 py-2 text-sm text-white/82 backdrop-blur">
            <Sparkles className="h-4 w-4 text-struktivaGold" /> Sichtbarkeit. Webseiten. App-Systeme.
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
            Digitaler <span className="block bg-gradient-to-r from-struktivaGold to-struktivaCream bg-clip-text text-transparent">Business-Service</span>
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-white/82 md:text-2xl">
            Texte, Webseiten, Struktur und professionelle digitale Lösungen für kleine Unternehmen.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            STRUKTIVA unterstützt kleine Unternehmen, Selbstständige und lokale Betriebe dabei, sichtbarer, organisierter und digital besser aufgestellt zu sein.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={siteLinks.contactSection} className="inline-flex items-center justify-center gap-2 rounded-full bg-struktivaGold px-7 py-4 font-semibold text-struktivaDark shadow-gold transition hover:scale-[1.02]">
              Unverbindlich anfragen <ArrowRight className="h-5 w-5" />
            </a>
            <a href={siteLinks.pricing} className="inline-flex items-center justify-center rounded-full border border-white/18 px-7 py-4 font-semibold text-white transition hover:border-struktivaGold hover:text-struktivaGold">
              Startangebote ansehen
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="mb-6 rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-5 shadow-premium backdrop-blur">
            <p className="text-xl font-semibold text-white md:text-2xl">So kann eine STRUKTIVA App-Lösung aussehen</p>
            <p className="mt-3 text-sm leading-7 text-white/68 md:text-base">
              Individuelle App-Systeme können Kunden, Termine, Aufgaben, Checklisten und interne Abläufe übersichtlich an einem Ort bündeln.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/12 bg-white/[0.075] p-5 shadow-premium backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-struktivaGold/20 bg-struktivaDark/88 p-5 md:p-6">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-white/68">App-Beispiel für Unternehmen</p>
                  <p className="mt-1 text-xl font-semibold text-white">STRUKTIVA Business App</p>
                </div>
                <div className="shrink-0 rounded-full bg-struktivaGold/15 px-3 py-1 text-xs font-semibold text-struktivaGold">Vorschau</div>
              </div>
              <div className="grid gap-3 md:gap-4">
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
              <div className="mt-6 rounded-2xl bg-gradient-to-br from-struktivaGold/18 to-blue-500/10 p-5">
                <p className="text-sm font-medium text-white/64">Ergebnis</p>
                <p className="mt-2 text-base font-semibold leading-7 text-white md:text-lg">Ein digitaler Ort für Kunden, Termine, Aufgaben und interne Abläufe.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProblemSolution() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/12 bg-white/[0.055] p-8 shadow-premium md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-struktivaGold">Problem</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Viele Unternehmen leisten gute Arbeit, aber online sieht man das oft nicht klar genug.</h2>
          <p className="mt-6 leading-8 text-white/74">
            Häufig fehlen eine verständliche Außendarstellung, gute Angebotsseiten, regelmäßige Inhalte oder klare digitale Abläufe für Kundenkommunikation und Organisation.
          </p>
        </div>
        <div className="rounded-[2rem] border border-struktivaGold/20 bg-struktivaGold/[0.08] p-8 shadow-gold md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-struktivaGold">Lösung</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">STRUKTIVA verbindet Sichtbarkeit, Webseiten, Struktur und digitale Systeme.</h2>
          <p className="mt-6 leading-8 text-white/72">
            So entsteht ein professioneller Auftritt nach außen und ein klarer, praxistauglicher digitaler Rahmen für den Arbeitsalltag im Unternehmen.
          </p>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="leistungen" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Leistungen"
          title="Professionelle digitale Unterstützung für kleine Unternehmen."
          text="Von Texten bis App-Systemen: STRUKTIVA entwickelt klare Inhalte, Webseiten, bessere Abläufe und digitale Lösungen, die zum Unternehmen passen."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-[1.75rem] border border-white/12 bg-white/[0.055] p-7 transition hover:-translate-y-1 hover:border-struktivaGold/35 hover:bg-white/[0.075]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-struktivaGold/12 text-struktivaGold">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-4 leading-7 text-white/72">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingCard({ pkg }) {
  const mailSubject = encodeURIComponent(`${pkg.title} anfragen`)

  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-[1.9rem] border p-6 shadow-premium transition hover:-translate-y-1 md:p-7 ${
        pkg.premium
          ? 'border-struktivaGold/50 bg-[linear-gradient(160deg,rgba(232,194,94,0.18),rgba(255,255,255,0.08),rgba(59,130,246,0.12))] shadow-gold'
          : pkg.highlight
            ? 'border-struktivaGold/30 bg-[linear-gradient(160deg,rgba(232,194,94,0.10),rgba(255,255,255,0.06),rgba(37,99,235,0.08))]'
            : 'border-white/12 bg-white/[0.055] hover:border-struktivaGold/28'
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-struktivaGold/50 to-transparent" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-struktivaCream/10 px-3 py-1 text-xs font-medium text-struktivaCream">Einführungspreis</span>
            {pkg.badge && (
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  pkg.premium
                    ? 'border border-struktivaGold/35 bg-struktivaGold/12 text-struktivaGold'
                    : 'border border-white/12 bg-white/[0.05] text-white/70'
                }`}
              >
                {pkg.badge}
              </span>
            )}
          </div>
          <h3 className="max-w-[22rem] text-2xl font-semibold leading-tight text-white">{pkg.title}</h3>
          <p className="mt-3 max-w-2xl leading-7 text-white/68">{pkg.description}</p>
        </div>
        <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-struktivaGold/12 text-struktivaGold sm:flex">
          {pkg.premium ? <ShieldCheck className="h-6 w-6" /> : <Euro className="h-6 w-6" />}
        </div>
      </div>

      <div className="mt-7 rounded-[1.4rem] border border-white/10 bg-struktivaDark/34 p-5">
        <p className="text-3xl font-semibold tracking-tight text-struktivaGold md:text-4xl">{pkg.price}</p>
        {pkg.subtitle && <p className="mt-2 text-sm font-medium text-white/74">{pkg.subtitle}</p>}
      </div>

      <div className={`mt-7 grid gap-4 ${pkg.premium ? 'xl:grid-cols-[1fr_0.92fr]' : ''}`}>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/52">Enthalten</p>
          <ul className="space-y-3 text-sm leading-6 text-white/74">
            {pkg.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-struktivaGold" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {pkg.extras && (
          <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/52">{pkg.extraTitle}</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/74">
              {pkg.extras.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-struktivaGold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div
        className={`mt-7 rounded-[1.35rem] border p-4 text-sm leading-7 ${
          pkg.premium ? 'border-struktivaGold/20 bg-struktivaDark/42 text-white/76' : 'border-white/10 bg-white/[0.04] text-white/68'
        }`}
      >
        {pkg.note}
      </div>

      <a
        href={`mailto:info.struktiva@gmail.com?subject=${mailSubject}`}
        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
          pkg.premium
            ? 'bg-struktivaGold text-struktivaDark shadow-gold hover:scale-[1.02]'
            : 'border border-struktivaGold/40 text-struktivaGold hover:bg-struktivaGold hover:text-struktivaDark'
        }`}
      >
        {pkg.cta} <ArrowRight className="h-4 w-4" />
      </a>
    </article>
  )
}

function Pricing() {
  return (
    <section id="preise" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Startangebote & Preise"
          title="Faire Einstiegspakete für Sichtbarkeit, Webseiten, Struktur und digitale Lösungen."
          text="STRUKTIVA unterstützt kleine Unternehmen, Selbstständige und lokale Betriebe mit professionellen Texten, Webseiten, Landingpages, klarer Kundenkommunikation, digitalen Strukturen und individuellen App-Lösungen. Zum Start gibt es bewusst schlanke Einstiegspakete, damit Unternehmen unkompliziert beginnen können. Der genaue Umfang wird im persönlichen Gespräch festgelegt und an den Bedarf des Unternehmens angepasst."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-6">
          {pricePackages.map((pkg) => (
            <div
              key={pkg.title}
              className={pkg.premium || pkg.highlight ? 'xl:col-span-3' : 'xl:col-span-2'}
            >
              <PricingCard pkg={pkg} />
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-white/12 bg-white/[0.055] p-6 text-center text-sm leading-7 text-white/72">
          Alle Preise verstehen sich als Einführungspreise zum Start von STRUKTIVA Business-Service. Der genaue Leistungsumfang wird im persönlichen Gespräch festgelegt und richtet sich nach dem Bedarf des Unternehmens, den gewünschten Leistungen und dem technischen Aufwand. Nach einer kurzen Analyse erhältst du ein klares Angebot.
        </div>
      </div>
    </section>
  )
}

function Apps() {
  return (
    <section id="apps" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-struktivaGold/20 bg-gradient-to-br from-white/[0.07] to-struktivaGold/[0.07] p-7 shadow-gold md:p-12 lg:p-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            centered={false}
            eyebrow="App-Lösungen"
            title="Professionelle Unternehmens-Apps für bessere Abläufe."
            text="STRUKTIVA entwickelt individuelle App-Systeme für Unternehmen, die Abläufe digital abbilden, Übersicht schaffen und im Alltag zuverlässig funktionieren."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {appModules.map(([label, Icon]) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/12 bg-struktivaDark/45 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-struktivaGold/13 text-struktivaGold">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-medium text-white/82">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Targets() {
  return (
    <section id="zielgruppen" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Für wen"
          title="Für Betriebe, die gute Arbeit leisten und digital klarer auftreten wollen."
          text="STRUKTIVA eignet sich besonders für lokale Unternehmen mit Kunden-, Termin-, Mitarbeiter- oder Organisationsprozessen."
        />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {targets.map((target) => (
            <span key={target} className="rounded-full border border-white/12 bg-white/[0.055] px-5 py-3 text-white/72">
              {target}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="ablauf" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Ablauf" title="Von der Analyse zur nutzbaren Lösung." text="Die Zusammenarbeit ist klar aufgebaut, damit aus Ideen konkrete Ergebnisse werden." />
        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          {steps.map(([number, title, text]) => (
            <div key={number} className="rounded-[1.5rem] border border-white/12 bg-white/[0.055] p-6">
              <p className="text-3xl font-semibold text-struktivaGold">{number}</p>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/58">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Why() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-struktivaGold">Warum STRUKTIVA</p>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">Mehr als Werbung: ein klarer digitaler Auftritt für wachsende Unternehmen.</h2>
        </div>
        <div className="rounded-[2rem] border border-white/12 bg-white/[0.055] p-8 leading-8 text-white/72 md:p-10">
          STRUKTIVA verbindet Texte, Kundenkommunikation, Webseiten, Unternehmensstruktur und professionelle App-Systeme. Dadurch entsteht eine digitale Basis, mit der kleine Unternehmen professionell auftreten, verständlicher kommunizieren und im Alltag organisierter arbeiten können.
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="kontakt" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-struktivaGold/25 bg-gradient-to-br from-struktivaGold/15 via-white/[0.06] to-blue-500/10 p-8 text-center shadow-gold md:p-14">
        <Rocket className="mx-auto h-12 w-12 text-struktivaGold" />
        <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">Lass uns dein Unternehmen professioneller aufstellen.</h2>
        <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/74">
          Du möchtest bessere Sichtbarkeit, klarere Abläufe, eine überzeugende Webseite oder eine professionelle digitale Lösung für dein Unternehmen? Dann stelle jetzt eine unverbindliche Anfrage.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a href={`mailto:${contactDetails.email}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-struktivaGold px-7 py-4 font-semibold text-struktivaDark transition hover:scale-[1.02]">
            Anfrage senden <ArrowRight className="h-5 w-5" />
          </a>
          <a href={contactDetails.whatsapp} className="inline-flex items-center justify-center rounded-full border border-white/18 px-7 py-4 font-semibold text-white transition hover:border-struktivaGold hover:text-struktivaGold">
            Per WhatsApp kontaktieren
          </a>
        </div>
        <p className="mt-5 text-sm text-white/45">E-Mail: {contactDetails.email} · {contactDetails.phoneText}</p>
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
            alt="STRUKTIVA Unternehmerarchitektur"
            className="h-12 w-fit max-w-[230px] rounded-xl object-contain opacity-90"
          />
          <p>© {new Date().getFullYear()} STRUKTIVA Business-Service. Alle Rechte vorbehalten.</p>
          <p className="text-white/55">Kontakt: {contactDetails.email}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <a href={siteLinks.impressum} className="hover:text-struktivaGold">Impressum</a>
          <a href={siteLinks.datenschutz} className="hover:text-struktivaGold">Datenschutz</a>
          <a href={siteLinks.widerruf} className="hover:text-struktivaGold">Widerruf</a>
          <a href={siteLinks.contact} className="hover:text-struktivaGold">Kontakt</a>
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
      <ProblemSolution />
      <Services />
      <Pricing />
      <Apps />
      <Targets />
      <Process />
      <Why />
      <Contact />
      <Footer />
    </main>
  )
}

function LegalHeader() {
  return (
    <header className="border-b border-white/12 bg-struktivaDark/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href={siteLinks.home} className="flex min-w-0 items-center gap-3">
          <img
            src="/struktiva-logo.jpeg"
            alt="STRUKTIVA Unternehmerarchitektur"
            className="h-[38px] w-auto max-w-[190px] rounded-xl object-contain shadow-[0_0_22px_rgba(232,194,94,0.14)] md:h-12 md:max-w-[240px]"
          />
        </a>
        <a href={siteLinks.home} className="rounded-full border border-struktivaGold/40 px-5 py-2 text-sm font-medium text-struktivaGold transition hover:bg-struktivaGold hover:text-struktivaDark">
          Zur Startseite
        </a>
      </div>
    </header>
  )
}

function LegalSection({ title, children }) {
  return (
    <section className="rounded-[1.7rem] border border-white/12 bg-white/[0.05] p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-5 space-y-4 text-sm leading-7 text-white/74 md:text-base">{children}</div>
    </section>
  )
}

function LegalLayout({ eyebrow, title, intro, children }) {
  return (
    <main className="min-h-screen bg-struktivaDark text-white selection:bg-struktivaGold selection:text-struktivaDark">
      <LegalHeader />
      <section className="relative overflow-hidden px-5 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(246,217,160,0.14),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(58,92,154,0.28),transparent_30%),linear-gradient(135deg,#0b1020,#111a2e_46%,#17213a)]" />
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-struktivaGold">{eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 md:text-lg">{intro}</p>
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
      intro="Diese Seite enthält die Anbieterkennzeichnung für STRUKTIVA Business-Service."
    >
      <LegalSection title="Angaben gemäß § 5 DDG">
        <p>STRUKTIVA Business-Service</p>
        <p>Jessica Wacker</p>
        <p>Ostlandstraße 3</p>
        <p>75365 Calw</p>
        <p>Deutschland</p>
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>E-Mail: <a href={`mailto:${contactDetails.email}`} className="text-struktivaGold">{contactDetails.email}</a></p>
        <p>Telefon / WhatsApp: 070518162292</p>
      </LegalSection>

      <LegalSection title="Vertreten durch">
        <p>Jessica Wacker</p>
      </LegalSection>

      <LegalSection title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
        <p>Jessica Wacker</p>
        <p>Ostlandstraße 3</p>
        <p>75365 Calw</p>
      </LegalSection>

      <LegalSection title="Hinweis">
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
      intro="Diese Datenschutzerklärung informiert darüber, welche personenbezogenen Daten beim Besuch dieser Website und bei der Kontaktaufnahme verarbeitet werden."
    >
      <LegalSection title="1. Datenschutz auf einen Blick">
        <p>Der Schutz personenbezogener Daten ist mir wichtig. Diese Datenschutzerklärung informiert darüber, welche personenbezogenen Daten beim Besuch dieser Webseite und bei einer Kontaktaufnahme verarbeitet werden.</p>
        <p>Personenbezogene Daten sind alle Daten, mit denen eine Person direkt oder indirekt identifiziert werden kann, zum Beispiel Name, E-Mail-Adresse, Telefonnummer oder IP-Adresse.</p>
      </LegalSection>

      <LegalSection title="2. Verantwortlicher">
        <p>Verantwortlich für die Datenverarbeitung auf dieser Webseite ist:</p>
        <p>STRUKTIVA Business-Service</p>
        <p>Jessica Wacker</p>
        <p>Ostlandstraße 3</p>
        <p>75365 Calw</p>
        <p>Deutschland</p>
        <p>E-Mail: <a href={`mailto:${contactDetails.email}`} className="text-struktivaGold">{contactDetails.email}</a></p>
        <p>Telefon / WhatsApp: 070518162292</p>
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
        <p>Falls auf der Webseite ein Kontaktformular verwendet wird, werden die dort eingegebenen Daten verarbeitet, um die Anfrage zu beantworten.</p>
        <p>Dazu können gehören:</p>
        <p>- Name</p>
        <p>- E-Mail-Adresse</p>
        <p>- Telefonnummer</p>
        <p>- Unternehmensname</p>
        <p>- Nachrichtentext</p>
        <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO.</p>
        <p>Falls aktuell kein Kontaktformular verwendet wird, diesen Abschnitt ausblenden oder entfernen.</p>
      </LegalSection>

      <LegalSection title="7. Cookies und Tracking">
        <p>Diese Webseite verwendet derzeit keine eigenen Analyse- oder Marketing-Cookies.</p>
        <p>Falls später Tools wie Google Analytics, Meta Pixel, Vercel Analytics, Newsletter-Tools oder andere Tracking-/Analyse-Dienste eingebunden werden, muss diese Datenschutzerklärung entsprechend angepasst werden.</p>
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
      intro="Diese Widerrufsbelehrung ist für Verbraucher als eigene Unterseite dargestellt und kann je nach konkretem Angebot weiter angepasst werden."
    >
      <LegalSection title="Widerrufsrecht für Verbraucher">
        <p>Verbraucher haben grundsätzlich das Recht, binnen vierzehn Tagen ohne Angabe von Gründen einen Vertrag zu widerrufen, sofern ein gesetzliches Widerrufsrecht besteht.</p>
        <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.</p>
      </LegalSection>

      <LegalSection title="Ausübung des Widerrufs">
        <p>Um dein Widerrufsrecht auszuüben, musst du mich mittels einer eindeutigen Erklärung über deinen Entschluss informieren, diesen Vertrag zu widerrufen.</p>
      </LegalSection>

      <LegalSection title="Kontakt für Widerruf">
        <p>STRUKTIVA Business-Service</p>
        <p>Jessica Wacker</p>
        <p>Ostlandstraße 3</p>
        <p>75365 Calw</p>
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
        <p>STRUKTIVA Business-Service</p>
        <p>Sven Wacker</p>
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
      intro="Du möchtest dein Unternehmen sichtbarer, strukturierter oder digital professioneller aufstellen? Dann schreibe mir kurz, wobei du Unterstützung brauchst."
    >
      <LegalSection title="Kontakt zu STRUKTIVA">
        <p>Dann schreibe mir kurz, wobei du Unterstützung brauchst.</p>
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

      <LegalSection title="Kontaktmöglichkeiten">
        <p>E-Mail:</p>
        <p><a href={`mailto:${contactDetails.email}`} className="text-struktivaGold">{contactDetails.email}</a></p>
        <p>Telefon / WhatsApp:</p>
        <p>070518162292</p>
        <p>WhatsApp-Link:</p>
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
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  return pathname
}

function AppRouter() {
  const currentPath = getCurrentPath()

  if (currentPath === '/impressum') {
    return <ImpressumPage />
  }

  if (currentPath === '/datenschutz') {
    return <DatenschutzPage />
  }

  if (currentPath === '/widerruf') {
    return <WiderrufPage />
  }

  if (currentPath === '/kontakt') {
    return <ContactPage />
  }

  if (currentPath === '/') {
    return <HomePage />
  }

  return <NotFoundPage />
}

createRoot(document.getElementById('root')).render(<AppRouter />)
