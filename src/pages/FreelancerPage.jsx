import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Check, Code2, Github, Linkedin, Mail, Search, Workflow, Wrench } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Websites & Relaunches',
    text: 'Unternehmenswebsites und Landingpages mit verständlicher Struktur, guter mobiler Nutzung und klaren nächsten Schritten.',
    icon: Code2,
  },
  {
    number: '02',
    title: 'Kontakt & Kundenwege',
    text: 'Formulare, WhatsApp, E-Mail und Lead-Prozesse so verbinden, dass Anfragen vollständig und nutzbar ankommen.',
    icon: Workflow,
  },
  {
    number: '03',
    title: 'Sichtbarkeit & Messbarkeit',
    text: 'SEO-Grundlagen, Google Search Console, Tracking und Consent technisch sauber und nachvollziehbar aufsetzen.',
    icon: Search,
  },
  {
    number: '04',
    title: 'Technik & Qualität',
    text: 'Fehler analysieren, Funktionen prüfen und digitale Projekte sicher veröffentlichen und weiterentwickeln.',
    icon: Wrench,
  },
]

const projects = [
  {
    label: 'Praxisprojekt',
    title: 'Salon Karola',
    text: 'Website, Kontaktwege, Google-Bewertungen und eine digitale Kundenkarte wurden zu einem nachvollziehbaren Kundenweg verbunden.',
    points: ['Webauftritt & mobile Nutzung', 'QR- und Bewertungsstruktur', 'Kunden- und Terminprozesse'],
    tone: 'gold',
  },
  {
    label: 'Eigenes System',
    title: 'STRUKTIVA Lead-System',
    text: 'Ein klar geführter Anfrageprozess, der Website-Besucher vom ersten Bedarf bis zur strukturierten Kontaktaufnahme begleitet.',
    points: ['Anforderungs- und Lead-Logik', 'E-Mail-Benachrichtigungen', 'Qualitätssicherung & Deployment'],
    tone: 'ink',
  },
  {
    label: 'Markenauftritt',
    title: 'ZERION Beyond',
    text: 'Eine eigenständige Markenwebsite für einen wissensbasierten Bereich – mit klarer Informationsführung und ruhigem Auftritt.',
    points: ['Konzeption & Inhaltsstruktur', 'Frontend-Umsetzung', 'Klarer digitaler Erstkontakt'],
    tone: 'paper',
  },
]

const workingSteps = [
  ['Verstehen', 'Ziel, Zielgruppe, vorhandene Systeme und echte Engpässe klären.'],
  ['Strukturieren', 'Inhalte, Anforderungen und den sinnvollsten nächsten Schritt festlegen.'],
  ['Umsetzen', 'Konsequent entwickeln, testen und für Desktop wie Smartphone ausarbeiten.'],
  ['Weiterdenken', 'Ergebnisse prüfen und den digitalen Auftritt bei Bedarf weiterentwickeln.'],
]

export default function FreelancerPage() {
  const reducedMotion = useReducedMotion()
  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 18 },
    whileInView: reducedMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.22 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <main className="sven-freelance-page">
      <section className="sven-freelance-hero" aria-labelledby="sven-freelance-title">
        <div className="sven-freelance-hero__grain" aria-hidden="true" />
        <nav className="sven-freelance-nav" aria-label="Freelancer-Navigation">
          <a className="sven-freelance-nav__brand" href="#start" aria-label="Sven Matzke – Start">
            <span>SM</span>
            <strong>Sven Matzke</strong>
          </a>
          <div className="sven-freelance-nav__links">
            <a href="#leistungen">Leistungen</a>
            <a href="#projekte">Projekte</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </nav>

        <div className="sven-freelance-hero__inner" id="start">
          <motion.div className="sven-freelance-hero__copy" initial={reducedMotion ? false : { opacity: 0, y: 22 }} animate={reducedMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}>
            <p className="sven-freelance-kicker">Freelance Digital Projects · Calw / Remote</p>
            <h1 id="sven-freelance-title">Digitale Projekte, die <em>funktionieren.</em></h1>
            <p className="sven-freelance-hero__lead">
              Ich entwickle Unternehmenswebsites, klare Kundenwege und technische Lösungen für kleine Unternehmen, Selbstständige und lokale Dienstleister.
            </p>
            <div className="sven-freelance-hero__actions">
              <a className="sven-freelance-button sven-freelance-button--gold" href="#kontakt">
                Projekt besprechen <ArrowDownRight aria-hidden="true" />
              </a>
              <a className="sven-freelance-text-link" href="https://www.freelancermap.de/profil/digitaler-projektmanager-web-tracking-seo-und-prozesse" target="_blank" rel="noreferrer">
                Freelancermap-Profil <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div className="sven-freelance-hero__portrait" initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }} animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }} transition={{ duration: 0.68, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
            <div className="sven-freelance-hero__portrait-frame">
              <img src="/images/founder-sven.jpg" alt="Sven Matzke" width="640" height="820" />
            </div>
            <div className="sven-freelance-hero__stamp" aria-label="Websites, Prozesse und Technik">
              <span>Websites</span><span>Prozesse</span><span>Technik</span>
            </div>
          </motion.div>
        </div>
        <div className="sven-freelance-hero__bottom" aria-hidden="true"><span>Web · UX · SEO · Prozesse</span><span>↓</span></div>
      </section>

      <section className="sven-freelance-intro" aria-labelledby="sven-freelance-intro-title">
        <motion.div {...reveal()}>
          <p className="sven-freelance-kicker sven-freelance-kicker--dark">Nicht nur Gestaltung</p>
          <h2 id="sven-freelance-intro-title">Ein guter Auftritt beginnt nicht im Design-Tool. Sondern beim echten Problem.</h2>
        </motion.div>
        <motion.div className="sven-freelance-intro__aside" {...reveal(0.08)}>
          <p>Ich verbinde Gestaltung, technische Umsetzung und Kundenführung. Dadurch entsteht keine schöne Fassade, sondern ein digitaler Auftritt, der Orientierung gibt und Arbeit erleichtert.</p>
          <a href="#leistungen">Was ich umsetze <ArrowDownRight aria-hidden="true" /></a>
        </motion.div>
      </section>

      <section className="sven-freelance-services" id="leistungen" aria-labelledby="sven-freelance-services-title">
        <div className="sven-freelance-section-head">
          <p className="sven-freelance-kicker">Leistungen</p>
          <h2 id="sven-freelance-services-title">Vom ersten Klick bis zum funktionierenden Prozess.</h2>
        </div>
        <div className="sven-freelance-services__list">
          {services.map(({ number, title, text, icon: Icon }, index) => (
            <motion.article className="sven-freelance-service" key={title} {...reveal(index * 0.05)}>
              <span className="sven-freelance-service__number">{number}</span>
              <Icon aria-hidden="true" />
              <div><h3>{title}</h3><p>{text}</p></div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="sven-freelance-projects" id="projekte" aria-labelledby="sven-freelance-projects-title">
        <div className="sven-freelance-section-head sven-freelance-section-head--light">
          <p className="sven-freelance-kicker">Aus der Praxis</p>
          <h2 id="sven-freelance-projects-title">Struktur wird sichtbar, wenn sie im Alltag hilft.</h2>
        </div>
        <div className="sven-freelance-projects__grid">
          {projects.map((project, index) => (
            <motion.article key={project.title} className={`sven-freelance-project sven-freelance-project--${project.tone}`} {...reveal(index * 0.07)}>
              <p>{project.label}</p>
              <h3>{project.title}</h3>
              <span className="sven-freelance-project__line" aria-hidden="true" />
              <p className="sven-freelance-project__text">{project.text}</p>
              <ul>{project.points.map((point) => <li key={point}><Check aria-hidden="true" />{point}</li>)}</ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="sven-freelance-method" aria-labelledby="sven-freelance-method-title">
        <div className="sven-freelance-section-head">
          <p className="sven-freelance-kicker sven-freelance-kicker--dark">Zusammenarbeit</p>
          <h2 id="sven-freelance-method-title">Klar arbeiten. Sauber umsetzen.</h2>
        </div>
        <ol>
          {workingSteps.map(([title, text], index) => (
            <motion.li key={title} {...reveal(index * 0.05)}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{text}</p></div></motion.li>
          ))}
        </ol>
      </section>

      <section className="sven-freelance-contact" id="kontakt" aria-labelledby="sven-freelance-contact-title">
        <div className="sven-freelance-contact__halo" aria-hidden="true" />
        <motion.div {...reveal()}>
          <p className="sven-freelance-kicker">Direkter Kontakt</p>
          <h2 id="sven-freelance-contact-title">Sie haben ein digitales Thema, das endlich klar werden soll?</h2>
          <p>Schreiben Sie mir kurz, worum es geht. Ich melde mich persönlich und wir schauen gemeinsam, was sinnvoll ist.</p>
          <div className="sven-freelance-contact__actions">
            <a className="sven-freelance-button sven-freelance-button--light" href="mailto:struktiva.info@gmail.com?subject=Freelance-Projektanfrage">E-Mail schreiben <Mail aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/sven-matzke-960b63411" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a>
            <a href="https://github.com/struktivainfo-ui" target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a>
          </div>
        </motion.div>
        <footer><span>© {new Date().getFullYear()} Sven Matzke</span><span>Websites · Kundenwege · digitale Prozesse</span></footer>
      </section>
    </main>
  )
}
