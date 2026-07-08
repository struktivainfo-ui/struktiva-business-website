import { motion, useReducedMotion } from 'framer-motion'
import { salonKarolaModules } from './salonKarolaCaseData.js'

function SystemVisual({ reducedMotion }) {
  return (
    <div className="struktiva-salon-system-visual" aria-label="Systemkarte Salon Karola">
      <svg viewBox="0 0 860 560" aria-hidden="true" focusable="false">
        {[
          'M430 278 C250 92 112 162 92 258',
          'M430 278 C614 86 756 164 768 264',
          'M430 278 C248 278 116 344 106 456',
          'M430 278 C604 286 744 348 756 456',
          'M430 278 C360 378 310 454 232 500',
          'M430 278 C500 378 552 454 628 500',
        ].map((path, index) => (
          <motion.path
            key={path}
            d={path}
            initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
            whileInView={reducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </svg>
      <div className="struktiva-salon-system-visual__center">
        <span>Salon Karola</span>
        <strong>verbundene digitale Struktur</strong>
      </div>
      <ol>
        {salonKarolaModules.map((module, index) => (
          <motion.li
            key={module.key}
            className={`struktiva-salon-system-visual__node struktiva-salon-system-visual__node--${module.key}`}
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{module.shortTitle}</strong>
            <small>{module.level}</small>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

export default function CaseStudySystemMap() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="system" className="struktiva-salon-system" aria-labelledby="struktiva-salon-system-title">
      <div className="struktiva-salon-system__inner">
        <motion.div
          className="struktiva-salon-system__intro"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-salon-eyebrow">Das digitale System</p>
          <h2 id="struktiva-salon-system-title">Sechs Bereiche, die nicht isoliert betrachtet werden.</h2>
          <p>
            Die einzelnen Bereiche haben unterschiedliche Aufgaben. Entscheidend sind die Übergänge: von Außenwirkung zu Kontakt, von Kontakt zu kundenbezogenen Informationen und von dort zu Kundenbindung und interner Organisation.
          </p>
        </motion.div>
        <SystemVisual reducedMotion={Boolean(reducedMotion)} />
      </div>
    </section>
  )
}
