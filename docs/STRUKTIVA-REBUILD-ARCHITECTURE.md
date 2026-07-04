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

## 19. Update Schritt 3.5: App-Modularisierung

Stand nach dem kontrollierten Refactoring:

- `src/App.jsx` wurde von 7860 Zeilen auf eine schlanke App-Koordination reduziert.
- Die bisherigen grossen Seiten-, Layout-, Formular- und Content-Bloecke liegen vorerst in `src/legacy/legacyContent.jsx`.
- Die aktiven Routen werden ueber `src/routing/pageRegistry.jsx` auf Page-Module gemappt.
- Header, Footer und Floating WhatsApp Button werden ueber `src/components/layout/` bereitgestellt.
- Pfad- und Meta-Hooks werden ueber `src/hooks/` angebunden.
- Das sichtbare Design, die Inhalte und die Live-Navigation wurden nicht absichtlich veraendert.

Neue Struktur:

```text
src/
  App.jsx
  main.jsx
  cookieConsent.jsx
  styles.css
  components/
    layout/
      AppShell.jsx
      FloatingWhatsAppButton.jsx
      Footer.jsx
      Header.jsx
  hooks/
    useCurrentPath.js
    useDocumentTitleSafe.js
    useMarketingLeadTracking.js
  legacy/
    legacyContent.jsx
  pages/
    AboutPage.jsx
    ContactPage.jsx
    DatenschutzPage.jsx
    DemoDienstleisterPage.jsx
    DemoHandwerkerPage.jsx
    DemoKosmetikPage.jsx
    DemosPage.jsx
    HomePage.jsx
    ImpressumPage.jsx
    NotFoundPage.jsx
    PackagesPage.jsx
    ReferencesPage.jsx
    ServicesPage.jsx
  routing/
    pageRegistry.jsx
    routeConfig.js
```

### Verantwortung von App.jsx

`src/App.jsx` koordiniert nur noch:

- aktuellen Pfad lesen
- Routenmetadaten laden
- aktive Page-Komponente bestimmen
- Dokument-Metadaten-Hook ausfuehren
- Marketing-Lead-Tracking-Hook registrieren
- `AppShell` rendern

Damit enthaelt App.jsx keine vollstaendigen Seitentexte, keine Header-/Footer-Implementierung, keine Formularimplementierung und keine langen Datenstrukturen mehr.

### Verantwortung der Seitenkomponenten

Die Page-Dateien in `src/pages/` sind derzeit stabile Einstiegsmodule fuer die aktiven Routen. Sie re-exportieren bewusst die bestehenden Implementierungen aus `src/legacy/legacyContent.jsx`, damit keine sichtbaren Inhalte oder Layouts im Refactoring-Schritt veraendert werden.

Aktive Page-Module:

- `HomePage.jsx`
- `ServicesPage.jsx`
- `PackagesPage.jsx`
- `DemosPage.jsx`
- `ReferencesPage.jsx`
- `AboutPage.jsx`
- `ContactPage.jsx`
- `ImpressumPage.jsx`
- `DatenschutzPage.jsx`
- `NotFoundPage.jsx`
- `DemoHandwerkerPage.jsx`
- `DemoKosmetikPage.jsx`
- `DemoDienstleisterPage.jsx`

### Layout-Komponenten

`src/components/layout/AppShell.jsx` enthaelt die globale Shell:

- Route-CSS-Klasse
- Home-/Pricing-/Demo-Layout-Flags
- Header/Footer-Ausblendung fuer Demo-Routen
- Cookie Consent Mounting
- Floating WhatsApp Button

`Header.jsx`, `Footer.jsx` und `FloatingWhatsAppButton.jsx` sind eigene Layout-Einstiegsmodule und verweisen vorerst auf die unveraenderten Legacy-Implementierungen.

### Navigation

Die sichtbare Navigation wurde nicht umgestellt. Die aktuellen Live-Links bleiben ueber `currentNavigation` in `src/routing/routeConfig.js` zentral gepflegt. Die zukuenftige Navigation bleibt weiterhin als geplant, aber nicht oeffentlich aktiviert.

### Formulare

Das Kontaktformular wurde funktional nicht veraendert. `api/leads.js`, Resend-Konfiguration, Environment-Variablen, Honeypot, Validierung, Erfolgs- und Fehlerstatus bleiben unveraendert.

Bewusste verbleibende Schuld: Die eigentliche Formular-JSX-Implementierung liegt weiterhin innerhalb der bestehenden `ProjectRequestPage` in `src/legacy/legacyContent.jsx`. Ein spaeterer Schritt sollte daraus ein dediziertes Formularmodul machen, idealerweise erst zusammen mit `/digital-check`.

### Content-Daten

Grosse statische Daten wie Leistungslisten, Paketdaten, Demo-Daten, Kontaktangaben und vorbereitete Altseiten liegen weiterhin in `src/legacy/legacyContent.jsx`. Sie wurden nicht in ein kuenstliches CMS- oder Datenmodell verschoben, weil dieser Schritt keine Inhalte veraendern sollte.

Naechster sinnvoller Split:

- `src/content/siteLinks.js`
- `src/content/contactDetails.js`
- `src/content/services.js`
- `src/content/pricing.js`
- `src/content/demos.js`

### Route-Konfiguration

`src/routing/routeConfig.js` bleibt die Quelle fuer:

- aktive Route-Metadaten
- Canonicals
- Robots
- Layout-Flags
- aktuelle Navigation
- geplante Navigation
- Route-Migrationsplan

`src/routing/pageRegistry.jsx` ist neu hinzugekommen und mappt aktive Pfade auf Page-Komponenten.

### Verbleibende technische Schulden

- `src/legacy/legacyContent.jsx` ist weiterhin sehr gross.
- Viele nicht aktive Alt-/Demo-Komponenten sind noch im Legacy-Modul enthalten.
- Das Kontaktformular ist noch nicht als eigene Formular-Komponente extrahiert.
- Content-Daten und UI sind innerhalb des Legacy-Moduls weiterhin gemischt.
- CSS bleibt global in `src/styles.css`.
- Es gibt weiterhin keine Lint-, Typecheck- oder Unit-Test-Scripts.

Diese Schulden wurden bewusst dokumentiert statt in einem riskanten Massenumbau geloest.

## 20. Update Schritt 4: Globaler Website-Rahmen

In Schritt 4 wurde ausschliesslich der globale Rahmen neu aufgebaut. Legacy-Seiten, Hero, Seiteninhalte, Kontaktformular, Consent und Tracking wurden nicht inhaltlich umgebaut.

### Neue Header-Struktur

`src/components/layout/Header.jsx` ist jetzt eine eigene Implementierung und kein Legacy-Reexport mehr.

Der Header enthaelt:

- STRUKTIVA-Markenbereich mit Logo und Bezeichnung `Digitale Unternehmensberatung`
- Desktop-Navigation aus `currentNavigation.primary`
- primaeren CTA `Digital-Check anfragen`
- mobile Menue-Schaltflaeche
- Sticky-/Scroll-Zustand mit dezenter Verdichtung

Der Header nutzt eine helle Oberflaeche, schwarze Typografie und Gold nur fuer aktive Navigation und feine Akzente.

### Neue Navigation

Die sichtbare Uebergangsnavigation lautet:

- Start -> `/`
- Loesungen -> `/leistungen`
- Praxisbeispiele -> `/demos`
- Digital-Check -> `/kontakt#lead-form`
- Ueber STRUKTIVA -> `/ueber-uns`
- Kontakt -> `/kontakt`

Damit wirkt die Navigation bereits wie die geplante Zielstruktur, fuehrt aber nur auf vorhandene funktionierende Ziele. `/loesungen`, `/praxisbeispiele` und `/digital-check` wurden nicht als unfertige Live-Routen aktiviert.

Die Navigation bleibt zentral in `src/routing/routeConfig.js` gepflegt. Desktop, Mobile und Footer lesen aus derselben Quelle.

### Mobile Navigation

Die mobile Navigation wurde neu aufgebaut:

- grosse Touch-Ziele
- `aria-expanded`
- `aria-controls`
- Escape-Schliessen
- Body Scroll Lock waehrend geoeffnetem Menue
- Fokus-Rueckgabe an den Menuebutton
- CTA innerhalb des Panels

Das mobile Menue ist als eigener Panel-Bereich umgesetzt und ersetzt das alte Dropdown-Verhalten im globalen Rahmen.

### App-Shell-Verhalten

`src/components/layout/AppShell.jsx` enthaelt nun:

- Skip Link zu `#main-content`
- Header fuer normale Routen
- Content-Ziel `#main-content` ohne zusaetzliches `main`, damit Legacy-Seiten ihre bestehenden `main`-Landmarks behalten
- Footer fuer normale Routen
- Cookie Consent Layer
- Floating WhatsApp Button

Demo-Routen mit `hideChrome` behalten weiterhin ihre reduzierte Darstellung ohne globalen Header/Footer.

### Footer-Struktur

`src/components/layout/Footer.jsx` ist jetzt eine eigene globale Footer-Komponente.

Der Footer enthaelt:

- Markenbereich `STRUKTIVA Digitale Unternehmensberatung`
- kurzen Positionierungssatz
- CTA `Digital-Check anfragen`
- Navigation aus zentraler Konfiguration
- bestehende Kontaktangaben aus dem Projekt
- Impressum
- Datenschutz
- Cookie-Einstellungen
- dynamisches Copyright-Jahr

### CTA-Hierarchie

Global gilt:

- Primaerer CTA: `Digital-Check anfragen`
- Uebergangsziel: `/kontakt#lead-form`
- Sekundaerer CTA in der Konfiguration: `Praxisbeispiel ansehen` -> `/demos`

Es wurde keine unfertige `/digital-check`-Seite angelegt.

### Floating WhatsApp Button

`src/components/layout/FloatingWhatsAppButton.jsx` ist jetzt eine eigene Komponente.

Der Button nutzt weiterhin die vorhandene STRUKTIVA-WhatsApp-Nummer aus den bestehenden Projektdaten. Er wurde optisch ruhiger in das neue globale System integriert und bleibt bei sichtbarem Cookie-Banner versetzt.

### CSS-Erweiterung

`src/styles.css` wurde nur additiv erweitert:

- Skip Link
- globaler Header
- Desktop Navigation
- Mobile Navigation
- globale CTA-Stile
- globaler Footer
- Floating WhatsApp Button
- responsive Regeln
- Reduced-Motion-Regeln

Die Legacy-Seiten-CSS-Struktur wurde nicht neu geschrieben.

### Bekannte verbleibende Risiken

- Die sichtbaren Seitentexte enthalten weiterhin alte Positionierungsbegriffe wie `Unternehmensarchitektur`.
- `src/legacy/legacyContent.jsx` bleibt gross und enthaelt alte Header/Footer-Implementierungen, die aber nicht mehr im globalen Shell genutzt werden.
- `/leistungen`, `/demos` und `/kontakt#lead-form` sind Uebergangsziele fuer neue Navigationsbegriffe.
- SEO-Metadaten wurden bewusst nicht neu formuliert und muessen in einem spaeteren SEO-Schritt angepasst werden.
