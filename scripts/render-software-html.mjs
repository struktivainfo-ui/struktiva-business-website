import { softwareGuideList } from '../src/content/softwareGuides.js'
import { GETRESPONSE_DISCLOSURE, GETRESPONSE_REFERRAL_URL } from '../src/config/affiliate.js'

const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character])

const link = (href, label, attributes = '') => `<a href="${escapeHtml(href)}"${attributes}>${escapeHtml(label)}</a>`
const paragraphs = (items) => (items || []).map((item) => `<p>${escapeHtml(item)}</p>`).join('')
const list = (items, tag = 'ul') => items?.length ? `<${tag}>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</${tag}>` : ''
const affiliateLink = (label) => `<p><strong>${escapeHtml(GETRESPONSE_DISCLOSURE)}</strong> ${link(GETRESPONSE_REFERRAL_URL, label, ' rel="sponsored nofollow noopener noreferrer"')}</p>`

function renderSection(section) {
  const subsections = (section.subsections || []).map((subsection) => `<h3>${escapeHtml(subsection.heading)}</h3>${paragraphs(subsection.paragraphs)}`).join('')
  const decision = section.decision ? `<h3>Kann gut passen, wenn …</h3>${list(section.decision.fits)}<h3>Eher nicht nötig, wenn …</h3>${list(section.decision.notNeeded)}` : ''
  const related = section.links?.length ? `<nav aria-label="Weiterführende Ratgeber"><h3>Passende Ratgeber</h3><ul>${section.links.map((item) => `<li>${link(item.href, item.label)}</li>`).join('')}</ul></nav>` : ''
  const tools = section.tools?.length ? section.tools.map((tool) => `<h3>${escapeHtml(tool.name)}</h3><p>${escapeHtml(tool.fit)}</p><p><strong>Schwerpunkt:</strong> ${escapeHtml(tool.focus)}</p>${link(tool.source, 'Funktionen beim Anbieter prüfen')}${tool.name === 'GetResponse' ? affiliateLink('GetResponse-Angebot ansehen') : ''}`).join('') : ''
  const source = section.source ? `<p>Quelle: ${link(section.source.url, section.source.label)}</p>` : ''
  return `<section><h2>${escapeHtml(section.heading)}</h2>${paragraphs(section.paragraphs)}${list(section.list)}${list(section.steps, 'ol')}${subsections}${decision}${related}${tools}${source}${section.affiliateCta ? affiliateLink(section.ctaText || 'GetResponse-Angebot prüfen') : ''}</section>`
}

export function renderSoftwareHtml(pathname) {
  if (pathname === '/software-tools') {
    return `<main><h1>Software &amp; Tools für kleine Unternehmen</h1><p>Praxisnahe Ratgeber zu E-Mail-Marketing, Newsletter-Software, GetResponse und CRM.</p><nav aria-label="Software-Ratgeber"><ul>${softwareGuideList.map((guide) => `<li>${link(guide.path, guide.title)} – ${escapeHtml(guide.lead)}</li>`).join('')}</ul></nav></main>`
  }

  const guide = softwareGuideList.find((item) => item.path === pathname)
  if (!guide) return ''
  const intro = guide.affiliate ? `<p><strong>${escapeHtml(GETRESPONSE_DISCLOSURE)}</strong></p>` : ''
  const topCta = guide.affiliate && (guide.path.includes('getresponse-') || guide.topAffiliateCta) ? affiliateLink(guide.ctaText || 'GetResponse-Angebot prüfen') : ''
  const faqs = `<section><h2>Häufige Fragen</h2>${guide.faqs.map((faq) => `<h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p>`).join('')}</section>`
  const related = `<nav aria-label="Weitere Themen"><h2>Weitere Themen</h2><ul>${softwareGuideList.filter((item) => item.path !== pathname).map((item) => `<li>${link(item.path, item.title)}</li>`).join('')}</ul></nav>`
  return `<main><article><nav aria-label="Brotkrümelnavigation">${link('/', 'Start')} / ${link('/software-tools', 'Software & Tools')}</nav>${intro}<h1>${escapeHtml(guide.title)}</h1><p>${escapeHtml(guide.lead)}</p>${topCta}${guide.sections.map(renderSection).join('')}${faqs}</article>${related}</main>`
}
