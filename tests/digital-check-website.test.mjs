import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import {
  DIGITAL_CHECK_CONFIRMED_TAX_NOTE,
  digitalCheckPriceLabel,
  personalDigitalCheckOffer,
} from '../src/config/digitalCheckOffer.js'
import { digitalCheckFaqs } from '../src/components/digital-check/digitalCheckData.js'
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

test('the current offer uses the confirmed 129 EUR gross-price configuration', () => {
  assert.equal(personalDigitalCheckOffer.price, 129)
  assert.equal(personalDigitalCheckOffer.grossPrice, 129)
  assert.equal(personalDigitalCheckOffer.currency, 'EUR')
  assert.equal(personalDigitalCheckOffer.priceForm, 'einmalig')
  assert.equal(personalDigitalCheckOffer.vatRatePercent, 19)
  assert.equal(personalDigitalCheckOffer.taxNote, 'inkl. 19 % MwSt.')
  assert.equal(personalDigitalCheckOffer.taxStatus, 'confirmed_gross')
  assert.equal(digitalCheckPriceLabel, '129 € einmalig inkl. 19 % MwSt.')
  assert.doesNotMatch(digitalCheckFaqs[0].answer, /MwSt\.\./)
})

test('the confirmed tax note survives an empty or contradictory optional environment value', async () => {
  const previousValue = process.env.VITE_DIGITAL_CHECK_TAX_NOTE
  try {
    process.env.VITE_DIGITAL_CHECK_TAX_NOTE = ''
    const emptyEnvironmentModule = await import(`../src/config/digitalCheckOffer.js?empty=${Date.now()}`)
    assert.equal(emptyEnvironmentModule.personalDigitalCheckOffer.taxNote, DIGITAL_CHECK_CONFIRMED_TAX_NOTE)

    process.env.VITE_DIGITAL_CHECK_TAX_NOTE = '129 € netto'
    const contradictoryEnvironmentModule = await import(`../src/config/digitalCheckOffer.js?invalid=${Date.now()}`)
    assert.equal(contradictoryEnvironmentModule.personalDigitalCheckOffer.taxNote, DIGITAL_CHECK_CONFIRMED_TAX_NOTE)
  } finally {
    if (previousValue === undefined) delete process.env.VITE_DIGITAL_CHECK_TAX_NOTE
    else process.env.VITE_DIGITAL_CHECK_TAX_NOTE = previousValue
  }
})

test('visible Digital-Check price locations use the confirmed tax note without net-price contradictions', async () => {
  const files = await Promise.all([
    read('src/components/digital-check/DigitalCheckHero.jsx'),
    read('src/components/digital-check/DigitalCheckOfferSummary.jsx'),
    read('src/components/digital-check/DigitalCheckFormSection.jsx'),
    read('src/components/digital-check/digitalCheckData.js'),
    read('src/components/home/HomeDigitalCheckSection.jsx'),
    read('api/leads.js'),
    read('README.md'),
  ])
  const activeDigitalCheckSource = files.join('\n')
  assert.match(activeDigitalCheckSource, /priceBaseLabel/)
  assert.match(activeDigitalCheckSource, /taxNote/)
  assert.match(activeDigitalCheckSource, /inkl\. 19 % MwSt\./)
  assert.doesNotMatch(activeDigitalCheckSource, /zzgl\.\s*MwSt|zuzüglich Mehrwertsteuer|Kleinunternehmer|§\s*19\s*UStG/i)
})

test('Service structured data and visible offer use the same 129 EUR gross price', () => {
  const structuredData = getRouteMeta('/digital-check').structuredData
  assert.equal(structuredData.url, 'https://struktiva.de/digital-check')
  assert.equal(structuredData.provider.name, 'STRUKTIVA Digitale Unternehmensberatung')
  assert.equal(structuredData.offers.price, personalDigitalCheckOffer.grossPrice)
  assert.equal(structuredData.offers.price, 129)
  assert.equal(structuredData.offers.priceCurrency, 'EUR')
  assert.equal(structuredData.offers.url, 'https://struktiva.de/digital-check')
  assert.equal(structuredData.aggregateRating, undefined)
})

test('success page stays noindex and contains no price promotion', async () => {
  const successPage = await read('src/pages/DigitalCheckSuccessPage.jsx')
  const successMeta = getRouteMeta('/digital-check/danke')
  assert.equal(successMeta.noindex, true)
  assert.equal(successMeta.structuredData, undefined)
  assert.doesNotMatch(successPage, /129\s*€|MwSt|Mehrwertsteuer|price/i)
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
