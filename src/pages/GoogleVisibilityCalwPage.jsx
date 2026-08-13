import { localSeoPages } from '../content/localSeoContent.js'
import { CaseStudyProof, CheckList, EditorialColumns, FaqSection, FinalCta, Journey, LocalSeoPage, LocalSeoSection, RegionNote, RelatedLinks } from '../components/local-seo/LocalSeoSections.jsx'

const page = localSeoPages.visibility

export default function GoogleVisibilityCalwPage() {
  return (
    <LocalSeoPage page={page} variant="visibility">
      <LocalSeoSection eyebrow="Suchintention statt Schlagwort" title="Menschen suchen nicht nach SEO. Sie suchen eine passende Lösung in ihrer Nähe." intro="Damit Google eine Seite einordnen kann, müssen Technik, Leistung, Ort und Inhalt zusammenpassen. Damit daraus eine Anfrage wird, braucht es zusätzlich Vertrauen und einen klaren nächsten Schritt." id="suchweg">
        <Journey steps={['konkreter Bedarf', 'lokale Suchanfrage', 'passender Treffer', 'verständliche Zielseite', 'Vertrauen', 'Kontakt']} />
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Fünf Grundlagen" title="Lokale Sichtbarkeit entsteht nicht durch eine einzelne Einstellung." tone="dark" id="grundlagen">
        <EditorialColumns items={[
          { title: 'Technische Basis', text: 'Indexierbare Seiten, eindeutige Canonicals, mobile Nutzbarkeit, Ladezeit und saubere strukturierte Daten.' },
          { title: 'Lokale Relevanz', text: 'Leistungen, Standort und tatsächliches Einzugsgebiet werden natürlich und nachvollziehbar beschrieben.' },
          { title: 'Google-Unternehmensprofil', text: 'Konsistente Kontaktdaten, passende Kategorien, aktuelle Inhalte, Bilder und echte Bewertungen unterstützen die Website.' },
          { title: 'Hilfreiche Inhalte', text: 'Eigene Seiten beantworten konkrete Suchabsichten, ohne Ortsnamen und Keywords künstlich zu wiederholen.' },
          { title: 'Weg zur Anfrage', text: 'Der Klick muss auf eine schnelle, vertrauenswürdige Seite mit passendem Kontaktweg führen.' },
        ]} />
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Prüfbare SEO-Arbeit" title="Was STRUKTIVA konkret verbessern kann." id="massnahmen">
        <div className="struktiva-local-split">
          <CheckList label="Website und Technik" items={['individuelle Titles und Beschreibungen', 'saubere Überschriften und semantisches HTML', 'Canonicals, Sitemap und robots.txt', 'LocalBusiness- und WebPage-Daten, wenn fachlich passend', 'interne Verlinkung nach Suchintention', 'mobile Performance und stabile Layouts']} />
          <CheckList label="Inhalt und lokale Signale" items={['klare Leistungs- und Themenseiten', 'konsistente Unternehmensdaten', 'sinnvolle regionale Bezüge', 'Verbindung zum Google-Unternehmensprofil', 'sichtbare echte Praxisbeispiele', 'Bewertungswege ohne erfundene Sterne oder Aussagen']} />
        </div>
      </LocalSeoSection>

      <LocalSeoSection eyebrow="Seriöse Erwartung" title="Keine Ranking-Garantie – dafür nachvollziehbare Grundlagen." intro="STRUKTIVA verspricht weder Platz 1 noch eine feste Dauer bis zu einem Ranking. Wettbewerb, Standort, Suchverhalten und Google-Änderungen liegen nicht vollständig in der eigenen Kontrolle. Messbar sind dagegen technische Qualität, Indexierbarkeit, Inhalte, Sichtbarkeit und Kontaktaktionen." tone="soft" id="erwartung">
        <p className="struktiva-local-callout">Gute lokale SEO-Arbeit schafft eine klare Zuordnung: Wer bietet was, für wen, in welcher Region – und warum ist diese Seite eine hilfreiche Antwort?</p>
      </LocalSeoSection>

      <div className="struktiva-local-shell"><CaseStudyProof text="Das Praxisbeispiel Salon Karola belegt die Verbindung aus eigener Website, Google-Unternehmensprofil, Bewertungswegen und QR-Strukturen. STRUKTIVA nennt bewusst keine unbelegten Ranking- oder Wachstumswerte." /></div>
      <div className="struktiva-local-shell"><RegionNote focus="Der lokale Schwerpunkt umfasst Calw-Wimberg, den Landkreis Calw und angrenzende Orte. Relevanz wird nur dort aufgebaut, wo STRUKTIVA tatsächlich Leistungen anbietet – ohne massenhaft kopierte Ortsseiten." /></div>
      <FaqSection faqs={page.faqs} />
      <div className="struktiva-local-shell"><RelatedLinks links={[{ label: 'Website für Handwerker in Calw', href: '/website-handwerker-calw' }, { label: 'Digitale Unternehmensberatung in Calw', href: '/digitale-unternehmensberatung-calw' }, { label: 'Digital-Check für lokale Betriebe', href: '/digital-check' }]} /></div>
      <FinalCta title="Wird Ihr Unternehmen gefunden – und führt der Treffer verständlich weiter?" text="Wir prüfen Website, lokale Signale und Kontaktweg und ordnen die nächsten Maßnahmen nach tatsächlicher Priorität." />
    </LocalSeoPage>
  )
}
