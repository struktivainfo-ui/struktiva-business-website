import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const aboutHeroImage = '/images/inhaber-sven-jessica.webp'

export default function AboutHero() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-about-hero" aria-labelledby="struktiva-about-hero-title">
      <div className="struktiva-about-hero__media" aria-hidden="true">
        <img src={aboutHeroImage} alt="" />
      </div>
      <div className="struktiva-about-hero__inner">
        <motion.div
          className="struktiva-about-hero__copy"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-about-eyebrow">STRUKTIVA · Calw</p>
          <h1 id="struktiva-about-hero-title">
            Erst Ihr Alltag. Dann die passende digitale Lösung.
          </h1>
          <div className="struktiva-about-hero__lead">
            <p>STRUKTIVA ist die digitale Unternehmensberatung von Sven Matzke und Jessica Wacker. Wir verbinden einen klaren Blick auf Ihr Unternehmen mit der praktischen Umsetzung.</p>
          </div>
          <div className="struktiva-about-hero__actions">
            <a className="struktiva-about-primary" href="/digital-check#digital-check-anfrage">
              <span>Digital-Check anfragen</span>
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="struktiva-about-secondary" href="/praxisbeispiele">
              <span>Praxisbeispiele ansehen</span>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
