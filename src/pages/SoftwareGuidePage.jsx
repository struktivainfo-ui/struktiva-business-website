import { ArrowRight, ExternalLink } from 'lucide-react'
import { softwareGuideList } from '../content/softwareGuides.js'

function GuideSection({ section }) {
  return <section className="software-article-section">
    <h2>{section.heading}</h2>
    {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    {section.list && <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}
    {section.steps && <ol>{section.steps.map((item) => <li key={item}>{item}</li>)}</ol>}
    {section.tools && <div className="software-tools">{section.tools.map((tool) => <div key={tool.name}><h3>{tool.name}</h3><p>{tool.fit}</p><p><strong>Schwerpunkt:</strong> {tool.focus}</p><a href={tool.source} target="_blank" rel="noopener noreferrer">Funktionen beim Anbieter prüfen <ExternalLink aria-hidden="true" /></a></div>)}</div>}
    {section.source && <p className="software-source">Quelle: <a href={section.source.url} target="_blank" rel="noopener noreferrer">{section.source.label} <ExternalLink aria-hidden="true" /></a></p>}
  </section>
}

export default function SoftwareGuidePage({ guide }) {
  const related = softwareGuideList.filter((item) => item.path !== guide.path)
  return <main className="software-area">
    <article>
      <header className="software-article-hero"><div className="software-container">
        <nav className="software-breadcrumb" aria-label="Brotkrümelnavigation"><a href="/">Start</a><span>/</span><a href="/software-tools">Software & Tools</a><span>/</span><span aria-current="page">{guide.title}</span></nav>
        <p className="software-kicker">STRUKTIVA Ratgeber · {guide.readingTime} Lesezeit</p><h1>{guide.title}</h1><p>{guide.lead}</p><p className="software-article-hero__date">Redaktionell geprüft am 2. Oktober 2026</p>
      </div></header>
      <div className="software-container software-article-layout"><div className="software-article-body">
        <p className="software-editorial-note">Dieser Ratgeber ist eine redaktionelle Orientierung. Genannte Produkte wurden anhand öffentlicher Anbieterinformationen eingeordnet; es gab keinen eigenen Langzeittest. Zurzeit enthält die Seite keine Affiliate-Links.</p>
        {guide.sections.map((section) => <GuideSection section={section} key={section.heading} />)}
        <section className="software-article-section software-faq"><h2>Häufige Fragen</h2>{guide.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
      </div><aside className="software-article-aside"><p className="software-kicker">Weitere Themen</p>{related.map((item) => <a href={item.path} key={item.path}>{item.title}<ArrowRight aria-hidden="true" /></a>)}<a href="/software-tools">Alle Ratgeber ansehen <ArrowRight aria-hidden="true" /></a></aside></div>
    </article>
    <section className="software-principle"><div className="software-container"><p className="software-kicker">Persönliche Einordnung</p><h2>Welches System passt zu Ihrem Betrieb?</h2><p>Wir schauen zuerst auf bestehende Kontaktwege und Aufgaben. Danach lässt sich entscheiden, ob ein neues Werkzeug überhaupt nötig ist.</p><a href="/kontakt">Mit STRUKTIVA sprechen <ArrowRight aria-hidden="true" /></a></div></section>
  </main>
}
