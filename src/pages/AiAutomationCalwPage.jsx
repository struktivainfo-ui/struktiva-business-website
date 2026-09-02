import { localSeoPages } from '../content/localSeoContent.js'
import { CaseStudyProof, CheckList, EditorialColumns, FaqSection, FinalCta, LocalSeoPage, LocalSeoSection, ProcessSteps, RegionNote, RelatedLinks } from '../components/local-seo/LocalSeoSections.jsx'

const page = localSeoPages.aiAutomation

export default function AiAutomationCalwPage() {
  return (
    <LocalSeoPage page={page} variant="ai">
      <LocalSeoSection eyebrow="Wo Automatisierung helfen kann" title="Wiederkehrende Arbeit muss nicht jedes Mal bei null beginnen." intro="Viele Aufgaben wiederholen sich jeden Tag. Genau dort kann eine sinnvolle Automatisierung Zeit sparen und Abläufe zuverlässiger machen. STRUKTIVA betrachtet zuerst den bestehenden Prozess und erst danach die technische Lösung." id="einsatzfelder">
        <EditorialColumns items={[
          { title: 'Kundenanfragen', text: 'Anfragen aus Website, E-Mail oder anderen Kanälen strukturiert erfassen und in den passenden Prozess überführen.' },
          { title: 'Termine und Nachfassen', text: 'Erinnerungen, Bestätigungen und offene Vorgänge nachvollziehbar vorbereiten, ohne persönlichen Kontakt zu ersetzen.' },
          { title: 'Informationen und Aufgaben', text: 'Daten nicht mehrfach übertragen, sondern klar zuordnen, weitergeben und an einer passenden Stelle sichtbar machen.' },
          { title: 'Wiederkehrende Kommunikation', text: 'Vorlagen, Entwürfe und häufige Antworten so vorbereiten, dass Mitarbeitende Zeit für die wichtigen Fälle behalten.' },
        ]} />
      </LocalSeoSection>

      <LocalSeoSection eyebrow="KI im Unternehmensalltag" title="KI kann unterstützen, wenn sie in den tatsächlichen Ablauf passt." tone="dark" id="ki-im-alltag">
        <div className="struktiva-local-split">
          <CheckList label="Geeignete KI-Unterstützung" items={['Kundenkommunikation und E-Mail-Entwürfe vorbereiten', 'Texte, Inhalte und Angebote strukturieren', 'interne Wissensabfragen und Dokumente aufbereiten', 'Informationen zusammenfassen und vorsortieren', 'Marketinginhalte als Rohfassung vorbereiten', 'wiederkehrende Aufgaben analysieren']} />
          <div className="struktiva-local-split__copy"><h3>Das Werkzeug entscheidet nicht allein.</h3><p>Entscheidend ist, wie die Unterstützung in den Arbeitsablauf integriert wird: mit klaren Quellen, nachvollziehbaren Regeln und einer Person, die Verantwortung behält.</p><p>Wenn eine einfache Regel die Aufgabe zuverlässig löst, ist sie oft die bessere Lösung. KI wird dort ergänzt, wo sie einen echten zusätzlichen Beitrag leistet.</p></div>
        </div>
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Automatisierte Kundenprozesse" title="Aus einzelnen Werkzeugen kann ein nachvollziehbarer Kundenprozess werden." id="kundenprozesse">
        <ProcessSteps steps={[
          { title: 'Anfrage', text: 'Eine Anfrage kommt über Website, Formular, WhatsApp, E-Mail oder einen anderen Kontaktweg.' },
          { title: 'Erfassung', text: 'Die relevanten Informationen werden strukturiert aufgenommen und nicht unnötig mehrfach übertragen.' },
          { title: 'Bearbeitung', text: 'Aufgaben, Kundendaten oder Termine können in den richtigen Prozess überführt werden.' },
          { title: 'Nachfassen', text: 'Offene Anfragen und wichtige Vorgänge lassen sich gezielt nachverfolgen.' },
          { title: 'Kundenbindung', text: 'Bewertungen, Erinnerungen oder weitere Kontaktpunkte können sinnvoll ergänzt werden.' },
        ]} />
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Entwickeln und verbinden" title="Die passende Lösung kann klein beginnen und mit dem Betrieb wachsen." tone="soft" id="loesungen">
        <EditorialColumns items={[
          { title: 'KI-Unterstützung', text: 'KI in sinnvolle Unternehmensprozesse und klar abgegrenzte Arbeitsabläufe integrieren.' },
          { title: 'Automatisierungen', text: 'Wiederkehrende Aufgaben erkennen und dort automatisieren, wo Regeln und Zuständigkeiten klar sind.' },
          { title: 'CRM, Apps und Dashboards', text: 'Kundeninformationen, Aufgaben und wichtige Kennzahlen verständlich strukturieren.' },
          { title: 'Formulare und Kundenkontakt', text: 'Informationen sauber erfassen und Website, Kontaktwege und interne Prozesse miteinander verbinden.' },
        ]} />
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Sinnvoll statt vollständig" title="Nicht alles sollte automatisiert werden." id="grenzen"><div className="struktiva-local-split"><div className="struktiva-local-split__copy"><h3>Die richtige Frage lautet: Wo entsteht heute unnötige Arbeit?</h3><p>Manche Abläufe benötigen weiterhin persönlichen Kontakt. Andere Aufgaben können vollständig automatisiert werden. Häufig ist eine Kombination aus Mensch, Software und KI die sinnvollste Lösung.</p></div><CheckList label="Prüfkriterien" items={['Wiederholt sich die Aufgabe?', 'Sind Eingang und gewünschtes Ergebnis klar beschreibbar?', 'Welche Fehlerfolgen und Daten sind zu berücksichtigen?', 'Wer prüft Ergebnisse und entscheidet über Ausnahmen?']} /></div></LocalSeoSection>
      <div className="struktiva-local-shell"><CaseStudyProof text="Bei Salon Karola wurden Website, Sichtbarkeit, Kundenkontakt, Bewertungen, Kundenverwaltung und interne Abläufe Schritt für Schritt verbunden. Das Praxisbeispiel zeigt, dass nicht ein einzelnes Werkzeug, sondern das Zusammenspiel der Bereiche entscheidend ist." /></div>
      <LocalSeoSection eyebrow="Ein Einstieg, der zum Betrieb passt" title="Auch kleine und mittelständische Unternehmen können sinnvoll anfangen." tone="dark" id="einstieg"><div className="struktiva-local-split"><div className="struktiva-local-split__copy"><h3>Ein konkretes Problem genügt.</h3><p>Sie müssen nicht bereits wissen, welche KI, Software oder Automatisierung Sie benötigen. Es reicht, wenn ein Ablauf heute Zeit kostet, unnötig kompliziert ist oder nicht zuverlässig funktioniert.</p></div><CheckList label="Typische Ausgangssituationen" items={['Wir beantworten ständig dieselben Anfragen.', 'Unsere Kundendaten liegen an mehreren Stellen.', 'Wir vergessen regelmäßig nachzufassen.', 'Termine und Informationen werden mehrfach übertragen.', 'Wir möchten KI nutzen, wissen aber nicht sinnvoll wofür.']} /></div></LocalSeoSection>
      <LocalSeoSection eyebrow="So arbeitet STRUKTIVA" title="Verstehen, strukturieren, umsetzen und weiterentwickeln." id="vorgehen"><ProcessSteps steps={[{ title: 'Verstehen', text: 'Den aktuellen Ablauf und die verwendeten Systeme gemeinsam betrachten.' }, { title: 'Strukturieren', text: 'Unnötige Arbeit, Medienbrüche und mögliche Verbesserungen identifizieren.' }, { title: 'Lösung entwickeln', text: 'Entscheiden, welche digitale Lösung tatsächlich sinnvoll ist.' }, { title: 'Umsetzen und weiterentwickeln', text: 'Automatisierungen, Apps, Formulare oder andere Systeme aufbauen und bei Bedarf anpassen.' }]} /></LocalSeoSection>
      <div className="struktiva-local-shell"><RegionNote focus="STRUKTIVA unterstützt Unternehmen in Calw und im Nordschwarzwald beim praxisnahen Einstieg. Persönliche Prozessaufnahme und digitale Umsetzung lassen sich passend kombinieren." /></div>
      <FaqSection faqs={page.faqs} />
      <div className="struktiva-local-shell"><RelatedLinks links={[{ label: 'Digitale Unternehmensberatung in Calw', href: '/digitale-unternehmensberatung-calw' }, { label: 'Digitale Kundenprozesse in Calw', href: '/digitale-kundenprozesse-calw' }, { label: 'Digitalisierung für Unternehmen in Calw', href: '/digitalisierung-calw' }]} /></div>
      <FinalCta title="KI sinnvoll einsetzen statt einfach nur ausprobieren." text="Wir schauen uns den Ablauf an und entwickeln daraus einen sinnvollen digitalen nächsten Schritt." />
    </LocalSeoPage>
  )
}
