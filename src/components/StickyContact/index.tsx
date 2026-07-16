import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import { WHATSAPP_URL } from '../../constants/brand'
import { Container } from './styles'

export function StickyContact() {
  const [visible, setVisible] = useState(false)

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
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        <FaWhatsapp />
        Conversar pelo WhatsApp
      </a>
    </Container>
  )
}
