import { contactDetails } from '../../legacy/legacyContent.jsx'

export const contactEntryPoints = [
  {
    eyebrow: 'Direkter Kontakt',
    title: 'Wenn eine konkrete Frage im Raum steht.',
    text: 'Sinnvoll für kurze Rückfragen, kleine technische Änderungen oder ein bereits klares Vorhaben.',
    href: '#direct-contact',
    linkLabel: 'Kontaktwege ansehen',
  },
  {
    eyebrow: 'Anfrage beschreiben',
    title: 'Wenn ein Projekt oder Problem beschrieben werden soll.',
    text: 'Geeignet, wenn mehrere Informationen zusammenkommen und ein geordneter Überblick hilfreich ist.',
    href: '#lead-form',
    linkLabel: 'Zum Formular',
  },
  {
    eyebrow: 'Digital-Check',
    title: 'Wenn mehrere digitale Themen zusammenhängen.',
    text: 'Passend, wenn der richtige Startpunkt noch unklar ist und Zusammenhänge zuerst eingeordnet werden sollen.',
    href: '/digital-check#digital-check-anfrage',
    linkLabel: 'Digital-Check anfragen',
  },
]

export const directContactWays = [
  {
    label: 'E-Mail',
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    text: 'für ausführlichere Anliegen, Projektinformationen und Unterlagen',
  },
  {
    label: 'Telefon',
    value: contactDetails.phoneLabel,
    href: contactDetails.phoneHref,
    text: 'für direkte Rückfragen und eine kurze erste Einordnung',
  },
  {
    label: 'WhatsApp',
    value: contactDetails.whatsappLabel,
    href: contactDetails.whatsappHref,
    text: 'für eine kurze Kontaktaufnahme mit wenig Vorbereitung',
    external: true,
  },
]

export const messagePrompts = [
  'was heute nicht gut funktioniert',
  'welche Abläufe unnötig kompliziert sind',
  'wo Kunden oder Mitarbeitende Schwierigkeiten haben',
  'welche Idee Sie bereits im Kopf haben',
  'ob es um einen einzelnen Bereich oder mehrere zusammenhängende Themen geht',
]

export const afterRequestSteps = [
  {
    title: 'Anliegen lesen',
    text: 'Die Informationen werden geprüft und eingeordnet.',
  },
  {
    title: 'Rückfragen klären',
    text: 'Falls Informationen fehlen, können offene Punkte im direkten Austausch geklärt werden.',
  },
  {
    title: 'Nächsten Schritt besprechen',
    text: 'Danach kann entschieden werden, ob ein Gespräch, eine genauere Betrachtung oder eine konkrete Umsetzung sinnvoll ist.',
  },
]

export const contactDetailsForPage = contactDetails
