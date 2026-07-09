# STRUKTIVA Final Rebuild Acceptance

Stand: 2026-07-08  
Projekt: STRUKTIVA Digitale Unternehmensberatung  
Produktionsdomain: https://struktiva.de  
Ausgangscommit vor Schritt 22: `06f4b19`  
Branch: `main`

## 1. Rebuild-Status

Der Rebuild ist technisch abgenommen. Die Hauptseiten sind lokal und live erreichbar, besitzen eigene Meta-Daten, passende Canonicals und genau eine H1. Der Live-Abgleich hat den aktuellen Rebuild anhand der neuen Navigation, der neuen H1-Inhalte, `/digital-check`, `/praxisbeispiele`, `/leistungen` ohne Preise und der neuen Kontaktseite verifiziert.

Fertig abgenommene Hauptseiten:

| Route | Status | Rolle |
| --- | --- | --- |
| `/` | fertig | Einstieg, Positionierung, zentrale Journeys |
| `/loesungen` | fertig | Problem-, Zusammenhangs- und Loesungslogik |
| `/leistungen` | fertig | konkrete umsetzbare digitale Bausteine |
| `/pakete` | fertig | Zusammenarbeit, Preise, Betreuung |
| `/praxisbeispiele` | fertig | echte Projekte und klar markierte Demo-Konzepte |
| `/praxisbeispiele/salon-karola` | fertig | echtes Praxisbeispiel |
| `/digital-check` | fertig | Einstieg zur strukturierten Einordnung |
| `/ueber-uns` | fertig | Haltung, Arbeitsweise, Personen |
| `/kontakt` | fertig | Kontaktwege und Lead-Formular |
| `/impressum` | fertig | Rechtliches |
| `/datenschutz` | fertig | Datenschutz |

## 2. Aktuelle Informationsarchitektur

Die finale Informationsarchitektur trennt Loesungslogik, Leistungen, Pakete, Praxisbeispiele und Kontakt klar voneinander. `/leistungen` und `/pakete` sind bewusst nicht in der Primaernavigation, bleiben aber intern erreichbar. `/demos` und `/referenzen` sind keine aktiven Inhaltsseiten mehr, sondern Redirect-Quellen auf `/praxisbeispiele`.

## 3. Navigation

Primaernavigation:

| Label | Ziel | Status |
| --- | --- | --- |
| Start | `/` | aktiv |
| Loesungen | `/loesungen` | aktiv |
| Praxisbeispiele | `/praxisbeispiele` | aktiv |
| Digital-Check | `/digital-check` | aktiv |
| Ueber STRUKTIVA | `/ueber-uns` | aktiv |
| Kontakt | `/kontakt` | aktiv |

Desktop- und Mobile-Navigation wurden lokal geprueft. `aria-current` ist auf der aktiven Seite gesetzt. Mobile-Menue, Escape-Schliessen und Fokus-Rueckgabe wurden im Browsercheck erfolgreich getestet.

## 4. Redirects

| Quelle | Ziel | Lokal | Live | Hops |
| --- | --- | --- | --- | --- |
| `/demos` | `/praxisbeispiele` | 308 | 308 | 1 |
| `/referenzen` | `/praxisbeispiele` | 308 | 308 | 1 |

Live-Pruefung: `https://struktiva.de/demos` und `https://struktiva.de/referenzen` liefern jeweils `308` mit `Location: /praxisbeispiele` und danach `200` auf dem Ziel. HTTPS bleibt erhalten. `www.struktiva.de` ist erreichbar und wurde als kein kritisches Redirect-Problem bewertet.

## 5. Demo-Unterseiten

Geschuetzte Demo-Unterseiten:

| Route | Live erreichbar | Robots | Canonical | Status |
| --- | --- | --- | --- | --- |
| `/demos/handwerker` | ja, 200 | `noindex, nofollow` | `https://struktiva.de/demos/handwerker/` | KEEP PROTECTED |
| `/demos/kosmetik` | ja, 200 | `noindex, nofollow` | `https://struktiva.de/demos/kosmetik/` | KEEP PROTECTED |
| `/demos/lokaler-dienstleister` | ja, 200 | `noindex, nofollow` | `https://struktiva.de/demos/lokaler-dienstleister/` | KEEP PROTECTED |

Im Live-Audit wurde ein Demo-CSS-404 gefunden: die aktuell deployten Demo-Seiten luden `/struktiva-demo-system.css`. Lokal wurde das sicher korrigiert, indem alle drei Demo-HTML-Dateien auf `/demos/struktiva-demo-system.css` zeigen. Der lokale Re-Audit ist danach ohne Demo-CSS-404 durchgelaufen.

## 6. Sitemap

Lokale Datei: `public/sitemap.xml`  
Live-Datei: `https://struktiva.de/sitemap.xml`  
Live-Status: `200`

Enthaltene URLs:

| URL |
| --- |
| `https://struktiva.de/` |
| `https://struktiva.de/loesungen` |
| `https://struktiva.de/leistungen` |
| `https://struktiva.de/pakete` |
| `https://struktiva.de/praxisbeispiele` |
| `https://struktiva.de/praxisbeispiele/salon-karola` |
| `https://struktiva.de/digital-check` |
| `https://struktiva.de/ueber-uns` |
| `https://struktiva.de/kontakt` |
| `https://struktiva.de/datenschutz` |
| `https://struktiva.de/impressum` |

Keine Redirect-Quellen, keine Demo-Unterseiten, keine Hash-URLs, keine Tracking-Parameter, keine Duplikate, keine Vercel-Domain.

## 7. robots.txt

Lokaler und live gepruefter Inhalt:

```txt
User-agent: *
Allow: /

Sitemap: https://struktiva.de/sitemap.xml
```

Die neuen Hauptseiten werden nicht blockiert. Redirect-Quellen werden nicht per robots.txt blockiert.

## 8. Canonical-Matrix

| Route | Canonical | Status |
| --- | --- | --- |
| `/` | `https://struktiva.de/` | korrekt |
| `/loesungen` | `https://struktiva.de/loesungen` | korrekt |
| `/leistungen` | `https://struktiva.de/leistungen` | korrekt |
| `/pakete` | `https://struktiva.de/pakete` | korrekt |
| `/praxisbeispiele` | `https://struktiva.de/praxisbeispiele` | korrekt |
| `/praxisbeispiele/salon-karola` | `https://struktiva.de/praxisbeispiele/salon-karola` | korrekt |
| `/digital-check` | `https://struktiva.de/digital-check` | korrekt |
| `/ueber-uns` | `https://struktiva.de/ueber-uns` | korrekt |
| `/kontakt` | `https://struktiva.de/kontakt` | korrekt |
| `/impressum` | `https://struktiva.de/impressum` | korrekt |
| `/datenschutz` | `https://struktiva.de/datenschutz` | korrekt |

`/loesungen`, `/leistungen` und `/pakete` haben Self-Canonicals und keine Cross-Canonical-Probleme.

## 9. Meta-Matrix

| Route | Title | Description |
| --- | --- | --- |
| `/` | STRUKTIVA Digitale Unternehmensberatung \| Digitale Struktur fuer Unternehmen | STRUKTIVA entwickelt Webseiten, Google-Sichtbarkeit, Kontaktwege und digitale Strukturen fuer Unternehmen, Selbststaendige und lokale Dienstleister. |
| `/loesungen` | Digitale Loesungen fuer Unternehmen \| STRUKTIVA | STRUKTIVA verbindet digitale Sichtbarkeit, Kundenfuehrung und interne Ablaeufe zu Loesungen, die zum Unternehmen und seinem Alltag passen. |
| `/leistungen` | Digitale Leistungen fuer Unternehmen \| STRUKTIVA | Konkrete digitale Leistungen von STRUKTIVA: Websites, Sichtbarkeit, Kundenfuehrung, Kundenbindung, interne Ablaeufe, Systeme und Automatisierungen. |
| `/pakete` | Pakete und Zusammenarbeit \| STRUKTIVA | Erfahren Sie, welche Formen der Zusammenarbeit STRUKTIVA anbietet - vom klar abgegrenzten Einzelprojekt bis zur schrittweisen Weiterentwicklung und laufenden Betreuung. |
| `/praxisbeispiele` | Praxisbeispiele digitaler Loesungen \| STRUKTIVA | Entdecken Sie echte Praxisprojekte und klar gekennzeichnete Demo-Konzepte von STRUKTIVA fuer Sichtbarkeit, Kundenfuehrung und digitale Ablaeufe. |
| `/praxisbeispiele/salon-karola` | Salon Karola Praxisbeispiel \| STRUKTIVA | Praxisbeispiel von STRUKTIVA: Wie bei Salon Karola Website, Sichtbarkeit, Kundenkontakt, Kundenbindung und digitale Ablaeufe schrittweise verbunden wurden. |
| `/digital-check` | Digital-Check fuer Unternehmen \| STRUKTIVA | Der STRUKTIVA Digital-Check betrachtet Sichtbarkeit, Kundenwege und digitale Ablaeufe im Zusammenhang und hilft dabei, sinnvolle naechste Schritte einzuordnen. |
| `/ueber-uns` | Ueber STRUKTIVA \| Digitale Unternehmensberatung | Lernen Sie STRUKTIVA Digitale Unternehmensberatung, die persoenliche Arbeitsweise und den Ansatz aus Verstehen, Strukturieren, Umsetzen und Weiterentwickeln kennen. |
| `/kontakt` | Kontakt \| STRUKTIVA Digitale Unternehmensberatung | Nehmen Sie Kontakt mit STRUKTIVA auf. Beschreiben Sie, wo digitale Ablaeufe, Kundenwege oder bestehende Systeme heute nicht gut zusammenspielen. |
| `/impressum` | Impressum - STRUKTIVA Digitale Unternehmensberatung | Impressum und rechtliche Angaben von STRUKTIVA Digitale Unternehmensberatung. |
| `/datenschutz` | Datenschutz - STRUKTIVA Digitale Unternehmensberatung | Datenschutzerklaerung von STRUKTIVA Digitale Unternehmensberatung. |

Titles und Descriptions sind unterschiedlich genug, enthalten keine alte Domain und keine irrefuehrenden Preise oder Rankingversprechen.

## 10. Interne Linklogik

Der interne Linkcrawl fand keine internen 404-Ziele, keine produktiven Links auf `/demos` oder `/referenzen` als allgemeine Indexseiten und keine falschen Hash-Ziele. Erlaubte externe Links sind Salon Karola, WhatsApp, Mail, Telefon, Instagram, LinkedIn sowie rechtliche Provider-Links in der Datenschutzerklaerung.

Linklogik:

| Kontext | Ziel |
| --- | --- |
| allgemeines Praxisbeispiel | `/praxisbeispiele` |
| konkretes Salon-Karola-Projekt | `/praxisbeispiele/salon-karola` |
| Loesungslogik | `/loesungen` |
| konkrete Leistungen | `/leistungen` |
| Zusammenarbeit und Preise | `/pakete` |
| Digital-Check-Information | `/digital-check` |
| Digital-Check anfragen | `/kontakt#lead-form` |

## 11. Formularstatus

Geprueft: `/kontakt` und `/kontakt#lead-form`.

| Punkt | Ergebnis |
| --- | --- |
| Formularinstanzen | genau 1 |
| Felder | `name`, `company`, `email`, `phone`, `preferredContact`, `interest`, `projectStart`, `budgetRange`, `message`, `website`, `privacyConsent` |
| Honeypot | vorhanden |
| POST-Ziel | `/api/leads` |
| Source | `Website` |
| echter Versand | nein |
| Success-Mock | erfolgreich |
| Error-Mock | erfolgreich |
| `api/leads.js` | nicht geaendert |
| Resend | nicht geaendert |
| Payload-Struktur | nicht geaendert |

Hinweis: Im geschuetzten API-Mailtemplate steht noch ein alter Markenname in der Bestaetigungs-E-Mail. Dieser wurde wegen der Schutzvorgabe fuer `api/leads.js` nicht geaendert und bleibt ein inhaltliches Restrisiko fuer den naechsten gezielten API-/Mailtext-Schritt.

## 12. Consent und Tracking

Cookie-Banner wurde lokal geprueft. Buttons: `Alle akzeptieren`, `Nur notwendige Cookies`, `Einstellungen`. Nach Akzeptieren wird die Auswahl im vorhandenen Consent-Key gespeichert. Die Cookie-Einstellungen im Footer oeffnen die Auswahl erneut. Tracking bleibt consent-gesteuert.

Nicht geaendert:

| Bereich | Status |
| --- | --- |
| Google Analytics ID | unveraendert |
| Google Ads ID | unveraendert |
| Pinterest Tag ID | unveraendert |
| Consent-Key | unveraendert |
| Tracking Events | unveraendert |

## 13. Accessibility

Geprueft wurden Skip-Link, Landmarks, H1-Anzahl, Heading-Grundstruktur, Fokuspfade, `aria-current`, Mobile Navigation, Formularlabels, Fehlerzustaende, Touch-Ziele und `prefers-reduced-motion`. Alle Hauptseiten haben genau eine H1. Mobile-Menue, Escape und Fokus-Rueckgabe wurden erfolgreich getestet.

Offene Punkte:

| Prioritaet | Punkt |
| --- | --- |
| SHOULD IMPROVE | Einige zentrale Bilder haben keine expliziten `width`/`height`-Attribute; Layout ist aktuell stabil, aber Dimensionen koennen spaeter praeziser gesetzt werden. |
| ACCEPTABLE FOR NOW | Automatisierter Kontrast-Check ohne neue Dependency wurde nicht als separates Tool ausgefuehrt; visuelle Browserpruefung zeigte keine offensichtlichen Blocker. |

## 14. Performance

Build-Auszug finaler lokaler Stand:

| Asset | Groesse | gzip |
| --- | ---: | ---: |
| `assets/index-CC7mqFxD.css` | 336.35 kB | 51.00 kB |
| `assets/index-Bof0jS-r.js` | 211.92 kB | 47.58 kB |
| `assets/vendor-react-DhEz86-d.js` | 141.80 kB | 45.42 kB |
| `assets/vendor-motion-Cc6TNZho.js` | 107.03 kB | 35.11 kB |
| `assets/vendor-icons-2YL0Dr47.js` | 11.33 kB | 2.62 kB |
| `assets/vendor-misc-kw2xUb_Y.js` | 4.84 kB | 2.14 kB |

CRITICAL:

- Keine kritischen Performance-Blocker im finalen Browsercheck.

SHOULD IMPROVE:

- CSS-Bundle ist durch die Gesamtseite weiterhin relativ gross.
- Zentrale Bilder sollten spaeter explizite Dimensionen erhalten.
- Legacy-Bestand erhoeht Bundle- und Wartungsrisiko, solange mehrere alte Komponenten weiter exportiert werden.

ACCEPTABLE FOR NOW:

- Aktuelle Chunk-Aufteilung ist stabil und baut erfolgreich.
- Keine horizontalen Overflow-Probleme in den getesteten Viewports.
- Keine doppelten Formularinstanzen.
- Keine offensichtlichen Render-Schleifen oder dauerhaft blockierenden Animationen im Testlauf.

## 15. Legacy-Code

REMOVED IN STEP 23:

- `src/pages/DemosPage.jsx`
- `src/pages/ReferencesPage.jsx`
- alte isolierte Demo-/Referenz-Uebersichtslogik in `src/legacy/legacyContent.jsx`

SAFE TO REMOVE LATER:

- Alte produktnahe Spezialseiten und alte Preislisten, die nicht mehr in `pageRegistry.jsx` registriert sind.

STILL USED:

- `useCurrentPath` und `useDocumentTitleSafe` werden weiter aus `src/legacy/legacyContent.jsx` re-exportiert.
- `contactDetails` versorgt Footer, Kontaktseite und Floating WhatsApp.
- `ImpressumPage`, `DatenschutzPage`, `NotFoundPage` und die drei Demo-HTML-Wrapper werden weiter aus Legacy exportiert.
- `HomeLegacyContinuation` ist noch Teil der Startseite.

VERIFY BEFORE REMOVAL:

- Alle Exporte aus `src/legacy/legacyContent.jsx`, die von Rechtlichem, Kontakt, Footer, NotFound oder Demo-Unterseiten abhaengen.
- Alte `siteLinks` mit `/demos`-Zielen, weil sie im toten Legacy-Bestand vorkommen koennen.
- Statische Demo-Rewrites in `vercel.json`.

KEEP:

- `public/demos/*/index.html` und `public/demos/struktiva-demo-system.css`, solange direkte Demo-Links erhalten bleiben.
- Exakte Redirects fuer `/demos` und `/referenzen`.
- `public/sitemap.xml` und `public/robots.txt` in der aktuellen Struktur.

## 16. Soforthilfe und Digitaler Kurzcheck

Der alte Digitaler-Kurzcheck-Preis und Soforthilfe-S/M/L-Inhalte existieren weiterhin in `src/legacy/legacyContent.jsx` und in historischen Doku-Abschnitten. Auf den neuen aktiven Hauptseiten wurden sie nicht als zusaetzliche alte Preisbereiche gerendert. `/leistungen` und `/loesungen` sind preisfrei. `/pakete` zeigt die bestaetigte aktuelle Preisstruktur.

Empfehlung:

| Angebot | Status | Empfehlung |
| --- | --- | --- |
| Soforthilfe S/M/L | Legacy-Code, nicht aktive Hauptseiten | REMOVE AFTER MIGRATION oder MERGE in die bestaetigte Paketlogik |
| alter Digitaler Kurzcheck 49 EUR | Legacy-Code, nicht aktive Hauptseiten | REBUILD oder REMOVE AFTER MIGRATION |
| aktuelle STRUKTIVA Soforthilfe 99 EUR | aktive Paketlogik | KEEP |

## 17. Offene Risiken

Technisch:

- Der API-Mailtext wurde in Schritt 23 rein textlich auf `STRUKTIVA Digitale Unternehmensberatung` korrigiert. API-Logik, Payload, Resend-Aufruf, Empfaenger, Statuscodes und Environment-Variablen blieben unveraendert.
- Der Demo-CSS-404 wurde in Schritt 22 korrigiert und live verifiziert.
- Legacy-Code bleibt gross und sollte spaeter gezielt reduziert werden.

SEO:

- Demo-Unterseiten bleiben noindex und nicht in der Sitemap. Das ist korrekt, muss aber bei jeder spaeteren Demo-Strategie erneut entschieden werden.
- 404-Verhalten der SPA liefert technisch `200` mit `noindex`; fachlich ist der Inhalt korrekt, echte HTTP-404-Responses waeren spaeter optional sauberer.

Inhaltlich:

- Alte Soforthilfe-/Kurzcheck-Angebote existieren noch im Legacy-Bestand.
- Historische Doku enthaelt alte Zwischenstaende; finale Statusangaben stehen in diesem Dokument und in der Route-Migration.

## 18. Empfohlene naechste Schritte

1. Entscheidung fuer Soforthilfe S/M/L und alten Digitaler Kurzcheck treffen: entfernen, mergen oder neu bauen.
2. Weiteren Legacy-Cleanup nur nach erneuter Import-/Export-Pruefung planen.
3. Optional echten HTTP-404-Status fuer unbekannte Routen pruefen.
4. Optional Performance-Schritt fuer Bilddimensionen und CSS-Bundle-Reduktion planen.
5. Optional API-Mailtexte inhaltlich verbessern, aber nur in einem separaten Mailtext-Auftrag.

## Update Schritt 23: Mailbranding und sicherer Legacy-Cleanup

In Schritt 23 wurde der sichtbare Markenname im API-Bestaetigungsmailtext korrigiert:

- alt: `STRUKTIVA Unternehmensarchitektur`
- neu: `STRUKTIVA Digitale Unternehmensberatung`

Der Diff in `api/leads.js` betrifft ausschliesslich zwei sichtbare Textstellen in `buildConfirmationMailHtml`. API-Verhalten, Payload, Validierung, Honeypot, Resend-Konfiguration, Resend-Aufruf, Empfaenger, Statuscodes und Environment-Variablen wurden nicht veraendert. Es wurde kein echter Test-Submit gesendet.

Sicher entfernt:

- `src/pages/DemosPage.jsx`
- `src/pages/ReferencesPage.jsx`
- `DemosPage` und `ReferenzenPage` als Legacy-Exporte
- die isolierten alten Demo-/Referenz-Uebersichtssections `DemoUseCasesSection`, `ReferenceShowcaseSection` und `DemosShowcaseSection`

Bewusst erhalten:

- Demo-Unterseiten und Demo-Wrapper
- `HomeLegacyContinuation`
- `contactDetails`
- `siteLinks`
- Impressum, Datenschutz, NotFound
- Soforthilfe S/M/L
- aktuelle Soforthilfe 99 EUR
- alter Digitaler Kurzcheck 49 EUR
