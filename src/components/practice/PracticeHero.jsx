import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { currentNavigation } from '../../routing/routeConfig.js'

const practiceHeroImage = '/images/salon-karola-interior-project.jpg'

export default function PracticeHero() {
  const reducedMotion = useReducedMotion()
  const primaryCta = currentNavigation.primaryCta

  return (
    <section className="struktiva-practice-hero" aria-labelledby="struktiva-practice-hero-title">
      <div className="struktiva-practice-hero__media" aria-hidden="true">
        <img src={practiceHeroImage} alt="" />
      </div>
      <div className="struktiva-practice-hero__inner">
        <motion.div
          className="struktiva-practice-hero__copy"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-practice-eyebrow">STRUKTIVA · Praxisbeispiele</p>
          <h1 id="struktiva-practice-hero-title">
            Echte digitale Arbeit. Sichtbar im Alltag.
          </h1>
          <div className="struktiva-practice-hero__lead">
            <p>Hier wird nicht über einzelne Funktionen gesprochen, sondern gezeigt, wie Website, Kundenkontakt und digitale Abläufe zusammen Wirkung entfalten.</p>
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
      </div>
    </section>
  )
}
