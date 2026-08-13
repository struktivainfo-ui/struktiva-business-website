import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { localSeoPages } from '../src/content/localSeoContent.js'
import { ACTIVE_ROUTE_PATHS, getRouteMeta, LEGACY_ROUTE_REDIRECTS, SEO_PRERENDER_PATHS } from '../src/routing/routeConfig.js'

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')
const pages = Object.values(localSeoPages)
const paths = pages.map((page) => page.path)

test('all six local SEO routes are active and prerendered', async () => {
  assert.equal(paths.length, 6)
  for (const path of paths) {
    assert.ok(ACTIVE_ROUTE_PATHS.includes(path), `${path} is missing from active routes`)
    assert.ok(SEO_PRERENDER_PATHS.includes(path), `${path} is missing from prerender routes`)
  }
  const registry = await read('src/routing/pageRegistry.jsx')
  for (const path of paths) assert.match(registry, new RegExp(`['"]${path}['"]`))
})

test('local SEO metadata is unique, canonical and readable', () => {
  const titles = new Set()
  const descriptions = new Set()
  for (const page of pages) {
    const meta = getRouteMeta(page.path)
    assert.equal(meta.canonicalPath, page.path)
    assert.equal(meta.ogTitle, meta.title)
    assert.equal(meta.ogDescription, meta.description)
    assert.ok(meta.title.length >= 40 && meta.title.length <= 65, `${page.path} title length ${meta.title.length}`)
    assert.ok(meta.description.length >= 120 && meta.description.length <= 170, `${page.path} description length ${meta.description.length}`)
    assert.equal(meta.noindex, false)
    titles.add(meta.title)
    descriptions.add(meta.description)
  }
  assert.equal(titles.size, pages.length)
  assert.equal(descriptions.size, pages.length)
})

test('visible FAQs and structured FAQ data share one source of truth', () => {
  for (const page of pages) {
    const graph = getRouteMeta(page.path).structuredData['@graph']
    const webPage = graph.find((item) => item['@type'] === 'WebPage')
    const breadcrumb = graph.find((item) => item['@type'] === 'BreadcrumbList')
    const faqPage = graph.find((item) => item['@type'] === 'FAQPage')
    assert.equal(webPage.url, `https://struktiva.de${page.path}`)
    assert.equal(breadcrumb.itemListElement.at(-1).item, webPage.url)
    assert.equal(faqPage.mainEntity.length, page.faqs.length)
    assert.deepEqual(faqPage.mainEntity.map((item) => item.name), page.faqs.map((faq) => faq.question))
    assert.equal(JSON.stringify(graph).includes('aggregateRating'), false)
  }
})

test('sitemap contains canonical production URLs and excludes non-index pages', async () => {
  const sitemap = await read('public/sitemap.xml')
  for (const path of paths) {
    assert.match(sitemap, new RegExp(`<loc>https:\/\/struktiva\\.de${path}<\/loc>`))
  }
  assert.doesNotMatch(sitemap, /localhost|vercel\.app|digital-check\/danke/)
})

test('robots remains open and points to the canonical sitemap', async () => {
  const robots = await read('public/robots.txt')
  assert.match(robots, /User-agent:\s*\*/)
  assert.match(robots, /Allow:\s*\//)
  assert.match(robots, /Sitemap:\s*https:\/\/struktiva\.de\/sitemap\.xml/)
  assert.doesNotMatch(robots, /Disallow:\s*\//)
})

test('page composition has one shared H1 and individual visible FAQ sections', async () => {
  const sections = await read('src/components/local-seo/LocalSeoSections.jsx')
  assert.equal((sections.match(/<h1\b/g) || []).length, 1)
  for (const component of [
    'DigitalConsultingCalwPage.jsx', 'DigitalizationCalwPage.jsx', 'WebsiteTradesCalwPage.jsx',
    'DigitalCustomerProcessesCalwPage.jsx', 'GoogleVisibilityCalwPage.jsx', 'AiAutomationCalwPage.jsx',
  ]) {
    const source = await read(`src/pages/${component}`)
    assert.match(source, /<FaqSection faqs=\{page\.faqs\}/)
    assert.match(source, /<FinalCta/)
  }
})

test('new and modified SEO content contains no unresolved internal route links', async () => {
  const sourceFiles = [
    'src/components/local-seo/LocalSeoSections.jsx',
    'src/components/home/HomeHero.jsx',
    'src/components/home/HomeSolutionsSection.jsx',
    'src/components/services/servicesData.js',
    'src/components/digital-check/DigitalCheckIntro.jsx',
    'src/components/practice/PracticeFeaturedCase.jsx',
    'src/components/layout/Footer.jsx',
    'src/pages/DigitalConsultingCalwPage.jsx',
    'src/pages/DigitalizationCalwPage.jsx',
    'src/pages/WebsiteTradesCalwPage.jsx',
    'src/pages/DigitalCustomerProcessesCalwPage.jsx',
    'src/pages/GoogleVisibilityCalwPage.jsx',
    'src/pages/AiAutomationCalwPage.jsx',
  ]
  const validPaths = new Set([...ACTIVE_ROUTE_PATHS, ...Object.keys(LEGACY_ROUTE_REDIRECTS)])
  for (const sourceFile of sourceFiles) {
    const source = await read(sourceFile)
    const hrefs = [...source.matchAll(/href\s*[:=]\s*['"](\/[^'"]*)['"]/g)].map((match) => match[1])
    for (const href of hrefs) {
      const path = href.split('#')[0] || '/'
      assert.ok(validPaths.has(path), `${sourceFile} links to unknown route ${href}`)
    }
  }
})

test('Vercel packaging excludes local work products and private project material', async () => {
  const ignore = await read('.vercelignore')
  for (const entry of [
    '.playwright-cli', '.playwright-mcp', '.social-browser-profile', '.tmp-brave-maps',
    'docs', 'output', 'tools', 'public/marketing', '.env', '.env.*',
    'AVATAR-SVEN.md', 'AVATAR-USER.md', 'heygen-video-log.jsonl',
  ]) {
    assert.match(ignore, new RegExp(`^${entry.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'm'), `missing ${entry}`)
  }
})
