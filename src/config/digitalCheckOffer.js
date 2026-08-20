export function createDigitalCheckOffer() {
  return Object.freeze({
    id: 'personalDigitalCheck',
    leadType: 'digital_check',
    name: 'STRUKTIVA Digital-Check für lokale Betriebe',
    isFree: true,
    price: 0,
    grossPrice: 0,
    currency: 'EUR',
    priceForm: 'kostenlos',
    priceBaseLabel: 'Kostenlos',
    taxNote: '',
    taxStatus: 'not_applicable',
    deliveryBusinessDays: 5,
    resultCallMinutes: 30,
    primaryCtaText: 'Kostenlosen Digital-Check anfragen',
    primaryFormTarget: '/digital-check#digital-check-anfrage',
    scope:
      'Ein primärer Webauftritt mit mobiler Darstellung, ein Google-Unternehmensprofil (sofern vorhanden), die wichtigsten Kontaktwege sowie die Bewertungs- und Vertrauensdarstellung.',
    boundary:
      'Technische Umsetzung, vollständiges SEO-Audit, Rechts- oder Steuerberatung, Sicherheitsprüfung, umfangreiche Wettbewerbsanalyse sowie die Prüfung mehrerer Websites oder Standorte sind nicht enthalten.',
  })
}

export const personalDigitalCheckOffer = createDigitalCheckOffer()

export const digitalCheckPriceLabel = personalDigitalCheckOffer.priceBaseLabel

export const digitalCheckOrderDefinitionText =
  'Eine Formularanfrage ist keine verbindliche Terminvereinbarung. Wir prüfen sie persönlich und melden uns, ob der kostenlose Digital-Check zu Ihrer Situation passt.'

export const digitalCheckFormNoticeText =
  'Mit dem Absenden dieses Formulars stellen Sie eine unverbindliche Anfrage. Der Digital-Check ist kostenlos; es entsteht dadurch kein kostenpflichtiger Auftrag.'

export const digitalCheckCreditText =
  'Der Digital-Check ist kostenlos und wird nicht mit einem späteren Auftrag verrechnet.'

export const digitalCheckIndependenceText =
  'Der Digital-Check ist eine eigenständige Leistung. Es besteht keine Verpflichtung zu einem Folgeauftrag. Sie erhalten den priorisierten Maßnahmenplan unabhängig davon vollständig.'
