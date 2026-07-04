# STRUKTIVA Rebuild Architecture

Stand: 2026-07-04

Dieses Dokument beschreibt die technische Vorbereitung fuer den kontrollierten STRUKTIVA-Rebuild. Grundlage sind `docs/STRUKTIVA-REBUILD-AUDIT.md` und `docs/STRUKTIVA-DESIGN-SYSTEM.md`. In diesem Schritt wurden keine neuen Seiten live gebaut, keine bestehenden Inhalte umfassend umgeschrieben und keine Formular-, Consent- oder Tracking-Funktionen veraendert.

## 1. Ausgangslage

Das Projekt ist eine React/Vite Single Page App. Vor diesem Schritt lag der React-Einstieg, die App-Shell, Routing-Entscheidung, Seitenkomponenten, Daten, Meta-Logik und Navigation nahezu vollstaendig in `src/main.jsx`.

Baseline vor Aenderungen:

- aktueller Commit: `a3e2df4`
- `npm run build`: erfolgreich
- Routing-Bibliothek: keine React-Router-Abhaengigkeit vorhanden
- vorhandene Scripts: `dev`, `build`, `preview`
- keine Scripts fuer Lint, Typecheck oder Tests

## 2. Bisherige technische Struktur

Vor der Modularisierung war `src/main.jsx` gleichzeitig:

- React Entry Point
- App-Shell
- Header/Footer-Quelle
- Navigationsdefinition
- Routing-Schalter
- SEO-/Meta-Manager
- Seiten- und Demo-Komponentencontainer

Diese Struktur funktionierte, war aber fuer den geplanten Rebuild schwer wartbar.

## 3. Identifizierte Monolithen

Die groessten Monolithen bleiben inhaltlich vorerst erhalten, wurden aber technisch markiert:

- `src/App.jsx`: enthaelt weiterhin die bestehenden Seiten, damit kein riskanter Massen-Split entsteht.
- `src/styles.css`: enthaelt weiterhin globale Styles und die vorbereiteten Design Tokens.
- `src/cookieConsent.jsx`: bleibt unveraendert als Consent- und Tracking-Gate.
- `api/leads.js`: bleibt unveraendert als Lead-/Resend-Endpunkt.

## 4. Neue Modulstruktur

Neue und veraenderte Struktur:

```text
src/
  main.jsx
  App.jsx
  cookieConsent.jsx
  styles.css
  routing/
    routeConfig.js
```

Diese Struktur ist absichtlich klein. Weitere Komponenten- und Seiten-Splits sollten erst im naechsten Umsetzungsschritt anhand konkreter Seiten erfolgen.

## 5. Verantwortung von main.jsx

`src/main.jsx` ist jetzt nur noch fuer den React-Einstieg verantwortlich:

- React importieren
- React Root initialisieren
- `App` mounten
- globale Styles laden

Routing, Navigation, Seitenentscheidung und Meta-Logik liegen nicht mehr im Entry Point.

## 6. Verantwortung von App-Komponenten

`src/App.jsx` enthaelt derzeit:

- bestehende Seitenkomponenten
- bestehende Layout-Komponenten
- App-Shell mit Header, Footer, Cookie Consent und Floating WhatsApp Button
- Nutzung der zentralen Routenkonfiguration
- bestehende Lead-Tracking-Listener fuer Kontaktaktionen

Die sichtbare Website wurde dabei nicht neu gestaltet.

## 7. Routing-Strategie

Es wurde keine neue Routing-Dependency installiert. Die bestehende manuelle SPA-Routing-Strategie wurde zentralisiert:

- `src/routing/routeConfig.js` enthaelt aktive Routen-Metadaten.
- `getRouteMeta(pathname)` liefert Titel, Description, Canonical, noindex und Layout-Flags.
- `createRouteClass(pathname)` erzeugt die bestehende Route-CSS-Klasse zentral.
- `App` mappt Pfade ueber eine Komponenten-Tabelle auf bestehende Seitenkomponenten.

Damit bleibt das Verhalten stabil, waehrend die naechsten Zielrouten vorbereitet sind.

## 8. Seitenkomponenten

Die bestehenden Seitenkomponenten wurden in diesem Schritt nicht einzeln ausgelagert, weil die Datei sehr gross ist und ein Massen-Split ohne sichtbaren Nutzen das Regressionsrisiko erhoeht haette.

Aktiv ueber die SPA gerendert:

- `/`
- `/leistungen`
- `/pakete`
- `/demos`
- `/referenzen`
- `/ueber-uns`
- `/kontakt`
- `/impressum`
- `/datenschutz`
- `/demos/handwerker`
- `/demos/kosmetik`
- `/demos/lokaler-dienstleister`

Unbekannte Pfade rendern weiterhin die bestehende `NotFoundPage`.

## 9. Globale Layoutstruktur

Die App-Shell in `App.jsx` bleibt zentral:

- normale Routen: Header, Content, Footer, Cookie Consent, Floating WhatsApp Button
- Demo-Routen: Content ohne Header/Footer, weiterhin Cookie Consent und Floating WhatsApp Button

Diese Logik nutzt jetzt Route-Metadaten statt direkter String-Pruefungen.

## 10. Navigation

Die aktuelle Navigation wird aus `currentNavigation` in `src/routing/routeConfig.js` gespeist. Sichtbar bleibt die vorhandene produktive Navigation.

Die zukuenftige Navigation ist als `futureNavigation` dokumentiert:

- Start
- Loesungen
- Praxisbeispiele
- Digital-Check
- Ueber STRUKTIVA
- Kontakt

Sie ist bewusst mit Status `planned-not-publicly-linked` markiert und wird noch nicht live angezeigt.

## 11. Formulare

Das produktive Kontaktformular auf `/kontakt` wurde nicht veraendert. Die bestehende Frontend-Validierung, Honeypot-Logik, Datenschutz-Zustimmung, `fetch('/api/leads')` und Statusmeldungen bleiben im bestehenden Code.

Keine echten Testnachrichten wurden versendet.

## 12. Consent und Tracking

`src/cookieConsent.jsx` wurde nicht veraendert.

Unverändert bleiben:

- Consent-Speicherung
- Google Consent Mode
- Google Analytics Gate
- Google Ads Gate
- Pinterest Tag Gate
- Marketing-Lead-Tracking nur nach Zustimmung
- Cookie-Einstellungen im Footer

Die globale Einbindung von `CookieConsentLayer` bleibt in der App-Shell erhalten.

## 13. CSS-Organisation

`src/styles.css` wurde nicht weiter aufgeteilt. Die bereits vorbereiteten Design Tokens aus dem vorherigen Schritt bleiben die Grundlage.

Grund:

- Eine CSS-Aufteilung ohne konkreten Seitenumbau waere risikoanfaellig.
- Importreihenfolge und globale Overrides bleiben stabil.
- Der naechste sinnvolle Schritt ist ein gezielter Split, sobald neue Komponenten real gebaut werden.

## 14. 404-Strategie

Unbekannte SPA-Routen rendern weiterhin die bestehende `NotFoundPage`.

Metadaten fuer unbekannte Routen werden jetzt ueber `DEFAULT_ROUTE_META` zentral gesetzt:

- Titel: Seite nicht gefunden
- Description: nicht aktuelle STRUKTIVA Website-Struktur
- Robots: `noindex, nofollow`

Die Vercel SPA-Fallback-Regel bleibt unveraendert und liefert fuer nicht-Datei-Pfade weiterhin `index.html` aus.

## 15. Route-Migrationsprinzip

Die technische Migrationsmatrix liegt in `docs/STRUKTIVA-ROUTE-MIGRATION.md`.

Prinzip:

- aktive Routen behalten
- Zielrouten planen
- neue Seiten erst bauen
- dann Navigation, Sitemap, Canonicals und Redirects koordiniert umstellen
- keine Redirects auf leere oder unfertige Seiten

## 16. Bekannte Risiken

- `src/App.jsx` ist weiterhin sehr gross und sollte in spaeteren Schritten komponentenweise aufgeteilt werden.
- Clientseitige Meta-Daten bleiben fuer eine Vite SPA SEO-technisch nur bedingt ideal.
- Vercel-Rewrites fuer statische Demo-Routen muessen bei spaeteren Aenderungen geschuetzt werden.
- `/referenzen` und `/demos` bleiben vorerst doppelt erreichbar.
- Alte Positionierungstexte wurden bewusst nicht ersetzt und muessen spaeter koordiniert umgestellt werden.
- Kein Lint-, Typecheck- oder Test-Script existiert im Projekt.

## 17. Noch offene technische Punkte

- Seitenkomponenten aus `App.jsx` schrittweise nach `src/pages/` extrahieren.
- Layout-Komponenten nach `src/components/layout/` auslagern.
- Kontaktformular spaeter als eigenes Formularmodul isolieren, ohne API-Verhalten zu aendern.
- Neue Zielrouten erst mit fertigen Inhalten implementieren.
- Sitemap, Canonicals, Schema.org und `index.html` in einem SEO-Schritt aktualisieren.
- Browserpruefung mit echter Navigation und mobiler Navigation nach jedem groesseren UI-Schritt wiederholen.

## 18. Empfohlener naechster Umsetzungsschritt

Als naechstes sollte nicht direkt die komplette Website neu gebaut werden. Sinnvoll ist ein kontrollierter erster Seitenumbau:

1. `/digital-check` als echte Zielseite oder zunaechst als stabiler Umbau von `/kontakt` planen.
2. Kontaktformular technisch als wiederverwendbare Komponente vorbereiten.
3. Danach `/loesungen` mit den drei Loesungswelten bauen.
4. Erst wenn diese Seiten fertig sind, die sichtbare Navigation umstellen.

So bleibt der Lead-Weg stabil, waehrend die neue STRUKTIVA-Architektur sichtbar wird.
