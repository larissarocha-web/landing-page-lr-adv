import { FaWhatsapp } from 'react-icons/fa'

import heroPhoto from '../../assets/larissa-hero-colar-preservada.webp'
import {
  Actions,
  Container,
  Copy,
  Hero,
  Portrait,
  SecondaryLink,
  WhatsButton,
} from './styles'

const whatsappUrl =
  'https://wa.me/5561991742090?text=Olá,%20preciso%20de%20orientação%20em%20Direito%20de%20Família.'

export function Home() {
  return (
    <Container id="inicio">
      <Hero>
        <Copy>
          <span className="eyebrow">Advocacia em Direito de Família</span>
          <h1>Clareza jurídica para decisões que mudam a sua família.</h1>
          <span className="gold-line" aria-hidden="true" />

          <p>
            Orientação segura e acompanhamento próximo em divórcio, guarda,
            pensão, união estável e inventário.
          </p>

          <Actions>
            <WhatsButton href={whatsappUrl} target="_blank" rel="noreferrer">
              <FaWhatsapp />
              Conversar pelo WhatsApp
            </WhatsButton>

            <SecondaryLink href="#atuacao">
              Conhecer a atuação
              <span aria-hidden="true">→</span>
            </SecondaryLink>
          </Actions>

          <div className="microcopy" aria-label="Informações do atendimento">
            <span>Atendimento online</span>
            <span>Sigilo</span>
            <span>Retorno em horário comercial</span>
          </div>
        </Copy>

        <Portrait>
          <img
            src={heroPhoto}
            alt="Larissa Rocha em seu ambiente de trabalho"
          />
        </Portrait>

        <div
          className="mobile-microcopy"
          aria-label="Informações do atendimento"
        >
          <span>Atendimento online</span>
          <span>Sigilo</span>
          <span>Retorno em horário comercial</span>
        </div>
      </Hero>
    </Container>
  )
}
