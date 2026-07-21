const viteEnvironment = import.meta.env || {}
const processEnvironment = globalThis.process?.env || {}
const configuredTaxNote = String(
  viteEnvironment.VITE_DIGITAL_CHECK_TAX_NOTE || processEnvironment.VITE_DIGITAL_CHECK_TAX_NOTE || '',
).trim()

export const DIGITAL_CHECK_CONFIRMED_TAX_NOTE = 'inkl. 19 % MwSt.'
const approvedTaxNote = configuredTaxNote === DIGITAL_CHECK_CONFIRMED_TAX_NOTE
  ? configuredTaxNote
  : DIGITAL_CHECK_CONFIRMED_TAX_NOTE

export function createDigitalCheckOffer({ introductoryOfferEnabled = true } = {}) {
  const regularPrice = 129
  const introductoryPrice = 79
  const introductoryCustomerLimit = 10
  const taxRate = 19
  const price = introductoryOfferEnabled ? introductoryPrice : regularPrice

  return Object.freeze({
    id: 'personalDigitalCheck',
    leadType: 'digital_check',
    name: 'STRUKTIVA Digital-Check für lokale Betriebe',
    regularPrice,
    introductoryPrice,
    introductoryOfferEnabled,
    introductoryCustomerLimit,
    taxRate,
    price,
    grossPrice: price,
    currency: 'EUR',
    priceForm: 'einmalig',
    vatRatePercent: taxRate,
    priceBaseLabel: `${price} € einmalig`,
    regularPriceBaseLabel: `${regularPrice} € einmalig`,
    taxNote: approvedTaxNote,
    taxStatus: 'confirmed_gross',
    creditPeriodDays: 30,
    minimumImplementationOrder: 500,
    deliveryBusinessDays: 5,
    resultCallMinutes: 30,
    primaryCtaText: 'Digital-Check anfragen',
    primaryFormTarget: '/digital-check#digital-check-anfrage',
    scope:
      'Ein primärer Webauftritt mit mobiler Darstellung, ein Google-Unternehmensprofil (sofern vorhanden), die wichtigsten Kontaktwege sowie die Bewertungs- und Vertrauensdarstellung.',
    boundary:
      'Technische Umsetzung, vollständiges SEO-Audit, Rechts- oder Steuerberatung, Sicherheitsprüfung, umfangreiche Wettbewerbsanalyse sowie die Prüfung mehrerer Websites oder Standorte sind nicht enthalten.',
  })
}

export const personalDigitalCheckOffer = createDigitalCheckOffer({
  introductoryOfferEnabled: true,
})

export const digitalCheckPriceLabel = [
  personalDigitalCheckOffer.priceBaseLabel,
  personalDigitalCheckOffer.taxNote,
]
  .filter(Boolean)
  .join(' ')

export const digitalCheckIntroductoryOfferText = personalDigitalCheckOffer.introductoryOfferEnabled
  ? `Einführungspreis für die ersten ${personalDigitalCheckOffer.introductoryCustomerLimit} verbindlich beauftragten Digital-Checks. Danach ${personalDigitalCheckOffer.regularPriceBaseLabel} ${personalDigitalCheckOffer.taxNote}`
  : ''

export const digitalCheckOrderDefinitionText =
  'Eine Formularanfrage ist noch kein Auftrag und reserviert oder reduziert keinen Einführungsplatz. Ein verbindlicher Auftrag entsteht erst durch die ausdrückliche Bestätigung von STRUKTIVA.'

export const digitalCheckFormNoticeText =
  'Mit dem Absenden dieses Formulars stellen Sie zunächst eine unverbindliche Anfrage. Ein kostenpflichtiger Auftrag und die Berücksichtigung für den Einführungspreis entstehen erst nach einer ausdrücklichen Bestätigung durch STRUKTIVA.'

export const digitalCheckCreditText = `Der für den Digital-Check tatsächlich gezahlte Betrag wird vollständig angerechnet, wenn innerhalb von ${personalDigitalCheckOffer.creditPeriodDays} Tagen nach der Ergebnisbesprechung ein STRUKTIVA-Umsetzungsauftrag mit einem Mindestauftragswert von ${personalDigitalCheckOffer.minimumImplementationOrder} € vereinbart wird.`

export const digitalCheckIndependenceText =
  'Der Digital-Check ist eine eigenständige Leistung. Es besteht keine Verpflichtung zu einem Folgeauftrag. Sie erhalten den priorisierten Maßnahmenplan unabhängig davon vollständig.'
