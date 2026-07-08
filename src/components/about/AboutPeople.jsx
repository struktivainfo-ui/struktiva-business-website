import { motion, useReducedMotion } from 'framer-motion'

export default function AboutPeople() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-about-people" aria-labelledby="struktiva-about-people-title">
      <div className="struktiva-about-people__inner">
        <motion.figure
          className="struktiva-about-people__portrait"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/images/inhaber-sven-jessica.webp"
            alt="Sven Matzke und Jessica Wacker von STRUKTIVA"
            width="810"
            height="780"
            loading="lazy"
            decoding="async"
          />
        </motion.figure>
        <motion.div
          className="struktiva-about-people__copy"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-about-eyebrow">Direkte Ansprechpartner</p>
          <h2 id="struktiva-about-people-title">Hinter STRUKTIVA stehen Sven Matzke und Jessica Wacker.</h2>
          <p className="struktiva-about-people__names">Sven Matzke und Jessica Wacker</p>
          <div className="struktiva-about-people__text">
            <p>Die Zusammenarbeit bei STRUKTIVA ist persönlich und direkt.</p>
            <p>Ideen und Probleme werden nicht zwischen anonymen Abteilungen weitergereicht.</p>
            <p>Themen werden gemeinsam betrachtet, strukturiert und auf eine sinnvolle Umsetzung geprüft.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
