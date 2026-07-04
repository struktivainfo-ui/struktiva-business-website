# STRUKTIVA Rebuild Audit

Stand: 2026-07-04

Ziel dieses Dokuments ist eine technische Bestandsaufnahme des bestehenden STRUKTIVA-Webprojekts vor einem spaeteren kontrollierten Neuaufbau zur Positionierung "STRUKTIVA Digitale Unternehmensberatung". Es wurden keine Inhalte, Seiten, Formulare oder Tracking-Konfigurationen veraendert.

## 1. Technischer Ueberblick

### Framework, Build und Runtime

- Framework: React 18 als Single Page Application.
- Build-System: Vite 5 mit `@vitejs/plugin-react`.
- Styling: Tailwind CSS 3 plus umfangreiche globale Styles in `src/styles.css`.
- Animationen: `framer-motion` fuer Reveal-/Scroll-Animationen; zusaetzlich CSS-Keyframes.
- Icons: `lucide-react`.
- Serverless/API: Vercel Function `api/leads.js`.
- E-Mail/Lead-Versand: Resend SDK.
- Deployment-Konfiguration: `vercel.json` mit Build Command `npm run build`, Output `dist` und Rewrites.

### Relevante Dateien und Struktur

| Bereich | Dateien |
| --- | --- |
| App-Einstieg | `index.html`, `src/main.jsx`, `src/styles.css` |
| Cookie/Tracking | `src/cookieConsent.jsx` |
| Lead API | `api/leads.js` |
| Statische Assets | `public/struktiva-logo.jpeg`, `public/images/*`, Favicons |
| Statische Demo-Seiten | `public/demos/handwerker/index.html`, `public/demos/kosmetik/index.html`, `public/demos/lokaler-dienstleister/index.html` |
| SEO/Verifikation | `public/sitemap.xml`, `public/robots.txt`, `public/google9375a226b2bc0d76.html` |
| Deployment | `vercel.json`, `.vercel/` |

### Komponentenstruktur

Die Haupt-App ist weitgehend monolithisch in `src/main.jsx` organisiert. Dort liegen:

- zentrale Konstanten: `siteLinks`, `brand`, `contactDetails`, Bilder, Leistungs- und Paketdaten
- Layout-Komponenten: `Header`, `Footer`, `SectionHeader`, `Reveal`
- Seitenkomponenten: `HomePage`, `LeistungenPage`, `PaketePage`, `DemosPage`, `ReferenzenPage`, `AboutPage`, `ProjectRequestPage`, `ImpressumPage`, `DatenschutzPage`, `NotFoundPage`
- viele vorbereitete, derzeit nicht gerenderte Detail-/Branchen-/Demo-Komponenten
- Formular-Komponenten: `LeadField`, `LeadSelect`, Lead-Formular in `ProjectRequestPage`
- Demo-Komponenten: diverse Demo-Templates und Demo-Seiten, aber aktuell ueber das Routing nur teilweise aktiv

Risiko: Die Datei `src/main.jsx` ist sehr gross und mischt Daten, Routing, Layout, Content, Formulare, rechtliche Seiten und nicht aktive Alt-/Vorbereitungsseiten. Fuer den Rebuild sollte sie in Routen, Datenmodule, Layout und Formularlogik zerlegt werden.

## 2. Aktuelle Seitenstruktur

### Aktiv gerenderte SPA-Routen

Die Routing-Logik sitzt in `Page()` und prueft `window.location.pathname` manuell. Es wird kein React Router verwendet.

| Route | Seitentitel | H1 | Hauptzweck | Wichtigste CTA | Weiter sinnvoll? | Ueberschneidungen / Altbegriffe |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | `STRUKTIVA Digitale Unternehmensberatung | Digitale Struktur fuer Unternehmen` | Websites, Landingpages und digitale Systeme fuer kleine Unternehmen. | Erstgespraech buchen, Leistungen ansehen, mehrere Paket-CTA | Ja, aber strategisch neu ausrichten | Titel/Brand auf neue Firmenbezeichnung umgestellt; Fokus stark Website/Landingpage |
| `/leistungen` | `Leistungen - STRUKTIVA Digitale Unternehmensberatung` | Alle STRUKTIVA Leistungen im Ueberblick | Leistungsuebersicht von Website bis Systeme/Dashboards | Website-Erstgespraech, Landingpage-Erstgespraech, Struktur-Check, Projekt anfragen | Ja, als neue Beratungs-/Leistungsstruktur | Sehr viele Einzelleistungen; mehrere vorbereitete Detailseiten sind auf diese Route zurueckgefuehrt |
| `/pakete` | `Pakete & Betreuung - STRUKTIVA Digitale Unternehmensberatung` | Pakete & Einstiegsmoeglichkeiten | Festpreis-Einstiege und Betreuung | Paket anfragen, Betreuung besprechen, Einzelleistung anfragen | Eher ja, aber mit Beratungslogik pruefen | Viele gleichartige CTA; Preis-/Paketlogik muss zur neuen Positionierung passen |
| `/demos` | `Referenzen & Demos - STRUKTIVA Digitale Unternehmensberatung` | Referenzen & Demos | Referenz Salon Karola und Demo-Beispiele | Demo-Struktur anfragen, neue Website ansehen, Demo ansehen | Ja, aber Demos sauber trennen von Referenzen | Demo-/Referenz-Mischung; alte Vergleichsseite `salonkarola.simdif.com` bewusst als Altvergleich verlinkt |
| `/referenzen` | `Referenzen & Demos - STRUKTIVA Digitale Unternehmensberatung` | Referenzen & Demos | Alias/Alternative zur Demo-Seite | identisch zu `/demos` | Nur wenn bewusst als Alias; sonst konsolidieren | Canonical zeigt auf `/demos`; nicht in Sitemap |
| `/ueber-uns` | `Ueber uns - STRUKTIVA Digitale Unternehmensberatung` | Ueber STRUKTIVA | Personen, Herkunft, Arbeitsweise | Kontakt/Erstgespraech | Ja | Personen-/Rechtsaussagen spaeter pruefen |
| `/kontakt` | `Kontakt - STRUKTIVA Digitale Unternehmensberatung` | Erstgespraech anfragen | Projektanfrage und direkte Kontaktwege | Erstgespraech anfragen | Ja, zentrale Lead-Seite | Anfrage-Fokus passt |
| `/impressum` | `Impressum - STRUKTIVA Digitale Unternehmensberatung` | Impressum | Rechtliche Anbieterangaben | E-Mail/Telefon indirekt | Ja, rechtlich erforderlich | Kontakt-/Anbieterangaben spaeter rechtlich validieren |
| `/datenschutz` | `Datenschutz - STRUKTIVA Digitale Unternehmensberatung` | Datenschutzerklaerung | Datenschutz, Hosting, Resend | E-Mail-Kontakt | Ja, rechtlich erforderlich | Muss bei Tracking-/Consent-Aenderungen aktualisiert werden |

### Statische Demo-Routen

Die statischen Demo-Dateien liegen unter `public/demos/*/index.html`. `vercel.json` definiert Rewrites fuer diese drei Pfade:

- `/demos/handwerker` -> `/demos/handwerker/index.html`
- `/demos/kosmetik` -> `/demos/kosmetik/index.html`
- `/demos/lokaler-dienstleister` -> `/demos/lokaler-dienstleister/index.html`

Wichtig: Lokales `vite preview` wendet diese Vercel-Rewrites nicht an. Lokal sind die Dateien direkt ueber `/demos/.../index.html` erreichbar; ohne Vercel-Rewrite faellt `/demos/...` in die SPA-NotFound-Metadaten. Im Vercel-Deployment sollte die Rewrite-Regel die statischen Demos bedienen.

| Route | Seitentitel | H1 | Hauptzweck | CTA | Weiter sinnvoll? | Hinweise |
| --- | --- | --- | --- | --- | --- | --- |
| `/demos/handwerker` | Max Mustermann Handwerksservice | Handwerk, das sauber geplant und verlaesslich umgesetzt wird. | Fiktive Handwerker-Demo | Demo-Anfrage senden, Anrufen | Als Demo evtl. ja | `noindex, nofollow`; Demo-Daten wie 07051 000000, Musterbetrieb |
| `/demos/kosmetik` | Kosmetikstudio Bella Vita | Moderne Beauty-Welt fuer Pflege, Hautbild und Wohlgefuehl | Fiktive Kosmetik-Demo | Termin anfragen, Leistungen entdecken | Als Demo evtl. ja | `noindex, nofollow`; inline Alerts in Demo-Formular |
| `/demos/lokaler-dienstleister` | ServicePlus Musterstadt | Zuverlaessiger Service fuer Alltag, Objekt und kleine Betriebe | Fiktive Dienstleister-Demo | Kostenlose Anfrage stellen | Als Demo evtl. ja | `noindex, nofollow`; inline Alerts in Demo-Formular |

### Nicht aktive oder zurueckgefuehrte Seitenkonzepte

In `src/main.jsx` existieren zahlreiche Komponenten oder `siteLinks` fuer Spezialseiten, z. B. KI-Automatisierung, Webseiten, Landingpages, Apps, Google Ads, QR-Bewertungen, Digitale Soforthilfe, Ordnungssysteme, Branchenloesungen, Wissen/Artikel. Viele dieser Links zeigen derzeit bewusst auf `/leistungen` oder `/demos`, nicht auf eigene Routen.

Risiko: Beim Rebuild koennen tote Alt-Komponenten und vorbereitete, aber nicht geroutete Inhalte leicht Verwirrung erzeugen. Vor einer neuen Informationsarchitektur sollte entschieden werden, welche dieser Inhalte gebraucht, konsolidiert oder entfernt werden.

## 3. Aktuelle Navigation

### Header

Desktop-Navigation:

- Start
- Pakete
- Referenzen / Demos
- Ueber uns
- Kontakt
- primaerer Header-CTA: `Erstgespraech anfragen` -> `/kontakt`
- Leistungen-Dropdown mit `Leistungen im Ueberblick`, `Pakete & Angebote`, `Referenzen`, `Demos`

Mobile Navigation:

- Burger-Menue mit denselben Hauptpunkten
- Leistungen-Untermenue
- CTA `Erstgespraech anfragen`

### Footer

Footer-Bereiche:

- Leistungslinks: Leistungen, Pakete & Betreuung, Referenzen, Demos
- Unternehmen: Start, Leistungen, Ueber uns, Kontakt
- Rechtliches & Bewertung: Impressum, Datenschutz, Google-Bewertung schreiben
- externe Profile: YouTube, Pinterest, X, Malt, LinkedIn, Instagram
- Cookie-Einstellungen aendern

### User Flow

Aktueller Hauptflow von der Startseite:

1. Hero fuehrt zu `/kontakt#lead-form` oder `#leistungen`.
2. Leistungs-/Paketbereiche fuehren teils zu `#kontakt`, teils zu `/kontakt`, teils zu `/kontakt#lead-form`.
3. Kontaktseite sammelt strukturierte Anfrage ueber das Lead-Formular.
4. Direkte Wege: Mail, Telefon, WhatsApp, Google-Bewertung, externe Profile.

Schwachstellen:

- Mehrere CTA-Labels fuehren zum gleichen Ziel: `Erstgespraech`, `Kurzanalyse`, `Projekt anfragen`, `Paket anfragen`, `Soforthilfe anfragen`, `Struktur-Paket anfragen`, `Kostenlose Ersteinschaetzung`.
- Auf der Startseite verweisen mehrere Paket-CTA auf `#kontakt`; auf der aktuellen Startseite ist aber kein eigenes `id="kontakt"` als sichtbarer SPA-Kontaktbereich belegt. Das kann je nach DOM/Route als schwacher Anker wirken. Der robustere Zielanker ist `/kontakt#lead-form`.
- `/referenzen` und `/demos` zeigen denselben Inhalt, aber nur `/demos` ist in der Sitemap.
- Die statischen Demo-Routen brauchen die Vercel-Rewrites; ohne diese wirken sie lokal wie NotFound.

## 4. Aktuelle CTA-Struktur

### CTA-Typen

- Formular-CTA: `/kontakt#lead-form`
- Kontaktseiten-CTA: `/kontakt`
- direkte Kontakt-CTA: `mailto:`, `tel:`, `https://wa.me/...`
- externe Referenz-CTA: `https://salonkarola.de/`, alte Vergleichsseite `https://salonkarola.simdif.com/`
- Demo-CTA: `/demos/handwerker`, `/demos/kosmetik`, `/demos/lokaler-dienstleister`
- Review-CTA: Google-Bewertung-Link

### Bewertung

Der zentrale Lead-Weg ist vorhanden und technisch plausibel. Die Anzahl der CTA-Varianten ist jedoch hoch. Fuer den Neuaufbau sollte eine klare CTA-Hierarchie definiert werden:

1. Primaerer CTA: konkrete Anfrage / Erstgespraech.
2. Sekundaerer CTA: Leistungen oder Referenzen ansehen.
3. Tertiaere Kontaktwege: Telefon, E-Mail, WhatsApp.

## 5. Formulare und Lead-Systeme

### Produktives Lead-Formular

Route: `/kontakt`, Formularbereich `#lead-form`.

Felder:

- Name (Pflicht)
- Firma
- E-Mail (Pflicht)
- Telefon
- gewuenschter Kontaktweg
- Interesse/Bedarf
- Projektstart
- Budgetrahmen
- Nachricht (Pflicht, mindestens 12 Zeichen)
- Datenschutz-Zustimmung (Pflicht)
- verstecktes Honeypot-Feld `website`

Frontend:

- Client-Validierung vorhanden.
- `noValidate` am Formular; Fehler werden selbst angezeigt.
- `fetch('/api/leads')` als POST mit JSON.
- Erfolg und Fehler werden als `aria-live`-Meldung ausgegeben.
- Submit-Button ist waehrend Versand deaktiviert.

Backend `api/leads.js`:

- akzeptiert nur POST, sonst 405.
- IP-basiertes In-Memory-Rate-Limit: 5 Anfragen pro Minute.
- Sanitizing und Laengenbegrenzung.
- Allow-Lists fuer Select-Werte.
- Honeypot blockiert Bots.
- Datenschutz-Zustimmung erforderlich.
- Resend sendet interne Mail an `LEAD_RECEIVER_EMAIL`.
- Resend sendet Bestaetigung an die anfragende Person.
- optionaler Webhook `LEAD_WEBHOOK_URL`.
- benoetigte ENV: `RESEND_API_KEY`, `SMTP_FROM`, `LEAD_RECEIVER_EMAIL`, optional `LEAD_WEBHOOK_URL`.

Plausibilitaet:

- Implementierung ist konsistent und nachvollziehbar.
- Keine echte Nachricht wurde versendet.
- Risiko: In-Memory-Rate-Limit ist fuer Serverless nur begrenzt stabil, da Instanzen wechseln koennen.
- Risiko: Wenn Resend ENV fehlen, schlaegt die Anfrage mit 500 fehl; Fallback auf Mailto gibt es nur manuell ueber die Seite.
- Risiko: Kein CAPTCHA, aber Honeypot und Rate-Limit sind als leichter Spam-Schutz vorhanden.

### Demo-Formulare

Die drei statischen Demo-Seiten enthalten jeweils Demo-Formulare mit `onsubmit="event.preventDefault(); alert(...)"`. Diese senden keine echten Nachrichten. Sie sind als Demo okay, sollten im spaeteren Rebuild aber klar von produktiven Formularen getrennt bleiben.

## 6. SEO-Status

### Meta-Titel und Meta-Descriptions

`index.html` setzt initiale Meta-Daten und Schema.org fuer die SPA. `useDocumentTitleSafe()` aktualisiert Titel, Description, Canonical, OG- und Twitter-Metadaten clientseitig pro Route.

Positive Befunde:

- Alle aktiven SPA-Kernseiten haben Titel, Description, Canonical und Robots.
- `/referenzen` canonicalisiert auf `/demos`.
- Demo-Dateien haben `noindex, nofollow`.
- Bilder auf den geprueften SPA-Kernseiten hatten Alt-Texte oder bewusst leere Alt-Texte; in der Browserpruefung keine fehlenden `alt`-Attribute.

Probleme und Risiken:

- Viele Titel/Descriptions wurden auf "STRUKTIVA Digitale Unternehmensberatung" umgestellt.
- Initiales `index.html` enthaelt die neue Firmenbezeichnung im Schema.org-Name.
- Clientseitige Meta-Aenderungen sind fuer moderne Crawler meist sichtbar, aber serverseitig wird fuer SPA-Fallback zunaechst immer `index.html` ausgeliefert. Fuer SEO-kritische Seiten ist das nicht ideal.
- Sitemap listet `/referenzen` nicht, obwohl die Route existiert.
- Sitemap listet die statischen Demo-Routen nicht; vermutlich passend, weil diese `noindex` sind.
- Strukturierte Daten gibt es nur initial in `index.html`; keine route-spezifischen strukturierten Daten.
- H1-Struktur der Kernseiten ist vorhanden. Statische Demos ebenfalls.
- Alte Marken-/Positionsbegriffe: "Unternehmensarchitektur", "Digitale Unternehmensarchitektur", "Mehr als Webdesign", "Webdesign-Angebot", Website-/Landingpage-Fokus.

### Sitemap und robots.txt

`public/sitemap.xml` enthaelt:

- `/`
- `/leistungen`
- `/pakete`
- `/demos`
- `/ueber-uns`
- `/kontakt`
- `/datenschutz`
- `/impressum`

`public/robots.txt`:

- `Allow: /`
- Sitemap auf `https://struktiva.de/sitemap.xml`

### Canonicals

SPA-Canonicals:

- `/` -> `https://struktiva.de/`
- `/leistungen` -> `https://struktiva.de/leistungen`
- `/pakete` -> `https://struktiva.de/pakete`
- `/demos` -> `https://struktiva.de/demos`
- `/referenzen` -> `https://struktiva.de/demos`
- `/ueber-uns` -> `https://struktiva.de/ueber-uns`
- `/kontakt` -> `https://struktiva.de/kontakt`
- `/impressum` -> `https://struktiva.de/impressum`
- `/datenschutz` -> `https://struktiva.de/datenschutz`

Statische Demo-Canonicals enden mit Slash, z. B. `https://struktiva.de/demos/handwerker/`.

## 7. Tracking und Consent

### Gefundene Dienste

- Google Analytics ID: `G-FN6JXMXCSP`
- Google Ads ID: `AW-18101020705`
- Pinterest Tag ID: `2612362769403`
- Pinterest Domain Verify Meta in `index.html`
- Google Search Console HTML-Verifikation: `public/google9375a226b2bc0d76.html`

### Cookie Consent

Datei: `src/cookieConsent.jsx`

Mechanik:

- Speichert Auswahl in `localStorage` unter `struktiva-cookie-consent-v1`.
- Kategorien: notwendig, Statistik, Marketing.
- Google Consent Mode Default: denied fuer Ads/Analytics.
- Google Tag wird erst nach Statistik- oder Marketing-Zustimmung geladen.
- Pinterest Tag wird nur bei Marketing-Zustimmung geladen.
- Footer bietet `Cookie-Einstellungen aendern`.
- Marketing-Lead-Events werden nur gesendet, wenn Marketing-Zustimmung aktiv ist.

Bewertung:

- Consent-Mechanismus ist technisch bewusst umgesetzt.
- Kein Tracking-Script ist fest in `index.html` eingebettet.
- Datenschutztext nennt Resend und Vercel; Google/Pinterest sollten bei einer rechtlichen Finalpruefung explizit gegen die tatsaechliche Consent-/Tracking-Nutzung abgeglichen werden.

## 8. Design-System

### Farben und visuelle Sprache

Aktuelles Hauptsystem:

- Schwarz/Anthrazit: `#050505`, `#111111`, `#151515`
- Gold/Champagner: `#c9a24a`, `#d8b45a`, `#f0d37a`, `#f2d98b`, `#8f6d27`
- Silber/helle Flaechen: `#f4f4f1`, `#c9c9c3`, `#faf8f2`
- Dunkle Karten mit Gold-Glow und spaeteren CSS-Overrides auf hellere Premium-Flaechen

### Typografie

- Global: Manrope ueber Google Fonts.
- Headings teilweise Marcellus, spaeter im CSS fuer `.struktiva-metallic` wieder auf `--site-font` ueberschrieben.
- Viele Utility-Klassen direkt in JSX; dazu globale CSS-Overrides.

### Komponenten und Pattern

- Karten mit abgerundeten Ecken, Schatten, Goldlinien.
- Buttons: `metallic-btn-primary`, `metallic-btn-secondary`, viele Tailwind-Einzelklassen.
- Sticky Header mit Dropdowns und Mobile-Menue.
- Floating WhatsApp Button.
- Cookie Banner und Modal.
- Paket-/Leistungs-/Demo-Karten.
- Reveal-Animationen via Framer Motion.
- CSS-Keyframes: `orbFloat`, `architectureFlow`, `nodePulse`, `chipFloat`, `splashPulse`, `splashSweep`, `waEntrance`, `waPulse`, `premiumGlow`.
- Reduced-Motion-Regel vorhanden.

### Breakpoints

- Tailwind Breakpoints in JSX (`md`, `lg`, `xl`).
- Globale CSS-Media-Queries u. a. bei 1180, 980, 920, 900, 780, 768.
- Browserpruefung bei 1366x900 und 390x844: keine horizontalen Overflows auf Kernseiten festgestellt.

### Wiederverwendbarkeit

Gut wiederverwendbar:

- Lead-Formularlogik als fachliche Grundlage.
- Cookie Consent Layer.
- Header/Footer-Grundstruktur, falls Navigationslogik vereinfacht wird.
- Kontakt- und rechtliche Seiten als Ausgangspunkt.
- Design-Tokens fuer Gold/Schwarz/Silber, wenn sie reduziert und dokumentiert werden.

Wahrscheinlich ersetzen oder stark refaktorisieren:

- Monolithische `main.jsx`.
- Viele inline Tailwind-Kombinationen plus globale Override-Schichten.
- Nicht aktive Seitenkomponenten.
- Mehrfach vorhandene Demo-Komponenten.
- Unklare CTA-Vielfalt.

## 9. Wiederverwendbare Komponenten

| Komponente/Funktion | Wiederverwendbar? | Begruendung |
| --- | --- | --- |
| `CookieConsentLayer` | Ja | Consent Mode, Kategorien und Tracking-Gates sind vorhanden |
| `ProjectRequestPage` / Lead-Formular | Ja, refaktorieren | Fachlich passend, aber als eigene Komponente/API-Client trennen |
| `api/leads.js` | Ja, haerten | Validierung, Resend, Webhook plausibel; Rate-Limit serverless-bedingt begrenzt |
| `Header` / `Footer` | Teilweise | Struktur vorhanden; Navigation/CTA muessen strategisch reduziert werden |
| `SectionHeader`, `Reveal` | Ja | Kleine UI-Helfer, gut extrahierbar |
| Statische Demos | Teilweise | Als noindex-Demo nutzbar; technische Einbindung/Rewrites klaeren |
| Rechtliche Seiten | Ja, rechtlich pruefen | Grundlage vorhanden; muss bei Repositionierung/Tracking finalisiert werden |

## 10. Technische Altlasten

- `src/main.jsx` ist sehr gross und enthaelt aktive Seiten, tote/vorbereitete Seiten, Daten, Layout, Formulare und rechtliche Inhalte.
- `src/styles.css` ist sehr gross und enthaelt mehrere Design-Schichten sowie starke `!important`-Overrides.
- Viele `siteLinks` zeigen auf Sammelseiten statt echte Detailseiten. Das kann intern gewollt sein, ist fuer Wartung aber schwer lesbar.
- `/referenzen` und `/demos` sind inhaltlich doppelt; Canonical loest SEO teilweise, aber UX/IA bleibt doppelt.
- Statische Demo-Routen haengen von Vercel-Rewrites ab.
- Viele alte Positionierungsbegriffe: "Unternehmensarchitektur", "Digitale Unternehmensarchitektur", "Webdesign".
- Externe Bilder von Unsplash werden vielfach genutzt; Datenschutz/Performance/CDN-Abhaengigkeit spaeter pruefen.
- Demo-Seiten enthalten inline CSS/JS und Demo-Alerts.
- Kein Lint-, Typecheck- oder Test-Script im `package.json`.
- Keine TypeScript-Typisierung.
- `node_modules` und `dist` liegen lokal vor; `dist` wird durch Build aktualisiert.

## 11. Risiken fuer den Neuaufbau

1. Informationsarchitektur: Aktuelle Seiten sind historisch gewachsen und mischen Website-Angebote, digitale Systeme, Demos, Referenzen und Beratung.
2. SEO-Migration: Titel, Schema.org, Sitemap, Canonicals und alte Begriffe muessen koordiniert umgestellt werden.
3. Lead-Verlust: Kontaktformular und direkte Kontaktwege funktionieren als Kernsystem und sollten beim Umbau frueh stabil gehalten werden.
4. Tracking/Consent: Google/Pinterest/Ads-Konfiguration nicht nebenbei aendern; Datenschutz parallel pruefen.
5. Demo-Rewrites: Bei Aenderungen an Vercel-Rewrites kann `/demos/*` brechen.
6. CSS-Komplexitaet: Grosses globales CSS kann Redesigns unvorhersehbar beeinflussen.
7. Content-Altlasten: Nicht aktive Komponenten koennen beim Umbau versehentlich wieder sichtbar werden.
8. Rechtliches: Impressum, Datenschutz und Kontaktangaben nicht frei umformulieren, sondern final pruefen.

## 12. Empfohlene Reihenfolge fuer den Umbau

1. Zielarchitektur festlegen: neue Hauptnavigation fuer STRUKTIVA Digitale Unternehmensberatung definieren.
2. Routenmodell entscheiden: `/`, `/leistungen` oder Beratungsseiten, `/referenzen`, `/kontakt`, Rechtliches; Alias `/referenzen` vs `/demos` klaeren.
3. Content-Inventar bereinigen: aktive Inhalte, wiederverwendbare Inhalte und Altkomponenten markieren.
4. Technische Struktur refaktorisieren: `main.jsx` in Seiten, Komponenten, Daten und Utilities splitten.
5. Design-System vereinfachen: Tokens, Buttons, Karten, Header, Footer, Formularzustand definieren.
6. SEO-Grundlage aktualisieren: Titel, Descriptions, Canonicals, Sitemap, Schema.org, OG/Twitter.
7. Lead-System absichern: API und Formular nach Refactor testen, ENV-Anforderungen dokumentieren.
8. Tracking/Consent validieren: Consent Mode, Google Ads/Analytics, Pinterest und Datenschutztext abgleichen.
9. Demo-/Referenzstrategie entscheiden: Demos noindex lassen oder in neue Referenzlogik ueberfuehren.
10. End-to-End pruefen: Build, lokale Browserpruefung, Formular ohne echten Versand mocken oder nur Validierung testen, Deploy.

## Pruefprotokoll

Ausgefuehrt:

- `npm run build`: erfolgreich.
- Lokale Browserpruefung ueber Vite Preview nach Freigabe fuer Vite/esbuild-Start ausserhalb der Sandbox.
- Gepruefte Viewports: 1366x900 und 390x844.
- Gepruefte Routen: `/`, `/leistungen`, `/pakete`, `/demos`, `/referenzen`, `/ueber-uns`, `/kontakt`, `/impressum`, `/datenschutz`, `/demos/handwerker`, `/demos/kosmetik`, `/demos/lokaler-dienstleister`.
- Ergebnis Kernseiten: keine Console-Errors, kein horizontales Overflow, Meta/Canonical/H1 vorhanden.
- Ergebnis Demo-Routen lokal: Vite Preview zeigt ohne Vercel-Rewrite fuer `/demos/*` die SPA-NotFound-Metadaten. Die statischen Dateien sind direkt unter `/demos/*/index.html` erreichbar; Vercel-Rewrites sollen das in Produktion abfangen.
- `lint`, `typecheck`, `test`: keine entsprechenden Scripts im `package.json` vorhanden.

Noch nicht ausgefuehrt:

- Kein echtes Absenden des Lead-Formulars.
- Kein externer Linkcheck gegen alle Fremddomains.
- Keine rechtliche Pruefung von Impressum/Datenschutz.
