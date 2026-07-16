import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IoClose, IoMenu } from 'react-icons/io5'

import logo from '../../assets/logo3.png'
import logomenu from '../../assets/logomenu.png'
import { Div1, HeaderContainer, MenuMobileOpen, NavBar, Ul } from './styles'

const whatsappUrl =
  'https://wa.me/5561991742090?text=Olá,%20preciso%20de%20orientação%20em%20Direito%20de%20Família.'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <HeaderContainer>
        <Div1>
          <a className="brand" href="#inicio" aria-label="Larissa Rocha - início">
            <img src={logo} alt="Larissa Rocha Advocacia" />
          </a>

          <NavBar>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre mim</a></li>
              <li><a href="#atuacao">Atuação</a></li>
              <li><a href="#diferenciais">Diferenciais</a></li>
              <li><a href="#perguntas">Dúvidas</a></li>
            </ul>

            <a
              className="header-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              Falar no WhatsApp
            </a>

            <button
              className="menu-trigger"
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={isOpen}
            >
              <IoMenu size={30} />
            </button>
          </NavBar>
        </Div1>
      </HeaderContainer>

      {isOpen && (
        <MenuMobileOpen role="dialog" aria-modal="true" aria-label="Menu principal">
          <div className="menu-header">
            <img src={logomenu} alt="Larissa Rocha Advogada" />
            <button type="button" onClick={closeMenu} aria-label="Fechar menu">
              <IoClose size={32} />
            </button>
          </div>

          <Ul>
            <li><a href="#inicio" onClick={closeMenu}>Início</a></li>
            <li><a href="#sobre" onClick={closeMenu}>Sobre mim</a></li>
            <li><a href="#atuacao" onClick={closeMenu}>Atuação</a></li>
            <li><a href="#diferenciais" onClick={closeMenu}>Diferenciais</a></li>
            <li><a href="#perguntas" onClick={closeMenu}>Dúvidas</a></li>
          </Ul>

          <a
            className="mobile-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
            Falar no WhatsApp
          </a>
        </MenuMobileOpen>
      )}
    </>
  )
}
