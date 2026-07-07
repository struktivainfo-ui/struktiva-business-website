import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { currentNavigation } from '../../routing/routeConfig.js'

const startingPoints = [
  'Zu wenig Sichtbarkeit',
  'Unklare Kundenwege',
  'Zu viel manuelle Arbeit',
]

function SolutionsHeroVisual({ reducedMotion }) {
  return (
    <div className="struktiva-solutions-hero-visual" aria-label="Drei Ausgangssituationen werden analysiert und zu einer passenden digitalen Struktur geordnet">
      <ol className="struktiva-solutions-hero-visual__inputs">
        {startingPoints.map((point, index) => (
          <motion.li
            key={point}
            initial={reducedMotion ? false : { opacity: 0, x: -18 }}
            animate={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.42, delay: 0.14 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{point}</strong>
          </motion.li>
        ))}
      </ol>

      <motion.div
        className="struktiva-solutions-hero-visual__analysis"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.98 }}
        animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>Verstehen</span>
        <span>Priorisieren</span>
      </motion.div>

      <motion.div
        className="struktiva-solutions-hero-visual__result"
        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
      >
        <small>danach entsteht</small>
        <strong>passende digitale Struktur</strong>
      </motion.div>
    </div>
  )
}

export default function SolutionsHero() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-solutions-hero" aria-labelledby="struktiva-solutions-hero-title">
      <div className="struktiva-solutions-hero__inner">
        <motion.div
          className="struktiva-solutions-hero__copy"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-solutions-eyebrow">Lösungen, die zusammenpassen</p>
          <h1 id="struktiva-solutions-hero-title">
            Digitale Lösungen beginnen nicht bei der Technik. Sondern bei dem, was besser funktionieren soll.
          </h1>
          <div className="struktiva-solutions-hero__lead">
            <p>
              Manche Unternehmen müssen besser gefunden werden. Andere brauchen klarere Kundenwege oder weniger manuelle Arbeit im Alltag.
            </p>
            <p>
              STRUKTIVA betrachtet diese Themen nicht getrennt, sondern verbindet Sichtbarkeit, Kundenführung und digitale Abläufe dort, wo es für das Unternehmen sinnvoll ist.
            </p>
          </div>
          <div className="struktiva-solutions-hero__actions" aria-label="Aktionen der Lösungsseite">
            <a className="struktiva-solutions-primary" href={currentNavigation.primaryCta.href}>
              <span>{currentNavigation.primaryCta.label}</span>
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="struktiva-solutions-secondary" href={currentNavigation.secondaryCta.href}>
              <span>{currentNavigation.secondaryCta.label}</span>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="struktiva-solutions-hero__visual"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <SolutionsHeroVisual reducedMotion={Boolean(reducedMotion)} />
        </motion.div>
      </div>
    </section>
  )
}
