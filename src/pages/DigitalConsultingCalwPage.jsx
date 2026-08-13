import { localSeoPages } from '../content/localSeoContent.js'
import { CaseStudyProof, CheckList, EditorialColumns, FaqSection, FinalCta, LocalSeoPage, LocalSeoSection, ProcessSteps, RegionNote, RelatedLinks } from '../components/local-seo/LocalSeoSections.jsx'

const page = localSeoPages.consulting

export default function DigitalConsultingCalwPage() {
  return (
    <LocalSeoPage page={page} variant="consulting">
      <LocalSeoSection eyebrow="Der Blick aufs Ganze" title="Digitale Einzelmaßnahmen lösen selten ein strukturelles Problem." intro="Eine neue Website, ein zusätzliches Tool oder eine Automatisierung kann helfen. Nachhaltig wird die Verbesserung erst, wenn Übergaben, Zuständigkeiten und Kundenwege mitgedacht werden." id="ausgangslage">
        <EditorialColumns items={[
          { title: 'Sichtbarkeit ohne klaren Weg', text: 'Der Betrieb wird gefunden, aber Angebot, Vertrauen oder nächster Schritt bleiben unklar.' },
          { title: 'Anfragen ohne Struktur', text: 'Informationen kommen über mehrere Kanäle an und müssen manuell zusammengesucht werden.' },
          { title: 'Werkzeuge ohne Verbindung', text: 'Website, E-Mail, Tabellen und Fachsysteme erfüllen einzelne Aufgaben, arbeiten aber nicht zusammen.' },
          { title: 'Ideen ohne Priorität', text: 'Viele mögliche Maßnahmen stehen im Raum, doch Reihenfolge, Aufwand und tatsächlicher Nutzen sind offen.' },
        ]} />
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Beratung und Umsetzung" title="STRUKTIVA ordnet zuerst – und baut anschließend nur, was gebraucht wird." intro="Die Beratung konzentriert sich auf digitale Systeme und Strukturen. Sie ersetzt keine klassische betriebswirtschaftliche, steuerliche oder rechtliche Beratung." tone="dark" id="ansatz">
        <div className="struktiva-local-split">
          <CheckList label="Betrachtete Bereiche" items={['Website und digitale Präsenz', 'Google-Sichtbarkeit und lokale Relevanz', 'Kontakt- und Anfragewege', 'Kundeninformationen und Nachbetreuung', 'interne Übersichten und digitale Ordnung', 'geeignete Automatisierungen und KI-Unterstützung']} />
          <p className="struktiva-local-callout">Digitale Einzelmaßnahmen funktionieren besser, wenn sie als System gedacht werden. Deshalb beginnt STRUKTIVA mit Zusammenhängen, nicht mit einem Produktkatalog.</p>
        </div>
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Vorgehen" title="Von der Bestandsaufnahme zu einer tragfähigen Reihenfolge." id="vorgehen">
        <ProcessSteps steps={[
          { title: 'Verstehen', text: 'Ziele, vorhandene Systeme, Kontaktpunkte und alltägliche Reibung gemeinsam erfassen.' },
          { title: 'Strukturieren', text: 'Abhängigkeiten sichtbar machen und Maßnahmen nach Wirkung, Aufwand und Dringlichkeit ordnen.' },
          { title: 'Umsetzen', text: 'Geeignete digitale Bausteine entwickeln, verbinden oder bestehende Lösungen gezielt verbessern.' },
          { title: 'Weiterentwickeln', text: 'Erfahrungen aus dem Betrieb aufnehmen und die Struktur dort anpassen, wo neue Anforderungen entstehen.' },
        ]} />
      </LocalSeoSection>

      <div className="struktiva-local-shell"><CaseStudyProof text="Das bestehende Praxisbeispiel zeigt ausschließlich belegte Bausteine: Website, Google- und Bewertungswege, Telefon und WhatsApp, digitale Kundenkarte sowie kundenbezogene und interne Abläufe. Es werden keine erfundenen Rankings oder Erfolgszahlen genannt." /></div>
      <div className="struktiva-local-shell"><RegionNote focus="Persönliche Abstimmungen sind besonders in Calw und der Umgebung möglich. Für klar abgegrenzte Aufgaben kann die Zusammenarbeit ebenso digital erfolgen – ohne künstliche Ortsseiten für jede Gemeinde." /></div>
      <FaqSection faqs={page.faqs} />
      <div className="struktiva-local-shell"><RelatedLinks links={[{ label: 'Digitalisierung für Unternehmen in Calw', href: '/digitalisierung-calw' }, { label: 'Digitale Kundenprozesse in Calw', href: '/digitale-kundenprozesse-calw' }, { label: 'KI und Automatisierung in Calw', href: '/ki-automatisierung-calw' }]} /></div>
      <FinalCta title="Wo arbeiten Ihre digitalen Bereiche heute noch nebeneinander?" text="In einem unverbindlichen Gespräch klären wir den Ausgangspunkt und ob ein Digital-Check, eine einzelne Verbesserung oder eine umfassendere Struktur sinnvoll ist." />
    </LocalSeoPage>
  )
}
