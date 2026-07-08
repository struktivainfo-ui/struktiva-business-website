import { motion, useReducedMotion } from 'framer-motion'
import { salonKarolaMethod } from './salonKarolaCaseData.js'

export default function CaseStudyMethodOutcome() {
  const reducedMotion = useReducedMotion()

  return (
    <>
      <section className="struktiva-salon-method" aria-labelledby="struktiva-salon-method-title">
        <div className="struktiva-salon-method__inner">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="struktiva-salon-eyebrow">STRUKTIVA-Methode</p>
            <h2 id="struktiva-salon-method-title">Was dieses Projekt über den STRUKTIVA-Ansatz zeigt.</h2>
          </motion.div>
          <motion.div
            className="struktiva-salon-method__flow"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {salonKarolaMethod.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="struktiva-salon-outcome" aria-labelledby="struktiva-salon-outcome-title">
        <div className="struktiva-salon-section-grid">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="struktiva-salon-eyebrow">Ergebnisgedanke</p>
            <h2 id="struktiva-salon-outcome-title">Das Ergebnis ist kein einzelnes Produkt.</h2>
            <p>Heute stehen verschiedene digitale Bereiche deutlich stärker im Zusammenhang.</p>
            <p>Der Webauftritt unterstützt Sichtbarkeit und Kontakt. Digitale Kundenprozesse ergänzen die öffentliche Kommunikation.</p>
            <p>Kundenverwaltung und Kundenbindung erweitern den digitalen Weg. Interne digitale Abläufe unterstützen die Organisation hinter den sichtbaren Kontaktpunkten.</p>
          </motion.div>
          <motion.div
            className="struktiva-salon-outcome__note"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>
              Entscheidend ist nicht, dass möglichst viele Funktionen vorhanden sind.
            </p>
            <p>
              Entscheidend ist, dass die eingesetzten Bausteine zum Betrieb passen und sinnvoll weiterentwickelt werden können.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="struktiva-salon-reality" aria-labelledby="struktiva-salon-reality-title">
        <div className="struktiva-salon-section-grid">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 id="struktiva-salon-reality-title">Digitale Systeme sind nie einfach „fertig“.</h2>
          </motion.div>
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>Betriebe verändern sich. Neue Anforderungen entstehen.</p>
            <p>
              Manche Funktionen werden angepasst, andere vereinfacht oder erweitert. Deshalb versteht STRUKTIVA digitale Entwicklung nicht als einmalige Übergabe, sondern als Struktur, die sich bei Bedarf weiterentwickeln kann.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="struktiva-salon-transfer" aria-labelledby="struktiva-salon-transfer-title">
        <div className="struktiva-salon-section-grid">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="struktiva-salon-eyebrow">Übertragbarer Gedanke</p>
            <h2 id="struktiva-salon-transfer-title">Nicht die Salon-Lösung kopieren. Die Denkweise übertragen.</h2>
          </motion.div>
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>Ein Handwerksbetrieb, ein Beratungsunternehmen oder ein lokaler Dienstleister braucht andere Funktionen als ein Friseursalon.</p>
            <p>Übertragbar ist nicht das fertige System.</p>
            <p>
              Übertragbar ist die Vorgehensweise: erst den tatsächlichen Alltag verstehen, dann Prioritäten setzen, anschließend passende digitale Bausteine verbinden.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
