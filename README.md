# STRUKTIVA Unternehmensarchitektur Website

Professionelle Onepage-Webseite für STRUKTIVA Unternehmensarchitektur.

## Technik

- React
- Vite
- Tailwind CSS
- lucide-react Icons
- Vercel Serverless Function unter `/api/leads`
- Resend-Versand mit dem Paket `resend`

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
3. Die Serverless Function prüft Pflichtfelder, Datenschutz-Zustimmung, Honeypot-Spamschutz und Rate-Limiting.
4. Danach wird über Resend eine interne E-Mail an `<LEAD_RECEIVER_EMAIL>` gesendet.
5. Zusätzlich wird über Resend eine Bestätigungs-E-Mail an den Interessenten versendet.
6. Wenn `LEAD_WEBHOOK_URL` gesetzt ist, werden die Lead-Daten zusätzlich per `POST` an diese URL übertragen.

### Benötigte Umgebungsvariablen

Diese Variablen in Vercel hinterlegen:

```env
RESEND_API_KEY=
SMTP_FROM=
LEAD_RECEIVER_EMAIL=<LEAD_RECEIVER_EMAIL>
LEAD_WEBHOOK_URL=
```

Hinweise:

- `RESEND_API_KEY` wird für den E-Mail-Versand mit Resend genutzt.
- `SMTP_FROM` ist die verifizierte sichtbare Absenderadresse bei Resend.
- `LEAD_RECEIVER_EMAIL` ist die interne Empfängeradresse für neue Leads.
- `LEAD_WEBHOOK_URL` ist optional. Wenn gesetzt, werden Leads zusätzlich an Google Sheets, Airtable, Make, Zapier oder ein eigenes Dashboard weitergegeben.

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

- rechtliche Inhalte in `src/main.jsx` final juristisch ergänzen
- WhatsApp-Link bei Bedarf durch die echte Nummer ersetzen
- Impressum, Datenschutz und Widerruf final juristisch prüfen
- optional eigene Domain in Vercel verbinden
