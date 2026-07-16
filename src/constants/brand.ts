export const WHATSAPP_NUMBER = '5561991742090'

export const WHATSAPP_PHONE = '(61) 99174-2090'

export const OAB_LABEL = 'OAB/DF nº 65.877'

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_URL = buildWhatsAppUrl(
  'Olá, preciso de orientação em Direito de Família.',
)
