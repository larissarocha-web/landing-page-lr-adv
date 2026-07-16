import { FaWhatsapp } from 'react-icons/fa'

import logo from '../../assets/logofooter.png'
import { Container, Div1, Div2, Div3, Div4, Wrapper } from './styles'

export function Footer() {
  return (
    <Container id="footer">
      <Wrapper>
        <Div3>
          <img src={logo} alt="Larissa Rocha Advocacia" />
          <p>
            Advocacia em Direito de Família com atendimento online, orientação
            clara, objetiva e segura.
          </p>
        </Div3>

        <Div1>
          <div>
            <h2>Navegação</h2>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre mim</a>
            <a href="#atuacao">Áreas de atuação</a>
            <a href="#duvidas">Dúvidas frequentes</a>
          </div>

          <div>
            <h2>Atuação</h2>
            <p>Divórcio</p>
            <p>Guarda e pensão</p>
            <p>Inventário e sucessões</p>
          </div>

          <div>
            <h2>Atendimento</h2>
            <p>Consultas 100% online</p>
            <p>Horário comercial</p>
            <p>Resposta via WhatsApp</p>
          </div>
        </Div1>

        <Div2>
          <p>Precisa de orientação para o seu caso?</p>
          <a
            href="https://wa.me/5561991742090?text=Olá,%20preciso%20de%20orientação%20em%20Direito%20de%20Família."
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
            Falar no WhatsApp
          </a>
        </Div2>
      </Wrapper>

      <Div4>
        <span>© {new Date().getFullYear()} Larissa Rocha Advogada</span>
        <span>Todos os direitos reservados</span>
      </Div4>
    </Container>
  )
}
