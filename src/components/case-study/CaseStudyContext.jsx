import { motion, useReducedMotion } from 'framer-motion'

const contextQuestions = [
  'Wie finden Kunden den Betrieb?',
  'Wie nehmen sie Kontakt auf?',
  'Wie werden Bewertungen unterstützt?',
  'Wie können Kundendaten digital strukturiert werden?',
  'Wie kann Kundenbindung digital unterstützt werden?',
  'Welche internen Abläufe lassen sich übersichtlicher organisieren?',
]

export default function CaseStudyContext() {
  const reducedMotion = useReducedMotion()

  return (
    <>
      <section className="struktiva-salon-context" aria-labelledby="struktiva-salon-context-title">
        <div className="struktiva-salon-section-grid">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="struktiva-salon-eyebrow">Projektkontext</p>
            <h2 id="struktiva-salon-context-title">Die Aufgabe war größer als eine neue Website.</h2>
            <p>
              Der digitale Auftritt war ein wichtiger Ausgangspunkt. Im Projektverlauf wurde jedoch deutlich, dass mehrere Bereiche zusammenspielen.
            </p>
          </motion.div>
          <motion.ol
            className="struktiva-salon-question-list"
            aria-label="Betrachtete Projektfragen"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {contextQuestions.map((question, index) => (
              <li key={question}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{question}</p>
              </li>
            ))}
          </motion.ol>
        </div>
      </section>

      <section className="struktiva-salon-starting-point" aria-labelledby="struktiva-salon-starting-title">
        <div className="struktiva-salon-section-grid">
          <motion.div
            className="struktiva-salon-starting-point__statement"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>Aus einem einzelnen digitalen Projekt entstand deshalb Schritt für Schritt eine umfassendere Struktur.</p>
          </motion.div>
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="struktiva-salon-eyebrow">Ausgangslage</p>
            <h2 id="struktiva-salon-starting-title">Nicht alles neu. Sondern das Richtige sinnvoll weiterentwickeln.</h2>
            <p>
              Digitale Entwicklung bedeutet nicht automatisch, bestehende Abläufe komplett zu ersetzen.
            </p>
            <p>
              Bei Salon Karola wurden vorhandene Kontaktwege, betriebliche Anforderungen und neue digitale Möglichkeiten Schritt für Schritt betrachtet. Daraus entstanden einzelne Bausteine, die anschließend zunehmend miteinander verbunden wurden.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
