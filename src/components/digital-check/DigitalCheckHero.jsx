import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { digitalCheckHeroSteps, digitalCheckSignals } from './digitalCheckData.js'

function DigitalCheckHeroVisual({ reducedMotion }) {
  return (
    <div className="struktiva-digital-check-hero-visual" aria-label="Unternehmenssignale werden gemeinsam betrachtet und in klare nächste Schritte eingeordnet">
      <ol className="struktiva-digital-check-hero-visual__signals" aria-label="Signale aus dem Unternehmen">
        {digitalCheckSignals.map((signal, index) => (
          <motion.li
            key={signal}
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.12 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{signal}</strong>
          </motion.li>
        ))}
      </ol>

      <motion.div
        className="struktiva-digital-check-hero-visual__center"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.98 }}
        animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.54, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
      >
        <small>gemeinsame Betrachtung</small>
        <strong>Digital-Check</strong>
      </motion.div>

      <ol className="struktiva-digital-check-hero-visual__steps" aria-label="Einordnung im Digital-Check">
        {digitalCheckHeroSteps.map((step, index) => (
          <motion.li
            key={step}
            initial={reducedMotion ? false : { opacity: 0, x: 16 }}
            animate={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.42, delay: 0.48 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step}</strong>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

export default function DigitalCheckHero() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-digital-check-hero" aria-labelledby="struktiva-digital-check-hero-title">
      <div className="struktiva-digital-check-hero__inner">
        <motion.div
          className="struktiva-digital-check-hero__copy"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-digital-check-eyebrow">Der erste klare Blick auf Ihre digitale Struktur</p>
          <h1 id="struktiva-digital-check-hero-title">
            Bevor Sie in neue Technik investieren, sollten Sie wissen, wo Veränderung wirklich sinnvoll ist.
          </h1>
          <div className="struktiva-digital-check-hero__lead">
            <p>Der STRUKTIVA Digital-Check betrachtet Sichtbarkeit, Kundenwege und digitale Abläufe im Zusammenhang.</p>
            <p>
              Gemeinsam schauen wir darauf, was bereits funktioniert, wo unnötige Brüche entstehen und welcher nächste Schritt zu Ihrem Unternehmen passen könnte.
            </p>
          </div>
          <div className="struktiva-digital-check-hero__actions">
            <a className="struktiva-digital-check-primary" href="/kontakt#lead-form">
              <span>Digital-Check anfragen</span>
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="struktiva-digital-check-secondary" href="#ablauf">
              <span>So funktioniert der Check</span>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="struktiva-digital-check-hero__visual"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <DigitalCheckHeroVisual reducedMotion={Boolean(reducedMotion)} />
        </motion.div>
      </div>
    </section>
  )
}
