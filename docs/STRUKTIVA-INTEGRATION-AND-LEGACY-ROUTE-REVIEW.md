# STRUKTIVA Integration and Legacy Route Review

Stand: 2026-07-08

Dieser Bericht dokumentiert die Gesamtintegration nach den modularen Rebuild-Schritten fuer STRUKTIVA Digitale Unternehmensberatung. Er prueft die neue Hauptstruktur, zentrale Navigation, Footer, CTAs, Breadcrumbs, Meta-Daten, Canonicals, Sitemap, Robots, Vercel-Rewrites und die verbliebenen Legacy-Routen. Seit Schritt 21 sind die Legacy-Indexrouten `/demos` und `/referenzen` per exaktem permanentem Redirect auf `/praxisbeispiele` migriert.

## 1. Ergebnis in Kurzform

Die neue Hauptstruktur ist technisch integriert und ueber Header, Mobile-Navigation, Footer und zentrale CTAs erreichbar. Die neuen Seiten `/leistungen`, `/loesungen`, `/praxisbeispiele`, `/praxisbeispiele/salon-karola`, `/digital-check`, `/ueber-uns`, `/kontakt` und `/pakete` besitzen eigene Meta-Daten, eigene Canonicals und werden indexierbar ausgeliefert. Die Legacy-Indexrouten `/demos` und `/referenzen` sind seit Schritt 21 Redirect-Quellen auf `/praxisbeispiele`; die Demo-Unterseiten bleiben erhalten.

Korrigierte echte Inkonsistenzen in Schritt 18:

- Der globale Footer zeigt jetzt neben E-Mail und Telefon auch den vorhandenen WhatsApp-Kontakt.
- Zwei statische Demo-Unterseiten wurden von einer alten Markenbezeichnung auf `STRUKTIVA Digitale Unternehmensberatung` aktualisiert.

## 2. Aktive Hauptstruktur

| Route | Rolle | Status |
| --- | --- | --- |
| `/` | Startseite und Einstiegsseite | aktiv |
| `/loesungen` | neue Loesungsuebersicht | aktiv |
| `/praxisbeispiele` | neue Praxisbeispiel-Uebersicht | aktiv |
| `/praxisbeispiele/salon-karola` | echte Detail-Fallstudie | aktiv |
| `/digital-check` | neue Informationsseite fuer den Digital-Check | aktiv |
| `/pakete` | neue Seite fuer Zusammenarbeit, Pakete und Betreuung | aktiv |
| `/ueber-uns` | neu aufgebaute Unternehmensseite | aktiv |
| `/kontakt` | neu aufgebaute Kontaktseite mit bestehendem Lead-Formular | aktiv |
| `/impressum` | Rechtliches | aktiv |
| `/datenschutz` | Datenschutz | aktiv |

## 3. Header und Navigation

Die globale Navigation wird zentral ueber `src/routing/routeConfig.js` gesteuert und in `Header.jsx` fuer Desktop und Mobile verwendet. Die sichtbaren Hauptpunkte sind:

- Start
- Loesungen
- Praxisbeispiele
- Digital-Check
- Ueber STRUKTIVA
- Kontakt

Die Header-CTA `Digital-Check anfragen` fuehrt bewusst auf `/kontakt#lead-form`, damit die bestehende Formularlogik nicht dupliziert wird. Die zweite zentrale CTA `Praxisbeispiel ansehen` fuehrt auf `/praxisbeispiele`.

## 4. Footer

Der globale Footer nutzt dieselben Primaerlinks wie die zentrale Navigation. Er enthaelt:

- Navigation zu den aktiven Hauptseiten
- Kontakt per E-Mail
- Kontakt per Telefon
- Kontakt per WhatsApp
- Adresse
- Impressum
- Datenschutz
- Cookie-Einstellungen

Damit sind die im Projekt vorhandenen Kontaktwege im globalen Footer konsistent abgebildet.

## 5. CTA-Struktur

Die neue Seitenstruktur folgt einer klaren CTA-Logik:

| Bereich | Primaerer Pfad | Zweck |
| --- | --- | --- |
| Beratung anfragen | `/kontakt#lead-form` | bestehendes Lead-Formular nutzen |
| Digital-Check erklaeren | `/digital-check` | Informationsseite |
| Praxis zeigen | `/praxisbeispiele` | Uebersicht |
| konkrete Fallstudie | `/praxisbeispiele/salon-karola` | Detailseite |
| direkte Kontaktaufnahme | `/kontakt` | Kontaktoptionen |

Es wurde keine neue Formularroute und keine zweite Lead-Logik eingefuehrt.

## 6. Interne Links

Die neuen Hauptseiten verlinken untereinander konsistent. Wichtige Verknuepfungen:

- Startseite verweist auf Loesungen, Praxisbeispiele, Salon-Karola-Fallstudie, Digital-Check und Kontakt.
- Loesungen verweist auf Kontakt und das bestehende Formular.
- Praxisbeispiele verweist auf Salon Karola, Demo-Unterseiten, Loesungen und Kontakt.
- Salon-Karola-Fallstudie verweist zurueck auf Praxisbeispiele und zum Kontaktformular.
- Digital-Check verweist auf das Kontaktformular, auf Kontakt und auf die Salon-Karola-Fallstudie.
- Ueber-uns verweist auf Digital-Check, Praxisbeispiele und Kontakt.
- Kontakt verweist auf Digital-Check, Datenschutz und Ueber-uns.

Legacy-interne Links innerhalb alter Legacy-Seiten bleiben als Bestand erhalten und wurden in diesem Schritt nicht pauschal migriert.

## 7. Breadcrumbs

Die neue Detailseite `/praxisbeispiele/salon-karola` besitzt eine Breadcrumb-Struktur:

- Start
- Praxisbeispiele
- aktuelle Detailseite

Die aktuelle Detailseite ist nicht als Link auf sich selbst umgesetzt. Andere neue Hauptseiten benoetigen aktuell keine Breadcrumbs, weil sie flache Hauptnavigationsziele sind.

## 8. Meta-Daten und Canonicals

| Route | Indexierung | Canonical |
| --- | --- | --- |
| `/` | index, follow | `/` |
| `/loesungen` | index, follow | `/loesungen` |
| `/praxisbeispiele` | index, follow | `/praxisbeispiele` |
| `/praxisbeispiele/salon-karola` | index, follow | `/praxisbeispiele/salon-karola` |
| `/digital-check` | index, follow | `/digital-check` |
| `/ueber-uns` | index, follow | `/ueber-uns` |
| `/kontakt` | index, follow | `/kontakt` |
| `/leistungen` | index, follow | `/leistungen` |
| `/pakete` | index, follow | `/pakete` |
| `/demos` | Redirect-Quelle | `/praxisbeispiele` |
| `/referenzen` | Redirect-Quelle | `/praxisbeispiele` |
| `/impressum` | index, follow | `/impressum` |
| `/datenschutz` | index, follow | `/datenschutz` |
| nicht vorhandene SPA-Route | noindex, nofollow | keine eigene Zielseite |

Die statischen Demo-Unterseiten besitzen eigene HTML-Meta-Daten mit `noindex, nofollow`.

## 9. Sitemap

Die aktuelle `public/sitemap.xml` enthaelt seit Schritt 21 die aktive indexierbare Struktur:

- `/`
- `/loesungen`
- `/leistungen`
- `/pakete`
- `/praxisbeispiele`
- `/praxisbeispiele/salon-karola`
- `/digital-check`
- `/ueber-uns`
- `/kontakt`
- `/datenschutz`
- `/impressum`

Nicht enthalten sind aktuell:

- `/demos`, weil es Redirect-Quelle ist
- `/referenzen`, weil es Redirect-Quelle ist
- Demo-Unterseiten, weil sie statisch `noindex, nofollow` verwenden

## 10. Robots

`public/robots.txt` erlaubt Crawling allgemein und verweist auf die Sitemap:

- `User-agent: *`
- `Allow: /`
- `Sitemap: https://struktiva.de/sitemap.xml`

Es gibt keine robots.txt-Sperre fuer neue Hauptseiten und keine gesonderten Legacy-Disallows.

## 11. Vercel-Rewrites

`vercel.json` enthaelt spezielle Rewrites fuer statische Demo-Unterseiten:

- exakter permanenter Redirect `/demos` -> `/praxisbeispiele`
- exakter permanenter Redirect `/referenzen` -> `/praxisbeispiele`
- `/demos/handwerker` -> `/demos/handwerker/index.html`
- `/demos/kosmetik` -> `/demos/kosmetik/index.html`
- `/demos/lokaler-dienstleister` -> `/demos/lokaler-dienstleister/index.html`

Danach folgt der SPA-Fallback auf `/index.html`. Es wurde keine `/demos/*`-Wildcard eingefuehrt.

## 12. Route `/leistungen`

Aktuelle Rolle:

- modular neu aufgebaute Leistungsuebersicht
- konkrete digitale Leistungen ohne sichtbare Preise
- Abgrenzung zu `/loesungen` und `/pakete`
- moegliche organische Suchrelevanz

Ueberschneidung:

- verwandt mit `/loesungen`, aber mit anderem Zweck
- `/loesungen` erklaert Problem- und Loesungslogik
- `/leistungen` erklaert konkrete umsetzbare Bausteine
- `/pakete` bleibt fuer Zusammenarbeit, Umfang und Preise zustaendig

Empfehlung:

- Route beibehalten
- nicht auf `/loesungen` redirecten
- Sitemap-/SEO-Migration spaeter kontrolliert entscheiden
- alte Legacy-Preisquellen bleiben dokumentiert, aber nicht auf der aktiven Route sichtbar

Klassifikation: `REBUILD ACTIVE`, `KEEP`.

## 13. Route `/pakete`

Aktuelle Rolle:

- modular neu aufgebaute Seite fuer Zusammenarbeit, Pakete und Betreuung
- bestaetigte Einstiegspakete
- monatliche Betreuung nur bei laufendem Bedarf
- klare Trennung zwischen einmaligen Projekten, schrittweiser Weiterentwicklung und Betreuung

Ueberschneidung:

- teilweise mit `/loesungen`
- teilweise mit Kontakt-/Anfragefuehrung
- bewusst keine Hauptnavigation, aber weiterhin per Sitemap und Legacy-Kontext erreichbar

Empfehlung:

- Route beibehalten
- nicht ohne neuen SEO-/Sitemap-Plan redirecten
- spaeter alte Preis-/Einzelangebotsquellen in `/leistungen` fachlich bereinigen

Klassifikation: `REBUILD ACTIVE`, `KEEP`.

## 14. Legacy-Route `/demos`

Aktuelle Rolle:

- alte Demo-/Referenzuebersicht
- Verweis auf statische Demo-Unterseiten
- historischer Sammelpunkt fuer Beispiele

Ueberschneidung:

- stark verwandt mit `/praxisbeispiele`
- `/praxisbeispiele` ist die neue kuratierte Einstiegsseite
- die statischen Demo-Unterseiten werden weiterhin von der neuen Praxisbeispiele-Seite verlinkt

Empfehlung:

- vorerst behalten
- Demo-Strategie klaeren
- spaeter nach Sitemap- und Linkpruefung 301 auf `/praxisbeispiele`

Klassifikation: `KEEP TEMPORARILY`, `REDIRECT LATER`.

## 15. Legacy-Route `/referenzen`

Aktuelle Rolle:

- alias-artiger Einstieg zu Referenzen/Demos
- canonical zeigt bereits auf `/demos`

Ueberschneidung:

- inhaltlich mit `/praxisbeispiele`
- technisch bereits duplicate-anfaellig durch Canonical auf `/demos`

Empfehlung:

- vorerst erreichbar lassen
- spaeter 301 auf `/praxisbeispiele`, wenn `/demos`-Entscheidung getroffen ist

Klassifikation: `REDIRECT LATER`, `KEEP TEMPORARILY`.

## 16. Demo-Unterseiten

Aktuelle Routen:

- `/demos/handwerker`
- `/demos/kosmetik`
- `/demos/lokaler-dienstleister`

Rolle:

- statische, klar beispielhafte Demo-Seiten
- noindex/nofollow
- werden weiterhin aus `/praxisbeispiele` heraus verlinkt

Empfehlung:

- vorerst behalten
- spaeter entfernen oder redirecten, wenn sie nicht mehr Teil der Beispielstrategie sind
- Vercel-Rewrites erst entfernen, wenn keine direkten Demo-Aufrufe mehr benoetigt werden

Klassifikation: `KEEP TEMPORARILY`, `REMOVE AFTER MIGRATION`.

## 17. Klassifikation aller relevanten Routen

| Route | Klassifikation | Naechster sinnvoller Schritt |
| --- | --- | --- |
| `/` | KEEP | bestehende aktive Startseite beibehalten |
| `/loesungen` | KEEP | Sitemap-/SEO-Migration spaeter |
| `/praxisbeispiele` | KEEP | Sitemap-/SEO-Migration spaeter |
| `/praxisbeispiele/salon-karola` | KEEP | Sitemap-/SEO-Migration spaeter |
| `/digital-check` | KEEP | Sitemap-/SEO-Migration spaeter |
| `/ueber-uns` | KEEP | beibehalten |
| `/kontakt` | KEEP | Lead-System weiter schuetzen |
| `/leistungen` | KEEP / REBUILD ACTIVE | Sitemap-/SEO-Migration spaeter |
| `/pakete` | KEEP / REBUILD ACTIVE | Sitemap-/SEO-Migration spaeter |
| `/demos` | REDIRECT ACTIVE | Ziel `/praxisbeispiele` |
| `/referenzen` | REDIRECT ACTIVE | Ziel `/praxisbeispiele` |
| `/demos/handwerker` | KEEP PROTECTED | statische Demo-Unterseite behalten |
| `/demos/kosmetik` | KEEP PROTECTED | statische Demo-Unterseite behalten |
| `/demos/lokaler-dienstleister` | KEEP PROTECTED | statische Demo-Unterseite behalten |
| `/impressum` | KEEP | beibehalten |
| `/datenschutz` | KEEP | rechtliche Pruefung bei Tracking-/Consent-Aenderungen |

## 18. Empfohlene spaetere Redirect-Strategie

Seit Schritt 21 aktiv:

- `/referenzen` -> `/praxisbeispiele`
- `/demos` -> `/praxisbeispiele`

Nur nach fachlicher Entscheidung:

- `/leistungen` nicht redirecten; Route ist seit Schritt 20 aktiv neu aufgebaut
- `/pakete` nicht redirecten; Route ist seit Schritt 19 aktiv neu aufgebaut
- `/demos/handwerker` -> `/praxisbeispiele` oder entfernen
- `/demos/kosmetik` -> `/praxisbeispiele` oder entfernen
- `/demos/lokaler-dienstleister` -> `/praxisbeispiele` oder entfernen

Vor Aktivierung erforderlich:

- Inhalte abgleichen
- organische Einstiegsseiten bewerten
- Sitemap aktualisieren
- Canonicals aktualisieren
- interne Links bereinigen
- Vercel-Rewrites pruefen
- 404-/Fallback-Verhalten testen

## 19. Risiken

Technische Risiken:

- Sitemap nennt die neuen Hauptseiten noch nicht.
- `/referenzen` ist erreichbar, canonicalisiert aber auf `/demos`.
- Demo-Unterseiten werden produktiv ueber Vercel-Rewrites ausgeliefert; lokale SPA-Checks muessen diese Rewrite-Logik simulieren oder die statischen Dateien direkt pruefen.

SEO-Risiken:

- Neue Seiten sind indexierbar, aber noch nicht in der Sitemap.
- Legacy-Seiten bleiben indexierbar und koennen mit neuen Seiten inhaltlich konkurrieren, vor allem `/demos` und `/referenzen`.
- Redirects sollten erst nach Inhalts- und Canonical-Entscheidung aktiviert werden.

Inhaltliche Risiken:

- Alte Legacy-Preisquellen sind weiterhin im Legacy-Code vorhanden, werden aber nicht mehr auf der aktiven Route `/leistungen` gerendert.
- Die Demo-Unterseiten sind bewusst beispielhaft und sollten langfristig entweder aktualisiert, deutlicher eingeordnet oder entfernt werden.

## 20. Geschuetzte Bereiche

Nicht veraendert wurden:

- `api/leads.js`
- Resend-Konfiguration
- Environment-Variablen
- bestehende Lead-Empfaengerlogik
- Consent-Logik
- Tracking-Hook
- Preise und Pakete
- Redirect-Konfiguration
- Sitemap
- Robots

## 21. Empfohlene Reihenfolge fuer den naechsten Auftrag

1. Sitemap-/SEO-Migration planen, aber noch keine inhaltlichen Legacy-Seiten loeschen.
2. `/demos`, `/referenzen` und Demo-Unterseiten als Paket entscheiden.
3. Alte Preis- und Einzelangebotsquellen im Legacy-Code fachlich auswerten.
4. Erst danach Redirects, Sitemap, Canonicals und interne Legacy-Links gemeinsam aktualisieren.

## 22. Update Schritt 19: `/pakete` neu aufgebaut

`/pakete` ist jetzt keine Legacy-Paketseite mehr. Die Route rendert eine modulare Zusammenarbeitsseite mit:

- Hero zur Bedarfspassung
- Einzelprojekt, schrittweiser Weiterentwicklung und laufender Betreuung
- bestaetigten Paketpreisen
- Monatsbetreuung als optionale laufende Zusammenarbeit
- Klarstellung, dass kleine Aenderungen klein bleiben duerfen
- Preisfaktoren und Transparenzabschnitt
- sozial fairem Hinweis zur persoenlichen Profil- und Bewerbungsseite
- FAQ und CTA zum Digital-Check

Gepruefte und dargestellte Preise:

- STRUKTIVA Soforthilfe: 99 € inklusive Mehrwertsteuer
- Website Start: 499 € inklusive Mehrwertsteuer
- Sichtbarkeits-Paket: 799 € inklusive Mehrwertsteuer
- Struktur-Paket: 1.199 € inklusive Mehrwertsteuer
- Premium-Struktur: 1.499 € inklusive Mehrwertsteuer
- Basis-Betreuung: ab 199 € / Monat inklusive Mehrwertsteuer
- Struktur-Betreuung: ab 299 € / Monat inklusive Mehrwertsteuer
- Premium-Betreuung: ab 499 € / Monat inklusive Mehrwertsteuer
- Persoenliche Profil- & Bewerbungsseite: 299 € inklusive Mehrwertsteuer

Nicht geaendert:

- keine neuen Preise
- keine Preisveraenderungen
- keine Redirects
- keine neue Hauptnavigation
- kein Product-, Offer- oder PriceSpecification-Schema

## 23. Update Schritt 20: `/leistungen` neu aufgebaut

`/leistungen` ist jetzt keine Legacy-Leistungs- und Preisuebersicht mehr. Die Route rendert eine modulare, preisfreie Leistungsseite mit:

- Hero fuer konkrete digitale Leistungen
- Abgrenzung zu `/loesungen` und `/pakete`
- sechs Leistungsbereichen fuer Website, Sichtbarkeit, Kundenkontakt, Kundenbindung, interne Ablaeufe, Automatisierung und gezielte Einzelaufgaben
- Verbindungslogik von Sichtbarkeit bis Wiederkehr oder Bewertung
- bewusster Einordnung, dass mehr Funktionen nicht automatisch mehr Fortschritt bedeuten
- Sonderhinweis fuer digitale Bewerbungswebseiten und persoenliche Praesentation
- CTA zum Digital-Check und Kontakt

Geprueft:

- keine sichtbaren Preise auf `/leistungen`
- keine Paketpreise, Einzelpreise, Monatsbetreuungspreise oder S/M/L-Soforthilfe-Preise
- keine alte Legacy-H1 und keine alte Tabellen-/Preisuebersicht
- Hauptnavigation bleibt ohne neuen `/leistungen`-Eintrag
- `/leistungen` bleibt indexierbar mit Canonical `/leistungen`

Nicht geaendert:

- keine Preise
- keine Redirects
- keine neue Hauptnavigation
- keine Sitemap- oder Robots-Migration
- kein Kontaktformular, keine Lead-API, kein Consent und kein Tracking

## 24. Update Schritt 21: Legacy-Indexrouten migriert

`/demos` und `/referenzen` sind seit Schritt 21 keine aktiven Inhaltsseiten mehr.

Umsetzung:

- `vercel.json` setzt exakte permanente Redirects von `/demos` und `/referenzen` auf `/praxisbeispiele`.
- Die bestehenden Demo-Rewrites fuer `/demos/handwerker`, `/demos/kosmetik` und `/demos/lokaler-dienstleister` bleiben erhalten.
- `src/routing/routeConfig.js` enthaelt `LEGACY_ROUTE_REDIRECTS` fuer die clientseitige Absicherung.
- `src/App.jsx` nutzt diese Map, rendert `/praxisbeispiele` und ersetzt alte Indexrouten in der Browser-URL.
- `src/routing/pageRegistry.jsx` enthaelt keine aktiven Komponenten mehr fuer `/demos` und `/referenzen`.
- `public/sitemap.xml` wurde auf die aktiven indexierbaren Seiten aktualisiert.
- `public/robots.txt` wurde geprueft und nicht geaendert.

Geschuetzte Demo-Unterseiten:

- `/demos/handwerker`
- `/demos/kosmetik`
- `/demos/lokaler-dienstleister`

Diese Unterseiten bleiben noindex, nofollow, werden weiterhin von `/praxisbeispiele` verlinkt und wurden nicht in die Sitemap aufgenommen.

Nicht geaendert:

- keine Demo-Unterseite entfernt
- keine Wildcard-Redirect-Regel
- keine Migration von `/leistungen` oder `/pakete`
- keine Preise
- kein Kontaktformular
- keine Lead-API
- kein Consent
- kein Tracking

## 25. Update Schritt 22: Finale Abnahme

Der finale technische, visuelle und SEO-bezogene Abnahmelauf ist in `docs/STRUKTIVA-FINAL-REBUILD-ACCEPTANCE.md` dokumentiert.

Ergebnis:

- Der aktuelle Rebuild ist live auf `https://struktiva.de` verifiziert.
- `/demos` und `/referenzen` liefern live jeweils `308` auf `/praxisbeispiele`.
- Die Hauptseiten sind live erreichbar, besitzen je eine H1, eigene Meta-Daten und Self-Canonicals.
- Demo-Unterseiten bleiben `KEEP PROTECTED`, `200` und `noindex, nofollow`.
- Ein Live-Demo-CSS-404 wurde lokal sicher korrigiert, indem die Demo-HTML-Dateien `/demos/struktiva-demo-system.css` absolut verlinken.
- Formular, Consent, Tracking, Resend und Lead-API-Logik wurden nicht veraendert.

## 26. Update Schritt 23: Mailbranding und sicherer Legacy-Cleanup

In `api/leads.js` wurde ausschliesslich der sichtbare alte Markenname im Bestaetigungsmailtext ersetzt:

- `STRUKTIVA Unternehmensarchitektur` -> `STRUKTIVA Digitale Unternehmensberatung`

Nicht veraendert wurden API-Route, Request Handling, Response Handling, Payload, Feldnamen, Validierung, Spam-Schutz, Honeypot-Logik, Resend-Konfiguration, Resend-Aufruf, Empfaenger, Absenderlogik, Environment-Variablen, Fehlerbehandlung und Statuscodes. Es wurde kein echter Test-Submit gesendet.

Sicher entfernter Legacy-Bestand:

- `src/pages/DemosPage.jsx`
- `src/pages/ReferencesPage.jsx`
- Legacy-Exports `DemosPage` und `ReferenzenPage`
- isolierte alte Demo-/Referenz-Uebersichtssections `DemoUseCasesSection`, `ReferenceShowcaseSection` und `DemosShowcaseSection`

Weiterhin geschuetzt:

- Demo-Unterseiten und Vercel-Rewrites
- Demo-Wrapper
- `HomeLegacyContinuation`
- `contactDetails`
- `siteLinks`
- Impressum, Datenschutz und NotFound
- Soforthilfe S/M/L, aktuelle Soforthilfe 99 EUR und der historisch dokumentierte, nicht mehr aktive Digitale Kurzcheck 49 EUR. Aktuell gilt ausschließlich der STRUKTIVA Digital-Check für lokale Betriebe für 129 EUR einmalig.
