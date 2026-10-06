import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import './SchoenUndPraktischPage.css'

const pinterestUrl = 'https://www.pinterest.com/schoenundpraktisch/'

const themes = [
  { number: '01', title: 'Wohnen & Möbel', detail: 'Räume, in denen man gern bleibt.' },
  { number: '02', title: 'Haus & Garten', detail: 'Ideen für drinnen und draußen.' },
  { number: '03', title: 'Outdoor Living', detail: 'Terrassen, Pergolen und Plätze im Grünen.' },
  { number: '04', title: 'Gartenhäuser & Saunen', detail: 'Rückzugsorte mit besonderem Charakter.' },
  { number: '05', title: 'Ordnung & Alltag', detail: 'Praktische Lösungen, die gut aussehen.' },
  { number: '06', title: 'Geschenkideen', detail: 'Schöne Fundstücke für andere und für sich.' },
  { number: '07', title: 'Lifestyle & Wohlbefinden', detail: 'Kleine Ideen für einen angenehmen Alltag.' },
]

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

export default function SchoenUndPraktischPage() {
  return (
    <main className="sp-page">
      <section className="sp-hero" aria-labelledby="sp-title">
        <img
          className="sp-hero__image"
          src="/images/schoen-und-praktisch-terrasse.webp"
          alt=""
          fetchPriority="high"
        />
        <div className="sp-hero__shade" />
        <div className="sp-hero__content">
          <motion.p className="sp-kicker sp-hero__kicker" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Ein Wohnideen-Projekt von STRUKTIVA
          </motion.p>
          <motion.h1 id="sp-title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            Schön &amp; Praktisch <span>| Wohnideen</span>
          </motion.h1>
          <motion.p className="sp-hero__lead" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Schön wohnen. Praktisch leben. Wohlfühlen.<br />Inspiration für ein Zuhause, das sich gut anfühlt – vom Lieblingsplatz im Wohnzimmer bis zum Leben im Grünen.
          </motion.p>
          <motion.div className="sp-hero__actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <a className="sp-button sp-button--light" href={pinterestUrl} target="_blank" rel="noopener noreferrer">
              Ideen auf Pinterest entdecken <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="sp-hero__more" href="#themen">Themen ansehen <ArrowDown size={16} aria-hidden="true" /></a>
          </motion.div>
        </div>
        <p className="sp-hero__caption">Wohnen · Haus &amp; Garten · Outdoor Living</p>
      </section>

      <section className="sp-intro" aria-labelledby="sp-intro-title">
        <motion.div className="sp-container sp-intro__grid" {...reveal}>
          <p className="sp-kicker">Der Bereich</p>
          <div>
            <h2 id="sp-intro-title">Ideen für Räume, Rückzugsorte und das Leben dazwischen.</h2>
            <p>Schön &amp; Praktisch | Wohnideen ist ein eigenständiger Home-&amp;-Garden-Publisherbereich unter STRUKTIVA. Entdecke ausgewählte Ideen und Produkte rund um Wohnen, Garten, Familie, Lifestyle und Wohlbefinden – mit Blick auf Gestaltung und Alltagstauglichkeit.</p>
          </div>
        </motion.div>
      </section>

      <section className="sp-themes" id="themen" aria-labelledby="sp-themes-title">
        <div className="sp-container">
          <motion.div className="sp-section-head" {...reveal}>
            <p className="sp-kicker">Entdecken</p>
            <h2 id="sp-themes-title">Unsere Themen</h2>
            <p>Von kleinen Veränderungen im Alltag bis zu großen Ideen für draußen.</p>
          </motion.div>
          <div className="sp-themes__list">
            {themes.map((theme) => (
              <motion.div className="sp-theme" key={theme.number} {...reveal}>
                <span className="sp-theme__number">{theme.number}</span>
                <h3>{theme.title}</h3>
                <p>{theme.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-wellbeing" aria-labelledby="sp-wellbeing-title">
        <motion.div className="sp-container sp-wellbeing__grid" {...reveal}>
          <p className="sp-kicker">Für den Alltag</p>
          <div>
            <h2 id="sp-wellbeing-title">Lifestyle &amp; Wohlbefinden</h2>
            <p>Kleine Dinge, die den Alltag angenehmer machen – von Selfcare und Entspannung bis zu ausgewählten Produkten für mehr Wohlbefinden zu Hause.</p>
          </div>
        </motion.div>
      </section>

      <section className="sp-pinterest" aria-labelledby="sp-pinterest-title">
        <motion.div className="sp-container sp-pinterest__inner" {...reveal}>
          <div>
            <p className="sp-kicker">Die Ideensammlung</p>
            <h2 id="sp-pinterest-title">Weiterdenken. Merken. Wiederfinden.</h2>
            <p>Auf Pinterest wächst unsere Sammlung rund um Wohnräume, Möbel, Ordnung, Gartenhäuser, Saunen, Pergolen und Ideen für draußen.</p>
          </div>
          <a className="sp-button sp-button--dark" href={pinterestUrl} target="_blank" rel="noopener noreferrer">
            Zum Pinterest-Profil <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </section>

      <section className="sp-disclosure" aria-labelledby="sp-disclosure-title">
        <div className="sp-container sp-disclosure__inner">
          <p className="sp-kicker">Transparenz</p>
          <div>
            <h2 id="sp-disclosure-title">Hinweis zu Affiliate-Links</h2>
            <p>Einzelne Empfehlungen und Links können Affiliate-Links sein. Wenn darüber ein Kauf zustande kommt, kann STRUKTIVA eine Provision erhalten. Für dich entstehen dadurch keine zusätzlichen Kosten. Werbliche Inhalte werden entsprechend gekennzeichnet.</p>
            <a href="/werbekennzeichnung">Mehr zur Werbekennzeichnung <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    </main>
  )
}
