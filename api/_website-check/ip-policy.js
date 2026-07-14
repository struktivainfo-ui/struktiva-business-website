import { isIP } from 'node:net'

const IPV4_BLOCKS = Object.freeze([
  ['0.0.0.0', 8],
  ['10.0.0.0', 8],
  ['100.64.0.0', 10],
  ['127.0.0.0', 8],
  ['169.254.0.0', 16],
  ['172.16.0.0', 12],
  ['192.0.0.0', 24],
  ['192.0.2.0', 24],
  ['192.88.99.0', 24],
  ['192.168.0.0', 16],
  ['198.18.0.0', 15],
  ['198.51.100.0', 24],
  ['203.0.113.0', 24],
  ['224.0.0.0', 4],
  ['240.0.0.0', 4],
])

function ipv4ToNumber(address) {
  if (isIP(address) !== 4) return null
  return address.split('.').reduce((value, octet) => value * 256 + Number(octet), 0)
}

function isInIpv4Cidr(value, base, prefixLength) {
  const blockSize = 2 ** (32 - prefixLength)
  return Math.floor(value / blockSize) === Math.floor(base / blockSize)
}

function isPublicIpv4Number(value) {
  return !IPV4_BLOCKS.some(([baseAddress, prefixLength]) =>
    isInIpv4Cidr(value, ipv4ToNumber(baseAddress), prefixLength),
  )
}

function numberToIpv4(value) {
  return [24, 16, 8, 0].map((shift) => Math.floor(value / 2 ** shift) % 256).join('.')
}

function parseIpv6(address) {
  let value = address.toLowerCase()
  if (value.startsWith('[') && value.endsWith(']')) value = value.slice(1, -1)
  if (!value || value.includes('%') || isIP(value) !== 6) return null

  const ipv4Tail = value.match(/(?:^|:)(\d+\.\d+\.\d+\.\d+)$/)?.[1]
  if (ipv4Tail) {
    const ipv4Value = ipv4ToNumber(ipv4Tail)
    if (ipv4Value === null) return null
    const high = Math.floor(ipv4Value / 65536).toString(16)
    const low = (ipv4Value % 65536).toString(16)
    value = `${value.slice(0, value.length - ipv4Tail.length)}${high}:${low}`
  }

  const halves = value.split('::')
  if (halves.length > 2) return null
  const left = halves[0] ? halves[0].split(':') : []
  const right = halves[1] ? halves[1].split(':') : []
  const missing = 8 - left.length - right.length
  if ((halves.length === 1 && missing !== 0) || (halves.length === 2 && missing < 1)) return null

  const parts = [...left, ...Array(missing).fill('0'), ...right]
  if (parts.length !== 8 || parts.some((part) => !/^[0-9a-f]{1,4}$/.test(part))) return null
  return parts.reduce((result, part) => (result << 16n) | BigInt(`0x${part}`), 0n)
}

function isInIpv6Cidr(value, base, prefixLength) {
  const shift = BigInt(128 - prefixLength)
  return value >> shift === base >> shift
}

const IPV6_BLOCKS = Object.freeze([
  [0n, 128],
  [1n, 128],
  [0x100n << 112n, 64],
  [(0x64n << 112n) | (0xff9bn << 96n) | (1n << 80n), 48],
  [(0x2001n << 112n) | (0x2n << 96n), 48],
  [(0x2001n << 112n) | (0xdb8n << 96n), 32],
  [0xfc00n << 112n, 7],
  [0xfe80n << 112n, 10],
  [0xff00n << 112n, 8],
])

const IPV4_MAPPED_PREFIX = 0xffffn
const NAT64_WELL_KNOWN_PREFIX = ((0x64n << 112n) | (0xff9bn << 96n)) >> 32n

export function classifyIpAddress(address) {
  const family = isIP(address)
  if (family === 4) {
    const numeric = ipv4ToNumber(address)
    return Object.freeze({ address, family, isPublic: isPublicIpv4Number(numeric) })
  }

  if (family !== 6 || address.includes('%')) {
    return Object.freeze({ address, family: 0, isPublic: false })
  }

  const numeric = parseIpv6(address)
  if (numeric === null) return Object.freeze({ address, family: 0, isPublic: false })

  const top96 = numeric >> 32n
  if (top96 === IPV4_MAPPED_PREFIX || top96 === NAT64_WELL_KNOWN_PREFIX) {
    const embedded = Number(numeric & 0xffffffffn)
    return Object.freeze({
      address,
      family,
      isPublic: isPublicIpv4Number(embedded),
      embeddedIpv4: numberToIpv4(embedded),
    })
  }

  const isBlocked = IPV6_BLOCKS.some(([base, prefixLength]) => isInIpv6Cidr(numeric, base, prefixLength))
  return Object.freeze({ address, family, isPublic: !isBlocked })
}

export function isPublicIpAddress(address) {
  return classifyIpAddress(address).isPublic
}
