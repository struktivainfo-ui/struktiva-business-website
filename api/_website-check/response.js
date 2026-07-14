import { API_VERSION } from './config.js'

export function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.end(JSON.stringify(payload))
}

export function sendError(res, error, requestId, data) {
  const payload = {
    ok: false,
    error: {
      code: error.code,
      message: error.message,
    },
    meta: {
      apiVersion: API_VERSION,
      requestId,
    },
  }

  if (data) payload.data = data
  sendJson(res, error.statusCode, payload)
}
