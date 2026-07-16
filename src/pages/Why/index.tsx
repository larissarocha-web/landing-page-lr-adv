import { FiBookOpen, FiGlobe, FiUser } from 'react-icons/fi'

import photo from '../../assets/larissa-sobre-sorrindo.webp'
import { Container, Content, Credentials, Wrapper } from './styles'

export function Why() {
  return (
    <Container id="sobre">
      <Wrapper>
        <div className="photo">
          <img src={photo} alt="Larissa Rocha em seu ambiente de trabalho" />
        </div>

        <Content>
          <span className="eyebrow">Sobre Larissa Rocha</span>
          <h2>Técnica, clareza e acolhimento em momentos delicados.</h2>
          <span className="gold-line" aria-hidden="true" />

          <p>
            Atuação em Direito de Família com orientação objetiva, comunicação
            próxima e atenção às particularidades de cada caso.
          </p>

          <Credentials aria-label="Informações profissionais">
            <li>
              <FiUser aria-hidden="true" />
              <span>Advogada • OAB 65.877</span>
            </li>
            <li>
              <FiGlobe aria-hidden="true" />
              <span>Atendimento online em todo o Brasil</span>
            </li>
            <li>
              <FiBookOpen aria-hidden="true" />
              <span>Formação e especialização a confirmar</span>
            </li>
          </Credentials>
        </Content>
      </Wrapper>
    </Container>
  )
}
