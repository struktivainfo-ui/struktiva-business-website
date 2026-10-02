import { ArrowRight } from 'lucide-react'
import { softwareGuideList } from '../content/softwareGuides.js'

export default function SoftwareHubPage() {
  return <main className="software-area">
    <section className="software-hero">
      <div className="software-container">
        <nav className="software-breadcrumb" aria-label="Brotkrümelnavigation"><a href="/">Start</a><span>/</span><span aria-current="page">Software & Tools</span></nav>
        <p className="software-kicker">STRUKTIVA Ratgeber</p>
        <h1>Software & Tools für kleine Unternehmen</h1>
        <p className="software-hero__lead">Weniger Werkzeug-Chaos. Bessere Entscheidungen für Kundenkontakt, E-Mail und interne Abläufe.</p>
        <a className="software-hero__link" href="#ratgeber">Ratgeber entdecken <ArrowRight aria-hidden="true" /></a>
      </div>
    </section>
    <section id="ratgeber" className="software-container software-index" aria-labelledby="software-index-title">
      <div className="software-section-heading"><p className="software-kicker">Drei gute Startpunkte</p><h2 id="software-index-title">Vom Bedarf zum passenden Werkzeug.</h2><p>Die Ratgeber helfen Ihnen, Anforderungen zu klären und Produkte anhand Ihres Arbeitsalltags auszuwählen.</p></div>
      <div className="software-guide-list">{softwareGuideList.map((guide, index) => <a className="software-guide-link" href={guide.path} key={guide.path}><span className="software-guide-link__number">0{index + 1}</span><span><strong>{guide.title}</strong><small>{guide.lead}</small></span><ArrowRight aria-hidden="true" /></a>)}</div>
    </section>
    <section className="software-principle"><div className="software-container"><p className="software-kicker">Unsere Arbeitsweise</p><h2>Erst den Ablauf verstehen. Dann das Tool wählen.</h2><p>STRUKTIVA betrachtet Website, Kontaktwege und interne Arbeit zusammen. Ein Tool ist nur sinnvoll, wenn es eine konkrete Lücke schließt und im Alltag gepflegt werden kann.</p><a href="/kontakt">Digitalen Ablauf besprechen <ArrowRight aria-hidden="true" /></a></div></section>
    <section className="software-container software-disclosure"><h2>So entstehen diese Empfehlungen</h2><p>Wir vergleichen Funktionen anhand öffentlich zugänglicher Anbieterinformationen und benennen Grenzen der Einordnung. Die Seiten enthalten derzeit keine Affiliate-Links. Falls künftig vergütete Links hinzukommen, werden sie direkt am Link kenntlich gemacht. Eine Vergütung ändert unsere Auswahlkriterien nicht.</p><p>Zuletzt redaktionell geprüft: 2. Oktober 2026.</p></section>
  </main>
}
