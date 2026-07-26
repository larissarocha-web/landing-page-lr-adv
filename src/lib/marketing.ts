export const COOKIE_CONSENT_KEY = 'larissa-cookie-consent'
export const OPEN_COOKIE_SETTINGS_EVENT = 'larissa:open-cookie-settings'
export const OPEN_LEGAL_NOTICE_EVENT = 'larissa:open-legal-notice'

type AttributionKey =
  | 'utm_source'
  | 'utm_medium'
  | 'utm_campaign'
  | 'utm_term'
  | 'utm_content'

type Attribution = Partial<Record<AttributionKey, string>>

type MarketingEvent = 'whatsapp_click' | 'triage_submit'

type MarketingEventDetails = {
  cta_location: string
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

const attributionKeys: AttributionKey[] = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
]

function isMarketingAllowed() {
  return (
    typeof window !== 'undefined' &&
    window.localStorage.getItem(COOKIE_CONSENT_KEY) === 'accepted'
  )
}

function sanitize(value: string) {
  return value.trim().slice(0, 120)
}

export function getAttribution(): Attribution {
  if (typeof window === 'undefined') return {}

  const params = new URLSearchParams(window.location.search)

  return attributionKeys.reduce<Attribution>((attribution, key) => {
    const value = params.get(key)

    if (value) attribution[key] = sanitize(value)

    return attribution
  }, {})
}

export function appendAttributionToWhatsAppMessage(message: string) {
  const attribution = getAttribution()
  const source = attribution.utm_source
  const campaign = attribution.utm_campaign

  if (!source && !campaign) return message

  const details = [
    source && `canal: ${source}`,
    campaign && `campanha: ${campaign}`,
  ]
    .filter(Boolean)
    .join(' • ')

  return `${message}\n\nOrigem do site: ${details}`
}

export function trackMarketingEvent(
  event: MarketingEvent,
  details: MarketingEventDetails,
) {
  if (!isMarketingAllowed()) return

  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({
    event,
    ...details,
    ...getAttribution(),
  })
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))
}

export function openLegalNotice(document: 'privacy' | 'cookies') {
  window.dispatchEvent(
    new CustomEvent(OPEN_LEGAL_NOTICE_EVENT, { detail: document }),
  )
}
