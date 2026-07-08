import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ExternalLink } from 'lucide-react'
import { salonKarolaWebsiteUrl } from './salonKarolaCaseData.js'

const growthSteps = [
  'Webauftritt',
  'Sichtbarkeit & Kontakt',
  'Kundendaten',
  'Kundenbindung',
  'interne Abläufe',
]

function CaseStudyBreadcrumb() {
  return (
    <nav className="struktiva-salon-breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li><a href="/">Start</a></li>
        <li><a href="/praxisbeispiele">Praxisbeispiele</a></li>
        <li aria-current="page">Salon Karola</li>
      </ol>
    </nav>
  )
}

function CaseStudyHeroVisual({ reducedMotion }) {
  return (
    <motion.div
      className="struktiva-salon-hero-visual"
      aria-label="Schrittweise gewachsene digitale Struktur von Salon Karola"
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="struktiva-salon-hero-visual__core">
        <span>Echtes Praxisprojekt</span>
        <strong>Salon Karola</strong>
        <small>Calw-Wimberg</small>
      </div>
      <ol>
        {growthSteps.map((step, index) => (
          <li key={step} className={`struktiva-salon-hero-visual__step struktiva-salon-hero-visual__step--${index + 1}`}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
      <svg viewBox="0 0 720 520" aria-hidden="true" focusable="false">
        {[
          'M360 258 C248 130 150 156 96 214',
          'M360 258 C482 118 586 154 642 218',
          'M360 258 C248 262 140 330 114 424',
          'M360 258 C490 266 604 328 626 424',
          'M360 258 C354 364 332 426 270 470',
        ].map((path, index) => (
          <motion.path
            key={path}
            d={path}
            initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={reducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </svg>
    </motion.div>
  )
}

export default function CaseStudyHero() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-salon-hero" aria-labelledby="struktiva-salon-hero-title">
      <div className="struktiva-salon-hero__inner">
        <CaseStudyBreadcrumb />
        <div className="struktiva-salon-hero__layout">
          <motion.div
            className="struktiva-salon-hero__copy"
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="struktiva-salon-label">Echtes Praxisprojekt</span>
            <p className="struktiva-salon-eyebrow">Salon Karola · Calw-Wimberg</p>
            <h1 id="struktiva-salon-hero-title">
              Wie aus einem Webprojekt Schritt für Schritt eine verbundene digitale Struktur wurde.
            </h1>
            <div className="struktiva-salon-hero__lead">
              <p>Bei Salon Karola ging es nicht nur darum, einen neuen Webauftritt zu erstellen.</p>
              <p>
                Im Verlauf des Projekts wurden verschiedene digitale Bereiche aufgebaut und weiterentwickelt - von Sichtbarkeit und Kundenkontakt bis zur Kundenverwaltung, digitalen Kundenbindung und internen Abläufen.
              </p>
            </div>
            <div className="struktiva-salon-hero__actions">
              <a className="struktiva-salon-primary" href="#system">
                <span>Projektstruktur ansehen</span>
                <ArrowDown aria-hidden="true" />
              </a>
              <a className="struktiva-salon-secondary" href={salonKarolaWebsiteUrl} target="_blank" rel="noopener noreferrer">
                <span>Website von Salon Karola ansehen</span>
                <ExternalLink aria-hidden="true" />
              </a>
            </div>
          </motion.div>
          <CaseStudyHeroVisual reducedMotion={Boolean(reducedMotion)} />
        </div>
      </div>
    </section>
  )
}
