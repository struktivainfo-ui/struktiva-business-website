# STRUKTIVA Route Migration

Stand: 2026-07-07

Diese Matrix beschreibt die geplante technische Routenmigration fuer den kontrollierten STRUKTIVA-Rebuild. Bis einschliesslich Schritt 14 wurden keine Redirects aktiviert und keine alten Routen geloescht. `/loesungen`, `/praxisbeispiele` und `/praxisbeispiele/salon-karola` sind jetzt als echte Zielseiten aktiv; `/leistungen`, `/demos` und `/referenzen` bleiben weiterhin erreichbar.

## Grundprinzipien

- Bestehende SEO-relevante Routen bleiben aktiv, bis die jeweilige Zielseite vollstaendig gebaut und geprueft ist.
- Redirects werden erst aktiviert, wenn Inhalt, Meta-Daten, Sitemap und interne Links auf die neue Struktur abgestimmt sind.
- Es werden keine Redirect-Ketten angelegt.
- `/kontakt`, `/impressum` und `/datenschutz` bleiben als stabile Kernrouten erhalten.
- Statische Demo-Routen bleiben vorerst ueber die bestehende Vercel-Rewrite-Strategie beruecksichtigt.

## Aktive Routen

| Aktuelle Route | Aktueller Zweck | Zukuenftige Zielroute | Aktion | Redirect-Typ | SEO-Risiko | Aktivierung |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | Startseite mit Website-, Sichtbarkeits- und Strukturangebot | `/` | REBUILD | keiner | mittel | wenn neue Startseite fertig ist |
| `/leistungen` | Leistungsuebersicht mit vielen Einzelangeboten | `/loesungen` | KEEP UNTIL REDIRECT DECISION | keiner in Schritt 12 | hoch | bleibt aktiv; ein Redirect wird erst nach SEO-, Sitemap- und Inhaltsentscheidung geplant |
| `/pakete` | Pakete, Einstiegspreise und Betreuung | `/loesungen` oder Support-Unterseite | MERGE | 301 oder KEEP spaeter | mittel | nach Entscheidung zur Preis-/Paketrolle |
| `/demos` | Referenzen und Demo-Beispiele | `/praxisbeispiele` | KEEP UNTIL REDIRECT DECISION | keiner in Schritt 13 | mittel | bleibt aktiv; ein Redirect wird erst nach SEO-, Sitemap- und Demo-Strategieentscheidung geplant |
| `/referenzen` | Alias-artiger Einstieg zu Referenzen/Demos | `/praxisbeispiele` | KEEP UNTIL REDIRECT DECISION | keiner in Schritt 13 | niedrig | bleibt aktiv; ein Redirect wird erst nach SEO-, Sitemap- und Aliasentscheidung geplant |
| `/ueber-uns` | Menschen, Herkunft und Arbeitsweise | `/ueber-uns` | REBUILD | keiner | niedrig | Inhalt spaeter behutsam an neue Positionierung anpassen |
| `/kontakt` | Lead-Formular und direkte Kontaktwege | `/kontakt` | KEEP | keiner | niedrig | bleibt aktiv |
| `/impressum` | Rechtliche Anbieterangaben | `/impressum` | KEEP | keiner | niedrig | bleibt aktiv |
| `/datenschutz` | Datenschutzinformationen | `/datenschutz` | KEEP | keiner | niedrig | bleibt aktiv, spaeter rechtlich gegen Tracking/Consent pruefen |

## Demo-Routen

| Aktuelle Route | Aktueller Zweck | Zukuenftige Zielroute | Aktion | Redirect-Typ | SEO-Risiko | Aktivierung |
| --- | --- | --- | --- | --- | --- | --- |
| `/demos/handwerker` | Fiktive Handwerker-Demo, noindex | `/praxisbeispiele` oder entfernen | REMOVE AFTER MIGRATION | optional 301 spaeter | niedrig | nach Demo-/Praxisbeispiel-Entscheidung |
| `/demos/kosmetik` | Fiktive Kosmetik-Demo, noindex | `/praxisbeispiele` oder entfernen | REMOVE AFTER MIGRATION | optional 301 spaeter | niedrig | nach Demo-/Praxisbeispiel-Entscheidung |
| `/demos/lokaler-dienstleister` | Fiktive Dienstleister-Demo, noindex | `/praxisbeispiele` oder entfernen | REMOVE AFTER MIGRATION | optional 301 spaeter | niedrig | nach Demo-/Praxisbeispiel-Entscheidung |

## Geplante Zielrouten

| Zielroute | Status | Quelle | Hinweis |
| --- | --- | --- | --- |
| `/` | bestehend, spaeter neu bauen | aktuelle Startseite | keine Inhalte in diesem Schritt ersetzt |
| `/loesungen` | aktiv, live verlinkt | `/leistungen` und Startseiten-Loesungslogik | buendelt die drei Loesungswelten ohne Preislisten- oder Produktkatalog-Logik |
| `/praxisbeispiele` | aktiv, live verlinkt | `/demos`, `/referenzen` | buendelt echtes Praxisprojekt und klar gekennzeichnete Demo-Konzepte |
| `/praxisbeispiele/salon-karola` | aktiv, gezielt verlinkt | Salon-Karola-Inhalte | echte Detail-Fallstudie ohne Redirect-Migration |
| `/digital-check` | geplant, noch nicht live verlinkt | Formularlogik aus `/kontakt` | primaerer CTA der neuen Struktur |
| `/ueber-uns` | bestehend | aktuelle Ueber-uns-Seite | spaeter textlich neu ausrichten |
| `/kontakt` | bestehend | aktuelle Kontaktseite | funktional stabil halten |
| `/impressum` | bestehend | Rechtliches | beibehalten |
| `/datenschutz` | bestehend | Rechtliches | beibehalten |

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

## Umsetzungshinweise fuer den naechsten Schritt

- Neue Zielseiten erst bauen, dann Navigation und Sitemap umstellen.
- `/digital-check` darf erst in die Header-Navigation, wenn Formular, Datenschutztext, CTA-Logik und Tracking-Verhalten geprueft sind.
- `/leistungen`, `/pakete`, `/demos` und `/referenzen` nicht ohne Redirect-Plan loeschen.
- Vercel-Rewrites fuer `/demos/*` erst entfernen, wenn externe Demo-Links nicht mehr gebraucht werden oder Redirects aktiv sind.
