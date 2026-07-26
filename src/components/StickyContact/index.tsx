import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import { getWhatsAppUrl } from '../../constants/brand'
import { trackMarketingEvent } from '../../lib/marketing'
import { Container } from './styles'

export function StickyContact() {
  const [visible, setVisible] = useState(false)
  const whatsappUrl = getWhatsAppUrl()

  useEffect(() => {
    const hero = document.querySelector('#inicio')
    if (!hero) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <Container data-visible={visible}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        onClick={() =>
          trackMarketingEvent('whatsapp_click', {
            cta_location: 'sticky_contact',
          })
        }
      >
        <FaWhatsapp />
        Conversar pelo WhatsApp
      </a>
    </Container>
  )
}
