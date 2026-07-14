const STATUS_LABELS = Object.freeze({
  good: 'GUT',
  review: 'PR\u00dcFEN',
  priority: 'PRIORIT\u00c4T',
  not_detected: 'NICHT ERKANNT',
  not_checkable: 'NICHT PR\u00dcFBAR',
})

function createCheck({ id, category, title, status, summary, evidence, recommendation = null, source, confidence }) {
  return Object.freeze({
    id,
    category,
    title,
    status,
    statusLabel: STATUS_LABELS[status],
    summary,
    evidence: Object.freeze(evidence),
    recommendation,
    source,
    confidence,
  })
}

function titleCheck(facts) {
  const evidence = facts.title
  if (evidence.nonEmptyCount === 0) return createCheck({
    id: 'page-title', category: 'visibility', title: 'Seitentitel', status: 'priority',
    summary: 'Kein nichtleerer Seitentitel wurde erkannt.', evidence,
    recommendation: 'Ergaenzen Sie einen klaren Seitentitel, der Unternehmen, Leistung und Seiteninhalt verstaendlich beschreibt.',
    source: 'html', confidence: 'high',
  })
  const length = evidence.lengths[0]
  const needsReview = evidence.count > 1 || length < 15 || length > 65
  return createCheck({
    id: 'page-title', category: 'visibility', title: 'Seitentitel', status: needsReview ? 'review' : 'good',
    summary: needsReview ? 'Ein Seitentitel wurde erkannt, sollte aber redaktionell geprueft werden.' : 'Ein klar erkennbarer Seitentitel ist vorhanden.',
    evidence,
    recommendation: needsReview ? 'Pruefen Sie, ob ein einzelner, klarer Seitentitel den Seiteninhalt passend beschreibt.' : null,
    source: 'html', confidence: 'high',
  })
}

function descriptionCheck(facts) {
  const evidence = facts.metaDescription
  if (evidence.count === 0) return createCheck({
    id: 'meta-description', category: 'visibility', title: 'Meta Description', status: 'not_detected',
    summary: 'Im geprueften HTML wurde keine Meta Description erkannt.', evidence,
    recommendation: 'Ergaenzen Sie eine verstaendliche Seitenbeschreibung fuer Suchergebnisse und geteilte Links.',
    source: 'html', confidence: 'high',
  })
  const length = evidence.lengths[0] || 0
  const needsReview = evidence.nonEmptyCount !== 1 || evidence.count > 1 || length < 50 || length > 170
  return createCheck({
    id: 'meta-description', category: 'visibility', title: 'Meta Description', status: needsReview ? 'review' : 'good',
    summary: needsReview ? 'Eine Meta Description wurde erkannt, ist aber leer, mehrfach oder auffaellig lang beziehungsweise kurz.' : 'Eine nichtleere Meta Description wurde erkannt.',
    evidence,
    recommendation: needsReview ? 'Pruefen Sie Laenge, Eindeutigkeit und Aussage der Seitenbeschreibung.' : null,
    source: 'html', confidence: 'high',
  })
}

function h1Check(facts) {
  const evidence = facts.h1
  const status = evidence.nonEmptyCount === 0 ? 'priority' : evidence.nonEmptyCount === 1 ? 'good' : 'review'
  return createCheck({
    id: 'h1-structure', category: 'visibility', title: 'H1-Struktur', status,
    summary: status === 'good' ? 'Genau eine nichtleere Hauptueberschrift wurde erkannt.' : status === 'priority' ? 'Keine nichtleere Hauptueberschrift wurde erkannt.' : 'Mehrere nichtleere Hauptueberschriften wurden erkannt.',
    evidence,
    recommendation: status === 'good' ? null : 'Machen Sie das Hauptthema der Seite mit einer eindeutigen Hauptueberschrift erkennbar.',
    source: 'html', confidence: 'high',
  })
}

function languageCheck(facts) {
  const evidence = facts.language
  const status = evidence.present && evidence.plausible ? 'good' : 'review'
  return createCheck({
    id: 'document-language', category: 'technical-foundation', title: 'Dokumentsprache', status,
    summary: status === 'good' ? 'Eine plausible Dokumentsprache wurde erkannt.' : 'Die Dokumentsprache fehlt, ist leer oder wirkt syntaktisch auffaellig.',
    evidence,
    recommendation: status === 'good' ? null : 'Pruefen und ergaenzen Sie eine passende Dokumentsprache am HTML-Element.',
    source: 'html', confidence: 'high',
  })
}

function viewportCheck(facts, id = 'viewport-foundation', title = 'Viewport-Grundlage', category = 'mobile-foundation') {
  const evidence = facts.viewport
  const complete = evidence.count === 1 && evidence.hasDeviceWidth && evidence.hasInitialScale
  const status = evidence.count === 0 ? 'priority' : complete ? 'good' : 'review'
  return createCheck({
    id, category, title, status,
    summary: status === 'good' ? 'Eine technische Viewport-Grundlage wurde erkannt.' : status === 'priority' ? 'Keine technische Viewport-Grundlage wurde erkannt.' : 'Ein Viewport-Hinweis ist vorhanden, aber unvollstaendig oder mehrfach.',
    evidence,
    recommendation: status === 'good' ? null : 'Ergaenzen Sie die technische Viewport-Grundlage und pruefen Sie die Darstellung anschliessend auf Mobilgeraeten.',
    source: 'html', confidence: 'high',
  })
}

function mobileUsabilityCheck() {
  return createCheck({
    id: 'mobile-usability',
    category: 'mobile-foundation',
    title: 'Mobile Nutzungsqualitaet',
    status: 'not_checkable',
    summary: 'Die mobile Nutzungsqualitaet ist aus statischem HTML allein nicht verlaesslich pruefbar.',
    evidence: Object.freeze({ browserRenderingAvailable: false }),
    recommendation: null,
    source: 'html',
    confidence: 'high',
  })
}

function canonicalCheck(facts) {
  const evidence = facts.canonical
  const status = evidence.count === 0 ? 'not_detected' : evidence.count === 1 && evidence.validCount === 1 ? 'good' : 'review'
  return createCheck({
    id: 'canonical', category: 'technical-foundation', title: 'Canonical', status,
    summary: status === 'good' ? 'Eine gueltige Canonical-Angabe wurde erkannt.' : status === 'not_detected' ? 'Keine Canonical-Angabe wurde erkannt.' : 'Die Canonical-Angabe ist mehrfach, leer oder technisch auffaellig.',
    evidence,
    recommendation: status === 'good' ? null : 'Pruefen Sie, ob eine einzelne gueltige Canonical-Angabe zur vorgesehenen Seitenadresse passt.',
    source: 'html', confidence: 'high',
  })
}

function httpsCheck(facts) {
  const evidence = facts.https
  const status = evidence.finalHttps && !evidence.httpsDowngrade ? 'good' : 'priority'
  return createCheck({
    id: 'https', category: 'technical-foundation', title: 'HTTPS', status,
    summary: status === 'good' ? 'Das finale Abrufziel verwendet HTTPS ohne erkannten Downgrade.' : 'Das finale Abrufziel verwendet HTTP oder es wurde ein HTTPS-Downgrade erkannt.',
    evidence,
    recommendation: status === 'good' ? null : 'Stellen Sie die finale Website durchgaengig ueber HTTPS bereit und vermeiden Sie Weiterleitungen auf HTTP.',
    source: 'http', confidence: 'high',
  })
}

function contactCheck(facts) {
  const evidence = facts.contact
  const direct = evidence.contactMethodsDetected.length > 0 || evidence.contactLinkCount > 0
  const weak = evidence.phoneTextHint || evidence.emailTextHint
  const status = direct ? 'good' : weak ? 'review' : 'priority'
  return createCheck({
    id: 'contact-methods', category: 'customer-journey', title: 'Kontaktwege', status,
    summary: status === 'good' ? 'Mindestens ein eindeutiger Kontaktweg wurde erkannt.' : status === 'review' ? 'Nur ein schwacher Kontakt-Hinweis im sichtbaren Text wurde erkannt.' : 'Kein eindeutiger Kontaktweg wurde erkannt.',
    evidence,
    recommendation: status === 'good' ? null : 'Machen Sie mindestens einen direkten Kontaktweg frueh und eindeutig sichtbar.',
    source: 'html', confidence: direct ? 'high' : weak ? 'low' : 'medium',
  })
}

function formCheck(facts) {
  const evidence = facts.forms
  const status = evidence.count === 0 ? 'not_detected' : evidence.completeCount > 0 ? 'good' : 'review'
  return createCheck({
    id: 'contact-form', category: 'customer-journey', title: 'Formular', status,
    summary: status === 'good' ? 'Ein Formular mit Eingabefeld und Submit-Moeglichkeit wurde erkannt.' : status === 'review' ? 'Ein Formular wurde erkannt, wirkt strukturell aber unvollstaendig.' : 'Im geprueften HTML wurde kein Formular erkannt.',
    evidence,
    recommendation: status === 'review' ? 'Pruefen Sie, ob das Formular einen eindeutigen Abschluss und verstaendliche Eingabefelder besitzt.' : null,
    source: 'html', confidence: 'high',
  })
}

function ctaCheck(facts) {
  const evidence = facts.contactCta
  const status = evidence.strongCount > 0 ? 'good' : evidence.generalContactLinkCount > 0 ? 'review' : 'not_detected'
  return createCheck({
    id: 'contact-cta', category: 'customer-journey', title: 'Kontakt-CTA', status,
    summary: status === 'good' ? 'Ein eindeutiger Kontakt-CTA wurde heuristisch erkannt.' : status === 'review' ? 'Ein allgemeiner Kontaktlink wurde erkannt, aber kein klarer CTA.' : 'Kein eindeutiger Kontakt-CTA wurde erkannt.',
    evidence,
    recommendation: status === 'good' ? null : 'Machen Sie den naechsten Kontaktschritt mit einer klaren Handlungsaufforderung sichtbar.',
    source: 'html', confidence: status === 'good' ? 'medium' : 'low',
  })
}

function legalCheck(facts, key, id, title) {
  const evidence = facts[key]
  const status = evidence.strongCount > 0 ? 'good' : evidence.weakCount > 0 ? 'review' : 'not_detected'
  const noun = id === 'imprint-link' ? 'Anbieterinformationen' : 'Datenschutzinformationen'
  return createCheck({
    id, category: 'trust-and-legal', title, status,
    summary: status === 'good' ? `Ein eindeutiger Link zu ${noun} wurde erkannt.` : status === 'review' ? `Nur ein schwacher Hinweis auf ${noun} wurde erkannt.` : `Auf der geprueften Seite wurde kein eindeutiger Link zu ${noun} erkannt.`,
    evidence,
    recommendation: status === 'good' ? null : `Pruefen Sie, ob die ${noun} von der geprueften Seite eindeutig erreichbar sind.`,
    source: 'html', confidence: status === 'good' ? 'high' : 'medium',
  })
}

function structuredDataCheck(facts) {
  const evidence = facts.structuredData
  const status = evidence.blockCount === 0 ? 'not_detected' : evidence.parseableCount > 0 ? 'good' : 'review'
  return createCheck({
    id: 'structured-data', category: 'technical-foundation', title: 'Strukturierte Daten', status,
    summary: status === 'good' ? 'Mindestens ein parsebarer JSON-LD-Block wurde erkannt.' : status === 'review' ? 'JSON-LD wurde erkannt, konnte aber nicht kontrolliert ausgewertet werden.' : 'Im geprueften HTML wurde kein JSON-LD erkannt.',
    evidence,
    recommendation: status === 'good' ? null : 'Pruefen Sie, ob passende strukturierte Daten fehlerfrei und sparsam ausgezeichnet werden koennen.',
    source: 'html', confidence: 'high',
  })
}

function trustCheck(facts) {
  const evidence = facts.trust
  const status = evidence.structuredSignal || evidence.sectionSignal ? 'good' : evidence.textHint ? 'review' : 'not_detected'
  return createCheck({
    id: 'trust-signals', category: 'trust-and-legal', title: 'Vertrauenssignale', status,
    summary: status === 'good' ? 'Ein strukturiertes oder deutliches Vertrauenssignal wurde erkannt.' : status === 'review' ? 'Nur ein schwacher textlicher Vertrauenshinweis wurde erkannt.' : 'Im geprueften HTML wurde kein eindeutiges Vertrauenssignal erkannt.',
    evidence,
    recommendation: status === 'good' ? null : 'Pruefen Sie, ob nachvollziehbare Referenzen, Kundenstimmen oder andere Vertrauenssignale passend sichtbar gemacht werden koennen.',
    source: 'html', confidence: status === 'good' ? 'medium' : 'low',
  })
}

function httpCheck(facts) {
  const evidence = facts.http
  let status = 'review'
  if (evidence.statusCode >= 200 && evidence.statusCode <= 299) status = 'good'
  else if ([429, 500].includes(evidence.statusCode) || evidence.statusCode >= 500) status = 'priority'
  return createCheck({
    id: 'http-reachability', category: 'technical-foundation', title: 'HTTP-Erreichbarkeit', status,
    summary: status === 'good' ? 'Der Server lieferte eine erfolgreiche HTML-Antwort.' : status === 'priority' ? 'Der Server antwortete, meldete aber eine erhebliche Einschraenkung oder einen Serverfehler.' : 'Der Server antwortete, der HTTP-Status sollte jedoch geprueft werden.',
    evidence,
    recommendation: status === 'good' ? null : 'Pruefen Sie den finalen HTTP-Status und stellen Sie eine verlaesslich erreichbare Startseite bereit.',
    source: 'http', confidence: 'high',
  })
}

export function buildChecks(facts) {
  return Object.freeze([
    httpCheck(facts),
    httpsCheck(facts),
    titleCheck(facts),
    descriptionCheck(facts),
    h1Check(facts),
    languageCheck(facts),
    viewportCheck(facts),
    canonicalCheck(facts),
    contactCheck(facts),
    formCheck(facts),
    ctaCheck(facts),
    legalCheck(facts, 'imprint', 'imprint-link', 'Impressum'),
    legalCheck(facts, 'privacy', 'privacy-link', 'Datenschutz'),
    structuredDataCheck(facts),
    trustCheck(facts),
    mobileUsabilityCheck(),
  ])
}
