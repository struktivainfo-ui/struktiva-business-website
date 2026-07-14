import { randomUUID } from 'node:crypto'
import { isWebsiteCheckEnabled } from './_website-check/config.js'
import { evaluateDestination } from './_website-check/destination-policy.js'
import { createWebsiteCheckError, toPublicError } from './_website-check/errors.js'
import { createPublicWebsiteCheckResult } from './_website-check/public-result.js'
import { assertJsonContentType, parseJsonBody, validateWebsiteCheckRequest } from './_website-check/request.js'
import { sendError, sendJson } from './_website-check/response.js'
import { runWebsiteCheck } from './_website-check/run-website-check.js'

export function createWebsiteCheckHandler({
  env = process.env,
  createRequestId = randomUUID,
  runWebsiteCheck: executeWebsiteCheck = runWebsiteCheck,
  createPublicResult = createPublicWebsiteCheckResult,
  now = () => new Date(),
} = {}) {
  return async function websiteCheckHandler(req, res) {
    const requestId = createRequestId()

    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST')
      return sendError(res, createWebsiteCheckError('METHOD_NOT_ALLOWED'), requestId)
    }

    if (!isWebsiteCheckEnabled(env)) {
      return sendError(res, createWebsiteCheckError('SERVICE_NOT_READY'), requestId)
    }

    try {
      assertJsonContentType(req)
      const body = await parseJsonBody(req)
      const input = validateWebsiteCheckRequest(body)
      const destination = evaluateDestination(input.url)
      const result = await executeWebsiteCheck({
        normalizedUrl: destination.normalizedUrl,
        requestId,
        dependencies: Object.freeze({ now }),
      })
      const payload = createPublicResult(result, { requestId })

      return sendJson(res, 200, payload)
    } catch (error) {
      return sendError(res, toPublicError(error), requestId)
    }
  }
}

export default createWebsiteCheckHandler()
