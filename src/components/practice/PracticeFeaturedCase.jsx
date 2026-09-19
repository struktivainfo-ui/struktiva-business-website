import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { practiceLabels } from './PracticeTransparency.jsx'
import { salonKarolaCasePath } from '../case-study/salonKarolaCaseData.js'

const salonKarolaUrl = 'https://salonkarola.de/'

const modules = [
  { key: 'website', title: 'Präsenz', text: 'Website, Leistungen und erster Eindruck' },
  { key: 'contact', title: 'Kontakt', text: 'Telefon, WhatsApp und Anfragewege' },
  { key: 'loyalty', title: 'Bindung', text: 'Kundenkarte, Bonus und Bewertungen' },
  { key: 'operations', title: 'Abläufe', text: 'Kundendaten und interne Organisation' },
]

export default function PracticeFeaturedCase() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-practice-featured" aria-labelledby="struktiva-practice-featured-title">
      <div className="struktiva-practice-featured__inner">
        <motion.div
          className="struktiva-practice-featured__copy"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="struktiva-practice-badge" data-practice-label="real">{practiceLabels.real}</span>
          <h2 id="struktiva-practice-featured-title">Salon Karola</h2>
          <p className="struktiva-practice-featured__statement">Ein Salon, der seinen digitalen Weg konsequent verbunden hat.</p>
          <div className="struktiva-practice-featured__text">
            <p>Was mit einem zeitgemäßen Auftritt begann, wurde Schritt für Schritt zu einer klaren Struktur für Sichtbarkeit, Kundenkontakt und den Alltag im Betrieb.</p>
          </div>
          <div className="struktiva-practice-featured__actions">
            <a href={salonKarolaCasePath}>
              <span>Projekt im Detail ansehen</span>
              <ArrowRight aria-hidden="true" />
            </a>
            <a href={salonKarolaUrl} target="_blank" rel="noopener noreferrer">
              <span>Website von Salon Karola ansehen</span>
              <ExternalLink aria-hidden="true" />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="struktiva-practice-featured__modules"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-practice-featured__modules-label">Was heute zusammenspielt</p>
          <ol>
            {modules.map((module, index) => (
              <li key={module.key}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{module.title}</strong>
                  <small>{module.text}</small>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}
