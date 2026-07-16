import { FaWhatsapp } from 'react-icons/fa'

import { WHATSAPP_URL } from '../../constants/brand'
import { Container, Wrapper } from './styles'

export function Contato() {
  return (
    <Container id="contato">
      <Wrapper>
        <span className="eyebrow">Contato</span>
        <h2>Seu caso merece uma orientação individual.</h2>
        <p>Envie uma mensagem e explique brevemente a sua situação.</p>

        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
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
