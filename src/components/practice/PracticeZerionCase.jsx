import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { practiceLabels } from './PracticeTransparency.jsx'

const projectUrl = 'https://zerion-beyond.de'

const projectParts = [
  'Markenauftritt und Webdesign',
  'Informationsarchitektur',
  'Mobile Kontaktwege',
  'Vercel-Deployment und .de-Domain',
  'Digitale QR-Visitenkarte',
]

export default function PracticeZerionCase() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-practice-zerion" aria-labelledby="struktiva-practice-zerion-title">
      <div className="struktiva-practice-zerion__inner">
        <motion.div
          className="struktiva-practice-zerion__copy"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="struktiva-practice-badge" data-practice-label="real">{practiceLabels.real}</span>
          <p className="struktiva-practice-eyebrow">ZERION Beyond</p>
          <h2 id="struktiva-practice-zerion-title">Markenwebsite und digitale Kontaktstrecke für einen sensiblen Wissensbereich.</h2>
          <p>
            Für ZERION Beyond entstand ein eigenständiger Auftritt, der Markenwirkung, verständliche Informationsstruktur und direkte Kontaktwege verbindet.
          </p>
          <p>
            Im Fokus standen eine ruhige, hochwertige Bild- und Markenwelt, mobile Lesbarkeit sowie die sorgfältige Einordnung sensibler Inhalte ohne überzogene Versprechen.
          </p>
          <div className="struktiva-practice-zerion__actions">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              <span>Projekt ansehen</span>
              <ExternalLink aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.article
          className="struktiva-practice-zerion__panel"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="struktiva-practice-zerion__panel-head">
            <span>ZERION</span>
            <small>Beyond</small>
          </div>
          <p>Konzeption, Design und technische Auslieferung als ein klarer digitaler Weg.</p>
          <ul aria-label="Umgesetzte Bausteine für ZERION Beyond">
            {projectParts.map((part, index) => (
              <li key={part}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{part}</strong>
              </li>
            ))}
          </ul>
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" aria-label="ZERION Beyond in neuem Tab öffnen">
            <span>zerion-beyond.de</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </motion.article>
      </div>
    </section>
  )
}
