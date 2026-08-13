import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse } from 'parse5'
import { localSeoPages } from '../src/content/localSeoContent.js'
import { getRouteMeta } from '../src/routing/routeConfig.js'

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)))

function walk(node, visit) {
  visit(node)
  for (const child of node.childNodes || []) walk(child, visit)
  if (node.content) walk(node.content, visit)
}

function attribute(node, name) {
  return node.attrs?.find((item) => item.name === name)?.value
}

function textContent(node) {
  return (node.childNodes || []).map((child) => child.value || textContent(child)).join('')
}

for (const page of Object.values(localSeoPages)) {
  const meta = getRouteMeta(page.path)
  const htmlPath = resolve(projectRoot, 'dist', page.path.slice(1), 'index.html')
  const html = await readFile(htmlPath, 'utf8')
  const document = parse(html)
  const nodes = []
  walk(document, (node) => nodes.push(node))

  const title = nodes.find((node) => node.tagName === 'title')
  const description = nodes.find((node) => node.tagName === 'meta' && attribute(node, 'name') === 'description')
  const robots = nodes.find((node) => node.tagName === 'meta' && attribute(node, 'name') === 'robots')
  const canonical = nodes.find((node) => node.tagName === 'link' && attribute(node, 'rel') === 'canonical')
  const ogUrl = nodes.find((node) => node.tagName === 'meta' && attribute(node, 'property') === 'og:url')
  const routeJsonLd = nodes.find((node) => node.tagName === 'script' && attribute(node, 'id') === 'struktiva-route-structured-data')

  assert.equal(textContent(title), meta.title, `${page.path} title`)
  assert.equal(attribute(description, 'content'), meta.description, `${page.path} description`)
  assert.equal(attribute(robots, 'content'), 'index, follow', `${page.path} robots`)
  assert.equal(attribute(canonical, 'href'), `https://struktiva.de${page.path}`, `${page.path} canonical`)
  assert.equal(attribute(ogUrl, 'content'), `https://struktiva.de${page.path}`, `${page.path} OpenGraph URL`)
  assert.ok(routeJsonLd, `${page.path} route JSON-LD`)

  const graph = JSON.parse(textContent(routeJsonLd))['@graph']
  const faqPage = graph.find((item) => item['@type'] === 'FAQPage')
  assert.equal(faqPage.mainEntity.length, page.faqs.length, `${page.path} FAQ schema`)
}

console.log(`Local SEO build audit passed for ${Object.keys(localSeoPages).length} routes.`)
