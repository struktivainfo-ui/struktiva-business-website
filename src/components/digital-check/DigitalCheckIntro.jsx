import { motion, useReducedMotion } from 'framer-motion'

export default function DigitalCheckIntro() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-digital-check-intro" aria-labelledby="struktiva-digital-check-intro-title">
      <motion.div
        className="struktiva-digital-check-intro__inner"
        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.38 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="struktiva-digital-check-eyebrow">Nicht bei der Lösung anfangen</p>
          <h2 id="struktiva-digital-check-intro-title">Viele digitale Probleme sind keine Technikprobleme.</h2>
        </div>
        <div className="struktiva-digital-check-intro__copy">
          <p>Eine Website kann modern aussehen und trotzdem keinen klaren Weg zur Anfrage bieten.</p>
          <p>Ein CRM kann vorhanden sein und trotzdem zusätzliche Arbeit erzeugen.</p>
          <p>Eine Automatisierung kann technisch funktionieren und trotzdem einen schlechten Ablauf schneller machen.</p>
          <p>Deshalb betrachtet der Digital-Check zuerst den Zusammenhang.</p>
        </div>
        <p className="struktiva-digital-check-intro__message">
          Erst verstehen, wo Reibung entsteht. Dann entscheiden, was wirklich verändert werden sollte.
        </p>
      </motion.div>
    </section>
  )
}
