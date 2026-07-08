# STRUKTIVA Rebuild Architecture

Stand: 2026-07-08

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

## 21. Update Schritt 5: Neuer Startseiten-Hero

In Schritt 5 wurde ausschliesslich der Hero der Startseite neu aufgebaut. Problemsektion, Loesungswelten, Fallstudie, Digital-Check-Seite, neue Zielrouten, Kontaktformular, Consent und Tracking wurden nicht umgebaut.

### Neue HomePage-Struktur

`src/pages/HomePage.jsx` ist jetzt eine echte modulare Page-Komponente und kein reiner Legacy-Reexport mehr.

Die Startseite rendert:

- `HomeHero` aus `src/components/home/HomeHero.jsx`
- `HomeLegacyContinuation` aus `src/legacy/legacyContent.jsx`

Damit ist der neue Hero ausserhalb des Legacy-Moduls umgesetzt, waehrend die bestehenden Folgeabschnitte kontrolliert weiterverwendet werden.

### Hero-Komponente

`src/components/home/HomeHero.jsx` enthaelt:

- Eyebrow `Digitale Struktur fuer Unternehmen`
- H1 `Mehr Sichtbarkeit. Klare Kundenwege. Digitale Ablaeufe, die zusammenarbeiten.`
- Lead-Text mit korrektem Firmennamen `STRUKTIVA Digitale Unternehmensberatung`
- primaeren CTA `Digital-Check anfragen`
- sekundaeren CTA `Praxisbeispiel ansehen`
- dezente Orientierungszeile `Strategie · Umsetzung · Weiterentwicklung`
- Systemvisualisierung als Bestandteil des Hero

Die CTA-Ziele werden aus `currentNavigation` gelesen:

- `currentNavigation.primaryCta.href` -> `/kontakt#lead-form`
- `currentNavigation.secondaryCta.href` -> `/demos`

Es wurde keine unfertige Route wie `/digital-check`, `/loesungen` oder `/praxisbeispiele` aktiviert.

### Systemvisualisierung

Die rechte Hero-Seite zeigt eine eigenstaendige STRUKTIVA-Systemdarstellung:

- Sichtbarkeit -> Website & Google
- Kundenfuehrung -> Kontakt & Bindung
- Ablaeufe -> Systeme & Automatisierung
- Zentrum: `Ihr Unternehmen`

Die Visualisierung nutzt semantisches HTML, CSS und ein dekoratives Inline-SVG fuer Verbindungslinien. Es wurden keine neuen Visualisierungsbibliotheken, kein Three.js und keine Canvas-Loesung eingefuehrt.

### Alter Hero

Der bisherige Legacy-Hero `HomeHeroSection()` bleibt im Legacy-Modul vorhanden, wird von der aktiven Startseite aber nicht mehr gerendert.

Dafuer wurde `HomeLegacyContinuation()` ergaenzt. Diese Komponente rendert nur die bestehenden Startseitenbereiche nach dem alten Hero:

- Service-Ticker
- Problemsektion
- Flow-Sektion
- Leistungsbereiche
- Zielgruppen
- Preise
- Referenzen/Demos
- Vertrauen
- Kontaktsektion

So gibt es auf `/` keinen doppelten Hero und keine doppelte H1.

### Uebergang zum Legacy-Inhalt

Der neue Hero enthaelt einen subtilen visuellen Brueckenbereich:

- helle Flaechenfuehrung
- feine Trennlinie
- kontrollierter Abstand zum bestehenden Service-Ticker

Es wurde kein neuer Inhaltsblock zwischen Hero und Legacy-Folgeinhalt gebaut.

### Responsive Strategie

Desktop:

- asymmetrisches Zweispaltenlayout
- Text links, Systemvisualisierung rechts
- kompakte Hero-Hoehe ohne `100vh`-Zwang

Tablet:

- kontrollierter Stack, wenn die Zweispalte zu eng wird
- Visualisierung bleibt in voller Breite lesbar

Mobile:

- Reihenfolge: Eyebrow, H1, Lead, primaerer CTA, sekundaerer CTA, Orientierung, Systemvisualisierung
- Systemvisualisierung wird vertikal geordnet: Sichtbarkeit, Ihr Unternehmen, Kundenfuehrung, Ablaeufe
- keine horizontale Scrollbar

### Motion-Strategie

Die Bewegung bleibt zurueckhaltend:

- kurzer Entrance fuer Hero-Text
- leicht zeitversetztes Erscheinen der System-Nodes
- dezent gezeichnete Verbindungslinien
- kleiner Statuspunkt als Verbindungssignal
- Hover-Reaktionen auf CTA und Nodes

`prefers-reduced-motion` wird beruecksichtigt. Bei Reduced Motion bleiben Hero und Visualisierung vollstaendig sichtbar, Animationen werden entfernt.

### Verbleibende Legacy-Abhaengigkeiten

- Die bestehenden Folgeabschnitte kommen weiterhin aus `src/legacy/legacyContent.jsx`.
- Die alte `HomeHeroSection()` existiert noch im Legacy-Modul, ist aber auf der aktiven Startseite isoliert.
- Alte Startseiten-Folgeabschnitte enthalten weiterhin alte Positionierungs- und CTA-Texte. Diese wurden in Schritt 5 bewusst nicht migriert.
- Die grossen globalen CSS-Dateien bleiben weiterhin additiv erweitert und sollten spaeter kontrolliert bereinigt werden.

## 22. Update Schritt 6: Problem-Erkennung auf der Startseite

In Schritt 6 wurde ausschliesslich eine neue Problem- und Erkennungssektion direkt nach dem Hero umgesetzt. Loesungswelten, Fallstudie, Digital-Check-Seite, Preise, neue Zielrouten, Kontaktformular, Consent, Tracking und SEO-Grundlagen wurden nicht umgebaut.

### Neue HomeProblemSection

`src/components/home/HomeProblemSection.jsx` ist eine neue modulare Home-Komponente ausserhalb des Legacy-Moduls.

Die aktive Startseite rendert jetzt:

- `HomeHero`
- `HomeProblemSection`
- `HomeLegacyContinuation`

Damit folgt die Problem-Erkennung direkt auf den neuen Hero.

### Inhaltliche Struktur

Die Sektion enthaelt:

- Eyebrow `Wenn digital vieles da ist, aber wenig zusammenspielt`
- H2 `Viele Unternehmen haben digitale Loesungen. Das Problem: Sie arbeiten nicht als System.`
- Einleitung zur vorhandenen, aber getrennten digitalen Struktur aus Website, Google-Unternehmensprofil, WhatsApp, E-Mail, interner Datenpflege, Terminen und Aufgaben
- drei Problembereiche
- Abschlussbotschaft `Nicht mehr Technik. Mehr Struktur.`
- dezenten Textlink `Wie STRUKTIVA diese Bereiche verbindet`

Der Textlink nutzt die bestehende Uebergangsroute aus der Navigation fuer Loesungen und zeigt auf `/leistungen`. `/loesungen` wurde nicht aktiviert.

### Visuelle Kundenreise

Die Sektion visualisiert einen digitalen Kundenweg mit Bruchstellen:

- Gefunden werden
- Website
- Kontakt
- Anfrage
- Bearbeitung
- Kunde
- Wiederkehr oder Bewertung

Die Stationen werden als semantische Liste ausgegeben. Visuell entstehen Brueche durch:

- versetzte Stationen
- unterbrochene Verbindungslinien
- dezente goldene Statuspunkte
- fragmentierte Zwischenlinien
- ruhige Tiefenwirkung ohne Alarmfarbe

Die Aussage bleibt bewusst: Viele Einzelteile sind vorhanden, aber nicht sinnvoll verbunden.

### Drei Problembereiche

Die drei Problembereiche sind nicht als Standard-Card-Grid umgesetzt, sondern als versetzte erklaerende Ebenen neben beziehungsweise unter der Kundenreise:

1. Interessenten finden den Betrieb - aber der naechste Schritt ist unklar
2. Kundenkontakt verteilt sich auf zu viele einzelne Wege
3. Wiederkehrende Aufgaben bleiben unnoetig manuell

Es wurden keine erfundenen Zahlen, Erfolgsversprechen oder Marktstatistiken verwendet.

### Legacy-Integration

`HomeLegacyContinuation()` akzeptiert nun `skipProblemSection`.

Auf der aktiven Startseite wird der alte Legacy-Problemblock `HomeProblemSection()` uebersprungen, damit direkt nach dem neuen Problemabschnitt keine inhaltlich redundante Problemsektion erscheint.

Der naechste verbleibende Legacy-Bereich nach der neuen Problemsektion ist der bestehende Service-Ticker `HomeServiceTickerSection()`. Danach folgt direkt `HomeFlowSection()` statt der alten Legacy-Problemsektion.

Es wurden keine neuen Inhalte in `src/legacy/legacyContent.jsx` gebaut.

### Mobile-Strategie

Mobile wird eigenstaendig vertikal aufgebaut:

- Eyebrow
- H2
- Einleitung
- vertikale Kundenreise
- Problembereich 1
- Problembereich 2
- Problembereich 3
- Abschlussbotschaft
- dezenter Textlink

Die Journey wird unter 900px von der horizontalen Desktop-Komposition in eine vertikale Liste umgebaut. Verbindungslinien wechseln von horizontalen Bruchlinien zu vertikalen Zwischenlinien. Es entsteht keine horizontale Scrollbar.

### Motion-Strategie

Die Motion bleibt zurueckhaltend:

- Journey-Stationen erscheinen zeitversetzt
- Problembereiche erscheinen leicht versetzt
- ein kleiner Statuspunkt bewegt sich entlang der fragmentierten Desktop-Journey
- Abschlussbotschaft erscheint ruhig beim Eintritt in den Viewport
- Textlink hat nur eine dezente Hover-Reaktion

Bei `prefers-reduced-motion: reduce` sind alle Inhalte sofort sichtbar, Animationen und dauerhafte Bewegung werden deaktiviert.

### Verbleibende Abhaengigkeiten und Risiken

- Die restlichen Startseiten-Folgeabschnitte bleiben Legacy-Content und enthalten weiterhin alte CTA- und Positionierungslogik.
- Der Service-Ticker folgt weiterhin direkt nach der neuen Problemsektion und ist noch nicht Teil des neuen Rebuild-Systems.
- Die neue Problemsektion erklaert Reibung, baut aber bewusst noch keine vollstaendige Loesungssektion.
- Die CSS-Erweiterung bleibt additiv in `src/styles.css`; spaeter sollte eine kontrollierte Home-CSS-Struktur entstehen.

## 23. Update Schritt 7: Loesungswelten auf der Startseite

In Schritt 7 wurde ausschliesslich eine neue modulare Loesungssektion direkt nach der neuen Problemsektion umgesetzt. Fallstudie, Digital-Check-Seite, neue Zielrouten, Preise, Kontaktformular, Consent, Tracking und SEO-Grundlagen wurden nicht umgebaut.

### Neue HomeSolutionsSection

`src/components/home/HomeSolutionsSection.jsx` ist eine neue modulare Home-Komponente ausserhalb des Legacy-Moduls.

Die aktive Startseite rendert jetzt:

- `HomeHero`
- `HomeProblemSection`
- `HomeSolutionsSection`
- `HomeLegacyContinuation`

Damit folgt die Loesungslogik unmittelbar auf die Problem-Erkennung.

### Inhaltliche Struktur

Die Sektion enthaelt:

- Eyebrow `Drei Bereiche. Eine digitale Struktur.`
- H2 `STRUKTIVA verbindet Sichtbarkeit, Kundenfuehrung und Ablaeufe zu einem System.`
- Einleitung zur Verbindung von Auffindbarkeit, Kundenkontakt und internen Ablaeufen
- drei Loesungswelten
- zurueckhaltende Verbindungsdarstellung
- Abschlussbotschaft `Die Technik ist nicht das Ziel. Sie ist das Werkzeug.`
- dezenten Textlink `Loesungen im Ueberblick ansehen`

Der Textlink nutzt die bestehende Uebergangsroute aus der Navigation fuer Loesungen und zeigt auf `/leistungen`. `/loesungen` wurde nicht aktiviert.

### Drei Loesungswelten

Die drei Bereiche sind:

1. Sichtbarkeit und Kundengewinnung
2. Kundenfuehrung und Kundenbindung
3. Digitale Ablaeufe und Automatisierung

Jeder Bereich enthaelt eine kurze Kernbotschaft, eine erklaerende Beschreibung und eine Liste dezenter Bausteine. Es wurden keine erfundenen Erfolgsversprechen, Prozentwerte, Rankings oder Marktfuehrer-Aussagen verwendet.

### Visuelle Differenzierung

Die drei Bereiche sind bewusst nicht als dreispaltiges Standard-Card-Grid umgesetzt.

Sichtbarkeit und Kundengewinnung nutzt eine helle, offene Such- und Kontaktreise mit abstrakter Suchzeile, Browserrahmen, Bewertungsimpuls und Kontaktpfad.

Kundenfuehrung und Kundenbindung nutzt eine waermere Darstellung mit Smartphone, Kontaktverlauf, Kundenkarte, Statusentwicklung und Wiederkehr-Impuls.

Digitale Ablaeufe und Automatisierung nutzt eine praezisere technische Darstellung mit dunklerem Workflow-Panel, Prozess-Nodes, Statuslinien und Datenchips.

Gold bleibt in allen drei Bereichen der verbindende Akzent. Es wurden keine geschuetzten Logos, keine Fake-Suchergebnisse, keine erfundenen Kundennamen und keine Roboter-/KI-Gehirn-Motive verwendet.

### Verbindungsdarstellung

Nach den drei Loesungswelten zeigt eine kompakte Darstellung:

- Sichtbarkeit
- Kundenfuehrung
- Ablaeufe

Diese Bereiche fuehren sichtbar zu `einer klaren digitalen Struktur`. Die Darstellung bleibt Teil derselben Sektion und wurde nicht als eigene grosse Formel- oder Statistiksektion inszeniert.

### CTA-Ziel

Der einzige Link am Ende der Sektion lautet `Loesungen im Ueberblick ansehen` und fuehrt auf `/leistungen`.

Der Haupt-CTA der Website bleibt weiterhin `Digital-Check anfragen` ueber die zentrale Navigation. Es wurde kein weiterer grosser Primaer-CTA direkt nach der Loesungssektion gebaut.

### Mobile-Strategie

Mobile wird eigenstaendig vertikal aufgebaut:

- Eyebrow
- H2
- Einleitung
- Loesungswelt 1 Text
- Visual 1
- Loesungswelt 2 Text
- Visual 2
- Loesungswelt 3 Text
- Visual 3
- Verbindungsdarstellung
- Abschlussbotschaft
- Textlink

Die Desktop-Diagramme werden unter 900px in vertikale, lesbare Visualisierungen umgebaut. Browser-, Smartphone- und Workflow-Darstellungen bleiben innerhalb des Viewports und erzeugen keine horizontale Scrollbar.

### Motion-Strategie

Die Motion bleibt erklaerend und zurueckhaltend:

- Abschnitts- und Welt-Reveals beim Eintritt in den Viewport
- dezente Bewegung entlang der Sichtbarkeitsreise
- kleiner Statusimpuls in der Kundenfuehrung
- kontrollierter Linienaufbau im Workflow

Es gibt kein starkes Pulsieren, keine Bounce-Effekte, keine aggressive Parallax-Bewegung und keine fliegenden Karten.

### Reduced Motion

Bei `prefers-reduced-motion: reduce` werden Animationen und Transitionen innerhalb der neuen Loesungssektion deaktiviert. Alle Inhalte bleiben sofort sichtbar und keine Information haengt von Bewegung ab.

### Legacy-Integration und Service-Ticker-Entscheidung

`HomeLegacyContinuation()` akzeptiert nun zusaetzliche Skip-Flags:

- `skipServiceTicker`
- `skipProblemSection`
- `skipFlowSection`
- `skipServicesSection`

Auf der aktiven Startseite werden nach der neuen Loesungssektion bewusst folgende Legacy-Leistungsbereiche uebersprungen:

- `HomeServiceTickerSection()`
- die alte Legacy-`HomeProblemSection()`
- `HomeFlowSection()`
- `HomeServicesSection()`

Der Service-Ticker wurde fuer die aktive Startseite uebersprungen, weil nach Problemsektion und neuer Loesungssektion sonst mehrere Leistungslisten beziehungsweise Leistungslogiken direkt nacheinander erscheinen wuerden.

Der naechste verbleibende Legacy-Bereich nach der neuen Loesungssektion ist `HomeAudienceSection()`. Danach folgen die bestehenden Legacy-Bereiche fuer Preise, Referenzen/Demos, Vertrauen und Kontakt weiterhin unveraendert.

### Verbleibende Abhaengigkeiten und Risiken

- Die restlichen Startseiten-Folgeabschnitte bleiben Legacy-Content und enthalten weiterhin alte Preis-, Demo-, Vertrauens- und Kontaktlogik.
- Die neue Loesungssektion erklaert die drei Bereiche, baut aber bewusst noch keine vollstaendige `/loesungen`-Unterseite.
- Die konkrete Salon-Karola-Fallstudie und eine Digital-Check-Sektion wurden noch nicht gebaut.
- Die CSS-Erweiterung bleibt additiv in `src/styles.css`; spaeter sollte eine kontrollierte Home-CSS-Struktur entstehen.

## 24. Update Schritt 8: Salon-Karola-Fallstudie auf der Startseite

In Schritt 8 wurde ausschliesslich eine neue modulare Fallstudiensektion fuer Salon Karola direkt nach der Loesungssektion umgesetzt. Neue Praxisbeispiel-Unterseiten, Digital-Check-Seite, Preise, Kontaktformular, Consent, Tracking, Sitemap, Robots, Canonicals und globale SEO-Texte wurden nicht umgebaut.

### Neue HomeCaseStudySection

`src/components/home/HomeCaseStudySection.jsx` ist eine neue modulare Home-Komponente ausserhalb des Legacy-Moduls.

Die aktive Startseite rendert jetzt:

- `HomeHero`
- `HomeProblemSection`
- `HomeSolutionsSection`
- `HomeCaseStudySection`
- `HomeLegacyContinuation`

Damit folgt auf die abstrakte Loesungslogik direkt ein konkreter Praxisbeweis.

### Inhaltliche Struktur

Die Sektion enthaelt:

- Eyebrow `Aus der Praxis`
- H2 `Wie aus einzelnen digitalen Bausteinen ein zusammenhaengendes System entsteht.`
- Einleitung zum Projekt Salon Karola
- respektvolle Ausgangslage
- Systemkarte mit Salon Karola im Mittelpunkt
- sechs digitale Systembausteine
- STRUKTIVA-Prozessfolge
- Ergebnisbeschreibung ohne Kennzahlen
- Realitaetshinweis zur schrittweisen Weiterentwicklung
- CTA `Praxisbeispiel ansehen`
- externen Textlink `Website von Salon Karola ansehen`

### Verwendete echte Informationen und Assets

Verwendete echte Projektinformationen:

- aktuelle Domain `https://salonkarola.de/`
- bestehende Projektbezeichnung `Salon Karola`
- bestehende Referenzlogik im Projekt: Website-Relaunch, mobile Optimierung, Kundenfuehrung, Google-Bewertungsstruktur, WhatsApp-Kontaktweg und lokale Sichtbarkeit
- bestehende Dokumentation, dass die historische SimDif-Seite nur als Altvergleich existiert

Es wurden keine echten Bild- oder Screenshot-Assets verwendet, weil im Projektbestand keine lokalen Salon-Karola-Screenshots oder belegbaren Projektbilder vorhanden sind. Die vorhandenen Friseur-/Bewertungsbilder im Legacy-Code sind externe Demo-/Unsplash-Bilder und wurden fuer diese Fallstudie bewusst nicht genutzt.

Stattdessen verwendet die Sektion eine abstrahierte, semantisch durch Text begleitete Systemkarte. Dadurch werden keine Fake-Screenshots, keine erfundenen App-Oberflaechen und keine falschen visuellen Beweise erzeugt.

### Sechs Systembausteine

Die Fallstudie zeigt:

1. Website und digitale Praesenz
2. Sichtbarkeit und Bewertungen
3. Kundenkontakt
4. Kundenverwaltung
5. Digitale Kundenkarte und Bonusstruktur
6. Interne digitale Ablaeufe

Die Darstellung bleibt funktional und vorsichtig formuliert. Es werden keine Umsatzzahlen, Neukundenzahlen, Conversion-Werte, Rankings, Zeitersparnisse oder Kundenzitate behauptet.

### Systemkartenlogik

Die Systemkarte stellt `Salon Karola` in den Mittelpunkt und verbindet die sechs Bausteine mit dezenten Linien beziehungsweise auf Mobile mit einer vertikalen Reihenfolge.

Die Aussage lautet: Nicht sechs einzelne Produkte, sondern ein wachsendes digitales System.

Die visuelle Verbindung ist dekorativ markiert, waehrend die gleichen Informationen vollstaendig als Text und Listenelemente vorhanden sind.

### STRUKTIVA-Prozessfolge

Die Vorgehensweise wird als kompakte Folge dargestellt:

- Verstehen
- Strukturieren
- Umsetzen
- Weiterentwickeln

Der Text betont, dass die digitale Struktur nicht als starres Komplettpaket entwickelt wurde, sondern Schritt fuer Schritt.

### Ergebnisdarstellung

Die Ergebnisbeschreibung lautet sinngemaess:

Website, Sichtbarkeit, Kundenkontakt, Kundenbindung und interne digitale Ablaeufe stehen heute nicht mehr nur nebeneinander, sondern bilden eine deutlich zusammenhaengendere Struktur. Das System kann weiterentwickelt werden, wenn neue Anforderungen entstehen.

Es gibt keine absoluten Erfolgsaussagen und keine erfundenen Kennzahlen.

### CTA-Ziele und externe Links

Der CTA `Praxisbeispiel ansehen` zeigt auf `/demos`, weil `/praxisbeispiele` und `/praxisbeispiele/salon-karola` noch nicht fertig gebaut und aktiviert sind.

Der externe Link `Website von Salon Karola ansehen` zeigt auf `https://salonkarola.de/` und nutzt `target="_blank"` mit `rel="noopener noreferrer"`.

Die alte SimDif-Seite wird in der neuen Startseiten-Fallstudie nicht als primaerer Link verwendet.

### Mobile-Strategie

Mobile wird eigenstaendig vertikal aufgebaut:

- Eyebrow
- H2
- Einleitung
- Ausgangslage
- Systemkarte mit Salon Karola im Zentrum und vertikalen Bausteinen
- sechs Bausteine
- Prozessfolge
- Ergebnis
- CTA und externer Link

Die Systemkarte wird nicht radial zusammengedrueckt. Es entsteht keine horizontale Scrollbar.

### Motion und Reduced Motion

Motion bleibt zurueckhaltend:

- Abschnitts-Reveals
- kontrolliertes Erscheinen der Bausteine
- dezenter Aufbau der Verbindungslinien in der Systemkarte
- ruhiges Erscheinen von Prozess und Ergebnis

Bei `prefers-reduced-motion: reduce` werden Animationen und Transitionen innerhalb der Fallstudiensektion deaktiviert. Alle Inhalte bleiben sofort sichtbar und keine Information haengt von Bewegung ab.

### Legacy-Integration

`HomeLegacyContinuation()` akzeptiert nun zusaetzlich `skipReferencesDemosSection`.

Auf der aktiven Startseite wird der alte Legacy-Block `HomeReferencesDemosTeaserSection()` uebersprungen, weil nach der neuen Salon-Karola-Fallstudie eine direkte Wiederholung von Referenz-/Demo-Teasern inhaltlich redundant waere.

Nicht veraendert wurden:

- `/demos`
- `/referenzen`
- die bestehenden Demo-Routen
- die bestehenden Legacy-Referenzkomponenten ausserhalb der aktiven Startseitenfolge

Der naechste verbleibende Legacy-Bereich nach der neuen Fallstudie ist `HomeAudienceSection()`, danach folgen Preise, Vertrauen und Kontakt weiterhin unveraendert.

### Verbleibende Abhaengigkeiten und Risiken

- Es gibt weiterhin keine echte `/praxisbeispiele/salon-karola`-Unterseite.
- Die Startseite nutzt fuer die Fallstudie keine echten Screenshots, weil keine geeigneten lokalen Projektbilder vorhanden sind.
- Die restlichen Startseiten-Folgeabschnitte bleiben Legacy-Content.
- Die CSS-Erweiterung bleibt additiv in `src/styles.css`; spaeter sollte eine kontrollierte Home-CSS-Struktur entstehen.

## 25. Update Schritt 9: Trust- und Arbeitsweise-Sektion auf der Startseite

In Schritt 9 wurde ausschliesslich eine neue modulare Trust- und Arbeitsweise-Sektion direkt nach der Salon-Karola-Fallstudie umgesetzt. Es wurden keine neue Ueber-uns-Seite, keine Digital-Check-Seite, keine Preis-/Paketlogik, keine Kontaktsektion, keine SEO-Migration und keine neuen Zielrouten gebaut.

### Neue HomeTrustSection

`src/components/home/HomeTrustSection.jsx` ist eine neue modulare Home-Komponente ausserhalb des Legacy-Moduls.

Die aktive Startseite rendert jetzt:

- `HomeHero`
- `HomeProblemSection`
- `HomeSolutionsSection`
- `HomeCaseStudySection`
- `HomeTrustSection`
- `HomeLegacyContinuation`

Damit folgt auf den konkreten Praxisbeweis eine ruhige Vertrauens- und Arbeitsweise-Erklaerung.

### Inhaltliche Struktur

Die Sektion enthaelt:

- Eyebrow `Zusammenarbeit mit Klarheit`
- H2 `Digitale Beratung sollte verstaendlich beginnen - nicht mit einem Produktkatalog.`
- Einstieg mit der Aussage, dass STRUKTIVA nicht mit Software-, Website- oder Automatisierungsverkauf beginnt
- Kernstatement `Erst verstehen. Dann strukturieren. Danach gezielt umsetzen.`
- Erklaerung, dass nicht jedes Unternehmen dieselben Systeme braucht
- persoenliche Einordnung mit Sven Matzke und Jessica Wacker
- vierstufige Arbeitsweise
- Abschlussblock mit der Aussage, dass Kunden die technische Loesung nicht vorab kennen muessen
- Textlink `Mehr ueber STRUKTIVA erfahren` auf `/ueber-uns`

### Personen und Portrait-Asset

Die Sektion nutzt das vorhandene lokale Asset:

- `/images/inhaber-sven-jessica.webp`

Die Personen werden nur mit den belegten Namen genannt:

- Sven Matzke
- Jessica Wacker

Es wurden keine neuen Rollen, Titel, Zertifikate, Teamgroessen, Partnerlogos, Kundenzahlen oder Testimonials erfunden. Die Formulierung bleibt neutral und bestaetigt lediglich, dass hinter STRUKTIVA Sven Matzke und Jessica Wacker stehen.

### Arbeitsweise

Die Vorgehensweise wird als ruhige Prozesslinie dargestellt, nicht als klassisches Vier-Karten-Raster:

1. Verstehen
2. Strukturieren
3. Umsetzen
4. Weiterentwickeln

Desktop nutzt eine horizontale, leicht gestaffelte Linie. Mobile wird daraus eine vertikale Prozessfuehrung. Die Inhalte bleiben semantisch als geordnete Liste vorhanden.

### CTA und Route

Der einzige neue Link ist:

- `Mehr ueber STRUKTIVA erfahren` -> `/ueber-uns`

Die Route ist bereits aktiv. Es wurde keine unfertige Route wie `/loesungen`, `/praxisbeispiele`, `/praxisbeispiele/salon-karola` oder `/digital-check` verlinkt.

### Mobile-Strategie

Mobile wird eigenstaendig vertikal aufgebaut:

- Eyebrow und H2
- Einstiegstext
- Arbeitsweise-Statement
- Personenbild und persoenliche Einordnung
- vertikale Prozesslinie
- Abschluss und Ueber-uns-Link

Die Sektion erzeugt keine horizontale Scrollbar und der Link bricht auf kleinen Viewports sauber um.

### Motion und Reduced Motion

Motion bleibt zurueckhaltend:

- Abschnitts-Reveals
- sanftes Erscheinen von Statement, Personenbereich, Prozess und Abschluss

Bei `prefers-reduced-motion: reduce` werden Animationen und Transitionen innerhalb der Trust-Sektion deaktiviert. Alle Inhalte bleiben sofort sichtbar und keine Information haengt von Bewegung ab.

### Legacy-Integration

`HomeLegacyContinuation()` akzeptiert nun zusaetzlich `skipTrustSection`.

Auf der aktiven Startseite wird der alte Legacy-Block `HomeTrustSection()` uebersprungen, weil nach der neuen Trust- und Arbeitsweise-Sektion eine Wiederholung inhaltlich redundant waere.

Nicht veraendert wurden:

- `/ueber-uns`
- Kontaktformular und Lead-Logik
- Consent-Logik
- Tracking-IDs
- Sitemap, Robots und Canonicals
- globale SEO-Texte
- die bestehenden Legacy-Trust-Komponenten ausserhalb der aktiven Startseitenfolge

Der naechste verbleibende Legacy-Bereich nach der neuen Trust-Sektion ist `HomeAudienceSection()`, danach folgen Preise und Kontakt weiterhin unveraendert.

### Verbleibende Abhaengigkeiten und Risiken

- Die Ueber-uns-Seite selbst bleibt Legacy-Content und wurde in diesem Schritt nicht neu aufgebaut.
- Die restlichen Startseiten-Folgeabschnitte bleiben Legacy-Content.
- Die CSS-Erweiterung bleibt additiv in `src/styles.css`; spaeter sollte eine kontrollierte Home-CSS-Struktur entstehen.

## 26. Update Schritt 10: Digital-Check-Conversion-Sektion auf der Startseite

In Schritt 10 wurde ausschliesslich eine neue modulare Digital-Check-Conversion-Sektion direkt nach der Trust- und Arbeitsweise-Sektion umgesetzt. Es wurde keine neue Route `/digital-check` aktiviert, keine neue Kontaktseite gebaut, kein neues Formular erstellt, keine Formularlogik dupliziert, keine Preis-/Paketsektion gebaut und keine SEO-Komplettmigration vorgenommen.

### Neue HomeDigitalCheckSection

`src/components/home/HomeDigitalCheckSection.jsx` ist eine neue modulare Home-Komponente ausserhalb des Legacy-Moduls.

Die aktive Startseite rendert jetzt:

- `HomeHero`
- `HomeProblemSection`
- `HomeSolutionsSection`
- `HomeCaseStudySection`
- `HomeTrustSection`
- `HomeDigitalCheckSection`
- `HomeLegacyContinuation`

Damit folgt nach Vertrauen und Arbeitsweise ein klarer Conversion-Bereich, der zum bestehenden Kontaktformular fuehrt.

### Inhaltliche Struktur

Die Sektion enthaelt:

- Eyebrow `Der naechste sinnvolle Schritt`
- H2 `Wo verliert Ihr Unternehmen heute Zeit, Klarheit oder digitale Wirkung?`
- Erklaerung, dass beim STRUKTIVA Digital-Check nicht nur eine einzelne Website oder ein einzelnes Tool betrachtet wird
- Hinweis, dass kein technisches Vorwissen notwendig ist
- visuellen Analysepfad mit sechs Pruefbereichen
- Erwartungsbereich fuer den ersten Austausch
- Fuer-wen-Bereich mit typischen Situationen
- Gegenpol `Kein Verkaufsgespraech mit vorgefertigtem Ergebnis.`
- CTA-Flaeche mit der Botschaft `Sie muessen nicht mit der Loesung anfangen. Beginnen Sie mit dem Problem.`

### Sechs Pruefbereiche

Der Digital-Check zeigt folgende Pruefbereiche:

1. Sichtbarkeit
2. Website und Aussendarstellung
3. Kontaktwege
4. Kundenfuehrung
5. Interne Ablaeufe
6. Entwicklungspotenzial

Die Darstellung nutzt keine sechs identischen Karten, keine grossen Icons, kein Dashboard-Grid, keine Checklisten-Tabelle, keinen Fake-Score, keine Ampelbewertung und keine Prozentwerte.

### Analysepfad

Die visuelle Analyseflaeche stellt `Ihr Unternehmen` in den Mittelpunkt. Die sechs Pruefbereiche werden entlang eines ruhigen Analysepfads darum angeordnet. Auf Tablet und Mobile wird daraus eine vertikale, semantisch geordnete Liste.

Die Aussage lautet: Der Digital-Check betrachtet Zusammenhaenge, nicht isolierte Einzelmassnahmen.

### Erwartungsbereich

Der Bereich `Was Sie vom ersten Austausch erwarten koennen` nennt bewusst zurueckhaltend:

- verstaendliche Einordnung der aktuellen Situation
- erste erkennbare Prioritaeten
- Hinweise auf unnoetige Brueche oder Doppelarbeit
- Einschaetzung, welche naechsten Schritte sinnvoll sein koennten
- klare Aussage, wenn eine umfangreiche Loesung aktuell nicht notwendig ist

Es werden kein vollstaendiges schriftliches Audit, kein PDF-Bericht, kein fertiges Konzept, keine kostenlose Strategie, kein detaillierter Massnahmenplan und keine garantierten Ergebnisse versprochen.

### Fuer-wen-Bereich

Der Bereich `Sinnvoll, wenn Sie zum Beispiel merken:` nennt typische Situationen:

- vorhandene Website, aber unklarer digitaler Kundenweg
- Google, Website und Kontaktwege als getrennte Baustellen
- verteilte Kundenanfragen
- mehrfaches Uebertragen oder Suchen von Informationen
- wiederkehrende manuelle Aufgaben
- Unsicherheit, womit begonnen werden sollte

Die Sprache bleibt ruhig und vermeidet Angstkommunikation oder kuenstliche Dringlichkeit.

### Vertrauensgegenpol

Der Gegenpol lautet:

`Kein Verkaufsgespraech mit vorgefertigtem Ergebnis.`

Die Aussagen:

- Der Digital-Check soll zuerst Klarheit schaffen.
- Nicht jedes Unternehmen braucht eine neue Website, eine App oder eine Automatisierung.
- Manchmal liegt der wichtigste naechste Schritt an einer ganz anderen Stelle.
- STRUKTIVA beginnt mit dem Zusammenhang, nicht mit einem Produkt.

### CTA-Ziel und Hash-Navigation

Der primaere CTA lautet:

- `Digital-Check anfragen`

Ziel:

- `/kontakt#lead-form`

Der sekundaere Textlink lautet:

- `Direkt Kontakt aufnehmen`

Ziel:

- `/kontakt`

Die Route `/digital-check` wurde nicht aktiviert und nicht verlinkt.

Fuer den bestehenden Formularanker wurde in `src/styles.css` ein minimaler `scroll-margin-top` fuer `#lead-form` ergaenzt. Hintergrund: Der Baseline-Check zeigte, dass der direkte Aufruf `/kontakt#lead-form` durch den Sticky Header zu hoch landen konnte. Die Korrektur betrifft nur das Scrollziel, nicht die Formularlogik.

### Tracking-Verhalten

Die neue CTA-Flaeche nutzt normale Linknavigation auf `/kontakt#lead-form`.

Bestehende Tracking-Dateien, Event-Namen, Consent-Bedingungen, Google Analytics, Google Ads, Pinterest Tag, Tracking-IDs und Cookie Consent wurden nicht veraendert.

Der bestehende Hook `useMarketingLeadTracking()` wurde nicht angepasst. Damit erfindet die neue Sektion keine neuen Events. Lead-Tracking bleibt wie zuvor ueber bestehende direkte Kontaktwege beziehungsweise Formular-Submit geregelt und ist weiterhin durch Consent geschuetzt.

### Legacy-Integration

`HomeLegacyContinuation()` akzeptiert nun zusaetzlich:

- `skipPricingSection`
- `skipContactSection`

Auf der aktiven Startseite werden nach der neuen Digital-Check-Sektion folgende alte Conversion-Bereiche uebersprungen:

- `HomePricingSection()` mit alten Paket-/Preis-CTAs
- `HomeContactSection()` mit alter Abschluss-Kontaktsektion

Grund: Nach dem neuen zentralen Digital-Check-Bereich waeren die alten Preis-/Paket-CTAs und die alte Kontakt-Abschlusssektion in der aktiven Startseitenfolge redundant beziehungsweise strategisch ablenkend.

Nicht geloescht und nicht global veraendert wurden:

- `/kontakt`
- `/pakete`
- `/leistungen`
- andere Seiten
- bestehende Legacy-Komponenten ausserhalb der aktiven Startseitenfolge

Der verbleibende Legacy-Bereich nach der neuen Digital-Check-Sektion ist `HomeAudienceSection()`. Danach folgen keine alten Startseiten-Preis- oder Kontakt-Conversionbloecke mehr.

### Mobile-Strategie

Mobile wird eigenstaendig vertikal aufgebaut:

1. Eyebrow
2. H2
3. Einleitung
4. Analysepfad vertikal
5. sechs Pruefbereiche
6. Erwartungsbereich
7. Fuer-wen-Bereich
8. Gegenpol
9. CTA-Flaeche
10. sekundaerer Kontaktlink

Die Analysevisualisierung wird unter 1024px vertikal, damit keine horizontale Grafik erzwungen wird.

### Motion und Reduced Motion

Motion bleibt zurueckhaltend:

- ruhiger Abschnitts-Reveal
- schrittweises Erscheinen der Pruefbereiche
- ruhiges Erscheinen von Erwartungsbereich, Fuer-wen-Bereich, Gegenpol und CTA

Bei `prefers-reduced-motion: reduce` werden Animationen und Transitionen innerhalb der Digital-Check-Sektion deaktiviert. Alle Inhalte bleiben sofort sichtbar und keine Information haengt von Bewegung ab.

### Verbleibende Abhaengigkeiten und Risiken

- `/digital-check` bleibt weiterhin eine geplante Route und wurde noch nicht gebaut.
- Das bestehende Kontaktformular liegt weiterhin im Legacy-Modul `ProjectRequestPage`.
- Die neue Sektion nutzt den bestehenden Formularweg, ohne das Formular als eigenes Modul zu extrahieren.
- Eine direkte Deployment-Verifikation wurde in diesem Schritt lokal nicht ueber Vercel CLI durchgefuehrt.

## 27. Homepage Final Integration Review

Stand nach Schritt 11: Die neue Startseite wurde als zusammenhaengende Nutzerreise geprueft und kontrolliert fertig integriert. Es wurden keine neuen Seiten, Formulare, Preisstrukturen, Produkte, Dependencies, SEO-Migrationen oder Tracking-Aenderungen eingefuehrt.

### Finale aktive Startseitenreihenfolge

Die aktive Startseite rendert:

1. `HomeHero`
2. `HomeProblemSection`
3. `HomeSolutionsSection`
4. `HomeCaseStudySection`
5. `HomeTrustSection`
6. `HomeDigitalCheckSection`
7. globaler `Footer`

Nach `HomeDigitalCheckSection` folgt kein langer Legacy-Verkaufspfad mehr. Der Digital-Check ist der kontrollierte Abschluss der Startseiten-Journey.

### Legacy-Bloecke

Auf der aktiven Startseite bleibt nach Schritt 11 kein Legacy-Startseitenblock mehr sichtbar.

Auf der Startseite kontrolliert uebersprungen werden:

- `HomeServiceTickerSection()` - alte Leistungsband-Wiederholung.
- Legacy-`HomeProblemSection()` - durch neue Problemsektion ersetzt.
- `HomeFlowSection()` - durch neue Loesungs-, Trust- und Digital-Check-Logik ersetzt.
- `HomeServicesSection()` - durch neue drei Loesungswelten ersetzt.
- `HomeAudienceSection()` - nach dem Digital-Check redundant und fuer den Seitenabschluss zu verlaengernd.
- `HomePricingSection()` - alte Paket-/Preislogik passt nicht in den finalen Conversion-Abschluss.
- `HomeReferencesDemosTeaserSection()` - durch neue Salon-Karola-Fallstudie ersetzt.
- Legacy-`HomeTrustSection()` - durch neue Trust- und Arbeitsweise-Sektion ersetzt.
- `HomeContactSection()` - durch den Digital-Check-CTA auf `/kontakt#lead-form` ersetzt.

Die Komponenten wurden nicht global geloescht, damit bestehende Legacy-Zusammenhaenge und spaetere Migrationsentscheidungen nicht beschaedigt werden.

### CTA-Hierarchie

Primaerer Conversion-Weg:

- `Digital-Check anfragen` -> `/kontakt#lead-form`

Sekundaere Wege:

- `Praxisbeispiel ansehen` -> `/demos`
- `Loesungen im Ueberblick ansehen` -> `/leistungen`
- `Mehr ueber STRUKTIVA erfahren` -> `/ueber-uns`
- `Direkt Kontakt aufnehmen` -> `/kontakt`
- `Website von Salon Karola ansehen` -> `https://salonkarola.de/`

Die geplanten Zielrouten `/loesungen`, `/praxisbeispiele`, `/praxisbeispiele/salon-karola` und `/digital-check` bleiben nicht aktiv verlinkt.

### Mobile Dramaturgie

Mobile wurde als komplette Nutzerreise geprueft: Hero, Problem, Loesungswelten, Praxisbeweis, Trust und Digital-Check folgen ohne horizontalen Overflow. Die Analyse- und Prozessdarstellungen werden vertikal, der Digital-Check bleibt der letzte Conversion-Bereich vor dem Footer. Durch das Ueberspringen von `HomeAudienceSection()` wird die mobile Seitenlaenge nach dem CTA reduziert.

### Verbleibende technische Schulden

- `src/legacy/legacyContent.jsx` bleibt gross und enthaelt viele Altkomponenten.
- Das Kontaktformular liegt weiterhin im Legacy-Modul.
- CSS bleibt global in `src/styles.css` und sollte spaeter kontrolliert strukturiert werden.
- Es gibt weiterhin keine Lint-, Typecheck- oder Unit-Test-Scripts.
- Vercel CLI ist lokal nicht vorhanden; Deployment wurde nicht direkt ueber Vercel verifiziert.

### Verbleibende inhaltliche Schulden nach Schritt 11

- `/loesungen` ist noch nicht als echte Zielseite gebaut.
- `/praxisbeispiele` und eine Detailseite fuer Salon Karola sind noch nicht gebaut.
- `/digital-check` ist noch keine eigene Zielseite.
- `/ueber-uns`, `/leistungen`, `/demos`, `/pakete` und die rechtlichen Inhalte bleiben in spaeteren Schritten zu pruefen beziehungsweise neu auszurichten.
- Globale SEO-, Sitemap-, Canonical- und Schema.org-Migrationen stehen noch aus.

### Empfohlener naechster Rebuild-Schritt nach Schritt 11

Als naechstes sollte `/loesungen` als echte Zielseite aufgebaut werden. Diese Route kann die drei bereits auf der Startseite etablierten Loesungswelten vertiefen, ohne den stabilen Lead-Weg oder das bestehende Kontaktformular zu veraendern.

## 28. Update Schritt 12: Neue Loesungen-Seite

Stand nach Schritt 12: `/loesungen` ist als echte Zielseite aktiv. Die Seite erklaert digitale Loesungen aus Unternehmenssicht und ersetzt auf dieser Route bewusst keine Preis-, Paket- oder Produktkataloglogik.

### Neue Route und Module

Neue Dateien:

- `src/pages/SolutionsPage.jsx`
- `src/components/solutions/SolutionsHero.jsx`
- `src/components/solutions/SolutionsIntro.jsx`
- `src/components/solutions/SolutionsWorlds.jsx`
- `src/components/solutions/SolutionsFinalSections.jsx`

Geaenderte Routing-Dateien:

- `src/routing/pageRegistry.jsx`
- `src/routing/routeConfig.js`

`/loesungen` ist in `pageRegistry` registriert und besitzt eigene aktive Meta-Daten:

- Title: `Digitale Lösungen für Unternehmen | STRUKTIVA`
- Description: STRUKTIVA verbindet digitale Sichtbarkeit, Kundenführung und interne Abläufe zu Lösungen, die zum Unternehmen und seinem Alltag passen.
- Canonical: `/loesungen`
- Robots: index, follow

### Inhaltliche Struktur

Die Seite besteht aus:

1. Hero mit dem Leitgedanken, dass digitale Loesungen nicht bei Technik beginnen, sondern bei dem, was besser funktionieren soll.
2. Einordnung, dass die drei Bereiche keine starren Pakete sind.
3. Loesungswelt `Sichtbarkeit und Kundengewinnung`.
4. Loesungswelt `Kundenführung und Kundenbindung`.
5. Loesungswelt `Digitale Abläufe und Automatisierung`.
6. Zusammenhangssektion von Sichtbarkeit ueber Kontakt und Kunde bis zum internen Ablauf.
7. Arbeitsweise mit Analyse, Strukturierung, Umsetzung und Weiterentwicklung.
8. Abgrenzung gegen wahllose Digitalisierung.
9. Abschluss-CTA zum bestehenden Kontaktweg.

### Navigationsumstellung

Die zentrale Navigation verweist jetzt fuer `Loesungen` auf `/loesungen`.

Betroffene Stellen:

- Desktop-Header
- Mobile Navigation
- Footer/Primaernavigation
- Leistungs-Dropdown-Ziel fuer `Loesungen`
- Startseiten-Loesungslinks, die aus `currentNavigation` abgeleitet werden

Die Startseitenlinks `Wie STRUKTIVA diese Bereiche verbindet` und `Loesungen im Ueberblick ansehen` fuehren dadurch jetzt auf `/loesungen`.

### Bewusst nicht geaendert

- `/leistungen` bleibt aktiv, indexierbar und ohne Redirect.
- Es wurde keine Sitemap-, Robots-, Tracking- oder globale Canonical-Migration vorgenommen.
- Das Kontaktformular, `api/leads.js`, Resend, Consent und Tracking-IDs wurden nicht angefasst.
- Es wurden keine Preise, Pakete, Produktlisten oder SaaS-Vergleichstabellen auf `/loesungen` eingefuehrt.
- KI wird nur als moeglicher unterstuetzender Baustein innerhalb der Ablaufwelt genannt, nicht als Agenturversprechen.

### Technische und visuelle Pruefung

Nach der Umsetzung wurde `npm run build` erfolgreich ausgefuehrt. Die Browserpruefung deckte `/loesungen`, `/leistungen`, `/kontakt#lead-form`, mobile Navigation, Canonical, Meta-Description, Robots, H1-Anzahl, 404-Verhalten und mehrere Viewports ab.

Gepruefte Viewports:

- 360 x 740
- 390 x 844
- 768 x 1024
- 1024 x 768
- 1280 x 800
- 1440 x 900
- 1728 x 1000

Es wurden keine horizontalen Overflows und keine Console Errors festgestellt.

### Verbleibende Schulden nach Schritt 12

- `/leistungen` enthaelt weiterhin alte Leistungs- und Preislogik und muss spaeter separat entschieden werden.
- `/praxisbeispiele`, `/praxisbeispiele/salon-karola` und `/digital-check` bleiben weiterhin nicht gebaut.
- Sitemap, Robots, globale SEO-Struktur und moegliche Redirects bleiben fuer spaetere Schritte offen.
- CSS liegt weiterhin global in `src/styles.css`.
- Es gibt weiterhin keine Lint-, Typecheck- oder Unit-Test-Scripts.
- Vercel CLI ist lokal nicht vorhanden; Deployment kann lokal nicht direkt verifiziert werden.

## 29. Update Schritt 13: Neue Praxisbeispiele-Seite

Stand nach Schritt 13: `/praxisbeispiele` ist als echte Zielseite aktiv. Die Seite buendelt ein echtes Praxisprojekt und klar gekennzeichnete Demo-Konzepte, ohne alte Routen zu loeschen oder Redirects zu aktivieren.

### Neue Route und Module

Neue Dateien:

- `src/pages/PracticeExamplesPage.jsx`
- `src/components/practice/PracticeHero.jsx`
- `src/components/practice/PracticeTransparency.jsx`
- `src/components/practice/PracticeFeaturedCase.jsx`
- `src/components/practice/PracticeDemoConcepts.jsx`
- `src/components/practice/PracticeFinalSections.jsx`

Geaenderte Routing-Dateien:

- `src/routing/pageRegistry.jsx`
- `src/routing/routeConfig.js`

`/praxisbeispiele` ist in `pageRegistry` registriert und besitzt eigene aktive Meta-Daten:

- Title: `Praxisbeispiele digitaler Loesungen | STRUKTIVA`
- Description: Entdecken Sie echte Praxisprojekte und klar gekennzeichnete Demo-Konzepte von STRUKTIVA fuer Sichtbarkeit, Kundenfuehrung und digitale Ablaeufe.
- Canonical: `/praxisbeispiele`
- Robots: index, follow

### Inhaltliche Struktur

Die Seite besteht aus:

1. Hero mit dem Gedanken, dass digitale Loesungen ueber konkrete Unternehmenssituationen verstaendlich werden.
2. Transparenzbereich mit klarer Trennung zwischen echten Projekten und Demonstrationsbeispielen.
3. hervorgehobenem Praxisprojekt `Salon Karola`.
4. Demo-Konzepten fuer Handwerker, Kosmetikstudio und lokalen Dienstleister.
5. Methodenbereich fuer unterschiedliche Unternehmensarten und gleiche Denkweise.
6. Qualitaetsbereich `Nicht das Design allein entscheidet.`
7. Abschluss-CTA zum bestehenden Kontaktformular.

### Kennzeichnung echter und fiktiver Beispiele

Die Seite verwendet zwei sichtbare Labels:

- `Echtes Praxisprojekt`
- `Demo-Konzept`

Salon Karola ist als echtes Praxisprojekt markiert. Die drei Demo-Beispiele werden ausschliesslich als Demo-Konzepte beschrieben. Es wurden keine fiktiven Kundenstimmen, keine Erfolgszahlen, keine garantierten Ergebnisse und keine nicht belegten Kundenbehauptungen eingefuehrt.

### Salon Karola

Salon Karola wird als reales Praxisprojekt hervorgehoben. Die Darstellung nutzt eine abstrakte Systemvisualisierung statt eines gefaelschten Screenshots.

Gezeigte Bausteine:

1. Website und digitale Praesenz
2. Sichtbarkeit und Bewertungswege
3. Kundenkontakt
4. Kundenverwaltung
5. Digitale Kundenkarte und Bonusstruktur
6. Interne digitale Ablaeufe

Der externe CTA fuehrt auf `https://salonkarola.de/`. Eine Detailseite `/praxisbeispiele/salon-karola` wurde bewusst nicht gebaut und nicht verlinkt.

### Demo-Konzepte

Aktiv eingebunden wurden nur bestehende Demo-Ziele:

- Handwerker -> `/demos/handwerker`
- Kosmetikstudio -> `/demos/kosmetik`
- Lokaler Dienstleister -> `/demos/lokaler-dienstleister`

Die Darstellung ist bewusst nicht als gleichfoermiges Portfolio-Grid umgesetzt. Handwerker ist groesser gefuehrt, Kosmetikstudio und lokaler Dienstleister sind als kleinere Konzeptbeispiele ergaenzt.

### Navigationsumstellung

Die zentrale Navigation verweist jetzt fuer `Praxisbeispiele` auf `/praxisbeispiele`.

Betroffene Stellen:

- Desktop-Header
- Mobile Navigation
- Footer/Primaernavigation
- Leistungs-Dropdown-Ziel fuer `Praxisbeispiele`
- `currentNavigation.secondaryCta`

Dadurch fuehren auch abgeleitete Startseiten- und Loesungsseiten-CTAs wie `Praxisbeispiel ansehen` auf `/praxisbeispiele`.

### Bewusst nicht geaendert

- `/demos` bleibt aktiv, erreichbar und ohne Redirect.
- `/referenzen` bleibt aktiv, erreichbar und ohne Redirect.
- `/demos/handwerker`, `/demos/kosmetik` und `/demos/lokaler-dienstleister` bleiben erreichbar.
- `/praxisbeispiele/salon-karola` wurde nicht gebaut.
- `/digital-check` wurde nicht gebaut.
- Preise, Pakete, Kontaktformular, `api/leads.js`, Resend, Consent, Tracking-IDs, Sitemap und Robots wurden nicht veraendert.
- Strukturierte Daten wurden nicht erweitert.

### Technische und visuelle Pruefung

Nach der Umsetzung wurde `npm run build` erfolgreich ausgefuehrt. Die Browserpruefung deckte `/praxisbeispiele`, `/demos`, `/referenzen`, die drei Demo-Routen, `/kontakt#lead-form`, Meta-Daten, Canonical, Robots, H1-Anzahl, mobile Navigation, Reload/Back/Forward, Reduced Motion und mehrere Viewports ab.

Gepruefte Viewports:

- 360 x 740
- 390 x 844
- 768 x 1024
- 1024 x 768
- 1280 x 800
- 1440 x 900
- 1728 x 1000

Es wurden keine horizontalen Overflows und keine Console Errors festgestellt.

### Verbleibende Schulden nach Schritt 13

- Eine Detailseite fuer Salon Karola ist weiterhin offen.
- `/digital-check` bleibt weiterhin eine geplante Route.
- `/demos` und `/referenzen` brauchen spaeter eine SEO-, Sitemap- und Redirect-Entscheidung.
- Die bestehenden statischen Demo-Dateien bleiben technisch ueber die vorhandene Iframe-/Rewrite-Strategie angebunden.
- Einzelne alte Texte in nicht migrierten statischen Demo-Dateien wurden in diesem Schritt nicht bereinigt.
- CSS liegt weiterhin global in `src/styles.css`.
- Es gibt weiterhin keine Lint-, Typecheck- oder Unit-Test-Scripts.

## 30. Update Schritt 14: Salon-Karola-Detailcase

Stand nach Schritt 14: `/praxisbeispiele/salon-karola` ist als echte Detail-Fallstudie aktiv. Die Seite erweitert die bisherige Salon-Karola-Kurzfassung zu einer ausfuehrlichen Projektdokumentation mit strategischer Einordnung.

### Neue Route und Module

Neue Dateien:

- `src/pages/SalonKarolaCaseStudyPage.jsx`
- `src/components/case-study/salonKarolaCaseData.js`
- `src/components/case-study/CaseStudyHero.jsx`
- `src/components/case-study/CaseStudyContext.jsx`
- `src/components/case-study/CaseStudySystemMap.jsx`
- `src/components/case-study/CaseStudyModules.jsx`
- `src/components/case-study/CaseStudyDevelopmentJourney.jsx`
- `src/components/case-study/CaseStudyMethodOutcome.jsx`
- `src/components/case-study/CaseStudyCta.jsx`

Geaenderte Dateien:

- `src/routing/pageRegistry.jsx`
- `src/routing/routeConfig.js`
- `src/components/home/HomeCaseStudySection.jsx`
- `src/components/practice/PracticeFeaturedCase.jsx`
- `src/styles.css`

`/praxisbeispiele/salon-karola` ist in `pageRegistry` registriert und besitzt eigene aktive Meta-Daten:

- Title: `Salon Karola Praxisbeispiel | STRUKTIVA`
- Description: Praxisbeispiel von STRUKTIVA: Wie bei Salon Karola Website, Sichtbarkeit, Kundenkontakt, Kundenbindung und digitale Ablaeufe schrittweise verbunden wurden.
- Canonical: `/praxisbeispiele/salon-karola`
- Robots: index, follow

### Seitenstruktur

Die Detailseite besteht aus:

1. Breadcrumb `Start -> Praxisbeispiele -> Salon Karola`
2. Hero mit Label `Echtes Praxisprojekt`, Eyebrow `Salon Karola · Calw-Wimberg`, H1 und zwei CTAs
3. Projektkontext `Die Aufgabe war groesser als eine neue Website.`
4. respektvoller Ausgangslage `Nicht alles neu. Sondern das Richtige sinnvoll weiterentwickeln.`
5. Systemkarte mit `id="system"`
6. ausfuehrlicher Baustein-Dramaturgie in vier Ebenen
7. Entwicklungsreise ohne erfundene Zeitangaben
8. STRUKTIVA-Methode direkt am Projekt erklaert
9. Ergebnisabschnitt ohne Erfolgszahlen
10. Realitaetsabschnitt zu weiterentwickelbaren digitalen Systemen
11. uebertragbarer Gedanke fuer andere Unternehmen
12. Abschluss-CTA zum bestehenden Kontaktweg

### Sechs Systembereiche

Die Seite zeigt die belegbaren Bereiche:

1. Website und digitale Praesenz
2. Sichtbarkeit und Bewertungswege
3. Kundenkontakt
4. Kundenverwaltung
5. Digitale Kundenkarte und Bonusstruktur
6. Interne digitale Ablaeufe

Die Bereiche werden nicht als sechs gleichfoermige Karten dargestellt, sondern in Ebenen:

- oeffentliche digitale Ebene
- Kontakt- und Datenebene
- Kundenbindungsebene
- interne Ebene

### Breadcrumb und externe Links

Der Breadcrumb ist semantisch als `nav aria-label="Breadcrumb"` mit geordneter Liste umgesetzt. `Start` fuehrt auf `/`, `Praxisbeispiele` auf `/praxisbeispiele`, die aktuelle Seite ist nicht verlinkt.

Die externe Salon-Karola-Website ist mit dem Linktext `Website von Salon Karola ansehen` eingebunden:

- `https://salonkarola.de/`

Externe Links nutzen `target="_blank"` und `rel="noopener noreferrer"`.

### Linkmigrationen

Nach erfolgreichem Aufbau wurden nur konkrete Salon-Karola-Links umgestellt:

- `src/components/practice/PracticeFeaturedCase.jsx`: neuer Link `Projekt im Detail ansehen` -> `/praxisbeispiele/salon-karola`
- `src/components/home/HomeCaseStudySection.jsx`: CTA `Praxisbeispiel ansehen` -> `/praxisbeispiele/salon-karola`

Allgemeine Praxisbeispiel-Links bleiben unveraendert auf `/praxisbeispiele`:

- Header/Navigation `Praxisbeispiele`
- Home-Hero-CTA `Praxisbeispiel ansehen`
- SolutionsPage allgemeiner Praxisbeispiel-CTA
- `currentNavigation.secondaryCta`
- Footer/Primaernavigation

### Bewusst nicht geaendert

- `/digital-check` wurde nicht gebaut.
- `/demos` und `/referenzen` bleiben aktiv und ohne Redirect.
- `/leistungen` bleibt aktiv und ohne Redirect.
- Preise und Pakete wurden nicht veraendert.
- Kontaktformular, `api/leads.js`, Resend, Consent, Tracking-IDs, Sitemap und Robots wurden nicht veraendert.
- Es wurden keine Fake-Screenshots, keine erfundenen Erfolgszahlen, keine Testimonials, keine Ranking- oder Bewertungssteigerungen und keine Bonusregeln ergaenzt.
- Strukturierte Daten wurden nicht erweitert, weil keine route-spezifische Schema-Architektur vorhanden ist.

### Motion und Mobile

Die Seite nutzt die bestehende ruhige Motion-Sprache:

- Hero-Reveal
- zeichnende Verbindungslinien in Hero und Systemkarte
- Abschnitts-Reveals
- schrittweise Entwicklungsreise
- dezente Button-Hover-Zustaende

Bei `prefers-reduced-motion: reduce` werden Animationen und Transitionen innerhalb der Case-Study-Seite deaktiviert. Die Systemvisualisierung bleibt inhaltlich auch ohne Linien verstaendlich.

Mobile wird die Systemkarte vertikal dargestellt. Es wird keine horizontale radiale Grafik erzwungen.

### Verbleibende Schulden nach Schritt 14

- `/digital-check` bleibt weiterhin eine geplante Route.
- `/demos` und `/referenzen` brauchen spaeter eine SEO-, Sitemap- und Redirect-Entscheidung.
- `/ueber-uns` und `/kontakt` sind noch nicht neu aufgebaut.
- Sitemap, Robots und globale SEO-Struktur wurden weiterhin nicht migriert.
- CSS liegt weiterhin global in `src/styles.css`.
- Es gibt weiterhin keine Lint-, Typecheck- oder Unit-Test-Scripts.

## 31. Update Schritt 15: Digital-Check-Zielseite

Stand nach Schritt 15: `/digital-check` ist als echte Zielseite aktiv. Die Seite erklaert den STRUKTIVA Digital-Check als verstaendlichen Einstieg in eine moegliche Zusammenarbeit, ohne Online-Test, Score, Formular-Duplikat oder automatische Audit-Auswertung.

### Neue Route und Module

Neue Dateien:

- `src/pages/DigitalCheckPage.jsx`
- `src/components/digital-check/digitalCheckData.js`
- `src/components/digital-check/DigitalCheckHero.jsx`
- `src/components/digital-check/DigitalCheckIntro.jsx`
- `src/components/digital-check/DigitalCheckAreas.jsx`
- `src/components/digital-check/DigitalCheckProcess.jsx`
- `src/components/digital-check/DigitalCheckExpectations.jsx`
- `src/components/digital-check/DigitalCheckSuitability.jsx`
- `src/components/digital-check/DigitalCheckTrustSection.jsx`
- `src/components/digital-check/DigitalCheckCta.jsx`

Geaenderte Routing-Dateien:

- `src/routing/pageRegistry.jsx`
- `src/routing/routeConfig.js`

`/digital-check` ist in `pageRegistry` registriert und besitzt eigene aktive Meta-Daten:

- Title: `Digital-Check fuer Unternehmen | STRUKTIVA`
- Description: Der STRUKTIVA Digital-Check betrachtet Sichtbarkeit, Kundenwege und digitale Ablaeufe im Zusammenhang und hilft dabei, sinnvolle naechste Schritte einzuordnen.
- Canonical: `/digital-check`
- Robots: index, follow

### Seitenstruktur

Die Seite besteht aus:

1. Hero mit eigenstaendiger Signalfluss-Visualisierung und CTA zum bestehenden Formular.
2. Einordnung `Nicht bei der Loesung anfangen`.
3. Sechs Pruefbereiche in einer zusammenhaengenden Analysearchitektur.
4. Ablaufbereich mit `id="ablauf"`.
5. Erwartungsbereich mit realistischer Einordnung.
6. Abgrenzung gegen Online-Score und vorgefertigtes Verkaufsgespraech.
7. Eignungsbereich fuer typische Ausgangssituationen.
8. ehrlicher Nicht-Eignungsbereich fuer kleine Einzelthemen.
9. STRUKTIVA-Haltung `Technik ist ein Werkzeug. Die Struktur entscheidet.`
10. kleiner Praxisbezug zur Salon-Karola-Detailseite.
11. Abschluss-CTA zum bestehenden Lead-Formular.

### Sechs Pruefbereiche

Die Seite zeigt:

1. Sichtbarkeit
2. Website und Aussendarstellung
3. Kontaktwege
4. Kundenfuehrung
5. Interne Ablaeufe
6. Entwicklungspotenzial

Desktop nutzt ein zentrales Unternehmensmodul mit sechs Analysebereichen, Verbindungslinien und dezenten Pruefpfaden. Mobile wird daraus eine vertikale Abfolge mit Fragen und kurzen Betrachtungspunkten, damit keine radiale Desktopgrafik zusammengedrueckt wird.

### Ablauf und Erwartungen

Der Ablauf besteht aus:

1. Situation beschreiben
2. Zusammenhang betrachten
3. Prioritaeten einordnen
4. Naechsten Schritt entscheiden

Der Erwartungsbereich nennt eine verstaendliche Einordnung, erkennbare Prioritaeten, Hinweise auf Brueche oder Doppelarbeit, moegliche naechste Schritte und eine ehrliche Aussage, wenn eine grosse technische Loesung aktuell nicht notwendig ist.

Nicht versprochen werden ein vollstaendiges Audit, ein schriftlicher 30-Seiten-Bericht, eine fertige Strategie, eine komplette Prozessanalyse, technische Umsetzung im ersten Austausch oder ein garantierter Massnahmenplan.

### CTA- und Linklogik

Informationslinks:

- Hauptnavigation `Digital-Check` -> `/digital-check`
- Mobile Navigation `Digital-Check` -> `/digital-check`
- Footer Navigation `Digital-Check` -> `/digital-check`

Conversion-CTA:

- `Digital-Check anfragen` bleibt auf `/kontakt#lead-form`.

Dadurch fuehren Header-CTA, Footer-CTA, Home-Hero-CTA, HomeDigitalCheckSection-CTA, SolutionsPage-Abschluss-CTA, PracticeExamplesPage-Abschluss-CTA, Salon-Karola-Abschluss-CTA und DigitalCheckPage-CTA weiterhin direkt zum bestehenden Formularanker.

### Formular, API, Consent und Tracking

Nicht veraendert wurden:

- bestehende Kontaktseite und bestehendes Formular
- Formularfelder
- Validierung
- Honeypot
- Success- und Error-State
- `api/leads.js`
- Resend-Anbindung und Environment-Variablen
- `src/cookieConsent.jsx`
- Google Analytics, Google Ads, Pinterest Tag, Tracking-IDs und bestehende Lead-Events

Es wurde kein neues Formular gebaut und keine echte Lead-Nachricht versendet.

### Motion, Mobile und Reduced Motion

Motion bleibt ruhig:

- Hero-Reveal
- schrittweises Erscheinen der Signale und Einordnungsschritte
- Abschnitts-Reveals
- dezente Hover-Zustaende

Bei `prefers-reduced-motion: reduce` werden Animationen und Transitionen innerhalb der Digital-Check-Seite deaktiviert. Alle Inhalte bleiben statisch verstaendlich.

### Strukturierte Daten

Es wurde keine route-spezifische Schema-Erweiterung eingefuehrt. Vorhandene globale Schema-Struktur wurde nicht veraendert. Es wurden keine unpassenden Schema-Typen wie Product, Offer, Review oder AggregateRating genutzt.

### Bereinigte temporaere Testartefakte

Die untracked Schritt-14-Testartefakte wurden vor der Umsetzung geprueft und entfernt:

- `output/`
- `tmp-step14-browsercheck.cjs`
- `tmp-step14-static-server.cjs`

Die Entfernung war sicher, weil die Artefakte untracked waren, nur lokale Preview-/Browsercheck-Spuren enthielten und in Package-Scripts, Dokumentation, Source, Public, Vite- und Vercel-Konfiguration nicht referenziert wurden.

### Verbleibende Schulden nach Schritt 15

- `/ueber-uns` und `/kontakt` sind noch nicht neu aufgebaut.
- `/leistungen`, `/pakete`, `/demos` und `/referenzen` brauchen spaeter eine SEO-, Sitemap- und Redirect-Entscheidung.
- Sitemap, Robots und globale SEO-Struktur wurden weiterhin nicht migriert.
- `api/leads.js` enthaelt noch alte Bestaetigungsmail-Texte, blieb aber wegen ausdruecklichem Backend-Schutz unveraendert.
- CSS liegt weiterhin global in `src/styles.css`.
- Es gibt weiterhin keine Lint-, Typecheck- oder Unit-Test-Scripts.
