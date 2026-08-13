import { localSeoPages } from '../content/localSeoContent.js'
import { CheckList, EditorialColumns, FaqSection, FinalCta, LocalSeoPage, LocalSeoSection, ProcessSteps, RegionNote, RelatedLinks } from '../components/local-seo/LocalSeoSections.jsx'

const page = localSeoPages.aiAutomation

export default function AiAutomationCalwPage() {
  return (
    <LocalSeoPage page={page} variant="ai">
      <LocalSeoSection eyebrow="Eignungsprüfung" title="Eine gute KI-Aufgabe ist klar, wiederkehrend und kontrollierbar." intro="Nicht jeder Prozess braucht KI. Manchmal reichen eine bessere Vorlage, ein Formular oder eine einfache Regel. STRUKTIVA wählt die kleinste Lösung, die den gewünschten Nutzen zuverlässig erreicht." id="eignung">
        <EditorialColumns items={[
          { title: 'Wiederholt sich die Aufgabe?', text: 'Ein regelmäßiger ähnlicher Ablauf bietet mehr Nutzen als ein seltener Sonderfall.' },
          { title: 'Sind Eingang und Ergebnis beschreibbar?', text: 'Je klarer Daten, Regeln und gewünschte Ausgabe sind, desto kontrollierbarer wird die Unterstützung.' },
          { title: 'Darf ein Fehler passieren?', text: 'Bei sensiblen, rechtlichen oder finanziellen Folgen braucht es besonders strenge Prüfung oder bewusst keine Automatisierung.' },
          { title: 'Wer behält Verantwortung?', text: 'Ein Mensch muss Ergebnisse bewerten, Ausnahmen entscheiden und den Prozess stoppen können.' },
        ]} />
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Praxisnahe Einsatzfelder" title="Unterstützen statt pauschal ersetzen." tone="dark" id="einsatzfelder">
        <div className="struktiva-local-split">
          <CheckList label="KI-Unterstützung" items={['Texte und Informationen zusammenfassen', 'Entwürfe für wiederkehrende Kommunikation', 'strukturierte Kundenanfragen vorsortieren', 'internes Wissen auffindbar machen', 'Content-Ideen und Rohfassungen vorbereiten', 'Informationen aus definierten Quellen aufbereiten']} />
          <CheckList label="Klassische Automatisierung" items={['Formulare weiterleiten und zuordnen', 'Benachrichtigungen auslösen', 'Status nach klaren Regeln aktualisieren', 'Vorlagen und Bestätigungen versenden', 'Aufgaben aus Anfragen erzeugen', 'Follow-ups nach festgelegten Bedingungen vorbereiten']} />
        </div>
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Kontrollierter Einstieg" title="Mit einem klaren Anwendungsfall beginnen, nicht mit einer großen KI-Strategie." id="vorgehen">
        <ProcessSteps steps={[
          { title: 'Aufgabe auswählen', text: 'Einen wiederkehrenden Arbeitsschritt mit erkennbarem Aufwand und klarer Verantwortung eingrenzen.' },
          { title: 'Daten und Risiken prüfen', text: 'Quellen, personenbezogene Informationen, Zugriffsrechte, Fehlerfolgen und notwendige Kontrolle einordnen.' },
          { title: 'Kleinen Ablauf entwickeln', text: 'Eine begrenzte Unterstützung mit nachvollziehbaren Ein- und Ausgaben umsetzen.' },
          { title: 'Im Alltag bewerten', text: 'Zeitgewinn, Qualität und Ausnahmen beobachten. Nur bei belastbarem Nutzen schrittweise erweitern.' },
        ]} />
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Klare Grenzen" title="KI ist kein Ersatz für Verantwortung, Fachwissen und gute Prozesse." intro="STRUKTIVA stellt nicht in Aussicht, jeden Mitarbeitenden oder jeden Ablauf zu ersetzen. Unklare Prozesse werden durch KI meist nur schneller unklar. Vor einer Automatisierung müssen Ziel, Daten, Regeln und Kontrolle verständlich sein." tone="soft" id="grenzen">
        <p className="struktiva-local-callout">Wenn eine einfache Regel die Aufgabe zuverlässig löst, ist sie oft die bessere Lösung. KI wird nur dort ergänzt, wo sie einen echten zusätzlichen Beitrag leistet.</p>
      </LocalSeoSection>

      <div className="struktiva-local-shell"><RegionNote focus="STRUKTIVA unterstützt Unternehmen in Calw und im Nordschwarzwald beim praxisnahen Einstieg. Persönliche Prozessaufnahme und digitale Umsetzung lassen sich passend kombinieren." /></div>
      <FaqSection faqs={page.faqs} />
      <div className="struktiva-local-shell"><RelatedLinks links={[{ label: 'Digitalisierung für Unternehmen in Calw', href: '/digitalisierung-calw' }, { label: 'Digitale Kundenprozesse in Calw', href: '/digitale-kundenprozesse-calw' }, { label: 'Digitale Unternehmensberatung in Calw', href: '/digitale-unternehmensberatung-calw' }]} /></div>
      <FinalCta title="Welche wiederkehrende Aufgabe sollte nicht jeden Tag neu beginnen?" text="Wir prüfen gemeinsam, ob Struktur, klassische Automatisierung oder KI-Unterstützung der passende nächste Schritt ist." />
    </LocalSeoPage>
  )
}
