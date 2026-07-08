# STRUKTIVA Integration and Legacy Route Review

Stand: 2026-07-08

Dieser Bericht dokumentiert die Gesamtintegration nach den modularen Rebuild-Schritten fuer STRUKTIVA Digitale Unternehmensberatung. Er prueft die neue Hauptstruktur, zentrale Navigation, Footer, CTAs, Breadcrumbs, Meta-Daten, Canonicals, Sitemap, Robots, Vercel-Rewrites und die verbliebenen Legacy-Routen. Es wurden keine Redirects aktiviert, keine Routen geloescht, keine Preise geaendert und keine globale SEO-Migration vorgenommen.

## 1. Ergebnis in Kurzform

Die neue Hauptstruktur ist technisch integriert und ueber Header, Mobile-Navigation, Footer und zentrale CTAs erreichbar. Die neuen Seiten `/loesungen`, `/praxisbeispiele`, `/praxisbeispiele/salon-karola`, `/digital-check`, `/ueber-uns`, `/kontakt` und `/pakete` besitzen eigene Meta-Daten, eigene Canonicals und werden indexierbar ausgeliefert. Die Legacy-Routen `/leistungen`, `/demos` und `/referenzen` bleiben erreichbar und sollten erst nach einer inhaltlichen und SEO-fachlichen Entscheidung umgeleitet oder ersetzt werden.

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
| `/demos` | index, follow | `/demos` |
| `/referenzen` | index, follow | `/demos` |
| `/impressum` | index, follow | `/impressum` |
| `/datenschutz` | index, follow | `/datenschutz` |
| nicht vorhandene SPA-Route | noindex, nofollow | keine eigene Zielseite |

Die statischen Demo-Unterseiten besitzen eigene HTML-Meta-Daten mit `noindex, nofollow`.

## 9. Sitemap

Die aktuelle `public/sitemap.xml` enthaelt weiterhin die alte Struktur:

- `/`
- `/leistungen`
- `/pakete`
- `/demos`
- `/ueber-uns`
- `/kontakt`
- `/datenschutz`
- `/impressum`

Nicht enthalten sind aktuell:

- `/loesungen`
- `/praxisbeispiele`
- `/praxisbeispiele/salon-karola`
- `/digital-check`

Das ist fuer die jetzige Integrationsphase ein dokumentierter SEO-Migrationspunkt. Die Sitemap wurde in Schritt 18 bewusst nicht geaendert, weil der Auftrag keine globale Sitemap-/SEO-Migration erlaubte.

## 10. Robots

`public/robots.txt` erlaubt Crawling allgemein und verweist auf die Sitemap:

- `User-agent: *`
- `Allow: /`
- `Sitemap: https://struktiva.de/sitemap.xml`

Es gibt keine robots.txt-Sperre fuer neue Hauptseiten und keine gesonderten Legacy-Disallows.

## 11. Vercel-Rewrites

`vercel.json` enthaelt spezielle Rewrites fuer statische Demo-Unterseiten:

- `/demos/handwerker` -> `/demos/handwerker/index.html`
- `/demos/kosmetik` -> `/demos/kosmetik/index.html`
- `/demos/lokaler-dienstleister` -> `/demos/lokaler-dienstleister/index.html`

Danach folgt der SPA-Fallback auf `/index.html`. Diese Strategie sollte beibehalten werden, solange die Demo-Unterseiten noch verlinkt oder extern bekannt sein koennen.

## 12. Legacy-Route `/leistungen`

Aktuelle Rolle:

- alte Leistungsuebersicht
- viele Einzelangebote
- umfangreiche Service-/Preislogik
- moegliche organische Suchrelevanz

Ueberschneidung:

- Inhaltlich stark verwandt mit `/loesungen`
- `/loesungen` ist strategischer, ruhiger und weniger katalogartig
- `/leistungen` enthaelt noch Detail- und Preisinformationen, die nicht 1:1 migriert wurden

Empfehlung:

- vorerst behalten
- Inhalte fachlich auswerten
- relevante Such- und Angebotsinhalte in neue Struktur ueberfuehren oder bewusst entfernen
- spaeter 301 auf `/loesungen` erst nach SEO-, Sitemap- und Inhaltsentscheidung

Klassifikation: `KEEP TEMPORARILY`, `MERGE LATER`, `REDIRECT LATER`.

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
| `/leistungen` | KEEP TEMPORARILY / MERGE LATER / REDIRECT LATER | Inhalts- und SEO-Entscheidung |
| `/pakete` | KEEP / REBUILD ACTIVE | Sitemap-/SEO-Migration spaeter |
| `/demos` | KEEP TEMPORARILY / REDIRECT LATER | Demo-Strategie klaeren |
| `/referenzen` | KEEP TEMPORARILY / REDIRECT LATER | Alias-Entscheidung nach `/demos` |
| `/demos/handwerker` | KEEP TEMPORARILY / REMOVE AFTER MIGRATION | Demo-Strategie klaeren |
| `/demos/kosmetik` | KEEP TEMPORARILY / REMOVE AFTER MIGRATION | Demo-Strategie klaeren |
| `/demos/lokaler-dienstleister` | KEEP TEMPORARILY / REMOVE AFTER MIGRATION | Demo-Strategie klaeren |
| `/impressum` | KEEP | beibehalten |
| `/datenschutz` | KEEP | rechtliche Pruefung bei Tracking-/Consent-Aenderungen |

## 18. Empfohlene spaetere Redirect-Strategie

Noch nicht aktivieren:

- `/leistungen` -> `/loesungen`
- `/referenzen` -> `/praxisbeispiele`
- `/demos` -> `/praxisbeispiele`

Nur nach fachlicher Entscheidung:

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
- Legacy-Seiten bleiben indexierbar und koennen mit neuen Seiten inhaltlich konkurrieren.
- Redirects sollten erst nach Inhalts- und Canonical-Entscheidung aktiviert werden.

Inhaltliche Risiken:

- `/leistungen` enthaelt weiterhin viele Angebots- und Preisinformationen, die nicht automatisch in die neue Struktur uebertragen wurden.
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
2. `/leistungen` fachlich auswerten und entscheiden, welche Inhalte in `/loesungen` gehoeren.
3. Alte Preis- und Einzelangebotsquellen in `/leistungen` fachlich auswerten.
4. `/demos`, `/referenzen` und Demo-Unterseiten als Paket entscheiden.
5. Erst danach Redirects, Sitemap, Canonicals und interne Legacy-Links gemeinsam aktualisieren.

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
