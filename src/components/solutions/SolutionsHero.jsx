import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { currentNavigation } from '../../routing/routeConfig.js'

const solutionsHeroImage = '/images/struktiva-solution-automation-3d-v1.png'

export default function SolutionsHero() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-solutions-hero" aria-labelledby="struktiva-solutions-hero-title">
      <div className="struktiva-solutions-hero__media" aria-hidden="true">
        <img src={solutionsHeroImage} alt="" />
      </div>
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
              STRUKTIVA verbindet Website, Google-Sichtbarkeit, Kundenführung und Automatisierung zu einer Struktur, die im Alltag spürbar weiterhilft.
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

      </div>
    </section>
  )
}
