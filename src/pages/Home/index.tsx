import { FaWhatsapp } from 'react-icons/fa'
import { FiHeart, FiHome, FiShield, FiUsers } from 'react-icons/fi'

import blogueira from '../../assets/larissa-hero-seria-joias.webp'
import {
  Actions,
  Benefit,
  Benefits,
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
          <span className="eyebrow">Advocacia especializada em</span>
          <h1>Direito de Família</h1>
          <span className="gold-line" aria-hidden="true" />

          <p>
            Atendimento online, humanizado e comprometido para solucionar
            questões familiares com segurança e tranquilidade.
          </p>

          <Actions>
            <WhatsButton href={whatsappUrl} target="_blank" rel="noreferrer">
              <FaWhatsapp />
              Falar no WhatsApp
            </WhatsButton>

            <SecondaryLink href="#sobre">
              Saiba mais
              <span aria-hidden="true">↓</span>
            </SecondaryLink>
          </Actions>
        </Copy>

        <Portrait aria-hidden="true">
          <img src={blogueira} alt="Larissa Rocha em seu ambiente de trabalho" />
        </Portrait>
      </Hero>

      <Benefits aria-label="Diferenciais do atendimento">
        <Benefit>
          <FiUsers aria-hidden="true" />
          <div>
            <h2>Atendimento humanizado</h2>
            <p>Cada caso é único. Você é acolhida e ouvida de verdade.</p>
          </div>
        </Benefit>

        <Benefit>
          <FiShield aria-hidden="true" />
          <div>
            <h2>Segurança jurídica</h2>
            <p>Orientação clara e estratégias responsáveis para cada etapa.</p>
          </div>
        </Benefit>

        <Benefit>
          <FiHome aria-hidden="true" />
          <div>
            <h2>Atendimento online</h2>
            <p>Praticidade e acompanhamento próximo, onde você estiver.</p>
          </div>
        </Benefit>

        <Benefit>
          <FiHeart aria-hidden="true" />
          <div>
            <h2>Empatia e acolhimento</h2>
            <p>Compreensão do momento que você e sua família estão vivendo.</p>
          </div>
        </Benefit>
      </Benefits>
    </Container>
  )
}
