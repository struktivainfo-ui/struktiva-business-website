import { promises as dns } from 'node:dns'
import { createBoundDestination, evaluateDnsResults } from './destination-policy.js'
import { createWebsiteCheckError, WebsiteCheckError } from './errors.js'

export async function defaultDnsLookup(hostname) {
  return dns.lookup(hostname, { all: true, verbatim: true })
}

export function selectFirstApprovedAddress(addresses) {
  return addresses[0]
}

export async function resolveDestination(
  destination,
  {
    lookup = defaultDnsLookup,
    selectAddress = selectFirstApprovedAddress,
    now = () => new Date(),
  } = {},
) {
  let records

  if (destination.literalIpFamily) {
    records = [{ address: destination.hostname, family: destination.literalIpFamily }]
  } else {
    try {
      records = await lookup(destination.hostname)
    } catch (error) {
      if (error instanceof WebsiteCheckError) throw error
      throw createWebsiteCheckError('DNS_LOOKUP_FAILED')
    }
  }

  const approvedAddresses = evaluateDnsResults(records)
  const selected = selectAddress(approvedAddresses)
  if (!selected || !approvedAddresses.includes(selected)) {
    throw createWebsiteCheckError('BLOCKED_DESTINATION')
  }

  return createBoundDestination(destination, approvedAddresses, {
    selectedAddress: selected.address,
    checkedAt: now(),
  })
}

export function createPinnedLookup(boundDestination) {
  const selected = boundDestination.selectedAddress

  return function pinnedLookup(hostname, options, callback) {
    let lookupOptions = options
    let done = callback
    if (typeof options === 'function') {
      done = options
      lookupOptions = {}
    }

    if (typeof done !== 'function' || hostname.toLowerCase().replace(/\.$/, '') !== boundDestination.hostname) {
      const error = createWebsiteCheckError('BLOCKED_DESTINATION')
      if (typeof done === 'function') return done(error)
      throw error
    }

    if (lookupOptions?.all) {
      return done(null, [{ address: selected.address, family: selected.family }])
    }
    return done(null, selected.address, selected.family)
  }
}
