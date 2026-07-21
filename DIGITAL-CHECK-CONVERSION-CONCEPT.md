# Conversion-Konzept: STRUKTIVA Digital-Check für lokale Betriebe

Status: Umsetzungsreifes Fach-, Text- und Technik-Konzept<br>
Geltungsbereich: `/digital-check` und die zugehörige Danke-Seite<br>
Stand: 17. Juli 2026
Wichtig: Die technische Umsetzung dieses Konzepts ist erfolgt. STRUKTIVA weist 19 % Umsatzsteuer aus. Während der Einführungsaktion gilt „79 € einmalig inkl. 19 % MwSt.“ für die ersten zehn von STRUKTIVA verbindlich bestätigten Digital-Check-Aufträge; danach gilt der reguläre Gesamtpreis „129 € einmalig inkl. 19 % MwSt.“. Eine Formularanfrage ist noch kein Auftrag und reserviert oder reduziert keinen Einführungsplatz.

## 1. Ausgangslage

Die Route `/digital-check` beschreibt ein klar abgegrenztes, direkt verständliches Angebot mit zentral gesteuertem Einführungs- und regulärem Preis. Leistungsumfang, Ergebnisformat, Preis, Anrechnungsregel, Anfrageprozess und Conversion-Messung bilden einen durchgängigen Funnel.

Im Bestand bestehen außerdem Widersprüche:

- Der Maßnahmenplan wird teilweise als nicht versprochen aufgeführt, obwohl er künftig das zentrale Ergebnis sein soll.
- Mehrere CTAs verwenden unterschiedliche Formulierungen und Ziele.
- Ältere Inhalte nennen 49 € oder verbinden den Digital-Check unklar mit einer kostenlosen Erstberatung.
- Das vorhandene Lead-Formular erhebt andere Felder und verwendet `website` bereits als Honeypot; dieser Name darf deshalb nicht für das sichtbare Website-Feld wiederverwendet werden.
- Tracking und Consent sind grundsätzlich vorhanden, bilden den neuen Funnel aber noch nicht sauber ab. Für Google Ads fehlt insbesondere eine eindeutig konfigurierte Conversion-Aktion mit Label.
- Die bestehende technische Route `/api/website-check` ist ein automatisierter Website-Test und darf nicht mit der persönlichen, kostenpflichtigen Leistung verwechselt werden.
- Auf schmalen Viewports treten derzeit horizontale Überläufe auf. Kampagnenkopf, Hero, Formular und Cookie-Banner brauchen deshalb eine explizite mobile Abnahme.

Die steuerliche Behandlung ist verbindlich freigegeben: STRUKTIVA stellt Rechnungen mit 19 % Umsatzsteuer aus. Für die Landingpage gilt während der Einführungsaktion `79 € einmalig inkl. 19 % MwSt.` als Gesamtpreis; danach `129 € einmalig inkl. 19 % MwSt.`. Preis und Steuerhinweis werden zentral gepflegt. Vertragsentstehung, Anrechnungsbedingungen, Checkbox-Text und Datenschutz müssen rechtlich konsistent bleiben.

## 2. Ziel der Landingpage

Die Landingpage soll einen lokalen Betrieb innerhalb weniger Sekunden von einem bekannten Problem zu einer risikoarmen, klar begrenzten Anfrage führen. Sie verkauft keinen abstrakten Beratungsprozess, sondern eine persönliche Bestandsaufnahme mit priorisiertem Maßnahmenplan.

Die Seite muss:

1. Problem und Nutzen ohne Fachsprache verständlich machen.
2. Leistung, Grenze, Ergebnis, Preis und Ablauf transparent erklären.
3. durch einen glaubwürdigen Praxisbezug Vertrauen aufbauen, ohne Ergebnisse zu erfinden.
4. alle primären CTAs auf dasselbe Anfrageformular führen.
5. eine erfolgreiche qualifizierte Anfrage zuverlässig und consent-konform messen.
6. auf Mobilgeräten ohne Ablenkung, Überlagerung oder horizontalen Scroll funktionieren.

Geschäftliches Ziel ist eine qualifizierte Anfrage. Das Absenden ist noch keine kostenpflichtige Bestellung.

## 3. Zielgruppen

Primäre Zielgruppe sind inhabergeführte lokale Betriebe und kleine Unternehmen in Calw und Umgebung, deren digitale Kontaktstrecke nicht zuverlässig neue Anfragen erzeugt. Dazu zählen insbesondere Handwerk, lokale Dienstleistungen, Gesundheit und Beauty, Gastronomie, Einzelhandel sowie kleine B2B-Betriebe mit regionalem Einzugsgebiet.

Typische Ausgangslagen:

- Die Website ist vorhanden, aber ihr Beitrag zu Anfragen ist unklar.
- Das Google-Unternehmensprofil, Bewertungen und Website wirken nicht als zusammenhängender Weg.
- Interessenten finden Telefonnummer, WhatsApp, Termin- oder Anfrageweg nicht schnell genug.
- Der Betrieb erhält Einzelvorschläge von verschiedenen Dienstleistern, aber keine verständliche Priorisierung.
- Die Inhaberin oder der Inhaber möchte Klarheit, ohne gleich ein größeres Projekt zu beauftragen.

Nicht primär angesprochen werden große Shops, Plattformen, internationale Unternehmen, Unternehmen mit Bedarf an einem vollständigen technischen Security-Audit oder Organisationen, die eine umfassende Markt-, Marken- oder Unternehmensberatung erwarten.

## 4. Verbindliches Leistungsversprechen

Der STRUKTIVA Digital-Check ist eine persönliche, kompakte Prüfung des digitalen Weges eines lokalen Betriebs – von der Auffindbarkeit bis zur Kontaktaufnahme. STRUKTIVA prüft die wichtigsten öffentlich sichtbaren Kontaktpunkte, erklärt die relevanten Schwachstellen verständlich und übergibt einen nach Wirkung und Dringlichkeit priorisierten Maßnahmenplan.

Verbindliche Kurzfassung für die Kommunikation:

> Persönlich geprüft. Klar priorisiert. Ohne Verpflichtung zu einem Folgeauftrag.

Nicht versprochen werden Rankings, eine bestimmte Anzahl neuer Anfragen, Umsatzsteigerungen, eine vollständige technische oder rechtliche Prüfung, ein lückenloses SEO-/Security-Audit oder die Umsetzung der Empfehlungen. Der Maßnahmenplan selbst ist ausdrücklich Bestandteil der Leistung.

## 5. Leistungsumfang

Der aktuelle Preis gilt für einen primären Webauftritt einschließlich mobiler Darstellung, ein Google-Unternehmensprofil (sofern vorhanden), die wichtigsten Kontaktwege sowie die Bewertungs- und Vertrauensdarstellung. Geprüft werden repräsentative, für die Anfrageentscheidung relevante Seiten und öffentlich sichtbare Kontaktpunkte – nicht automatisch jede Unterseite.

Die Prüfung umfasst vier Bereiche:

1. **Website und Botschaft:** erster Eindruck, Verständlichkeit des Angebots, Vertrauenselemente, wichtige Einstiegs- und Leistungsseiten sowie mobile Nutzbarkeit.
2. **Auffindbarkeit vor Ort:** öffentlich sichtbares Google-Unternehmensprofil, Konsistenz der Kerndaten und Übergang vom Suchergebnis zur Website oder Kontaktaufnahme.
3. **Kontaktwege:** Sichtbarkeit und Plausibilität von Telefon, E-Mail, Formular, WhatsApp oder Terminweg sowie unnötige Hürden auf der Kontaktstrecke.
4. **Bewertungen und Vertrauen:** Sichtbarkeit vorhandener Bewertungen, Einbindung in die Entscheidungsstrecke und erkennbare Möglichkeiten, Vertrauen besser zu nutzen.

Enthalten sind:

- Prüfung eines primären Webauftritts und seiner mobilen Darstellung.
- Prüfung eines Google-Unternehmensprofils, sofern vorhanden.
- Prüfung der wichtigsten Kontaktwege sowie der Bewertungs- und Vertrauensdarstellung.
- kompakte schriftliche Zusammenfassung mit priorisierten nächsten Schritten.
- persönliche Ergebnisbesprechung bis maximal 30 Minuten.

Nicht enthalten sind:

- technische Umsetzung.
- vollständiges SEO-Audit.
- Rechts- oder Steuerberatung.
- Sicherheitsprüfung.
- umfangreiche Wettbewerbsanalyse.
- Prüfung mehrerer Websites oder Standorte.
- unbegrenzte Beratung.

Voraussetzung sind vollständige Angaben und, falls erforderlich, zeitnah bereitgestellte Informationen. Der Ergebnisbericht wird innerhalb von fünf Werktagen nach Eingang aller benötigten Informationen bereitgestellt.

## 6. Ergebnisformat

Das verbindliche Standardergebnis ist ein übersichtlicher PDF-Bericht von typischerweise zwei bis vier Seiten. Er enthält:

- eine kurze Gesamteinschätzung.
- die wichtigsten Beobachtungen aus den vier Prüffeldern.
- einen priorisierten Maßnahmenplan in `zuerst`, `danach` und `später`.
- eine klare Kennzeichnung dessen, was intern lösbar ist und wo externe Unterstützung sinnvoll sein kann.
- gegebenenfalls illustrative Screenshots der öffentlich sichtbaren Ausgangslage.

Der Bericht wird im persönlichen Ergebnisgespräch erläutert und anschließend unabhängig von einem Folgeauftrag vollständig übergeben. Nur wenn der Kunde ausdrücklich zustimmt, kann statt des PDFs eine gleichwertig strukturierte E-Mail verwendet werden. Das PDF bleibt die empfohlene und öffentlich kommunizierte Standardform.

## 7. Preis- und Anrechnungsmodell

Öffentlich sichtbarer Preis:

> 79 € einmalig<br>
> inkl. 19 % MwSt.

> Einführungspreis für die ersten 10 verbindlich beauftragten Digital-Checks. Danach 129 € einmalig inkl. 19 % MwSt.

Verbindlicher Erläuterungstext:

> Der für den Digital-Check tatsächlich gezahlte Betrag wird vollständig angerechnet, wenn innerhalb von 30 Tagen nach der Ergebnisbesprechung ein STRUKTIVA-Umsetzungsauftrag mit einem Mindestauftragswert von 500 € vereinbart wird. Der Mindestauftragswert gilt vor Anrechnung und bezieht sich auf STRUKTIVA-Leistungen; Fremd- und Drittkosten zählen nicht mit. Der Digital-Check bleibt eine eigenständige Leistung. Es besteht keine Verpflichtung zu einem Folgeauftrag, und die technische Umsetzung ist nicht im Checkpreis enthalten.

Zusätzliche Geschäftsregeln für Angebot und Abrechnung:

- Die Anrechnung erscheint transparent als eigene Position im Folgeangebot beziehungsweise auf der Folgerechnung.
- Eine Barauszahlung, Übertragung oder Kombination mit anderen Gutschriften ist nicht vorgesehen.
- Die 30-Tage-Frist beginnt nach der Ergebnisbesprechung, nicht nach dem Absenden des Formulars.
- Maßgeblich ist der verbindlich vereinbarte Auftragswert vor Anrechnung.
- Die Anfrage über das Formular löst noch keinen kostenpflichtigen Auftrag aus und reserviert oder reduziert keinen Einführungsplatz.

Steuerlicher Freigabestand: 79 € ist während der Einführungsaktion der Gesamtpreis inklusive 19 % Mehrwertsteuer; danach gelten 129 €. Ein verbindlicher Auftrag entsteht erst durch ausdrückliche Bestätigung von STRUKTIVA.

## 8. Primäres Conversion-Ziel

Primäres Ziel ist ein serverseitig erfolgreich angenommener Formular-Lead für den Digital-Check. Nur dieses Ereignis zählt als primäre Google-Ads-Conversion.

Sekundäre Ziele sind Klicks auf Telefon, E-Mail oder WhatsApp sowie das Starten des Formulars. Diese Signale dienen der Analyse, dürfen aber nicht ohne bewusste Entscheidung als gleichwertige Gebots-Conversions behandelt werden.

Alle primären Seiten-CTAs tragen den Text `Digital-Check anfragen` und führen zu `/digital-check#digital-check-anfrage`. Es gibt keinen konkurrierenden Hero-Link, keinen allgemeinen Kontakt-CTA und keine schwebende WhatsApp-Schaltfläche auf dieser Route.

## 9. Vollständige Seitenarchitektur

Die Seite folgt einer linearen Entscheidungsstrecke mit 13 Bereichen:

1. Reduzierter Kampagnen-Header mit Logo/Name und CTA.
2. Hero mit Problem, Nutzen, Preis, Vertrauen und primärem CTA.
3. Problemerkennung mit vier kurzen Alltagssignalen.
4. Angebotsüberblick mit der klaren Antwort, was der Check ist.
5. Prüfumfang mit vier Bereichen.
6. Ergebnis und Lieferumfang.
7. Praxisbeispiel Salon Karola.
8. Ablauf in maximal vier Schritten.
9. Eignung und Abgrenzung.
10. FAQ.
11. Anfrageformular.
12. Vertrauens- und Prozesshinweis direkt am Formular.
13. Reduzierter Footer mit Kontakt und Rechtlichem.

Es gilt `eine Idee pro Abschnitt`. Abgesehen von einem deutlich hervorgehobenen Angebotsblock werden Inhalte nicht in eine gleichförmige Kartenwand zerlegt. Wiederholte CTAs erscheinen nach Hero, Leistungs-/Ergebnisabschnitt und FAQ, bleiben aber textlich und technisch identisch.

## 10. Endgültige Texte jeder Sektion

### 10.1 Kampagnen-Header

- Wortmarke: `STRUKTIVA`
- Funktionszusatz bei ausreichend Platz: `Digital sinnvoll verbinden`
- Schaltfläche: `Digital-Check anfragen`
- Ziel: `/digital-check#digital-check-anfrage`
- Mobile: Wortmarke plus CTA, kein Hamburger-Menü und keine zusätzliche Navigation.

### 10.2 Hero

Eyebrow:

> STRUKTIVA Digital-Check für lokale Betriebe

H1:

> Ihre Website ist online. Aber bringt sie Ihnen auch Anfragen?

Unterzeile:

> Der STRUKTIVA Digital-Check zeigt Ihnen verständlich, wo Interessenten verloren gehen – und welche Verbesserungen für Ihren Betrieb wirklich sinnvoll sind.

Preiszeile:

> 79 € einmalig<br>
> inkl. 19 % MwSt.<br>
> Einführungspreis für die ersten 10 verbindlich beauftragten Digital-Checks. Danach 129 € einmalig inkl. 19 % MwSt.

Leistungszeile:

> Persönliche Prüfung, priorisierter Maßnahmenplan und etwa 30 Minuten Ergebnisgespräch.

Primäre Schaltfläche:

> Digital-Check anfragen

Mikrotext unter der Schaltfläche:

> Persönlich geprüft. Klar priorisiert. Ohne Verpflichtung zu einem Folgeauftrag.

### 10.3 Problemerkennung

Überschrift:

> Kommt Ihnen das bekannt vor?

Einleitung:

> Viele lokale Betriebe sind digital sichtbar – aber Website, Google, Bewertungen und Kontaktwege arbeiten nicht als gemeinsamer Weg zur Anfrage.

Signale:

- `Besucher erkennen nicht sofort, warum sie gerade Ihren Betrieb wählen sollten.`
- `Telefon, WhatsApp, Formular oder Terminweg sind zu schwer zu finden.`
- `Google-Profil, Website und Bewertungen vermitteln kein einheitliches Bild.`
- `Es gibt viele mögliche Baustellen, aber keine klare Reihenfolge.`

Abschluss:

> Genau hier setzt der Digital-Check an: nicht mit mehr Technik, sondern mit einer verständlichen Priorisierung.

### 10.4 Angebotsüberblick

Überschrift:

> Ein klarer Blick auf Ihren digitalen Weg zum Kunden

Text:

> Wir prüfen die wichtigsten öffentlich sichtbaren Kontaktpunkte Ihres Betriebs: vom ersten Eindruck in Google über Ihre Website bis zur konkreten Kontaktaufnahme. Sie erfahren, was bereits trägt, wo Interessenten aussteigen können und welche Schritte zuerst sinnvoll sind.

Hervorgehobener Angebotsblock:

> **STRUKTIVA Digital-Check für lokale Betriebe**<br>
> Für einen Betrieb, einen Standort, eine Website und ein Google-Unternehmensprofil.<br>
> Ergebnis innerhalb von fünf Werktagen nach Eingang aller benötigten Informationen.<br>
> **79 € einmalig**<br>
> **inkl. 19 % MwSt.**<br>
> Einführungspreis für die ersten 10 verbindlich beauftragten Digital-Checks. Danach 129 € einmalig inkl. 19 % MwSt.

Hinweis:

> Der Digital-Check ist eine eigenständige Leistung. Die Umsetzung ist nicht enthalten und bleibt Ihre freie Entscheidung.

### 10.5 Was geprüft wird

Überschrift:

> Vier Bereiche, die gemeinsam über Anfragen entscheiden

Bereich 1:

> **Website und Botschaft**<br>
> Versteht ein Interessent schnell, was Sie anbieten, für wen es gedacht ist und warum Ihr Betrieb die richtige Wahl sein kann?

Bereich 2:

> **Auffindbarkeit vor Ort**<br>
> Führt Ihr öffentlich sichtbares Google-Unternehmensprofil mit stimmigen Informationen zur Website und zum nächsten sinnvollen Schritt?

Bereich 3:

> **Kontaktwege**<br>
> Sind Telefon, E-Mail, Formular, WhatsApp oder Terminweg klar, mobil nutzbar und ohne unnötige Hürden erreichbar?

Bereich 4:

> **Bewertungen und Vertrauen**<br>
> Werden vorhandene Bewertungen und andere Vertrauenssignale dort sichtbar, wo Interessenten ihre Entscheidung treffen?

Fußnote:

> Geprüft werden repräsentative, für die Anfrage relevante Seiten und öffentlich sichtbare Kontaktpunkte. Ein vollständiges technisches, rechtliches oder SEO-Audit ist nicht Bestandteil des Angebots.

### 10.6 Was der Kunde erhält

Überschrift:

> Am Ende wissen Sie, was zuerst zu tun ist

Text:

> Sie erhalten keine lose Sammlung von Einzelmeinungen, sondern eine kompakte Entscheidungsgrundlage für Ihren Betrieb.

Leistungspunkte:

- `Eine verständliche Gesamteinschätzung ohne unnötige Fachsprache.`
- `Einen kompakten PDF-Bericht mit den wichtigsten Beobachtungen.`
- `Einen priorisierten Maßnahmenplan: zuerst, danach und später.`
- `Ein persönliches Ergebnisgespräch von ungefähr 30 Minuten.`
- `Den vollständigen Bericht – unabhängig davon, ob Sie später etwas umsetzen lassen.`

CTA:

> Digital-Check anfragen

### 10.7 Praxisbeispiel Salon Karola

Eyebrow:

> Aus der Praxis

Überschrift:

> Wenn aus einzelnen Maßnahmen ein klarer Kundenweg wird

Text:

> Beim Salon Karola trafen eine ältere Webpräsenz, wenig klare Kontaktwege und mehrere voneinander getrennte digitale Maßnahmen aufeinander. Gemeinsam entstand eine moderne eigene Website mit verständlicher Angebotsdarstellung, klaren Kontaktmöglichkeiten, WhatsApp-Anbindung, sichtbaren Bewertungen und einer nachvollziehbaren Kundenreise. Weitere Systeme konnten gezielt an diesen Weg angebunden werden.

Einordnung:

> Das Beispiel zeigt die Arbeitsweise von STRUKTIVA. Es ist kein Versprechen eines bestimmten Ergebnisses und behauptet nicht, dass das Projekt im hier angebotenen Digital-Check enthalten war.

Bildanforderung:

> Ausschließlich ein freigegebener realer Screenshot oder ein autorisiertes Foto des Betriebs verwenden. Keine KI-generierten Personen, keine erfundenen Kennzahlen und kein Link, der vom Anfrageweg wegführt.

### 10.8 Ablauf

Überschrift:

> So läuft der Digital-Check ab

Schritt 1:

> **Anfrage senden**<br>
> Sie nennen uns Ihren Betrieb, Ihre Website und die wichtigste digitale Frage.

Schritt 2:

> **Rahmen bestätigen**<br>
> Wir klären kurz, ob der Digital-Check passt, bestätigen Leistung, Preis und die noch benötigten Informationen. Erst mit unserer gesonderten Bestätigung entsteht ein kostenpflichtiger Auftrag.

Schritt 3:

> **Persönlich prüfen**<br>
> Wir betrachten Website, Google-Unternehmensprofil, Kontaktwege und sichtbare Vertrauenssignale im vereinbarten Umfang.

Schritt 4:

> **Ergebnis besprechen**<br>
> Innerhalb von fünf Werktagen nach Eingang aller Informationen erhalten Sie Ihren priorisierten Maßnahmenplan und besprechen ihn etwa 30 Minuten persönlich mit uns.

### 10.9 Für wen der Check passt

Überschrift:

> Passt der Digital-Check zu Ihrem Betrieb?

Passt, wenn:

- `Sie einen lokalen Betrieb oder ein kleines Unternehmen führen.`
- `bereits eine Website oder ein Google-Unternehmensprofil vorhanden ist.`
- `Sie mehr Klarheit über den Weg zur Anfrage brauchen.`
- `Sie eine überschaubare, unabhängige Entscheidungsgrundlage möchten.`

Passt nicht, wenn:

- `Sie ein vollständiges SEO-, Security-, Datenschutz- oder Rechtsaudit erwarten.`
- `ein großer Shop, ein Portal oder sehr viele Standorte vollständig geprüft werden sollen.`
- `Sie garantierte Rankings, Leads oder Umsätze erwarten.`
- `Sie im Preis bereits Gestaltung, Programmierung oder laufende Betreuung erwarten.`

Abschluss:

> Unsicher? Senden Sie die Anfrage mit Ihrer wichtigsten Frage. Wir sagen Ihnen vor einer Beauftragung offen, ob der Digital-Check dafür geeignet ist.

### 10.10 Häufige Fragen

Überschrift:

> Häufige Fragen zum Digital-Check

**Was kostet der Digital-Check?**

> Der Digital-Check kostet während der Einführungsaktion 79 € einmalig inkl. 19 % MwSt. Der Einführungspreis gilt für die ersten 10 verbindlich beauftragten Digital-Checks. Danach gilt der reguläre Preis von 129 € einmalig inkl. 19 % MwSt. Vor dem kostenpflichtigen Start bestätigen wir den vereinbarten Rahmen gesondert.

**Ist das Absenden des Formulars bereits eine Bestellung?**

> Nein. Mit dem Absenden stellen Sie zunächst eine unverbindliche Anfrage. Ein kostenpflichtiger Auftrag und die Berücksichtigung für den Einführungspreis entstehen erst nach einer ausdrücklichen Bestätigung durch STRUKTIVA. Die Anfrage reserviert oder reduziert keinen Einführungsplatz.

**Was genau wird geprüft?**

> Wir prüfen repräsentative, anfragerelevante Bereiche Ihrer Website, Ihr öffentlich sichtbares Google-Unternehmensprofil, Kontaktwege sowie sichtbare Bewertungen und Vertrauenssignale. Der Check gilt für einen Betrieb, einen Standort, eine Website und ein Google-Unternehmensprofil.

**Was erhalte ich als Ergebnis?**

> Sie erhalten einen kompakten PDF-Bericht mit verständlicher Einordnung und einem priorisierten Maßnahmenplan. In einem persönlichen Gespräch von ungefähr 30 Minuten gehen wir die wichtigsten Punkte gemeinsam durch.

**Wie schnell erhalte ich das Ergebnis?**

> Innerhalb von fünf Werktagen, nachdem alle für die Prüfung benötigten Informationen vollständig vorliegen.

**Muss ich die empfohlenen Maßnahmen bei STRUKTIVA umsetzen lassen?**

> Nein. Der Digital-Check ist eine eigenständige Leistung. Sie erhalten den vollständigen Maßnahmenplan und entscheiden frei, ob, wann und mit wem Sie etwas umsetzen.

**Wie funktioniert die Anrechnung?**

> Der für den Digital-Check tatsächlich gezahlte Betrag wird vollständig angerechnet, wenn innerhalb von 30 Tagen nach der Ergebnisbesprechung ein STRUKTIVA-Umsetzungsauftrag mit einem Mindestauftragswert von 500 € vereinbart wird. Die 500 € gelten vor Anrechnung und nur für STRUKTIVA-Leistungen; Fremd- und Drittkosten zählen nicht mit.

**Ist die Umsetzung im Preis enthalten?**

> Nein. Gestaltung, Texte, Programmierung, Kampagnen oder laufende Betreuung sind nicht Bestandteil des Digital-Checks. Falls Sie Unterstützung wünschen, erhalten Sie dafür ein separates Angebot.

**Ist der Digital-Check eine Rechts-, Datenschutz- oder Sicherheitsprüfung?**

> Nein. Der Digital-Check ersetzt keine Rechtsberatung und kein spezialisiertes Datenschutz-, Barrierefreiheits- oder Security-Audit. Auffällige sichtbare Hürden können wir benennen, aber nicht rechtlich oder sicherheitstechnisch zertifizieren.

**Brauche ich bereits eine Website?**

> Eine vorhandene Website ist der Regelfall. Wenn noch keine Website existiert, schildern Sie kurz Ihre Ausgangslage. Wir sagen Ihnen vor einer Beauftragung, ob der Digital-Check sinnvoll ist oder ein anderes Vorgehen besser passt.

**Werden große Shops oder mehrere Standorte vollständig geprüft?**

> Nicht im Standardumfang. Für große Shops, Portale oder mehrere Standorte stimmen wir vorab einen passenden Umfang und ein separates Angebot ab.

CTA nach FAQ:

> Digital-Check anfragen

### 10.11 Anfrageformular

Anker-ID:

> `digital-check-anfrage`

Überschrift:

> Digital-Check anfragen

Einleitung:

> Erzählen Sie uns kurz, wo es digital hakt. Wir prüfen Ihre Anfrage persönlich und melden uns mit dem passenden nächsten Schritt.

Hinweis zu Pflichtfeldern:

> Mit * gekennzeichnete Felder sind Pflichtfelder.

Felder und Texte stehen vollständig in Abschnitt 11.

Absende-Schaltfläche:

> Anfrage zum Digital-Check senden

Mikrotext unter der Schaltfläche:

> Mit dem Absenden dieses Formulars stellen Sie zunächst eine unverbindliche Anfrage. Ein kostenpflichtiger Auftrag und die Berücksichtigung für den Einführungspreis entstehen erst nach einer ausdrücklichen Bestätigung durch STRUKTIVA.

### 10.12 Vertrauenshinweis am Formular

> Persönlich bearbeitet, nicht automatisch als Massenanalyse. Ihre Kontaktdaten werden nicht zu Werbezwecken weitergegeben. Es besteht keine Verpflichtung zu einem Folgeauftrag. Weitere Informationen finden Sie in der Datenschutzerklärung.

Der Link `Datenschutzerklärung` führt zur bestehenden Datenschutzroute. Die Aussage über Weitergabe ist mit den tatsächlich eingesetzten Auftragsverarbeitern abzugleichen: Technische Dienstleister wie Resend und ein gegebenenfalls aktivierter Webhook müssen korrekt beschrieben werden.

### 10.13 Reduzierter Footer

Inhalt:

- `STRUKTIVA`
- `Calw`
- verlinkte geschäftliche Telefonnummer und E-Mail-Adresse aus den zentralen Bestandsdaten.
- Links `Impressum` und `Datenschutz`.
- optional `Cookie-Einstellungen`, sofern die vorhandene Consent-Lösung diese Funktion anbietet.

Abschlusszeile:

> Digital sinnvoll verbinden.

Keine allgemeine Seitennavigation, keine weiteren Leistungs-CTAs, keine Social-Wall und kein Newsletter im Kampagnen-Footer.

## 11. Formularfelder und Labels

Sichtbare Felder in dieser mobilen und semantischen Reihenfolge:

| Feldname | Label | Typ | Pflicht | Hilfe/Optionen |
|---|---|---|---|---|
| `name` | `Vor- und Nachname *` | Text, autocomplete `name` | Ja | max. 120 Zeichen |
| `company` | `Betrieb / Unternehmen *` | Text, autocomplete `organization` | Ja | max. 160 Zeichen |
| `email` | `E-Mail-Adresse *` | E-Mail, autocomplete `email`, inputmode `email` | Ja | serverseitig validieren |
| `phone` | `Telefonnummer` | Telefon, autocomplete `tel`, inputmode `tel` | Nein | max. 50 Zeichen |
| `industry` | `Branche *` | Select oder Combobox | Ja | `Handwerk`, `Gesundheit & Beauty`, `Gastronomie`, `Einzelhandel`, `Lokale Dienstleistung`, `B2B-Dienstleistung`, `Andere Branche` |
| `companyWebsite` | `Website` | URL, autocomplete `url`, inputmode `url` | Nein | sichtbares Feld; bewusst nicht `website` nennen |
| `preferredContact` | `Wie dürfen wir Sie am besten erreichen?` | Radio | Nein | `E-Mail`, `Telefon`, `WhatsApp`; WhatsApp nur zeigen, wenn betrieblich zulässig |
| `digitalProblem` | `Was ist aktuell Ihre wichtigste digitale Frage? *` | Textarea | Ja | Hilfe: `Zum Beispiel: wenige Anfragen über die Website, unklare Kontaktwege oder ein Google-Profil, das kaum genutzt wird.`; max. 2.000 Zeichen |
| `privacyConsent` | siehe unten | Checkbox | Ja | nicht vorausgewählt |

Checkbox-Text, vor Veröffentlichung rechtlich freizugeben:

> Ich habe die Datenschutzerklärung gelesen und bin damit einverstanden, dass STRUKTIVA meine Angaben zur Bearbeitung meiner Anfrage verarbeitet. *

Unsichtbares Spam-Schutzfeld:

- Name: `contactTrap`
- technisch fokussierbar und für Assistenztechnik verborgen, nicht mit `display: none` als einzigem Bot-Signal.
- serverseitig ablehnen, wenn befüllt.
- ergänzend serverseitiges Rate-Limit, Zeitplausibilität und Deduplizierung verwenden.

Verdeckte Attributionsfelder:

- `utmSource`
- `utmMedium`
- `utmCampaign`
- `utmContent`
- `utmTerm`
- `gclid`
- `referrer`
- `landingPage`

Validierungsregeln:

- Pflichtfelder erhalten HTML-`required` und programmatisch erkennbaren Pflichtstatus.
- Fehler stehen direkt am Feld, werden über `aria-describedby` verknüpft und in einer fokussierbaren Fehlerzusammenfassung verlinkt.
- Nach fehlerhaftem Absenden erhält die Fehlerzusammenfassung Fokus; Daten bleiben erhalten.
- Während der Anfrage wird die Schaltfläche deaktiviert und eindeutig mit `Wird gesendet …` beschriftet.
- Client- und Servervalidierung stimmen bei Feldnamen, Maximallängen und zulässigen Werten überein.
- Die API akzeptiert keine unerwarteten Felder, HTML-Inhalte oder Header-Injektionen.
- Wiederholtes Absenden desselben Requests wird über Request-/Idempotency-ID und ein kurzes serverseitiges Deduplizierungsfenster abgefangen.
- Keine Passwörter, Kontozugänge oder sensiblen Gesundheitsdaten anfordern. Ein entsprechender kurzer Hinweis kann an der Textarea stehen.
- `website` bleibt dem vorhandenen Honeypot vorbehalten oder wird sauber migriert; sichtbare Website-Daten laufen ausschließlich über `companyWebsite`.

## 12. Erfolgsmeldung und Danke-Seite

Nach einem erfolgreichen `2xx`-Response der Lead-API wird zuerst genau einmal das Success-Event mit einer nicht personenbezogenen eindeutigen Lead-/Event-ID ausgelöst. Danach erfolgt die Navigation zu `/digital-check/danke`.

Die Danke-Seite ist keine Conversion-Quelle. Ein direkter Aufruf, Reload oder Zurück/Vor darf kein neues Lead-Event auslösen. Ein kurzlebiger Session-Marker kann unterscheiden, ob die Seite nach echtem Erfolg oder direkt geöffnet wurde.

SEO-Regel: `noindex, nofollow`, keine Aufnahme in Sitemap oder Navigation, Canonical auf die eigene Danke-URL oder bewusst kein Canonical gemäß technischer SEO-Freigabe.

Finaler Text nach echtem Erfolg:

H1:

> Vielen Dank – Ihre Anfrage zum Digital-Check ist angekommen.

Text:

> Wir sehen uns Ihre Angaben persönlich an und melden uns in der Regel innerhalb eines Werktags. Dabei klären wir, ob der Digital-Check zu Ihrer Ausgangslage passt und welche Informationen wir noch benötigen.

Hinweis:

> Ihre Anfrage ist noch keine kostenpflichtige Bestellung. Ein Auftrag entsteht erst nach unserer gesonderten Bestätigung.

Sekundärer Link:

> Zur STRUKTIVA-Startseite

Text bei direktem Aufruf ohne Success-Marker:

> Sie möchten einen Digital-Check anfragen? Nutzen Sie bitte das Anfrageformular, damit wir Ihre Ausgangslage persönlich prüfen können.

Schaltfläche:

> Zum Anfrageformular

Ziel: `/digital-check#digital-check-anfrage`.

## 13. Visuelles Konzept

### Visuelle These

Die Landingpage wirkt wie eine ruhige, persönliche Diagnose aus einer regionalen Werkstatt für digitale Kundenwege: präzise, nahbar und handwerklich – nicht wie ein generisches Software-Dashboard. Schwarz und Weiß bilden die klare Grundlage; ein sparsam eingesetzter, barrierearm geprüfter Goldton markiert Preis, Fokus und Handlung.

### Inhaltsdramaturgie

Der Nutzer sieht zuerst die eigene Unsicherheit, dann die klare Leistung, anschließend den greifbaren Output und erst danach den Beleg aus der Praxis. Der Formularabschluss fühlt sich wie der logische nächste Schritt an, nicht wie ein plötzlicher Verkaufssprung.

### Interaktionsthese

Interaktion dient der Orientierung: Der feste CTA springt zuverlässig zum Formular, FAQ-Antworten öffnen sich ruhig, und der Formularstatus ist jederzeit eindeutig. Es gibt keine dekorative Interaktion, die mit dem Anfrageziel konkurriert.

### Gestaltungsregeln

- maximal zwei Schriftfamilien; vorhandene Markenfonts bevorzugen.
- eine Akzentfarbe zusätzlich zu Schwarz, Weiß und neutralen Grautönen.
- große, typografisch starke Hero-Zone mit echtem, freigegebenem Betriebs- oder Arbeitssituationsmotiv beziehungsweise einem anonymisierten realen Prüfartefakt.
- kein KI-generierter Mensch und kein generisches Stockmotiv mit Laptop-Handschlag.
- genau ein herausgehobener Angebotsblock; restliche Abschnitte über Typografie, Linien, Weißraum und wechselnde Text-/Bildrhythmen strukturieren.
- keine gleichförmige Kartenmatrix und keine dekorativen Analyse-Diagramme ohne reale Daten.
- Praxisbeispiel mit realem, freigegebenem Screenshot oder Foto und klarer Bildunterschrift.
- Primärbutton kontraststark gefüllt; Links und Sekundäraktionen klar untergeordnet.

### Bewegung

Nur drei Motionsmuster:

1. sehr dezentes Einblenden von Hero-Text und Angebotsblock beim ersten Laden.
2. leichtes, einmaliges Erscheinen von Abschnittsinhalten beim Eintritt in den Viewport.
3. unmittelbarer Farb-/Rahmenwechsel für Hover und Fokus von interaktiven Elementen.

Keine endlosen Animationen, Parallax-Effekte oder springenden CTAs. Bei `prefers-reduced-motion: reduce` werden Übergänge und Scroll-Animationen deaktiviert; Ankernavigation springt ohne Smooth-Scroll.

## 14. Mobile- und Accessibility-Regeln

Verbindlich zu prüfen sind 320, 360, 390, 430, 768, 1024 und 1440 CSS-Pixel Breite.

Layoutregeln:

- `document.documentElement.scrollWidth === document.documentElement.clientWidth` auf allen Testbreiten.
- Gridspalten mit `minmax(0, 1fr)`; direkte Grid-/Flex-Kinder mit `min-width: 0`.
- Bilder, Videos und SVGs mit `max-width: 100%` und sinnvoller intrinsischer Größe.
- keine festen Mindestbreiten, die 320 Pixel überschreiten.
- kein `overflow-x: hidden` als Reparatur für ein fehlerhaftes Layout.
- lange URLs, E-Mail-Adressen und deutsche Komposita müssen umbrechen können.
- Hero auf schmalen Geräten einspaltig. Bestehende Muster wie `minmax(25rem, …)`, großflächiges `hyphens: none` und späte `overflow: visible !important`-Überschreibungen vermeiden.
- Cookie-Banner mit `max-width: calc(100vw - 2rem)`, sicherem Seitenabstand, begrenzter Höhe und internem Scrollbereich. Es darf CTA und Formular nicht dauerhaft unbedienbar machen.
- kein schwebender WhatsApp-Button auf `/digital-check` und `/digital-check/danke`.
- Kampagnen-Header bleibt kurz und darf bei 320 Pixeln weder Logo noch CTA abschneiden.

Barrierefreiheit:

- semantische Landmarken `header`, `main`, `footer` und ein sichtbarer Skip-Link bei Tastaturfokus.
- genau eine H1; danach logisch geschachtelte H2/H3.
- alle Formfelder mit sichtbaren Labels; Placeholder nie als einziges Label.
- Fokusindikator mit mindestens 3:1 Kontrast zum Umfeld und ohne Abschneiden.
- Touchziele mindestens 44 × 44 CSS-Pixel.
- Textkontrast mindestens 4,5:1; große Schrift und UI-Komponenten mindestens 3:1 gemäß WCAG.
- Gold nur verwenden, wenn Text-/Flächenkombinationen die Kontrastprüfung bestehen.
- Status- und Fehlermeldungen über passende `aria-live`-Regionen; Erfolg nicht nur über Farbe vermitteln.
- Accordion-Buttons mit `aria-expanded`, `aria-controls` und vollständiger Tastaturbedienung.
- aussagekräftige Alternativtexte; dekorative Bilder mit leerem Alt-Text.
- Zoom bis 200 Prozent und Textvergrößerung ohne Informationsverlust.
- `prefers-reduced-motion` respektieren.

## 15. Tracking- und Eventplan

Grundregel: Die Anfrage funktioniert immer, auch ohne Statistik- oder Marketing-Einwilligung. Tracking-Tags werden weiterhin erst nach der jeweiligen Einwilligung geladen. Es werden keine Namen, E-Mail-Adressen, Telefonnummern, Freitexte, vollständigen URLs oder rohen Referrer an Analyse- oder Werbeplattformen gesendet.

Gemeinsame erlaubte Parameter, sofern vorhanden und bereinigt:

- `page_path`
- `lead_type: digital_check`
- `source`, `medium`, `campaign`, `content`, `term`
- `referrer_domain`
- `gclid_present` als Boolean, nie der rohe GCLID-Wert
- `preferred_contact`
- `industry`
- `event_id` für Deduplizierung

| Event | Auslöser | GA4 bei Statistik-Consent | Google Ads bei Marketing-Consent | Pinterest bei Marketing-Consent |
|---|---|---|---|---|
| `digital_check_page_view` | Route wird sichtbar, einmal je Navigation | Event mit gemeinsamen Parametern | kein Conversion-Event | `pagevisit`, falls im bestehenden Schema vorgesehen |
| `digital_check_cta_click` | Klick auf einen CTA zum Formular | Position des CTA zusätzlich als `cta_location` | optional nur Audience-/Diagnosesignal | optional Custom Event |
| `digital_check_form_start` | erste echte Interaktion mit einem sichtbaren Formularfeld | einmal je Session/Formular | keine primäre Conversion | kein Lead |
| `digital_check_form_submit_success` | Lead-API antwortet erfolgreich; genau einmal pro Event-ID | empfohlenes Lead-Event plus spezifischer Eventname | **primäre Conversion**, `send_to` mit finaler Conversion-ID und Label, Wert aus der zentralen Angebotskonfiguration, Währung `EUR`, Event-ID zur Deduplizierung | `lead`, genau einmal |
| `digital_check_form_submit_error` | API-, Netzwerk- oder Validierungsfehler beim Senden | nur erlaubter `error_code`, keine Rohmeldung | keine Conversion | kein Lead |
| `digital_check_whatsapp_click` | Klick auf betriebliche WhatsApp-Kontaktmöglichkeit | Kanal und Position | nur sekundäre Conversion, nicht primäres Bidding-Ziel | optional `lead` nur wenn bewusst als getrennte sekundäre Aktion konfiguriert |
| `digital_check_phone_click` | Klick auf `tel:` | Kanal und Position | sekundär | optional Custom Event |
| `digital_check_email_click` | Klick auf `mailto:` | Kanal und Position | sekundär | optional Custom Event |

Technische Regeln:

- Die bestehende GA4-Mess-ID und Google-Ads-ID zentral weiterverwenden, nicht nochmals inline duplizieren.
- Vor Livegang in Google Ads eine eigene Conversion-Aktion `Digital-Check Anfrage erfolgreich` erstellen und den vollständigen `send_to`-Wert aus Conversion-ID plus Label konfigurieren. Ohne Label darf der Erfolg nicht als fertig implementiert gelten.
- `value` aus der zentralen Angebotskonfiguration und `currency: EUR` nur für die erfolgreiche primäre Anfrage verwenden. Dies ist ein definierter Lead-Wert, kein gemessener Umsatz; die interne Auswertung muss das so benennen.
- Pinterest `Lead` nur nach echtem API-Erfolg und Marketing-Einwilligung senden.
- Doppelklick, API-Retry, Reload und Danke-Seitenaufruf dürfen keinen zweiten Erfolg erzeugen.
- Zulässige Fehlercodes sind eine kleine Allowlist, etwa `validation`, `rate_limited`, `network`, `server`, `unknown`.
- Bestehendes generisches `generate_lead` kann für übergreifende GA4-Berichte zusätzlich gesendet werden, aber nur aus derselben zentralen Success-Funktion. Keine zweite Ads-/Pinterest-Conversion daraus ableiten.
- Die aktuelle Klickerkennung muss Hash-Ziele wie `/digital-check#digital-check-anfrage` korrekt normalisieren.

## 16. UTM- und Google-Ads-Attribution

Erfasste Werte: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid`, Referrer und Landingpage.

Empfohlener Ablauf:

1. Beim initialen Landingpage-Aufruf Parameter sofort in einen bereinigten In-Memory-Datensatz übernehmen. Dafür ist keine Speicherung erforderlich.
2. Für Navigation innerhalb derselben Browser-Session optional unter `struktiva-attribution-v1` in `sessionStorage` speichern – erst nach dokumentierter rechtlicher/Consent-technischer Einordnung dieser Speicherung.
3. Eine First-Touch-Speicherung in `localStorage` für höchstens 30 Tage ist nur mit Marketing-Einwilligung zulässig und erst nach rechtlicher Freigabe zu aktivieren.
4. Hidden Fields werden beim Rendern beziehungsweise vor dem Absenden aus dem aktuellen Attributionsdatensatz befüllt.
5. Die API nimmt die Werte in die interne Lead-E-Mail und den optionalen internen Webhook auf.

Fallback für `source` und `medium`:

- vorhandenes `utm_source`/`utm_medium` hat Vorrang.
- bei vorhandenem `gclid`: `source = google`, `medium = cpc`, sofern keine expliziten UTM-Werte widersprechen.
- sonst Referrer-Domain als Quelle und `referral` als Medium.
- ohne Kampagnen- und Referrer-Signal: `source = direct`, `medium = none`.

Datensparsamkeit und Sicherheit:

- UTM-Werte allowlisten/bereinigen und auf 200 Zeichen begrenzen.
- `landingPage` nur als Pfad ohne Query oder Fragment speichern.
- für Analytics nur die Referrer-Domain, nicht die vollständige Referrer-URL verwenden.
- der rohe `gclid` darf intern mit dem Lead gespeichert/übermittelt werden, aber nie als Analytics-Eventparameter erscheinen; extern nur `gclid_present: true/false`.
- keine Attributionsdaten in sichtbare Erfolgstexte oder clientseitige Logs schreiben.
- unbekannte Parameter verwerfen.
- Datenschutzerklärung und Aufbewahrungsregel müssen die mit dem Lead verbundenen Attributionsdaten ausdrücklich abdecken.

## 17. SEO- und Structured-Data-Konzept

Finale Metadaten:

- Title: `Digital-Check für lokale Betriebe | STRUKTIVA Calw`
- Meta Description: Preis aus der zentralen Angebotskonfiguration; während der Einführungsaktion `79 € einmalig inkl. 19 % MwSt.`.
- Canonical: `https://struktiva.de/digital-check`
- Open Graph Title: `STRUKTIVA Digital-Check für lokale Betriebe – 79 €` während der Einführungsaktion.
- Open Graph Description: `Persönliche Prüfung, klar priorisierter Maßnahmenplan und Ergebnisgespräch für lokale Betriebe.`
- Open Graph URL: `https://struktiva.de/digital-check`
- Open Graph Type: `website`
- Twitter Card: `summary_large_image`
- Social Image: eigenes, reales und freigegebenes Kampagnenmotiv in geeignetem 1,91:1-Format, keine generische oder KI-generierte Person.
- H1: `Ihre Website ist online. Aber bringt sie Ihnen auch Anfragen?`

Structured Data: ein `Service`-Objekt mit:

- `name`: `STRUKTIVA Digital-Check für lokale Betriebe`
- `serviceType`: `Digitaler Unternehmens- und Kontaktwege-Check`
- `provider`: bestehendes korrektes `ProfessionalService`-/`Organization`-Objekt von STRUKTIVA.
- `areaServed`: Calw sowie Deutschland; keine unzutreffende lokale Exklusivität behaupten.
- `offers`: `Offer` mit `price: 79` während der Einführungsaktion beziehungsweise `129` danach, `priceCurrency: EUR`, korrekter URL und ohne erfundenes `priceValidUntil`.
- keine erfundenen Bewertungen, `aggregateRating`, garantierten Ergebnisse oder Preisgültigkeitsdaten.

Technische SEO-Anforderungen:

- Die Route braucht bereits im ausgelieferten HTML route-spezifischen Title, Description, Canonical, Social Tags und JSON-LD. Rein clientseitiges Austauschen nach JavaScript reicht für Social Crawler nicht zuverlässig aus; deshalb statische Generierung, Pre-Rendering oder eine gleichwertige Build-Lösung vorsehen.
- `/digital-check` bleibt in der Sitemap und wird intern von einem kurzen, klar anders formulierten Startseiten-Teaser verlinkt.
- Der Startseiten-Teaser erklärt nur Problem und Nutzen, wiederholt nicht den vollständigen Landingpage-Text und verwendet einen eindeutigen Linktext wie `Digital-Check für lokale Betriebe ansehen`.
- `/digital-check/danke` erhält `noindex, nofollow` und bleibt aus Sitemap sowie Navigation ausgeschlossen.
- FAQ-Markup nicht automatisch einsetzen. `FAQPage` nur verwenden, wenn die dann geltenden Suchrichtlinien und Sichtbarkeit der Antworten geprüft sind; es ist für die Conversion-Seite nicht erforderlich.

## 18. Datenschutzrelevante Datenfelder

Personen- und unternehmensbezogene Formulardaten:

- Name, Betrieb/Unternehmen, E-Mail, Telefon, Branche, Website, bevorzugter Kontaktweg und Freitext.
- Zeitstempel, technische Request-/Event-ID, Spam-/Rate-Limit-Signale und Bearbeitungsstatus.
- UTM-Felder, GCLID, Referrer und Landingpage werden spätestens mit dem Absenden einem konkreten Lead zugeordnet und sind entsprechend in der Datenschutzdokumentation zu behandeln.

Zu dokumentierende Empfänger und Systeme:

- STRUKTIVA als Verantwortlicher.
- Resend als eingesetzter E-Mail-Dienstleister/Auftragsverarbeiter, soweit aktuell zutreffend.
- ein optional konfigurierter Webhook und dessen tatsächlicher Betreiber/Verarbeitungsort, bevor er produktiv genutzt wird.
- Hosting-, Logging- und Sicherheitsdienste, soweit sie Request-Daten verarbeiten.
- Google Analytics, Google Ads und Pinterest nur im Umfang der jeweils erteilten Einwilligung.

Vor Veröffentlichung zu klären:

- Rechtsgrundlage der Anfragebearbeitung. Die bestehende Beschreibung mit Art. 6 Abs. 1 lit. b/f DSGVO muss mit einer verpflichtenden Einwilligungscheckbox und deren Wortlaut konsistent sein; unnötige Einwilligungen vermeiden.
- Speicherdauer. Die im Bestand genannte maximale Dauer von sechs Monaten ist auf Erforderlichkeit, Löschprozess, Backups, E-Mails, Webhook-Ziel und Attributionsdaten zu prüfen.
- Session-/Local-Storage-Einsatz für Attribution und dessen Consent-Kategorie.
- korrekte Beschreibung der Dienstleister und möglicher Drittlandtransfers.
- Widerruf, Betroffenenrechte und Kontaktangaben.
- keine Zusage `keine Weitergabe`, die notwendige technische Auftragsverarbeitung verschweigt. Zulässig ist nach Prüfung die engere Aussage, dass Kontaktdaten nicht zu Werbezwecken weitergegeben werden.

## 19. Bereinigung bestehender Widersprüche

Die nächste Implementierung muss folgende Punkte projektweit bereinigen:

1. **49-Euro-Altstand:** Vorkommen in `src/legacy/legacyContent.jsx` und historischen Architekturdokumenten suchen. Produktive Inhalte auf die zentrale Angebotskonfiguration umstellen. Historische Dokumentation nicht stillschweigend umschreiben, sondern alte 49-€-Passagen sichtbar als historisch/überholt markieren.
2. **Maßnahmenplan:** In `src/components/digital-check/digitalCheckData.js` darf der Maßnahmenplan nicht mehr als ausgeschlossen erscheinen. Formulierung und Umfang an Abschnitt 5 und 6 angleichen. Das Wort `garantiert` vermeiden; geliefert wird ein priorisierter Plan, nicht ein garantierter Geschäftserfolg.
3. **Kostenlose Erstberatung:** Allgemeine kostenlose oder unverbindliche Erstgespräche in `src/legacy/legacyContent.jsx` klar vom kostenpflichtigen Digital-Check trennen. Sie dürfen weder denselben Namen noch denselben Leistungsumfang suggerieren.
4. **CTA-Namen und Ziele:** Alte Varianten wie `Digital-Check ansehen`, `starten` oder allgemeine Kontaktziele auf den kontextgerechten CTA vereinheitlichen. Primäre Digital-Check-CTAs führen zu `/digital-check#digital-check-anfrage`.
5. **Routing:** Den derzeitigen CTA in `src/routing/routeConfig.js`, der auf `/kontakt#lead-form` zeigt, auf das Kampagnenformular umstellen.
6. **Automatischer Website-Check:** `/api/website-check` technisch bestehen lassen, aber in UI und Dokumentation konsequent `Automatisierter Website-Check` nennen. Das bezahlte Angebot heißt immer vollständig `STRUKTIVA Digital-Check für lokale Betriebe`.
7. **Formfeldkollision:** Das sichtbare Feld heißt `companyWebsite`; der Honeypot darf nicht denselben Namen verwenden und wird auf `contactTrap` vereinheitlicht.
8. **Vertrauen/Datenschutz:** Absolute Aussagen zur Nichtweitergabe an vorhandene Auftragsverarbeiter anpassen.
9. **Metadaten:** Alte generische Digital-Check-Titles, Descriptions und Social-Texte projektweit ersetzen.
10. **README und Routendokumentation:** Produktbeschreibung, neue Danke-Route, Leadfelder, Tracking und Abgrenzung zum automatisierten Check dokumentieren.

Bekannte Fundstellen, die mindestens geprüft werden müssen:

- `src/legacy/legacyContent.jsx`, insbesondere bisherige 49-€-Nennungen und kostenlose Beratungsformulierungen.
- `src/components/digital-check/digitalCheckData.js`.
- `src/routing/routeConfig.js`.
- `docs/STRUKTIVA-FINAL-REBUILD-ACCEPTANCE.md`.
- `docs/STRUKTIVA-INTEGRATION-AND-LEGACY-ROUTE-REVIEW.md`.
- `docs/STRUKTIVA-REBUILD-ARCHITECTURE.md`.

## 20. Genaue Umsetzungsreihenfolge

1. Die erteilte steuerliche Freigabe (`79 € einmalig inkl. 19 % MwSt.` während der Einführungsaktion, danach `129 € einmalig inkl. 19 % MwSt.`) dokumentieren; Anfrage-/Vertragstext, Checkbox, Speicherdauer und Attribution rechtlich konsistent halten.
2. Vor Beginn Git-Status sichern und vorhandene fremde/ungetrackte Dateien unangetastet lassen.
3. Zentrale Produktkonstanten für Name, Preis, Umfang, Lieferzeit und Anrechnung definieren, damit Texte und JSON-LD nicht auseinanderlaufen.
4. Route `/digital-check/danke`, route-spezifische Metadaten und Pre-Rendering-Strategie vorbereiten.
5. Reduzierten Campaign Header/Footer und das route-spezifische App-Shell-Verhalten ohne Floating-WhatsApp implementieren.
6. Landingpage in der Reihenfolge aus Abschnitt 9 aufbauen und alle Texte aus Abschnitt 10 einsetzen.
7. Formular mit neuen Feldnamen, Validierung, Honeypot, Barrierefreiheit, Zuständen und Success-Navigation implementieren.
8. Lead-API-Schema, Sanitizing, Rate-Limit/Deduplizierung, interne E-Mail, Bestätigungsmail und optionalen Webhook erweitern.
9. Attributions-Hook implementieren und Daten bis zur API vollständig, datensparsam und testbar durchreichen.
10. zentrale Tracking-Funktion mit Consent-Gates, Event-ID und genau-einmal-Semantik implementieren; finale Ads-Conversion-ID plus Label aus dem Werbekonto hinterlegen.
11. SEO-Tags, JSON-LD, Social Image, `noindex` der Danke-Seite und Startseiten-Teaser fertigstellen.
12. alte CTAs, 49-€-Nennungen, Maßnahmenplan-Widerspruch, kostenlose Beratung und automatisierten Website-Check gemäß Abschnitt 19 bereinigen.
13. automatisierte API-, Routing-, Tracking- und Build-Tests ergänzen.
14. Desktop-, Mobile-, Tastatur-, Screenreader-nahe und Consent-Abnahme nach Abschnitt 22 durchführen.
15. Datenschutz/Impressum/Vertragskommunikation mit der tatsächlich implementierten Datenstrecke final abgleichen.
16. Erst nach erfolgreicher Abnahme committen, deployen und reale Testanfrage inklusive interner und externer E-Mail prüfen.

## 21. Vollständige Dateiliste für die nächste Implementierung

Die Liste ist die erwartete Arbeitsfläche. Vor der Umsetzung muss sie gegen den dann aktuellen Stand geprüft werden; vorhandene Benutzeränderungen sind zu erhalten.

### Zu ändernde Dateien

- `package.json` – Build-/Pre-Rendering-/Testskripte, nur falls für statische Metadaten nötig.
- `README.md` – Angebot, Routen, Formular, API, Tracking und Abgrenzung dokumentieren.
- `vercel.json` – nur falls Rewrite/Header für Pre-Rendering oder Danke-Route erforderlich sind.
- `api/leads.js` – neues Schema, Attribution, Sanitizing, Deduplizierung, E-Mail-/Webhook-Inhalte.
- `src/styles.css` – Kampagnenlayout, responsive Regeln, Fokus, Formular, Cookie-Banner-Korrekturen.
- `src/cookieConsent.jsx` – zentrale consent-konforme Events beziehungsweise Campaign-Ausnahmen; keine ID-Duplikate.
- `src/hooks/useDocumentTitleSafe.js` – route-spezifische Metadaten nur soweit noch benötigt; statisches HTML bleibt maßgeblich.
- `src/hooks/useMarketingLeadTracking.js` – zentrale Success-Logik und Campaign-Eventintegration oder Ablösung durch spezialisiertes Modul.
- `src/routing/routeConfig.js` – CTA-Ziel und Danke-Route-Metadaten.
- `src/routing/pageRegistry.jsx` – Danke-Seite registrieren.
- `src/components/layout/AppShell.jsx` – Campaign Header/Footer und kein Floating-WhatsApp auf beiden Routen.
- `src/components/contact/ContactLeadForm.jsx` – gemeinsame robuste Formularbausteine nur wenn sinnvoll extrahiert; bestehende Kontaktseite darf nicht regressieren.
- `src/components/home/HomeDigitalCheckSection.jsx` – kurzer, nicht kannibalisierender Teaser und eindeutiger Link.
- `src/pages/DigitalCheckPage.jsx` – Seitenkomposition und route-spezifischer Inhalt.
- `src/components/digital-check/DigitalCheckHero.jsx`.
- `src/components/digital-check/DigitalCheckIntro.jsx` – Problemerkennung und Angebotsüberleitung.
- `src/components/digital-check/DigitalCheckAreas.jsx` – vier Prüffelder.
- `src/components/digital-check/DigitalCheckExpectations.jsx` – Ergebnis, enthaltene und ausgeschlossene Leistungen.
- `src/components/digital-check/DigitalCheckTrustSection.jsx` – Praxisbeispiel und Vertrauensbeleg.
- `src/components/digital-check/DigitalCheckProcess.jsx`.
- `src/components/digital-check/DigitalCheckSuitability.jsx` – Eignung und Abgrenzung.
- `src/components/digital-check/DigitalCheckCta.jsx`.
- `src/components/digital-check/digitalCheckData.js` – Texte, Umfang, FAQ und Widersprüche.
- `src/components/about/AboutCta.jsx` und `src/components/about/AboutHero.jsx` – alte Digital-Check-CTAs.
- `src/components/case-study/CaseStudyCta.jsx` – altes CTA-Ziel.
- `src/components/contact/ContactHero.jsx` und `src/components/contact/contactData.js` – widersprüchliche Produktverweise.
- `src/components/packages/PackagesCta.jsx`, `src/components/packages/PackagesHero.jsx` und `src/components/packages/packagesData.js` – Preis-/CTA-Konsistenz.
- `src/components/practice/PracticeFinalSections.jsx` – Produktverweise.
- `src/components/services/ServicesCta.jsx` – Produktverweis.
- `src/components/solutions/SolutionsFinalSections.jsx` – Produktverweis.
- `src/legacy/legacyContent.jsx` – 49 €, kostenlose Beratung, Datenschutz, alte CTAs und Benennung des automatisierten Checks.
- `docs/STRUKTIVA-FINAL-REBUILD-ACCEPTANCE.md` – alten Preis als historischen Stand kennzeichnen.
- `docs/STRUKTIVA-INTEGRATION-AND-LEGACY-ROUTE-REVIEW.md` – alten Preis als historischen Stand kennzeichnen.
- `docs/STRUKTIVA-REBUILD-ARCHITECTURE.md` – alten Preis als historischen Stand kennzeichnen.

Falls einzelne genannte Komponenten im aktuellen Stand anders heißen oder bereits zusammengeführt wurden, gilt die fachliche Funktion und nicht das Erzwingen einer alten Dateistruktur.

### Neu anzulegende Dateien

- `src/components/layout/CampaignHeader.jsx`
- `src/components/layout/CampaignFooter.jsx`
- `src/components/digital-check/DigitalCheckOfferSummary.jsx`
- `src/components/digital-check/DigitalCheckFaq.jsx`
- `src/components/digital-check/DigitalCheckFormSection.jsx`
- `src/components/digital-check/DigitalCheckLeadForm.jsx`
- `src/pages/DigitalCheckSuccessPage.jsx`
- `src/hooks/useCampaignAttribution.js`
- `src/lib/digitalCheckTracking.js`
- `tests/leads.test.mjs`
- `scripts/prerender-digital-check.mjs` – nur wenn die gewählte Build-Lösung ein separates Script benötigt.

### Bewusst nicht erforderlich

- keine neue Sitemap-Datei, sofern die bestehende Sitemap `/digital-check` bereits korrekt enthält und die Danke-Route nicht automatisch aufgenommen wird.
- kein neuer allgemeiner Design-System-Layer nur für diese Seite.
- keine Änderung an `/api/website-check`, sofern die Abgrenzung in UI und Dokumentation ohne API-Umbenennung sauber gelingt.

## 22. Abnahmekriterien Desktop und Mobile

### Inhalt und Conversion

- Produktname, H1, Preis, Lieferzeit, Ergebnisformat, Grenzen und Anrechnungsregel entsprechen exakt diesem Konzept.
- Alle primären CTAs heißen `Digital-Check anfragen` und fokussieren beziehungsweise erreichen `#digital-check-anfrage` zuverlässig.
- Keine konkurrierende Hauptaktion, keine allgemeine Navigation im Campaign Header und kein Floating-WhatsApp auf den beiden Campaign-Routen.
- Salon Karola wird ohne erfundene Kennzahlen oder ungesicherte Zuordnung zum Check dargestellt; Bildrechte sind dokumentiert.
- `49 €` erscheint nirgends mehr als aktueller Digital-Check-Preis. Historische Dokumente markieren die Angabe sichtbar als überholt.
- Kostenlose Erstberatung und kostenpflichtiger Digital-Check sind textlich eindeutig getrennt.

### Formular und Backend

- Pflicht-/Optionalfelder, Labels, Namen, Reihenfolge und Maximallängen entsprechen Abschnitt 11.
- Sichtbare Website nutzt `companyWebsite`; Honeypot nutzt `contactTrap`.
- Client- und Servervalidierung, Sanitizing, Rate-Limit und Deduplizierung sind getestet.
- Erfolgreiche Anfrage erzeugt genau eine interne Lead-Nachricht und eine passende Bestätigungsmail; Fehler erzeugen keine Bestätigung.
- UTM, GCLID, Referrer und Landingpage erreichen interne E-Mail und optionalen Webhook korrekt und datensparsam.
- Ohne Analyse-/Marketing-Consent kann das Formular vollständig erfolgreich abgesendet werden.
- Die Danke-Seite erscheint erst nach API-Erfolg. Direkter Aufruf, Reload, Doppelklick und Retry erzeugen keine weitere Conversion.
- API-Fehler sind verständlich, fokussierbar und lassen Eingaben bestehen; keine internen Details gelangen in die UI.

### Tracking und Consent

- Jedes Event aus Abschnitt 15 wird mit erwarteten Parametern und korrektem Consent-Gate getestet.
- Ohne Consent werden keine GA4-, Google-Ads- oder Pinterest-Requests ausgelöst; die serverseitige Anfrage funktioniert trotzdem.
- Mit Statistik-, aber ohne Marketing-Consent gehen nur zulässige GA4-Events ab.
- Mit Marketing-Consent feuern Ads/Pinterest erst nach echtem API-Erfolg.
- Google Ads erhält die finale Conversion-ID inklusive Label, den `value` aus der zentralen Angebotskonfiguration, `currency: EUR` und eine Deduplizierungs-ID.
- Namen, E-Mail, Telefon, Freitext, rohe GCLID und vollständige Referrer-/Landing-URLs erscheinen in keinem Analytics-/Ads-/Pinterest-Event.
- Telefon-, E-Mail- und WhatsApp-Klicks bleiben sekundäre Aktionen.

### SEO und Technik

- Ausgeliefertes HTML von `/digital-check` enthält ohne Client-JavaScript den korrekten Title, Description, Canonical, OG-/Twitter-Tags und valides `Service`-JSON-LD.
- `/digital-check/danke` ist `noindex, nofollow`, nicht in Sitemap/Navigation und löst beim Aufruf kein Success-Event aus.
- Social Preview verwendet das freigegebene reale Motiv und zeigt korrekten Text.
- Production Build und vollständige bestehende Testsuite laufen fehlerfrei; neue API-/Trackingtests laufen mit.
- Falls ein Lint-Skript ergänzt wird, läuft es ohne Fehler. Andernfalls werden die geänderten Dateien mit dem im Projekt vorhandenen Formatter/Checker geprüft.
- Keine neuen Console Errors, unhandled Rejections, 404s oder Hydration-Warnungen.

### Responsive und visuelle Abnahme

- Manuelle beziehungsweise automatisierte Screenshots bei 320, 360, 390, 430, 768, 1024 und 1440 Pixeln zeigen keine Überlagerung oder abgeschnittenen Inhalte.
- Auf jeder Breite gilt `scrollWidth === clientWidth`; horizontales Scrollen ist nicht durch Verbergen kaschiert.
- Hero, Preis, CTA und Formular sind bei 320 Pixeln vollständig sichtbar und lesbar.
- Cookie-Banner bleibt innerhalb des Viewports, ist intern scrollbar und blockiert keine dauerhaft unerreichbare Aktion.
- Angebotsblock, Praxisbild und Formular skalieren ohne feste Mindestbreite.
- Desktop nutzt die verfügbare Fläche ruhig; Textzeilen bleiben lesbar und werden nicht übermäßig breit.

### Accessibility

- Vollständige Tastaturbedienung in sinnvoller Reihenfolge, sichtbarer Fokus, funktionierender Skip-Link und kein Fokusverlust nach Navigation/Validierung.
- Genau eine H1, logische Überschriften, korrekte Landmarken und verständliche Linktexte.
- Alle Formlabels, Fehlerbezüge, Pflichtangaben, Live-Regionen und Accordion-Zustände werden programmatisch erkannt.
- Touchziele sind mindestens 44 × 44 Pixel; Text- und UI-Kontraste bestehen die definierten Schwellen.
- 200-Prozent-Zoom, Textvergrößerung und `prefers-reduced-motion` funktionieren ohne Informations- oder Funktionsverlust.
- Ein Screenreader-Test deckt Hero, Leistungsumfang, FAQ, Formularfehler und Erfolgsmeldung ab.

### Abschlussfreigabe

- Steuerliche und rechtliche Freigabepunkte aus Abschnitt 7, 11, 16 und 18 sind dokumentiert erledigt.
- Reale Testanfrage in der Produktionsumgebung wurde intern empfangen, bestätigt und consent-konform gemessen.
- Vorhandene, nicht zum Auftrag gehörende Dateien und Änderungen bleiben unangetastet.
