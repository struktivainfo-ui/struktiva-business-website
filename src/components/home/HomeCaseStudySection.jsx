import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { currentNavigation } from '../../routing/routeConfig.js'

const salonKarolaUrl = 'https://salonkarola.de/'

const systemModules = [
  {
    key: 'website',
    title: 'Website und digitale Präsenz',
    text: 'Moderner Webauftritt mit klaren Informationen, Leistungen, Kontaktwegen und mobiler Nutzung.',
  },
  {
    key: 'visibility',
    title: 'Sichtbarkeit und Bewertungen',
    text: 'Verknüpfung von Website, Google-Unternehmensprofil und Bewertungswegen, unter anderem über QR-Strukturen.',
  },
  {
    key: 'contact',
    title: 'Kundenkontakt',
    text: 'Klarere Kontaktwege für Telefon, WhatsApp, Formulare und digitale Anfragen.',
  },
  {
    key: 'customers',
    title: 'Kundenverwaltung',
    text: 'Digitale Struktur für Kundendaten und kundenbezogene Abläufe.',
  },
  {
    key: 'loyalty',
    title: 'Digitale Kundenkarte und Bonusstruktur',
    text: 'Digitale Kundenbindung mit Kundenkarte und Bonuslogik für die mobile Nutzung.',
  },
  {
    key: 'operations',
    title: 'Interne digitale Abläufe',
    text: 'Digitale Unterstützung für Termin-, Kontakt- und Organisationsprozesse im betrieblichen Alltag.',
  },
]

const processSteps = ['Verstehen', 'Strukturieren', 'Umsetzen', 'Weiterentwickeln']

function CaseStudySystemMap({ reducedMotion }) {
  return (
    <div className="struktiva-case-map" aria-label="Systembausteine des Praxisbeispiels Salon Karola">
      <svg className="struktiva-case-map__lines" viewBox="0 0 720 520" aria-hidden="true" focusable="false">
        <motion.path
          d="M360 258 C286 112 166 92 92 154"
          initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
          whileInView={reducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M360 258 C436 108 566 94 634 164"
          initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
          whileInView={reducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M360 258 C232 242 138 286 86 378"
          initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
          whileInView={reducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M360 258 C498 242 596 286 642 380"
          initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
          whileInView={reducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M360 258 C342 348 280 416 188 454"
          initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
          whileInView={reducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M360 258 C382 350 444 420 532 454"
          initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
          whileInView={reducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>

      <div className="struktiva-case-map__center">
        <span>Salon Karola</span>
        <small>zusammenhängendes System</small>
      </div>

      <ol className="struktiva-case-map__nodes">
        {systemModules.map((module, index) => (
          <motion.li
            key={module.key}
            className={`struktiva-case-map__node struktiva-case-map__node--${module.key}`}
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.44, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{index + 1}</span>
            <strong>{module.title}</strong>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

export default function HomeCaseStudySection() {
  const reducedMotion = useReducedMotion()
  const demoLink =
    currentNavigation.primary.find((item) => item.transitionFor === '/praxisbeispiele') ||
    currentNavigation.primary.find((item) => item.href === '/demos') ||
    currentNavigation.secondaryCta

  return (
    <section className="struktiva-home-case-study" aria-labelledby="struktiva-home-case-title">
      <div className="struktiva-home-case-study__inner">
        <motion.div
          className="struktiva-home-case-study__intro"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="struktiva-home-case-study__eyebrow">Aus der Praxis</p>
          <h2 id="struktiva-home-case-title">
            Wie aus einzelnen digitalen Bausteinen ein zusammenhängendes System entsteht.
          </h2>
          <div className="struktiva-home-case-study__lead">
            <p>Für Salon Karola entstand nicht nur eine neue Website.</p>
            <p>
              Schritt für Schritt wurden verschiedene digitale Bereiche miteinander verbunden - vom öffentlichen Webauftritt über Kontaktwege und Bewertungen bis zur Kundenverwaltung und internen digitalen Abläufen.
            </p>
            <p>
              Das Praxisbeispiel zeigt, wie STRUKTIVA digitale Struktur nicht nur plant, sondern auch praktisch umsetzt.
            </p>
          </div>
        </motion.div>

        <div className="struktiva-case-story">
          <motion.article
            className="struktiva-case-story__context"
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="struktiva-case-story__label">Echtes lokales Projekt</p>
            <h3>Die Ausgangslage</h3>
            <p>
              Wie bei vielen lokalen Betrieben bestanden verschiedene digitale Aufgaben und Kontaktpunkte nebeneinander.
            </p>
            <p>
              Website, Kundenkontakt, Bewertungen, Kundendaten und interne Organisation waren keine durchgängige digitale Struktur.
            </p>
            <p>
              Die Aufgabe bestand deshalb nicht darin, einfach "noch eine Website" zu bauen, sondern die relevanten Bereiche Schritt für Schritt sinnvoll miteinander zu verbinden.
            </p>
          </motion.article>

          <motion.div
            className="struktiva-case-story__proof"
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <CaseStudySystemMap reducedMotion={Boolean(reducedMotion)} />
          </motion.div>
        </div>

        <div className="struktiva-case-modules" aria-label="Umgesetzte digitale Systembausteine">
          {systemModules.map((module, index) => (
            <motion.article
              key={module.key}
              className="struktiva-case-module"
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.44, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h4>{module.title}</h4>
              <p>{module.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="struktiva-case-process-result">
          <motion.article
            className="struktiva-case-process"
            initial={reducedMotion ? false : { opacity: 0, x: -18 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>Nicht alles auf einmal. Sondern Schritt für Schritt.</h3>
            <p>
              Die digitale Struktur wurde nicht als starres Komplettpaket entwickelt.
            </p>
            <p>
              Je nach Bedarf entstanden einzelne Bausteine, die anschließend sinnvoll miteinander verbunden und weiterentwickelt wurden.
            </p>
            <p>
              Genau darin liegt der STRUKTIVA-Ansatz: erst verstehen, dann strukturieren, anschließend gezielt umsetzen und weiterentwickeln.
            </p>
            <ol className="struktiva-case-process__steps" aria-label="STRUKTIVA Vorgehensweise">
              {processSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </motion.article>

          <motion.article
            className="struktiva-case-result"
            initial={reducedMotion ? false : { opacity: 0, x: 18 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>Das Ergebnis</h3>
            <p>
              Heute stehen die digitalen Bereiche nicht mehr nur als einzelne Maßnahmen nebeneinander.
            </p>
            <p>
              Website, Sichtbarkeit, Kundenkontakt, Kundenbindung und interne digitale Abläufe bilden eine deutlich zusammenhängendere Struktur.
            </p>
            <p>
              Das System kann schrittweise weiterentwickelt werden, wenn neue Anforderungen entstehen.
            </p>
            <p className="struktiva-case-result__note">
              Digitale Entwicklung ist kein einmaliges Projekt. Systeme verändern sich mit dem Betrieb und werden dort weiterentwickelt, wo neue Anforderungen entstehen.
            </p>
          </motion.article>
        </div>

        <motion.div
          className="struktiva-case-actions"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <a className="struktiva-case-actions__primary" href={demoLink.href}>
            <span>Praxisbeispiel ansehen</span>
            <ArrowRight aria-hidden="true" />
          </a>
          <a className="struktiva-case-actions__external" href={salonKarolaUrl} target="_blank" rel="noopener noreferrer">
            <span>Website von Salon Karola ansehen</span>
            <ExternalLink aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
