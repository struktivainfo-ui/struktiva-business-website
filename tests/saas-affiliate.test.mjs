import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { GETRESPONSE_DISCLOSURE, GETRESPONSE_REFERRAL_URL } from '../src/config/affiliate.js'
import { softwareGuides } from '../src/content/softwareGuides.js'
import { getRouteMeta, SEO_PRERENDER_PATHS } from '../src/routing/routeConfig.js'

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')

test('GetResponse pages have canonical SEO routes and deployment rewrites', async () => {
  const rewrites = JSON.parse(await read('vercel.json')).rewrites
  const sitemap = await read('public/sitemap.xml')
  for (const guide of [softwareGuides.getresponse, softwareGuides.automation]) {
    assert.equal(guide.affiliate, true)
    assert.equal(getRouteMeta(guide.path).canonicalPath, guide.path)
    assert.ok(SEO_PRERENDER_PATHS.includes(guide.path))
    assert.ok(rewrites.some(({ source, destination }) => source === guide.path && destination === `${guide.path}/index.html`))
    assert.ok(sitemap.includes(`<loc>https://struktiva.de${guide.path}</loc>`))
  }
})

test('referral links use one approved URL, clear disclosure and sponsored rel', async () => {
  const component = await read('src/pages/SoftwareGuidePage.jsx')
  assert.equal(GETRESPONSE_REFERRAL_URL, 'https://try.getresponsetoday.com/71f61c5tu71k')
  assert.match(GETRESPONSE_DISCLOSURE, /Werbung:.*von GetResponse eine Provision/)
  assert.match(component, /software-hero-disclosure.*GETRESPONSE_DISCLOSURE/)
  assert.match(component, /rel="sponsored nofollow noopener noreferrer"/)
  assert.doesNotMatch(component, /enthält die Seite keine Affiliate-Links/)
})

test('advertising disclosure route has prerendered metadata', async () => {
  const rewrites = JSON.parse(await read('vercel.json')).rewrites
  assert.ok(SEO_PRERENDER_PATHS.includes('/werbekennzeichnung'))
  assert.ok(rewrites.some(({ source, destination }) => source === '/werbekennzeichnung' && destination === '/werbekennzeichnung/index.html'))
  assert.equal(getRouteMeta('/werbekennzeichnung').title, 'Werbekennzeichnung | STRUKTIVA')
})

test('salon newsletter guide is indexable, linked and uses the approved disclosure', async () => {
  const guide = softwareGuides.salonNewsletter
  const meta = getRouteMeta(guide.path)
  const rewrites = JSON.parse(await read('vercel.json')).rewrites
  const sitemap = await read('public/sitemap.xml')
  const component = await read('src/pages/SoftwareGuidePage.jsx')

  assert.equal(meta.title, guide.metaTitle)
  assert.equal(meta.canonicalPath, guide.path)
  assert.equal(meta.noindex, false)
  assert.ok(SEO_PRERENDER_PATHS.includes(guide.path))
  assert.ok(rewrites.some(({ source, destination }) => source === guide.path && destination === `${guide.path}/index.html`))
  assert.ok(sitemap.includes(`<loc>https://struktiva.de${guide.path}</loc>`))
  assert.equal(guide.affiliate, true)
  assert.ok(guide.sections.some((section) => section.affiliateCta))
  assert.match(component, /software-hero-disclosure.*GETRESPONSE_DISCLOSURE/)
  assert.match(component, /section\.affiliateCta.*GETRESPONSE_DISCLOSURE/)
  assert.match(component, /rel="sponsored nofollow noopener noreferrer"/)
})

test('small business email marketing guide is published through the shared SEO and affiliate routes', async () => {
  const guide = softwareGuides.emailMarketingBasics
  const meta = getRouteMeta(guide.path)
  const rewrites = JSON.parse(await read('vercel.json')).rewrites
  const sitemap = await read('public/sitemap.xml')
  const component = await read('src/pages/SoftwareGuidePage.jsx')

  assert.equal(meta.title, guide.metaTitle)
  assert.equal(meta.canonicalPath, guide.path)
  assert.equal(meta.noindex, false)
  assert.ok(SEO_PRERENDER_PATHS.includes(guide.path))
  assert.ok(rewrites.some(({ source, destination }) => source === guide.path && destination === `${guide.path}/index.html`))
  assert.ok(sitemap.includes(`<loc>https://struktiva.de${guide.path}</loc>`))
  assert.equal(guide.affiliate, true)
  assert.equal(guide.topAffiliateCta, true)
  assert.ok(guide.sections.some((section) => section.affiliateCta))
  assert.match(component, /software-hero-disclosure.*GETRESPONSE_DISCLOSURE/)
  assert.match(component, /guide\.topAffiliateCta.*GETRESPONSE_DISCLOSURE/)
  assert.match(component, /section\.affiliateCta.*GETRESPONSE_DISCLOSURE/)
  assert.match(component, /rel="sponsored nofollow noopener noreferrer"/)
})

test('commercial-intent GetResponse guides are indexable, prerendered and internally linked', async () => {
  const rewrites = JSON.parse(await read('vercel.json')).rewrites
  const sitemap = await read('public/sitemap.xml')

  for (const guide of [softwareGuides.getresponsePricing, softwareGuides.getresponseVsBrevo]) {
    const meta = getRouteMeta(guide.path)
    assert.equal(meta.title, guide.metaTitle)
    assert.equal(meta.canonicalPath, guide.path)
    assert.equal(meta.noindex, false)
    assert.equal(guide.affiliate, true)
    assert.equal(guide.topAffiliateCta, true)
    assert.ok(SEO_PRERENDER_PATHS.includes(guide.path))
    assert.ok(rewrites.some(({ source, destination }) => source === guide.path && destination === `${guide.path}/index.html`))
    assert.ok(sitemap.includes(`<loc>https://struktiva.de${guide.path}</loc>`))
    assert.ok(guide.sections.some((section) => section.links?.length && section.affiliateCta))
  }

  assert.ok(softwareGuides.newsletter.sections.some((section) => section.links?.some((link) => link.href === softwareGuides.getresponsePricing.path)))
  assert.ok(softwareGuides.newsletter.sections.some((section) => section.links?.some((link) => link.href === softwareGuides.getresponseVsBrevo.path)))
})

test('previously thin local service and CRM guides now contain practical depth and related links', () => {
  for (const guide of [softwareGuides.email, softwareGuides.crm]) {
    assert.ok(guide.sections.length >= 6)
    assert.ok(guide.sections.some((section) => section.subsections?.length >= 3))
    assert.ok(guide.sections.some((section) => section.links?.length >= 3))
  }
})
