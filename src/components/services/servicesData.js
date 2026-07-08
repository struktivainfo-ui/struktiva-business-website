export const serviceFlow = ['Bedarf verstehen', 'Bausteine auswählen', 'Verbindungen planen', 'Im Alltag nutzen']

export const serviceBuildingBlocks = [
  'Website',
  'Sichtbarkeit',
  'Kontaktwege',
  'Kundendaten',
  'Kundenbindung',
  'Interne Systeme',
  'Automatisierung',
]

export const serviceAreas = [
  {
    id: 'web-sichtbarkeit',
    label: '01',
    eyebrow: 'Webauftritt und Sichtbarkeit',
    title: 'Websites, Landingpages und lokale Auffindbarkeit, die den nächsten Schritt klar machen.',
    text:
      'STRUKTIVA plant, gestaltet und entwickelt digitale Auftritte so, dass Menschen schnell verstehen, was ein Unternehmen anbietet, warum es vertrauenswürdig ist und wie sie Kontakt aufnehmen können.',
    includes: [
      'Unternehmenswebsites und kompakte Onepager',
      'Landingpages für konkrete Angebote, Aktionen oder Dienstleistungen',
      'Relaunches bestehender Seiten mit klarerer Struktur',
      'Mobile Nutzerführung mit sichtbaren Kontaktwegen',
      'Grundlagen für lokale Google-Sichtbarkeit und Bewertungswege',
      'Verbindung von Website, Google-Profil, QR-Strukturen und Kontakt',
    ],
    outcome: 'Gefunden werden, verstanden werden, Vertrauen aufbauen und den Kontakt erleichtern.',
  },
  {
    id: 'kundenkontakt',
    label: '02',
    eyebrow: 'Kundenkontakt und Anfrageführung',
    title: 'Kontaktwege, Formulare und Anfrageprozesse, die weniger Reibung erzeugen.',
    text:
      'Viele digitale Probleme entstehen nicht auf der Website allein, sondern zwischen Interesse, Anfrage und Bearbeitung. Deshalb verbindet STRUKTIVA Kontaktpunkte mit verständlichen internen Abläufen.',
    includes: [
      'Kontakt- und WhatsApp-Strukturen',
      'Anfrageformulare mit klarer Informationslogik',
      'Lead- und Anfrageweiterleitung',
      'E-Mail-Prozesse und Antwortvorlagen',
      'Bewertungs- und Rückmeldewege',
      'Kundeninformationen strukturiert erfassen und weitergeben',
    ],
    outcome: 'Aus Interesse wird schneller eine bearbeitbare Anfrage.',
  },
  {
    id: 'kundenbindung',
    label: '03',
    eyebrow: 'Kundenbindung und digitale Kundenstrukturen',
    title: 'Kundenbindung wird stärker, wenn Wiederkehr, Erinnerung und Bewertung zusammen gedacht werden.',
    text:
      'STRUKTIVA entwickelt einfache digitale Kundenstrukturen, die zu realen Abläufen passen. Dazu gehören Kundenkartenlogiken, Bonusstrukturen, Erinnerungen, Bewertungswege und verständliche Kundenkommunikation.',
    includes: [
      'Digitale Kundenkarten- und Bonusstrukturen als Web- oder Systemlogik',
      'Kundenverwaltung für einfache wiederkehrende Kontakte',
      'Erinnerungs- und Wiederkehrprozesse',
      'Bewertungswege nach erbrachter Leistung',
      'Kundenkommunikation mit klaren Vorlagen',
      'Verbindung von Kontakt, Kundenstatus und nächstem Schritt',
    ],
    outcome: 'Kundenbeziehungen werden nachvollziehbarer, ohne unnötig komplexe Systeme zu erzwingen.',
  },
  {
    id: 'interne-ablaeufe',
    label: '04',
    eyebrow: 'Interne digitale Abläufe',
    title: 'Dashboards, Übersichten und interne Systeme, die den Arbeitsalltag sortieren.',
    text:
      'Wenn Informationen verstreut liegen, werden Abläufe langsam. STRUKTIVA baut digitale Übersichten und interne Strukturen, damit Aufgaben, Anfragen und Zustände besser sichtbar werden.',
    includes: [
      'Interne Unternehmens-Apps für geeignete Aufgaben',
      'Betriebs-Dashboards und digitale Übersichten',
      'Aufgaben-, Anfrage- und Statusstrukturen',
      'CRM-nahe Kontakt- und Kundendatenlogik',
      'Digitale Ordnungssysteme für wiederkehrende Abläufe',
      'Benachrichtigungen und Übergaben zwischen Arbeitsschritten',
    ],
    outcome: 'Wichtige Informationen werden an einem passenden Ort sichtbar und nutzbar.',
  },
  {
    id: 'automatisierung-ki',
    label: '05',
    eyebrow: 'Automatisierung und KI-Unterstützung',
    title: 'Automatisierungen helfen dort, wo Abläufe wiederkehrend und klar beschreibbar sind.',
    text:
      'STRUKTIVA verbindet digitale Bausteine so, dass wiederkehrende Schritte weniger manuelle Arbeit brauchen. KI kann unterstützen, wenn Aufgabe, Datenlage und Verantwortung sauber eingeordnet sind.',
    includes: [
      'Formular zu E-Mail oder strukturierter Anfrage',
      'Lead-Verarbeitung und interne Benachrichtigungen',
      'Termin- und Bestätigungsvorlagen',
      'WhatsApp-, E-Mail- und Textvorlagen',
      'Unterstützung bei wiederkehrenden Antwort- und Bewertungstexten',
      'Interne KI-Hilfen für klar abgegrenzte Aufgaben',
    ],
    outcome: 'Wiederkehrende Schritte werden verlässlicher, ohne Verantwortung blind an Technik abzugeben.',
  },
  {
    id: 'einzelaufgaben',
    label: '06',
    eyebrow: 'Gezielte Einzelaufgaben',
    title: 'Manchmal braucht es kein Großprojekt, sondern eine saubere kleine Korrektur.',
    text:
      'Nicht jede digitale Aufgabe muss zu einem Paket werden. Wenn der Umfang klar ist, können einzelne Anpassungen, Verbindungen oder Verbesserungen gezielt umgesetzt werden.',
    includes: [
      'Kleine Website-Anpassungen',
      'Formular- oder Kontaktprobleme prüfen',
      'Kontaktbuttons und Verlinkungen verbessern',
      'Bestehende digitale Struktur aufräumen',
      'Einzelne Funktionen ergänzen',
      'Technische Verbindung zwischen bestehenden Bausteinen prüfen',
    ],
    outcome: 'Kleine digitale Bremsen werden gelöst, bevor daraus ein größeres Problem wird.',
  },
]

export const connectionFlow = ['Sichtbarkeit', 'Website', 'Kontakt', 'Anfrage', 'Bearbeitung', 'Kunde', 'Wiederkehr oder Bewertung']

export const serviceBoundaries = [
  'Eine neue Website ersetzt keine fehlende Angebotsklarheit.',
  'Eine App ist nur sinnvoll, wenn sie einen echten Ablauf verbessert.',
  'Ein CRM bringt erst Nutzen, wenn Kontakt- und Kundendaten sauber geführt werden.',
  'Automatisierung hilft nur bei wiederkehrenden, eindeutig beschreibbaren Schritten.',
  'Laufende Betreuung ist sinnvoll bei regelmäßigem Bedarf, aber keine Pflicht für jedes Projekt.',
]

export const personalPresentation = {
  title: 'Digitale Bewerbungswebseiten und persönliche Präsentation',
  text:
    'Neben Unternehmensprojekten kann STRUKTIVA auch persönliche Präsentationsseiten, digitale Bewerbungsprofile und kompakte Online-Profile entwickeln. Diese Leistung bleibt bewusst getrennt von Unternehmenspaketen und wird nach Umfang eingeordnet.',
}
