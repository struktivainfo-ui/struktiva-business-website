import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { aboutHeroFactors, aboutHeroSteps } from './aboutData.js'

function AboutHeroVisual({ reducedMotion }) {
  return (
    <div className="struktiva-about-hero-visual" aria-label="Nicht Technik steht im Zentrum, sondern das Unternehmen und seine Zusammenhänge">
      <ol className="struktiva-about-hero-visual__factors" aria-label="Faktoren im Unternehmen">
        {aboutHeroFactors.map((factor, index) => (
          <motion.li
            key={factor}
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.12 + index * 0.045, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{factor}</strong>
          </motion.li>
        ))}
      </ol>
      <motion.div
        className="struktiva-about-hero-visual__center"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.98 }}
        animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.52, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
      >
        <small>im Zentrum</small>
        <strong>Ihr Unternehmen</strong>
      </motion.div>
      <ol className="struktiva-about-hero-visual__steps" aria-label="Vorgehen von STRUKTIVA">
        {aboutHeroSteps.map((step, index) => (
          <motion.li
            key={step}
            initial={reducedMotion ? false : { opacity: 0, x: 14 }}
            animate={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.42, delay: 0.46 + index * 0.075, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step}</strong>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

export default function AboutHero() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-about-hero" aria-labelledby="struktiva-about-hero-title">
      <div className="struktiva-about-hero__inner">
        <motion.div
          className="struktiva-about-hero__copy"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-about-eyebrow">Persönlich. Klar. Umsetzungsnah.</p>
          <h1 id="struktiva-about-hero-title">
            Digitale Veränderung braucht keinen größeren Werkzeugkasten. Sie braucht einen klaren Blick auf das Unternehmen.
          </h1>
          <div className="struktiva-about-hero__lead">
            <p>STRUKTIVA Digitale Unternehmensberatung verbindet strategische Betrachtung mit praktischer Umsetzung.</p>
            <p>
              Wir schauen zuerst darauf, was bereits funktioniert, wo unnötige Brüche entstehen und welche Veränderung im Alltag tatsächlich sinnvoll wäre.
            </p>
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
        <motion.div
          className="struktiva-about-hero__visual"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <AboutHeroVisual reducedMotion={Boolean(reducedMotion)} />
        </motion.div>
      </div>
    </section>
  )
}
