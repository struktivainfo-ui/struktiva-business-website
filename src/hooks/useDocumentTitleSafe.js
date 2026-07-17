import { useEffect } from 'react'
import { getRouteMeta } from '../routing/routeConfig.js'

const SITE_URL = 'https://struktiva.de/'

function absoluteSiteUrl(path = '/') {
  return new URL(path, SITE_URL).toString()
}

function upsertMeta(attribute, value) {
  let element = document.querySelector(`meta[${attribute}="${value}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }
  return element
}

function setMeta(attribute, value, content) {
  upsertMeta(attribute, value).setAttribute('content', content)
}

export function useDocumentTitleSafe(pathname) {
  useEffect(() => {
    const routeMeta = getRouteMeta(pathname)
    const canonicalHref = absoluteSiteUrl(routeMeta.canonicalPath || pathname)
    const ogTitle = routeMeta.ogTitle || routeMeta.title
    const ogDescription = routeMeta.ogDescription || routeMeta.description
    const socialImage = absoluteSiteUrl(routeMeta.socialImage || '/struktiva-logo.jpeg')

    document.title = routeMeta.title
    setMeta('name', 'description', routeMeta.description)
    setMeta('name', 'robots', routeMeta.noindex ? 'noindex, nofollow' : 'index, follow')
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:title', ogTitle)
    setMeta('property', 'og:description', ogDescription)
    setMeta('property', 'og:url', canonicalHref)
    setMeta('property', 'og:image', socialImage)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', ogTitle)
    setMeta('name', 'twitter:description', ogDescription)
    setMeta('name', 'twitter:image', socialImage)

    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = canonicalHref

    document.getElementById('struktiva-route-structured-data')?.remove()
    if (routeMeta.structuredData) {
      const script = document.createElement('script')
      script.id = 'struktiva-route-structured-data'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(routeMeta.structuredData).replace(/</g, '\\u003c')
      document.head.appendChild(script)
    }
  }, [pathname])
}
