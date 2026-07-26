import { FaWhatsapp } from 'react-icons/fa'

import { getWhatsAppUrl } from '../../constants/brand'
import { trackMarketingEvent } from '../../lib/marketing'
import { Container, Wrapper } from './styles'

export function Contato() {
  const whatsappUrl = getWhatsAppUrl()

  return (
    <Container id="contato">
      <Wrapper>
        <span className="eyebrow">Contato</span>
        <h2>Seu caso merece uma orientação individual.</h2>
        <p>Envie uma mensagem e explique brevemente a sua situação.</p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            trackMarketingEvent('whatsapp_click', {
              cta_location: 'contact_section',
            })
          }
        >
          <FaWhatsapp />
          Conversar pelo WhatsApp
        </a>

        <div className="microcopy">
          <span>Contato confidencial</span>
          <span>Atendimento em horário comercial</span>
        </div>
      </Wrapper>
    </Container>
  )
}
