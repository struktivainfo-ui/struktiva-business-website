# STRUKTIVA Digitale Unternehmensberatung Website

Professionelle mehrseitige Webseite fuer STRUKTIVA Digitale Unternehmensberatung.

## Technik

- React
- Vite
- Tailwind CSS
- lucide-react Icons
- Vercel Serverless Function unter `/api/leads`
- Resend-Versand mit dem Paket `resend`

## Seitenstruktur

- `/`
- `/leistungen`
- `/pakete`
- `/referenzen`
- `/demos`
- `/ueber-uns`
- `/kontakt`
- `/datenschutz`
- `/impressum`

## Lokal starten

```bash
npm install
npm run dev
```

Danach die lokale URL oeffnen, die Vite im Terminal anzeigt.

## Build testen

```bash
npm run build
npm run preview
```

## Deployment mit GitHub + Vercel

1. GitHub-Repository verbinden.
2. Projekt in Vercel importieren.
3. Framework als `Vite` verwenden.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Deployment starten.

## Lead-System

Das zentrale Anfrage-System ist unter `/kontakt` eingebaut.

Der Ablauf:

1. Besucher fuellt das Anfrageformular aus.
2. Das Frontend sendet die Daten an `/api/leads`.
3. Die Serverless Function prueft Pflichtfelder, Datenschutz-Zustimmung, Honeypot-Spamschutz und Rate-Limiting.
4. Danach wird ueber Resend eine interne E-Mail an `<LEAD_RECEIVER_EMAIL>` gesendet.
5. Zusaetzlich wird ueber Resend eine Bestaetigungs-E-Mail an den Interessenten versendet.
6. Wenn `LEAD_WEBHOOK_URL` gesetzt ist, werden die Lead-Daten zusaetzlich per `POST` an diese URL uebertragen.

### Benoetigte Umgebungsvariablen

Diese Variablen in Vercel hinterlegen:

```env
RESEND_API_KEY=
SMTP_FROM=
LEAD_RECEIVER_EMAIL=<LEAD_RECEIVER_EMAIL>
LEAD_WEBHOOK_URL=
```

Hinweise:

- `RESEND_API_KEY` wird fuer den E-Mail-Versand mit Resend genutzt.
- `SMTP_FROM` ist die verifizierte sichtbare Absenderadresse bei Resend.
- `LEAD_RECEIVER_EMAIL` ist die interne Empfaengeradresse fuer neue Leads.
- `LEAD_WEBHOOK_URL` ist optional.

### Lead-System testen

1. In Vercel oder lokal die ENV-Werte setzen.
2. Die Seite `/kontakt` oeffnen.
3. Pflichtfelder ausfuellen und Datenschutz bestaetigen.
4. Formular absenden.
5. Erfolgsmeldung im Frontend pruefen.
6. Eingang der internen E-Mail an `LEAD_RECEIVER_EMAIL` pruefen.
7. Eingang der Bestaetigungs-E-Mail beim Interessenten pruefen.
8. Optional pruefen, ob der Webhook die Daten empfaengt.

## Vor Veroeffentlichung pruefen

- Rechtliche Inhalte in `src/main.jsx` final juristisch pruefen.
- WhatsApp-Link bei Bedarf durch die echte Nummer ersetzen.
- Impressum und Datenschutz final juristisch pruefen.
- Optional eigene Domain in Vercel verbinden.
