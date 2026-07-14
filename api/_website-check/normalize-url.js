import { createWebsiteCheckError } from './errors.js'
import { MAX_URL_LENGTH } from './config.js'

const SCHEME_PATTERN = /^[a-z][a-z0-9+.-]*:/i
const CONTROL_OR_SPACE_PATTERN = /[\u0000-\u0020\u007f]/

export function normalizeWebsiteUrl(input, { baseUrl } = {}) {
  if (typeof input !== 'string') throw createWebsiteCheckError('INVALID_URL')

  const value = input.trim()
  if (!value || value.length > MAX_URL_LENGTH || CONTROL_OR_SPACE_PATTERN.test(value) || value.includes('\\')) {
    throw createWebsiteCheckError('INVALID_URL')
  }

  if (!baseUrl && value.startsWith('//')) throw createWebsiteCheckError('INVALID_URL')

  let parsed
  try {
    if (baseUrl) {
      parsed = new URL(value, baseUrl)
    } else {
      parsed = new URL(SCHEME_PATTERN.test(value) ? value : `https://${value}`)
    }
  } catch {
    throw createWebsiteCheckError('INVALID_URL')
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    throw createWebsiteCheckError('UNSUPPORTED_PROTOCOL')
  }
  if (parsed.username || parsed.password) throw createWebsiteCheckError('BLOCKED_DESTINATION')
  if (!parsed.hostname || parsed.port) throw createWebsiteCheckError('BLOCKED_DESTINATION')

  const rawHostname = parsed.hostname.toLowerCase()
  const bracketed = rawHostname.startsWith('[') && rawHostname.endsWith(']')
  const hostname = (bracketed ? rawHostname.slice(1, -1) : rawHostname).replace(/\.$/, '')
  if (!hostname) throw createWebsiteCheckError('INVALID_URL')

  const displayHost = hostname.includes(':') ? `[${hostname}]` : hostname
  const normalizedUrl = `${parsed.protocol}//${displayHost}/`
  if (normalizedUrl.length > MAX_URL_LENGTH) throw createWebsiteCheckError('INVALID_URL')

  return Object.freeze({
    normalizedUrl,
    hostname,
    protocol: parsed.protocol,
    port: parsed.protocol === 'http:' ? 80 : 443,
  })
}
