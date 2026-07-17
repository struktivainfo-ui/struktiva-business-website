import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { personalDigitalCheckOffer } from '../src/config/digitalCheckOffer.js'
import { getRouteMeta } from '../src/routing/routeConfig.js'

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')

test('Digital-Check and noindex success route are registered with campaign layout', async () => {
  const registry = await read('src/routing/pageRegistry.jsx')
  assert.match(registry, /'\/digital-check': DigitalCheckPage/)
  assert.match(registry, /'\/digital-check\/danke': DigitalCheckSuccessPage/)
  assert.equal(getRouteMeta('/digital-check').layout, 'campaign')
  assert.equal(getRouteMeta('/digital-check/danke').layout, 'campaign')
  assert.equal(getRouteMeta('/digital-check/danke').noindex, true)
})

test('sitemap contains the offer but never the success page', async () => {
  const sitemap = await read('public/sitemap.xml')
  assert.match(sitemap, /https:\/\/struktiva\.de\/digital-check<\/loc>/)
  assert.doesNotMatch(sitemap, /digital-check\/danke/)
})

test('the current offer uses the central 129 EUR configuration without an unconfirmed tax claim', () => {
  assert.equal(personalDigitalCheckOffer.price, 129)
  assert.equal(personalDigitalCheckOffer.taxNote, '')
  assert.equal(personalDigitalCheckOffer.taxStatus, 'unconfirmed')
})

test('active source contains no old 49 EUR offer or measures-plan exclusion', async () => {
  const [legacy, data, page] = await Promise.all([
    read('src/legacy/legacyContent.jsx'),
    read('src/components/digital-check/digitalCheckData.js'),
    read('src/pages/DigitalCheckPage.jsx'),
  ])
  const activeSource = `${legacy}\n${data}\n${page}`
  assert.doesNotMatch(activeSource, /Digitaler Kurzcheck\s+49|garantierter Maßnahmenplan|kein Maßnahmenplan/i)
  assert.match(data, /priorisierten Maßnahmenplan/)
})

test('dedicated form uses companyWebsite and contactTrap with required campaign fields', async () => {
  const form = await read('src/components/digital-check/DigitalCheckLeadForm.jsx')
  for (const field of ['name', 'company', 'email', 'industry', 'primaryChallenge', 'privacyAccepted', 'companyWebsite', 'preferredContact', 'contactTrap']) {
    assert.match(form, new RegExp(`name=["']${field}["']`))
  }
  assert.doesNotMatch(form, /name=["']website["']/)
})

test('campaign shell excludes global navigation and floating WhatsApp', async () => {
  const shell = await read('src/components/layout/AppShell.jsx')
  assert.match(shell, /isCampaignRoute \? <CampaignHeader/)
  assert.match(shell, /!isCampaignRoute \? <FloatingWhatsAppButton/)
})

test('all primary Digital-Check CTAs use the dedicated form target', async () => {
  const routeConfig = await read('src/routing/routeConfig.js')
  const offer = await read('src/config/digitalCheckOffer.js')
  assert.match(offer, /primaryFormTarget: '\/digital-check#digital-check-anfrage'/)
  assert.doesNotMatch(routeConfig, /primaryCta:.*\/kontakt#lead-form/)
})
