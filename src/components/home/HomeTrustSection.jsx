import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const workingSteps = [
  {
    title: 'Verstehen',
    text: 'Wir schauen auf die aktuelle Situation, vorhandene Systeme, Kontaktwege und Abläufe.',
  },
  {
    title: 'Strukturieren',
    text: 'Wir ordnen Probleme, Prioritäten und sinnvolle nächste Schritte.',
  },
  {
    title: 'Umsetzen',
    text: 'Die vereinbarten digitalen Bausteine werden gezielt entwickelt oder verbessert.',
  },
  {
    title: 'Weiterentwickeln',
    text: 'Digitale Strukturen können angepasst werden, wenn sich Anforderungen und Abläufe verändern.',
  },
]

export default function HomeTrustSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="struktiva-home-trust" aria-labelledby="struktiva-home-trust-title">
      <div className="struktiva-home-trust__inner">
        <motion.div
          className="struktiva-home-trust__intro"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-home-trust__eyebrow">Zusammenarbeit mit Klarheit</p>
          <h2 id="struktiva-home-trust-title">
            Digitale Beratung sollte verständlich beginnen – nicht mit einem Produktkatalog.
          </h2>
          <div className="struktiva-home-trust__lead">
            <p>STRUKTIVA beginnt nicht mit der Frage, welche Software, Website oder Automatisierung verkauft werden kann.</p>
            <p>
              Am Anfang steht die Frage: Was funktioniert bereits, wo entstehen unnötige Brüche und was muss tatsächlich besser zusammenspielen?
            </p>
            <p>Daraus entsteht eine klare Struktur – und anschließend nur die Umsetzung, die für das Unternehmen sinnvoll ist.</p>
          </div>
        </motion.div>

        <div className="struktiva-trust-body">
          <motion.article
            className="struktiva-trust-statement"
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="struktiva-trust-statement__kicker">Arbeitsweise</p>
            <h3>Erst verstehen. Dann strukturieren. Danach gezielt umsetzen.</h3>
            <div className="struktiva-trust-statement__copy">
              <p>Nicht jedes Unternehmen braucht dieselben Systeme.</p>
              <p>
                Manchmal ist eine klarere Website der wichtigste Schritt. Manchmal sind Kontaktwege, Kundenbindung oder interne Abläufe das größere Thema.
              </p>
              <p>STRUKTIVA betrachtet deshalb zuerst den Zusammenhang und entwickelt daraus eine passende Reihenfolge.</p>
            </div>
          </motion.article>

          <motion.aside
            className="struktiva-trust-people"
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <figure className="struktiva-trust-people__image">
              <img
                src="/images/inhaber-sven-jessica.webp"
                alt="Sven Matzke und Jessica Wacker von STRUKTIVA"
                width="810"
                height="780"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="struktiva-trust-people__copy">
              <p className="struktiva-trust-people__names">Sven Matzke und Jessica Wacker</p>
              <p>Hinter STRUKTIVA stehen Sven Matzke und Jessica Wacker.</p>
              <p>
                Es gibt keine anonymen Übergaben zwischen Vertrieb, Beratung und Umsetzung. Die Zusammenarbeit ist persönlich, direkt und nachvollziehbar. Ideen werden nicht nur besprochen, sondern auf technische Machbarkeit, Alltagstauglichkeit und sinnvolle Reihenfolge geprüft.
              </p>
            </div>
          </motion.aside>
        </div>

        <motion.blockquote
          className="struktiva-trust-review"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-trust-review__label">Erfahrung aus der Zusammenarbeit</p>
          <div className="struktiva-trust-review__quote">
            <p>
              Ich kann Struktiva wirklich nur weiterempfehlen. Meine Webseite ist richtig toll geworden und genauso, wie ich sie mir vorgestellt habe.
            </p>
            <p>
              Was mir besonders gefallen hat, ist die Zusammenarbeit. Es wird immer wieder nachgefragt, wie man sich etwas vorstellt, welche Wünsche man hat und was einem wichtig ist. Eigene Ideen werden aufgenommen und richtig gut umgesetzt. Auch wenn man zwischendurch noch etwas ändern möchte, wird darauf sofort eingegangen.
            </p>
            <p>
              Man fühlt sich einfach gut aufgehoben und merkt, dass wirklich Wert darauf gelegt wird, dass man am Ende zufrieden ist.
            </p>
            <p>
              Ich bin mit meiner Webseite mehr als zufrieden und hätte mir das Ergebnis nicht besser vorstellen können. Vielen Dank an Struktiva für die tolle Arbeit und die wirklich angenehme Zusammenarbeit.
            </p>
          </div>
          <footer className="struktiva-trust-review__footer">
            <cite>Dennis Forschner</cite>
            <a
              href="https://www.google.com/maps/contrib/103331501915897155785/reviews?hl=de"
              target="_blank"
              rel="noopener noreferrer"
            >
              Originalrezension auf Google ansehen
              <ArrowRight aria-hidden="true" />
            </a>
          </footer>
        </motion.blockquote>

        <motion.div
          className="struktiva-trust-process"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <ol aria-label="Arbeitsweise von STRUKTIVA">
            {workingSteps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div
          className="struktiva-trust-close"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h3>Sie müssen nicht wissen, welche technische Lösung Sie brauchen.</h3>
            <p>Es reicht, wenn Sie wissen, was heute nicht gut funktioniert oder unnötig kompliziert ist.</p>
            <p>Den passenden digitalen Weg entwickeln wir daraus gemeinsam Schritt für Schritt.</p>
          </div>
          <a href="/ueber-uns" className="struktiva-trust-close__link">
            <span>Mehr über STRUKTIVA erfahren</span>
            <ArrowRight aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
