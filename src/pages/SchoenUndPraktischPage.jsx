import { useCurrentPath } from '../hooks/useCurrentPath.js'
import './SchoenUndPraktischPage.css'
const flurImage = '/images/schoen-und-praktisch-kleiner-flur.jpg'
const livingRoomImage = '/images/schoen-und-praktisch-kleines-wohnzimmer.jpg'
const smallRoomImage = '/images/schoen-und-praktisch-dachschraege.jpg'

const pinterestUrl = 'https://www.pinterest.com/schoenundpraktisch/'
const schrankwerkUrl = 'https://awin1.com/cread.php?awinmid=11400&awinaffid=3015945&ued=https://www.schrankwerk.de/modelle/kommode-lena&utm_source=Pinterest&utm_medium=organic'

const stories = [
  {
    number: '01',
    title: 'Kleiner Flur, mehr Platz',
    description: 'Sieben Ideen für einen geordneten Eingangsbereich – mit Möbeln, die den Laufweg frei lassen.',
    href: '/schoen-und-praktisch/kleiner-flur',
    image: flurImage,
    imageAlt: 'Heller Flur mit Stauraumideen und klaren Ordnungszonen',
    category: 'Ordnung · 5 Minuten',
  },
  {
    number: '02',
    title: 'Ein kleines Wohnzimmer in sechs Zonen',
    description: 'Sofa, Lesen, Essen und Arbeiten sinnvoll ordnen, ohne den Raum zu überstellen.',
    href: '/schoen-und-praktisch/kleines-wohnzimmer',
    image: livingRoomImage,
    imageAlt: 'Kleines helles Wohnzimmer mit Wohn-, Lese- und Essbereich',
    category: 'Wohnen · 6 Minuten',
  },
  {
    number: '03',
    title: 'Stauraum unter der Dachschräge',
    description: 'Erst messen, dann planen: fünf Möglichkeiten, die niedrigen Bereiche besser zu nutzen.',
    href: '/schoen-und-praktisch/dachschraege',
    image: smallRoomImage,
    imageAlt: 'Kompakt eingerichteter Wohnraum mit platzsparenden Möbeln',
    category: 'Stauraum · 4 Minuten',
  },
]

const roomZones = [
  { title: 'Sofa und Gespräche', text: 'Richte die Sitzgruppe so aus, dass der natürliche Hauptweg durch den Raum frei bleibt.' },
  { title: 'Lesen und Ruhe', text: 'Ein Sessel, eine kleine Ablage und gezieltes Licht bilden einen ruhigen Platz – auch ohne Raumteiler.' },
  { title: 'Essen', text: 'Wähle Tisch und Stühle nach der tatsächlichen Nutzung. Ein kleiner Tisch darf näher an der Wand stehen.' },
  { title: 'Arbeiten', text: 'Wenn ein Arbeitsplatz gebraucht wird, plane eine feste kompakte Fläche mit einer Ablage für Arbeitsutensilien.' },
  { title: 'Stauraum', text: 'Geschlossene Möbel beruhigen den Blick. Nutze lieber wenige passende Elemente als viele kleine Regale.' },
  { title: 'Pflanzen und Licht', text: 'Pflanzen und mehrere warme Lichtquellen geben Tiefe, ohne zusätzliche Möbel aufzustellen.' },
]

const flurIdeas = [
  { title: '1. Miss zuerst den Laufweg', text: 'Miss die freie Breite an mehreren Stellen und beachte Türen, Heizkörper und Garderobe. So bleibt die spätere Lösung alltagstauglich.' },
  { title: '2. Wähle schmale Möbel', text: 'Eine flache Kommode kann Schlüssel und Kleinigkeiten aufnehmen. Entscheidend sind Tiefe und freie Durchgangsbreite.' },
  { title: '3. Nutze die Wandhöhe', text: 'Haken und ein schmales Wandregal schaffen Platz für Dinge, die täglich gebraucht werden, ohne den Boden zu verstellen.' },
  { title: '4. Gib Schuhen einen festen Platz', text: 'Eine geschlossene, flache Aufbewahrung hält den Eingangsbereich ruhiger. Plane genug Platz für häufig getragene Schuhe.' },
  { title: '5. Ergänze einen Spiegel', text: 'Ein Spiegel macht die Wand funktionaler und reflektiert Licht. Hänge ihn so, dass er beim Vorbeigehen leicht nutzbar bleibt.' },
  { title: '6. Plane eine kleine Ablage', text: 'Ein klar definierter Platz für Schlüssel und Post verhindert, dass sich Alltagsdinge im ganzen Flur verteilen.' },
  { title: '7. Halte die Gestaltung ruhig', text: 'Wenige Farben und ausgewählte Dekoration lassen den Raum geordnet wirken und lenken nicht von seiner Funktion ab.' },
]

const atticIdeas = [
  { title: '1. Höhe an mehreren Stellen messen', text: 'Notiere die verfügbare Höhe und Tiefe entlang der Wand. Bei Dachschrägen verändert sich beides schon über kurze Strecken.' },
  { title: '2. Niedrige Bereiche gezielt nutzen', text: 'Flache Schubladen, Boxen oder niedrige Möbel passen in Bereiche, die für hohe Schränke ungeeignet sind.' },
  { title: '3. Hohe Möbel an die höchste Wand stellen', text: 'Die volle Raumhöhe eignet sich für Dinge, auf die du regelmäßig zugreifen möchtest.' },
  { title: '4. Öffnungen und Wege berücksichtigen', text: 'Fenster, Türen, Heizkörper und Laufwege gehören in die Skizze, bevor du Möbel auswählst.' },
  { title: '5. Sondermaße sorgfältig prüfen', text: 'Vergleiche die exakten Innenmaße, Montagebedingungen und nutzbare Tiefe, bevor du eine Maßlösung bestellst.' },
]

function SiteHeader() {
  return (
    <header className="sp-header">
      <a className="sp-wordmark" href="/schoen-und-praktisch" aria-label="Schön & Praktisch – Startseite">
        <span className="sp-wordmark-mark" aria-hidden="true">S<span>+</span>P</span>
        <span className="sp-wordmark-name">Schön <i>&</i> Praktisch<small>WOHNIDEEN VON STRUKTIVA</small></span>
      </a>
      <nav className="sp-nav" aria-label="Wohnideen">
        <a href="/schoen-und-praktisch#ideen">Ideen entdecken</a>
        <a className="sp-nav-pinterest" href={pinterestUrl} target="_blank" rel="noreferrer">Auf Pinterest ↗</a>
      </nav>
    </header>
  )
}

function Hero({ image, imageAlt, eyebrow, title, description, action, actionHref, secondaryLabel = 'Ideen entdecken', secondaryHref = '#ideen' }) {
  return (
    <section className="sp-hero">
      <img className="sp-hero-image" src={image} alt={imageAlt} fetchPriority="high" />
      <div className="sp-hero-wash" aria-hidden="true" />
      <SiteHeader />
      <div className="sp-hero-copy">
        <p className="sp-eyebrow"><span />{eyebrow}</p>
        <h1>{title}</h1>
        <p className="sp-hero-description">{description}</p>
        <div className="sp-hero-actions">
          <a className="sp-button sp-button-primary" href={actionHref}>{action}<span aria-hidden="true">↗</span></a>
          <a className="sp-text-link sp-hero-secondary" href={secondaryHref}>{secondaryLabel}<span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <p className="sp-hero-caption"><span>01 / 03</span> IDEEN FÜR EIN ZUHAUSE, DAS ZU DIR PASST</p>
    </section>
  )
}

function StoryList() {
  return (
    <section className="sp-section sp-ideas" id="ideen" aria-labelledby="sp-ideas-title">
      <div className="sp-section-heading">
        <div><p className="sp-eyebrow"><span />Zum Weiterdenken</p><h2 id="sp-ideas-title">Mehr aus den Räumen machen, die du hast.</h2></div>
        <p>Konkrete kleine Schritte, die im Alltag Platz schaffen und sich gut anfühlen.</p>
      </div>
      <div className="sp-story-list">
        {stories.map((story) => (
          <a className="sp-story" href={story.href} key={story.number}>
            <span className="sp-story-number">{story.number}</span>
            <span className="sp-story-image-wrap"><img src={story.image} alt={story.imageAlt} loading="lazy" /></span>
            <span className="sp-story-copy"><span className="sp-story-category">{story.category}</span><strong>{story.title}</strong><span>{story.description}</span><span className="sp-story-read">Ratgeber lesen <b aria-hidden="true">↗</b></span></span>
            <span className="sp-story-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}

function LandingPage() {
  return (
    <>
      <Hero image={livingRoomImage} imageAlt="Lichtes kleines Wohnzimmer mit bewusst angeordneten Wohnbereichen" eyebrow="Wohnen · Ordnung · Alltag" title={<>Schön wohnen.<br /><em>Praktisch leben.</em></>} description="Wohnideen, die gut aussehen und im Alltag wirklich helfen – angefangen bei den kleinen Räumen." action="Ratgeber für kleine Räume" actionHref="#ideen" secondaryLabel="Das Projekt kennenlernen" secondaryHref="#projekt" />
      <StoryList />
      <section className="sp-manifesto" id="projekt">
        <div className="sp-manifesto-index">S+P<br /><span>CALM HOME, CLEAR MIND</span></div>
        <div><p className="sp-eyebrow"><span />Schön & Praktisch</p><h2>Weniger suchen.<br /><em>Mehr Zuhause.</em></h2></div>
        <p>Ein Wohnideen-Projekt von STRUKTIVA. Wir sammeln Anregungen für ein Zuhause, das sich stimmig anfühlt und den Alltag leichter macht – mit klarer Kennzeichnung, wenn Links Werbung enthalten.</p>
      </section>
      <PinterestBand />
    </>
  )
}

function PinterestBand() {
  return <section className="sp-pinterest-band"><div><p className="sp-eyebrow"><span />Zum Merken und Wiederfinden</p><h2>Mehr kleine Ideen für dein Zuhause.</h2></div><a className="sp-button sp-button-light" href={pinterestUrl} target="_blank" rel="noreferrer">Pinterest-Profil ansehen <span aria-hidden="true">↗</span></a></section>
}

function ArticleHero({ article }) {
  return (
    <section className={`sp-hero sp-article-hero ${article.heroClass}`}>
      <img className="sp-hero-image" src={article.image} alt={article.imageAlt} fetchPriority="high" />
      <div className="sp-hero-wash" aria-hidden="true" />
      <SiteHeader />
      <div className="sp-hero-copy">
        <p className="sp-breadcrumb"><a href="/schoen-und-praktisch">Schön & Praktisch</a><span>/</span>{article.shortTitle}</p>
        <p className="sp-eyebrow"><span />{article.category}</p>
        <h1>{article.title}</h1>
        <p className="sp-hero-description">{article.intro}</p>
        <div className="sp-hero-actions"><a className="sp-button sp-button-primary" href="#ratgeber">Zum Ratgeber <span aria-hidden="true">↓</span></a><span className="sp-reading-time">{article.readingTime} Min. Lesezeit</span></div>
      </div>
      <p className="sp-hero-caption"><span>{article.number} / 03</span> INSPIRATION, DIE SICH UMSETZEN LÄSST</p>
    </section>
  )
}

function NumberedIdeas({ ideas }) {
  return <ol className="sp-numbered-ideas">{ideas.map((idea, index) => <li key={idea.title}><span className="sp-idea-index">{String(index + 1).padStart(2, '0')}</span><div><h3>{idea.title}</h3><p>{idea.text}</p></div></li>)}</ol>
}

function ArticlePage({ article }) {
  return (
    <>
      <ArticleHero article={article} />
      <main className="sp-article" id="ratgeber">
        <div className="sp-article-lead"><p className="sp-eyebrow"><span />Ein guter Anfang</p><p>{article.lead}</p></div>
        <NumberedIdeas ideas={article.ideas} />
        {article.affiliate ? <section className="sp-editorial-cta"><p className="sp-eyebrow"><span />Eine passende Möglichkeit</p><h2>Suchst du eine schmale Kommode für den Flur?</h2><p>Prüfe vor der Auswahl die verfügbare Tiefe, den Wandabstand und den freien Durchgang. Dieses Modell ist ein konkretes Beispiel – vergleiche die Maße mit deinem Flur.</p><a className="sp-button sp-button-primary" href={schrankwerkUrl} target="_blank" rel="sponsored nofollow noreferrer">Kommode Lena bei Schrankwerk ansehen <span aria-hidden="true">↗</span></a><small>Werbelink: Wenn du über diesen Link kaufst, kann Schön & Praktisch eine Provision erhalten. Für dich entstehen keine Mehrkosten.</small></section> : null}
        <div className="sp-article-outro"><div><p className="sp-eyebrow"><span />In deinem Tempo</p><h2>Miss erst nach.<br /><em>Entscheide dann.</em></h2></div><p>{article.outro}</p></div>
        <section className="sp-next-stories"><p className="sp-eyebrow"><span />Weitere Wohnideen</p><div>{stories.filter((story) => story.href !== article.path).map((story) => <a href={story.href} key={story.number}><span>{story.category}</span><strong>{story.title}</strong><b aria-hidden="true">↗</b></a>)}</div></section>
        <div className="sp-back-link"><a href="/schoen-und-praktisch">← Alle Wohnideen ansehen</a></div>
      </main>
      <PinterestBand />
    </>
  )
}

const articleByPath = {
  '/schoen-und-praktisch/kleiner-flur': {
    number: '01', path: '/schoen-und-praktisch/kleiner-flur', shortTitle: 'Kleiner Flur', category: 'Kleine Räume · Ordnung', readingTime: 5,
    title: 'Ein kleiner Flur kann mehr.',
    intro: 'Sieben Ideen für einen Eingangsbereich, in dem du ankommst, Dinge ablegst und trotzdem gut durchkommst.',
    lead: 'Ein schmaler Flur braucht vor allem freie Wege und feste Plätze für die Dinge, die jeden Tag mitkommen. Miss zuerst die Wand und den Durchgang – dann findest du leichter eine Lösung, die in deinen Alltag passt.',
    image: flurImage, imageAlt: 'Heller, schmaler Flur mit klarer Ordnung und platzsparender Einrichtung', heroClass: 'sp-hero-flur', ideas: flurIdeas, affiliate: true,
    outro: 'Ein Maßband und eine kurze Skizze reichen für den ersten Schritt. Notiere Wandbreite, gewünschte Tiefe und Durchgang – und vergleiche erst dann Möbel.'
  },
  '/schoen-und-praktisch/kleines-wohnzimmer': {
    number: '02', path: '/schoen-und-praktisch/kleines-wohnzimmer', shortTitle: 'Kleines Wohnzimmer', category: 'Wohnen · Raumplanung', readingTime: 6,
    title: 'Sechs Zonen. Ein Raum, der mitdenkt.',
    intro: 'Sofa, Lesen, Essen und Arbeiten können zusammenpassen – wenn die Laufwege sichtbar frei bleiben.',
    lead: 'Ein kleines Wohnzimmer kann mehrere Aufgaben erfüllen. Du brauchst dafür nicht zwingend Raumteiler: Teppiche, Licht und die Stellung der Möbel helfen, Bereiche zu ordnen, ohne den Raum zu zerschneiden.',
    image: livingRoomImage, imageAlt: 'Kleines, helles Wohnzimmer mit Wohn-, Lese- und Essbereich', heroClass: 'sp-hero-wohnzimmer', ideas: roomZones, affiliate: false,
    outro: 'Zeichne zunächst die wichtigsten Wege und Möbel grob auf. Wenn der Raum im Alltag gut durchquerbar ist, lassen sich die einzelnen Bereiche Schritt für Schritt ergänzen.'
  },
  '/schoen-und-praktisch/dachschraege': {
    number: '03', path: '/schoen-und-praktisch/dachschraege', shortTitle: 'Dachschräge', category: 'Stauraum · Planung', readingTime: 4,
    title: 'Unter der Schräge steckt Platz.',
    intro: 'Mit genauen Maßen und einer klaren Reihenfolge wird aus der schwierigen Ecke nutzbarer Stauraum.',
    lead: 'Bei einer Dachschräge verändert sich die nutzbare Höhe schon über kurze Strecken. Eine einfache Skizze mit mehreren Messpunkten hilft, passende Möbel auszuwählen und Fehlkäufe zu vermeiden.',
    image: smallRoomImage, imageAlt: 'Platzsparend eingerichteter Raum mit multifunktionalen Möbeln', heroClass: 'sp-hero-dachschraege', ideas: atticIdeas, affiliate: false,
    outro: 'Halte die Messpunkte und mögliche Hindernisse fest. Für Maßmöbel solltest du zusätzlich Montage, Türen, Fenster und die tatsächlich nutzbare Innentiefe prüfen.'
  },
}

function SiteFooter() {
  return <footer className="sp-footer"><a className="sp-footer-wordmark" href="/schoen-und-praktisch">Schön <i>&</i> Praktisch</a><p>Ein Wohnideen-Projekt von <a href="https://struktiva.de">STRUKTIVA</a>. Einzelne Links können Werbung enthalten.</p><nav aria-label="Rechtliche Informationen"><a href="https://struktiva.de/impressum">Impressum</a><a href="https://struktiva.de/datenschutz">Datenschutz</a><a href="https://struktiva.de/werbekennzeichnung">Werbekennzeichnung</a></nav></footer>
}

export default function SchoenUndPraktischPage() {
  const pathname = useCurrentPath()
  const article = articleByPath[pathname]

  return <div className="schoen-praktisch-site">{article ? <ArticlePage article={article} /> : <LandingPage />}<SiteFooter /></div>
}
