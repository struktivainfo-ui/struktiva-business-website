import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { currentNavigation } from '../../routing/routeConfig.js'

export default function CaseStudyCta() {
  const reducedMotion = useReducedMotion()
  const primaryCta = currentNavigation.primaryCta

  return (
    <section className="struktiva-salon-cta" aria-labelledby="struktiva-salon-cta-title">
      <motion.div
        className="struktiva-salon-cta__inner"
        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="struktiva-salon-eyebrow">Ihre Ausgangssituation ist anders</p>
          <h2 id="struktiva-salon-cta-title">Welche digitalen Bereiche sollten in Ihrem Unternehmen besser zusammenspielen?</h2>
          <p>
            Der Digital-Check betrachtet vorhandene Kontaktpunkte, Kundenwege und Abläufe. Daraus lässt sich gemeinsam ein sinnvoller nächster Schritt ableiten.
          </p>
        </div>
        <div className="struktiva-salon-cta__actions">
          <a className="struktiva-salon-primary" href={primaryCta.href}>
            <span>{primaryCta.label}</span>
            <ArrowRight aria-hidden="true" />
          </a>
          <a className="struktiva-salon-cta__text-link" href="/praxisbeispiele">
            Weitere Praxisbeispiele ansehen
          </a>
        </div>
      </motion.div>
    </section>
  )
}
