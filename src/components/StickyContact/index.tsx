import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import { Container } from './styles'

const whatsappUrl =
  'https://wa.me/5561991742090?text=Olá,%20preciso%20de%20orientação%20em%20Direito%20de%20Família.'

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
      <a href={whatsappUrl} target="_blank" rel="noreferrer">
        <FaWhatsapp />
        Conversar pelo WhatsApp
      </a>
    </Container>
  )
}
