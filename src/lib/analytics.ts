import type { BeforeSendEvent } from '@vercel/analytics/react'

export function redactAnalyticsQuery(event: BeforeSendEvent): BeforeSendEvent {
  return {
    ...event,
    url: event.url.split(/[?#]/, 1)[0],
  }
}
