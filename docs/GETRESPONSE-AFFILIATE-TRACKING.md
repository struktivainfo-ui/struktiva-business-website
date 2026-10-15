# GetResponse-Affiliate-Tracking

## Ereignis in GA4

Die Website sendet nach Statistik-Einwilligung bei einem Klick auf einen bestehenden GetResponse-Partnerlink das Ereignis `getresponse_affiliate_click`.

Das Ziel bleibt unverändert: `https://try.getresponsetoday.com/71f61c5tu71k`.

Das Ereignis enthält:

- `affiliate_program`: `getresponse`
- `affiliate_page`: Ratgeberseite, auf der der Klick erfolgte
- `affiliate_placement`: Position des Links (`article_start`, `comparison` oder `article_end`)
- `affiliate_destination_host`: `try.getresponsetoday.com`
- optionale Kampagnenparameter: `affiliate_utm_source`, `affiliate_utm_medium`, `affiliate_utm_campaign`, `affiliate_utm_content`

GA4 ordnet zusätzlich die Sitzung über die Standarddimensionen **Sitzung – Quelle/Medium** und **Landingpage** zu. Für eine eigene Exploration die Dimensionen `affiliate_page` und `affiliate_placement` als benutzerdefinierte Ereignisparameter in GA4 registrieren. Die Website selbst kann dies nicht per Code erledigen.

## Neue Pinterest-Links

Bestehende Pins bleiben unverändert. Für neue Pins diese Muster verwenden und pro Pin nur den Wert von `utm_content` ändern:

| Zielseite | URL für einen neuen Pinterest-Pin |
| --- | --- |
| Newsletter-Software | `https://struktiva.de/software-tools/newsletter-software-kleine-unternehmen?utm_source=pinterest&utm_medium=organic_social&utm_campaign=getresponse_newsletter&utm_content=pin_newsletter_01` |
| GetResponse für kleine Unternehmen | `https://struktiva.de/software-tools/getresponse-kleine-unternehmen?utm_source=pinterest&utm_medium=organic_social&utm_campaign=getresponse_getresponse&utm_content=pin_getresponse_01` |
| Newsletter im Friseursalon | `https://struktiva.de/software-tools/newsletter-friseursalon?utm_source=pinterest&utm_medium=organic_social&utm_campaign=getresponse_salon&utm_content=pin_salon_01` |
| E-Mail-Marketing für kleine Unternehmen | `https://struktiva.de/software-tools/email-marketing-kleine-unternehmen?utm_source=pinterest&utm_medium=organic_social&utm_campaign=getresponse_emailmarketing&utm_content=pin_emailmarketing_01` |

## Testablauf

1. In einem privaten Browserfenster STRUKTIVA öffnen und **Statistik** akzeptieren.
2. Einen GetResponse-Link genau einmal anklicken.
3. In GA4 unter **Admin → DebugView** oder im Bericht **Ereignisse** nach `getresponse_affiliate_click` prüfen.
4. Prüfen, dass `affiliate_page` und `affiliate_placement` den erwarteten Wert tragen.
5. Den gleichen Link sofort ein zweites Mal anklicken: Innerhalb einer Sekunde soll kein zweites Ereignis entstehen.

Testklicks sind keine Registrierungen und keine Verkäufe. PartnerStack kann Registrierungen und zahlende Kunden nur erfassen, wenn GetResponse diese nach dem Wechsel zum Partnerlink an PartnerStack zurückmeldet. GA4 kann diese externen Schritte nicht eigenständig beobachten.

## Eigene Besuche erkennen

Für künftige Auswertungen in GA4 eine interne Traffic-Regel anhand der festen Büro- oder Heim-IP einrichten und zunächst als **Testdatenfilter** beobachten. Erst nach Prüfung auf **Aktiv** setzen. Mobile Netze, wechselnde IPs, VPNs und Vercel-Vorschauen werden damit nicht zuverlässig erfasst; sie sollten für Qualitätssicherung zusätzlich über klar benannte UTM-Testlinks oder GA4 DebugView gekennzeichnet werden.
