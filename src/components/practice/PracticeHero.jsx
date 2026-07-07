import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { currentNavigation } from '../../routing/routeConfig.js'

const situations = ['Lokaler Betrieb', 'Dienstleister', 'Handwerker', 'Einzelperson']
const outputs = ['sichtbarer Auftritt', 'klarer Kundenweg', 'passende Abläufe']

function PracticeHeroVisual({ reducedMotion }) {
  return (
    <motion.div
      className="struktiva-practice-hero-visual"
      aria-label="Unterschiedliche Unternehmenssituationen führen zu unterschiedlichen digitalen Strukturen"
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <ol className="struktiva-practice-hero-visual__situations">
        {situations.map((situation, index) => (
          <li key={situation}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{situation}</strong>
          </li>
        ))}
      </ol>
      <div className="struktiva-practice-hero-visual__middle">
        <small>unterschiedliche Anforderungen</small>
        <strong>nicht eine Standardlösung</strong>
      </div>
      <ol className="struktiva-practice-hero-visual__outputs">
        {outputs.map((output) => (
          <li key={output}>{output}</li>
        ))}
      </ol>
    </motion.div>
  )
}

export default function PracticeHero() {
  const reducedMotion = useReducedMotion()
  const primaryCta = currentNavigation.primaryCta

  return (
    <section className="struktiva-practice-hero" aria-labelledby="struktiva-practice-hero-title">
      <div className="struktiva-practice-hero__inner">
        <motion.div
          className="struktiva-practice-hero__copy"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-practice-eyebrow">Praxis statt Produktkatalog</p>
          <h1 id="struktiva-practice-hero-title">
            Digitale Lösungen werden verständlich, wenn man sieht, wie sie im Alltag zusammenspielen.
          </h1>
          <div className="struktiva-practice-hero__lead">
            <p>Praxisbeispiele zeigen mehr als einzelne Webseiten oder Funktionen.</p>
            <p>
              Sie zeigen, wie Sichtbarkeit, Kundenkontakt und digitale Abläufe je nach Unternehmen unterschiedlich verbunden werden können.
            </p>
          </div>
          <div className="struktiva-practice-hero__actions">
            <a className="struktiva-practice-primary" href={primaryCta.href}>
              <span>{primaryCta.label}</span>
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="struktiva-practice-secondary" href="/loesungen">
              <span>Lösungen verstehen</span>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </motion.div>
        <PracticeHeroVisual reducedMotion={Boolean(reducedMotion)} />
      </div>
    </section>
  )
}
