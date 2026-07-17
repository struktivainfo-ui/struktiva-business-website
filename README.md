# STRUKTIVA Digitale Unternehmensberatung Website

Mehrseitige React-/Vite-Website für STRUKTIVA Digitale Unternehmensberatung mit Vercel Functions, Resend, Consent-gesteuertem Tracking und einem persönlichen Digital-Check-Funnel.

## Aktive Routen

- `/`, `/leistungen`, `/loesungen`, `/pakete`
- `/praxisbeispiele`, `/praxisbeispiele/salon-karola`
- `/digital-check` – persönlicher STRUKTIVA Digital-Check für lokale Betriebe
- `/digital-check/danke` – noindex-Bestätigung nach erfolgreicher Anfrage
- `/ueber-uns`, `/kontakt`, `/datenschutz`, `/impressum`
- geschützte Demo-Routen unter `/demos/*`

`/api/website-check` ist der getrennte automatisierte Website-Check. Er ist weder das persönliche 129-Euro-Angebot noch dessen Formular-Backend.

## Lokal entwickeln und prüfen

```bash
npm install
npm run dev
npm run test:website-check
npm run test:leads
npm run build
npm run preview
```

Der Build erzeugt zusätzlich statische HTML-Einstiege für `/digital-check` und `/digital-check/danke`. Dadurch sind Title, Description, Canonical, Social Tags, Robots und das Service-JSON-LD bereits ohne Client-JavaScript vorhanden. Die passenden Vercel-Rewrites stehen in `vercel.json`.

## Digital-Check-Angebot

Die zentrale Angebotsquelle ist `src/config/digitalCheckOffer.js`. Name, Grundpreis, CTA, Bearbeitungszeit, Anrechnungszeitraum, Mindestauftragswert und Leistungsabgrenzung dürfen nicht als unabhängige Preisstrings an mehreren Stellen gepflegt werden.

STRUKTIVA weist 19 % Umsatzsteuer aus. Der veröffentlichte und vom Kunden zu zahlende Gesamtpreis ist `129 € einmalig inkl. 19 % MwSt.`; auf die 129 € wird kein weiterer Umsatzsteuerbetrag aufgeschlagen. `VITE_DIGITAL_CHECK_TAX_NOTE` ist optional und akzeptiert ausschließlich die bestätigte Formulierung `inkl. 19 % MwSt.`. Eine leere oder widersprüchliche Variable entfernt den bestätigten Standardwert nicht.

## Lead-System

`POST /api/leads` unterstützt zwei getrennte Modelle:

- allgemeine Kontaktanfrage (`leadType: contact` oder ohne `leadType`)
- Digital-Check-Anfrage (`leadType: digital_check`)

Nach erfolgreicher Validierung wird zuerst die interne Benachrichtigung zugestellt. Diese Zustellung gilt als primärer Erfolg und wird über die `submissionId` zehn Minuten lang pro Function-Instanz dedupliziert. Fehler einer nachgelagerten Bestätigungsmail oder eines optionalen Webhooks werden ohne personenbezogene Logdaten protokolliert und führen nicht zu einer irreführenden 500-Antwort.

Rate-Limit und Deduplizierung arbeiten bewusst im Speicher der einzelnen Serverless-Instanz. Sie reduzieren versehentliche Wiederholungen, garantieren aber ohne persistenten gemeinsamen Speicher keinen globalen Schutz über parallele oder neu gestartete Instanzen hinweg.

### Servervariablen

```env
RESEND_API_KEY=
SMTP_FROM=
LEAD_RECEIVER_EMAIL=
LEAD_WEBHOOK_URL=
```

`LEAD_WEBHOOK_URL` ist optional. Vor Aktivierung müssen Zielsystem, Auftragsverarbeitung, Verarbeitungsort und Datenschutzerklärung geprüft sein.

## Attribution und Conversion-Tracking

Der Digital-Check erfasst First-Touch-Werte aus UTM-Parametern, GCLID, Referrer und Landingpage. Sie bleiben zunächst im Arbeitsspeicher. Nur bei Marketing-Einwilligung werden sie für höchstens 30 Minuten unter `struktiva-attribution-v1` im Session Storage gehalten. Personenbezogene Formularfelder werden nicht in Analytics-, Ads- oder Pinterest-Events aufgenommen.

Für eine spezifische Google-Ads-Conversion muss der im Ads-Konto erzeugte vollständige Zielwert gesetzt werden:

```env
VITE_GOOGLE_ADS_DIGITAL_CHECK_SEND_TO=AW-123456789/verified_label
```

Ohne einen gültigen Wert wird kein `send_to` erfunden. Das consent-konforme GA4-Ereignis bleibt davon unabhängig. Pinterest `lead` wird nur nach einem tatsächlich erfolgreichen Lead und nur mit Marketing-Einwilligung gesendet.

## Beispielkonfiguration

`.env.example` enthält ausschließlich Variablennamen und nicht produktive Beispielwerte. Keine Schlüssel oder Conversion-Labels committen.

## Vor Veröffentlichung

- Preis-/Anrechnungsformulierung, Formularhinweis und Datenschutz rechtlich prüfen.
- Gesamtpreis und Anrechnungsbedingungen in der Auftragsbestätigung konsistent als `129 € einmalig inkl. 19 % MwSt.` ausweisen.
- Resend-Absender und interne Empfängeradresse verifizieren.
- optionales Webhook-Ziel datenschutzrechtlich dokumentieren.
- echtes Google-Ads-Conversion-Ziel eintragen und Consent-Kombinationen testen.
- keine echten Kundenanfragen aus lokalen oder Preview-Tests versenden.
