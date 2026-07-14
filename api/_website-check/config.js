export const API_VERSION = '1'
export const MAX_REQUEST_BODY_BYTES = 4096
export const MAX_URL_LENGTH = 2048
export const MAX_REDIRECTS = 3
export const CONNECT_TIMEOUT_MS = 3000
export const REQUEST_TIMEOUT_MS = 5000
export const TOTAL_FETCH_TIMEOUT_MS = 10000
export const MAX_HTML_RESPONSE_BYTES = 1572864
export const ANALYSIS_VERSION = '1'
export const MAX_ANALYSIS_TEXT_LENGTH = 4096
export const MAX_ANALYZED_ELEMENTS = 20000
export const MAX_JSON_LD_BLOCKS = 50
export const MAX_JSON_LD_BLOCK_BYTES = 65536

export const WEBSITE_CHECK_REQUEST_HEADERS = Object.freeze({
  'User-Agent': 'STRUKTIVA-Website-Check/1.0',
  Accept: 'text/html, application/xhtml+xml',
  'Accept-Language': 'de-DE,de;q=0.9,en;q=0.7',
  'Accept-Encoding': 'identity',
  Connection: 'close',
})

export function isWebsiteCheckEnabled(env = process.env) {
  return env.WEBSITE_CHECK_ENABLED === 'true'
}
