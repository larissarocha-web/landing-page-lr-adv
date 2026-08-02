import { appendAttributionToWhatsAppMessage } from '../lib/marketing'

export const WHATSAPP_NUMBER = '5561991742090'

export const WHATSAPP_PHONE = '(61) 99174-2090'

export const OAB_LABEL = 'OAB/DF nº 65.877'

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá, preciso de orientação em Direito de Família.'

export const PENSION_WHATSAPP_MESSAGE =
  'Olá, gostaria de informações sobre atendimento em pensão alimentícia.'

export function getWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  return buildWhatsAppUrl(appendAttributionToWhatsAppMessage(message))
}
