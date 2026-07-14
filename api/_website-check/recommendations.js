const PRIORITY_ORDER = Object.freeze([
  { topic: 'transport', ids: ['https'] },
  { topic: 'title', ids: ['page-title'] },
  { topic: 'heading', ids: ['h1-structure'] },
  { topic: 'mobile', ids: ['viewport-foundation', 'mobile-usability'] },
  { topic: 'contact', ids: ['contact-methods'] },
  { topic: 'contact-cta', ids: ['contact-cta'] },
  { topic: 'description', ids: ['meta-description'] },
  { topic: 'canonical', ids: ['canonical'] },
  { topic: 'legal', ids: ['imprint-link', 'privacy-link'] },
  { topic: 'trust', ids: ['structured-data', 'trust-signals'] },
  { topic: 'http', ids: ['http-reachability'] },
])

const ACTIONABLE = new Set(['priority', 'review', 'not_detected'])

export function selectRecommendations(checks, { preferredLimit = 3, maxLimit = 5 } = {}) {
  const byId = new Map(checks.map((check) => [check.id, check]))
  const recommendations = []
  const usedTopics = new Set()
  const limit = Math.max(0, Math.min(maxLimit, preferredLimit))

  for (const definition of PRIORITY_ORDER) {
    if (recommendations.length >= limit || usedTopics.has(definition.topic)) continue
    const relevant = definition.ids.map((id) => byId.get(id)).filter(Boolean)
    const selected = relevant.find((check) => ACTIONABLE.has(check.status) && check.recommendation)
    if (!selected) continue

    usedTopics.add(definition.topic)
    recommendations.push(Object.freeze({
      id: `recommendation-${definition.topic}`,
      category: selected.category,
      priority: selected.status === 'priority' ? 'high' : 'medium',
      text: selected.recommendation,
      checkIds: Object.freeze(relevant.filter((check) => ACTIONABLE.has(check.status)).map((check) => check.id)),
    }))
  }

  return Object.freeze(recommendations)
}
