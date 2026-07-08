import { useEffect } from 'react'
import { getLegacyRedirectTarget, getRouteMeta } from './routing/routeConfig.js'
import { getPageComponent } from './routing/pageRegistry.jsx'
import { useCurrentPath } from './hooks/useCurrentPath.js'
import { useDocumentTitleSafe } from './hooks/useDocumentTitleSafe.js'
import { useMarketingLeadTracking } from './hooks/useMarketingLeadTracking.js'
import AppShell from './components/layout/AppShell.jsx'

export default function App() {
  const currentPathname = useCurrentPath()
  const legacyRedirectTarget = getLegacyRedirectTarget(currentPathname)
  const pathname = legacyRedirectTarget || currentPathname
  const routeMeta = getRouteMeta(pathname)
  const ActivePage = getPageComponent(pathname)

  useEffect(() => {
    if (!legacyRedirectTarget) return
    window.history.replaceState({}, '', legacyRedirectTarget)
  }, [legacyRedirectTarget])

  useDocumentTitleSafe(pathname)
  useMarketingLeadTracking()

  return (
    <AppShell pathname={pathname} routeMeta={routeMeta}>
      <ActivePage />
    </AppShell>
  )
}
