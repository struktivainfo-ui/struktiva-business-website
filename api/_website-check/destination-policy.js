import { isIP } from 'node:net'
import { MAX_REDIRECTS } from './config.js'
import { createWebsiteCheckError } from './errors.js'
import { classifyIpAddress } from './ip-policy.js'
import { normalizeWebsiteUrl } from './normalize-url.js'

const BLOCKED_HOSTNAMES = new Set(['localhost', 'localhost.localdomain'])
const BLOCKED_SUFFIXES = ['.local', '.internal', '.localhost', '.home', '.lan']

function assertDomainHostname(hostname) {
  if (BLOCKED_HOSTNAMES.has(hostname) || BLOCKED_SUFFIXES.some((suffix) => hostname.endsWith(suffix))) {
    throw createWebsiteCheckError('BLOCKED_DESTINATION')
  }

  if (hostname.length > 253 || !hostname.includes('.')) throw createWebsiteCheckError('BLOCKED_DESTINATION')
  const labels = hostname.split('.')
  if (
    labels.some((label) => !label || label.length > 63 || !/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(label)) ||
    /^\d+$/.test(labels.at(-1))
  ) {
    throw createWebsiteCheckError('BLOCKED_DESTINATION')
  }
}

export function evaluateDestination(input, options) {
  const normalized = normalizeWebsiteUrl(input, options)
  const literalFamily = isIP(normalized.hostname)

  if (literalFamily) {
    if (!classifyIpAddress(normalized.hostname).isPublic) {
      throw createWebsiteCheckError('BLOCKED_DESTINATION')
    }
  } else {
    assertDomainHostname(normalized.hostname)
  }

  return Object.freeze({ ...normalized, literalIpFamily: literalFamily || null })
}

export function evaluateDnsResults(records) {
  if (!Array.isArray(records) || records.length === 0) {
    throw createWebsiteCheckError('DNS_LOOKUP_FAILED')
  }

  const approved = new Map()
  for (const record of records) {
    if (!record || typeof record.address !== 'string' || (record.family !== 4 && record.family !== 6)) {
      throw createWebsiteCheckError('BLOCKED_DESTINATION')
    }

    const classification = classifyIpAddress(record.address)
    if (classification.family !== record.family || !classification.isPublic) {
      throw createWebsiteCheckError('BLOCKED_DESTINATION')
    }
    approved.set(`${record.family}:${record.address.toLowerCase()}`, Object.freeze({
      address: record.address,
      family: record.family,
    }))
  }

  return Object.freeze([...approved.values()])
}

export function createBoundDestination(destination, approvedAddresses, { selectedAddress, checkedAt = new Date() } = {}) {
  const addresses = evaluateDnsResults(approvedAddresses)
  const selected = selectedAddress
    ? addresses.find((record) => record.address.toLowerCase() === selectedAddress.toLowerCase())
    : addresses[0]

  if (!selected) throw createWebsiteCheckError('BLOCKED_DESTINATION')

  return Object.freeze({
    normalizedUrl: destination.normalizedUrl,
    hostname: destination.hostname,
    protocol: destination.protocol,
    port: destination.port,
    approvedAddresses: addresses,
    selectedAddress: selected,
    checkedAt: new Date(checkedAt).toISOString(),
  })
}

export function evaluateRedirectTarget({ currentUrl, location, redirectCount, resolvedAddresses }) {
  if (!Number.isInteger(redirectCount) || redirectCount < 0) {
    throw createWebsiteCheckError('INVALID_REQUEST')
  }
  if (redirectCount >= MAX_REDIRECTS) throw createWebsiteCheckError('TOO_MANY_REDIRECTS')
  if (typeof location !== 'string' || !location.trim()) throw createWebsiteCheckError('INVALID_URL')

  const destination = evaluateDestination(location, { baseUrl: currentUrl })
  const approvedAddresses = resolvedAddresses === undefined
    ? null
    : evaluateDnsResults(resolvedAddresses)

  return Object.freeze({
    destination,
    approvedAddresses,
    redirectCount: redirectCount + 1,
  })
}

// Phase B must bind the actual socket lookup to selectedAddress. A later fetch must
// never perform an uncontrolled second DNS lookup for this destination.
