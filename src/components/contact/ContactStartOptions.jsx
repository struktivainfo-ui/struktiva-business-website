import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { contactEntryPoints } from './contactData.js'

export default function ContactStartOptions() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-contact-options" aria-labelledby="struktiva-contact-options-title">
      <div className="struktiva-contact-section-heading">
        <p className="struktiva-contact-eyebrow">So koennen Sie starten</p>
        <h2 id="struktiva-contact-options-title">Direkte Frage oder mehrere Themen? Beides ist in Ordnung.</h2>
      </div>

      <div className="struktiva-contact-options__path">
        {contactEntryPoints.map((entry, index) => (
          <motion.article
            key={entry.eyebrow}
            className="struktiva-contact-options__item"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.34 }}
            transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="struktiva-contact-options__index">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <p>{entry.eyebrow}</p>
              <h3>{entry.title}</h3>
              <span>{entry.text}</span>
              <a href={entry.href}>
                {entry.linkLabel}
                <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
