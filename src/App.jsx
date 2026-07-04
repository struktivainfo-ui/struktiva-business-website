import { getRouteMeta } from './routing/routeConfig.js'
import { getPageComponent } from './routing/pageRegistry.jsx'
import { useCurrentPath } from './hooks/useCurrentPath.js'
import { useDocumentTitleSafe } from './hooks/useDocumentTitleSafe.js'
import { useMarketingLeadTracking } from './hooks/useMarketingLeadTracking.js'
import AppShell from './components/layout/AppShell.jsx'

export default function App() {
  const pathname = useCurrentPath()
  const routeMeta = getRouteMeta(pathname)
  const ActivePage = getPageComponent(pathname)

  useDocumentTitleSafe(pathname)
  useMarketingLeadTracking()

  return (
    <AppShell pathname={pathname} routeMeta={routeMeta}>
      <ActivePage />
    </AppShell>
  )
}
