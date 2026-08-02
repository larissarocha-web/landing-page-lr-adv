import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import { getWhatsAppUrl } from '../../constants/brand'
import { trackMarketingEvent } from '../../lib/marketing'
import { Container } from './styles'

type StickyContactProps = {
  ctaLocation?: string
  heroSelector?: string
  label?: string
  whatsappMessage?: string
}

export function StickyContact({
  ctaLocation = 'sticky_contact',
  heroSelector = '#inicio',
  label = 'Conversar pelo WhatsApp',
  whatsappMessage,
}: StickyContactProps = {}) {
  const [visible, setVisible] = useState(false)
  const whatsappUrl = getWhatsAppUrl(whatsappMessage)

  useEffect(() => {
    const hero = document.querySelector(heroSelector)
    if (!hero) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: '-66px 0px 0px 0px', threshold: 0 },
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [heroSelector])

  return (
    <Container data-visible={visible}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        onClick={() =>
          trackMarketingEvent('whatsapp_click', {
            cta_location: ctaLocation,
          })
        }
      >
        <FaWhatsapp />
        {label}
      </a>
    </Container>
  )
}
