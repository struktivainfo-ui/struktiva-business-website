import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { currentNavigation } from '../../routing/routeConfig.js'

const navItems = currentNavigation.primary
const primaryCta = currentNavigation.primaryCta

function normalizeHref(href) {
  return href.split('#')[0] || '/'
}

function useCurrentHash() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', updateHash)
    window.addEventListener('popstate', updateHash)
    return () => {
      window.removeEventListener('hashchange', updateHash)
      window.removeEventListener('popstate', updateHash)
    }
  }, [])

  return hash
}

function isActiveNavItem(item, pathname, hash) {
  const hrefPath = normalizeHref(item.href)
  if (item.href.includes('#')) {
    return pathname === hrefPath && hash === item.href.slice(item.href.indexOf('#'))
  }
  return pathname === hrefPath
}

function NavigationLink({ item, pathname, hash, onNavigate, className = '' }) {
  const active = isActiveNavItem(item, pathname, hash)

  return (
    <a
      href={item.href}
      aria-current={active ? 'page' : undefined}
      data-active={active ? 'true' : undefined}
      className={`struktiva-nav-link ${className}`}
      onClick={onNavigate}
    >
      <span>{item.label}</span>
    </a>
  )
}

export default function Header({ pathname }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const buttonRef = useRef(null)
  const panelRef = useRef(null)
  const hash = useCurrentHash()

  const closeMobileMenu = useCallback((restoreFocus = false) => {
    setMobileOpen(false)
    document.body.classList.remove('struktiva-mobile-nav-open')
    document.body.style.overflow = ''
    if (restoreFocus) {
      window.requestAnimationFrame(() => buttonRef.current?.focus())
    }
  }, [])

  useEffect(() => {
    closeMobileMenu(false)
  }, [pathname, closeMobileMenu])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return undefined

    document.body.classList.add('struktiva-mobile-nav-open')
    document.body.style.overflow = 'hidden'

    const focusable = panelRef.current?.querySelector('a, button')
    window.requestAnimationFrame(() => focusable?.focus())

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMobileMenu(true)
      }
    }

    const onPointerDown = (event) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        closeMobileMenu(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown, { passive: true })

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.body.classList.remove('struktiva-mobile-nav-open')
      document.body.style.overflow = ''
    }
  }, [mobileOpen, closeMobileMenu])

  return (
    <header className={`struktiva-global-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="struktiva-global-header__inner">
        <a className="struktiva-brand" href="/" aria-label="STRUKTIVA Startseite">
          <img src="/struktiva-logo.jpeg" alt="" className="struktiva-brand__mark" />
          <span className="struktiva-brand__text">
            <span className="struktiva-brand__name">STRUKTIVA</span>
            <span className="struktiva-brand__descriptor">Digitale Unternehmensberatung</span>
          </span>
        </a>

        <nav className="struktiva-desktop-nav" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <NavigationLink key={`${item.label}-${item.href}`} item={item} pathname={pathname} hash={hash} />
          ))}
        </nav>

        <div className="struktiva-header-actions">
          <a className="struktiva-primary-action" href={primaryCta.href}>
            <span>{primaryCta.label}</span>
            <ArrowRight aria-hidden="true" className="struktiva-primary-action__icon" />
          </a>
          <button
            ref={buttonRef}
            type="button"
            className="struktiva-menu-button"
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-controls="mobile-menu-panel"
            aria-expanded={mobileOpen}
            onClick={() => {
              if (mobileOpen) {
                closeMobileMenu(true)
                return
              }
              setMobileOpen(true)
            }}
          >
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileOpen ? <div className="struktiva-mobile-nav-backdrop" aria-hidden="true" /> : null}

      <div
        id="mobile-menu-panel"
        ref={panelRef}
        className="struktiva-mobile-nav"
        data-open={mobileOpen ? 'true' : 'false'}
        hidden={!mobileOpen}
      >
        <nav aria-label="Mobile Hauptnavigation">
          {navItems.map((item) => (
            <NavigationLink
              key={`mobile-${item.label}-${item.href}`}
              item={item}
              pathname={pathname}
              hash={hash}
              className="struktiva-mobile-nav__link"
              onNavigate={() => closeMobileMenu(false)}
            />
          ))}
        </nav>
        <div className="struktiva-mobile-nav__cta">
          <a className="struktiva-primary-action struktiva-primary-action--mobile" href={primaryCta.href} onClick={() => closeMobileMenu(false)}>
            <span>{primaryCta.label}</span>
            <ArrowRight aria-hidden="true" className="struktiva-primary-action__icon" />
          </a>
        </div>
      </div>
    </header>
  )
}
