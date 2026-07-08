import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { aboutDevelopmentExamples } from './aboutData.js'

export default function AboutDevelopment() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-about-development" aria-labelledby="struktiva-about-development-title">
      <div className="struktiva-about-development__inner">
        <motion.div
          className="struktiva-about-development__copy"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="struktiva-about-development-title">Digitale Entwicklung darf klein beginnen.</h2>
          <p>Nicht jedes Unternehmen muss sofort ein großes Digitalprojekt starten.</p>
          <p>Ein sinnvoller erster Schritt kann sein:</p>
          <ul>
            {aboutDevelopmentExamples.map((example) => (
              <li key={example}>{example}</li>
            ))}
          </ul>
          <p>
            Wenn daraus später weitere Anforderungen entstehen, können zusätzliche Bausteine ergänzt werden.
          </p>
          <p className="struktiva-about-development__statement">
            Struktur bedeutet nicht, alles auf einmal zu bauen. Struktur bedeutet, in der richtigen Reihenfolge zu handeln.
          </p>
        </motion.div>
        <motion.div
          className="struktiva-about-practice"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-about-eyebrow">Aus der Praxis</p>
          <h2>Ein echtes Beispiel für schrittweise digitale Entwicklung.</h2>
          <p>Bei Salon Karola entstand die digitale Struktur ebenfalls nicht als starres Komplettpaket.</p>
          <p>
            Aus verschiedenen Anforderungen entwickelten sich schrittweise verbundene Bereiche - von Website und Sichtbarkeit bis zu Kundenbindung und internen digitalen Abläufen.
          </p>
          <a href="/praxisbeispiele/salon-karola" className="struktiva-about-text-link">
            <span>Salon-Karola-Projekt ansehen</span>
            <ArrowRight aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
