# STRUKTIVA Website-Check: Operations Readiness

Stand: 14. Juli 2026
Unternehmen: STRUKTIVA Digitale Unternehmensberatung
Status: Betriebs- und Freigabeaudit, keine Aktivierung

## 1. Projekt- und Tarifstatus

Die authentifizierte Vercel CLI 54.18.6 hat das Produktionsprojekt eindeutig als `struktiva-business-website` im Team-Scope `struktivainfo-uis-projects` bestimmt. Die Produktionsdomain ist `https://struktiva.de`; `www.struktiva.de` ist ebenfalls Alias. Eine lokale `.vercel/project.json` existiert nicht. Projekt- und Organisations-ID wurden bei der lesenden API-Pruefung abgeglichen, werden aus Datensparsamkeitsgruenden aber nicht in diesem Dokument gespeichert.

Die Team-API meldet den aktiven Tarif `hobby` mit Status `active`. Es handelt sich um einen Team-Scope, nicht um ein lokal verknuepftes persoenliches Projekt. Vercel beschraenkt Hobby laut aktueller Tarifdokumentation auf persoenliche, nicht kommerzielle Nutzung. Fuer den oeffentlichen Website-Check von STRUKTIVA ist deshalb vor Freigabe ein kommerziell geeigneter Tarif verbindlich zu bestaetigen. Diese Entscheidung ist ein Freigabeblocker; in diesem Audit wurde kein Tarif geaendert.

## 2. Bestaetigte und nicht bestaetigte Vercel-Funktionen

### Verfuegbar und im aktuellen Tarif enthalten

- Vercel Firewall und automatische DDoS-Mitigation
- WAF Custom Rules, auf Hobby maximal drei pro Projekt
- IP Blocking, auf Hobby maximal drei Regeln
- eine WAF-Rate-Limit-Regel pro Hobby-Projekt
- Fixed-Window-Rate-Limiting mit 10 Sekunden bis 10 Minuten Fenster
- Rate-Limit-Zaehler nach IP oder JA4 Digest
- Aktionen Log, 429, Deny und Challenge fuer die Rate-Limit-Regel
- Fluid Compute
- Runtime Cache als regionaler, ephemerer Cache
- Basis-Observability, Usage Dashboard und Runtime Logs
- Runtime Logs mit einer Stunde Aufbewahrung auf Hobby
- BotID Basic grundsaetzlich auf allen Tarifen

### Verfuegbar mit moeglichen Zusatzkosten oder hoeherem Tarif

- Runtime-Cache-Reads und -Writes werden regional nutzungsabhaengig erfasst; Hobby kann keine zusaetzliche On-Demand-Nutzung kaufen und wird durch Tarifgrenzen begrenzt
- Pro ermoeglicht On-Demand-Nutzung, mehr WAF-Regeln, konfigurierbares Spend Management und laengere Log-Aufbewahrung
- Observability Plus mit automatischen Error-/Usage-Anomaly-Alerts ist nur fuer Pro/Enterprise verfuegbar
- BotID Deep Analysis ist nur fuer Pro/Enterprise verfuegbar und nutzungsabhaengig
- Redis/KV aus dem Marketplace kann eigene Providerkosten verursachen

### Im aktuellen Hobby-Tarif nicht verfuegbar

- konfigurierbares Spend Management
- Observability-Alerts und Observability Plus
- Log Drains
- WAF Persistent Actions
- WAF System Bypass Rules
- BotID Deep Analysis
- Enterprise Managed Rulesets wie OWASP CRS

### Nicht eindeutig bestaetigbar

- exakte Runtime-Cache-Speicherquote des konkreten Hobby-Projekts
- automatische `Retry-After`-Header der von der WAF erzeugten 429-Antwort
- Firewall-Alert-Funktionsumfang fuer dieses konkrete Hobby-Team
- aktuell konfigurierte individuelle Usage-Benachrichtigungsschwellen

Diese Punkte muessen vor Freigabe im Dashboard unter Team Settings > Billing/Usage sowie Projekt > Firewall/Observability kontrolliert werden.

## 3. Aktuelle Function-Konfiguration

`api/website-check.js` wird als Node.js Vercel Function gebaut. Das Projekt verwendet Vite, `package.json` setzt `type: module`, und die ESM-Imports sind mit dem erfolgreichen Vercel-Build kompatibel. Das aktuelle Produktionsdeployment zeigt `api/website-check` als Function mit rund 104,5 KB Buildgroesse.

| Eigenschaft | Bestaetigter Stand |
| --- | --- |
| Runtime | Node.js Vercel Function |
| Node-Version | `24.x` |
| Region | `iad1` |
| Fluid Compute | aktiviert |
| `maxDuration` im Repository | nicht gesetzt |
| wirksamer Hobby-Standard | 300 Sekunden |
| Speicher Hobby | 2 GB / 1 vCPU |
| Function-Response-Limit Vercel | 4,5 MB |
| Website-Check-Requestlimit intern | 4096 Bytes |
| HTML-Limit intern | 1.572.864 Bytes |

Das eigene Abrufbudget betraegt maximal 10 Sekunden, mit 3 Sekunden Connect- und 5 Sekunden Einzelrequestlimit. Es liegt deutlich innerhalb der 300-Sekunden-Function-Grenze. Trotzdem soll Schritt 31 eine bewusst kleinere `maxDuration` fuer diese Function pruefen, damit Fehler nicht unnoetig bis zur Plattformgrenze laufen. PageSpeed ist in diesem Budget noch nicht enthalten.

## 4. Laufzeit- und Ressourcenlimits

Hobby Functions mit Fluid Compute haben laut Vercel 300 Sekunden Standard und Maximum sowie 2 GB Speicher bei 1 vCPU. Die Function laeuft standardmaessig in einer Region; das Projekt meldet `iad1`. Rate-Limit-Zaehler und Runtime Cache sind regional. Mehrregionenbetrieb wuerde deshalb Zaehler, Cache und Single-Flight-Semantik veraendern und ist nicht Teil des MVP.

Der aktuelle Check ist vor allem I/O-lastig. Missbrauch erzeugt dennoch Function-Invocations, bereitgestellte Speicherzeit, Edge Requests, ausgehende Netzwerkzugriffe und Last bei fremden Websites. Die Plattformgrenze allein ist daher kein Missbrauchsschutz.

## 5. Firewall-Verfuegbarkeit

Vercel Firewall, DDoS-Mitigation und WAF Custom Rules sind auf Hobby verfuegbar. Pfad und HTTP-Methode koennen Bedingungen einer Custom Rule sein. Fuer `/api/website-check` kann deshalb eine nur auf POST passende Regel vor der Function greifen. IP und JA4 Digest sind die auf Hobby verfuegbaren Rate-Limit-Zaehler. Log ist als Beobachtungsaktion verfuegbar; danach kann dieselbe Regel auf 429 umgestellt werden.

Die Hobby-Grenzen sind drei Custom Rules insgesamt und eine Rate-Limit-Regel. Persistent Actions, System Bypass Rules, beliebige Header-Zaehler und Token Bucket stehen auf Hobby nicht zur Verfuegung. Es wurde keine Regel erstellt oder veraendert.

## 6. Rate-Limit-Optionen

| Option | Schutzwirkung | Kosten/Dependency | Bewertung |
| --- | --- | --- | --- |
| A: Vercel WAF Rate Limit | greift vor der Function; auf Pfad und POST begrenzbar | keine Code-Dependency; tarif-/nutzungsabhaengige WAF-Grenzen | bevorzugt |
| B: Vercel Firewall SDK | flexible Pruefung in der Function mit Rate-Limit-ID | `@vercel/firewall`; Function ist bereits gestartet | nur fuer spaetere Sonderbedingungen |
| C: Redis/KV | persistente Token-Bucket-/Sliding-Window-Zaehler und globale Koordination | Provider, Dependency, Datenschutz- und Ausfallrisiko | robuste Ausbauoption, nicht MVP |
| D: In-Memory | sehr einfach, pro warmer Instanz | keine Dependency | allein unzuverlaessig und nicht produktionsgeeignet |

### Option A

Ein WAF-Limit reduziert Function-Ausfuehrungen und externe Abrufe. Hobby unterstuetzt Fixed Window, IP und JA4, maximal zehn Minuten sowie eine Regel. Ein vorgeschalteter Log-Modus erlaubt die Beobachtung ohne Blockierung. Die Standardblockantwort ist 429; das konkrete `Retry-After`-Verhalten muss in einem kontrollierten Preview-Test bestaetigt werden.

### Option B

`checkRateLimit()` aus `@vercel/firewall` kann mit einer im Dashboard angelegten Rate-Limit-ID und optional eigenem Schluessel arbeiten. Die Pruefung findet jedoch im Backend statt; die Function verursacht bereits Nutzung. Es entsteht eine neue Dependency und die Fehler-/Fallback-Semantik muss separat getestet werden.

### Option C

Upstash Redis oder ein Marketplace-KV kann Sliding Window, Token Bucket, stundenbezogene Limits, atomare globale Parallelitaet und verteiltes Single-Flight abbilden. Dafuer entstehen ein weiterer Auftragsverarbeiter, gespeicherte technische Identifikatoren, Netzabhaengigkeit, Kosten und Wartung. Vor Einsatz sind AVV/DPA, Region, TTL, Loeschung, Ausfallmodus und Datenminimierung zu klaeren.

### Option D

Eine lokale `Map` kann innerhalb einer warmen Instanz Bursts reduzieren, ist aber bei Serverless-Instanzen weder global noch dauerhaft. Sie darf hoechstens ergaenzen und nie den einzigen Produktionsschutz darstellen.

## 7. Konkrete Rate-Limit-Empfehlung

Fuer die erste oeffentliche Version wird genau eine WAF-Regel empfohlen:

- nur Pfad `/api/website-check`
- nur Methode POST
- Fixed Window
- Startwert drei Requests je zehn Minuten
- zusammengesetzte Betrachtung von IP und JA4 erst, wenn ein Preview-Test die gewuenschte gemeinsame Bucket-Semantik bestaetigt; andernfalls IP als dokumentierter Startschluessel
- zuerst kontrollierter Log-Betrieb, danach 429

Drei Checks erlauben einen Erstcheck und zwei Wiederholungen. Das ist fuer einen MVP vertretbar, kann gemeinsame Firmennetze aber treffen. JA4 kann Fehlblockierungen hinter gemeinsamer IP reduzieren, ist jedoch kein Benutzerkonto und kein stabil eindeutiger Identifikator. Mobilfunk-IP-Wechsel und Fingerprint-Kollisionen bleiben Grenzen. Die ersten drei Requests bilden zugleich den kurzen Burst; ein zusaetzliches Stundenlimit von zehn Requests ist mit der einzelnen Hobby-Regel und maximal zehn Minuten Fenster nicht belastbar umsetzbar. Es wird erst nach realen, datensparsamen Nutzungsdaten oder mit persistentem Limiter ergaenzt.

Als beobachtetes globales Sicherheitsbudget fuer den kontrollierten Start werden 100 externe Cache-Misses pro Stunde und 500 pro Tag empfohlen. Bei 70 Prozent soll gewarnt und bei Erreichen des Budgets der Netzwerk-Kill-Switch ausgeloest beziehungsweise manuell gesetzt werden. Diese Schwellen sind keine auf Hobby bereits verfuegbare globale Sperre: belastbare automatische Durchsetzung und Alarmierung erfordern einen passenden Tarif/Alert-Kanal oder einen persistenten globalen Zaehler. Bis das bestaetigt ist, bleibt der oeffentliche Betrieb gesperrt.

429 soll eine feste sichere Meldung ohne Zaehler, IP, JA4 oder Regel-ID liefern. Wenn Vercel keinen belastbaren `Retry-After`-Header setzt, muss Schritt 31 entscheiden, ob die UI nur einen allgemeinen Wiederholungszeitpunkt nennt oder eine kontrollierte Anwendungsschicht den Header setzt. Das Verhalten ist vor Aktivierung zu testen.

## 8. Cache-Verfuegbarkeit

Vercel Runtime Cache ist auf allen Plaenen verfuegbar, regional, projektspezifisch, nach Preview/Production getrennt und ephemer mit LRU-Eviction. Inhalte koennen Deployments ueberleben. TTL und Tags werden unterstuetzt; Aenderungen an TTL-/Tag-Semantik werden zwischen Deployments nicht automatisch abgeglichen. Ein geaenderter Cachevertrag benoetigt deshalb Versionswechsel im Key oder Purge.

Im Framework-unabhaengigen Vite-Projekt ist `getCache` aus `@vercel/functions` erforderlich. Die Dependency ist aktuell nicht installiert. Ein Eintrag darf maximal 2 MB gross sein. Reads, Writes, Hit Rate, Revalidierungen und Tags sind im Runtime-Cache-Bereich der Observability sichtbar. Reads und Writes werden regional als Nutzung erfasst.

## 9. Cache-Datenmodell

Zulaessig ist nur ein neu erzeugtes, versioniertes und minimiertes Cacheobjekt:

- API- und Analyseversion
- normalisierte Start-Origin
- finale Origin
- HTTPS-, Downgrade- und HTTP-Status
- Redirect-Anzahl und begrenzte Gesamtdauer
- allowlist-basierte Checks, Empfehlungen und Limitations
- Ergebnisstatus `complete` oder kontrolliert `partial`
- Zeitpunkt der Pruefung und Cache-Erstellung

Nicht gespeichert werden HTML, Header, Cookies, DNS-Ergebnisse, IP-Adressen, ausgewaehlte Ziel-IP, vollstaendige finale URL, Pfade, Queries, Fragmente, Redirect-Historie, Kontaktwerte, Volltexte, JSON-LD-Payloads, Request-ID, Client-IP, JA4, User-Agent oder andere Nutzerdaten. Auf einem Cache-Hit wird eine neue Request-ID erzeugt und nicht aus dem Cache uebernommen.

## 10. Cache-Key

Der interne Key wird kanonisch und nicht oeffentlich erzeugt:

```text
website-check:v1:sha256(
  apiVersion + "\0" + analysisVersion + "\0" + normalizedOrigin
)
```

Er enthaelt keine rohe Eingabe, Query, Fragment, Client-IP, E-Mail oder Request-ID. Versionsbestandteile verhindern, dass Ergebnisse eines geaenderten Analysevertrags weiterverwendet werden.

## 11. Cache-TTL

Bewertung:

- 15 Minuten: aktuell, aber geringerer Schutz vor Wiederholungen
- 30 Minuten: guter Ausgleich aus Aktualitaet, Missbrauchsschutz und spaeteren PageSpeed-Kosten
- 60 Minuten: effizienter, fuer frisch geaenderte Unternehmenswebsites aber zu traege

Empfehlung: 30 Minuten fuer erfolgreiche Ergebnisse. Die UI muss den Pruefzeitpunkt sichtbar machen und spaeter eine kontrollierte Neuanalyse ermoeglichen, ohne das Rate Limit zu umgehen.

## 12. Fehler-Caching

| Ergebnis/Fehlerklasse | Empfehlung |
| --- | --- |
| Complete mit 2xx/3xx/403/404 | 30 Minuten |
| Partial nach Analysefehler | maximal 5 Minuten |
| Zielwebsite 429 | maximal 60 Sekunden |
| Zielwebsite 500/5xx mit HTML | maximal 2 Minuten |
| DNS-Fehler | hoechstens 60 Sekunden |
| Timeout/Connection-Fehler | hoechstens 30 Sekunden |
| TLS-Fehler | hoechstens 5 Minuten |
| HTML nicht verfuegbar/zu gross | hoechstens 5 Minuten, nur wenn spaeter bewusst als negatives Cacheobjekt modelliert |
| blockiertes Ziel/Policy-Fehler | nie cachen |
| ungueltige Requests/URLs | nie cachen |
| eigener 429/Rate Limit | nie als Website-Ergebnis cachen |
| interne Fehler | nie cachen |

Kurzzeitiges negatives Caching darf nur Lastspitzen daempfen und keine langfristige Sperre erzeugen.

## 13. Single-Flight

Mehrere gleichzeitige Misses fuer denselben Cache-Key koennen identische Abrufe ausloesen. Runtime Cache dokumentiert keine atomare Lock-Primitive und garantiert kein globales Single-Flight.

Einfache MVP-Loesung: pro warmer Function-Instanz eine begrenzte Promise-Map je Cache-Key mit harter Laufzeit und garantiertem Cleanup. Das reduziert Duplikate innerhalb einer Instanz, ist aber keine globale Garantie.

Robuste Produktionsloesung: atomarer, kurzlebiger Lock in Redis/KV mit Owner-Token, Ablaufzeit und sicherem Unlock. Wartende Requests erhalten nach kurzer Wartezeit das Cache-Ergebnis oder eine sichere `503`, niemals Rohdaten des laufenden Checks.

## 14. Parallelitaet

Fuer das MVP wird lokal hoechstens zwei gleichzeitig laufende Website-Checks je Function-Instanz empfohlen; weitere lokale Requests warten nur kurz und brechen dann kontrolliert ab. Ein echtes globales Limit von wenigen Checks ist ohne persistenten Koordinationsdienst nicht garantiert. WAF-Limit, Cache und Kill-Switch reduzieren das Risiko, ersetzen aber keinen globalen Semaphore. Vor groesserem Traffic ist Redis/KV oder eine vergleichbare atomare Koordination neu zu bewerten.

## 15. Monitoring

Auf Hobby stehen Usage Dashboard, Basis-Observability, Function- und External-API-Ansichten, Runtime Errors/Logs, Invocations, Dauer, Status und Firewall-Traffic zur Verfuegung. Runtime-Cache-Reads, Writes und Hit Rate erscheinen nach einer Implementierung im Cache-Dashboard. Runtime Logs bleiben eine Stunde erhalten.

Automatische Observability-Anomaly-Alerts, laengere Logaufbewahrung und Log Drains stehen auf Hobby nicht zur Verfuegung. Pro bietet laengere Logs und Spend Management; Error-/Usage-Anomaly-Alerts erfordern zusaetzlich Observability Plus. Die konkrete Freigabe muss diese Luecke bewusst akzeptieren oder einen passenden Tarif/Add-on bestaetigen.

## 16. Datensparsame Metriken

Zulaessige aggregierbare Ereignisse:

- `request_started`
- `request_completed`
- `request_partial`
- `request_failed`
- `request_rate_limited`
- `request_cache_hit`
- `request_cache_miss`
- `duration_bucket`
- `error_code`
- `checked_status_bucket`

Die Request-ID darf kurzfristig zur Korrelation eines einzelnen Fehlers verwendet werden, aber nicht dauerhaft mit Domain, IP oder anderen Nutzerdaten verbunden werden. Kardinalitaet und Aufbewahrung sind zu begrenzen.

## 17. Alarme

Vor Freigabe benoetigt werden Alarme fuer Requestspitzen, Fehlerquote, Timeouts, Function-Dauer, Rate-Limit-Spitzen und Kosten-/Nutzungsanstieg. Auf dem aktuellen Hobby-Tarif sind konfigurierbare Observability- und Spend-Alarme nicht verfuegbar. Bis zu einer Tarifentscheidung sind nur automatische Tarifbenachrichtigungen und manuelle Dashboardkontrolle bestaetigt; das reicht fuer einen unbeaufsichtigten kommerziellen Betrieb nicht aus.

## 18. Kill-Switches

- `WEBSITE_CHECK_ENABLED`: bestehender Hauptschalter; ohne exakt `true` bleibt die API bei `503 SERVICE_NOT_READY`
- `WEBSITE_CHECK_NETWORK_ENABLED`: spaeterer separater Notfallschalter fuer alle externen DNS-/Netzwerkabrufe
- `WEBSITE_CHECK_PAGESPEED_ENABLED`: spaeterer separater PageSpeed-Schalter

Alle Schalter muessen serverseitig, fail closed, vor kostenverursachender Arbeit und in Preview sowie Production getrennt testbar sein. In diesem Schritt wurde keine Variable angelegt oder geaendert.

## 19. Spend Management und Risiken

Hobby besitzt kein konfigurierbares Spend Management und keine On-Demand-Nutzung. Bei Tarifgrenzen kann das Projekt pausieren oder die betroffene Funktion bis zur Ruecksetzung nicht mehr nutzbar sein. Pro ermoeglicht Spend Management mit Benachrichtigung und optionaler Projektpause.

Risikoklassifikation:

| Risiko | Einstufung |
| --- | --- |
| Hobby fuer kommerzielle STRUKTIVA-Nutzung | HOCH |
| ungeschuetzte externe Abrufe | HOCH |
| Function-Invocations und bereitgestellter Speicher | MITTEL |
| WAF-Rate-Limit-Nutzung | TARIFABHAENGIG |
| Runtime-Cache-Reads/Writes | TARIFABHAENGIG |
| fehlende automatische Hobby-Alarme | HOCH |
| Bandbreite durch begrenztes HTML | MITTEL |
| spaetere PageSpeed-Quota | MITTEL |
| Redis/KV-Provider | TARIFABHAENGIG |

## 20. PageSpeed-Vorbereitung

PageSpeed wird nicht implementiert. Ein spaeterer Cache-Miss kann zwei serverseitige API-Aufrufe erzeugen: Mobile und Desktop. `PAGESPEED_API_KEY` bleibt ausschliesslich serverseitig, muss in Google auf die benoetigte API und geeignete Quoten beschraenkt werden und darf nie geloggt oder ausgegeben werden. Google-Quota, 429, Timeout, 5xx, unvollstaendige Kategorien und `runtimeError` muessen pro Strategie als kontrolliertes Partial Result behandelt werden. Cache und `WEBSITE_CHECK_PAGESPEED_ENABLED` sind vor Aktivierung Pflicht.

## 21. Bot-Schutz

MVP: WAF Rate Limit, Cache, serverseitige Validierung und spaeter im UI ein unsichtbares Honeypot-Feld sowie eine plausible Mindestinteraktionszeit. Honeypot, Origin und Referer sind nur Zusatzsignale und duerfen nicht allein entscheiden.

Kein Captcha zum Start. BotID Basic ist auf Hobby grundsaetzlich verfuegbar, erfordert aber Client-/Serverintegration und eine Dependency; es wird erst bei beobachtetem Missbrauch bewertet. Turnstile oder anderes Captcha kommt nur nach Datenschutz-, Barrierefreiheits- und Ausfallbewertung in Betracht. Externe Tokens muessen serverseitig validiert werden. BotID Deep Analysis steht auf Hobby nicht zur Verfuegung.

## 22. Same-Origin und CORS

Aktuell existiert keine permissive CORS-Freigabe; das soll so bleiben. Browser anderer Origins koennen die API-Antwort daher nicht normal lesen, direkte automatisierte POST-Requests werden dadurch aber nicht verhindert.

Spaeter kann eine exakte Allowlist fuer `https://struktiva.de`, `https://www.struktiva.de` und bewusst freigegebene Preview-Kontexte ergaenzt werden. Fehlender Origin muss fuer kontrollierte Servertests separat behandelbar bleiben. Preview-Domains sind dynamisch und duerfen nicht durch eine breite Wildcard freigegeben werden. Same-Origin ist Defense in Depth, kein Ersatz fuer WAF, Rate Limit und Bot-Schutz.

## 23. Datenschutzbedarf

In einer separaten Rechts-/Inhaltsphase ist ohne Rechtsgarantie zu klaeren und zu ergaenzen:

- die eingegebene Website-Adresse wird technisch verarbeitet
- die oeffentlich erreichbare Website wird automatisiert abgerufen
- oeffentlich sichtbare Inhalte werden kurzfristig analysiert
- vollstaendiges HTML wird nicht dauerhaft gespeichert
- minimierte Ergebnisse koennen zeitlich begrenzt gecacht werden
- technische Sicherheits- und Missbrauchsdaten koennen verarbeitet werden
- es erfolgt keine automatische Kontaktaufnahme mit der geprueften Firma
- Ergebnisse werden nicht automatisch veroeffentlicht
- bei Bot-/Cache-/Monitoring-Drittanbietern sind Anbieter, Zweck, Daten, Region und Rechtsgrundlage gesondert zu bewerten

## 24. Hinweistextbedarf

Empfohlener kurzer UI-Hinweis:

> Bitte pruefen Sie nur oeffentlich erreichbare Websites. Der automatische Check analysiert technische und oeffentlich sichtbare Merkmale der eingegebenen Seite.

Ergaenzende sachliche Formulierung:

> Beim Start wird die angegebene oeffentlich erreichbare Website automatisiert abgerufen.

Die Formulierung, der Nutzer "bestaetige", dass eine beliebige Adresse aufgerufen werden "darf", wird nicht als Einwilligungskonstruktion empfohlen: Ein Besucher kann nicht automatisch fuer einen fremden Websitebetreiber einwilligen. Der Hinweis soll transparent informieren, nicht Rechtssicherheit vortaeuschen.

## 25. Betriebsmodi

1. Deaktiviert: `WEBSITE_CHECK_ENABLED` fehlt oder ist nicht exakt `true`; Antwort `503 SERVICE_NOT_READY` vor Body, DNS und Netzwerk.
2. Interner Testbetrieb: geschuetztes Preview/Deployment Protection, interne Allowlist oder separates Testflag; keine oeffentlich bekannte Funktion und nur kontrollierte eigene Testziele.
3. Oeffentlicher Betrieb: erst nach Tarif-, WAF-, Cache-, Monitoring-, Datenschutz-, UI-, Sicherheits- und Kostenfreigabe.

## 26. Live-Freigabe-Checkliste

- [ ] Feature-Flag bleibt bis zur Freigabe deaktiviert
- [ ] kommerziell geeigneter Vercel-Tarif bestaetigt
- [ ] Function-Limits und bewusstes `maxDuration` bestaetigt
- [ ] WAF Rate Limit fuer Pfad und POST eingerichtet
- [ ] Log-Phase ausgewertet
- [ ] 429 und tatsaechliche Header getestet
- [ ] Cache implementiert oder bewusst verworfen
- [ ] Cacheobjekt und Key auf Datenminimierung getestet
- [ ] Cache-TTL und Fehler-TTLs getestet
- [ ] Single-Flight und Parallelitaetsgrenzen getestet
- [ ] Monitoring aktiv und Aufbewahrung bekannt
- [ ] Alarme oder verbindlicher Ersatzprozess aktiv
- [ ] Haupt-, Netzwerk- und spaeter PageSpeed-Kill-Switch getestet
- [ ] Datenschutztext separat geprueft und ergaenzt
- [ ] Hinweistext am spaeteren Formular vorhanden
- [ ] UI barrierefrei sowie mobil und desktop getestet
- [ ] API Complete, Partial, 429 und Fehlerfaelle getestet
- [ ] keine fremden Daten im Tracking
- [ ] keine HTML-, IP-, DNS-, URL- oder Domaindaten in Logs
- [ ] Usage-/Kostenrisiko schriftlich akzeptiert
- [ ] kontrollierter Live-Test nur mit eigenem freigegebenem Ziel
- [ ] erst danach `WEBSITE_CHECK_ENABLED=true`

## 27. Empfehlungsmatrix

| Funktion | technisch moeglich | aktueller Tarif | Zusatzkosten moeglich | Dependency | Datenschutzrisiko | Aufwand | MVP | Empfehlung |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Firewall-Regel | ja | ja, max. 3 | niedrig/tarifabhaengig | nein | niedrig | niedrig | ja | einsetzen |
| WAF Rate Limit | ja | ja, 1 Regel | nutzungs-/tarifabhaengig | nein | mittel bei IP/JA4 | niedrig | ja | bevorzugt |
| Firewall SDK | ja | grundsaetzlich | tarifabhaengig | `@vercel/firewall` | mittel | mittel | nein | nur Sonderfall |
| Runtime Cache | ja | ja | nutzungsabhaengig | `@vercel/functions` | niedrig bei Datenminimierung | mittel | ja | 30 Minuten |
| Redis/KV | ja | extern | ja | ja | mittel/hoch | hoch | nein | Ausbauoption |
| In-Memory-Limit | ja | ja | nein | nein | niedrig | niedrig | nein | nur ergaenzend |
| Captcha/Turnstile | ja | extern | moeglich | Integration | mittel | mittel | nein | erst bei Missbrauch |
| BotID Basic | ja | ja | Basic nein | `botid` | mittel | mittel | nein | spaeter pruefen |
| Function Logs | ja | 1 Stunde | hoeherer Tarif fuer mehr | nein | hoch bei falschem Logging | niedrig | ja | datensparsam |
| Runtime Errors | ja | Basis verfuegbar | Plus moeglich | nein | niedrig | niedrig | ja | nutzen |
| Usage Alerts | eingeschraenkt | automatische Tarifhinweise | Pro fuer konfigurierbar | nein | niedrig | niedrig | ja | Tarif klaeren |
| Spend Alerts | ja | nicht konfigurierbar | Pro | nein | niedrig | niedrig | ja | vor Freigabe klaeren |
| Single-Flight | lokal ja | ja | robust mit KV | nein/robust ja | niedrig | mittel/hoch | ja | lokal, Grenzen offenlegen |
| globales Parallelitaetslimit | ja | nicht ohne Koordinator | KV moeglich | robust ja | mittel | hoch | spaeter | WAF + lokale Grenze zum Start |
| Netzwerk-Kill-Switch | ja | ja | nein | nein | niedrig | niedrig | ja | Schritt 31 |
| PageSpeed-Kill-Switch | ja | ja | spaetere API-Nutzung | nein | niedrig | niedrig | vor PageSpeed | spaetere Pflicht |

## 28. Bevorzugte MVP-Architektur

EMPFOHLEN ist genau folgende Architektur:

1. Keine Aktivierung auf dem derzeitigen Hobby-Tarif; zuerst kommerziell geeigneten Vercel-Tarif bestaetigen, bevorzugt Pro fuer STRUKTIVA.
2. Vercel WAF vor der Function: POST `/api/website-check`, drei Requests je zehn Minuten, IP und erst nach Preview-Nachweis zusaetzlich JA4, zuerst Log-Modus, danach 429.
3. Vercel Runtime Cache mit 30 Minuten TTL und ausschliesslich minimiertem, versioniertem Ergebnis; neue Request-ID pro Antwort.
4. Lokales Single-Flight pro warmer Instanz und maximal zwei lokale parallele Checks; keine Behauptung eines globalen Limits.
5. Keine Redis-/KV-Datenbank im ersten MVP, solange reale Last kein globales Lock oder Stundenlimit verlangt.
6. Kein Captcha zum Start; BotID/Turnstile erst nach beobachtetem Missbrauch und Datenschutzpruefung.
7. Basis-Observability, Runtime Logs, Usage/Spend-Schutz des bestaetigten Tarifs und datensparsame technische Metriken.
8. Bestehender Haupt-Kill-Switch plus separater Netzwerk-Kill-Switch; spaeter eigener PageSpeed-Kill-Switch.
9. Oeffentliche Aktivierung erst nach separater UI-/Datenschutzphase und kompletter Freigabecheckliste.

## 29. Offene Entscheidungen

- kommerziell geeigneter Tarif und Kostenfreigabe
- ob Pro-Basis-Monitoring genuegt oder Observability Plus erforderlich ist
- tatsaechlicher WAF-`Retry-After`-Header
- ob IP plus JA4 im Dashboard als gewuenschter gemeinsamer Bucket wirkt
- konkrete Runtime-Cache-Usagegrenzen des gewaehlten Tarifs
- akzeptiertes Verhalten bei lokalem Parallelitaetslimit
- Zeitpunkt fuer Redis/KV bei globalem Single-Flight oder Stundenlimit
- finale Datenschutz- und Hinweistexte nach fachjuristischer Pruefung

## 30. Konkreter Schritt 31

Schritt 31 soll nach dokumentierter Tarif- und Kostenentscheidung ein eng begrenzter Implementierungs- und Preview-Abnahmeschritt sein: WAF-Regel zunaechst im Log-Modus konfigurieren, minimierten Runtime Cache mit 30-Minuten-TTL, lokale Single-Flight-Grenze und `WEBSITE_CHECK_NETWORK_ENABLED` implementieren, 429/Cache/Kill-Switch mit Mocks und geschuetztem Preview testen und das Feature weiterhin nicht oeffentlich aktivieren. PageSpeed, Redis/KV, Captcha, Tracking und UI bleiben ausserhalb dieses Schritts.

## Quellen

Geprueft am 14. Juli 2026:

- Vercel Functions Limits: <https://vercel.com/docs/functions/limitations>
- Node.js Runtime: <https://vercel.com/docs/functions/runtimes/node-js>
- Hobby Plan: <https://vercel.com/docs/plans/hobby>
- Vercel Firewall: <https://vercel.com/docs/vercel-firewall>
- WAF Custom Rules: <https://vercel.com/docs/vercel-firewall/vercel-waf/custom-rules>
- WAF Rate Limiting: <https://vercel.com/docs/vercel-firewall/vercel-waf/rate-limiting>
- Rate Limiting SDK: <https://vercel.com/docs/vercel-firewall/vercel-waf/rate-limiting-sdk>
- WAF Usage and Pricing: <https://vercel.com/docs/vercel-firewall/vercel-waf/usage-and-pricing>
- Runtime Cache: <https://vercel.com/docs/caching/runtime-cache>
- Observability: <https://vercel.com/docs/observability>
- Runtime Logs: <https://vercel.com/docs/logs/runtime>
- Alerts: <https://vercel.com/docs/alerts>
- Manage and Optimize Usage: <https://vercel.com/docs/pricing/manage-and-optimize-usage>
- Fluid Compute Usage: <https://vercel.com/docs/functions/usage-and-pricing>
- BotID: <https://vercel.com/docs/botid>
- PageSpeed API Reference: <https://developers.google.com/speed/docs/insights/v5/reference/>
- Cloudflare Turnstile Overview: <https://developers.cloudflare.com/turnstile/>
