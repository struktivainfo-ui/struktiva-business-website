import { motion, useReducedMotion } from 'framer-motion'

const worlds = [
  {
    key: 'visibility',
    number: '01',
    title: 'Sichtbarkeit und Kundengewinnung',
    question: 'Wird Ihr Unternehmen gefunden - und ist danach klar, was Interessenten tun sollen?',
    intro:
      'Digitale Sichtbarkeit bedeutet mehr als eine vorhandene Website. Entscheidend ist der Weg von der Suche oder Empfehlung über den ersten Eindruck bis zur Kontaktaufnahme.',
    situations: [
      'Die Website ist vorhanden, erzeugt aber wenig Orientierung.',
      'Google und Website wirken nicht wie ein gemeinsamer Kundenweg.',
      'Bewertungen sind vorhanden, werden aber kaum sichtbar genutzt.',
      'Kontaktmöglichkeiten sind vorhanden, aber nicht klar priorisiert.',
      'Mobile Nutzer müssen zu lange nach dem nächsten Schritt suchen.',
    ],
    buildingBlocks: [
      'Website und Landingpages',
      'Google-Sichtbarkeit',
      'Bewertungswege',
      'QR-Strukturen',
      'klare Kontaktwege',
      'mobile Nutzerführung',
      'strukturierte Anfragewege',
    ],
  },
  {
    key: 'customer',
    number: '02',
    title: 'Kundenführung und Kundenbindung',
    question: 'Was passiert zwischen dem ersten Kontakt und einer langfristigen Kundenbeziehung?',
    intro:
      'Kundenkontakt besteht häufig aus vielen einzelnen Berührungspunkten. WhatsApp, Telefon, E-Mail, Formulare, Kundendaten, Bewertungen und Wiederkehr funktionieren besser, wenn der Weg für Betrieb und Kunde verständlich bleibt.',
    situations: [
      'Anfragen kommen über verschiedene Kanäle.',
      'Informationen müssen mehrfach übertragen werden.',
      'Kundendaten liegen an mehreren Stellen.',
      'Bewertungen entstehen eher zufällig.',
      'Kundenbindung hängt vollständig von manueller Erinnerung ab.',
      'Digitale Kundenkarten oder Bonusmodelle fehlen oder arbeiten isoliert.',
    ],
    buildingBlocks: [
      'Kontaktstruktur',
      'WhatsApp-Prozesse',
      'digitale Formulare',
      'Kundenverwaltung',
      'Kundenkarten',
      'Bonusstrukturen',
      'Bewertungsprozesse',
      'Rückgewinnungs- und Wiederkehrprozesse',
    ],
  },
  {
    key: 'automation',
    number: '03',
    title: 'Digitale Abläufe und Automatisierung',
    question: 'Welche Aufgaben müssen heute immer wieder von Hand organisiert werden?',
    intro:
      'Nicht jede manuelle Aufgabe muss automatisiert werden. Aber wiederkehrende Abläufe können häufig klarer strukturiert, besser dokumentiert oder sinnvoll unterstützt werden.',
    situations: [
      'Anfragen müssen manuell übertragen werden.',
      'Aufgaben entstehen aus Nachrichten und werden separat notiert.',
      'Nachfassen wird vergessen oder individuell organisiert.',
      'Informationen liegen in mehreren Systemen.',
      'Wiederkehrende Antworten werden ständig neu geschrieben.',
      'Interne Übersichten fehlen.',
    ],
    buildingBlocks: [
      'CRM-Strukturen',
      'interne Apps',
      'Dashboards',
      'Aufgabenlogik',
      'Anfrageprozesse',
      'Nachfasslogik',
      'Benachrichtigungen',
      'Automatisierungen',
      'KI-Unterstützung bei geeigneten Aufgaben',
    ],
  },
]

function VisibilityVisual() {
  const steps = ['Entdecken', 'Verstehen', 'Vertrauen', 'Kontakt']
  return (
    <div className="struktiva-solutions-world-visual struktiva-solutions-world-visual--visibility" aria-label="Customer Journey von Entdecken bis Kontakt">
      <ol>
        {steps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step}</strong>
            {index === 0 ? <small>Google, Empfehlung, QR</small> : null}
            {index === 1 ? <small>Website, Angebot, Sprache</small> : null}
            {index === 2 ? <small>Bewertungen, Belege, Klarheit</small> : null}
            {index === 3 ? <small>Telefon, Formular, WhatsApp</small> : null}
          </li>
        ))}
      </ol>
    </div>
  )
}

function CustomerVisual() {
  const steps = ['Erster Kontakt', 'Kunde', 'Betreuung', 'Wiederkehr', 'Bewertung', 'erneuter Kontakt']
  return (
    <div className="struktiva-solutions-world-visual struktiva-solutions-world-visual--customer" aria-label="Kundenbeziehung über mehrere Zeitpunkte">
      <ol>
        {steps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
    </div>
  )
}

function AutomationVisual() {
  const steps = ['Anfrage', 'Information', 'Aufgabe', 'Bearbeitung', 'Nachfassen', 'Abschluss', 'weiterer Prozess']
  return (
    <div className="struktiva-solutions-world-visual struktiva-solutions-world-visual--automation" aria-label="Interner Ablauf von Anfrage bis weiterem Prozess">
      <ol>
        {steps.map((step, index) => (
          <li key={step} data-support={step === 'Nachfassen' || step === 'weiterer Prozess' ? 'true' : undefined}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
    </div>
  )
}

function WorldVisual({ type }) {
  if (type === 'customer') return <CustomerVisual />
  if (type === 'automation') return <AutomationVisual />
  return <VisibilityVisual />
}

function SolutionsWorld({ world, index, reducedMotion }) {
  return (
    <motion.article
      className={`struktiva-solutions-world struktiva-solutions-world--${world.key}`}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="struktiva-solutions-world__copy">
        <p className="struktiva-solutions-world__number">{world.number}</p>
        <h2>{world.title}</h2>
        <p className="struktiva-solutions-world__question">{world.question}</p>
        <p className="struktiva-solutions-world__intro">{world.intro}</p>
      </div>

      <WorldVisual type={world.key} />

      <div className="struktiva-solutions-world__lists">
        <div>
          <h3>Typische Situationen</h3>
          <ul>
            {world.situations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Mögliche Bausteine</h3>
          <ul>
            {world.buildingBlocks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  )
}

export default function SolutionsWorlds() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-solutions-worlds" aria-label="Drei STRUKTIVA Lösungswelten">
      <div className="struktiva-solutions-worlds__inner">
        {worlds.map((world, index) => (
          <SolutionsWorld key={world.key} world={world} index={index} reducedMotion={Boolean(reducedMotion)} />
        ))}
      </div>
    </section>
  )
}
