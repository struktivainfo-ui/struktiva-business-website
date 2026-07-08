import { ArrowRight } from 'lucide-react'

export default function PackagesCta() {
  return (
    <section className="struktiva-packages-cta" aria-labelledby="struktiva-packages-cta-title">
      <p className="struktiva-packages-eyebrow">Erst Bedarf verstehen, dann Umfang festlegen</p>
      <h2 id="struktiva-packages-cta-title">Welche Form der Zusammenarbeit für Ihr Unternehmen sinnvoll ist, hängt von Ihrer tatsächlichen Situation ab.</h2>
      <p>Der Digital-Check hilft dabei, Probleme, Prioritäten und mögliche nächste Schritte einzuordnen.</p>
      <div className="struktiva-packages-cta__actions">
        <a className="struktiva-packages-primary-link" href="/digital-check">
          <span>Digital-Check ansehen</span>
          <ArrowRight aria-hidden="true" />
        </a>
        <a className="struktiva-packages-text-link" href="/kontakt">
          Direkt Kontakt aufnehmen
        </a>
      </div>
    </section>
  )
}
