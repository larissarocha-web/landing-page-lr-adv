import {
  FiArrowRight,
  FiCheckCircle,
  FiMessageCircle,
  FiMonitor,
} from 'react-icons/fi'

import foto from '../../assets/larissa-sobre-sorrindo.webp'
import { Cards, Container, Content, Wrapper } from './styles'

export function Why() {
  return (
    <Container id="sobre">
      <Wrapper>
        <div className="photo">
          <img src={foto} alt="Larissa Rocha em atendimento" />
        </div>

        <Content>
          <span className="eyebrow">Sobre mim</span>
          <h2>Compromisso com você e sua família</h2>
          <span className="gold-line" aria-hidden="true" />

          <p>
            Sou Larissa Rocha, advogada com atuação em Direito de Família.
            Ofereço orientação jurídica objetiva e acompanhamento próximo em
            cada etapa do seu caso.
          </p>

          <p>
            Meu foco é garantir que você compreenda suas possibilidades e tenha
            segurança para tomar decisões importantes em momentos delicados.
          </p>

          <a className="text-link" href="#atuacao">
            Conhecer minha atuação
            <FiArrowRight />
          </a>
        </Content>
      </Wrapper>

      <Cards id="diferenciais">
        <article>
          <FiMessageCircle aria-hidden="true" />
          <div>
            <h3>Comunicação direta</h3>
            <p>Você sempre sabe o que está acontecendo no seu processo.</p>
          </div>
        </article>

        <article>
          <FiMonitor aria-hidden="true" />
          <div>
            <h3>Atendimento online</h3>
            <p>Resolva tudo com praticidade, segurança e sem deslocamentos.</p>
          </div>
        </article>

        <article>
          <FiCheckCircle aria-hidden="true" />
          <div>
            <h3>Profissionalismo</h3>
            <p>Condução técnica, responsável e comprometida com o seu caso.</p>
          </div>
        </article>
      </Cards>
    </Container>
  )
}
