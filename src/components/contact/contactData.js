import { contactDetails } from '../../legacy/legacyContent.jsx'

export const contactEntryPoints = [
  {
    eyebrow: 'Direkter Kontakt',
    title: 'Wenn eine konkrete Frage im Raum steht.',
    text: 'Sinnvoll fuer kurze Rueckfragen, kleine technische Aenderungen oder ein bereits klares Vorhaben.',
    href: '#direct-contact',
    linkLabel: 'Kontaktwege ansehen',
  },
  {
    eyebrow: 'Anfrage beschreiben',
    title: 'Wenn ein Projekt oder Problem beschrieben werden soll.',
    text: 'Geeignet, wenn mehrere Informationen zusammenkommen und ein geordneter Ueberblick hilfreich ist.',
    href: '#lead-form',
    linkLabel: 'Zum Formular',
  },
  {
    eyebrow: 'Digital-Check',
    title: 'Wenn mehrere digitale Themen zusammenhaengen.',
    text: 'Passend, wenn der richtige Startpunkt noch unklar ist und Zusammenhaenge zuerst eingeordnet werden sollen.',
    href: '/digital-check',
    linkLabel: 'Digital-Check ansehen',
  },
]

export const directContactWays = [
  {
    label: 'E-Mail',
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    text: 'fuer ausfuehrlichere Anliegen, Projektinformationen und Unterlagen',
  },
  {
    label: 'Telefon',
    value: contactDetails.phoneLabel,
    href: contactDetails.phoneHref,
    text: 'fuer direkte Rueckfragen und eine kurze erste Einordnung',
  },
  {
    label: 'WhatsApp',
    value: contactDetails.whatsappLabel,
    href: contactDetails.whatsappHref,
    text: 'fuer eine kurze Kontaktaufnahme mit wenig Vorbereitung',
    external: true,
  },
]

export const messagePrompts = [
  'was heute nicht gut funktioniert',
  'welche Ablaeufe unnoetig kompliziert sind',
  'wo Kunden oder Mitarbeitende Schwierigkeiten haben',
  'welche Idee Sie bereits im Kopf haben',
  'ob es um einen einzelnen Bereich oder mehrere zusammenhaengende Themen geht',
]

export const afterRequestSteps = [
  {
    title: 'Anliegen lesen',
    text: 'Die Informationen werden geprueft und eingeordnet.',
  },
  {
    title: 'Rueckfragen klaeren',
    text: 'Falls Informationen fehlen, koennen offene Punkte im direkten Austausch geklaert werden.',
  },
  {
    title: 'Naechsten Schritt besprechen',
    text: 'Danach kann entschieden werden, ob ein Gespraech, eine genauere Betrachtung oder eine konkrete Umsetzung sinnvoll ist.',
  },
]

export const contactDetailsForPage = contactDetails
