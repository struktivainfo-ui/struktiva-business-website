import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { currentNavigation } from '../../routing/routeConfig.js'

export default function HomeHero() {
  const reducedMotion = useReducedMotion()
  const primaryCta = currentNavigation.primaryCta
  const secondaryCta = currentNavigation.secondaryCta

  return (
    <section className="struktiva-home-hero" id="start" aria-labelledby="struktiva-home-hero-title">
      <motion.div
        className="struktiva-home-hero__scene"
        aria-hidden="true"
        initial={reducedMotion ? false : { opacity: 0, scale: 1.045 }}
        animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src="/images/struktiva-hero-digital-consulting-3d-v1.png" alt="" />
      </motion.div>
      <div className="struktiva-home-hero__backdrop" aria-hidden="true" />
      <div className="struktiva-home-hero__inner">
        <motion.div
          className="struktiva-home-hero__content"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-home-hero__eyebrow">Digitale Unternehmensberatung aus Calw</p>
          <h1 id="struktiva-home-hero-title">
            Mehr Sichtbarkeit. Klare Kundenwege. Digitale Abläufe, die zusammenarbeiten.
          </h1>
          <p className="struktiva-home-hero__lead">
            STRUKTIVA Digitale Unternehmensberatung aus Calw verbindet Website, Google-Sichtbarkeit, Kundenkontakt und interne Abläufe zu einer klaren digitalen Struktur – verständlich geplant, individuell umgesetzt und auf den Alltag Ihres Unternehmens ausgerichtet.
          </p>
          <div className="struktiva-home-hero__actions" aria-label="Startseiten-Aktionen">
            <a className="struktiva-home-hero__primary" href={primaryCta.href}>
              <span>{primaryCta.label}</span>
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="struktiva-home-hero__secondary" href={secondaryCta.href}>
              <span>{secondaryCta.label}</span>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <p className="struktiva-home-hero__orientation">Strategie · Umsetzung · Weiterentwicklung</p>
          <a className="struktiva-home-hero__local-link" href="/digitale-unternehmensberatung-calw">
            Digitale Unternehmensberatung in Calw kennenlernen
          </a>
        </motion.div>

        <motion.div
          className="struktiva-home-hero__visual"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="struktiva-home-hero__signal" aria-label="Sichtbarkeit, Kundenführung und Abläufe werden verbunden">
            <span className="struktiva-home-hero__signal-label">Digitale Struktur</span>
            <strong>Ihr Unternehmen.<br />Klar verbunden.</strong>
            <p>Sichtbarkeit <i aria-hidden="true" /> Kundenführung <i aria-hidden="true" /> Abläufe</p>
          </div>
        </motion.div>
      </div>
      <div className="struktiva-home-hero__bridge" aria-hidden="true" />
    </section>
  )
}
