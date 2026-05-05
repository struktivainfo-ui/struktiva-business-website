import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, BadgeCheck, BarChart3, BriefcaseBusiness, CalendarDays, CheckCircle2, ClipboardList, Globe2, LayoutDashboard, MessageCircle, PenLine, Rocket, Smartphone, Sparkles, UsersRound, Euro, ShieldCheck } from 'lucide-react'
import './styles.css'

const navItems = [
  ['Start', '#start'],
  ['Leistungen', '#leistungen'],
  ['Preise', '#preise'],
  ['App-Lösungen', '#apps'],
  ['Für wen', '#zielgruppen'],
  ['Ablauf', '#ablauf'],
  ['Kontakt', '#kontakt'],
]

const services = [
  { icon: PenLine, title: 'Werbung & Content', text: 'Professionelle Texte für Social Media, Google, Flyer, Anzeigen, Webseiten, Landingpages und digitale Produkte.' },
  { icon: Globe2, title: 'Google & lokale Sichtbarkeit', text: 'Unternehmensbeschreibungen, Google-Beiträge, Bewertungsanfragen, FAQ-Texte und lokale Suchbegriffe.' },
  { icon: MessageCircle, title: 'WhatsApp-Business-Systeme', text: 'Schnellantworten, Termintexte, Begrüßungen, Abwesenheitsnachrichten und Kundenkommunikation.' },
  { icon: LayoutDashboard, title: 'Landingpages & Verkaufsseiten', text: 'Seitenstruktur, Headlines, Verkaufstexte, FAQ, Call-to-Action, Angebotslogik und Conversion-Texte.' },
  { icon: ClipboardList, title: 'Digitale Struktur-Systeme', text: 'Checklisten, Wochenpläne, Kundenprozesse, Mitarbeiterabläufe, Bewertungsprozesse und interne Vorlagen.' },
  { icon: Smartphone, title: 'Professionelle Unternehmens-Apps', text: 'Individuelle App-Lösungen für Termine, Kundenverwaltung, Aufgaben, Checklisten, Mitarbeiterübersichten und Organisation.' },
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
    price: '149 €',
    description: 'Für kleine Unternehmen, die online professioneller wirken möchten.',
    features: [
      'kurze Analyse der aktuellen Außenwirkung',
      'optimierter Google-Unternehmenstext',
      '10 Social-Media-Texte',
      '5 WhatsApp-Business-Vorlagen',
      'Bewertungsanfrage für Kunden',
      'konkrete Empfehlungen für bessere Sichtbarkeit',
    ],
    cta: 'Starterpaket anfragen',
    highlight: false,
  },
  {
    title: 'Google & WhatsApp Business',
    price: '199 €',
    description: 'Für lokale Betriebe, die besser gefunden werden und professioneller kommunizieren möchten.',
    features: [
      'optimierte Google-Unternehmensbeschreibung',
      '10 Google-Beiträge',
      'FAQ-Texte für Google',
      'Bewertungsanfrage-Text',
      '10 WhatsApp-Schnellantworten',
      'Begrüßungs- und Abwesenheitsnachricht',
      'Terminbestätigungs- und Nachfass-Texte',
    ],
    cta: 'Google & WhatsApp anfragen',
    highlight: false,
  },
  {
    title: 'Social-Media & Content Paket',
    price: '249 €',
    description: 'Für Unternehmen, die regelmäßig bessere Inhalte veröffentlichen möchten.',
    features: [
      '30 Tage Contentplan',
      '20 Social-Media-Texte',
      '20 starke Hooks',
      '10 Story-Ideen',
      'Titel, Beschreibungen und Hashtags',
      'Ideen für TikTok, Instagram, YouTube Shorts und Pinterest',
    ],
    cta: 'Content-Paket anfragen',
    highlight: false,
  },
  {
    title: 'STRUKTIVA Business Struktur',
    price: '399 €',
    description: 'Für Unternehmen, die Werbung, Kundenkommunikation und interne Abläufe klarer aufbauen möchten.',
    features: [
      '30-Tage-Contentplan',
      'Landingpage-Text oder Angebotsseite',
      'Google-Beiträge',
      'WhatsApp-Business-System',
      'Bewertungsprozess',
      'Kundenkommunikations-Vorlagen',
      'interne Checklisten',
      'Ablaufstruktur für den Unternehmensalltag',
    ],
    cta: 'Business Struktur anfragen',
    highlight: true,
  },
  {
    title: 'App-Konzept Paket',
    price: '299 €',
    description: 'Für Unternehmen, die prüfen möchten, ob eine eigene Unternehmens-App sinnvoll ist.',
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
    cta: 'App-Konzept anfragen',
    highlight: false,
  },
  {
    title: 'Professionelle Unternehmens-App',
    price: 'ab 1.490 €',
    subtitle: 'Monatliche Betreuung ab 49 € / Monat',
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
    ],
    careTitle: 'Die monatliche Betreuung beinhaltet:',
    care: [
      'Hosting',
      'technische Bereitstellung',
      'kleinere Anpassungen',
      'Pflege und Funktionsprüfung',
      'Support bei Bedienfragen',
    ],
    cta: 'App-Lösung anfragen',
    highlight: true,
    wide: true,
  },
  {
    title: 'Monatliche STRUKTIVA Betreuung',
    price: 'ab 99 € / Monat',
    description: 'Für Unternehmen, die dauerhaft Unterstützung bei Sichtbarkeit, Texten, Struktur oder digitalen Anpassungen möchten.',
    features: [
      'Basic – 99 € / Monat',
      'Standard – 199 € / Monat',
      'Premium – 349 € / Monat',
    ],
    cta: 'Betreuung anfragen',
    highlight: false,
  },
]

const targets = ['Friseursalons', 'Kosmetikstudios', 'Fußpflege', 'Nagelstudios', 'Handwerksbetriebe', 'Cafés', 'Lokale Dienstleister', 'Kleine Einzelhändler', 'Coaches & Berater', 'Praxen & Studios']

const steps = [
  ['01', 'Erstgespräch', 'Wir schauen gemeinsam, wo dein Unternehmen aktuell steht: Sichtbarkeit, Kundenkommunikation, Abläufe und digitale Möglichkeiten.'],
  ['02', 'Analyse', 'Ich prüfe, welche Bereiche den größten Nutzen bringen: bessere Werbung, klarere Texte, Struktur oder ein digitales App-System.'],
  ['03', 'Konzept', 'Du bekommst eine klare Empfehlung, welche Lösung zu deinem Unternehmen passt und welche Schritte sinnvoll sind.'],
  ['04', 'Umsetzung', 'Ich entwickle die passenden Texte, Vorlagen, Struktur-Systeme oder professionellen App-Lösungen.'],
  ['05', 'Übergabe', 'Du bekommst nutzbare Ergebnisse, die du direkt in deinem Unternehmen einsetzen kannst.'],
]

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/12 bg-struktivaDark/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#start" className="group flex items-center gap-3" aria-label="STRUKTIVA Startseite">
          <img
            src="/struktiva-logo.jpeg"
            alt="STRUKTIVA Unternehmerarchitektur"
            className="h-[38px] w-auto max-w-[190px] rounded-xl object-contain shadow-[0_0_22px_rgba(232,194,94,0.14)] md:h-12 md:max-w-[240px]"
          />
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm text-white/74 transition hover:text-struktivaGold">{label}</a>
          ))}
        </nav>
        <a href="#kontakt" className="hidden rounded-full border border-struktivaGold/40 px-5 py-2 text-sm font-medium text-struktivaGold transition hover:bg-struktivaGold hover:text-struktivaDark md:inline-flex">
          Anfrage stellen
        </a>
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
    <section id="start" className="relative overflow-hidden px-5 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
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
            <Sparkles className="h-4 w-4 text-struktivaGold" /> Sichtbarkeit. Struktur. App-Systeme.
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
            Digitaler <span className="block bg-gradient-to-r from-struktivaGold to-struktivaCream bg-clip-text text-transparent">Business-Service</span>
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-white/82 md:text-2xl">
            Werbung, Struktur & professionelle digitale Lösungen für kleine Unternehmen.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            Ich unterstütze kleine Unternehmen, Selbstständige und lokale Betriebe dabei, sichtbarer, organisierter und digital besser aufgestellt zu sein – mit klaren Inhalten, strukturierten Abläufen und professionellen App-Lösungen.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#kontakt" className="inline-flex items-center justify-center gap-2 rounded-full bg-struktivaGold px-7 py-4 font-semibold text-struktivaDark shadow-gold transition hover:scale-[1.02]">
              Unverbindlich anfragen <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#apps" className="inline-flex items-center justify-center rounded-full border border-white/18 px-7 py-4 font-semibold text-white transition hover:border-struktivaGold hover:text-struktivaGold">
              App-Lösungen ansehen
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
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Viele Unternehmen leisten gute Arbeit – aber digital sieht man davon zu wenig.</h2>
          <p className="mt-6 leading-8 text-white/74">Viele kleine Unternehmen haben keine klare digitale Außenwirkung. Social Media wird unregelmäßig genutzt, Google-Beiträge fehlen, WhatsApp läuft unstrukturiert und interne Abläufe sind oft nicht sauber dokumentiert.</p>
        </div>
        <div className="rounded-[2rem] border border-struktivaGold/20 bg-struktivaGold/[0.08] p-8 shadow-gold md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-struktivaGold">Lösung</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">STRUKTIVA verbindet Sichtbarkeit, Struktur und digitale Systeme.</h2>
          <p className="mt-6 leading-8 text-white/72">Es geht nicht um einzelne Posts oder lose Ideen. STRUKTIVA entwickelt ein digitales Gesamtbild aus Außenwirkung, klarer Kommunikation, internen Abläufen und professionellen App-Systemen.</p>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="leistungen" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Leistungen" title="Professionelle digitale Unterstützung für kleine Unternehmen." text="Von Werbung bis Organisation: STRUKTIVA entwickelt klare Inhalte, bessere Abläufe und digitale Lösungen, die zu kleinen Unternehmen passen." />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group rounded-[1.75rem] border border-white/12 bg-white/[0.055] p-7 transition hover:-translate-y-1 hover:border-struktivaGold/35 hover:bg-white/[0.075]">
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


function Pricing() {
  return (
    <section id="preise" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Angebote & Preise"
          title="Faire Einstiegspakete für Sichtbarkeit, Struktur und digitale Lösungen."
          text="STRUKTIVA bietet übersichtliche Einstiegspakete für kleine Unternehmen, Selbstständige und lokale Betriebe. So kannst du klein starten und später erweitern, wenn der Bedarf wächst."
        />
        <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-struktivaGold/20 bg-struktivaCream/[0.06] p-5 text-center text-sm leading-7 text-white/74">
          Zum Start sind die Pakete bewusst schlank kalkuliert. So können erste Kunden fair einsteigen, während STRUKTIVA Referenzen, Ergebnisse und langfristige Betreuung aufbaut.
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pricePackages.map((pkg) => (
            <article
              key={pkg.title}
              className={`relative flex h-full flex-col rounded-[1.75rem] border p-7 shadow-premium transition hover:-translate-y-1 ${
                pkg.highlight
                  ? 'border-struktivaGold/45 bg-gradient-to-br from-struktivaGold/[0.14] via-white/[0.06] to-blue-500/[0.08] shadow-gold'
                  : 'border-white/12 bg-white/[0.055] hover:border-struktivaGold/30'
              } ${pkg.wide ? 'xl:col-span-2' : ''}`}
            >
              {pkg.highlight && (
                <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-struktivaGold/35 bg-struktivaGold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-struktivaGold">
                  <ShieldCheck className="h-4 w-4" /> Empfehlung
                </div>
              )}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-2 inline-flex rounded-full bg-struktivaCream/10 px-3 py-1 text-xs font-medium text-struktivaCream">Einführungspreis</div>
                  <h3 className="text-2xl font-semibold text-white">{pkg.title}</h3>
                  <p className="mt-3 leading-7 text-white/64">{pkg.description}</p>
                </div>
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-struktivaGold/12 text-struktivaGold sm:flex">
                  <Euro className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-7">
                <p className="text-4xl font-semibold tracking-tight text-struktivaGold">{pkg.price}</p>
                {pkg.subtitle && <p className="mt-2 text-sm font-medium text-white/72">{pkg.subtitle}</p>}
              </div>
              <ul className="mt-7 space-y-3 text-sm leading-6 text-white/72">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-struktivaGold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {pkg.care && (
                <div className="mt-7 rounded-2xl border border-white/12 bg-struktivaDark/45 p-5">
                  <p className="font-semibold text-white">{pkg.careTitle}</p>
                  <ul className="mt-4 space-y-2 text-sm text-white/74">
                    {pkg.care.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-struktivaGold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <a
                href={`mailto:info.struktiva@gmail.com?subject=${encodeURIComponent(pkg.title + ' anfragen')}`}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-struktivaGold/40 px-5 py-3 text-sm font-semibold text-struktivaGold transition hover:bg-struktivaGold hover:text-struktivaDark"
              >
                {pkg.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-[1.5rem] border border-white/12 bg-white/[0.055] p-6 text-center text-sm leading-7 text-white/72">
          Alle Preise verstehen sich als faire Einführungspreise zum Start. Der genaue Umfang hängt vom jeweiligen Unternehmen, den gewünschten Leistungen und dem technischen Aufwand ab. Nach einer kurzen Analyse erhältst du ein klares Angebot.
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
          <SectionHeader centered={false} eyebrow="App-Lösungen" title="Professionelle Unternehmens-Apps für bessere Abläufe." text="STRUKTIVA entwickelt individuelle App-Systeme für Unternehmen, die Abläufe digital abbilden, Übersicht schaffen und im Alltag zuverlässig funktionieren." />
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
        <SectionHeader eyebrow="Für wen" title="Für Betriebe, die gute Arbeit leisten – und digital stärker auftreten wollen." text="STRUKTIVA eignet sich besonders für lokale Unternehmen mit Kunden-, Termin-, Mitarbeiter- oder Organisationsprozessen." />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {targets.map((target) => (
            <span key={target} className="rounded-full border border-white/12 bg-white/[0.055] px-5 py-3 text-white/72">{target}</span>
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
          <h2 className="text-3xl font-semibold text-white md:text-5xl">Mehr als Werbung: ein klarer digitaler Auftritt.</h2>
        </div>
        <div className="rounded-[2rem] border border-white/12 bg-white/[0.055] p-8 leading-8 text-white/72 md:p-10">
          STRUKTIVA verbindet Werbung, klare Kommunikation, Unternehmensstruktur und professionelle App-Systeme. Dadurch entsteht eine digitale Basis, mit der kleine Unternehmen professionell auftreten, verständlicher kommunizieren und im Alltag organisierter arbeiten können.
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
        <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/74">Du möchtest bessere Sichtbarkeit, klarere Abläufe oder eine professionelle digitale Lösung für dein Unternehmen? Dann stelle jetzt eine unverbindliche Anfrage.</p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="mailto:info.struktiva@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-struktivaGold px-7 py-4 font-semibold text-struktivaDark transition hover:scale-[1.02]">
            Anfrage senden <ArrowRight className="h-5 w-5" />
          </a>
          <a href="https://wa.me/49DEINENUMMER" className="inline-flex items-center justify-center rounded-full border border-white/18 px-7 py-4 font-semibold text-white transition hover:border-struktivaGold hover:text-struktivaGold">
            Per WhatsApp kontaktieren
          </a>
        </div>
        <p className="mt-5 text-sm text-white/45">E-Mail: info.struktiva@gmail.com · Telefon / WhatsApp: auf Anfrage oder echte Nummer eintragen</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/12 px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-white/48 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <img src="/struktiva-logo.jpeg" alt="STRUKTIVA Unternehmerarchitektur" className="h-12 w-fit max-w-[230px] rounded-xl object-contain opacity-90" />
          <p>© {new Date().getFullYear()} STRUKTIVA Business-Service. Alle Rechte vorbehalten.</p>
          <p className="text-white/55">Kontakt: info.struktiva@gmail.com</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <a href="#" className="hover:text-struktivaGold">Impressum</a>
          <a href="#" className="hover:text-struktivaGold">Datenschutz</a>
          <a href="#" className="hover:text-struktivaGold">Widerruf</a>
          <a href="#kontakt" className="hover:text-struktivaGold">Kontakt</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
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

createRoot(document.getElementById('root')).render(<App />)
