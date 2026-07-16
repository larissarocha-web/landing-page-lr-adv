import { FaWhatsapp } from 'react-icons/fa'

import logo from '../../assets/logo3.png'
import { Bottom, Brand, Columns, Container, Wrapper } from './styles'

export function Footer() {
  return (
    <Container id="footer">
      <Wrapper>
        <Brand>
          <img src={logo} alt="Larissa Rocha Advocacia" />
          <p>
            Advocacia em Direito de Família com orientação clara e atendimento
            online.
          </p>
          <span>OAB 65.877</span>
        </Brand>

        <Columns>
          <div>
            <h2>Navegação</h2>
            <a href="#inicio">Início</a>
            <a href="#atuacao">Áreas de atuação</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#sobre">Sobre Larissa</a>
          </div>

          <div>
            <h2>Informações</h2>
            <a href="#duvidas">Dúvidas frequentes</a>
            <a href="#contato">Contato</a>
            <p>Atendimento online</p>
            <p>Todo o Brasil</p>
          </div>

          <div className="contact-column">
            <h2>Contato</h2>
            <a
              href="https://wa.me/5561991742090"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              (61) 99174-2090
            </a>
            <p>Retorno em horário comercial</p>
          </div>
        </Columns>
      </Wrapper>

      <Bottom>
        <span>© {new Date().getFullYear()} Larissa Rocha Advocacia</span>
        <span>Todos os direitos reservados</span>
      </Bottom>
    </Container>
  )
}
