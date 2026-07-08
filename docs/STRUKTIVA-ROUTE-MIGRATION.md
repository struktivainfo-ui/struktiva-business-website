# STRUKTIVA Route Migration

Stand: 2026-07-08

Diese Matrix beschreibt die geplante technische Routenmigration fuer den kontrollierten STRUKTIVA-Rebuild. Bis einschliesslich Schritt 21 wurden die Legacy-Indexrouten `/demos` und `/referenzen` kontrolliert auf `/praxisbeispiele` migriert. `/leistungen`, `/loesungen`, `/praxisbeispiele`, `/praxisbeispiele/salon-karola`, `/digital-check`, `/ueber-uns`, `/kontakt` und `/pakete` sind echte Zielseiten; die Demo-Unterseiten bleiben erhalten.

## Grundprinzipien

- Bestehende SEO-relevante Routen bleiben aktiv, bis die jeweilige Zielseite vollstaendig gebaut und geprueft ist.
- Redirects werden erst aktiviert, wenn Inhalt, Meta-Daten, Sitemap und interne Links auf die neue Struktur abgestimmt sind.
- Es werden keine Redirect-Ketten angelegt.
- `/kontakt`, `/impressum` und `/datenschutz` bleiben als stabile Kernrouten erhalten.
- Statische Demo-Routen bleiben vorerst ueber die bestehende Vercel-Rewrite-Strategie beruecksichtigt.

## Aktive Routen

| Aktuelle Route | Aktueller Zweck | Zukuenftige Zielroute | Aktion | Redirect-Typ | SEO-Risiko | Aktivierung |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | Startseite mit Website-, Sichtbarkeits- und Strukturangebot | `/` | KEEP | keiner | niedrig | aktiv |
| `/loesungen` | neue Loesungsuebersicht | `/loesungen` | KEEP | keiner | niedrig | aktiv seit Schritt 12 |
| `/praxisbeispiele` | neue Praxisbeispiel-Uebersicht | `/praxisbeispiele` | KEEP | keiner | niedrig | aktiv seit Schritt 13 |
| `/praxisbeispiele/salon-karola` | Detail-Fallstudie Salon Karola | `/praxisbeispiele/salon-karola` | KEEP | keiner | niedrig | aktiv seit Schritt 14 |
| `/digital-check` | Informationsseite fuer den Digital-Check | `/digital-check` | KEEP | keiner | niedrig | aktiv seit Schritt 15 |
| `/leistungen` | preisfreie modulare Leistungsuebersicht | `/leistungen` | REBUILD ACTIVE | keiner | mittel | in Schritt 20 modular neu aufgebaut |
| `/pakete` | Pakete, Zusammenarbeit, Einstiegspreise und Betreuung | `/pakete` | REBUILD ACTIVE | keiner | niedrig | in Schritt 19 modular neu aufgebaut |
| `/demos` | alte Referenz-/Demo-Uebersicht | `/praxisbeispiele` | REDIRECT ACTIVE | permanent, exakt | mittel | aktiv seit Schritt 21 |
| `/referenzen` | Alias-artiger Einstieg zu Referenzen/Demos | `/praxisbeispiele` | REDIRECT ACTIVE | permanent, exakt | niedrig | aktiv seit Schritt 21 |
| `/ueber-uns` | Menschen, Haltung und Arbeitsweise | `/ueber-uns` | REBUILD ACTIVE | keiner | niedrig | in Schritt 16 modular neu aufgebaut |
| `/kontakt` | Kontaktweg-Orientierung, direkte Kontaktwege und Lead-Formular | `/kontakt` | REBUILD ACTIVE | keiner | niedrig | in Schritt 17 modular neu aufgebaut |
| `/impressum` | Rechtliche Anbieterangaben | `/impressum` | KEEP | keiner | niedrig | bleibt aktiv |
| `/datenschutz` | Datenschutzinformationen | `/datenschutz` | KEEP | keiner | niedrig | bleibt aktiv, spaeter rechtlich gegen Tracking/Consent pruefen |

## Demo-Routen

| Aktuelle Route | Aktueller Zweck | Zukuenftige Zielroute | Aktion | Redirect-Typ | SEO-Risiko | Aktivierung |
| --- | --- | --- | --- | --- | --- | --- |
| `/demos/handwerker` | Fiktive Handwerker-Demo, noindex | `/demos/handwerker` | KEEP PROTECTED | keiner; Rewrite bleibt | niedrig | statische Demo-Unterseite bleibt erhalten |
| `/demos/kosmetik` | Fiktive Kosmetik-Demo, noindex | `/demos/kosmetik` | KEEP PROTECTED | keiner; Rewrite bleibt | niedrig | statische Demo-Unterseite bleibt erhalten |
| `/demos/lokaler-dienstleister` | Fiktive Dienstleister-Demo, noindex | `/demos/lokaler-dienstleister` | KEEP PROTECTED | keiner; Rewrite bleibt | niedrig | statische Demo-Unterseite bleibt erhalten |

## Geplante Zielrouten

| Zielroute | Status | Quelle | Hinweis |
| --- | --- | --- | --- |
| `/` | aktiv | aktuelle Startseite | beibehalten |
| `/leistungen` | aktiv, modular neu aufgebaut | alte Leistungs- und Preisroute | erklaert konkrete digitale Leistungen ohne Preis- und Paketlogik |
| `/loesungen` | aktiv, live verlinkt | `/leistungen` und Startseiten-Loesungslogik | buendelt die drei Loesungswelten ohne Preislisten- oder Produktkatalog-Logik |
| `/praxisbeispiele` | aktiv, live verlinkt | `/demos`, `/referenzen` | buendelt echtes Praxisprojekt und klar gekennzeichnete Demo-Konzepte |
| `/praxisbeispiele/salon-karola` | aktiv, gezielt verlinkt | Salon-Karola-Inhalte | echte Detail-Fallstudie ohne Redirect-Migration |
| `/digital-check` | aktiv, live verlinkt | Formularlogik aus `/kontakt` | erklaerende Digital-Check-Zielseite mit Anfrage-CTA zum bestehenden Formular |
| `/ueber-uns` | aktiv, modular neu aufgebaut | alte About-Seite | Haltung, Menschen und Arbeitsweise ohne neue Route |
| `/kontakt` | aktiv, modular neu aufgebaut | alte Kontaktseite | funktional stabiles Lead-System bleibt erhalten |
| `/impressum` | bestehend | Rechtliches | beibehalten |
| `/datenschutz` | bestehend | Rechtliches | beibehalten |
| `/pakete` | aktiv, modular neu aufgebaut | alte Paket- und Preisroute | erklaert Zusammenarbeitsmodelle, bestaetigte Pakete und Betreuung ohne Redirect |

## Update Schritt 12: `/loesungen` aktiviert

Die Route `/loesungen` ist jetzt als eigenstaendige Seite gebaut und im Routing registriert. Sie besitzt eigene Meta-Daten, eine eigene Canonical-URL und wird indexierbar ausgeliefert.

Interne Links wurden kontrolliert umgestellt:

- Header Desktop: `Loesungen` -> `/loesungen`
- Header Mobile: `Loesungen` -> `/loesungen`
- Footer/Primaernavigation: `Loesungen` -> `/loesungen`
- Startseiten-Loesungssektion: `Wie STRUKTIVA diese Bereiche verbindet` und `Loesungen im Ueberblick ansehen` -> `/loesungen`

Nicht geaendert:

- `/leistungen` bleibt aktiv, indexierbar und ohne Redirect.
- `/pakete`, `/demos`, `/referenzen`, `/digital-check` und `/ueber-uns` wurden nicht neu migriert.
- Sitemap, Robots, globale Canonicals und globale SEO-Struktur wurden in Schritt 12 nicht umgebaut.

## Update Schritt 13: `/praxisbeispiele` aktiviert

Die Route `/praxisbeispiele` ist jetzt als eigenstaendige Seite gebaut und im Routing registriert. Sie besitzt eigene Meta-Daten, eine eigene Canonical-URL und wird indexierbar ausgeliefert.

Interne Links wurden kontrolliert umgestellt:

- Header Desktop: `Praxisbeispiele` -> `/praxisbeispiele`
- Header Mobile: `Praxisbeispiele` -> `/praxisbeispiele`
- Footer/Primaernavigation: `Praxisbeispiele` -> `/praxisbeispiele`
- Leistungs-Dropdown: `Praxisbeispiele` -> `/praxisbeispiele`
- Sekundaerer CTA `Praxisbeispiel ansehen` -> `/praxisbeispiele`

Nicht geaendert:

- `/demos` bleibt aktiv, erreichbar und ohne Redirect.
- `/referenzen` bleibt aktiv, erreichbar und ohne Redirect.
- `/demos/handwerker`, `/demos/kosmetik` und `/demos/lokaler-dienstleister` bleiben erreichbar.
- `/praxisbeispiele/salon-karola` wurde nicht gebaut.
- `/digital-check` wurde nicht gebaut.
- Sitemap, Robots, globale Canonicals und globale SEO-Struktur wurden in Schritt 13 nicht umgebaut.

## Update Schritt 14: `/praxisbeispiele/salon-karola` aktiviert

Die Route `/praxisbeispiele/salon-karola` ist jetzt als eigenstaendige Detail-Fallstudie gebaut und im Routing registriert. Sie besitzt eigene Meta-Daten, eine eigene Canonical-URL und wird indexierbar ausgeliefert.

Gezielte Links wurden kontrolliert umgestellt:

- Praxisbeispiele-Seite, Salon-Karola-Featured-Case: `Projekt im Detail ansehen` -> `/praxisbeispiele/salon-karola`
- Startseite, konkrete Salon-Karola-Fallstudie: `Praxisbeispiel ansehen` -> `/praxisbeispiele/salon-karola`

Allgemeine Links bleiben auf `/praxisbeispiele`:

- Header Desktop/Mobile und Footer `Praxisbeispiele`
- Home-Hero-CTA `Praxisbeispiel ansehen`
- allgemeiner SolutionsPage-Praxisbeispiel-CTA
- `currentNavigation.secondaryCta`

Nicht geaendert:

- `/demos` bleibt aktiv, erreichbar und ohne Redirect.
- `/referenzen` bleibt aktiv, erreichbar und ohne Redirect.
- `/leistungen` bleibt aktiv, erreichbar und ohne Redirect.
- `/digital-check` wurde nicht gebaut.
- Sitemap, Robots, globale Canonicals und globale SEO-Struktur wurden in Schritt 14 nicht umgebaut.

## Update Schritt 15: `/digital-check` aktiviert

Die Route `/digital-check` ist jetzt als eigenstaendige Zielseite gebaut und im Routing registriert. Sie besitzt eigene Meta-Daten, eine eigene Canonical-URL und wird indexierbar ausgeliefert.

Gezielte Navigationslinks wurden kontrolliert umgestellt:

- Header Desktop: `Digital-Check` -> `/digital-check`
- Header Mobile: `Digital-Check` -> `/digital-check`
- Footer/Primaernavigation: `Digital-Check` -> `/digital-check`
- `currentNavigation.primary`, `currentNavigation.desktop` und `currentNavigation.mobile` nutzen fuer den Informationslink jetzt `/digital-check`.

Bewusst nicht geaendert:

- `Digital-Check anfragen` bleibt als Conversion-CTA auf `/kontakt#lead-form`.
- Header-CTA, Footer-CTA, Home-Hero-CTA, HomeDigitalCheckSection-CTA, SolutionsPage-Abschluss-CTA, PracticeExamplesPage-Abschluss-CTA, Salon-Karola-Abschluss-CTA und DigitalCheckPage-CTA fuehren weiterhin direkt zum bestehenden Formularanker.
- `/kontakt`, das bestehende Formular, `api/leads.js`, Resend, Consent, Tracking, Sitemap, Robots und Redirects wurden nicht umgebaut.
- `/leistungen`, `/demos`, `/referenzen`, `/ueber-uns` und alte Demo-Routen bleiben unveraendert erreichbar.
- Es wurden keine Preis-, Paket- oder globale SEO-Migrationen vorgenommen.

## Update Schritt 16: `/ueber-uns` neu aufgebaut

Die bestehende Route `/ueber-uns` wurde nicht umbenannt und nicht migriert, sondern als aktive Route modular neu aufgebaut. Alte sichtbare Legacy-About-Inhalte werden auf dieser Route nicht mehr gerendert.

Neue inhaltliche Ausrichtung:

- Hero zu persoenlicher, klarer und umsetzungsnaher Arbeitsweise
- Erklaerung, warum STRUKTIVA zuerst die Situation versteht
- persoenlicher Bereich mit Sven Matzke und Jessica Wacker
- drei Arbeitsprinzipien
- Methode `Verstehen -> Strukturieren -> Umsetzen -> Weiterentwickeln`
- Beratung und Umsetzung als zusammenhaengender Ansatz
- ruhiger Abgrenzungsbereich
- schrittweise digitale Entwicklung
- Praxisbezug zu Salon Karola
- Abschluss mit Digital-Check als naechstem Schritt

Meta-Daten wurden fuer `/ueber-uns` aktualisiert:

- Title: `Ueber STRUKTIVA | Digitale Unternehmensberatung`
- Description: Lernen Sie STRUKTIVA Digitale Unternehmensberatung, die persoenliche Arbeitsweise und den Ansatz aus Verstehen, Strukturieren, Umsetzen und Weiterentwickeln kennen.
- Canonical: `/ueber-uns`
- Robots: index, follow

Nicht geaendert:

- Navigation bleibt auf der bestehenden Route `/ueber-uns`.
- Es wurden keine Redirects aktiviert.
- `/kontakt`, Kontaktformular, `api/leads.js`, Resend, Consent, Tracking, Sitemap, Robots und globale SEO-Struktur wurden nicht umgebaut.
- `/leistungen`, `/demos`, `/referenzen`, Preise und Pakete bleiben unveraendert.

## Update Schritt 17: `/kontakt` neu aufgebaut

Die bestehende Route `/kontakt` wurde nicht umbenannt und nicht migriert, sondern als aktive Route modular neu aufgebaut. Alte sichtbare Legacy-Kontaktseitenbereiche werden auf dieser Route nicht mehr gerendert.

Neue inhaltliche Ausrichtung:

- Hero mit Kontakt-Einstieg
- ruhige Kontaktvisualisierung
- Orientierung zu direktem Kontakt, Anfrageformular und Digital-Check
- direkte Kontaktmoeglichkeiten mit bestaetigten Projektdaten
- Vorbereitung darauf, was Nutzer schreiben koennen
- bestehendes Lead-Formular als einzige aktive Formularinstanz
- sachlicher Ablauf nach einer Anfrage
- kurzer Datenschutz-Hinweis
- ruhiger Abschluss mit Link zu `/ueber-uns`

Meta-Daten wurden fuer `/kontakt` aktualisiert:

- Title: `Kontakt | STRUKTIVA Digitale Unternehmensberatung`
- Description: Nehmen Sie Kontakt mit STRUKTIVA auf. Beschreiben Sie, wo digitale Ablaeufe, Kundenwege oder bestehende Systeme heute nicht gut zusammenspielen.
- Canonical: `/kontakt`
- Robots: index, follow

Nicht geaendert:

- Die Route bleibt `/kontakt`.
- Es wurden keine Redirects aktiviert.
- Das Lead-System bleibt funktional unveraendert.
- `api/leads.js`, Resend, Environment-Variablen, Empfaengerlogik, Consent, Tracking, Sitemap, Robots und globale SEO-Struktur wurden nicht umgebaut.
- Startseite, `/loesungen`, `/praxisbeispiele`, `/praxisbeispiele/salon-karola`, `/digital-check`, `/ueber-uns`, `/leistungen`, `/demos`, `/referenzen`, Preise und Pakete bleiben unveraendert.

## Update Schritt 18: Gesamtintegration und Legacy-Routenpruefung

Die Gesamtintegration der neuen Hauptstruktur wurde geprueft und in `docs/STRUKTIVA-INTEGRATION-AND-LEGACY-ROUTE-REVIEW.md` dokumentiert.

Geprueft wurden:

- Header- und Mobile-Navigation
- Footer und Kontaktwege
- interne CTAs
- Breadcrumbs
- `routeConfig.js` und `pageRegistry.jsx`
- Meta-Daten und Canonicals
- Sitemap und Robots
- Vercel-Rewrites fuer Demo-Unterseiten
- Legacy-Routen `/leistungen`, `/pakete`, `/demos` und `/referenzen`
- Demo-Unterseiten `/demos/handwerker`, `/demos/kosmetik` und `/demos/lokaler-dienstleister`

Ergebnis:

- Die neuen Hauptseiten sind aktiv, intern erreichbar und indexierbar.
- Der Footer enthaelt jetzt auch den vorhandenen WhatsApp-Kontakt.
- Die statischen Demo-Unterseiten verwenden die verbindliche Firmenbezeichnung `STRUKTIVA Digitale Unternehmensberatung`.
- `/leistungen`, `/pakete`, `/demos` und `/referenzen` bleiben ohne Redirect aktiv.
- Die Sitemap wurde bewusst nicht geaendert und enthaelt die neuen Hauptseiten noch nicht.
- Robots wurden bewusst nicht geaendert.
- Vercel-Rewrites fuer statische Demo-Unterseiten bleiben bestehen.

Aktualisierte Legacy-Empfehlung:

| Route | Empfehlung | Bedingung vor Aenderung |
| --- | --- | --- |
| `/leistungen` | vorerst behalten, spaeter Inhalte in `/loesungen` ueberfuehren und 301 pruefen | Inhalt, SEO, Sitemap, Canonical und interne Links klaeren |
| `/pakete` | vorerst behalten, spaeter neu bauen oder in passende Angebotsstruktur ueberfuehren | Preis- und Paketstrategie klaeren |
| `/demos` | vorerst behalten, spaeter moeglichst auf `/praxisbeispiele` fuehren | Demo-Strategie und direkte Demo-Links klaeren |
| `/referenzen` | vorerst behalten, spaeter auf `/praxisbeispiele` fuehren | Alias-/Canonical-Entscheidung nach `/demos` |
| `/demos/handwerker` | vorerst behalten, spaeter entfernen oder redirecten | Demo-Unterseiten-Strategie klaeren |
| `/demos/kosmetik` | vorerst behalten, spaeter entfernen oder redirecten | Demo-Unterseiten-Strategie klaeren |
| `/demos/lokaler-dienstleister` | vorerst behalten, spaeter entfernen oder redirecten | Demo-Unterseiten-Strategie klaeren |

## Update Schritt 19: `/pakete` neu aufgebaut

Die bestehende Route `/pakete` wurde nicht umbenannt und nicht migriert, sondern als aktive Route modular neu aufgebaut. Alte sichtbare Legacy-Paketbereiche werden auf dieser Route nicht mehr gerendert.

Neue inhaltliche Ausrichtung:

- Zusammenarbeit statt klassischer Preisvergleich
- Einzelprojekt, schrittweise Weiterentwicklung und laufende Betreuung
- bestaetigte Paketpreise als Orientierung
- klare Trennung zwischen einmaligen Projekten und monatlicher Betreuung
- Erklaerung, dass Betreuung nicht automatisch Pflicht ist
- kleine Aenderungen und Einzelaufgaben als separater Bedarf
- Preisfaktoren ohne Preisrechner
- sozial fairer Hinweis zur persoenlichen Profil- und Bewerbungsseite
- FAQ und Abschluss-CTA zum Digital-Check

Meta-Daten wurden fuer `/pakete` aktualisiert:

- Title: `Pakete und Zusammenarbeit | STRUKTIVA`
- Description: Erfahren Sie, welche Formen der Zusammenarbeit STRUKTIVA anbietet - vom klar abgegrenzten Einzelprojekt bis zur schrittweisen Weiterentwicklung und laufenden Betreuung.
- Canonical: `/pakete`
- Robots: index, follow

Nicht geaendert:

- Es wurden keine Redirects aktiviert.
- `/pakete` wurde nicht in die Hauptnavigation aufgenommen.
- Sitemap, Robots und globale SEO-Struktur wurden nicht final migriert.
- Preise wurden nicht veraendert.
- `api/leads.js`, Resend, Kontaktformular, Consent und Tracking wurden nicht veraendert.

## Umsetzungshinweise fuer den naechsten Schritt

- Die erste kontrollierte Sitemap-/SEO-/Legacy-Migration wurde in Schritt 21 umgesetzt.
- `/digital-check` ist gebaut und darf als Informationsroute verlinkt bleiben; Anfrage-CTAs muessen weiterhin bewusst auf `/kontakt#lead-form` fuehren.
- `/leistungen`, `/ueber-uns`, `/kontakt` und `/pakete` sind modular neu aufgebaut; `/demos` und `/referenzen` sind als exakte permanente Redirects aktiv.
- `/leistungen`, `/pakete` und Demo-Unterseiten nicht ohne eigenen Redirect- oder Entfernungplan aendern.
- Vercel-Rewrites fuer `/demos/*` erst entfernen, wenn externe Demo-Links nicht mehr gebraucht werden oder Redirects aktiv sind.

## Update Schritt 20: `/leistungen` neu aufgebaut

Die bestehende Route `/leistungen` wurde nicht umbenannt und nicht auf `/loesungen` umgeleitet, sondern als aktive Route modular neu aufgebaut. Alte sichtbare Legacy-Leistungsbereiche mit Preis- und Festpreislogik werden auf dieser Route nicht mehr gerendert.

Neue inhaltliche Ausrichtung:

- konkrete digitale Leistungen statt Problem-/Loesungslogik
- Abgrenzung zu `/loesungen` und `/pakete`
- Website, Sichtbarkeit, Kundenkontakt und Anfragefuehrung
- Kundenbindung und digitale Kundenstrukturen
- interne digitale Ablaeufe, Dashboards und Ordnungssysteme
- Automatisierung und KI-Unterstuetzung ohne Autonomieversprechen
- gezielte Einzelaufgaben ohne Preisdarstellung
- CTA zu `/digital-check`, `/pakete`, `/loesungen` und `/kontakt`

Meta-Daten wurden fuer `/leistungen` aktualisiert:

- Title: `Digitale Leistungen fuer Unternehmen | STRUKTIVA`
- Description: Konkrete digitale Leistungen von STRUKTIVA: Websites, Sichtbarkeit, Kundenfuehrung, Kundenbindung, interne Ablaeufe, Systeme und Automatisierungen.
- Canonical: `/leistungen`
- Robots: index, follow

Nicht geaendert:

- keine Redirects
- kein neuer Hauptnavigationseintrag
- keine Preise oder Pakete
- keine Sitemap- oder Robots-Migration
- kein Kontaktformular, keine Lead-API, kein Consent und kein Tracking

## Update Schritt 21: `/demos` und `/referenzen` migriert

Die Legacy-Indexrouten `/demos` und `/referenzen` wurden kontrolliert auf `/praxisbeispiele` migriert.

Technische Umsetzung:

- `vercel.json` enthaelt zwei exakte permanente Redirects:
  - `/demos` -> `/praxisbeispiele`
  - `/referenzen` -> `/praxisbeispiele`
- Es wurde keine Wildcard-Regel fuer `/demos/*` eingefuehrt.
- Die bestehenden Rewrites fuer `/demos/handwerker`, `/demos/kosmetik` und `/demos/lokaler-dienstleister` bleiben erhalten.
- `src/routing/routeConfig.js` enthaelt eine zentrale `LEGACY_ROUTE_REDIRECTS`-Map fuer clientseitige Absicherung.
- `src/App.jsx` rendert fuer alte Indexrouten sofort `/praxisbeispiele` und ersetzt die URL per `history.replaceState`.
- `src/routing/pageRegistry.jsx` registriert `/demos` und `/referenzen` nicht mehr als aktive Inhaltsseiten.

Sitemap:

- `public/sitemap.xml` enthaelt jetzt die aktiven indexierbaren Routen:
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
- `/demos` wurde entfernt, weil es Redirect-Quelle ist.
- `/referenzen` bleibt entfernt, weil es Redirect-Quelle ist.
- Demo-Unterseiten wurden nicht aufgenommen, weil die statischen HTML-Dateien `noindex, nofollow` verwenden.

Robots:

- `public/robots.txt` wurde geprueft und nicht veraendert.
- Der Sitemap-Verweis lautet weiterhin `https://struktiva.de/sitemap.xml`.
- Redirect-Quellen werden nicht per robots.txt blockiert.

Neue Klassifikation:

| Route | Klassifikation | Ziel |
| --- | --- | --- |
| `/leistungen` | KEEP | `/leistungen` |
| `/pakete` | KEEP | `/pakete` |
| `/demos` | REDIRECT ACTIVE | `/praxisbeispiele` |
| `/referenzen` | REDIRECT ACTIVE | `/praxisbeispiele` |
| `/demos/handwerker` | KEEP PROTECTED | statische Demo-Unterseite |
| `/demos/kosmetik` | KEEP PROTECTED | statische Demo-Unterseite |
| `/demos/lokaler-dienstleister` | KEEP PROTECTED | statische Demo-Unterseite |

Nicht geaendert:

- keine Demo-Unterseite entfernt
- keine `/demos/*`-Wildcard
- keine Preise
- kein Kontaktformular
- keine Lead-API
- kein Consent
- kein Tracking

## Update Schritt 22: Finaler Live- und SEO-Audit

Der finale Abnahmelauf ist in `docs/STRUKTIVA-FINAL-REBUILD-ACCEPTANCE.md` dokumentiert.

Live verifiziert:

- `/demos` -> `/praxisbeispiele` mit `308`
- `/referenzen` -> `/praxisbeispiele` mit `308`
- alle Hauptseiten auf `https://struktiva.de`
- Sitemap und robots.txt
- Demo-Unterseiten mit `200` und `noindex, nofollow`

Sicher korrigiert:

- Die drei Demo-HTML-Dateien verlinken ihr Stylesheet jetzt absolut ueber `/demos/struktiva-demo-system.css`.
- Die technische Migrationsmatrix in `src/routing/routeConfig.js` klassifiziert die Demo-Unterseiten als `KEEP PROTECTED`.
