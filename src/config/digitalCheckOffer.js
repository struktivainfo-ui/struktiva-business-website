const viteEnvironment = import.meta.env || {}
const processEnvironment = globalThis.process?.env || {}
const configuredTaxNote = String(
  viteEnvironment.VITE_DIGITAL_CHECK_TAX_NOTE || processEnvironment.VITE_DIGITAL_CHECK_TAX_NOTE || '',
).trim()

export const DIGITAL_CHECK_CONFIRMED_TAX_NOTE = 'inkl. 19 % MwSt.'
const approvedTaxNote = configuredTaxNote === DIGITAL_CHECK_CONFIRMED_TAX_NOTE
  ? configuredTaxNote
  : DIGITAL_CHECK_CONFIRMED_TAX_NOTE

export const personalDigitalCheckOffer = Object.freeze({
  id: 'personalDigitalCheck',
  leadType: 'digital_check',
  name: 'STRUKTIVA Digital-Check für lokale Betriebe',
  price: 129,
  grossPrice: 129,
  currency: 'EUR',
  priceForm: 'einmalig',
  vatRatePercent: 19,
  priceBaseLabel: '129 € einmalig',
  taxNote: approvedTaxNote,
  taxStatus: 'confirmed_gross',
  creditPeriodDays: 30,
  minimumImplementationOrder: 500,
  deliveryBusinessDays: 5,
  resultCallMinutes: 30,
  primaryCtaText: 'Digital-Check anfragen',
  primaryFormTarget: '/digital-check#digital-check-anfrage',
  scope:
    'Ein Betrieb, ein Standort, eine Website und ein öffentlich sichtbares Google-Unternehmensprofil.',
  boundary:
    'Die technische Umsetzung ist nicht enthalten. Rankings, zusätzliche Kunden oder Umsätze werden nicht garantiert.',
})

export const digitalCheckPriceLabel = [
  personalDigitalCheckOffer.priceBaseLabel,
  personalDigitalCheckOffer.taxNote,
]
  .filter(Boolean)
  .join(' ')

export const digitalCheckCreditText = `Die ${personalDigitalCheckOffer.price} € werden vollständig angerechnet, wenn innerhalb von ${personalDigitalCheckOffer.creditPeriodDays} Tagen nach der Ergebnisbesprechung ein STRUKTIVA-Umsetzungsauftrag mit einem Mindestauftragswert von ${personalDigitalCheckOffer.minimumImplementationOrder} € vereinbart wird.`

export const digitalCheckIndependenceText =
  'Der Digital-Check ist eine eigenständige Leistung. Es besteht keine Verpflichtung zu einem Folgeauftrag. Sie erhalten den priorisierten Maßnahmenplan unabhängig davon vollständig.'
