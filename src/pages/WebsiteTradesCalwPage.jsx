import { localSeoPages } from '../content/localSeoContent.js'
import { CheckList, EditorialColumns, FaqSection, FinalCta, Journey, LocalSeoPage, LocalSeoSection, RegionNote, RelatedLinks } from '../components/local-seo/LocalSeoSections.jsx'

const page = localSeoPages.trades

export default function WebsiteTradesCalwPage() {
  return (
    <LocalSeoPage page={page} variant="trades">
      <LocalSeoSection eyebrow="Nutzung aus Kundensicht" title="Auf dem Smartphone muss in wenigen Sekunden klar sein: Passt dieser Betrieb zu meinem Auftrag?" intro="Viele Interessenten kommen über Google, eine Empfehlung oder ein Fahrzeuglogo. Sie suchen keine Designshow, sondern eine schnelle und belastbare Entscheidung." id="kundenweg">
        <Journey steps={['Betrieb finden', 'Leistungen prüfen', 'Einsatzgebiet erkennen', 'Arbeitsbeispiele ansehen', 'Kontaktweg wählen']} />
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Was Handwerksbetriebe wirklich brauchen" title="Ein seriöser Auftritt, der Arbeit verständlich macht." tone="dark" id="anforderungen">
        <EditorialColumns items={[
          { title: 'Leistungen ohne Fachnebel', text: 'Kunden müssen erkennen, welche Arbeiten angeboten werden und welche Anfragen zum Betrieb passen.' },
          { title: 'Regionale Einordnung', text: 'Einsatzgebiet, Standort und erreichbare Orte gehören sichtbar in Inhalt, Kontakt und technische Daten.' },
          { title: 'Belege statt Behauptungen', text: 'Echte Projekte, Arbeitsweise, Qualifikationen und Bewertungen bauen mehr Vertrauen auf als allgemeine Werbesätze.' },
          { title: 'Kontakt ohne Umwege', text: 'Telefon, Formular oder WhatsApp werden so priorisiert, wie Anfragen im Betrieb zuverlässig bearbeitet werden können.' },
        ]} />
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Inhalt und Technik" title="Die Website verbindet Außendarstellung, Google-Grundlage und Anfrageführung." id="umfang">
        <div className="struktiva-local-split">
          <CheckList label="Mögliche Website-Inhalte" items={['klare Leistungsbereiche und Zielkunden', 'Einsatzgebiet im Raum Calw', 'echte Referenzen oder Projektbeispiele', 'Team, Arbeitsweise und Vertrauenssignale', 'sichtbare Telefon-, WhatsApp- und Formularwege', 'häufige Kundenfragen', 'Bewertungs- und Google-Verknüpfung']} />
          <CheckList label="Technische Grundlagen" items={['schnelle mobile Darstellung', 'semantische Überschriften und saubere URLs', 'individuelle Titel und Beschreibungen', 'strukturierte Unternehmensdaten', 'komprimierte Bilder ohne Layoutsprünge', 'Weiterleitungen beim Relaunch', 'messbare Kontaktaktionen nach Einwilligung']} />
        </div>
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Bestehende Website" title="Ein Relaunch beginnt mit dem, was bereits funktioniert." intro="Domains, vorhandene Rankings, gute Inhalte und bekannte Kontaktwege werden nicht blind verworfen. STRUKTIVA prüft zuerst, was erhalten, verbessert oder sauber weitergeleitet werden sollte." tone="soft" id="relaunch">
        <p className="struktiva-local-callout">Auch laufende Betreuung kann sinnvoll sein – etwa für Referenzen, Leistungsänderungen und technische Pflege. Sie ist aber kein Zwang und wird passend zum tatsächlichen Bedarf vereinbart.</p>
      </LocalSeoSection>

      <div className="struktiva-local-shell"><RegionNote focus="Der Schwerpunkt liegt auf Handwerksbetrieben in Calw, Althengstett, Bad Liebenzell, Nagold und dem Landkreis Calw. Ortsbezug entsteht über echte Leistungen und Einsatzgebiete – nicht durch austauschbare Doorway-Seiten." /></div>
      <FaqSection faqs={page.faqs} />
      <div className="struktiva-local-shell"><RelatedLinks links={[{ label: 'Google-Sichtbarkeit für Unternehmen in Calw', href: '/google-sichtbarkeit-calw' }, { label: 'Digitale Kundenprozesse in Calw', href: '/digitale-kundenprozesse-calw' }, { label: 'Praxisbeispiel Salon Karola', href: '/praxisbeispiele/salon-karola' }]} /></div>
      <FinalCta title="Soll Ihre Website vor allem besser aussehen – oder besser arbeiten?" text="Wir sprechen über Leistungen, Einsatzgebiet, vorhandene Inhalte und den Kontaktweg, der zu Ihrem Betrieb passt. Danach erhalten Sie eine klare Einschätzung zum sinnvollen Umfang." />
    </LocalSeoPage>
  )
}
