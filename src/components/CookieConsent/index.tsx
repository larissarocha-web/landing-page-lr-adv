import { useEffect, useState } from 'react'

import {
  COOKIE_CONSENT_KEY,
  OPEN_COOKIE_SETTINGS_EVENT,
  openLegalNotice,
} from '../../lib/marketing'
import { Banner, ButtonGroup } from './styles'

type Consent = 'accepted' | 'rejected' | null

function getSavedConsent(): Consent {
  if (typeof window === 'undefined') return null

  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY)
  return value === 'accepted' || value === 'rejected' ? value : null
}

function MarketingScripts({ consent }: { consent: Consent }) {
  useEffect(() => {
    const gtmId = import.meta.env.VITE_GTM_ID?.trim()

    if (consent !== 'accepted' || !gtmId) {
      document.getElementById('gtm-script')?.remove()
      return undefined
    }

    if (document.getElementById('gtm-script')) return undefined

    window.dataLayer = window.dataLayer ?? []
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    })

    const script = document.createElement('script')
    script.id = 'gtm-script'
    script.async = true
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
    document.head.appendChild(script)

    return undefined
  }, [consent])

  return null
}

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(getSavedConsent)
  const [isOpen, setIsOpen] = useState(() => getSavedConsent() === null)

  useEffect(() => {
    const openSettings = () => setIsOpen(true)
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings)

    return () =>
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings)
  }, [])

  function saveConsent(value: Exclude<Consent, null>) {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value)
    setConsent(value)
    setIsOpen(false)
  }

  return (
    <>
      <MarketingScripts consent={consent} />

      {isOpen && (
        <Banner
          role="dialog"
          aria-modal="false"
          aria-label="Preferências de cookies"
        >
          <div>
            <strong>Privacidade e cookies</strong>
            <p>
              Usamos cookies opcionais apenas para medir a navegação e melhorar
              campanhas. Dados enviados no WhatsApp não são compartilhados com
              ferramentas de publicidade.
            </p>
            <button type="button" onClick={() => openLegalNotice('cookies')}>
              Ler política de cookies
            </button>
          </div>

          <ButtonGroup>
            <button
              type="button"
              className="secondary"
              onClick={() => saveConsent('rejected')}
            >
              Recusar opcionais
            </button>
            <button type="button" onClick={() => saveConsent('accepted')}>
              Aceitar cookies
            </button>
          </ButtonGroup>
        </Banner>
      )}
    </>
  )
}
