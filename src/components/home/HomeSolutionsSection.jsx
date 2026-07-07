import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { currentNavigation } from '../../routing/routeConfig.js'

const solutionWorlds = [
  {
    key: 'visibility',
    marker: '01',
    title: 'Sichtbarkeit und Kundengewinnung',
    message: 'Damit Ihr Unternehmen gefunden wird - und Interessenten wissen, was der nächste Schritt ist.',
    description:
      'Eine Website allein reicht nicht, wenn Google, Bewertungen, Inhalte und Kontaktwege nicht sinnvoll zusammenspielen. STRUKTIVA verbindet die sichtbaren digitalen Kontaktpunkte so, dass aus Aufmerksamkeit ein klarer Weg zur Anfrage entstehen kann.',
    points: ['Website', 'Google-Sichtbarkeit', 'Bewertungen', 'Landingpages', 'klare Kontaktwege'],
    visual: 'visibility',
  },
  {
    key: 'customer',
    marker: '02',
    title: 'Kundenführung und Kundenbindung',
    message:
      'Damit Kundenkontakt nicht aus einzelnen Nachrichten besteht, sondern zu einer verlässlichen Beziehung wird.',
    description:
      'Vom ersten Kontakt bis zur späteren Wiederkehr entstehen viele kleine Berührungspunkte. STRUKTIVA entwickelt klare Wege für Kommunikation, Kundeninformationen, Bewertungen, Kundenkarten und sinnvolle Bindungsprozesse.',
    points: ['Kontakt', 'Kommunikation', 'digitale Formulare', 'Kundenkarten', 'Bonusstrukturen', 'Bewertungen', 'Wiederkehr'],
    visual: 'customer',
  },
  {
    key: 'automation',
    marker: '03',
    title: 'Digitale Abläufe und Automatisierung',
    message: 'Damit wiederkehrende Arbeit nicht jeden Tag neu organisiert werden muss.',
    description:
      'Viele Aufgaben folgen immer wieder ähnlichen Mustern. STRUKTIVA analysiert diese Abläufe und entwickelt digitale Strukturen, die Informationen, Aufgaben und sinnvolle Automatisierungen miteinander verbinden.',
    points: ['CRM', 'interne Apps', 'Dashboards', 'Aufgaben', 'Nachfassen', 'Automatisierung', 'KI-Unterstützung'],
    visual: 'automation',
  },
]

const visibilityJourney = ['Gefunden werden', 'Interesse', 'Website', 'Vertrauen', 'Kontakt']
const customerJourney = ['Kontakt', 'Kunde', 'Betreuung', 'Wiederkehr', 'Bewertung']
const automationJourney = ['Neue Anfrage', 'Datensatz', 'Aufgabe', 'Antwort', 'Nachfassen', 'Abschluss', 'Bewertungsanfrage']

function VisibilityVisual() {
  return (
    <div className="struktiva-solution-visual struktiva-solution-visual--visibility" aria-hidden="true">
      <div className="struktiva-visibility-search">
        <span />
        <strong>Suchanfrage</strong>
        <small>lokaler Bedarf</small>
      </div>
      <div className="struktiva-visibility-browser">
        <div className="struktiva-visibility-browser__bar">
          <span />
          <span />
          <span />
        </div>
        <div className="struktiva-visibility-browser__body">
          <span className="struktiva-visibility-browser__title" />
          <span className="struktiva-visibility-browser__line" />
          <span className="struktiva-visibility-browser__line struktiva-visibility-browser__line--short" />
        </div>
      </div>
      <div className="struktiva-visibility-review">
        <strong>Bewertung</strong>
        <span>Feedback</span>
      </div>
      <ol className="struktiva-visibility-path">
        {visibilityJourney.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <span className="struktiva-solution-visual__motion-line" />
    </div>
  )
}

function CustomerJourneyVisual() {
  return (
    <div className="struktiva-solution-visual struktiva-solution-visual--customer" aria-hidden="true">
      <div className="struktiva-customer-phone">
        <div className="struktiva-customer-phone__top" />
        <div className="struktiva-customer-message struktiva-customer-message--in">Kontaktanfrage</div>
        <div className="struktiva-customer-message struktiva-customer-message--out">Rückmeldung</div>
        <div className="struktiva-customer-card">
          <span>Kundenkarte</span>
          <strong>aktiv</strong>
        </div>
      </div>
      <ol className="struktiva-customer-orbit">
        {customerJourney.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <span className="struktiva-customer-status">Wiederkehr</span>
    </div>
  )
}

function AutomationVisual() {
  return (
    <div className="struktiva-solution-visual struktiva-solution-visual--automation" aria-hidden="true">
      <div className="struktiva-automation-panel">
        <div className="struktiva-automation-panel__head">
          <strong>Workflow</strong>
          <span>geordnet</span>
        </div>
        <ol className="struktiva-automation-flow">
          {automationJourney.map((step, index) => (
            <li key={step} data-emphasis={index === 0 || index === 3 || index === 6 ? 'true' : undefined}>
              {step}
            </li>
          ))}
        </ol>
      </div>
      <div className="struktiva-automation-data">
        <span>CRM</span>
        <span>Aufgaben</span>
        <span>Dashboard</span>
      </div>
    </div>
  )
}

function SolutionVisual({ type }) {
  if (type === 'customer') return <CustomerJourneyVisual />
  if (type === 'automation') return <AutomationVisual />
  return <VisibilityVisual />
}

export default function HomeSolutionsSection() {
  const reducedMotion = useReducedMotion()
  const solutionLink =
    currentNavigation.primary.find((item) => item.transitionFor === '/loesungen') ||
    currentNavigation.primary.find((item) => item.href === '/leistungen')

  return (
    <section className="struktiva-home-solutions" aria-labelledby="struktiva-home-solutions-title">
      <div className="struktiva-home-solutions__inner">
        <motion.div
          className="struktiva-home-solutions__intro"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-home-solutions__eyebrow">Drei Bereiche. Eine digitale Struktur.</p>
          <h2 id="struktiva-home-solutions-title">
            STRUKTIVA verbindet Sichtbarkeit, Kundenführung und Abläufe zu einem System.
          </h2>
          <div className="struktiva-home-solutions__lead">
            <p>Ein Unternehmen wird digital nicht besser, nur weil immer mehr einzelne Werkzeuge dazukommen.</p>
            <p>
              Entscheidend ist, dass Interessenten den Betrieb finden, Kunden einfach Kontakt aufnehmen können und interne Abläufe sinnvoll weiterarbeiten.
            </p>
            <p>
              STRUKTIVA verbindet diese drei Bereiche zu einer digitalen Struktur, die zum Unternehmen und seinem Alltag passt.
            </p>
          </div>
        </motion.div>

        <div className="struktiva-home-solutions__worlds">
          {solutionWorlds.map((world, index) => (
            <motion.article
              key={world.key}
              className={`struktiva-solution-world struktiva-solution-world--${world.key}`}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="struktiva-solution-world__copy">
                <p className="struktiva-solution-world__marker">{world.marker}</p>
                <h3>{world.title}</h3>
                <p className="struktiva-solution-world__message">{world.message}</p>
                <p className="struktiva-solution-world__description">{world.description}</p>
                <ul className="struktiva-solution-world__points" aria-label={`Bausteine: ${world.title}`}>
                  {world.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <SolutionVisual type={world.visual} />
            </motion.article>
          ))}
        </div>

        <motion.div
          className="struktiva-solutions-connection"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="struktiva-solutions-connection__inputs" aria-label="Die drei Bereiche gehören zusammen">
            <span>Sichtbarkeit</span>
            <span>Kundenführung</span>
            <span>Abläufe</span>
          </div>
          <div className="struktiva-solutions-connection__result">
            <small>werden zu</small>
            <strong>einer klaren digitalen Struktur</strong>
          </div>
        </motion.div>

        <motion.div
          className="struktiva-solutions-close"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h3>Die Technik ist nicht das Ziel. Sie ist das Werkzeug.</h3>
            <p>
              Welche Lösung sinnvoll ist, hängt vom Unternehmen, den bestehenden Systemen und den tatsächlichen Abläufen ab.
            </p>
            <p>
              Deshalb beginnt STRUKTIVA nicht mit einem Produktkatalog, sondern mit der Frage: Was muss besser zusammenarbeiten?
            </p>
          </div>
          {solutionLink ? (
            <a href={solutionLink.href} className="struktiva-solutions-close__link">
              <span>Lösungen im Überblick ansehen</span>
              <ArrowRight aria-hidden="true" />
            </a>
          ) : null}
        </motion.div>
      </div>
    </section>
  )
}
