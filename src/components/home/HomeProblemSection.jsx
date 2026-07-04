import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { currentNavigation } from '../../routing/routeConfig.js'

const journeySteps = [
  'Gefunden werden',
  'Website',
  'Kontakt',
  'Anfrage',
  'Bearbeitung',
  'Kunde',
  'Wiederkehr oder Bewertung',
]

const problemAreas = [
  {
    title: 'Interessenten finden den Betrieb - aber der nächste Schritt ist unklar',
    text: 'Google, Website und Kontaktmöglichkeiten sind vorhanden, führen den Interessenten aber nicht immer klar und einfach zur Anfrage.',
  },
  {
    title: 'Kundenkontakt verteilt sich auf zu viele einzelne Wege',
    text: 'Telefon, E-Mail, WhatsApp, Formulare und persönliche Notizen funktionieren nebeneinander. Informationen müssen dadurch mehrfach gesucht, übertragen oder nachgehalten werden.',
  },
  {
    title: 'Wiederkehrende Aufgaben bleiben unnötig manuell',
    text: 'Nachfassen, Kundenpflege, Erinnerungen, Bewertungen und interne Aufgaben werden immer wieder von Hand erledigt, obwohl sinnvolle digitale Abläufe Arbeit abnehmen könnten.',
  },
]

function JourneyBreakVisual({ reducedMotion }) {
  return (
    <div className="struktiva-problem-journey" aria-label="Digitaler Kundenweg mit Bruchstellen">
      <ol className="struktiva-problem-journey__steps">
        {journeySteps.map((step, index) => (
          <motion.li
            key={step}
            className="struktiva-problem-journey__step"
            data-gap={index === 1 || index === 3 || index === 5 ? 'true' : undefined}
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.42, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="struktiva-problem-journey__dot" aria-hidden="true" />
            <span>{step}</span>
          </motion.li>
        ))}
      </ol>
      <span className="struktiva-problem-journey__tracker" aria-hidden="true" />
    </div>
  )
}

export default function HomeProblemSection() {
  const reducedMotion = useReducedMotion()
  const solutionLink =
    currentNavigation.primary.find((item) => item.transitionFor === '/loesungen') ||
    currentNavigation.primary.find((item) => item.href === '/leistungen')

  return (
    <section className="struktiva-home-problem" aria-labelledby="struktiva-home-problem-title">
      <div className="struktiva-home-problem__inner">
        <div className="struktiva-home-problem__intro">
          <p className="struktiva-home-problem__eyebrow">Wenn digital vieles da ist, aber wenig zusammenspielt</p>
          <h2 id="struktiva-home-problem-title">
            Viele Unternehmen haben digitale Lösungen. Das Problem: Sie arbeiten nicht als System.
          </h2>
          <div className="struktiva-home-problem__lead">
            <p>
              Eine Website ist vorhanden. Das Google-Unternehmensprofil ebenfalls. Kunden schreiben über WhatsApp, rufen an oder senden eine E-Mail. Intern werden Daten, Termine und Aufgaben an verschiedenen Stellen verwaltet.
            </p>
            <p>
              Jede einzelne Lösung kann funktionieren - und trotzdem entstehen Lücken, doppelte Arbeit und unnötige Reibung.
            </p>
            <p>
              STRUKTIVA betrachtet deshalb nicht nur einzelne Werkzeuge, sondern den gesamten digitalen Weg durch das Unternehmen.
            </p>
          </div>
        </div>

        <div className="struktiva-home-problem__body">
          <JourneyBreakVisual reducedMotion={Boolean(reducedMotion)} />

          <div className="struktiva-home-problem__areas" aria-label="Typische digitale Brüche">
            {problemAreas.map((area, index) => (
              <motion.article
                key={area.title}
                className="struktiva-home-problem__area"
                initial={reducedMotion ? false : { opacity: 0, x: index % 2 === 0 ? -18 : 18 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.48, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="struktiva-home-problem__area-marker" aria-hidden="true" />
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="struktiva-home-problem__statement"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h3>Nicht mehr Technik. Mehr Struktur.</h3>
            <p>
              Es geht nicht darum, immer neue Systeme einzuführen. Entscheidend ist, vorhandene und notwendige digitale Bausteine so zu verbinden, dass sie im Alltag wirklich zusammenarbeiten.
            </p>
          </div>
          {solutionLink ? (
            <a href={solutionLink.href} className="struktiva-home-problem__link">
              <span>Wie STRUKTIVA diese Bereiche verbindet</span>
              <ArrowRight aria-hidden="true" />
            </a>
          ) : null}
        </motion.div>
      </div>
    </section>
  )
}
