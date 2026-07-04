# STRUKTIVA Design System und Informationsarchitektur

Stand: 2026-07-04

Dieses Dokument definiert die naechste technische und gestalterische Grundlage fuer den kontrollierten Neuaufbau von STRUKTIVA. Es baut auf `docs/STRUKTIVA-REBUILD-AUDIT.md` auf. In diesem Schritt werden keine bestehenden Seiten neu gestaltet, keine Routen geloescht und keine Formular-, Consent- oder Tracking-Funktion entfernt.

## 1. Markenwirkung

Neue Markenbezeichnung:

STRUKTIVA Digitale Unternehmensberatung

Kernpositionierung:

STRUKTIVA unterstuetzt Unternehmen dabei, Sichtbarkeit, Kundenfuehrung und digitale Ablaeufe sinnvoll miteinander zu verbinden.

STRUKTIVA soll nicht als klassische Webdesign-Agentur erscheinen. Die Marke steht fuer strategische Beratung, digitale Struktur, Prozessdenken, individuelle Systeme und praktische Umsetzung. Der Eindruck soll hochwertig, klar, modern, persoenlich und technologisch kompetent sein.

Visuelle These:

Helle, praezise Beratungsoberflaeche mit starker schwarzer Typografie, wenigen goldenen Akzenten und ruhigen Systemgrafiken, die digitale Zusammenhaenge verstaendlich machen.

Content-These:

Die Website fuehrt von einem konkreten Unternehmensproblem ueber die STRUKTIVA-Loesung und einen echten Praxisbeweis zu einem klaren Digital-Check.

Interaktions-These:

Bewegung soll Zusammenhaenge sichtbar machen: ruhige Abschnitts-Reveals, schrittweise Prozesslinien und sparsame Hover-Reaktionen fuer echte Entscheidungen.

## 2. Gestaltungsprinzipien

1. Klarheit vor Effekt: Jede Sektion beantwortet eine konkrete Frage.
2. Strategie vor Oberflaeche: Website, Google, Kontaktwege, Kundenbindung und interne Ablaeufe werden als System gezeigt.
3. Weissraum mit Substanz: Grosszuegige Flaechen, aber immer mit sichtbarer Orientierung.
4. Gold als Signal: Gold markiert Wert, Fokus oder aktive Handlung, nicht Flaechenfuellung.
5. Menschlich und technisch zugleich: persoenliche Sprache, aber praezise Systemdarstellungen.
6. Wenige CTA: ein primaerer Weg, ein sekundarer Beweisweg, direkte Kontaktwege nur als Unterstuetzung.
7. Keine Template-Optik: keine generischen Card-Grids, keine beliebigen SaaS-Illustrationen, keine kuenstlichen Glow-Fluten.

## 3. Informationsarchitektur

Geplante Hauptnavigation:

- Start
- Loesungen
- Praxisbeispiele
- Digital-Check
- Ueber STRUKTIVA
- Kontakt

Rollen der Hauptbereiche:

| Bereich | Aufgabe | Bestehende Grundlage |
| --- | --- | --- |
| Start | Positionierung, Problem, Loesungslogik, Praxisbeweis, Digital-Check | `/` strategisch neu ausrichten |
| Loesungen | Drei Loesungswelten erklaeren | `/leistungen` konsolidieren |
| Praxisbeispiele | echte Beweise und ausgewaehlte Demos | `/demos`, `/referenzen`, Salon Karola |
| Digital-Check | klares Einstiegsangebot und Lead-Fokus | `/kontakt`-Formularlogik wiederverwenden |
| Ueber STRUKTIVA | Menschen, Haltung, Arbeitsweise | `/ueber-uns` weiterentwickeln |
| Kontakt | direkte Kontaktwege, rechtssicherer Formularzugang | `/kontakt` weiterverwenden |

Die Struktur reduziert die aktuelle Vermischung aus Leistungen, Paketen, Demos, Referenzen und Kontaktwegen. Preis-/Paketlogik wird nicht geloescht, aber in der neuen Navigation nicht mehr als eigener primaerer Einstieg empfohlen.

## 4. Geplante Routen

Zielrouten:

| Zielroute | Zweck | Status fuer naechsten Umbau |
| --- | --- | --- |
| `/` | neue Startseite fuer STRUKTIVA Digitale Unternehmensberatung | bestehende Route ersetzen |
| `/loesungen` | Ueberblick ueber die drei Loesungswelten | neu anlegen, aus `/leistungen` ableiten |
| `/praxisbeispiele` | Referenzen, reale Beispiele, ausgewaehlte Demo-Einordnung | neu anlegen, `/demos` und `/referenzen` zusammenfuehren |
| `/praxisbeispiele/salon-karola` | echter Praxisbeweis Salon Karola | neu planen oder als Abschnitt in Praxisbeispiele starten |
| `/digital-check` | primaerer Lead-Einstieg | neu anlegen, Formularlogik aus `/kontakt` nutzen |
| `/ueber-uns` | Team, Haltung, Arbeitsweise | bestehende Route behalten, Inhalt spaeter anpassen |
| `/kontakt` | direkte Kontaktwege und alternative Anfrage | behalten |
| `/impressum` | rechtlich erforderlich | behalten |
| `/datenschutz` | rechtlich erforderlich | behalten |

Bestehende Routen und geplante Behandlung:

| Bestehende Route | Empfehlung | Grund |
| --- | --- | --- |
| `/leistungen` | Redirect oder Zwischenphase auf `/loesungen` | SEO/Bestandslinks erhalten; Inhalt thematisch konsolidieren |
| `/pakete` | vorerst behalten, spaeter entweder Unterbereich oder Redirect | Preise koennen relevant sein, sollen aber nicht Hauptnavigation dominieren |
| `/demos` | Redirect oder Canonical auf `/praxisbeispiele` | aktuelle Referenzen-/Demo-Mischung zusammenfuehren |
| `/referenzen` | Redirect auf `/praxisbeispiele` | bereits heute Alias-artig; nicht in Sitemap |
| `/kontakt` | behalten | direkte Kontaktwege und bestehende Lead-Funktion |
| `/demos/handwerker` | vorerst per Rewrite erhalten, noindex pruefen | Demo-Links nicht brechen |
| `/demos/kosmetik` | vorerst per Rewrite erhalten, noindex pruefen | Demo-Links nicht brechen |
| `/demos/lokaler-dienstleister` | vorerst per Rewrite erhalten, noindex pruefen | Demo-Links nicht brechen |

Keine Route wird in diesem Schritt geloescht.

## 5. User Journey

Zielweg:

Besucher erkennt sein Problem -> versteht die STRUKTIVA-Loesung -> sieht einen echten Praxisbeweis -> versteht den Ablauf -> fordert einen Digital-Check oder ein Gespraech an.

Geplante Journey auf der Startseite:

1. Problem: "Digitale Einzelteile arbeiten nicht zusammen."
2. Loesung: STRUKTIVA verbindet Sichtbarkeit, Kundenfuehrung und digitale Ablaeufe.
3. Drei Welten: Sichtbarkeit, Kundenfuehrung, Automatisierung.
4. Praxisbeweis: Salon Karola oder ein anderes echtes Beispiel.
5. Ablauf: Analyse, Strukturplan, Umsetzung, laufende Verbesserung.
6. Digital-Check: Anfrage mit klarem Nutzen und geringem Einstiegshindernis.

Mobile Journey:

- Header reduziert auf Logo, Menue und einen gut sichtbaren Digital-Check-Zugang.
- Sticky Mobile CTA nur fuer `Digital-Check anfragen`.
- Sekundaere Links bleiben sichtbar, aber nicht gleichwertig.
- Horizontale Prozessgrafiken werden vertikal.

## 6. CTA-Hierarchie

Primaerer CTA:

Digital-Check anfragen

Zielroute:

`/digital-check`

Sekundaerer CTA:

Praxisbeispiel ansehen

Zielroute:

`/praxisbeispiele` oder spaeter `/praxisbeispiele/salon-karola`

Tertiaere Kontaktwege:

- Telefon
- E-Mail
- WhatsApp

Regeln:

- Pro Sektion maximal ein primaerer CTA.
- Sekundaerer CTA nur dort, wo Beweis oder Vertiefung sinnvoll ist.
- Keine gleichzeitige Verwendung von `Projekt anfragen`, `Erstgespraech`, `Kurzanalyse`, `Paket anfragen`, `Soforthilfe anfragen` als gleichwertige Buttons.
- Header-CTA: `Digital-Check anfragen`.
- Footer-CTA: `Digital-Check anfragen` plus direkte Kontaktwege.
- Mobile Sticky CTA: `Digital-Check`.

## 7. Farben

Grundwirkung:

- helle Flaechen
- starke schwarze Typografie
- wenige dunkle Abschnitte
- Gold sparsam als hochwertiger Akzent
- keine Schwarz-Gold-Luxus-Optik

Vorbereitete CSS Tokens in `src/styles.css`:

| Token | Wert | Einsatz |
| --- | --- | --- |
| `--background-primary` | `#ffffff` | Hauptflaeche |
| `--background-secondary` | `#f7f5ef` | ruhige Abschnittsflaeche |
| `--background-dark` | `#101010` | gezielte dunkle Abschnitte |
| `--text-primary` | `#111111` | Haupttext |
| `--text-secondary` | `#4a4a45` | Nebentext |
| `--text-inverse` | `#f8f6ef` | Text auf Dunkel |
| `--gold-primary` | `#a87f2a` | primaerer Goldakzent |
| `--gold-muted` | `#d8c28a` | ruhiger Akzent, Flaechenlinie |
| `--gold-border` | `rgba(168, 127, 42, 0.28)` | feine Linien |
| `--surface-light` | `#ffffff` | Komponentenflaeche |
| `--surface-dark` | `#181816` | dunkle Module |
| `--border-subtle` | `rgba(17, 17, 17, 0.1)` | Standardlinien |
| `--focus-state` | `#7a5a16` | Fokuszustand |
| `--success` | `#1f7a4d` | Erfolg |
| `--error` | `#b9402f` | Fehler |

Kontrastregeln:

- `--text-primary` auf `--background-primary`: sehr hoher Kontrast.
- `--text-secondary` auf hellen Flaechen: fuer Fliesstext ausreichend dunkel verwenden.
- Gold nicht als kleiner Fliesstext auf Weiss verwenden, sondern fuer Akzente, Linien, Icons, Overlines oder gefuellte CTA mit dunklem Text.
- Auf dunklem Hintergrund immer `--text-inverse` oder Weissnaehe verwenden.
- Fehler und Erfolg brauchen zusaetzlich Text/Icon, nicht nur Farbe.

## 8. Typografie

Bestehende technische Lage:

- Manrope ist bereits eingebunden und passt zur neuen Richtung.
- Marcellus ist vorhanden, wirkt aber fuer die neue Unternehmensberatung schnell zu dekorativ.
- Keine neue Font-Abhaengigkeit einfuehren.

Empfehlung:

- Primaer Manrope fuer Display, Headlines, Navigation und Fliesstext.
- Marcellus hoechstens als sparsame Sondermarke vermeiden oder spaeter entfernen.

Typografie-Hierarchie:

| Ebene | Token | Wirkung |
| --- | --- | --- |
| Display Headline | `--type-display` | nur fuer starke Startseitenbotschaft oder Kampagnenmoment |
| H1 | `--type-h1` | Seitenversprechen, 2-3 Zeilen maximal |
| H2 | `--type-h2` | Abschnittslogik |
| H3 | `--type-h3` | Modul- und Prozessueberschriften |
| Lead | `--type-lead` | kurze Orientierung nach H1/H2 |
| Fliesstext | `--type-body` | 16px Basis, grosszuegige Zeilenhoehe |
| Eyebrow | `--type-label` | kurze Orientierung, uppercase sparsam |
| Navigation | 14-15px, 600-700 | ruhig und eindeutig |
| Buttons | 14-15px, 700 | klare Aktion |
| Labels | 13-14px, 650 | Formulare und technische UI |
| Zahlen/Stats | Manrope 700-800 | keine eigene Mono-Abhaengigkeit |

Regeln:

- Keine negativen Letter-Spacings als Standard.
- H1 auf Mobile nicht kleiner als lesbare 36px.
- Fliesstext-Lesebreite maximal ca. 720px.
- Keine riesigen Textbloecke; laengere Inhalte in kurze Abschnitte aufteilen.

## 9. Spacing

Vorbereitete Tokens:

| Token | Wert |
| --- | --- |
| `--space-xs` | `0.5rem` |
| `--space-sm` | `0.75rem` |
| `--space-md` | `1rem` |
| `--space-lg` | `1.5rem` |
| `--space-xl` | `2rem` |
| `--space-2xl` | `3rem` |
| `--space-section` | `clamp(4.5rem, 8vw, 7rem)` |
| `--space-section-large` | `clamp(6rem, 10vw, 9rem)` |

Layout-Regeln:

- mobile Aussenabstaende: mindestens 20px.
- Tablet: 32-40px.
- Desktop: 48px oder Container-Gutter.
- Hero: grosszuegig, aber erster sinnvoller Folgebereich muss auf gaengigen Viewports angedeutet bleiben.
- Card-/Panel-Padding: 24px mobil, 32-48px Desktop.
- Formularfelder: 12-16px vertikaler Abstand, klare Fehlermeldung direkt am Feld.

## 10. Layoutsystem

Vorbereitete Container:

- `--container-page`: 1180px
- `--container-wide`: 1360px
- `--container-readable`: 720px
- `--container-gutter`: `clamp(1.25rem, 4vw, 3rem)`

Vorbereitete Klassen:

- `.struktiva-ds-container`
- `.struktiva-ds-container-wide`
- `.struktiva-ds-readable`
- `.struktiva-ds-section`
- `.struktiva-ds-section-large`

Grid-Regeln:

- Standard: 12-Spalten-Denken auf Desktop, aber nicht zwingend sichtbares Raster.
- Loesungswelten: Desktop als 3 starke Bereiche, Tablet 2/1, Mobile vertikal.
- Prozess: Desktop horizontal oder gestaffelt; Mobile vertikal mit klarer Reihenfolge.
- Case Study: Text, Ergebnis, Beweis und Bild nicht in gleichfoermige Karten zerlegen; lieber redaktionelle Dramaturgie.

## 11. Komponenten

Geplante Komponenten:

| Komponente | Zweck | Hinweise |
| --- | --- | --- |
| Header | Hauptnavigation und primaerer CTA | einfache Navigation, kein ueberladenes Dropdown |
| Mobile Navigation | mobile Orientierung | Digital-Check prominent, klare Touch-Ziele |
| Footer | Orientierung, Rechtliches, Kontakt | keine zweite Hauptnavigation mit zu vielen Varianten |
| Primary Button | Digital-Check | hoher Kontrast, Gold sparsam |
| Secondary Button | Praxisbeispiel | ruhig, textnah, nicht gleich laut |
| Text Link | Detailnavigation | sichtbar unterstrichen oder mit Pfeil |
| Section Intro | Abschnittsversprechen | Eyebrow, H2, kurzer Lead |
| Eyebrow | Kontext | kurz, nicht dekorativ inflationaer |
| Problem Statement | Besucherproblem | textstark, wenig Icon-Dekoration |
| Solution Module | eine der drei Loesungswelten | visuell unterscheidbar, markenkonform |
| Process Step | Ablauf | Schrittzahl, Ergebnis, klare Reihenfolge |
| Case Study Preview | Praxisbeweis | echter Kontext, Ergebnis, CTA |
| Testimonial | Vertrauen | nur echte oder klar gekennzeichnete Aussagen |
| Metric | messbarer Beweis | nur belastbare Zahlen |
| CTA Section | Umwandlung | eine primaere Aktion |
| Form Field | Eingabe | Label, Hilfe, Fehler, Fokus |
| Form Status | Feedback | Erfolg/Fehler mit Text und Farbe |
| Breadcrumb | Detailseiten | besonders fuer Praxisbeispiele |
| Sticky Mobile CTA | mobiler Abschluss | nur primaere Aktion |
| System Diagram | Gesamtstruktur | Nodes, Linien, Status |
| Device Mockup | Kundenfuehrung | Smartphone/Browser, keine Fake-Google-Kopie |
| Browser Mockup | Sichtbarkeit | abstrakte Such-/Website-Logik |

Nicht jede Seite nutzt alle Komponenten. Wiederverwendung darf nicht zu identischen Sektionen auf jeder Seite fuehren.

## 12. Visuelle Sprache der drei Loesungswelten

### A. Sichtbarkeit und Kundengewinnung

Aufgabe:

Zeigen, wie Unternehmen gefunden, verstanden und angefragt werden.

Visuelle Mittel:

- helle Browserrahmen
- abstrakte Suchpfade
- Bewertungssterne als kleine Signale
- Kontaktpunkte
- feine Verbindungslinien
- keine direkte Kopie realer Google-Oberflaechen

Farbstimmung:

Weiss, Schwarz, kuehles Hellgrau, Gold nur fuer aktive Kontaktpunkte.

### B. Kundenfuehrung und Kundenbindung

Aufgabe:

Zeigen, wie aus Kontakt Beziehung, Wiederkehr und Vertrauen entsteht.

Visuelle Mittel:

- Smartphone-Darstellungen
- Kundenkarten
- QR-Prozess
- Statusfortschritt
- Kontaktverlauf
- warme helle Flaechen

Farbstimmung:

Weiss, warmes Offwhite, Schwarz, gedämpftes Gold.

### C. Digitale Ablaeufe und Automatisierung

Aufgabe:

Zeigen, wie Anfragen, Daten, Aufgaben, Antworten und Nachfassen strukturiert werden.

Prozessmodell:

Neue Anfrage -> Datensatz -> Aufgabe -> Antwort -> Nachfassen -> Abschluss -> Bewertungsanfrage

Visuelle Mittel:

- Nodes
- Verbindungslinien
- Prozessdiagramme
- Statusanzeigen
- Dashboard-Ausschnitte
- leichte Bewegung entlang eines Workflows

Farbstimmung:

Helle technische Flaechen, gezielte dunkle Panels, Gold nur als Status- oder Fokuslinie.

## 13. Animation und Motion

Geeignete Bewegungen:

- kurze Fade-/Slide-Reveals beim Eintritt in den Viewport
- Prozesslinien, die schrittweise sichtbar werden
- dezente Parallax-Tiefe fuer Systemdiagramme
- Hover-Zustaende fuer Buttons und Links
- Formularstatus mit ruhiger Rueckmeldung

Nicht einsetzen:

- Dauer-Glow ohne Funktion
- starke Zooms
- Partikel
- langsam schwebende Dekorationen
- Animationen, die den Inhalt verdecken

Regeln:

- Motion muss Orientierung verbessern.
- Standarddauer: 160-520ms.
- Easing: `--motion-ease`.
- `prefers-reduced-motion` bleibt Pflicht.
- Auf Mobilgeraeten Prozessanimationen reduzieren und keine rechenintensiven Dauerbewegungen.

## 14. Responsive Verhalten

Breakpoints als Plan:

| Kontext | Breite | Verhalten |
| --- | --- | --- |
| kleine Smartphones | 320-374px | einspaltig, kurze H1, CTA untereinander |
| normale Smartphones | 375-767px | einspaltig, Sticky CTA, vertikale Prozesse |
| Tablets | 768-1023px | 2-Spalten wo sinnvoll, Navigation pruefen |
| kleine Laptops | 1024-1279px | kompakte Desktop-Navigation |
| Desktop | 1280-1535px | Standardlayout |
| grosse Monitore | ab 1536px | max-width respektieren, keine endlos breiten Texte |

Spezialregeln:

- Horizontale Prozesse werden mobil immer vertikal.
- Browser-/Device-Mockups duerfen mobil nicht breiter als Viewport sein.
- Lange deutsche Headlines brauchen Umbruch- und Max-Width-Regeln.
- Buttons haben auf Mobile mindestens 44px Hoehe.
- Formulare bleiben einspaltig auf Mobile.

## 15. Accessibility-Regeln

Grundregeln:

- Jede Seite hat genau eine klare H1.
- Fokuszustand ist sichtbar; vorbereiteter Token: `--focus-state`.
- Buttons und Links haben eindeutige Beschriftungen.
- Keine Information nur ueber Farbe.
- Formulare haben Labels, Hilfetexte und Fehlermeldungen.
- Fehlermeldungen stehen am Feld und als Gesamtstatus, wenn noetig.
- `aria-live` fuer Formularstatus weiter nutzen.
- Reduced Motion respektieren.
- Bilder erhalten sinnvolle Alt-Texte oder bewusst leere Alt-Texte, wenn dekorativ.
- Kontraste fuer Text, Buttons und Fokus vor Launch pruefen.

Bereits vorbereitet:

- globaler `:focus-visible`-Grundzustand in `src/styles.css`.
- bestehende Reduced-Motion-Regeln bleiben erhalten.

## 16. Regeln gegen generische KI-Template-Optik

Nicht verwenden:

- generische SaaS-Hero-Karten ohne echten STRUKTIVA-Bezug
- "AI Agentur" Bildsprache mit Bots, Neon, Partikeln und Pseudo-Hologrammen
- beliebige Glassmorphism-Karten
- uebertriebene Goldverlaeufe
- ueberall Icons statt klarer Sprache
- Stockfoto-Look ohne konkreten Kontext
- austauschbare Dashboard-Mosaike
- wiederholte Sektionen mit gleicher Card-Anordnung

Stattdessen:

- echte Praxisbeispiele priorisieren.
- Systemzusammenhaenge mit reduzierten Diagrammen erklaeren.
- starke Typografie und Weissraum nutzen.
- Bilder nur einsetzen, wenn sie Beweis, Person oder Kontext tragen.
- wenige, merkbare visuelle Motive je Loesungswelt.

## 17. Migrationsstrategie bestehender Seiten

Phase 1: Grundlage

- Designsystem und Routenplan dokumentieren.
- Tokens vorbereiten.
- Keine Seiten loeschen.
- Build pruefen.

Phase 2: Technische Struktur

- `src/main.jsx` in kleinere Module aufteilen.
- zentrale Routendefinition einfuehren.
- vorhandene Kontakt-/Lead-Logik isolieren.
- neue Designsystem-Komponenten neben bestehenden Komponenten aufbauen.

Phase 3: Neue Routen parallel aufbauen

- `/loesungen` anlegen.
- `/praxisbeispiele` anlegen.
- `/digital-check` anlegen.
- `/ueber-uns` behutsam anpassen.
- `/kontakt` stabil halten.

Phase 4: SEO und Redirects

- `/leistungen` -> `/loesungen` als Redirect oder Uebergangsseite.
- `/demos` und `/referenzen` -> `/praxisbeispiele` konsolidieren.
- statische Demo-Routen zunaechst erhalten.
- Sitemap aktualisieren.
- Canonicals aktualisieren.
- Schema.org von "Unternehmensarchitektur" auf "STRUKTIVA Digitale Unternehmensberatung" umstellen.

Phase 5: Launch-Pruefung

- Build.
- Browserpruefung Desktop/Mobile.
- Formularvalidierung ohne echte Nachricht.
- Consent/Tracking pruefen.
- rechtliche Texte final gegen neue Positionierung und Dienste pruefen.

## Technische Vorbereitung in diesem Schritt

Ergaenzt in `src/styles.css`:

- zentrale Farb-Tokens inklusive der geforderten Background-, Text-, Gold-, Surface-, Border-, Focus-, Success- und Error-Tokens.
- Typografie-Tokens fuer Display, H1, H2, H3, Lead, Body, Small und Label.
- Spacing-Tokens von `xs` bis `section-large`.
- Container-Tokens fuer Page, Wide, Readable und Gutter.
- Radius-, Shadow- und Motion-Tokens.
- neutrale Container-/Section-Utility-Klassen fuer spaetere neue Seiten.
- sichtbarer globaler `:focus-visible`-Grundzustand.

Diese Grundlagen sind additiv. Sie ersetzen keine bestehende Route und bauen keine Seite neu.
