import { motion, useReducedMotion } from 'framer-motion'

export default function SolutionsIntro() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-solutions-intro" aria-labelledby="struktiva-solutions-intro-title">
      <div className="struktiva-solutions-intro__inner">
        <motion.div
          className="struktiva-solutions-intro__heading"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-solutions-eyebrow">Nicht jedes Unternehmen braucht dasselbe</p>
          <h2 id="struktiva-solutions-intro-title">Drei Lösungsbereiche - aber keine drei starren Pakete.</h2>
        </motion.div>

        <motion.div
          className="struktiva-solutions-intro__copy"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>Die drei STRUKTIVA-Lösungswelten helfen dabei, digitale Probleme einzuordnen.</p>
          <p>In der Praxis überschneiden sich die Bereiche häufig.</p>
          <p>
            Eine neue Website kann wenig bewirken, wenn der Kontaktweg danach unklar bleibt. Eine Automatisierung hilft wenig, wenn der zugrunde liegende Ablauf nicht sauber strukturiert ist.
          </p>
          <p>Deshalb werden die Bereiche nicht isoliert betrachtet.</p>
        </motion.div>
      </div>
    </section>
  )
}
