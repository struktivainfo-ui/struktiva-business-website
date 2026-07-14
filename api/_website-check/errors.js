const ERROR_DEFINITIONS = Object.freeze({
  METHOD_NOT_ALLOWED: [405, 'Methode nicht erlaubt.'],
  SERVICE_NOT_READY: [503, 'Der automatische Website-Check wird derzeit vorbereitet.'],
  INVALID_CONTENT_TYPE: [415, 'Bitte senden Sie die Anfrage als JSON.'],
  REQUEST_TOO_LARGE: [413, 'Die Anfrage ist zu gross.'],
  INVALID_JSON: [400, 'Die Anfrage enthaelt kein gueltiges JSON.'],
  INVALID_REQUEST: [400, 'Die Anfrage konnte nicht verarbeitet werden.'],
  INVALID_URL: [400, 'Die Website-Adresse konnte nicht verarbeitet werden.'],
  UNSUPPORTED_PROTOCOL: [400, 'Fuer den Website-Check sind nur HTTP- und HTTPS-Adressen erlaubt.'],
  BLOCKED_DESTINATION: [400, 'Diese Website-Adresse kann nicht geprueft werden.'],
  DNS_LOOKUP_FAILED: [422, 'Die Website-Adresse konnte nicht aufgeloest werden.'],
  TOO_MANY_REDIRECTS: [422, 'Die Website-Adresse leitet zu oft weiter.'],
  CHECK_NOT_IMPLEMENTED: [501, 'Die Website-Adresse wurde validiert. Der eigentliche Check ist noch nicht aktiv.'],
  INTERNAL_ERROR: [500, 'Die Anfrage konnte gerade nicht verarbeitet werden.'],
})

export class WebsiteCheckError extends Error {
  constructor(code) {
    const definition = ERROR_DEFINITIONS[code] || ERROR_DEFINITIONS.INTERNAL_ERROR
    super(definition[1])
    this.name = 'WebsiteCheckError'
    this.code = ERROR_DEFINITIONS[code] ? code : 'INTERNAL_ERROR'
    this.statusCode = definition[0]
  }
}

export function createWebsiteCheckError(code) {
  return new WebsiteCheckError(code)
}

export function toPublicError(error) {
  return error instanceof WebsiteCheckError ? error : new WebsiteCheckError('INTERNAL_ERROR')
}
