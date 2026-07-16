import { FiFileText, FiHeart, FiUsers } from 'react-icons/fi'

import { Cards, Container, Wrapper } from './styles'

export function Servicos() {
  return (
    <Container id="atuacao">
      <Wrapper>
        <span className="eyebrow">Áreas de atuação</span>
        <h2>Orientação segura para decisões importantes</h2>
        <p className="intro">
          Atuação em Direito de Família com orientação clara, atendimento ágil
          e acompanhamento completo do seu caso.
        </p>

        <Cards>
          <article>
            <span className="number">01</span>
            <FiFileText aria-hidden="true" />
            <h3>Divórcio</h3>
            <p>
              Orientação e condução completa do processo, com segurança jurídica
              e clareza em cada etapa.
            </p>
          </article>

          <article>
            <span className="number">02</span>
            <FiUsers aria-hidden="true" />
            <h3>Guarda e pensão</h3>
            <p>
              Atuação focada na proteção dos interesses familiares, com
              equilíbrio e responsabilidade.
            </p>
          </article>

          <article>
            <span className="number">03</span>
            <FiHeart aria-hidden="true" />
            <h3>Inventário e sucessões</h3>
            <p>
              Organização patrimonial com orientação segura, evitando conflitos
              e garantindo tranquilidade.
            </p>
          </article>
        </Cards>
      </Wrapper>
    </Container>
  )
}
