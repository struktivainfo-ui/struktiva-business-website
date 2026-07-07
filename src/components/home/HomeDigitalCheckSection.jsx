import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const checkAreas = [
  {
    title: 'Sichtbarkeit',
    text: 'Wie und wo wird das Unternehmen digital gefunden?',
  },
  {
    title: 'Website und Außendarstellung',
    text: 'Ist klar, was das Unternehmen anbietet und welcher nächste Schritt möglich ist?',
  },
  {
    title: 'Kontaktwege',
    text: 'Wie gelangen Interessenten von der ersten Aufmerksamkeit zur konkreten Anfrage?',
  },
  {
    title: 'Kundenführung',
    text: 'Was passiert nach dem ersten Kontakt und wie werden Informationen weitergeführt?',
  },
  {
    title: 'Interne Abläufe',
    text: 'Wo entstehen doppelte Arbeit, Medienbrüche oder unnötige manuelle Schritte?',
  },
  {
    title: 'Entwicklungspotenzial',
    text: 'Welche Verbesserungen wären sinnvoll – und welche Technik wäre aktuell unnötig?',
  },
]

const expectationPoints = [
  'verständliche Einordnung der aktuellen Situation',
  'erste erkennbare Prioritäten',
  'Hinweise auf unnötige Brüche oder Doppelarbeit',
  'Einschätzung, welche nächsten Schritte sinnvoll sein könnten',
  'klare Aussage, wenn eine umfangreiche Lösung aktuell nicht notwendig ist',
]

const fitSignals = [
  'Die Website ist vorhanden, aber der digitale Kundenweg ist unklar.',
  'Google, Website und Kontaktwege wirken wie getrennte Baustellen.',
  'Kundenanfragen verteilen sich auf mehrere Kanäle.',
  'Informationen müssen mehrfach übertragen oder gesucht werden.',
  'Wiederkehrende Aufgaben werden immer wieder manuell erledigt.',
  'Sie wissen, dass etwas verbessert werden sollte, aber nicht, womit Sie beginnen sollen.',
]

function AnalysisPath({ reducedMotion }) {
  return (
    <div className="struktiva-digital-check-path" aria-label="Prüfbereiche des STRUKTIVA Digital-Checks">
      <div className="struktiva-digital-check-path__center">
        <span>Ihr Unternehmen</span>
        <small>im Zusammenhang betrachtet</small>
      </div>
      <ol className="struktiva-digital-check-path__steps">
        {checkAreas.map((area, index) => (
          <motion.li
            key={area.title}
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.44, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="struktiva-digital-check-path__index">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

export default function HomeDigitalCheckSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-home-digital-check" aria-labelledby="struktiva-home-digital-check-title">
      <div className="struktiva-home-digital-check__inner">
        <motion.div
          className="struktiva-home-digital-check__intro"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.42 }}
          transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-home-digital-check__eyebrow">Der nächste sinnvolle Schritt</p>
          <h2 id="struktiva-home-digital-check-title">
            Wo verliert Ihr Unternehmen heute Zeit, Klarheit oder digitale Wirkung?
          </h2>
          <div className="struktiva-home-digital-check__lead">
            <p>Beim STRUKTIVA Digital-Check betrachten wir nicht nur eine einzelne Website oder ein einzelnes Tool.</p>
            <p>
              Wir schauen auf die wichtigsten digitalen Kontaktpunkte und Abläufe im Zusammenhang: Wie wird Ihr Unternehmen gefunden? Wie nehmen Interessenten Kontakt auf? Wie werden Informationen weitergeführt? Wo entstehen unnötige manuelle Schritte oder Brüche?
            </p>
            <p>Sie müssen dafür nicht wissen, welche technische Lösung Sie brauchen.</p>
          </div>
        </motion.div>

        <motion.div
          className="struktiva-home-digital-check__analysis"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnalysisPath reducedMotion={Boolean(reducedMotion)} />
        </motion.div>

        <div className="struktiva-digital-check-details">
          <motion.article
            className="struktiva-digital-check-expectation"
            initial={reducedMotion ? false : { opacity: 0, x: -16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>Was Sie vom ersten Austausch erwarten können</h3>
            <ul>
              {expectationPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            className="struktiva-digital-check-fit"
            initial={reducedMotion ? false : { opacity: 0, x: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.48, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>Sinnvoll, wenn Sie zum Beispiel merken:</h3>
            <ul>
              {fitSignals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
          </motion.article>
        </div>

        <motion.div
          className="struktiva-digital-check-counterpoint"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3>Kein Verkaufsgespräch mit vorgefertigtem Ergebnis.</h3>
          <div>
            <p>Der Digital-Check soll zuerst Klarheit schaffen.</p>
            <p>Nicht jedes Unternehmen braucht eine neue Website, eine App oder eine Automatisierung.</p>
            <p>Manchmal liegt der wichtigste nächste Schritt an einer ganz anderen Stelle.</p>
            <p>Deshalb beginnt STRUKTIVA mit dem Zusammenhang – nicht mit einem Produkt.</p>
          </div>
        </motion.div>

        <motion.div
          className="struktiva-digital-check-cta"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.38 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h3>Sie müssen nicht mit der Lösung anfangen. Beginnen Sie mit dem Problem.</h3>
            <p>
              Beschreiben Sie kurz, was heute nicht gut funktioniert. STRUKTIVA schaut mit Ihnen darauf, wo ein sinnvoller nächster Schritt liegen kann.
            </p>
            <p className="struktiva-digital-check-cta__hint">
              Beschreiben Sie kurz, wo Sie aktuell Schwierigkeiten, unnötige Arbeit oder unklare digitale Abläufe sehen.
            </p>
          </div>
          <div className="struktiva-digital-check-cta__actions">
            <a className="struktiva-digital-check-cta__primary" href="/kontakt#lead-form">
              <span>Digital-Check anfragen</span>
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="struktiva-digital-check-cta__secondary" href="/kontakt">
              Direkt Kontakt aufnehmen
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
