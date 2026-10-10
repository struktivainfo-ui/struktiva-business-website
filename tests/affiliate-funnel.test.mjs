import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { trackGetResponseClick } from '../src/lib/affiliateTracking.js'
import { softwareGuideList } from '../src/content/softwareGuides.js'

test('every software page exposes useful crawlable HTML and internal guide links', async () => {
  for (const pathname of ['/software-tools', ...softwareGuideList.map((guide) => guide.path)]) {
    const html = await readFile(new URL(`../dist${pathname}/index.html`, import.meta.url), 'utf8')
    assert.match(html, /<main>/)
    assert.match(html, /<h1>/)
    assert.match(html, /<a href="\/software-tools/)
    assert.match(html, /<div id="root"><main>/, pathname)
  }

  const comparison = await readFile(new URL('../dist/software-tools/newsletter-software-kleine-unternehmen/index.html', import.meta.url), 'utf8')
  assert.match(comparison, /Welche Newsletter-Software passt zu welchem Bedarf\?/)
  assert.match(comparison, /GetResponse-Angebot ansehen/)
})

test('affiliate click measurement respects statistics consent and records its source', () => {
  const previousWindow = globalThis.window
  const events = []
  try {
    globalThis.window = {
      __struktivaConsentState: { statistics: false },
      location: { pathname: '/software-tools/newsletter-friseursalon', href: 'https://struktiva.de/software-tools/newsletter-friseursalon?utm_source=linkedin' },
      gtag: (...args) => events.push(args),
    }
    trackGetResponseClick('article_start')
    assert.equal(events.length, 0)

    globalThis.window.__struktivaConsentState.statistics = true
    trackGetResponseClick('article_start')
    assert.equal(events.length, 1)
    assert.equal(events[0][1], 'affiliate_click')
    assert.equal(events[0][2].page_path, '/software-tools/newsletter-friseursalon')
    assert.equal(events[0][2].affiliate_page, '/software-tools/newsletter-friseursalon')
    assert.equal(events[0][2].affiliate_placement, 'article_start')
  } finally {
    globalThis.window = previousWindow
  }
})
