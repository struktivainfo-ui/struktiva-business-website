# STRUKTIVA: B2B-Software und SaaS-Affiliate

Stand: 7. Oktober 2026

## Zweck und Abgrenzung

Der Bereich `struktiva.de/software-tools` richtet sich an kleine Unternehmen und lokale Dienstleister. Er folgt dem Brief `STRUKTIVA_SaaS_Affiliate_Business.md`. Das Wohn- und Pinterest-Projekt „Schön & Praktisch | Wohnideen“ bleibt redaktionell und bei Partnerlinks getrennt.

## Veröffentlichte Inhalte

- Übersicht: `/software-tools`
- GetResponse für kleine Unternehmen: `/software-tools/getresponse-kleine-unternehmen`
- GetResponse Marketing-Automation: `/software-tools/getresponse-automatisierung-newsletter`
- Newsletter-Software im Vergleich: `/software-tools/newsletter-software-kleine-unternehmen`
- E-Mail-Marketing für lokale Dienstleister: `/software-tools/email-marketing-lokale-dienstleister`
- CRM für kleine Unternehmen: `/software-tools/crm-kleine-unternehmen`

Die zwei GetResponse-Seiten, der Newsletter-Vergleich sowie die Ratgeber zu E-Mail-Marketing für kleine Unternehmen und zu Salon-Newslettern verwenden den freigegebenen PartnerStack-Link `https://try.getresponsetoday.com/71f61c5tu71k`. Die Adresse wird zentral in `src/config/affiliate.js` verwaltet. Jede Seite mit diesem Link zeigt eine Provisionsoffenlegung direkt oben und nahe dem Link. Die Links tragen `rel="sponsored nofollow noopener noreferrer"`.

## Messung des GetResponse-Funnels

Alle GetResponse-Links lösen bei vorhandener Statistik-Einwilligung das GA4-Ereignis `affiliate_click` aus. Die Parameter `affiliate_page` und `affiliate_placement` sind in GA4 als ereignisbezogene benutzerdefinierte Dimensionen „Affiliate Seite“ und „Affiliate Platzierung“ registriert. Sie zeigen die STRUKTIVA-Quellseite und die Position des Links. Ohne Statistik-Einwilligung wird kein GA4-Ereignis gesendet; der Partnerlink funktioniert weiterhin. PartnerStack bleibt die Quelle für zugerechnete Registrierungen und zahlende Kunden. Dessen bisheriger gemeinsamer Link ordnet Klicks nicht einzelnen Ratgebern zu. Beim Vergleich der Systeme müssen Zeitraum und Consent-bedingte Lücken berücksichtigt werden.

Der Build schreibt den sichtbaren Inhalt des Software-Hubs und aller Software-Ratgeber zusätzlich in das ausgelieferte HTML. Die React-App ersetzt ihn nach dem Laden. Damit sind Überschriften, Text und interne Ratgeberlinks auch ohne JavaScript lesbar. Eine Aufnahme in den Google-Index ist dadurch nicht garantiert.

## Redaktionelle und Programmregeln

- Produktname als „GetResponse“ schreiben; keine geänderten Logos oder nicht freigegebenen Markenmaterialien verwenden.
- Eigenschaften anhand öffentlicher Anbieterinformationen belegen. Ohne eigenen Produkttest keine eigenen Erfahrungen, Ergebnisse oder Erfolgszahlen behaupten.
- Preise, Rabatte und Tarifumfänge vor einer Entscheidung beim Anbieter prüfen lassen; keine dauerhaften Rabattversprechen auf STRUKTIVA veröffentlichen.
- Werbliche E-Mails nur mit passender Einwilligung und Abmeldemöglichkeit planen.
- GetResponse nicht ohne vorherige schriftliche Zustimmung über bezahlte Such- oder Social-Anzeigen bewerben. Keine Belohnung für Registrierung oder Probeabo versprechen.
- Auf Seiten mit Affiliate-Link die Vergütung gut sichtbar und möglichst nahe bei der Empfehlung erklären.

Diese Regeln wurden gegen die am 6. Oktober 2026 gespeicherten GetResponse-Affiliate-Bedingungen und den GetResponse-Onboarding-Guide geprüft. Der Onboarding-Guide nennt den individuellen PartnerStack-Link als Weg zur Zuordnung und schreibt die Schreibweise „GetResponse“ vor. Die aktuelle öffentliche Produktbeschreibung kann sich ändern und sollte bei künftigen Aktualisierungen erneut geprüft werden.

## Weitere Arbeit außerhalb dieses GetResponse-Schritts

Der Business-Brief priorisiert auch SimplyBook.me und eine branchenspezifische Seite zur Online-Terminbuchung für Friseursalons. Diese Integration benötigt einen eigenen freigegebenen Affiliate-Link und eine gesonderte Prüfung der Teilnahmebedingungen. Sie ist kein Teil der GetResponse-Veröffentlichung.
