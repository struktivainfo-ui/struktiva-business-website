# STRUKTIVA Website-Check: sichere Architektur

Stand: 14. Juli 2026
Status: Schritt 25, nur Audit und Planung
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

Codes: `INVALID_URL` (400), `UNSUPPORTED_PROTOCOL` (400), `BLOCKED_DESTINATION` (400), `DNS_LOOKUP_FAILED` (422), `WEBSITE_UNREACHABLE` (502), `REQUEST_TIMEOUT` (504), `TOO_MANY_REDIRECTS` (422), `RESPONSE_TOO_LARGE` (422), `HTML_NOT_AVAILABLE` (422), `PAGESPEED_UNAVAILABLE` (Warnung im Teilergebnis), `RATE_LIMITED` (429 plus `Retry-After`), `INVALID_RESPONSE` (502), `INTERNAL_ERROR` (500).

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

`Content-Length` und gestreamte Bytes werden begrenzt. `Accept-Encoding: identity` mindert Dekompressionsrisiken. Nur `text/html`/`application/xhtml+xml`; fehlender Typ nur bei kleiner eindeutiger HTML-Signatur. Keine PDFs, Medien, Archive oder externen Ressourcen.

Vercel erlaubt `maxDuration`, aber Tarif und Fluid Compute sind vor Phase C zu bestaetigen: <https://vercel.com/docs/functions/configuring-functions/duration>

## 15. PageSpeed-Integration

Serverseitig: `GET https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed` mit `url`, `strategy=mobile|desktop`, je vier wiederholten `category`-Parametern, `locale=de` und `key=PAGESPEED_API_KEY`.

Google dokumentiert v5, beide Strategien und die vier Kategorien; ohne Kategorie laeuft nur Performance. Scores stehen in `lighthouseResult.categories` und koennen `null` sein: <https://developers.google.com/speed/docs/insights/rest/v5/pagespeedapi/runpagespeed>

Der Key bleibt in Vercel, nie in Git, Browser, Logs oder Fehlern. Obwohl Google Aufrufe ohne Key erlaubt, startet Produktion ohne Key mit einem PageSpeed-Teilergebnis, um anonyme Quoten nicht zu verbrauchen. Key-Restriktionen, Quota und Alarme sind in Google Cloud zu konfigurieren. Da Google die CrUX-Daten in PSI kuenftig entfernen will, nutzt der MVP nur Lighthouse-Labdaten: <https://developers.google.com/speed/docs/insights/v5/get-started>

Provider-Timeout, 429, 5xx, invalides JSON, `runtimeError`, fehlende Kategorie und `null` werden je Strategie als `unavailable` behandelt. Eigene Checks bleiben bestehen.

## 16. HTML-Analyse

Es existiert kein serverseitiger HTML-Parser. Option A entfaellt. Option B, ein kleiner Scanner, ist nur fuer engste Metadaten geeignet und darf HTML nicht mit grossen Regex-Ausdruecken nachbauen. Empfehlung fuer Phase B ist Option C: nach separater Freigabe eine kleine standardsorientierte Parser-Dependency wie `parse5`. Schritt 25 installiert nichts; Phase A braucht keinen Parser.

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
- Phase B: gebundener HTTP(S)-Abruf, Limits, Parserentscheidung, 20 Regeln; Mock-Server.
- Phase C: PageSpeed mobil/desktop, Timeout, Partial Result, sanitierte Abbildung.
- Phase D: Formular, Phasenanzeige, Fehler- und Fokuszustaende.
- Phase E: Ergebnis, Empfehlungen, Grenzen, persoenlicher CTA.
- Phase F: Consent-Tracking, WAF, freigegebener Cache, Observability, Kill-Switch.
- Phase G: Sicherheitsabnahme, kontrollierte oeffentliche Ziele, Last/Quota, Accessibility, Responsive und Live.

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
