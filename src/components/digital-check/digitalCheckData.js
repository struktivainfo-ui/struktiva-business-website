import {
  digitalCheckCreditText,
  digitalCheckIndependenceText,
  digitalCheckIntroductoryOfferText,
  digitalCheckOrderDefinitionText,
  digitalCheckPriceLabel,
  personalDigitalCheckOffer,
} from '../../config/digitalCheckOffer.js'

export const digitalCheckProblems = [
  'Besucher erkennen nicht sofort, warum sie gerade Ihren Betrieb wählen sollten.',
  'Telefon, WhatsApp, Formular oder Terminweg sind zu schwer zu finden.',
  'Google-Profil, Website und Bewertungen vermitteln kein einheitliches Bild.',
  'Es gibt viele mögliche Baustellen, aber keine klare Reihenfolge.',
]

export const digitalCheckAreas = [
  {
    title: 'Website und Botschaft',
    text: 'Versteht ein Interessent schnell, was Sie anbieten, für wen es gedacht ist und warum Ihr Betrieb die richtige Wahl sein kann?',
  },
  {
    title: 'Auffindbarkeit vor Ort',
    text: 'Führt Ihr öffentlich sichtbares Google-Unternehmensprofil mit stimmigen Informationen zur Website und zum nächsten sinnvollen Schritt?',
  },
  {
    title: 'Kontaktwege',
    text: 'Sind Telefon, E-Mail, Formular, WhatsApp oder Terminweg klar, mobil nutzbar und ohne unnötige Hürden erreichbar?',
  },
  {
    title: 'Bewertungen und Vertrauen',
    text: 'Werden vorhandene Bewertungen und andere Vertrauenssignale dort sichtbar, wo Interessenten ihre Entscheidung treffen?',
  },
]

export const digitalCheckDeliverables = [
  'Prüfung eines primären Webauftritts und seiner mobilen Darstellung.',
  'Prüfung eines Google-Unternehmensprofils, sofern vorhanden.',
  'Prüfung der wichtigsten Kontaktwege sowie der Bewertungs- und Vertrauensdarstellung.',
  'Eine kompakte schriftliche Zusammenfassung mit priorisierten nächsten Schritten.',
  `Eine persönliche Ergebnisbesprechung bis maximal ${personalDigitalCheckOffer.resultCallMinutes} Minuten.`,
]

export const digitalCheckProcess = [
  {
    title: 'Anfrage senden',
    text: 'Sie nennen uns Ihren Betrieb, Ihre Website und die wichtigste digitale Frage.',
  },
  {
    title: 'Rahmen bestätigen',
    text: 'Wir klären kurz, ob der Digital-Check passt, und bestätigen Leistung, Preis und benötigte Informationen. Erst mit unserer gesonderten Bestätigung entsteht ein kostenpflichtiger Auftrag.',
  },
  {
    title: 'Persönlich prüfen',
    text: 'Wir betrachten Website, Google-Unternehmensprofil, Kontaktwege und sichtbare Vertrauenssignale im vereinbarten Umfang.',
  },
  {
    title: 'Ergebnis besprechen',
    text: `Innerhalb von ${personalDigitalCheckOffer.deliveryBusinessDays} Werktagen nach Eingang aller Informationen erhalten Sie Ihren priorisierten Maßnahmenplan und besprechen ihn persönlich mit uns.`,
  },
]

export const digitalCheckFits = [
  'Sie führen einen lokalen Betrieb oder ein kleines Unternehmen.',
  'Eine Website oder ein Google-Unternehmensprofil ist bereits vorhanden.',
  'Sie brauchen mehr Klarheit über den Weg zur Anfrage.',
  'Sie möchten eine überschaubare, unabhängige Entscheidungsgrundlage.',
]

export const digitalCheckDoesNotFit = [
  'Sie erwarten ein vollständiges SEO-Audit, eine Sicherheitsprüfung oder Rechts- beziehungsweise Steuerberatung.',
  'Mehrere Websites oder Standorte oder eine umfangreiche Wettbewerbsanalyse sollen geprüft werden.',
  'Sie erwarten garantierte Rankings, Leads oder Umsätze.',
  'Sie erwarten im Preis bereits technische Umsetzung oder unbegrenzte Beratung.',
]

export const digitalCheckFaqs = [
  {
    question: 'Was kostet der Digital-Check?',
    answer: `Der Digital-Check kostet aktuell ${digitalCheckPriceLabel} ${digitalCheckIntroductoryOfferText} Vor dem kostenpflichtigen Start bestätigen wir den vereinbarten Rahmen gesondert.`,
  },
  {
    question: 'Ist das Absenden des Formulars bereits eine Bestellung?',
    answer: `Nein. ${digitalCheckOrderDefinitionText}`,
  },
  {
    question: 'Was genau wird geprüft?',
    answer: `Wir prüfen repräsentative, anfragerelevante Bereiche Ihrer Website, Ihr öffentlich sichtbares Google-Unternehmensprofil, Kontaktwege sowie sichtbare Bewertungen und Vertrauenssignale. ${personalDigitalCheckOffer.scope}`,
  },
  {
    question: 'Was erhalte ich als Ergebnis?',
    answer: 'Sie erhalten einen kompakten PDF-Bericht mit verständlicher Einordnung und einem priorisierten Maßnahmenplan. In einem persönlichen Gespräch von ungefähr 30 Minuten gehen wir die wichtigsten Punkte gemeinsam durch.',
  },
  {
    question: 'Wie schnell erhalte ich das Ergebnis?',
    answer: `Innerhalb von ${personalDigitalCheckOffer.deliveryBusinessDays} Werktagen, nachdem alle für die Prüfung benötigten Informationen vollständig vorliegen.`,
  },
  {
    question: 'Muss ich die empfohlenen Maßnahmen bei STRUKTIVA umsetzen lassen?',
    answer: `Nein. ${digitalCheckIndependenceText}`,
  },
  {
    question: 'Wie funktioniert die Anrechnung?',
    answer: `${digitalCheckCreditText} Der Mindestauftragswert gilt vor Anrechnung und nur für STRUKTIVA-Leistungen; Fremd- und Drittkosten zählen nicht mit.`,
  },
  {
    question: 'Ist die Umsetzung im Preis enthalten?',
    answer: 'Nein. Gestaltung, Texte, Programmierung, Kampagnen oder laufende Betreuung sind nicht Bestandteil des Digital-Checks. Falls Sie Unterstützung wünschen, erhalten Sie dafür ein separates Angebot.',
  },
  {
    question: 'Ist der Digital-Check eine Rechts-, Datenschutz- oder Sicherheitsprüfung?',
    answer: 'Nein. Der Digital-Check ersetzt keine Rechtsberatung und kein spezialisiertes Datenschutz-, Barrierefreiheits- oder Security-Audit.',
  },
  {
    question: 'Brauche ich bereits eine Website?',
    answer: 'Eine vorhandene Website ist der Regelfall. Wenn noch keine Website existiert, schildern Sie kurz Ihre Ausgangslage. Wir sagen Ihnen vor einer Beauftragung, ob der Digital-Check sinnvoll ist.',
  },
]

export const digitalCheckIndustries = [
  'Handwerk',
  'Gesundheit & Beauty',
  'Gastronomie',
  'Einzelhandel',
  'Lokale Dienstleistung',
  'B2B-Dienstleistung',
  'Andere Branche',
]

export const digitalCheckContactOptions = ['E-Mail', 'Telefon', 'WhatsApp']
