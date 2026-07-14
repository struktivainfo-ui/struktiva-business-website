import { randomUUID } from 'node:crypto'
import { isWebsiteCheckEnabled } from './_website-check/config.js'
import { evaluateDestination } from './_website-check/destination-policy.js'
import { createWebsiteCheckError, toPublicError } from './_website-check/errors.js'
import { assertJsonContentType, parseJsonBody, validateWebsiteCheckRequest } from './_website-check/request.js'
import { sendError } from './_website-check/response.js'

export function createWebsiteCheckHandler({ env = process.env, createRequestId = randomUUID } = {}) {
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

      return sendError(res, createWebsiteCheckError('CHECK_NOT_IMPLEMENTED'), requestId, {
        status: 'validated_only',
        normalizedUrl: destination.normalizedUrl,
        networkRequestPerformed: false,
      })
    } catch (error) {
      return sendError(res, toPublicError(error), requestId)
    }
  }
}

export default createWebsiteCheckHandler()
