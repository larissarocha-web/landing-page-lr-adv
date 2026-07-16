import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IoClose, IoMenu } from 'react-icons/io5'

import logo from '../../assets/logo3.png'
import { Div1, HeaderContainer, MenuMobileOpen, NavBar, Ul } from './styles'

const whatsappUrl =
  'https://wa.me/5561991742090?text=Olá,%20preciso%20de%20orientação%20em%20Direito%20de%20Família.'

const navItems = [
  ['#inicio', 'Início'],
  ['#atuacao', 'Áreas de atuação'],
  ['#como-funciona', 'Como funciona'],
  ['#sobre', 'Sobre Larissa'],
  ['#duvidas', 'Dúvidas'],
  ['#contato', 'Contato'],
]

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

  return (
    <>
      <HeaderContainer>
        <Div1>
          <a
            className="brand"
            href="#inicio"
            aria-label="Larissa Rocha - início"
          >
            <img src={logo} alt="Larissa Rocha Advocacia" />
          </a>

          <NavBar>
            <ul>
              {navItems.map(([href, label]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>

            <a
              className="header-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              Conversar pelo WhatsApp
            </a>

            <button
              className="menu-trigger"
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={isOpen}
            >
              <IoMenu size={28} />
            </button>
          </NavBar>
        </Div1>
      </HeaderContainer>

      {isOpen && (
        <MenuMobileOpen
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
        >
          <div className="menu-header">
            <span aria-hidden="true" />
            <img src={logo} alt="Larissa Rocha Advocacia" />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar menu"
            >
              <IoClose size={30} />
            </button>
          </div>

          <Ul>
            {navItems.map(([href, label]) => (
              <li key={href}>
                <a href={href} onClick={() => setIsOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </Ul>

          <a
            className="mobile-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
            Conversar pelo WhatsApp
          </a>
        </MenuMobileOpen>
      )}
    </>
  )
}
