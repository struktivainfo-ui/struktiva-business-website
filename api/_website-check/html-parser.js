import { parse } from 'parse5'
import {
  MAX_ANALYSIS_TEXT_LENGTH,
  MAX_ANALYZED_ELEMENTS,
  MAX_HTML_RESPONSE_BYTES,
} from './config.js'
import { createWebsiteCheckError } from './errors.js'

const HIDDEN_TEXT_ELEMENTS = new Set(['script', 'style', 'noscript', 'template', 'svg', 'canvas'])
const CONTROL_CHARACTERS = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g

export function normalizeText(value, maxLength = MAX_ANALYSIS_TEXT_LENGTH) {
  if (typeof value !== 'string') return ''
  const normalized = value
    .normalize('NFKC')
    .replace(CONTROL_CHARACTERS, '')
    .replace(/\s+/g, ' ')
    .trim()
  return normalized.slice(0, Math.max(0, maxLength))
}

export function getElementName(node) {
  return typeof node?.tagName === 'string' ? node.tagName.toLowerCase() : null
}

export function getAttribute(node, name, maxLength = MAX_ANALYSIS_TEXT_LENGTH) {
  if (!Array.isArray(node?.attrs) || typeof name !== 'string') return null
  const expected = name.toLowerCase()
  const attribute = node.attrs.find((item) => item?.name?.toLowerCase() === expected)
  return typeof attribute?.value === 'string' ? attribute.value.slice(0, maxLength) : null
}

export function findElements(root, predicate, maxElements = MAX_ANALYZED_ELEMENTS) {
  const matches = []
  const stack = [root]
  let visited = 0

  while (stack.length && visited < maxElements) {
    const node = stack.pop()
    visited += 1
    if (getElementName(node) && predicate(node)) matches.push(node)
    const children = Array.isArray(node?.childNodes) ? node.childNodes : []
    for (let index = children.length - 1; index >= 0; index -= 1) stack.push(children[index])
  }

  return Object.freeze(matches)
}

export function getDirectTextContent(node, maxLength = MAX_ANALYSIS_TEXT_LENGTH) {
  if (!Array.isArray(node?.childNodes)) return ''
  const text = node.childNodes
    .filter((child) => child?.nodeName === '#text' && typeof child.value === 'string')
    .map((child) => child.value)
    .join(' ')
  return normalizeText(text, maxLength)
}

export function getTextContent(node, { visibleOnly = false, maxLength = MAX_ANALYSIS_TEXT_LENGTH } = {}) {
  const chunks = []
  const stack = [node]
  let length = 0
  let visited = 0

  while (stack.length && length < maxLength && visited < MAX_ANALYZED_ELEMENTS) {
    const current = stack.pop()
    visited += 1
    const elementName = getElementName(current)
    if (visibleOnly && elementName && HIDDEN_TEXT_ELEMENTS.has(elementName)) continue
    if (current?.nodeName === '#text' && typeof current.value === 'string') {
      const remaining = maxLength - length
      const value = current.value.slice(0, remaining)
      chunks.push(value)
      length += value.length
    }
    const children = Array.isArray(current?.childNodes) ? current.childNodes : []
    for (let index = children.length - 1; index >= 0; index -= 1) stack.push(children[index])
  }

  return normalizeText(chunks.join(' '), maxLength)
}

export function findMetaElements(document, name) {
  const expected = name.toLowerCase()
  return findElements(document, (node) => (
    getElementName(node) === 'meta' && getAttribute(node, 'name')?.trim().toLowerCase() === expected
  ))
}

export function resolvePassiveHttpUrl(value, baseUrl) {
  if (typeof value !== 'string' || !value.trim()) return null
  try {
    const resolved = new URL(value.trim(), baseUrl)
    if (!['http:', 'https:'].includes(resolved.protocol) || resolved.username || resolved.password) return null
    resolved.hash = ''
    return resolved
  } catch {
    return null
  }
}

function detectDeclaredCharset(buffer) {
  const prefix = buffer.subarray(0, Math.min(buffer.length, 4096)).toString('latin1')
  const direct = prefix.match(/<meta\s[^>]*charset\s*=\s*["']?\s*([a-z0-9._-]{1,40})/i)?.[1]
  const contentType = prefix.match(/<meta\s[^>]*content\s*=\s*["'][^"']*charset\s*=\s*([a-z0-9._-]{1,40})/i)?.[1]
  return (direct || contentType || '').toLowerCase() || null
}

export function parseHtmlBuffer(htmlBuffer) {
  if (!Buffer.isBuffer(htmlBuffer)) throw createWebsiteCheckError('HTML_ANALYSIS_FAILED')
  if (htmlBuffer.length > MAX_HTML_RESPONSE_BYTES) throw createWebsiteCheckError('RESPONSE_TOO_LARGE')

  const hasUtf8Bom = htmlBuffer.length >= 3 && htmlBuffer[0] === 0xef && htmlBuffer[1] === 0xbb && htmlBuffer[2] === 0xbf
  const content = hasUtf8Bom ? htmlBuffer.subarray(3) : htmlBuffer
  const declaredCharset = detectDeclaredCharset(content)

  try {
    const document = parse(content.toString('utf8'), { scriptingEnabled: false })
    return Object.freeze({
      document,
      encoding: Object.freeze({
        used: 'utf-8',
        bomDetected: hasUtf8Bom,
        declaredCharset,
        declaredCharsetSupported: declaredCharset === null || ['utf-8', 'utf8'].includes(declaredCharset),
      }),
    })
  } catch {
    throw createWebsiteCheckError('HTML_ANALYSIS_FAILED')
  }
}
