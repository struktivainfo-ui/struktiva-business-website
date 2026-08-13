import { localSeoPages } from '../content/localSeoContent.js'
import { CaseStudyProof, CheckList, EditorialColumns, FaqSection, FinalCta, Journey, LocalSeoPage, LocalSeoSection, ProcessSteps, RegionNote, RelatedLinks } from '../components/local-seo/LocalSeoSections.jsx'

const page = localSeoPages.customerProcesses

export default function DigitalCustomerProcessesCalwPage() {
  return (
    <LocalSeoPage page={page} variant="customer-processes">
      <LocalSeoSection eyebrow="Der vollständige Kundenweg" title="Jeder Übergang entscheidet, ob eine Anfrage weiterkommt oder liegen bleibt." intro="Der Prozess endet nicht beim Absenden eines Formulars. Rückmeldung, Termin, Auftrag, Nachbetreuung und eine faire Bewertungsanfrage gehören zum gleichen Zusammenhang." id="kundenreise">
        <Journey steps={['Google oder Empfehlung', 'Website und Information', 'Anfrage', 'persönlicher Kontakt', 'Termin oder Auftrag', 'Nachbetreuung', 'Bewertung oder Wiederkehr']} />
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Typische Bruchstellen" title="Kontaktkanäle sind erst dann hilfreich, wenn ihre Bearbeitung geklärt ist." tone="dark" id="bruchstellen">
        <EditorialColumns items={[
          { title: 'Unvollständige Anfragen', text: 'Wichtige Angaben fehlen und müssen in mehreren Rückfragen ergänzt werden.' },
          { title: 'Verteilte Nachrichten', text: 'Telefon, WhatsApp, E-Mail und Formulare führen zu unterschiedlichen Ablagen und Zuständigkeiten.' },
          { title: 'Kein sichtbarer Status', text: 'Im Team ist unklar, welche Anfrage beantwortet, terminiert oder abgeschlossen wurde.' },
          { title: 'Nachbetreuung per Zufall', text: 'Bewertungen, Rückfragen oder Wiederkehr hängen vollständig von manueller Erinnerung ab.' },
        ]} />
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Passende Bausteine" title="So viel System wie nötig, so wenig Reibung wie möglich." id="bausteine">
        <div className="struktiva-local-split">
          <CheckList label="Externe Kontaktpunkte" items={['Kontakt- und Anfrageformulare', 'Telefon und WhatsApp', 'Terminwünsche', 'QR-Codes', 'Bestätigungs- und Informations-E-Mails', 'Bewertungswege']} />
          <CheckList label="Interne Bearbeitung" items={['strukturierte Lead-Erfassung', 'Zuständigkeiten und Status', 'Vorlagen für wiederkehrende Antworten', 'Benachrichtigungen und Übergaben', 'Follow-ups mit klaren Regeln', 'übersichtliche Kundeninformationen']} />
        </div>
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Umsetzung" title="Nicht jeden Kontakt automatisieren – zuerst den Ablauf verständlich machen." tone="soft" id="umsetzung">
        <ProcessSteps steps={[
          { title: 'Kontaktpunkte erfassen', text: 'Alle Wege vom ersten Interesse bis zur Nachbetreuung sichtbar machen.' },
          { title: 'Bruchstellen priorisieren', text: 'Prüfen, wo Informationen fehlen, doppelt übertragen werden oder niemand verantwortlich ist.' },
          { title: 'Klaren Soll-Ablauf festlegen', text: 'Benötigte Angaben, Zuständigkeiten und nächste Schritte verständlich definieren.' },
          { title: 'Technisch unterstützen', text: 'Formulare, Vorlagen, Übersichten oder Automatisierungen nur für eindeutig geregelte Schritte einsetzen.' },
        ]} />
      </LocalSeoSection>

      <div className="struktiva-local-shell"><CaseStudyProof text="Bei Salon Karola sind nachweislich mehrere Kundenkontaktpunkte und digitale Strukturen verbunden: mobile Website, Telefon, WhatsApp, digitale Anfragen, Bewertungswege, Kundenkarte und kundenbezogene Abläufe. Das Beispiel zeigt Systemzusammenhänge, keine erfundenen Ergebniszahlen." /></div>
      <div className="struktiva-local-shell"><RegionNote focus="Kurze Wege helfen besonders bei der Aufnahme realer Kundenprozesse. STRUKTIVA begleitet Betriebe in Calw und der Umgebung persönlich; Dokumentation und Umsetzung können ergänzend digital erfolgen." /></div>
      <FaqSection faqs={page.faqs} />
      <div className="struktiva-local-shell"><RelatedLinks links={[{ label: 'Digitalisierung für Unternehmen in Calw', href: '/digitalisierung-calw' }, { label: 'Google-Sichtbarkeit in Calw', href: '/google-sichtbarkeit-calw' }, { label: 'Digitale Unternehmensberatung in Calw', href: '/digitale-unternehmensberatung-calw' }]} /></div>
      <FinalCta title="An welcher Stelle verliert Ihr Kundenweg heute Informationen oder Zeit?" text="Wir zeichnen den bestehenden Ablauf nach und klären, ob eine kleine Korrektur oder eine umfassendere Kundenprozess-Struktur sinnvoll ist." />
    </LocalSeoPage>
  )
}
