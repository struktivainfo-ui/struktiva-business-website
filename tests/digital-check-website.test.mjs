import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import {
  digitalCheckCreditText,
  digitalCheckFormNoticeText,
  digitalCheckOrderDefinitionText,
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

test('the current offer is free and does not create a charge', () => {
  assert.equal(personalDigitalCheckOffer.isFree, true)
  assert.equal(personalDigitalCheckOffer.price, 0)
  assert.equal(personalDigitalCheckOffer.grossPrice, 0)
  assert.equal(personalDigitalCheckOffer.currency, 'EUR')
  assert.equal(personalDigitalCheckOffer.priceForm, 'kostenlos')
  assert.equal(personalDigitalCheckOffer.priceBaseLabel, 'Kostenlos')
  assert.equal(personalDigitalCheckOffer.taxNote, '')
  assert.equal(personalDigitalCheckOffer.taxStatus, 'not_applicable')
  assert.equal(digitalCheckPriceLabel, 'Kostenlos')
  assert.match(digitalCheckOrderDefinitionText, /kostenlose Digital-Check/)
  assert.match(digitalCheckFormNoticeText, /unverbindliche Anfrage/)
  assert.match(digitalCheckFormNoticeText, /kein kostenpflichtiger Auftrag/)
  assert.match(digitalCheckCreditText, /kostenlos und wird nicht/)
  assert.match(digitalCheckFaqs[0].answer, /kostenlos/)
})

test('visible Digital-Check locations consistently communicate that it is free', async () => {
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
  assert.match(activeDigitalCheckSource, /Kostenlos/)
  assert.doesNotMatch(activeDigitalCheckSource, /79\s*€|129\s*€|MwSt|Mehrwertsteuer|zzgl\.|Kleinunternehmer|§\s*19\s*UStG/i)
})

test('Service structured data and visible offer use the same free price', () => {
  const routeMeta = getRouteMeta('/digital-check')
  const structuredData = routeMeta.structuredData
  assert.match(routeMeta.description, /kostenlos prüfen lassen/)
  assert.match(routeMeta.ogDescription, /kostenlos\.$/)
  assert.equal(structuredData.url, 'https://struktiva.de/digital-check')
  assert.equal(structuredData.provider.name, 'STRUKTIVA Digitale Unternehmensberatung')
  assert.equal(structuredData.offers.price, personalDigitalCheckOffer.grossPrice)
  assert.equal(structuredData.offers.price, 0)
  assert.equal(structuredData.offers.priceCurrency, 'EUR')
  assert.equal(structuredData.offers.url, 'https://struktiva.de/digital-check')
  assert.equal(structuredData.offers.priceValidUntil, undefined)
  assert.equal(structuredData.aggregateRating, undefined)
})

test('success page stays noindex and contains no price promotion', async () => {
  const successPage = await read('src/pages/DigitalCheckSuccessPage.jsx')
  const successMeta = getRouteMeta('/digital-check/danke')
  assert.equal(successMeta.noindex, true)
  assert.equal(successMeta.structuredData, undefined)
  assert.match(successPage, /Digital-Check ist kostenlos/)
  assert.doesNotMatch(successPage, /(?:79|129)\s*€|MwSt|Mehrwertsteuer|price/i)
})

test('active source contains no old paid offer or measures-plan exclusion', async () => {
  const [legacy, data, page] = await Promise.all([
    read('src/legacy/legacyContent.jsx'),
    read('src/components/digital-check/digitalCheckData.js'),
    read('src/pages/DigitalCheckPage.jsx'),
  ])
  const activeSource = `${legacy}\n${data}\n${page}`
  assert.doesNotMatch(activeSource, /Digitaler Kurzcheck\s+49|79\s*€|129\s*€|garantierter Maßnahmenplan|kein Maßnahmenplan/i)
  assert.match(data, /priorisierten Maßnahmenplan/)
})

test('active offer copy makes the free and non-binding nature explicit', async () => {
  const files = await Promise.all([
    read('src/config/digitalCheckOffer.js'),
    read('src/components/digital-check/DigitalCheckHero.jsx'),
    read('src/components/digital-check/DigitalCheckOfferSummary.jsx'),
    read('src/components/digital-check/DigitalCheckLeadForm.jsx'),
    read('src/components/digital-check/digitalCheckData.js'),
    read('api/leads.js'),
  ])
  const source = files.join('\n')
  assert.match(source, /Der Digital-Check ist kostenlos/)
  assert.match(source, /kein kostenpflichtiger Auftrag/)
  assert.doesNotMatch(source, /(?:noch|nur)\s+\d+\s+(?:Plätze|verfügbar)|Countdown/i)
  assert.doesNotMatch(source, /Einführungs(?:preis|platz)|Digitaler Kurzcheck\s+49|49\s*€|79\s*€|129\s*€/i)
  assert.doesNotMatch(source, /netto|Kleinunternehmer|MwSt/i)
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
