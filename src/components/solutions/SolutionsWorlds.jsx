import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const worlds = [
  {
    key: 'visibility',
    number: '01',
    title: 'Sichtbarkeit, die zur Anfrage führt.',
    description: 'Damit Ihr Unternehmen in Google gefunden wird und der erste Eindruck sofort Vertrauen schafft.',
    href: '/google-sichtbarkeit-calw',
    linkLabel: 'Sichtbarkeit entdecken',
    image: '/images/struktiva-solution-visibility-3d-v1.png',
    alt: 'Abstrakte 3D-Darstellung von Google-Sichtbarkeit und digitaler Reichweite',
  },
  {
    key: 'customer',
    number: '02',
    title: 'Kundenführung, die sich leicht anfühlt.',
    description: 'Von der ersten Frage bis zur Rückmeldung: Kontaktpunkte greifen klar ineinander und bleiben persönlich.',
    href: '/digitale-kundenprozesse-calw',
    linkLabel: 'Kundenprozesse entdecken',
    image: '/images/struktiva-solution-customer-3d-v1.png',
    alt: 'Abstrakte 3D-Darstellung einer digitalen Kundenreise',
  },
  {
    key: 'automation',
    number: '03',
    title: 'Abläufe, die Zeit zurückgeben.',
    description: 'Wiederkehrende Aufgaben werden verlässlich vorbereitet, damit mehr Aufmerksamkeit für Menschen und Entscheidungen bleibt.',
    href: '/ki-automatisierung-calw',
    linkLabel: 'Automatisierung entdecken',
    image: '/images/struktiva-solution-automation-3d-v1.png',
    alt: 'Abstrakte 3D-Darstellung eines vernetzten digitalen Systems',
  },
]

export default function SolutionsWorlds() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-solutions-worlds" aria-label="Drei digitale Lösungsbereiche">
      <div className="struktiva-solutions-worlds__intro">
        <p className="struktiva-solutions-worlds__eyebrow">Drei Bereiche. Eine klare Richtung.</p>
        <h2>Digitalisierung wird stark, wenn die Teile zusammenpassen.</h2>
      </div>

      <div className="struktiva-solutions-worlds__list">
        {worlds.map((world, index) => (
          <motion.article
            key={world.key}
            className={`struktiva-solutions-world struktiva-solutions-world--${world.key}`}
            initial={reducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : index * 0.05 }}
          >
            <div className="struktiva-solutions-world__copy">
              <span className="struktiva-solutions-world__number">{world.number}</span>
              <h2>{world.title}</h2>
              <p>{world.description}</p>
              <a className="struktiva-solutions-world__link" href={world.href}>
                {world.linkLabel} <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
            <figure className="struktiva-solutions-world__media">
              <img src={world.image} alt={world.alt} loading="lazy" />
            </figure>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
