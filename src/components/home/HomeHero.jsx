import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { currentNavigation } from '../../routing/routeConfig.js'

const systemAreas = [
  {
    key: 'visibility',
    title: 'Sichtbarkeit',
    detail: 'Website & Google',
  },
  {
    key: 'customers',
    title: 'Kundenführung',
    detail: 'Kontakt & Bindung',
  },
  {
    key: 'workflows',
    title: 'Abläufe',
    detail: 'Systeme & Automatisierung',
  },
]

function HeroSystemVisual({ reducedMotion }) {
  const [firstArea, ...remainingAreas] = systemAreas
  const lineMotion = reducedMotion
    ? {}
    : {
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 },
      }

  return (
    <div className="struktiva-system-visual" aria-label="Digitale Bereiche des Unternehmens arbeiten zusammen">
      <svg className="struktiva-system-visual__lines" viewBox="0 0 640 460" aria-hidden="true" focusable="false">
        <motion.path {...lineMotion} d="M322 226 C382 132 470 93 556 110" />
        <motion.path {...lineMotion} d="M322 226 C227 140 128 146 78 228" />
        <motion.path {...lineMotion} d="M322 226 C396 296 452 352 538 346" />
        <motion.path {...lineMotion} className="struktiva-system-visual__soft-line" d="M83 230 C178 304 336 365 538 346" />
      </svg>

      <ul className="struktiva-system-visual__nodes struktiva-system-visual__nodes--primary">
        {[firstArea].map((area, index) => (
          <motion.li
            key={area.key}
            className={`struktiva-system-visual__node struktiva-system-visual__node--${area.key}`}
            initial={reducedMotion ? false : { opacity: 0, y: 14, scale: 0.98 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.18 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="struktiva-system-visual__status" aria-hidden="true" />
            <strong>{area.title}</strong>
            <small>{area.detail}</small>
          </motion.li>
        ))}
      </ul>

      <div className="struktiva-system-visual__center">
        <span>Ihr Unternehmen</span>
        <small>klar verbunden</small>
      </div>

      <ul className="struktiva-system-visual__nodes struktiva-system-visual__nodes--secondary">
        {remainingAreas.map((area, index) => (
          <motion.li
            key={area.key}
            className={`struktiva-system-visual__node struktiva-system-visual__node--${area.key}`}
            initial={reducedMotion ? false : { opacity: 0, y: 14, scale: 0.98 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.3 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="struktiva-system-visual__status" aria-hidden="true" />
            <strong>{area.title}</strong>
            <small>{area.detail}</small>
          </motion.li>
        ))}
      </ul>

      <span className="struktiva-system-visual__pulse" aria-hidden="true" />
    </div>
  )
}

export default function HomeHero() {
  const reducedMotion = useReducedMotion()
  const primaryCta = currentNavigation.primaryCta
  const secondaryCta = currentNavigation.secondaryCta

  return (
    <section className="struktiva-home-hero" id="start" aria-labelledby="struktiva-home-hero-title">
      <div className="struktiva-home-hero__backdrop" aria-hidden="true" />
      <div className="struktiva-home-hero__inner">
        <motion.div
          className="struktiva-home-hero__content"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-home-hero__eyebrow">Digitale Struktur für Unternehmen</p>
          <h1 id="struktiva-home-hero-title">
            Mehr Sichtbarkeit. Klare Kundenwege. Digitale Abläufe, die zusammenarbeiten.
          </h1>
          <p className="struktiva-home-hero__lead">
            STRUKTIVA Digitale Unternehmensberatung verbindet Website, Google-Sichtbarkeit, Kundenkontakt und interne Abläufe zu einer klaren digitalen Struktur – verständlich geplant, individuell umgesetzt und auf den Alltag Ihres Unternehmens ausgerichtet.
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
        </motion.div>

        <motion.div
          className="struktiva-home-hero__visual"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroSystemVisual reducedMotion={Boolean(reducedMotion)} />
        </motion.div>
      </div>
      <div className="struktiva-home-hero__bridge" aria-hidden="true" />
    </section>
  )
}
