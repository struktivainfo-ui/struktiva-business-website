import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const connectionSteps = ['Sichtbarkeit', 'Kontakt', 'Kunde', 'interner Ablauf', 'Weiterentwicklung']
const processSteps = [
  {
    title: 'Analysieren',
    text: 'Verstehen, wo digitale Brüche, unnötige Arbeit oder unklare Kundenwege entstehen.',
  },
  {
    title: 'Strukturieren',
    text: 'Prioritäten ordnen und entscheiden, welche Veränderung zuerst sinnvoll ist.',
  },
  {
    title: 'Umsetzen',
    text: 'Die passenden digitalen Bausteine praktisch entwickeln oder verbessern.',
  },
  {
    title: 'Weiterentwickeln',
    text: 'Strukturen anpassen, wenn neue Anforderungen oder Abläufe entstehen.',
  },
]

export function SolutionsConnectionSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-solutions-connection-section" aria-labelledby="struktiva-solutions-connection-title">
      <div className="struktiva-solutions-connection-section__inner">
        <motion.div
          className="struktiva-solutions-connection-section__copy"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-solutions-eyebrow">Der Zusammenhang entscheidet</p>
          <h2 id="struktiva-solutions-connection-title">
            Die beste Einzellösung hilft wenig, wenn der nächste Schritt wieder abbricht.
          </h2>
          <div>
            <p>Ein Interessent kann Sie finden und trotzdem nicht anfragen.</p>
            <p>Ein Kunde kann Kontakt aufnehmen und trotzdem in einem unklaren Prozess landen.</p>
            <p>Eine Automatisierung kann technisch funktionieren und trotzdem den falschen Ablauf schneller machen.</p>
            <p>Deshalb betrachtet STRUKTIVA nicht nur einzelne Bausteine, sondern ihre Übergänge.</p>
          </div>
        </motion.div>

        <motion.ol
          className="struktiva-solutions-connection-flow"
          aria-label="Übergänge von Sichtbarkeit bis Weiterentwicklung"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {connectionSteps.map((step, index) => (
            <li key={step} data-break={index === 1 || index === 3 ? 'true' : undefined}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}

export function SolutionsProcessSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-solutions-process-section" aria-labelledby="struktiva-solutions-process-title">
      <div className="struktiva-solutions-process-section__inner">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="struktiva-solutions-process-title">Beratung und Umsetzung gehören zusammen.</h2>
          <p>
            STRUKTIVA kann analysieren, strukturieren und die passenden digitalen Bausteine anschließend praktisch umsetzen.
          </p>
          <p>
            Dabei kann die Lösung klein beginnen oder mehrere Bereiche verbinden. Entscheidend ist nicht die Anzahl der Funktionen, sondern ob die digitale Struktur im Alltag verständlich und sinnvoll nutzbar ist.
          </p>
        </motion.div>

        <motion.ol
          className="struktiva-solutions-process-line"
          aria-label="Arbeitsweise von STRUKTIVA"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}

export function SolutionsBoundarySection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-solutions-boundary-section" aria-labelledby="struktiva-solutions-boundary-title">
      <motion.div
        className="struktiva-solutions-boundary-section__inner"
        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 id="struktiva-solutions-boundary-title">Nicht jede digitale Möglichkeit ist automatisch eine gute Lösung.</h2>
        <div>
          <p>Eine App ist nicht immer notwendig.</p>
          <p>Eine Automatisierung ist nicht immer sinnvoll.</p>
          <p>Und nicht jede Website muss vollständig neu gebaut werden.</p>
          <p>STRUKTIVA prüft zuerst, welche Veränderung tatsächlich einen sinnvollen Unterschied machen kann.</p>
        </div>
      </motion.div>
    </section>
  )
}

export function SolutionsCtaSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-solutions-cta-section" aria-labelledby="struktiva-solutions-cta-title">
      <motion.div
        className="struktiva-solutions-cta-section__inner"
        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.38 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="struktiva-solutions-eyebrow">Erst verstehen, dann entscheiden</p>
          <h2 id="struktiva-solutions-cta-title">Welche Bereiche sollten in Ihrem Unternehmen besser zusammenspielen?</h2>
          <p>
            Beschreiben Sie kurz, wo heute unnötige Arbeit, unklare Kontaktwege oder digitale Brüche entstehen.
          </p>
          <p>
            STRUKTIVA schaut mit Ihnen darauf, welche nächsten Schritte sinnvoll sein könnten.
          </p>
        </div>
        <div className="struktiva-solutions-cta-section__actions">
          <a className="struktiva-solutions-primary" href="/digital-check#digital-check-anfrage">
            <span>Digital-Check anfragen</span>
            <ArrowRight aria-hidden="true" />
          </a>
          <a className="struktiva-solutions-cta-section__text-link" href="/kontakt">
            Direkt Kontakt aufnehmen
          </a>
        </div>
      </motion.div>
    </section>
  )
}
