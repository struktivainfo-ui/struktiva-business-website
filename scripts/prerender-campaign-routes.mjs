import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getRouteMeta } from '../src/routing/routeConfig.js'

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)))
const distRoot = resolve(projectRoot, 'dist')
const sourceHtml = await readFile(resolve(distRoot, 'index.html'), 'utf8')

function escapeAttribute(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

function replaceTag(html, pattern, replacement) {
  return pattern.test(html) ? html.replace(pattern, replacement) : html.replace('</head>', `    ${replacement}\n  </head>`)
}

function createRouteHtml(pathname) {
  const meta = getRouteMeta(pathname)
  const canonical = `https://struktiva.de${meta.canonicalPath}`
  const ogTitle = meta.ogTitle || meta.title
  const ogDescription = meta.ogDescription || meta.description
  const socialImage = `https://struktiva.de${meta.socialImage || '/struktiva-logo.jpeg'}`
  let html = sourceHtml

  html = replaceTag(html, /<title>[\s\S]*?<\/title>/i, `<title>${escapeAttribute(meta.title)}</title>`)
  html = replaceTag(html, /<meta\s+name="description"[\s\S]*?>/i, `<meta name="description" content="${escapeAttribute(meta.description)}" />`)
  html = replaceTag(html, /<meta\s+name="robots"[\s\S]*?>/i, `<meta name="robots" content="${meta.noindex ? 'noindex, nofollow' : 'index, follow'}" />`)
  html = replaceTag(html, /<link\s+rel="canonical"[\s\S]*?>/i, `<link rel="canonical" href="${canonical}" />`)
  html = replaceTag(html, /<meta\s+property="og:title"[\s\S]*?>/i, `<meta property="og:title" content="${escapeAttribute(ogTitle)}" />`)
  html = replaceTag(html, /<meta\s+property="og:description"[\s\S]*?>/i, `<meta property="og:description" content="${escapeAttribute(ogDescription)}" />`)
  html = replaceTag(html, /<meta\s+property="og:url"[\s\S]*?>/i, `<meta property="og:url" content="${canonical}" />`)
  html = replaceTag(html, /<meta\s+property="og:image"[\s\S]*?>/i, `<meta property="og:image" content="${socialImage}" />`)
  html = replaceTag(html, /<meta\s+name="twitter:title"[\s\S]*?>/i, `<meta name="twitter:title" content="${escapeAttribute(ogTitle)}" />`)
  html = replaceTag(html, /<meta\s+name="twitter:description"[\s\S]*?>/i, `<meta name="twitter:description" content="${escapeAttribute(ogDescription)}" />`)
  html = replaceTag(html, /<meta\s+name="twitter:image"[\s\S]*?>/i, `<meta name="twitter:image" content="${socialImage}" />`)

  if (meta.structuredData) {
    const json = JSON.stringify(meta.structuredData).replace(/</g, '\\u003c')
    html = html.replace('</head>', `    <script id="struktiva-route-structured-data" type="application/ld+json">${json}</script>\n  </head>`)
  }
  return html
}

for (const pathname of ['/digital-check', '/digital-check/danke']) {
  const directory = resolve(distRoot, pathname.slice(1))
  await mkdir(directory, { recursive: true })
  await writeFile(resolve(directory, 'index.html'), createRouteHtml(pathname), 'utf8')
}
