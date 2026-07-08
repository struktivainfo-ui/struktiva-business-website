import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { practiceLabels } from './PracticeTransparency.jsx'
import { salonKarolaCasePath } from '../case-study/salonKarolaCaseData.js'

const salonKarolaUrl = 'https://salonkarola.de/'

const modules = [
  { key: 'website', title: 'Website und digitale Präsenz', text: 'Ein moderner Webauftritt als verständlicher Einstieg in Leistungen, Eindruck und Kontakt.' },
  { key: 'visibility', title: 'Sichtbarkeit und Bewertungswege', text: 'Website, lokale Sichtbarkeit und Bewertungswege werden als zusammenhängender Weg betrachtet.' },
  { key: 'contact', title: 'Kundenkontakt', text: 'Telefon, WhatsApp, Formular und direkte Kontaktpunkte werden klar priorisiert.' },
  { key: 'customers', title: 'Kundenverwaltung', text: 'Kundendaten und kundenbezogene Abläufe erhalten eine geordnetere digitale Struktur.' },
  { key: 'loyalty', title: 'Digitale Kundenkarte und Bonusstruktur', text: 'Kundenbindung wird nicht nur behauptet, sondern als nutzbarer digitaler Baustein aufgebaut.' },
  { key: 'operations', title: 'Interne digitale Abläufe', text: 'Wiederkehrende organisatorische Schritte können nachvollziehbarer und alltagstauglicher werden.' },
]

function FeaturedCaseVisual({ reducedMotion }) {
  return (
    <div className="struktiva-practice-featured-visual" aria-label="Systemdarstellung Salon Karola">
      <svg viewBox="0 0 760 520" aria-hidden="true" focusable="false">
        {[
          'M380 260 C260 96 128 126 92 202',
          'M380 260 C500 96 632 128 672 202',
          'M380 260 C232 250 132 326 110 420',
          'M380 260 C528 250 630 326 650 420',
          'M380 260 C346 376 270 454 186 474',
          'M380 260 C414 376 492 454 574 474',
        ].map((path, index) => (
          <motion.path
            key={path}
            d={path}
            initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
            whileInView={reducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </svg>
      <div className="struktiva-practice-featured-visual__center">
        <strong>Salon Karola</strong>
        <span>{practiceLabels.real}</span>
      </div>
      <ol>
        {modules.map((module, index) => (
          <motion.li
            key={module.key}
            className={`struktiva-practice-featured-visual__node struktiva-practice-featured-visual__node--${module.key}`}
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.42, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{module.title}</strong>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

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
          <p className="struktiva-practice-featured__statement">Vom Webauftritt zur verbundenen digitalen Struktur.</p>
          <div className="struktiva-practice-featured__text">
            <p>Bei Salon Karola wurden verschiedene digitale Bereiche schrittweise aufgebaut und miteinander verbunden.</p>
            <p>
              Dazu gehören unter anderem Website und digitale Präsenz, Sichtbarkeit und Bewertungswege, Kundenkontakt, Kundenverwaltung, digitale Kundenkarte und Bonusstruktur sowie interne digitale Abläufe.
            </p>
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
          className="struktiva-practice-featured__visual"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <FeaturedCaseVisual reducedMotion={Boolean(reducedMotion)} />
        </motion.div>
      </div>
      <div className="struktiva-practice-featured-modules" aria-label="Bausteine des Salon-Karola-Projekts">
        {modules.map((module, index) => (
          <motion.article
            key={module.key}
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.44, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{module.title}</h3>
            <p>{module.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
