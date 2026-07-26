import { FaWhatsapp } from 'react-icons/fa'

import logo from '../../assets/logo3.png'
import {
  OAB_LABEL,
  WHATSAPP_PHONE,
  getWhatsAppUrl,
} from '../../constants/brand'
import {
  openCookieSettings,
  openLegalNotice,
  trackMarketingEvent,
} from '../../lib/marketing'
import {
  Bottom,
  Brand,
  Columns,
  Container,
  LegalLinks,
  Wrapper,
} from './styles'

export function Footer() {
  const whatsappUrl = getWhatsAppUrl()

  return (
    <Container id="footer">
      <Wrapper>
        <Brand>
          <img src={logo} alt="Larissa Rocha Advogada" />
          <p>
            Advocacia em Direito de Família com orientação clara e atendimento
            online.
          </p>
          <span>{OAB_LABEL}</span>
        </Brand>

        <Columns>
          <div>
            <h2>Navegação</h2>
            <a href="#inicio">Início e atuação</a>
            <a href="#sobre">Sobre mim</a>
            <a href="#duvidas">Dúvidas</a>
            <a href="#contato">Contato</a>
          </div>

          <div>
            <h2>Informações</h2>
            <a href="#atuacao">Áreas de atuação</a>
            <a href="#como-funciona">Como funciona</a>
            <p>Atendimento online</p>
            <p>Todo o Brasil</p>
          </div>

          <div className="contact-column">
            <h2>Contato</h2>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackMarketingEvent('whatsapp_click', {
                  cta_location: 'footer_contact',
                })
              }
            >
              <FaWhatsapp />
              {WHATSAPP_PHONE}
            </a>
            <p>Retorno em horário comercial</p>
          </div>
        </Columns>
      </Wrapper>

      <Bottom>
        <span>© {new Date().getFullYear()} Larissa Rocha Advogada</span>
        <LegalLinks>
          <button type="button" onClick={() => openLegalNotice('privacy')}>
            Privacidade
          </button>
          <button type="button" onClick={openCookieSettings}>
            Cookies
          </button>
        </LegalLinks>
        <span>
          Desenvolvido por Gustavo Brito —{' '}
          <a href="mailto:gvnb.eng@gmail.com">gvnb.eng@gmail.com</a>
        </span>
      </Bottom>
    </Container>
  )
}
