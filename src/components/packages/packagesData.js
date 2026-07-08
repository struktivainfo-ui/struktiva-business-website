export const collaborationModels = [
  {
    key: 'single-project',
    label: 'A',
    title: 'Klar abgegrenztes Einzelprojekt',
    fit: ['Ziel und Umfang sind klar', 'eine konkrete Seite oder Funktion soll umgesetzt werden', 'regelmäßige Betreuung ist nicht notwendig'],
    statement: 'Ein Projekt kann einmalig beauftragt und abgeschlossen werden.',
  },
  {
    key: 'development',
    label: 'B',
    title: 'Schrittweise Weiterentwicklung',
    fit: ['mehrere Themen haengen zusammen', 'nicht alles soll gleichzeitig umgesetzt werden', 'neue Anforderungen entstehen nach und nach'],
    statement: 'Bausteine können sinnvoll priorisiert und nacheinander entwickelt werden.',
  },
  {
    key: 'care',
    label: 'C',
    title: 'Laufende Betreuung',
    fit: ['regelmäßig Anpassungen erforderlich sind', 'mehrere Systeme laufend betreut werden', 'Inhalte oder Abläufe regelmäßig weiterentwickelt werden'],
    statement: 'Monatliche Betreuung ist für kontinuierlichen Bedarf gedacht - nicht als automatische Pflicht für jedes Projekt.',
  },
]

export const confirmedPackages = [
  {
    title: 'STRUKTIVA Soforthilfe',
    price: '99 €',
    cadence: 'einmalig',
    tax: 'inklusive Mehrwertsteuer',
    fit: 'für einzelne digitale Aufgaben, schnelle Anpassungen oder professionelle Soforthilfe',
    includes: ['kleine Website-Anpassungen', 'kurze Texte oder Korrekturen', 'Google- oder Social-Media-Texte', 'WhatsApp- und Bewertungstexte'],
    excludes: 'kein Ersatz für ein größeres Website-, System- oder Betreuungsprojekt',
  },
  {
    title: 'Website Start',
    price: '499 €',
    cadence: 'einmalig',
    tax: 'inklusive Mehrwertsteuer',
    fit: 'für Betriebe, die eine saubere erste Website- oder Onepager-Grundlage brauchen',
    includes: ['Onepager-Grundstruktur', 'mobile Optimierung', 'klare Angebotsdarstellung', 'Kontaktfuehrung'],
    excludes: 'keine automatische laufende Betreuung und keine umfangreiche Mehrseiten- oder Systementwicklung',
  },
  {
    title: 'Sichtbarkeits-Paket',
    price: '799 €',
    cadence: 'einmalig',
    tax: 'inklusive Mehrwertsteuer',
    fit: 'für Unternehmen, die Website, Google-Grundlage und Kontaktwege sinnvoll verbinden möchten',
    includes: ['Website- oder Landingpage-Struktur', 'Google-Unternehmensprofil-Grundlage', 'Bewertungs- und Kontaktwege', 'klare Kundenfuehrung'],
    excludes: 'keine Garantie für Rankings und keine unbegrenzte Kampagnen- oder Content-Betreuung',
  },
  {
    title: 'Struktur-Paket',
    price: '1.199 €',
    cadence: 'einmalig',
    tax: 'inklusive Mehrwertsteuer',
    fit: 'für Unternehmen, die mehrere digitale Bausteine professionell zusammenführen möchten',
    includes: ['mehrseitige Website-Struktur', 'Lead- oder Anfrage-System', 'Bewertungs- und QR-Struktur', 'digitale Angebotslogik'],
    excludes: 'keine pauschale Vollumsetzung aller denkbaren Systeme ohne abgestimmten Umfang',
  },
  {
    title: 'Premium-Struktur',
    price: '1.499 €',
    cadence: 'einmalig',
    tax: 'inklusive Mehrwertsteuer',
    fit: 'für Betriebe, die eine umfangreichere digitale Struktur mit mehreren Systembausteinen brauchen',
    includes: ['vollständigere Website-Struktur', 'digitale Kundenführung', 'Dashboard- oder App-Konzept möglich', 'erweiterbare Strukturbausteine'],
    excludes: 'keine unbegrenzte Weiterentwicklung und keine automatische monatliche Betreuung',
  },
]

export const carePlans = [
  {
    title: 'Basis-Betreuung',
    price: 'ab 199 € / Monat',
    tax: 'inklusive Mehrwertsteuer',
    text: 'Für kleinere laufende Anpassungen, Pflege und einfache Aktualisierungen.',
  },
  {
    title: 'Struktur-Betreuung',
    price: 'ab 299 € / Monat',
    tax: 'inklusive Mehrwertsteuer',
    text: 'Für regelmäßige Weiterentwicklung, Strukturpflege, Inhalte, Kontaktwege und Sichtbarkeit.',
  },
  {
    title: 'Premium-Betreuung',
    price: 'ab 499 € / Monat',
    tax: 'inklusive Mehrwertsteuer',
    text: 'Für intensive laufende Betreuung, Erweiterungen, Systeme, Strukturaufbau und digitale Weiterentwicklung.',
  },
]

export const smallTaskExamples = [
  'kleine Textänderungen',
  'neue Bilder oder einzelne Abschnitte',
  'Kontaktbuttons und WhatsApp-Verlinkungen',
  'kurze Google-, Bewertungs- oder Social-Media-Texte',
]

export const priceFactors = [
  'bestehende Systeme',
  'technischer Zustand',
  'Umfang der Inhalte',
  'Anzahl der notwendigen Bereiche',
  'Schnittstellen',
  'Datenmigration',
  'individuelle Funktionen',
  'laufende Betreuung',
  'gewünschte Weiterentwicklung',
]

export const applicationOffer = {
  title: 'Persönliche Profil- & Bewerbungsseite',
  price: '299 €',
  cadence: 'einmalig',
  tax: 'inklusive Mehrwertsteuer',
  text: 'Für persönliche Bewerbungswebseiten und digitale Bewerbungsmappen soll es bewusst einen erschwinglichen Einstieg geben.',
}

export const packageFaqs = [
  {
    question: 'Muss ich nach einer Website monatlich bezahlen?',
    answer: 'Nein, nicht automatisch. Laufende Kosten entstehen nur, wenn ein entsprechender laufender Leistungsumfang vereinbart wird.',
  },
  {
    question: 'Kann ich auch nur eine einzelne Leistung beauftragen?',
    answer: 'Ja, wenn die Aufgabe sinnvoll klar abgegrenzt werden kann.',
  },
  {
    question: 'Was ist, wenn ich noch nicht weiß, welches Paket passt?',
    answer: 'Dann ist der Digital-Check oder ein direktes Gespräch der sinnvollere Einstieg.',
  },
  {
    question: 'Kann ein Projekt spaeter erweitert werden?',
    answer: 'Ja. Digitale Strukturen können schrittweise weiterentwickelt werden.',
  },
]
