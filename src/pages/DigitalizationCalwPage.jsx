import { localSeoPages } from '../content/localSeoContent.js'
import { CheckList, EditorialColumns, FaqSection, FinalCta, LocalSeoPage, LocalSeoSection, ProcessSteps, RegionNote, RelatedLinks } from '../components/local-seo/LocalSeoSections.jsx'

const page = localSeoPages.digitalization

export default function DigitalizationCalwPage() {
  return (
    <LocalSeoPage page={page} variant="digitalization">
      <LocalSeoSection eyebrow="Typische digitale Baustellen" title="Der größte Aufwand entsteht oft zwischen den Systemen." intro="Nicht fehlende Software, sondern Medienbrüche, doppelte Eingaben und unklare Übergaben bremsen viele Betriebe." tone="dark" id="baustellen">
        <EditorialColumns items={[
          { title: 'Zu viele Einzeltools', text: 'Informationen liegen verteilt, Zustände sind schwer zu überblicken und niemand kennt die verlässliche Quelle.' },
          { title: 'Manuelle Übertragung', text: 'Anfragen werden aus E-Mails oder Nachrichten in Listen und Kalender übertragen – mit unnötiger Fehlergefahr.' },
          { title: 'Unklare Kundenwege', text: 'Interessenten finden mehrere Kontaktwege, aber intern ist nicht geregelt, wie eine Anfrage weiterbearbeitet wird.' },
          { title: 'Fehlende digitale Ordnung', text: 'Dokumente, Aufgaben und Kundendaten wachsen mit dem Betrieb, ohne eine nachvollziehbare Struktur zu bilden.' },
        ]} />
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Leitlinie" title="Digitalisierung ist dann sinnvoll, wenn sie einen konkreten Ablauf verbessert." intro="STRUKTIVA prüft zuerst, was erhalten bleiben kann. Erst danach wird entschieden, ob eine Verbindung, eine kleine Ergänzung oder ein Systemwechsel gerechtfertigt ist." id="prinzipien">
        <div className="struktiva-local-split">
          <CheckList label="Grundsätze sinnvoller Digitalisierung" items={['vom realen Engpass statt vom Tool ausgehen', 'vorhandene Systeme und Daten berücksichtigen', 'Verantwortlichkeiten nicht hinter Technik verstecken', 'kleine, überprüfbare Schritte bevorzugen', 'mobile und einfache Nutzung mitdenken', 'Datenschutz und Zugriffsrechte früh einordnen']} />
          <div className="struktiva-local-quote"><p>Die beste digitale Lösung ist nicht die mit den meisten Funktionen. Es ist die, die im Arbeitsalltag zuverlässig genutzt wird.</p></div>
        </div>
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Schrittweise Modernisierung" title="Verbessern, messen, erst dann erweitern." id="modernisierung">
        <ProcessSteps steps={[
          { title: 'Engpass eingrenzen', text: 'Einen konkreten Ablauf auswählen und Beteiligte, Informationen und Wartezeiten erfassen.' },
          { title: 'Bestehendes bewerten', text: 'Prüfen, welche Werkzeuge funktionieren, wo Daten liegen und welche Abhängigkeiten bestehen.' },
          { title: 'Kleinste tragfähige Lösung planen', text: 'Nur die Funktionen vorsehen, die den ausgewählten Ablauf tatsächlich verbessern.' },
          { title: 'Im Alltag erproben', text: 'Nutzung beobachten, Rückmeldungen aufnehmen und erst danach weitere Schritte priorisieren.' },
        ]} />
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Mögliche Ansatzpunkte" title="Von der Kontaktaufnahme bis zur internen Übersicht." tone="soft" id="ansatzpunkte">
        <CheckList label="Digitalisierungsbereiche" items={['Website und digitale Leistungsdarstellung', 'Formulare und strukturierte Anfragen', 'Kunden- und Kontaktdaten', 'Aufgaben, Status und interne Übersichten', 'E-Mail-, Termin- und Nachfassprozesse', 'Dokumenten- und Wissensstrukturen', 'geeignete Automatisierung klarer Teilschritte']} />
      </LocalSeoSection>

      <div className="struktiva-local-shell"><RegionNote focus="STRUKTIVA sitzt in Calw-Wimberg und kennt die Anforderungen kleiner Unternehmen und lokaler Betriebe. Regionale Nähe ist hilfreich, die Lösung richtet sich aber immer nach dem konkreten Ablauf – nicht nach einer Ortsbezeichnung." /></div>
      <FaqSection faqs={page.faqs} />
      <div className="struktiva-local-shell"><RelatedLinks links={[{ label: 'Digitale Unternehmensberatung in Calw', href: '/digitale-unternehmensberatung-calw' }, { label: 'Digitale Kundenprozesse in Calw', href: '/digitale-kundenprozesse-calw' }, { label: 'KI und Automatisierung in Calw', href: '/ki-automatisierung-calw' }]} /></div>
      <FinalCta title="Welche wiederkehrende Baustelle kostet heute am meisten Zeit?" text="Wir grenzen den Ablauf ein, prüfen vorhandene Systeme und klären, welcher erste Schritt sinnvoll und realistisch ist." />
    </LocalSeoPage>
  )
}
