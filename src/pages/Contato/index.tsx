import { FaWhatsapp } from 'react-icons/fa'

import { Container, Wrapper } from './styles'

const whatsappUrl =
  'https://wa.me/5561991742090?text=Olá,%20preciso%20de%20orientação%20em%20Direito%20de%20Família.'

export function Contato() {
  return (
    <Container id="contato">
      <Wrapper>
        <span className="eyebrow">Contato</span>
        <h2>Seu caso merece uma orientação individual.</h2>
        <p>Envie uma mensagem e explique brevemente a sua situação.</p>

        <a href={whatsappUrl} target="_blank" rel="noreferrer">
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
