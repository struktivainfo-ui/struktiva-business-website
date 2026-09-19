import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { currentNavigation } from '../../routing/routeConfig.js'

const solutionWorlds = [
  {
    key: 'visibility',
    marker: '01',
    title: 'Sichtbarkeit und Kundengewinnung',
    message: 'Gefunden werden. Vertrauen aufbauen. Den nächsten Schritt einfach machen.',
    localLink: { href: '/google-sichtbarkeit-calw', label: 'Google-Sichtbarkeit in Calw' },
    image: '/images/struktiva-solution-visibility-3d-v1.png',
    imageAlt: 'Abstrakte 3D-Szene für lokale digitale Sichtbarkeit',
  },
  {
    key: 'customer',
    marker: '02',
    title: 'Kundenführung und Kundenbindung',
    message: 'Kontakt, Betreuung und Wiederkehr werden zu einem klaren Kundenweg.',
    localLink: { href: '/digitale-kundenprozesse-calw', label: 'Digitale Kundenprozesse in Calw' },
    image: '/images/struktiva-solution-customer-3d-v1.png',
    imageAlt: 'Abstrakte 3D-Szene für digitale Kundenführung und Kundenbindung',
  },
  {
    key: 'automation',
    marker: '03',
    title: 'Digitale Abläufe und Automatisierung',
    message: 'Informationen, Aufgaben und Automatisierungen arbeiten als ein System zusammen.',
    localLink: { href: '/ki-automatisierung-calw', label: 'KI und Automatisierung in Calw' },
    image: '/images/struktiva-solution-automation-3d-v1.png',
    imageAlt: 'Abstrakte 3D-Szene für digitale Abläufe und Automatisierung',
  },
]

export default function HomeSolutionsSection() {
  const reducedMotion = useReducedMotion()
  const solutionLink =
    currentNavigation.primary.find((item) => item.transitionFor === '/loesungen') ||
    currentNavigation.primary.find((item) => item.href === '/leistungen')

  return (
    <section className="struktiva-home-solutions" aria-labelledby="struktiva-home-solutions-title">
      <div className="struktiva-home-solutions__inner">
        <motion.div
          className="struktiva-home-solutions__intro"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-home-solutions__eyebrow">Drei Bereiche. Eine digitale Struktur.</p>
          <h2 id="struktiva-home-solutions-title">
            STRUKTIVA verbindet Sichtbarkeit, Kundenführung und Abläufe zu einem System.
          </h2>
          <div className="struktiva-home-solutions__lead">
            <p>Es zählt nicht die Menge einzelner Werkzeuge, sondern ihr Zusammenspiel im Alltag.</p>
          </div>
        </motion.div>

        <div className="struktiva-home-solutions__worlds">
          {solutionWorlds.map((world, index) => (
            <motion.article
              key={world.key}
              className={`struktiva-solution-world struktiva-solution-world--${world.key}`}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="struktiva-solution-world__copy">
                <p className="struktiva-solution-world__marker">{world.marker}</p>
                <h3>{world.title}</h3>
                <p className="struktiva-solution-world__message">{world.message}</p>
                <a className="struktiva-solution-world__local-link" href={world.localLink.href}>
                  {world.localLink.label} <ArrowRight aria-hidden="true" />
                </a>
              </div>
              <div className="struktiva-solution-world__media">
                <img src={world.image} alt={world.imageAlt} loading="lazy" />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="struktiva-solutions-connection"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="struktiva-solutions-connection__inputs" aria-label="Die drei Bereiche gehören zusammen">
            <span>Sichtbarkeit</span>
            <span>Kundenführung</span>
            <span>Abläufe</span>
          </div>
          <div className="struktiva-solutions-connection__result">
            <small>werden zu</small>
            <strong>einer klaren digitalen Struktur</strong>
          </div>
        </motion.div>

        <motion.div
          className="struktiva-solutions-close"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h3>Die Technik ist nicht das Ziel. Sie ist das Werkzeug.</h3>
            <p>
              Welche Lösung sinnvoll ist, hängt vom Unternehmen, den bestehenden Systemen und den tatsächlichen Abläufen ab.
            </p>
            <p>
              Deshalb beginnt STRUKTIVA nicht mit einem Produktkatalog, sondern mit der Frage: Was muss besser zusammenarbeiten?
            </p>
          </div>
          {solutionLink ? (
            <a href={solutionLink.href} className="struktiva-solutions-close__link">
              <span>Lösungen im Überblick ansehen</span>
              <ArrowRight aria-hidden="true" />
            </a>
          ) : null}
        </motion.div>
      </div>
    </section>
  )
}
