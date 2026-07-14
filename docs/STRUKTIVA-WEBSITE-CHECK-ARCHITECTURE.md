# STRUKTIVA Website-Check: sichere Architektur

Stand: 14. Juli 2026
Status: Schritt 29, Phase D als deaktivierte und vollstaendig gemockt getestete API-Pipeline
Marke: STRUKTIVA Digitale Unternehmensberatung

## 1. Projektziel

Die Route `/digital-check` soll spaeter einen automatischen Website-Check fuer genau eine oeffentlich erreichbare Unternehmenswebsite erhalten. Er ordnet technische und auf der geprueften Startseite erkennbare Merkmale verstaendlich ein. Er erzeugt keinen erfundenen STRUKTIVA-Gesamtscore und ersetzt nicht den persoenlichen STRUKTIVA Digital-Check.

## 2. Abgrenzung

Pruefbar sind nur oeffentlich sichtbare oder technisch abrufbare Eigenschaften. Nicht pruefbar sind interne Ablaeufe, Mitarbeiterprozesse, CRM-Nutzung, Kundendaten, Nachfassprozesse, Kundenzufriedenheit und die Qualitaet interner Systeme.

`NICHT ERKANNT` bedeutet: Auf dem geprueften Dokument wurde das Merkmal nicht eindeutig erkannt. Es bedeutet nicht, dass es auf der Website sicher nicht existiert. `NICHT PRUEFBAR` kennzeichnet technische oder methodische Grenzen. Automatischer Website-Check und persoenlicher Digital-Check werden in Ueberschrift, Grenzen und CTA klar getrennt.

## 3. MVP-Umfang

Der MVP nimmt genau eine URL an, ohne E-Mail, Konto oder Registrierung. Er prueft genau das normalisierte Startseitendokument des Origins, nicht die gesamte Website.

Technische Grundpruefung:

- sichere URL-, DNS- und IP-Pruefung
- Erreichbarkeit, finaler HTTP-Status und Redirect-Kette
- HTTPS und finaler Origin
- begrenzte Antwortzeit und ein begrenztes HTML-Dokument

PageSpeed Insights wird fuer `mobile` und `desktop` mit `PERFORMANCE`, `ACCESSIBILITY`, `BEST_PRACTICES` und `SEO` geplant. Nur diese echten Lighthouse-Werte duerfen als 0 bis 100 angezeigt werden; intern bleibt der gelieferte Wert 0 bis 1 erhalten. `null` wird als nicht verfuegbar behandelt.

Maximal 20 eigene Regeln:

1. Seitentitel vorhanden
2. Seitentitellaenge als vorsichtiger Review-Hinweis
3. Meta Description vorhanden
4. genau eine erkennbare H1
5. Dokumentensprache gesetzt
6. Viewport-Meta vorhanden
7. valider Canonical erkannt
8. HTTPS am finalen Ziel aktiv
9. Impressum-Link erkannt
10. Datenschutz-Link erkannt
11. Telefonnummer erkannt, bevorzugt `tel:`
12. E-Mail-Kontakt erkannt, bevorzugt `mailto:`
13. WhatsApp-Link erkannt
14. Formular erkannt
15. klarer Kontaktlink oder CTA erkannt
16. `robots.txt` erreichbar
17. Sitemap in `robots.txt` oder am Standardpfad erkannt
18. JSON-LD-Strukturdaten erkannt
19. Bewertungs- oder Vertrauenssignal heuristisch erkannt
20. mobile Nutzbarkeit anhand mobiler Lighthouse-Ergebnisse eingeordnet

Heuristische Regeln erzeugen keine harte Tatsachenbehauptung.

## 4. Nicht-MVP

Nicht enthalten sind Mehrseiten-Crawl, PDF-Bericht, KI-Auswertung, Nutzerkonto, Datenbank, Verlauf, E-Mail-Gate, Kontaktaufnahme, Konkurrenzvergleich, interner Prozesscheck und eigener Gesamtscore. JavaScript fremder Seiten wird nicht ausgefuehrt. Externe Assets, PDFs, Archive, Videos und andere Binaerdateien werden nicht analysiert.

## 5. Bestehende technische Architektur

Das Projekt ist eine Vite-5-/React-18-SPA mit ES-Modulen. `App.jsx` waehlt Seiten ueber `routeConfig.js` und `pageRegistry.jsx`; `AppShell.jsx` liefert Header, Footer, Cookie-Consent und WhatsApp-Link. Vercel baut `dist`; Nicht-Datei-/Nicht-API-Routen werden auf `index.html` geschrieben.

`/digital-check` rendert acht Komponenten: Hero, Intro, sechs Prueffelder, Ablauf, Erwartungsmanagement, Eignung, STRUKTIVA-Haltung mit Salon-Karola-Bezug und Abschluss-CTA. Primaeres Conversion-Ziel ist `/kontakt#lead-form`; weitere Ziele sind `/kontakt`, `#ablauf` und das Salon-Karola-Praxisbeispiel.

`api/leads.js` nutzt einen Vercel-Default-Handler `(req, res)`, JSON-Helfer, Methodenpruefung, serverseitige Environment-Variablen und zentrale Fehlerbehandlung. Lead-Route, Resend, Payload und Formular bleiben getrennt und unveraendert. Deren lokales `Map`-Rate-Limit ist bei serverlosen Instanzen kein ausreichender alleiniger Produktionsschutz.

Lokal wurden Node.js 24.14.0 und npm 11.9.0 ermittelt; `package.json` legt keine Engine fest. Vor Umsetzung ist die Vercel-Node-Version zu bestaetigen oder festzulegen. Der neue ESM-Handler braucht die Node.js Runtime fuer DNS und Core-HTTP(S).

Bestehende serverseitige Variablen sind `RESEND_API_KEY`, `SMTP_FROM`, `LEAD_RECEIVER_EMAIL` und optional `LEAD_WEBHOOK_URL`. Neu vorgesehen ist allein `PAGESPEED_API_KEY`.

Tracking ist in `cookieConsent.jsx` gekapselt. Google wird erst nach Statistik- oder Marketing-Consent geladen, Pinterest nur nach Marketing-Consent. `generate_lead` wird nach erfolgreichem Formular-Submit gesendet. Website-Check-Events muessen spaeter dieselbe Consent-Schicht verwenden.

## 6. Einbauort auf /digital-check

Empfohlene Reihenfolge:

1. bestehender Hero
2. automatischer Website-Check
3. dynamische Ergebnisse
4. Grenzen der automatischen Pruefung
5. bestehender Inhalt ab `DigitalCheckIntro` als persoenlicher Digital-Check
6. bestehende CTA-Fuehrung

Der neue Bereich kommt nach `DigitalCheckHero` und vor `DigitalCheckIntro`, spaeter mit `#website-check`. `#ablauf` bleibt beim persoenlichen Bereich. Kein zweites Lead-Formular.

Empfohlene Komponenten unter `src/components/website-check/`:

- `WebsiteCheckSection.jsx`: Zustand und API-Orchestrierung
- `WebsiteCheckForm.jsx`: Label, URL, Validierung und Submit
- `WebsiteCheckProgress.jsx`: reale Phasen
- `WebsiteCheckResults.jsx`: Kopf, Kategorien, Prioritaeten, Grenzen
- `WebsiteCheckPageSpeed.jsx`: Mobil/Desktop
- `WebsiteCheckCategory.jsx`: semantische Pruefliste
- `WebsiteCheckPersonalCta.jsx`: persoenlicher Uebergang

## 7. API-Request

Route: `POST /api/website-check`, `Content-Type: application/json`.

```json
{ "url": "https://beispielbetrieb.de/" }
```

Nur `url` ist erlaubt. Der Wert ist ein String bis 2048 Zeichen; der Body ist vor dem Parsing auf 4096 Bytes begrenzt. API-Version 1 steht im Response; inkompatible spaetere Versionen erhalten `/api/v2/website-check`.

## 8. API-Response

```json
{
  "apiVersion": "1",
  "resultVersion": "1",
  "partial": false,
  "request": {
    "submittedUrl": "beispielbetrieb.de",
    "normalizedUrl": "https://beispielbetrieb.de/",
    "checkedAt": "2026-07-14T12:00:00.000Z"
  },
  "status": {
    "reachable": true,
    "httpStatus": 200,
    "finalUrl": "https://www.beispielbetrieb.de/",
    "https": true,
    "responseTimeMs": 420,
    "redirectCount": 1,
    "htmlAvailable": true
  },
  "pagespeed": {
    "mobile": { "status": "available", "performance": 0.71, "accessibility": 0.96, "bestPractices": 0.93, "seo": 1 },
    "desktop": { "status": "available", "performance": 0.92, "accessibility": 0.96, "bestPractices": 0.93, "seo": 1 }
  },
  "checks": [],
  "recommendations": [],
  "limitations": [],
  "warnings": [],
  "cache": { "hit": false, "ageSeconds": 0 }
}
```

Query und Fragment werden nie zurueckgegeben. `finalUrl` ist ein sicherer Origin. Faellt PageSpeed ganz oder teilweise aus, bleiben sichere HTTP-/HTML-Ergebnisse erhalten: HTTP 200, `partial: true`, Strategie-Status `unavailable`, Warnung und Grenze. Scheitert der sichere eigene Abruf, ist der Request fatal und PageSpeed wird nicht als Ersatz gestartet.

## 9. Fehlerstruktur

```json
{
  "apiVersion": "1",
  "error": {
    "code": "BLOCKED_DESTINATION",
    "message": "Diese Website-Adresse kann nicht geprueft werden.",
    "retryable": false,
    "requestId": "opaque-id"
  }
}
```

Dieser Abschnitt beschreibt die urspruengliche Zielarchitektur vor Phase D. Die tatsaechlich implementierte und getestete Fehlerabbildung ist verbindlich unter "Umgesetzter Stand nach Schritt 29: Phase D" dokumentiert. Insbesondere verwenden `DNS_LOOKUP_FAILED` und `TOO_MANY_REDIRECTS` dort HTTP 502. `RATE_LIMITED` und `PAGESPEED_UNAVAILABLE` sind weiterhin nicht implementierte Zielarchitektur.

Nie ausgegeben werden Stacktraces, IPs, interne Hosts, API-Keys, Rohantworten oder Providerdetails.

## 10. URL-Normalisierung

Mit WHATWG `URL`, nicht mit komplexer Regex:

1. trimmen und Laenge pruefen
2. bei fehlendem Schema `https://` ergaenzen
3. nur exakt `http:`/`https:`
4. Zugangsdaten, leeren Host und Steuerzeichen ablehnen
5. Host durch Parser kleinschreiben/Punycode-normalisieren
6. nur HTTP/80 und HTTPS/443; Standardport entfernen
7. Query und Fragment entfernen
8. fuer MVP jeden Pfad auf `/` reduzieren
9. kanonischen Origin erneut auf 2048 Zeichen begrenzen

Damit werden Datenschutzrisiken in Pfaden/Queries reduziert und Ergebnisse vergleichbar. Explizites HTTP bleibt erhalten, um den echten HTTPS-Redirect zu bewerten; ohne Schema startet HTTPS. Das UI sagt, dass die Startseite geprueft wird.

## 11. SSRF-Sicherheitskonzept

Fail closed:

- nur HTTP(S), Ports 80/443, keine Zugangsdaten
- direkte IP-Literale vor DNS kanonisieren und klassifizieren
- `localhost`, Single-Label-Hosts, `.local` und interne/Metadata-Namen ablehnen
- alle A-/AAAA-Ergebnisse muessen global oeffentlich und routbar sein; ein privates Ergebnis blockiert den Host
- alternative Integer-, Hex-, Oktal- und gemischte IPv4-Formen ablehnen
- IPv4-mapped IPv6 separat pruefen
- keine Cookies, Authorization- oder Nutzerheader und keine Proxy-Umgebung
- neutraler User-Agent, HTML-Accept, `Accept-Encoding: identity`
- automatische Redirects aus

Blockiert werden mindestens `0.0.0.0/8`, `10/8`, `100.64/10`, `127/8`, `169.254/16`, `172.16/12`, `192.0.0/24`, `192.0.2/24`, `192.168/16`, `198.18/15`, `198.51.100/24`, `203.0.113/24`, `224/4`, `240/4`, `::/128`, `::1/128`, `fc00::/7`, `fe80::/10`, `ff00::/8`, IPv4-mapped Entsprechungen sowie `169.254.169.254`. Vor Phase G wird dies gegen aktuelle IANA-Special-Purpose-Registries getestet.

OWASP empfiehlt bei freien externen Zielen die Pruefung aller A-/AAAA-Adressen und deaktivierte Redirects: <https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html>

## 12. Redirect-Pruefung

301, 302, 303, 307 und 308 werden manuell verarbeitet, maximal dreimal. Relative `Location` wird gegen die aktuelle URL aufgeloest. Vor jedem Folgerequest laufen Protokoll-, Port-, Host-, DNS- und IP-Pruefung erneut. Redirects auf private/lokale Ziele, verbotene Ports oder Protokolle werden blockiert. Schleifen und ein vierter Redirect ergeben `TOO_MANY_REDIRECTS`. Keine sensitiven Header werden weitergereicht.

## 13. DNS-/IP-Pruefung

`dns.promises.lookup(host, { all: true, verbatim: true })` liefert alle Runtime-Adressen. Jede wird kanonisiert und klassifiziert. Die Verbindung darf danach nicht frei erneut aufloesen: Node `http.request`/`https.request` verwendet den Originalhost fuer Host-Header und TLS-SNI, aber eine kontrollierte `lookup`-Funktion liefert exakt eine zuvor freigegebene IP. So bleiben DNS-Pruefung und TCP-Ziel zusammen; je Redirect wird neu geprueft und gebunden.

Kann diese Bindung in der echten Vercel-Node-Runtime nicht durch Integrationstests belegt werden, darf der Fremdabruf nicht live gehen. Sichere Alternative ist ein dedizierter Fetch-Service mit Egress-Policy und blockiertem Privat-/Metadata-Netz. PageSpeed ist eine separate Fetch-Grenze und kann nicht an die STRUKTIVA-DNS-IP gebunden werden; es startet erst nach erfolgreicher lokaler Freigabe.

## 14. Request-Limits

- Body 4096 Bytes, URL 2048 Zeichen
- Connect 3 Sekunden, Einzelrequest 5 Sekunden
- eigener HTTP-/Redirect-Ablauf insgesamt 10 Sekunden
- maximal 3 Redirects
- HTML maximal 1.5 MiB gelesene Bytes
- `robots.txt` maximal 128 KiB/3 Sekunden
- Sitemap nur Erreichbarkeit/Hinweis, maximal 128 KiB, kein Crawl
- PageSpeed mobil/desktop parallel, je 25 Sekunden
- internes Gesamtbudget 35 Sekunden; Function `maxDuration` zunaechst 40 Sekunden nach Tarifpruefung

`Content-Length` und gestreamte Bytes werden begrenzt. `Accept-Encoding: identity` mindert Dekompressionsrisiken. Nur `text/html`/`application/xhtml+xml`; ein fehlender Content-Type wird fail closed abgelehnt. Keine PDFs, Medien, Archive oder externen Ressourcen.

Vercel erlaubt `maxDuration`, aber Tarif und Fluid Compute sind vor Phase C zu bestaetigen: <https://vercel.com/docs/functions/configuring-functions/duration>

## 15. PageSpeed-Integration

Serverseitig: `GET https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed` mit `url`, `strategy=mobile|desktop`, je vier wiederholten `category`-Parametern, `locale=de` und `key=PAGESPEED_API_KEY`.

Google dokumentiert v5, beide Strategien und die vier Kategorien; ohne Kategorie laeuft nur Performance. Scores stehen in `lighthouseResult.categories` und koennen `null` sein: <https://developers.google.com/speed/docs/insights/rest/v5/pagespeedapi/runpagespeed>

Der Key bleibt in Vercel, nie in Git, Browser, Logs oder Fehlern. Obwohl Google Aufrufe ohne Key erlaubt, startet Produktion ohne Key mit einem PageSpeed-Teilergebnis, um anonyme Quoten nicht zu verbrauchen. Key-Restriktionen, Quota und Alarme sind in Google Cloud zu konfigurieren. Da Google die CrUX-Daten in PSI kuenftig entfernen will, nutzt der MVP nur Lighthouse-Labdaten: <https://developers.google.com/speed/docs/insights/v5/get-started>

Provider-Timeout, 429, 5xx, invalides JSON, `runtimeError`, fehlende Kategorie und `null` werden je Strategie als `unavailable` behandelt. Eigene Checks bleiben bestehen.

## 16. HTML-Analyse

Es existiert kein serverseitiger HTML-Parser. Option A entfaellt. Option B, ein kleiner Scanner, ist nur fuer engste Metadaten geeignet und darf HTML nicht mit grossen Regex-Ausdruecken nachbauen. Empfehlung fuer eine spaetere, separat freizugebende Analysephase ist Option C: eine kleine standardsorientierte Parser-Dependency wie `parse5`. Schritt 27 installiert nichts; Phase A und Phase B brauchen keinen Parser.

Zuverlaessig strukturell erkennbar sind Titel, Description, H1-Anzahl, `lang`, Viewport, Canonical, Links, Formulare und JSON-LD. Telefon, E-Mail, WhatsApp, CTA, Pflichtlinks und Trust bleiben heuristisch. CSS-Sichtbarkeit, clientseitig geladene Inhalte, Rechtswirksamkeit und echte Nutzerfuehrung sind nicht sicher pruefbar.

## 17. Ergebnisdatenmodell

```json
{
  "id": "meta-description",
  "category": "visibility",
  "title": "Meta Description",
  "status": "good",
  "summary": "Eine Meta Description wurde erkannt.",
  "evidence": "meta[name=description] mit Inhalt erkannt",
  "recommendation": null,
  "source": "html",
  "confidence": "high"
}
```

Status: `good` -> GUT, `review` -> PRUEFEN, `priority` -> PRIORITAET, `not_detected` -> NICHT ERKANNT, `not_checkable` -> NICHT PRUEFBAR. Die Trennung ist praeziser als ein einzelnes `unknown`. Quellen: `http`, `html`, `pagespeed`. Kategorien: technische Grundlage, Sichtbarkeit, Kundenfuehrung, Vertrauen/Pflichtinformationen, mobile Nutzung und naechste Schritte.

## 18. Empfehlungslogik

Deterministische Regeln, keine KI. Reihenfolge: sichere `priority`-Befunde, kundenfuehrungs-/sichtbarkeitsnahe `priority`, danach `review`. `not_checkable` erzeugt eine Grenze statt automatisch einer Empfehlung. Aehnliches wird dedupliziert. Maximal fuenf, bevorzugt drei Empfehlungen nach Wirkung, Konfidenz und stabiler Regel-ID. Keine Garantien, Strafandrohungen oder behaupteten Kundenverluste.

## 19. Datenschutz

Pfade und Queries koennen Namen, Tokens oder Suchbegriffe enthalten. Der MVP entfernt Pfad, Query und Fragment vor Netzaufruf, Cache, Logging und Tracking. Es gibt keine E-Mail-Pflicht und keine Marketing-Einwilligung fuer das Ergebnis.

Vor Produktivstart muss die Datenschutzerklaerung fachlich/juristisch Zweck und Rechtsgrundlage, Google/PageSpeed, moeglichen Drittlandbezug, technische Logs, Cache-Dauer und berechtigte Einreichung oeffentlicher Websites abdecken. Schritt 25 aendert keinen Rechtstext.

## 20. Speicherung

Keine dauerhafte Speicherung von Domain, Ergebnis oder HTML. HTML besteht nur begrenzt im Function-Speicher und wird verworfen. Logs: Request-ID, Ereignis, grober Dauer-Bucket, Cache-Hit, Partial-Status, interner Fehlercode. Keine URL, Domain, IP, Query, HTML, DNS-Antwort oder Secrets. Falls spaeter Korrelation noetig ist, nur kurzlebiger HMAC des Origins mit rotierbarem Secret, kein einfacher Hash.

## 21. Rate Limiting

MVP ohne Zusatzinfrastruktur:

- Vercel-WAF-Regel exakt auf `POST /api/website-check`
- Startwert 3 Anfragen je 10 Minuten pro IP/JA4, zuerst Log-Modus, dann 429
- globales Kostenbudget und hoechstens zwei aktive externe Teilabfragen je Function
- `Retry-After`; Client-Sperre ist nur UX
- Challenge nur bei belegtem Missbrauch

Vercel dokumentiert Fixed Window auf allen Plaenen, IP/JA4 und maximal zehn Minuten; Aktivierung/Kosten im Dashboard bestaetigen: <https://vercel.com/docs/vercel-firewall/vercel-waf/rate-limiting>

In-Memory ist nur Zusatzschutz. Honeypot bringt bei einem URL-Feld wenig; kein Proof-of-Work. Robuste Produktion: WAF plus persistenter Redis/KV-Token-Bucket mit HMAC-IP/Origin, per-Origin-Cooldown, globalem Parallelitaetsbudget, Cache-Single-Flight, adaptiver Challenge, Alarmen und PageSpeed-Kill-Switch. Das braucht Infrastruktur- und Datenschutzentscheidung.

## 22. Cache

Empfohlen: serverseitig 30 Minuten. Key `sha256("website-check:v1:" + normalizedOrigin)`. Nur sanitierte Response ohne `submittedUrl`, HTML, IP oder Provider-Rohdaten. Fehler nicht cachen.

`Cache-Control` fuer POST und Browser/shared Cache ist nicht die primaere Loesung; Instanz-`Map` ist nur Best Effort. Vercel Runtime Cache ist bevorzugt, falls Plan, regionale Semantik und `@vercel/functions` freigegeben werden. Er bietet TTL, ist pro Projekt/Umgebung isoliert und nutzungsabhaengig berechnet: <https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#getcache>

Ohne freigegebenen Shared Cache muessen WAF und PageSpeed-Budget konservativer sein. Redis/KV ist fuer globale Deduplizierung und praezise Quoten die robuste Option.

## 23. Tracking

Geplant: `website_check_started` nach valider Eingabe vor API-Aufruf, `website_check_completed` bei Voll-/Teilergebnis, `website_check_failed` bei Fehler, `website_check_personal_cta_clicked` beim persoenlichen CTA.

Alle Events laufen ueber die bestehende Consent-Schicht. Erlaubt: `result_status`, `duration_bucket`, `mobile_performance_bucket`, `priority_count`. Verboten: URL, Domain, Pfad, Query, E-Mail, IP, Seitentitel, Firma, Evidence, Fehlerdetail, Request-ID.

## 24. Accessibility

Sichtbares Label "Welche Website sollen wir pruefen?", `type=url`, Beispiel, Hilfetext und verknuepfte Fehler. Enter sendet; Button "Website pruefen" ist waehrend des Checks deaktiviert. `aria-live=polite` meldet Phase/Abschluss. Nach Erfolg Fokus auf Ergebnisueberschrift, nach Fehler auf Zusammenfassung/Feld. Status immer als Text plus Symbol, nicht nur Farbe. Semantische Ueberschriften/Listen, PageSpeed mit Text und Zahl.

Phasen: Adresse pruefen, Website sicher aufrufen, Grundlagen analysieren, Mobil-/Desktopwerte pruefen, Ergebnisse einordnen. Keine erfundene Prozentzahl. Keine dauerhafte Animation; Reduced Motion wird respektiert.

## 25. Responsive Strategie

Viewports: `360x740`, `390x844`, `430x932`, `768x1024`, `1024x768`, `1280x800`, `1440x900`, `1728x1000`.

Bis 760 px stehen Feld/Button und alle Ergebnisse einspaltig; Mobil/Desktop nacheinander, keine Tabelle. 761 bis 1100 px nutzt stabile Grid-Minima und faellt bei Bedarf auf Zeilen um. Ab 1101 px kompakte Eingabezeile und zwei PageSpeed-Spalten; Pruefungen bleiben ruhige Listen, kein Karten-Dashboard. `min-width: 0`, begrenzte Tracks und umbrechbare Texte verhindern Overflow.

## 26. Testmatrix

Nur Mocks/kontrollierte Ziele, nie reale interne Systeme.

- Gueltig: `example.com`, HTTP/HTTPS, www, Unterseite, Query/Fragment, internationale Domain, Standardports, Leerraum/Grossschreibung.
- Ungueltig: leer, Nicht-String, Text, ungueltige/zu lange Domain, Zugangsdaten, Steuerzeichen, falscher Port, `file:`, `ftp:`, `javascript:`, `data:`, `gopher:`.
- IP-Tricks: Integer, Hex, Oktal, gemischt, IPv4-mapped IPv6.
- Blockiert: localhost, Single-Label, `.local`, 0.0.0.0, 127.0.0.1, ::1, private IPv4/IPv6, CGNAT, Link-Local, Metadata, Multicast, Reserved, gemischtes DNS.
- SSRF: DNS-Rebinding-Mock, Redirect auf privat/lokal/verbotenen Port/Schema, vierter Redirect, Loop.
- HTTP: DNS fehlt, refused, TLS-Fehler, Timeout, 200/204/403/404/429/500, falscher/fehlender Content-Type.
- Limits: PDF/Bild/Video/Archiv, zu grosser Header/Stream, komprimierte Antwort, leeres/invalides HTML, robots/sitemap gross/timeout.
- Regeln: alle 20 mit positiv, negativ, unklar; mehrfacher H1, duplizierte Meta-Tags, relative Links, clientseitige Grenzen.
- PageSpeed: vollstaendig, `null`, fehlende Kategorie, invalides JSON, Timeout, 429/Quota, 5xx, `runtimeError`, nur eine Strategie erfolgreich.
- API: nur POST, Bodylimit, invalides JSON, unbekannte Felder, 429/Retry-After, Cache Hit/Miss/Single-Flight, keine Secrets in Fehler/Log.
- UI: Consent an/aus, keine URL im Tracking, Tastatur, Fokus, Screenreader, Reduced Motion, acht Viewports, lange Domain/Fehler, Voll-/Partial-/Fehlerzustand.

## 27. Kosten-/Quotenrisiken

| Thema | Klasse | Konsequenz |
| --- | --- | --- |
| Ein begrenzter HTML-Abruf | ACCEPTABLE FOR MVP | harte Zeit-/Groessenlimits |
| Zwei PageSpeed-Aufrufe je Cache-Miss | REQUIRES LIMIT | WAF, 30-Minuten-Cache, Quota-/Kostenalarm |
| 35-40 Sekunden Function-Budget | REQUIRES BUSINESS DECISION | Tarif, Fluid Compute, `maxDuration` bestaetigen |
| Provider-Quota/API-Key | REQUIRES LIMIT | Key beschraenken, Quota beobachten, Partial Result |
| Freie externe URLs/SSRF | REQUIRES LIMIT | Fail Closed, IP-Bindung, Redirect-Revalidierung |
| Harte Egress-Isolation | REQUIRES EXTERNAL SERVICE | falls Bindung auf Vercel nicht belegbar |
| Missbrauch/Parallelitaet | REQUIRES LIMIT | WAF, Budget, Cache, Kill-Switch |
| Globales persistentes Limit | REQUIRES EXTERNAL SERVICE | Redis/KV oder geeigneter Dienst |
| Cache/Drittanbieter | REQUIRES BUSINESS DECISION | Tarif, Datenschutz, Region, Betrieb |

Keine unbelegten Kostenbetraege. Vor Phase C: Google-Quota, Vercel-Tarif, Runtime-Cache-Preis und Alarmgrenzen entscheiden.

## 28. Entwicklungsphasen

- Phase A: API-Grundgeruest, Schema, Normalisierung, IP-Klassifikation, DNS-/Redirect-Sicherheitsbausteine; nur Mocks.
- Phase B: gebundener HTTP(S)-Abruf, DNS-/IP-Pinning, Redirects sowie Zeit-, Typ- und Groessenlimits; ausschliesslich gemockte Netzwerktests.
- Phase C: Parserentscheidung, begrenzte HTML-Analyse und deterministische Regeln; weiterhin ohne sichtbare Aktivierung.
- Phase D: PageSpeed mobil/desktop, Timeout, Partial Result, sanitierte Abbildung.
- Phase E: Formular, Phasenanzeige, Fehler- und Fokuszustaende.
- Phase F: Ergebnis, Empfehlungen, Grenzen, persoenlicher CTA.
- Phase G: Consent-Tracking, WAF, freigegebener Cache, Observability, Kill-Switch.
- Phase H: Sicherheitsabnahme, kontrollierte oeffentliche Ziele, Last/Quota, Accessibility, Responsive und Live.

Jede Phase ist einzeln testbar und commitbar. Kein produktiver Fremdabruf vor Sicherheits-Gate.

## 29. Offene Entscheidungen

- Vercel-Plan, Fluid Compute, Node-Version, Region
- Nachweis der DNS-IP-Bindung in Produktion
- Parser-Dependency, empfohlen `parse5`
- Google-Projekt, Key-Restriktionen, Quota, Alarme
- WAF-Regel/Startlimit und Monitoring
- Runtime Cache versus Redis/KV, Kosten/Datenregion
- juristische Datenschutzpruefung
- erlaubte Testdomains und Kill-Switch
- spaetere Unterseitenpruefung

## 30. Klare Empfehlung fuer Schritt 26

Nur Phase A: `POST /api/website-check` als noch nicht extern abrufendes API-Grundgeruest plus kleine serverseitige Module fuer Request-Parsing, Origin-Normalisierung, Protokoll-/Portregeln, IP-Klassifikation, DNS-Entscheidung und versionierte Fehler. Netzwerkoperationen werden ueber injizierte Adapter gemockt. Kein PageSpeed, kein produktiver Fremdabruf, keine UI.

Abnahme Schritt 26: URL-Matrix deterministisch getestet; private/lokale/spezielle/alternative IPs blockiert; Redirect-Revalidierung isoliert getestet; keine Secrets/Roh-URLs/IPs in Clientfehlern oder Logs; `api/leads.js`, Consent, Tracking und `/digital-check` unveraendert; Build/Browsercheck erfolgreich. Keine Dependency, solange Node-Bordmittel belastbar reichen; andernfalls vor Code explizite Dependency-Entscheidung.

## 31. Umgesetzter Stand nach Schritt 26: Phase A

Phase A ist als standardmaessig deaktiviertes, rein serverseitiges Sicherheitsgrundgeruest umgesetzt. Es gibt weiterhin keinen DNS-Aufruf, keinen Fremdrequest, keinen Redirect-Abruf, keinen PageSpeed-Aufruf und keine sichtbare Website-Aenderung.

### Umgesetzte Dateien

- `api/website-check.js`: einziger oeffentlicher Vercel-Handler
- `api/_website-check/config.js`: API-Version, Limits, Redirectlimit und Feature-Flag
- `api/_website-check/errors.js`: stabile interne Fehlerdefinitionen
- `api/_website-check/request.js`: Content-Type, begrenzter Rohstream, JSON und Request-Schema
- `api/_website-check/normalize-url.js`: WHATWG-Normalisierung auf Origin `/`
- `api/_website-check/ip-policy.js`: numerische IPv4-/IPv6-Klassifikation mit Node-Bordmitteln
- `api/_website-check/destination-policy.js`: Host-, Literal-IP-, DNS- und Redirect-Entscheidungen
- `api/_website-check/response.js`: versionierte, nicht cachebare JSON-Fehler
- `tests/website-check-phase-a.test.mjs`: isolierte Node-Sicherheitstests ohne Netzwerk

Vercel ignoriert Utility-Dateien beziehungsweise Utility-Pfade mit fuehrendem Unterstrich im `api`-Verzeichnis. Dadurch wird nur `api/website-check.js` zur Route. Referenz: <https://vercel.com/docs/functions/configuring-functions/advanced-configuration#adding-utility-files-to-the-api-directory>

### Feature-Flag und Handlerstatus

`WEBSITE_CHECK_ENABLED` ist ausschliesslich serverseitig. Nur der exakte String `true` aktiviert die Phase-A-Validierung. Fehlt die Variable oder hat sie einen anderen Wert, antwortet `POST /api/website-check` mit HTTP 503 und `SERVICE_NOT_READY`, ohne Body, URL, DNS oder Netzwerk zu verarbeiten. Die Variable wurde nicht in Vercel aktiviert.

Bei aktivierter Testkonfiguration prueft der Handler Methode, JSON-Medientyp, Body, Schema und Destination-Policy. Eine gueltige Eingabe endet bewusst mit HTTP 501 und `CHECK_NOT_IMPLEMENTED`. Die Response nennt `validated_only`, die normalisierte URL und `networkRequestPerformed: false`; sie gibt kein scheinbares Pruefergebnis aus.

### Request- und Normalisierungsregeln

Nur POST ist erlaubt; andere Methoden erhalten 405 und `Allow: POST`. Akzeptiert wird ausschliesslich `application/json`, einschliesslich Parametern wie `charset=utf-8`. Der Node-Requeststream wird ohne Zugriff auf den lazy Vercel-`req.body`-Parser gelesen. Vorhandenes `Content-Length` wird vor dem Lesen geprueft; waehrend des Lesens wird nach spaetestens 4096 Bytes abgebrochen. Referenz zum lazy Vercel-Body-Helper: <https://vercel.com/docs/functions/runtimes/node-js#request-body>

Das JSON muss ein Objekt mit genau dem Stringfeld `url` sein. Arrays, leere Werte, Werte ueber 2048 Zeichen, Typkonvertierung und zusaetzliche Felder werden abgelehnt.

Die reine Normalisierung trimmt, ergaenzt kontrolliert HTTPS, nutzt WHATWG `URL`, erlaubt nur HTTP/HTTPS, verbietet Zugangsdaten und nicht standardmaessige Ports, entfernt Query/Fragment und normalisiert auf Origin `/`. Domains werden kleingeschrieben und internationale Domains durch den Standardparser nach Punycode ueberfuehrt.

### IP-, DNS- und Redirect-Policy

Hostnamen ohne oeffentliche Domainstruktur sowie `localhost`, `localhost.localdomain`, `.local`, `.internal`, `.localhost`, `.home` und `.lan` werden blockiert. WHATWG normalisiert alternative IPv4-Formen vor der numerischen Literal-IP-Pruefung; dadurch werden Integer-, Hex-, Oktal- und Kurzformen derselben privaten Policy unterworfen.

Die IPv4-Policy blockiert alle in Abschnitt 11 geplanten privaten, lokalen, reservierten, Dokumentations-, Benchmark-, Multicast- und Future-Use-Bereiche. Die numerische IPv6-Policy blockiert Unspecified, Loopback, IPv4-mapped private Ziele, NAT64 mit blockierter eingebetteter IPv4, Discard-Only, Dokumentation, Unique Local, Link Local, Multicast und weitere definierte Spezialbereiche. Zone IDs werden abgelehnt.

`evaluateDnsResults()` erhaelt ausschliesslich injizierte Resolver-Daten. Mindestens eine syntaktisch passende oeffentliche Adresse ist erforderlich. Eine einzige private, reservierte, ungueltige oder zur Family unpassende Adresse blockiert das gesamte Ziel; gemischte Antworten sind nicht erlaubt. Doppelte freigegebene Antworten werden dedupliziert und als eingefrorene Liste geliefert.

`createBoundDestination()` erzeugt die unveraenderliche Grundlage fuer DNS-Rebinding-Schutz: normalisierte URL, Host, Protokoll, Port, freigegebene Adressen, ausgewaehlte Adresse und Pruefzeitpunkt. Phase B muss den Socket an diese ausgewaehlte Adresse binden und darf keinen unkontrollierten zweiten DNS-Lookup verwenden.

`evaluateRedirectTarget()` loest relative Ziele gegen die aktuelle URL auf und fuehrt das Ergebnis erneut durch dieselbe URL-, Host- und Literal-IP-Policy. Injizierte DNS-Ergebnisse werden ebenfalls vollstaendig neu bewertet. `MAX_REDIRECTS` ist 3; ein vierter Redirect wird mit `TOO_MANY_REDIRECTS` abgelehnt.

### Fehlerformat und Tests

Fehler antworten einheitlich mit `ok: false`, `error.code`, sicherer `error.message` sowie `meta.apiVersion` und einer zufaelligen Request-ID. Responses sind `no-store`. Stacktraces, Dateipfade, Environment-Variablen, Roh-Request-Bodies und IP-Ergebnisse werden nicht ausgegeben oder geloggt.

Testbefehl:

```text
npm run test:website-check
```

Der Test nutzt `node:test` und `node:assert/strict`, keine Test-Dependency. Abgedeckt sind Handlermethoden, Feature-Flag, Content-Type, Bodylimit, JSON/Schema, gueltige und gefaehrliche URLs, alternative IPv4-Formen, alle geforderten IPv4-/IPv6-Bereiche, IPv4-mapped/NAT64, DNS-Familien und Mischantworten, Immutability, gebundene Zielentscheidung sowie relative, externe und blockierte Redirects. Alle Tests arbeiten nur mit lokalen Datenobjekten und gemockten Requeststreams.

### Bekannte Grenzen und Voraussetzungen fuer Phase B

- Die Phase-A-Policy fuehrt absichtlich keine echte DNS-Aufloesung und keine Verbindung aus.
- Die Runtime-Bindung von freigegebener IP, HTTP-Host und TLS-SNI ist noch nicht implementiert oder gegen Vercel integriert getestet.
- Es gibt noch keine Zeit-, Response-, Content-Type- oder HTML-Limits fuer Fremdantworten, weil kein Fremdabruf existiert.
- Parser, HTML-Regeln, PageSpeed, Rate Limiting, Cache, UI und Tracking bleiben aus.
- Vor Phase B muss ein injizierbarer Node-HTTP(S)-Adapter mit deaktivierten automatischen Redirects, kontrollierter `lookup`-Bindung und rein lokalen Mock-Server-Tests entworfen werden.
- Das Feature-Flag bleibt bis nach spaeterer Sicherheits- und Betriebsabnahme deaktiviert.

## 32. Umgesetzter Stand nach Schritt 27: Phase B

Phase B ergaenzt eine echte, aber nicht an den oeffentlichen Handler angeschlossene Node-Netzwerkschicht. `WEBSITE_CHECK_ENABLED` bleibt live deaktiviert. Selbst bei lokaler Aktivierung antwortet `api/website-check.js` weiterhin mit HTTP 501 und `CHECK_NOT_IMPLEMENTED`; es wird kein fertiges Pruefergebnis vorgetaeuscht.

### Dateien und Verantwortungen

- `api/_website-check/dns-resolver.js`: injizierbare produktive DNS-Aufloesung, vollstaendige Ergebnispruefung, kontrollierte Adressauswahl und gepinnte Node-`lookup`-Funktion
- `api/_website-check/http-client.js`: IP-gebundene GET-Anfrage mit Node `http`/`https`, festen Headern, TLS-Pruefung, Timern sowie Content- und Groessenlimits
- `api/_website-check/fetch-website.js`: Gesamtdeadline, manuelle Redirect-Kette, Schleifenerkennung, erneute Zielpruefung und minimierte Redirect-Historie
- `tests/website-check-phase-b.test.mjs`: vollstaendig gemockte DNS-, Request-, Stream-, Timeout-, Redirect- und TLS-Optionstests
- `api/_website-check/config.js`: 3 Sekunden Connect-, 5 Sekunden Request- und 10 Sekunden Gesamtlimit sowie 1,5 MiB HTML-Limit
- `api/_website-check/errors.js`: stabile Phase-B-Fehlercodes
- `api/_website-check/normalize-url.js` und `destination-policy.js`: getrennte Normalisierung fuer Nutzereingabe und echte Redirect-Abrufziele

### DNS-Aufloesung und Rebinding-Schutz

Produktiv verwendet `defaultDnsLookup()` `dns.promises.lookup(hostname, { all: true, verbatim: true })`. Der Resolver ist injizierbar. Domains benoetigen mindestens eine Adresse; jede A-/AAAA-Antwort muss syntaktisch zur angegebenen Familie passen und oeffentlich zulaessig sein. Doppelte Antworten werden entfernt. Eine einzelne private, reservierte oder ungueltige Adresse blockiert das gesamte Ziel. Node-DNS-Fehler werden ausschliesslich als `DNS_LOOKUP_FAILED` weitergegeben.

Oeffentliche Literal-IPs ueberspringen DNS, durchlaufen aber dieselbe IP-Policy. Nach der Pruefung wird genau ein freigegebener Datensatz aus Adresse und Familie ausgewaehlt. `createPinnedLookup()` liefert nur diesen Datensatz an Node zurueck und fuehrt keine zweite Systemaufloesung aus. Hostname, Protokoll, Port und Ziel-URL muessen weiterhin zur gebundenen Entscheidung passen.

### HTTP, Host und TLS

Der produktive Adapter verwendet ausschliesslich `node:http` oder `node:https`, Methode GET, `agent: false` und `Connection: close`. Gesetzte Header sind `User-Agent: STRUKTIVA-Website-Check/1.0`, HTML/XHTML-`Accept`, feste `Accept-Language`, `Accept-Encoding: identity`, `Connection: close` und der gepruefte Host. Cookies, Authorization, Referer, Proxy- oder Nutzerheader werden nicht uebertragen.

HTTP ist nur auf Port 80, HTTPS nur auf Port 443 erlaubt. HTTPS setzt `servername` auf den geprueften Originalhost und `rejectUnauthorized: true`. Es gibt keine eigene unsichere CA, keine deaktivierte Zertifikatspruefung und keine wiederverwendeten Cross-Origin-Sockets.

### Zeit-, Antwort- und Inhaltsschutz

Ein eigener Connect-Timer endet nach hoechstens 3000 ms, ein Einzelrequest nach 5000 ms und die gesamte DNS-/Redirect-Kette nach 10000 ms. Die Gesamtdeadline kann auch einen wartenden Resolver oder aktiven Request beenden. Bei Timeout werden Request und Response zerstoert, Listener und Timer entfernt und nur `REQUEST_TIMEOUT` geliefert.

HTML ist auf exakt 1572864 Bytes begrenzt. Ein zu grosser valider `Content-Length`-Header beendet die Antwort vor dem Body-Lesen. Bei unbekannter oder chunked Laenge werden Bytes fortlaufend gezaehlt und Request sowie Response beim ersten Ueberschreiten sofort zerstoert. Es wird keine unbegrenzte Chunk-Verkettung aufgebaut.

Akzeptiert werden ausschliesslich `text/html` und `application/xhtml+xml`, jeweils mit optionalen Parametern. Fehlende oder andere Content-Types ergeben `HTML_NOT_AVAILABLE`. Nur fehlendes `Content-Encoding` und `identity` sind erlaubt; `gzip`, `br`, `deflate` und andere Kodierungen ergeben `UNSUPPORTED_CONTENT_ENCODING`. Fremdinhalte werden weder ausgefuehrt noch dekomprimiert.

### Redirect-Korrektur

Die Nutzereingabe wird weiterhin datensparsam auf Origin `/` reduziert. Ein echter Redirect wird dagegen relativ zur vollstaendigen aktuellen Abruf-URL aufgeloest. Pfad und erforderliche Query bleiben intern fuer den Folgerequest erhalten; nur das Fragment wird entfernt. Pfad und Query erscheinen nicht in der minimierten Redirect-Historie.

Nur 301, 302, 303, 307 und 308 werden verfolgt. Redirect-Antwortkoerper werden sofort beendet. Redirects ohne `Location` ergeben `INVALID_RESPONSE`. Jedes Ziel durchlaeuft Protokoll-, Zugangsdaten-, Port-, Host-, Literal-IP-, DNS- und IP-Pruefung erneut und erhaelt eine neue IP-Bindung. Maximal drei Redirects sind erlaubt; der vierte ergibt `TOO_MANY_REDIRECTS`. Wiederholte vollstaendige Abruf-URLs einschliesslich Pfad und Query ergeben `REDIRECT_LOOP`. HTTPS-zu-HTTP wird nur fuer ein vollstaendig freigegebenes Port-80-Ziel verfolgt und intern mit `httpsDowngrade: true` markiert.

### Interne Rueckgabe und Fehler

Bei Erfolg bleiben angeforderte URL, finale URL, finaler Origin, Status, gefilterte Header, Content-Type, Byteanzahl, Redirect-Anzahl, minimierte Historie, HTTPS-/Downgrade-Status, Gesamtdauer und der begrenzte HTML-Buffer intern. Der HTML-Buffer wird nicht geloggt, gespeichert oder durch `api/website-check.js` serialisiert. 403, 404, 429 und 500 bleiben gueltige Serverantworten, sofern ein erlaubter HTML-Typ vorliegt. 204 oder Antworten ohne erlaubtes HTML ergeben `HTML_NOT_AVAILABLE`.

Ergaenzte stabile Codes sind `WEBSITE_UNREACHABLE`, `REQUEST_TIMEOUT`, `REDIRECT_LOOP`, `RESPONSE_TOO_LARGE`, `HTML_NOT_AVAILABLE`, `INVALID_RESPONSE`, `UNSUPPORTED_CONTENT_ENCODING` und `TLS_VALIDATION_FAILED`. Node-Fehlertexte und Codes werden nicht an den Client durchgereicht.

### Tests und verbleibende Grenzen

`npm run test:website-check` startet Phase A und Phase B gemeinsam mit `node:test`. Alle DNS-Ergebnisse, Literal-IPs, Lookup-Pinning, IPv4/IPv6-Familien, Request- und TLS-Optionen, Header, Zeitlimits, Streamabbrueche, Content-Typen, Encodings, Statuscodes, Redirect-Ziele, Redirect-Schleifen, erneute Bindungen und HTTPS-Downgrades werden ohne echte DNS-Abfrage und ohne externen Netzwerkzugriff getestet.

Zum Abschluss von Phase B fehlten noch HTML-Parser und Analyse, Fachregeln, PageSpeed, robots.txt, Sitemap, API-Ergebnisabbildung, UI, Tracking, Rate Limiting, Cache, Datenbank und produktive Runtime-Abnahme. Das Feature-Flag blieb deaktiviert; der damals empfohlene Schritt 28 war die nachfolgend dokumentierte Phase C.

## 33. Umgesetzter Stand nach Schritt 28: Phase C

Phase C ergaenzte eine interne, rein passive Analyse des bereits durch Phase B auf 1572864 Bytes begrenzten HTML-Buffers. Zum damaligen Stand war die Analyse noch nicht an `api/website-check.js` angeschlossen und der lokal aktivierte Handler endete weiterhin mit HTTP 501. Die in Schritt 29 hinzugekommene, weiterhin live deaktivierte Verbindung ist in Abschnitt 34 dokumentiert.

### Parser, Eingabe und Grenzen

`parse5` 8.0.1 ist die einzige neue direkte Produktionsdependency. `api/_website-check/html-parser.js` verarbeitet ausschliesslich einen Node-`Buffer`, prueft das 1,5-MiB-Limit defensiv erneut und erzeugt mit `parse5` einen fehlertoleranten DOM-Baum. Der Parser fuehrt kein JavaScript und keine Event-Handler aus, wertet kein CSS aus und erzeugt keine Browserumgebung. Bilder, Frames, Fonts, Stylesheets, Links und JSON-LD-Contexts werden nicht geladen. Phase C fuehrt keine DNS-Aufloesung und keinen weiteren Netzwerkzugriff aus.

Die zentrale Funktion `analyzeWebsiteHtml()` akzeptiert nur explizit validierte Werte fuer `htmlBuffer`, angeforderte und finale HTTP(S)-URL, finalen Origin, HTTP-Status, HTTPS-Zustand, Content-Type, Byteanzahl, Redirect-Anzahl und Downgrade-Zustand. Die Final-URL wird mit WHATWG `URL` geprueft. Zugangsdaten, unpassender Origin, unpassender HTTPS-Zustand, falsche Typen und unzulaessige Content-Types werden abgelehnt. Das Eingabeobjekt und der Buffer werden nicht veraendert.

UTF-8 wird mit optionaler UTF-8-BOM unterstuetzt. Ein Meta-Charset in den ersten 4096 Bytes wird als begrenzter Hinweis erkannt. `utf-8` und `utf8` gelten als unterstuetzt; andere Angaben werden dokumentiert, aber ohne zusaetzliche Encoding-Dependency nicht konvertiert. Ungueltige Bytes werden durch die UTF-8-Decodierung kontrolliert ersetzt. Die MVP-Analyse ist keine vollstaendige universelle Zeichensatzkonvertierung.

Unerwartete Parser- oder Analysefehler werden ohne Roh-HTML, Stacktrace oder internen Fehlertext in `HTML_ANALYSIS_FAILED` ueberfuehrt. Einzelne fehlerhafte JSON-LD-Bloecke bleiben auf ihre Regel begrenzt. Elementbesuche, sichtbarer Text, Attribute, JSON-LD-Anzahl und JSON-LD-Blockgroesse besitzen feste Obergrenzen.

### DOM-Hilfen und Textnormalisierung

Kleine Hilfsfunktionen ermitteln Elementnamen, begrenzte Attribute, rekursive Textinhalte, Elemente, Meta-Tags und passive HTTP(S)-Links. Text wird per NFKC normalisiert, von Steuerzeichen bereinigt, auf einfaches Whitespace reduziert und vor weiterer Verarbeitung begrenzt. Kommentare zaehlen nicht als Text. Fuer sichtbaren Text werden `script`, `style`, `noscript`, `template`, `svg` und `canvas` samt Inhalt ausgeschlossen.

Links werden nur intern gegen die Final-URL aufgeloest. Erlaubt sind passive HTTP(S)-Ziele ohne Zugangsdaten; Fragmente werden entfernt. `javascript:`, `data:`, `file:` und vergleichbare Protokolle erzeugen weder Kontakt-, CTA- noch Rechtshinweise. Kein Link wird geoeffnet.

### Ergebnis und Statuslogik

Das stabile Ergebnis enthaelt `analysisVersion`, eine kleine Dokumentzusammenfassung, genau 16 Checks, hoechstens drei bevorzugte beziehungsweise technisch maximal fuenf Empfehlungen, sieben methodische Grenzen und reine Statuszaehler. Jeder Check enthaelt `id`, Kategorie, Titel, Status, deutsches Statuslabel, vorsichtige Zusammenfassung, minimierte Evidence, optionale Empfehlung, Quelle und Konfidenz.

Verwendete Kategorien sind `technical-foundation`, `visibility`, `customer-journey`, `trust-and-legal` und `mobile-foundation`. Verwendete Statuswerte sind `good`, `review`, `priority`, `not_detected` und `not_checkable` mit den Labels `GUT`, `PRUEFEN`, `PRIORITAET`, `NICHT ERKANNT` und `NICHT PRUEFBAR`. `GUT` setzt einen eindeutigen technischen Befund voraus. `PRIORITAET` ist auf belastbare Probleme begrenzt. `NICHT ERKANNT` bedeutet nicht, dass das Merkmal auf der gesamten Website fehlt. Es existiert kein eigener Gesamtscore, keine Prozentwertung und kein Urteil ueber die gesamte Website.

### Deterministische Regeln

Die 16 Regeln sind:

1. HTTP-Erreichbarkeit anhand des tatsaechlichen finalen Status
2. HTTPS und Downgrade anhand des Fetch-Ergebnisses
3. einzelner nichtleerer Seitentitel mit begrenzter Laengenheuristik
4. Meta Description mit Leer-, Mehrfach- und Laengenpruefung
5. Anzahl nichtleerer H1-Elemente
6. vorhandene und syntaktisch plausible Dokumentsprache
7. Viewport-Grundlage mit `width=device-width` und `initial-scale`
8. einzelne gueltige Canonical-Angabe, intern nach gleicher oder anderer Origin getrennt
9. direkte Kontaktwege ueber `tel:`, `mailto:`, bekannte WhatsApp-Ziele oder eindeutige Kontaktlinks
10. Formularstruktur aus Form, Eingabefeld und Submit-Moeglichkeit
11. Kontakt-CTA anhand einer begrenzten deutschen und englischen Begriffsliste
12. Impressumslink anhand begrenzter Linktext- und Pfadmerkmale
13. Datenschutzlink anhand begrenzter Linktext- und Pfadmerkmale
14. JSON-LD-Anzahl, Parsebarkeit und erlaubte Typen ohne Script-Ausfuehrung
15. vorsichtige Vertrauenssignale aus Strukturmarkern, begrenzten Textbegriffen oder `AggregateRating`
16. mobile Nutzungsqualitaet als `NICHT PRUEFBAR`, weil statisches HTML keine reale Bedienbarkeit belegt

HTTP 200 bis 299 mit HTML gilt als `GUT`. 403 und 404 bleiben erreichbare, aber zu pruefende Antworten; 429 sowie 5xx erhalten wegen Begrenzung oder Serverfehler `PRIORITAET`. Die Viewport-Regel behauptet nur eine technische Grundlage. Die zusaetzliche mobile Nutzungsqualitaet bleibt bis zu einer spaeteren kontrollierten Lighthouse-Pruefung `NICHT PRUEFBAR`.

### Evidence, Datenschutz und Empfehlungen

Evidence besteht ausschliesslich aus Zaehlern, Laengen, Booleans, erlaubten Kontaktwegtypen, erlaubten JSON-LD-Typen, Status- und Origin-Vergleichen. Nicht enthalten sind konkrete E-Mail-Adressen, Telefonnummern, WhatsApp-Nummern, Formularwerte, komplette Texte, komplette Linklisten, URLs mit Query, JSON-LD-Inhalte oder HTML. Der HTML-Buffer wird weder im Ergebnis ausgegeben noch durch Phase C geloggt oder gespeichert.

Empfehlungen werden in einer festen Themenreihenfolge ausgewaehlt: Transport, Titel, H1, mobile Grundlage, Kontakt, Kontakt-CTA, Beschreibung, Canonical, Rechtshinweise, Vertrauen und HTTP. Pro Thema wird hoechstens eine Empfehlung ausgegeben. Nur Checks mit `priority`, `review` oder `not_detected` und vorhandener Empfehlung sind handlungsrelevant. Standardmaessig werden hoechstens drei, technisch niemals mehr als fuenf Empfehlungen ausgegeben. Das Fehlen eines Formulars allein erzeugt keine Empfehlung. Texte enthalten keine Suchmaschinen-, Rechts-, Qualitaets- oder Erfolgsversprechen.

### Ausgegebene Grenzen

Das Ergebnis erklaert, dass nur das empfangene finale HTML geprueft wurde, JavaScript-Inhalte fehlen koennen, Unterseiten und interne Unternehmensablaeufe nicht analysiert wurden, nicht erkannte Elemente an anderer Stelle vorhanden sein koennen, mobile Nutzbarkeit erst spaeter ueber Lighthouse folgt und robots.txt sowie Sitemap in Phase C nicht abgerufen werden.

### Tests und Voraussetzungen fuer Schritt 29

`npm run test:website-check` startet Phase A, Phase B und Phase C gemeinsam mit `node:test`. Die Phase-C-Fixtures testen gueltiges, fragmentiertes, fehlerhaftes, leeres, sehr langes und BOM-kodiertes HTML; Charset-Hinweise; Textnormalisierung; ausgeschlossene Inhalte; alle Statusmatrizen; sichere Linkaufloesung; HTTP/HTTPS; Kontaktwege; Formulare; CTAs; Rechtshinweise; Trust-Heuristiken; parsebares, fehlerhaftes und uebergrosses JSON-LD; Ergebnisdatenschutz; Empfehlungslimit und -reihenfolge; Determinismus; Eingabe-Unveraenderlichkeit; kontrollierte Fehler sowie den ausbleibenden Netzwerkzugriff. Alle Tests verwenden synthetisches HTML und injizierte Mocks. Es wird keine echte Website analysiert und keine reale DNS-Abfrage ausgefuehrt.

Zum Abschluss von Phase C fehlten die kontrollierte interne Verbindung von Phase B und C, die oeffentliche API-Ergebnisabbildung, PageSpeed/Lighthouse, robots.txt, Sitemap, UI, Tracking, Rate Limiting, Cache, Datenbank und produktive Runtime-Abnahme. Der damals empfohlene Schritt 29 ist im folgenden Abschnitt dokumentiert.

## 34. Umgesetzter Stand nach Schritt 29: Phase D

Phase D verbindet Request-Validierung, sichere URL-Policy, Phase-B-Abruf, Phase-C-Analyse und eine neue oeffentliche Allowlist zu einer kontrollierten Pipeline. Das Feature bleibt in Vercel deaktiviert. Ohne den exakten Environment-Wert `WEBSITE_CHECK_ENABLED=true` antwortet `POST /api/website-check` weiterhin vor Body-Parsing, URL-Normalisierung, DNS, Fetch und Analyse mit HTTP 503 und `SERVICE_NOT_READY`.

### Dateien und Orchestrierungsablauf

- `api/_website-check/run-website-check.js` validiert die normalisierte Start-Origin und das komplette interne Fetch-Ergebnis, ruft genau einmal `fetchWebsite()` und anschliessend genau einmal `analyzeWebsiteHtml()` auf und erzeugt ein HTML-freies internes Gesamtresultat.
- `api/_website-check/public-result.js` erzeugt aus dem internen Resultat ein vollstaendig neues, versioniertes und allowlist-basiertes API-Objekt.
- `api/website-check.js` verbindet bei aktiviertem Flag die bestehenden Request-, Schema- und Destination-Pruefungen mit Orchestrierung und Public-Result-Abbildung.
- `api/_website-check/response.js` setzt fuer Erfolg und Fehler einheitlich JSON, `Cache-Control: no-store` und `X-Content-Type-Options: nosniff`.
- `tests/website-check-phase-d.test.mjs` prueft die Pipeline ausschliesslich mit Mocks und synthetischen Buffern.

Die Reihenfolge ist fest: Methode und Feature-Flag, JSON-Medientyp, begrenzter Body, JSON, Schema, URL-/Destination-Policy, sicherer Fetch, strukturelle Fetch-Pruefung, passive Analyse, Public-Allowlist und JSON-Response. Der Handler schreibt keine Zwischenergebnisse. Es gibt keine globale Testvariable und keine permissive CORS-Freigabe.

`createWebsiteCheckHandler()` erlaubt die Injektion von Environment, Request-ID-Erzeugung, Uhr, Orchestrierung und Public-Result-Builder. `runWebsiteCheck()` erlaubt die Injektion von Fetch, Analyse und Uhr. Produktiv werden `crypto.randomUUID()`, `fetchWebsite()`, `analyzeWebsiteHtml()` und die serverseitige UTC-Uhr verwendet. Eingabe-, Dependency-, Fetch-, Buffer- und Analyseobjekte werden nicht mutiert.

### Defensive Fetch-Pruefung und interne Daten

Die Orchestrierung akzeptiert nur eine bereits kanonische HTTP(S)-Origin mit abschliessendem Slash. Das Fetch-Ergebnis muss ein normales Objekt sein und exakt zur Start-Origin passen. HTML muss ein Buffer innerhalb von 1572864 Bytes sein; `byteLength` muss exakt stimmen. Finale URL und Origin werden mit WHATWG `URL` geprueft, Zugangsdaten abgelehnt und HTTPS-Zustand gegen das finale Protokoll validiert. HTTP-Status muss zwischen 100 und 599 liegen, Redirect-Anzahl zwischen 0 und 3, Content-Type muss HTML/XHTML sein, HTTPS- und Downgrade-Werte muessen boolean sein und die Gesamtdauer muss endlich und nicht negativ sein. Ungueltige interne Ergebnisse werden als `INVALID_RESPONSE` behandelt.

Der HTML-Buffer existiert ausschliesslich zwischen erfolgreicher Fetch-Pruefung und Analyseaufruf im Function-Speicher. Er ist weder Teil des Orchestrierungsresultats noch der Public-Response, Warnung, Fehlerantwort, Redirect-Darstellung, Dokumentation oder eines Logs. HTML wird nicht gespeichert und nicht protokolliert. Ebenfalls intern bleiben Header, Cookies, DNS-Adressen, ausgewaehlte IP, IP-Familie, Socket-/TLS-Daten und Redirect-Historie.

### Oeffentliche Response

Erfolgreiche Responses verwenden API-Version `1` und folgende stabile Form:

```json
{
  "ok": true,
  "status": "complete",
  "data": {
    "request": {
      "normalizedUrl": "https://example.com/",
      "checkedAt": "2026-07-14T10:00:00.000Z"
    },
    "website": {
      "reachable": true,
      "httpStatus": 200,
      "finalOrigin": "https://example.com",
      "originChanged": false,
      "https": true,
      "httpsDowngrade": false,
      "redirectCount": 0,
      "responseTimeMs": 850
    },
    "analysis": {},
    "warnings": []
  },
  "meta": {
    "apiVersion": "1",
    "requestId": "..."
  }
}
```

`checkedAt` wird serverseitig als ISO-8601-UTC-Wert erzeugt. Die Request-ID wird pro Request serverseitig mit `crypto.randomUUID()` erzeugt und fuer Erfolg und Fehler unveraendert verwendet. Die oeffentliche Gesamtdauer stammt aus der bereits von Phase B gemessenen Dauer, wird auf ganze Millisekunden gerundet und auf 60000 ms begrenzt. Einzelne DNS-, Connect-, TLS- oder Socketzeiten werden nicht ausgegeben.

Oeffentlich erscheinen nur normalisierte Start-Origin, finale Origin, Originwechsel, HTTP-Status, HTTPS-/Downgrade-Zustand, Redirect-Anzahl und begrenzte Gesamtdauer. Die vollstaendige finale URL, Pfad, Query, Fragment, Redirect-Pfade und Redirect-Queries erscheinen nicht.

### Complete und Partial

Nach erfolgreichem Fetch und erfolgreicher Analyse antwortet die STRUKTIVA-API mit HTTP 200 und `status: complete`. Der HTTP-Status der geprueften Website wird niemals als API-HTTP-Status uebernommen. Auch empfangenes HTML mit Website-Status 403, 404, 429 oder 500 kann ein vollstaendiges API-Ergebnis mit HTTP 200 liefern; der fremde Status steht nur in `data.website.httpStatus` und im entsprechenden Analysecheck.

Nur ein kontrollierter `HTML_ANALYSIS_FAILED` nach erfolgreichem Fetch erzeugt HTTP 200 mit `status: partial`, vorhandenen Website-Metadaten, `analysis: null` und der festen Warnung `HTML_ANALYSIS_UNAVAILABLE`. Es werden keine leeren Checks oder Empfehlungen erfunden. Rohe oder unerwartete Fehler werden nicht als Partial verschleiert, sondern ueber `INTERNAL_ERROR` mit HTTP 500 beantwortet.

### Analyse- und Evidence-Allowlist

Die Public-Abbildung akzeptiert nur Analyseversion `1`, nichtnegative Summary-Zaehler, maximal 20 bekannte Checks, maximal 5 Empfehlungen und maximal 10 Limitations. Erlaubte Statuswerte sind `good`, `review`, `priority`, `not_detected` und `not_checkable`. Erlaubte Kategorien sind `technical-foundation`, `visibility`, `customer-journey`, `trust-and-legal` und `mobile-foundation`. Erlaubte Quellen sind `html` und `http`; Konfidenzen sind auf `high`, `medium` und `low` begrenzt.

Jeder der 16 bekannten Check-IDs besitzt ein eigenes Evidence-Schema. Nur die dafuer festgelegten kleinen Integer, Booleans sowie begrenzten Listen aus `phone`, `email`, `whatsapp` oder erlaubten JSON-LD-Typen werden kopiert. Unbekannte Checks, Felder, Objekte, URLs, Kontaktwerte, Buffer, Errors und verschachtelte Daten werden verworfen. Empfehlungen werden neu aus ID, Kategorie, Prioritaet, Text und bekannten Check-IDs erzeugt.

Stringlimits: Check-ID 64, Kategorie 64, Titel 120, Statuslabel 64, Summary 500, Empfehlung 500, Warning-Code 64, Warning-Meldung 300 und Limitation 500 Zeichen. Request-ID ist auf 128 ASCII-Zeichen begrenzt. Zaehler sind nichtnegativ und auf 100000 begrenzt. Listen und Strings werden vor Serialisierung begrenzt.

Nicht oeffentlich sind HTML, Base64-HTML, Header, Set-Cookie, Authorization, DNS-/IP-Daten, Destination-, Socket- oder TLS-Objekte, Redirect-Historie, Pfade, Queries, Fragmente, Canonical-URL, Telefonnummern, E-Mail-Adressen, WhatsApp-Nummern, Seitentexte, JSON-LD-Payloads, Stacktraces, Node-Codes, Dateipfade, Environment-Werte, API-Schluessel, Dependency-Versionen und Debugtimer.

### Fehlerabbildung und Header

Die tatsaechlich implementierte und getestete Fehlerabbildung lautet:

| Fehlercode | HTTP | Oeffentliche Meldung |
| --- | ---: | --- |
| `METHOD_NOT_ALLOWED` | 405 | `Methode nicht erlaubt.` |
| `SERVICE_NOT_READY` | 503 | `Der automatische Website-Check wird derzeit vorbereitet.` |
| `INVALID_CONTENT_TYPE` | 415 | `Bitte senden Sie die Anfrage als JSON.` |
| `REQUEST_TOO_LARGE` | 413 | `Die Anfrage ist zu gross.` |
| `INVALID_JSON` | 400 | `Die Anfrage enthaelt kein gueltiges JSON.` |
| `INVALID_REQUEST` | 400 | `Die Anfrage konnte nicht verarbeitet werden.` |
| `INVALID_URL` | 400 | `Die Website-Adresse konnte nicht verarbeitet werden.` |
| `UNSUPPORTED_PROTOCOL` | 400 | `Fuer den Website-Check sind nur HTTP- und HTTPS-Adressen erlaubt.` |
| `BLOCKED_DESTINATION` | 400 | `Diese Website-Adresse kann aus Sicherheitsgruenden nicht geprueft werden.` |
| `DNS_LOOKUP_FAILED` | 502 | `Die Website-Adresse konnte derzeit nicht aufgeloest werden.` |
| `WEBSITE_UNREACHABLE` | 502 | `Die Website konnte derzeit nicht erreicht werden.` |
| `CONNECTION_FAILED` | 502 | `Die Verbindung zur Website konnte derzeit nicht hergestellt werden.` |
| `REQUEST_TIMEOUT` | 504 | `Die Pruefung hat zu lange gedauert und wurde beendet.` |
| `TOO_MANY_REDIRECTS` | 502 | `Die Website-Adresse leitet zu oft weiter.` |
| `REDIRECT_LOOP` | 502 | `Die Website-Adresse fuehrt in eine Weiterleitungsschleife.` |
| `RESPONSE_TOO_LARGE` | 422 | `Die empfangene Website ist fuer den automatischen Check zu umfangreich.` |
| `HTML_NOT_AVAILABLE` | 422 | `Unter der angegebenen Adresse wurde keine auswertbare HTML-Seite gefunden.` |
| `INVALID_RESPONSE` | 502 | `Die Website hat keine gueltige Antwort geliefert.` |
| `UNSUPPORTED_CONTENT_ENCODING` | 422 | `Die Website-Antwort verwendet eine noch nicht unterstuetzte Komprimierung.` |
| `TLS_VALIDATION_FAILED` | 502 | `Die sichere Verbindung zur Website konnte nicht bestaetigt werden.` |
| `HTML_ANALYSIS_FAILED` | 422 | `Das HTML-Dokument konnte nicht ausgewertet werden.` |
| `CHECK_NOT_IMPLEMENTED` | 501 | `Die Website-Adresse wurde validiert. Der eigentliche Check ist noch nicht aktiv.` |
| `INTERNAL_ERROR` | 500 | `Der automatische Check konnte derzeit nicht abgeschlossen werden.` |

`RATE_LIMITED` ist in Phase D noch nicht implementiert und besitzt daher aktuell weder eine Fehlerdefinition noch einen HTTP-Status oder eine oeffentliche Meldung. Ein spaeteres Rate Limit ist als Zielarchitektur mit HTTP 429 und `Retry-After` vorgesehen, darf aber erst in einem eigenen Schritt umgesetzt werden. Unbekannte Fehlercodes werden auf `INTERNAL_ERROR` abgebildet. Alle implementierten Meldungen sind fest definiert und enthalten keine Node-Ursache.

Alle JSON-Antworten setzen `Content-Type: application/json; charset=utf-8`, `Cache-Control: no-store` und `X-Content-Type-Options: nosniff`. 405 setzt zusaetzlich `Allow: POST`. Es wurde kein `Access-Control-Allow-Origin` ergaenzt.

### Tests, Audit und verbleibende Grenzen

`npm run test:website-check` startet Phase A, B, C und D gemeinsam. Phase D testet Complete, Partial, Fetch-/Analyse-Reihenfolge, einmalige Aufrufe, Buffer-Uebergabe und -Entfernung, Fetch-Fehler, unerwartete Fehler, Fetch-Struktur, Immutability, Determinismus, Versionen, Zeit, Request-ID, Website-Status 200/403/404/429/500, Check-/Evidence-Allowlist, String-/Listenlimits, Redaktionen, alle stabilen Fehlercodes, Feature-Flag-Werte, Handler-Schutz, Response-Header und fehlendes CORS. Alle Tests verwenden Mocks und In-Memory-Daten; es erfolgen keine DNS- oder Fremdrequests.

Die lesende Audit-Baseline vor Schritt 29 meldete zwei bereits vorhandene Hinweise: einen moderaten transitiven Hinweis fuer `esbuild` und einen hohen direkten Hinweis fuer `vite`. Die angebotene Behebung erfordert ein Major-Upgrade auf Vite 8 und liegt ausserhalb dieses Schritts. `npm audit fix`, Dependency-Upgrades und Lockfile-Aenderungen wurden nicht ausgefuehrt.

Weiterhin fehlen PageSpeed/Lighthouse, robots.txt, Sitemap, sichtbares Website-Check-Formular, Ergebnis-UI, Tracking, Rate Limiting, Cache, Datenbank, PDF und produktive Runtime-/Missbrauchsabnahme. Das Feature-Flag bleibt bis zu einer gesonderten Betriebs- und Sicherheitsfreigabe deaktiviert.

## 35. Betriebsstatus nach Schritt 30: Phase E

Das Betriebs-, Tarif-, Missbrauchs-, Cache- und Freigabeaudit ist in `docs/STRUKTIVA-WEBSITE-CHECK-OPERATIONS-READINESS.md` dokumentiert. Es enthaelt den projektspezifischen Tarif- und Function-Befund, die bewerteten Rate-Limit- und Cache-Optionen, Datenschutzgrenzen, Monitoring- und Kill-Switch-Planung sowie die verbindliche Live-Freigabecheckliste.

Der Website-Check bleibt oeffentlich deaktiviert. Es wurde weder Rate Limiting noch Cache, Single-Flight, Parallelitaetssteuerung, Bot-Schutz, PageSpeed oder ein weiterer Kill-Switch implementiert. Eine Freigabe ist erst nach kommerziell geeigneter Tarifentscheidung, Betriebsabsicherung, separater UI-/Datenschutzphase und kontrollierter Sicherheitsabnahme zulaessig.
