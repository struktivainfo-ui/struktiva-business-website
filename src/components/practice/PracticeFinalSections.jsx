import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { currentNavigation } from '../../routing/routeConfig.js'

const methodInputs = ['Friseursalon', 'Handwerksbetrieb', 'Beratungsunternehmen']
const methodSteps = ['Verstehen', 'Strukturieren', 'Umsetzen', 'Weiterentwickeln']
const qualityChecks = [
  {
    title: 'Klarheit',
    text: 'Informationen müssen schnell verständlich sein, damit Besucher nicht raten müssen.',
  },
  {
    title: 'Verbindung',
    text: 'Website, Kontakt, Bewertungen und Abläufe sollten sich gegenseitig unterstützen.',
  },
  {
    title: 'Alltagstauglichkeit',
    text: 'Eine Lösung muss für Betrieb und Kunden im echten Alltag nutzbar bleiben.',
  },
]

export function PracticeMethodSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-practice-method" aria-labelledby="struktiva-practice-method-title">
      <div className="struktiva-practice-method__inner">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-practice-eyebrow">Gleiche Denkweise</p>
          <h2 id="struktiva-practice-method-title">Gleiche Technik? Nicht unbedingt. Gleiche Denkweise? Ja.</h2>
          <p>
            Ein Friseursalon, ein Handwerksbetrieb und ein Beratungsunternehmen haben unterschiedliche Kundenwege und interne Abläufe.
          </p>
          <p>Deshalb unterscheiden sich auch die sinnvollen digitalen Bausteine.</p>
        </motion.div>
        <motion.div
          className="struktiva-practice-method-flow"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <ol className="struktiva-practice-method-flow__inputs" aria-label="Unterschiedliche Ausgangssituationen">
            {methodInputs.map((input) => (
              <li key={input}>{input}</li>
            ))}
          </ol>
          <ol className="struktiva-practice-method-flow__steps" aria-label="STRUKTIVA Ansatz">
            {methodSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
          <p>unterschiedliche Ergebnisse, derselbe strukturierte Prozess</p>
        </motion.div>
      </div>
    </section>
  )
}

export function PracticeQualitySection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-practice-quality" aria-labelledby="struktiva-practice-quality-title">
      <div className="struktiva-practice-quality__inner">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-practice-eyebrow">Worauf es ankommt</p>
          <h2 id="struktiva-practice-quality-title">Nicht das Design allein entscheidet.</h2>
          <p>
            Eine digitale Lösung wird nicht dadurch sinnvoll, dass sie modern aussieht.
          </p>
          <p>
            Entscheidend ist, ob Informationen verständlich sind, Kontaktwege funktionieren und digitale Bausteine zum tatsächlichen Alltag des Unternehmens passen.
          </p>
        </motion.div>
        <motion.ol
          className="struktiva-practice-quality-logic"
          aria-label="Qualitative Prüflogik"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          {qualityChecks.map((check, index) => (
            <li key={check.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{check.title}</h3>
                <p>{check.text}</p>
              </div>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}

export function PracticeCtaSection() {
  const reducedMotion = useReducedMotion()
  const primaryCta = currentNavigation.primaryCta

  return (
    <section className="struktiva-practice-cta" aria-labelledby="struktiva-practice-cta-title">
      <motion.div
        className="struktiva-practice-cta__inner"
        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="struktiva-practice-eyebrow">Ihr Unternehmen ist kein Demo-Projekt</p>
          <h2 id="struktiva-practice-cta-title">
            Welche digitale Struktur zu Ihrem Unternehmen passt, beginnt mit Ihrer tatsächlichen Situation.
          </h2>
          <p>
            Der Digital-Check betrachtet vorhandene Kontaktpunkte, Kundenwege und Abläufe. Daraus lässt sich einschätzen, wo Veränderungen sinnvoll sind und womit begonnen werden sollte.
          </p>
        </div>
        <div className="struktiva-practice-cta__actions">
          <a className="struktiva-practice-primary" href={primaryCta.href}>
            <span>{primaryCta.label}</span>
            <ArrowRight aria-hidden="true" />
          </a>
          <a className="struktiva-practice-cta__text-link" href="/loesungen">
            Lösungen ansehen
          </a>
        </div>
      </motion.div>
    </section>
  )
}
