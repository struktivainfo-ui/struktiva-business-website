import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function DigitalCheckTrustSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-digital-check-trust" aria-labelledby="struktiva-digital-check-trust-title">
      <div className="struktiva-digital-check-trust__inner">
        <motion.div
          className="struktiva-digital-check-trust__stance"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.36 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="struktiva-digital-check-trust-title">Technik ist ein Werkzeug. Die Struktur entscheidet.</h2>
          <p>STRUKTIVA beginnt nicht mit einer Liste von Produkten.</p>
          <p>
            Je nach Ausgangssituation kann der richtige nächste Schritt eine bessere Website, ein klarerer Kontaktweg, eine Kundenstruktur, eine interne Anwendung oder eine kleine Automatisierung sein.
          </p>
          <p>Manchmal ist auch die beste Entscheidung, vorerst weniger zu verändern.</p>
        </motion.div>

        <motion.div
          className="struktiva-digital-check-trust__case"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.36 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-digital-check-eyebrow">Aus einem echten Projekt</p>
          <h2>Bei Salon Karola entstand die digitale Struktur ebenfalls Schritt für Schritt.</h2>
          <p>Das Projekt zeigt, dass sinnvolle digitale Entwicklung nicht mit einer maximalen Funktionsliste beginnen muss.</p>
          <p>
            Aus einzelnen Anforderungen entstanden nach und nach verbundene Bereiche - von Website und Sichtbarkeit bis zu Kundenbindung und internen digitalen Abläufen.
          </p>
          <a href="/praxisbeispiele/salon-karola" className="struktiva-digital-check-text-link">
            <span>Salon-Karola-Projekt ansehen</span>
            <ArrowRight aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
