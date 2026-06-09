# STRUKTIVA Unternehmensarchitektur Website

Professionelle Onepage-Webseite für STRUKTIVA Unternehmensarchitektur.

## Technik

- React
- Vite
- Tailwind CSS
- lucide-react Icons
- Vercel Serverless Function unter `/api/leads`
- SMTP-Versand mit `nodemailer`

## Lokal starten

```bash
npm install --no-package-lock
npm run dev
```

Danach öffnest du die lokale URL, die Vite im Terminal anzeigt.

## Build testen

```bash
npm run build
npm run preview
```

## Deployment mit GitHub + Vercel

1. GitHub-Repository verbinden.
2. Projekt in Vercel importieren.
3. Framework als `Vite` verwenden.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deployment starten.

## Lead-System

Es wurde ein zentrales Anfrage-System unter `/projekt-anfragen` eingebaut.

Der Ablauf:

1. Besucher füllt das Anfrageformular aus.
2. Das Frontend sendet die Daten an `/api/leads`.
3. Die Serverless Function prüft Pflichtfelder, Datenschutz-Zustimmung und Honeypot-Spamschutz.
4. Danach wird per SMTP eine interne E-Mail an STRUKTIVA gesendet.
5. Zusätzlich wird per SMTP eine Bestätigungs-E-Mail an den Interessenten versendet.
6. Wenn `LEAD_WEBHOOK_URL` gesetzt ist, werden die Lead-Daten zusätzlich per `POST` an diese URL übertragen.

### Benötigte Umgebungsvariablen

Diese Variablen in Vercel hinterlegen:

```env
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
LEAD_RECEIVER_EMAIL=struktiva.info@gmail.com
LEAD_WEBHOOK_URL=
```

Hinweise:

- `SMTP_PORT` wird numerisch verarbeitet.
- Bei `SMTP_PORT=465` wird `secure=true` verwendet.
- Bei `SMTP_PORT=587` wird `secure=false` verwendet.
- `SMTP_FROM` ist die sichtbare Absenderadresse für interne und externe E-Mails.
- `LEAD_RECEIVER_EMAIL` ist die interne Empfängeradresse für neue Leads.
- `LEAD_WEBHOOK_URL` ist optional. Wenn gesetzt, werden Leads zusätzlich an Google Sheets, Airtable, Make, Zapier oder ein eigenes Dashboard weitergegeben.

### Beispiel für Gmail SMTP

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=deine-email@gmail.com
SMTP_PASS=dein-app-passwort
SMTP_FROM=STRUKTIVA <deine-email@gmail.com>
LEAD_RECEIVER_EMAIL=struktiva.info@gmail.com
LEAD_WEBHOOK_URL=
```

### Webhook-Format

Wenn `LEAD_WEBHOOK_URL` gesetzt ist, wird ein JSON-Objekt mit diesen Feldern gesendet:

- `createdAt`
- `source`
- `status`
- `name`
- `company`
- `email`
- `phone`
- `preferredContact`
- `interest`
- `projectStart`
- `budgetRange`
- `message`

### Lead-System testen

1. In Vercel oder lokal die ENV-Werte setzen.
2. Die Seite `/projekt-anfragen` öffnen.
3. Pflichtfelder ausfüllen und Datenschutz bestätigen.
4. Formular absenden.
5. Erfolgsmeldung im Frontend prüfen.
6. Eingang der internen E-Mail an `LEAD_RECEIVER_EMAIL` prüfen.
7. Eingang der Bestätigungs-E-Mail beim Interessenten prüfen.
8. Optional prüfen, ob der Webhook die Daten empfängt.

## Vor Veröffentlichung anpassen

- rechtliche Platzhalter in `src/main.jsx` mit echten Angaben ergänzen
- WhatsApp-Link bei Bedarf durch die echte Nummer ersetzen
- Impressum, Datenschutz und Widerruf final juristisch prüfen
- optional eigene Domain in Vercel verbinden
