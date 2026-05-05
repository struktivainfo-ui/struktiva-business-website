# STRUKTIVA Business Website

Professionelle Onepage-Webseite für STRUKTIVA Business-Service.

## Technik

- React
- Vite
- Tailwind CSS
- lucide-react Icons

## Lokal starten

```bash
npm install
npm run dev
```

Danach öffnest du die lokale URL, die Vite im Terminal anzeigt.

## Build testen

```bash
npm run build
npm run preview
```

## Deployment mit GitHub + Vercel

1. Neues GitHub-Repository erstellen, z. B. `struktiva-business-website`.
2. Projektdateien hochladen oder per Git pushen.
3. Bei Vercel einloggen.
4. `Add New Project` auswählen.
5. GitHub-Repository importieren.
6. Framework wird normalerweise als `Vite` erkannt.
7. Build Command: `npm run build`
8. Output Directory: `dist`
9. Deploy starten.

## Vor Veröffentlichung anpassen

- E-Mail-Adresse in `src/main.jsx` ersetzen: `kontakt@struktiva.de`
- WhatsApp-Link ersetzen: `https://wa.me/491234567890`
- Impressum, Datenschutz und Widerruf mit echten Seiten oder Links verbinden
- Optional eigene Domain in Vercel verbinden
