import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { practiceLabels } from './PracticeTransparency.jsx'

const demos = [
  {
    key: 'handwerker',
    branch: 'Handwerker',
    href: '/demos/handwerker',
    problem: 'Leistungen, Vertrauen, Einsatzgebiet und schnelle Kontaktwege müssen sofort verständlich sein.',
    idea: 'Eine regionale Website-Struktur mit klarer Leistungsführung und sichtbarer Anfragepriorität.',
    connects: ['Sichtbarkeit', 'Leistungsübersicht', 'mobile Kontaktwege'],
  },
  {
    key: 'kosmetik',
    branch: 'Kosmetikstudio',
    href: '/demos/kosmetik',
    problem: 'Atmosphäre, Leistungen, Termininteresse, Bewertungen und Kundenbindung müssen zusammenpassen.',
    idea: 'Ein emotionaler, aber klar geführter Auftritt mit verständlichen Leistungen und Terminwegen.',
    connects: ['Leistungen', 'Vertrauen', 'Kundenbindung'],
  },
  {
    key: 'dienstleister',
    branch: 'Lokaler Dienstleister',
    href: '/demos/lokaler-dienstleister',
    problem: 'Besucher müssen schnell erkennen, ob Angebot, Region und Kontaktweg zum eigenen Bedarf passen.',
    idea: 'Eine sachliche Dienstleister-Struktur mit Angebot, Gebiet, Ablauf und Anfrageführung.',
    connects: ['Vertrauen', 'Anfrageprozess', 'Kontaktführung'],
  },
]

export default function PracticeDemoConcepts() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-practice-demos" aria-labelledby="struktiva-practice-demos-title">
      <div className="struktiva-practice-demos__intro">
        <p className="struktiva-practice-eyebrow">Konzept sichtbar machen</p>
        <h2 id="struktiva-practice-demos-title">Ideen sichtbar machen, bevor ein reales Projekt entsteht.</h2>
        <p>
          Demo-Konzepte zeigen, wie digitale Strukturen für unterschiedliche Branchen und Anforderungen aussehen könnten. Sie dienen als Anschauungsbeispiele - nicht als behauptete Kundenreferenzen.
        </p>
      </div>
      <div className="struktiva-practice-demo-layout">
        {demos.map((demo, index) => (
          <motion.article
            key={demo.key}
            className={`struktiva-practice-demo struktiva-practice-demo--${demo.key}`}
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.48, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="struktiva-practice-demo__top">
              <span className="struktiva-practice-badge" data-practice-label="demo">{practiceLabels.demo}</span>
              <strong>{demo.branch}</strong>
            </div>
            <div className="struktiva-practice-demo__body">
              <div>
                <h3>Ausgangsproblem</h3>
                <p>{demo.problem}</p>
              </div>
              <div>
                <h3>Zentrale digitale Idee</h3>
                <p>{demo.idea}</p>
              </div>
            </div>
            <ul aria-label={`Verbundene Bereiche: ${demo.branch}`}>
              {demo.connects.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href={demo.href}>
              <span>Demo ansehen</span>
              <ArrowRight aria-hidden="true" />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
