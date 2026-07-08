import { motion, useReducedMotion } from 'framer-motion'
import { salonKarolaModules } from './salonKarolaCaseData.js'

const moduleGroups = [
  {
    key: 'public',
    eyebrow: 'Öffentliche Ebene',
    title: 'Außenwirkung und Vertrauen sichtbar machen.',
    moduleKeys: ['website', 'visibility'],
  },
  {
    key: 'contact-data',
    eyebrow: 'Kontakt- und Datenebene',
    title: 'Kontaktpunkte und kundenbezogene Informationen ordnen.',
    moduleKeys: ['contact', 'customers'],
  },
  {
    key: 'loyalty',
    eyebrow: 'Kundenbindung',
    title: 'Wiederkehr einfacher digital unterstützen.',
    moduleKeys: ['loyalty'],
  },
  {
    key: 'internal',
    eyebrow: 'Interne Ebene',
    title: 'Auch nicht sichtbare Abläufe brauchen Struktur.',
    moduleKeys: ['operations'],
  },
]

function getModule(key) {
  return salonKarolaModules.find((module) => module.key === key)
}

export default function CaseStudyModules() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-salon-modules" aria-labelledby="struktiva-salon-modules-title">
      <div className="struktiva-salon-modules__intro">
        <p className="struktiva-salon-eyebrow">Digitale Bausteine</p>
        <h2 id="struktiva-salon-modules-title">Von der Außenwirkung bis zur internen Organisation.</h2>
        <p>
          Die sechs Bereiche werden hier ausführlicher als auf der Übersicht gezeigt. Sie beschreiben keine Standardlösung, sondern die wachsende Tiefe des Projekts.
        </p>
      </div>
      <div className="struktiva-salon-module-groups">
        {moduleGroups.map((group, groupIndex) => (
          <motion.section
            key={group.key}
            className={`struktiva-salon-module-group struktiva-salon-module-group--${group.key}`}
            aria-labelledby={`struktiva-salon-module-group-${group.key}`}
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="struktiva-salon-module-group__head">
              <span>{group.eyebrow}</span>
              <h3 id={`struktiva-salon-module-group-${group.key}`}>{group.title}</h3>
            </div>
            <div className="struktiva-salon-module-group__items">
              {group.moduleKeys.map((moduleKey) => {
                const module = getModule(moduleKey)
                return (
                  <article key={module.key} className={`struktiva-salon-module struktiva-salon-module--${module.key}`}>
                    <p>{module.level}</p>
                    <h4>{module.title}</h4>
                    <div>
                      <p>{module.text}</p>
                    </div>
                    <ul aria-label={`Belegbare Aspekte: ${module.title}`}>
                      {module.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>
          </motion.section>
        ))}
      </div>
    </section>
  )
}
