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
          <p>Nicht jedes Unternehmen braucht sofort ein großes Digitalprojekt. Ein sinnvoller erster Schritt kann sein:</p>
          <ul>
            {aboutDevelopmentExamples.map((example) => (
              <li key={example}>{example}</li>
            ))}
          </ul>
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
          <figure className="struktiva-about-practice__image">
            <img src="/images/salon-karola-interior-project.jpg" alt="Innenraum von Salon Karola in Calw-Wimberg" loading="lazy" />
          </figure>
          <p className="struktiva-about-eyebrow">Aus der Praxis</p>
          <h2>Ein echtes Beispiel für schrittweise digitale Entwicklung.</h2>
          <p>Bei Salon Karola wurden Website, Sichtbarkeit, Kontaktwege und Kundenbindung Schritt für Schritt verbunden.</p>
          <a href="/praxisbeispiele/salon-karola" className="struktiva-about-text-link">
            <span>Salon-Karola-Projekt ansehen</span>
            <ArrowRight aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
