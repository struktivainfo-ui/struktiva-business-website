export const API_VERSION = '1'
export const MAX_REQUEST_BODY_BYTES = 4096
export const MAX_URL_LENGTH = 2048
export const MAX_REDIRECTS = 3

export function isWebsiteCheckEnabled(env = process.env) {
  return env.WEBSITE_CHECK_ENABLED === 'true'
}
