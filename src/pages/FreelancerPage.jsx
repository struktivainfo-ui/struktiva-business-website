import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'

const services = [
  ['01', 'Websites, die führen.', 'Vom ersten Eindruck bis zur Anfrage: klare Seiten, die auf jedem Gerät leicht verständlich sind.'],
  ['02', 'Kundenwege, die passen.', 'Kontakt, E-Mail, WhatsApp und Bewertungen so verbinden, dass aus Interesse der nächste sinnvolle Schritt wird.'],
  ['03', 'Technik, die mitdenkt.', 'SEO-Basis, Tracking, Qualitätssicherung und saubere Veröffentlichung – damit der Auftritt auch hinter den Kulissen funktioniert.'],
]

const projects = [
  ['Salon Karola', 'Website, digitale Kundenkarte, Google-Bewertungen und Kontaktwege zu einem stimmigen Besuchererlebnis verbunden.', 'Web · Kundenbindung · Bewertungen'],
  ['STRUKTIVA', 'Ein Lead-System entwickelt, das Interessenten durch einen klaren digitalen Check bis zur strukturierten Anfrage führt.', 'Konzept · Prozess · Umsetzung'],
  ['ZERION Beyond', 'Markenauftritt und Informationsstruktur für ein wissensbasiertes Angebot mit ruhiger, präziser Nutzerführung umgesetzt.', 'Marke · Struktur · Frontend'],
]

export default function FreelancerPage() {
  const reducedMotion = useReducedMotion()
  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 20 },
    whileInView: reducedMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <main className="sven-freelance-page">
      <section className="sven-freelance-hero" id="start" aria-labelledby="sven-freelance-title">
        <nav className="sven-freelance-nav" aria-label="Freelancer-Navigation">
          <a className="sven-freelance-nav__brand" href="#start" aria-label="Sven Matzke – Start"><span>SM</span><strong>Sven Matzke</strong></a>
          <div className="sven-freelance-nav__links"><a href="#arbeit">Arbeit</a><a href="#leistungen">Leistungen</a><a href="#kontakt">Kontakt</a></div>
          <a className="sven-freelance-nav__contact" href="#kontakt">Projekt starten <ArrowDownRight aria-hidden="true" /></a>
        </nav>

        <div className="sven-freelance-hero__content">
          <motion.div className="sven-freelance-hero__title" initial={reducedMotion ? false : { opacity: 0, y: 24 }} animate={reducedMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <p className="sven-freelance-kicker">Digitaler Projektkoordinator · Calw / Remote</p>
            <h1 id="sven-freelance-title">Digitale Arbeit.<br /><em>Endlich klar.</em></h1>
          </motion.div>
          <motion.div className="sven-freelance-hero__note" {...reveal(0.13)}>
            <span className="sven-freelance-hero__dot" aria-hidden="true" />
            <p>Websites, Kundenwege und digitale Prozesse für Unternehmen, die weniger Reibung und mehr Wirkung brauchen.</p>
            <a href="#leistungen">Was ich konkret mache <ArrowDownRight aria-hidden="true" /></a>
          </motion.div>
        </div>

        <div className="sven-freelance-hero__field" aria-hidden="true">
          <span className="sven-freelance-hero__field-label">WEB / PROZESS / SICHTBARKEIT</span>
          <span className="sven-freelance-hero__field-orbit" />
          <span className="sven-freelance-hero__field-mark">SM</span>
        </div>
        <div className="sven-freelance-hero__footer"><span>Freelance Digital Projects</span><span>2026</span></div>
      </section>

      <section className="sven-freelance-statement" aria-labelledby="sven-freelance-statement-title">
        <motion.p className="sven-freelance-kicker" {...reveal()}>Worum es geht</motion.p>
        <motion.h2 id="sven-freelance-statement-title" {...reveal(0.06)}>Nicht noch ein Projekt, das gut aussieht.<br /><em>Sondern eins, das gut läuft.</em></motion.h2>
        <motion.div className="sven-freelance-statement__copy" {...reveal(0.12)}><p>Ich bringe Design, technische Umsetzung und den Weg Ihrer Kunden zusammen. So wird aus einer Idee ein Auftritt, der verständlich ist, Vertrauen schafft und die Arbeit im Alltag erleichtert.</p><a href="#arbeit">Arbeit ansehen <ArrowDownRight aria-hidden="true" /></a></motion.div>
      </section>

      <section className="sven-freelance-work" id="arbeit" aria-labelledby="sven-freelance-work-title">
        <div className="sven-freelance-work__head"><p className="sven-freelance-kicker">Aus der Praxis</p><h2 id="sven-freelance-work-title">Weniger versprechen.<br />Mehr <em>umsetzen.</em></h2></div>
        <div className="sven-freelance-work__list">
          {projects.map(([title, text, detail], index) => (
            <motion.article className="sven-freelance-work__item" key={title} {...reveal(index * 0.08)}>
              <span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p><small>{detail}</small><ArrowUpRight aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </section>

      <section className="sven-freelance-services" id="leistungen" aria-labelledby="sven-freelance-services-title">
        <div className="sven-freelance-services__intro"><p className="sven-freelance-kicker">Leistungen</p><h2 id="sven-freelance-services-title">Was braucht Ihr Projekt <em>wirklich?</em></h2><p>Ich steige dort ein, wo es sinnvoll ist: bei einer einzelnen Landingpage, einem hängenden Prozess oder beim kompletten digitalen Auftritt.</p></div>
        <div className="sven-freelance-services__list">
          {services.map(([number, title, text], index) => <motion.article key={number} {...reveal(index * 0.07)}><span>{number}</span><h3>{title}</h3><p>{text}</p></motion.article>)}
        </div>
      </section>

      <section className="sven-freelance-approach" aria-labelledby="sven-freelance-approach-title">
        <div><p className="sven-freelance-kicker">Zusammenarbeit</p><h2 id="sven-freelance-approach-title">Klarer Start.<br />Saubere <em>Landung.</em></h2></div>
        <ol><li><strong>Verstehen</strong><span>Ziel, Kunden und die wirkliche Aufgabe klären.</span></li><li><strong>Entscheiden</strong><span>Eine tragfähige Struktur statt unnötiger Extras entwickeln.</span></li><li><strong>Umsetzen</strong><span>Konsequent bauen, testen und verständlich übergeben.</span></li></ol>
      </section>

      <section className="sven-freelance-contact" id="kontakt" aria-labelledby="sven-freelance-contact-title">
        <motion.div {...reveal()}><p className="sven-freelance-kicker">Direkter Kontakt</p><h2 id="sven-freelance-contact-title">Lassen Sie uns<br /><em>klar anfangen.</em></h2><p>Schreiben Sie mir kurz, worum es geht. Ich melde mich persönlich zurück – mit einem klaren Blick darauf, was der nächste sinnvolle Schritt ist.</p><div className="sven-freelance-contact__actions"><a className="sven-freelance-button" href="mailto:struktiva.info@gmail.com?subject=Freelance-Projektanfrage">E-Mail schreiben <Mail aria-hidden="true" /></a><a href="https://www.linkedin.com/in/sven-matzke-960b63411" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a><a href="https://github.com/struktivainfo-ui" target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a></div></motion.div>
        <footer><span>© {new Date().getFullYear()} Sven Matzke</span><a href="https://www.freelancermap.de/profil/digitaler-projektmanager-web-tracking-seo-und-prozesse" target="_blank" rel="noreferrer">Freelancermap <ArrowUpRight aria-hidden="true" /></a></footer>
      </section>
    </main>
  )
}
