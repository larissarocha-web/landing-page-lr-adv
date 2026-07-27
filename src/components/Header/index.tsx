import { useCallback, useEffect, useRef, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IoClose, IoMenu } from 'react-icons/io5'

import logo from '../../assets/logo3.png'
import { getWhatsAppUrl } from '../../constants/brand'
import { trackMarketingEvent } from '../../lib/marketing'
import { Div1, HeaderContainer, MenuMobileOpen, NavBar, Ul } from './styles'

const navItems = [
  ['#inicio', 'Início e atuação'],
  ['#sobre', 'Sobre mim'],
  ['#duvidas', 'Dúvidas'],
  ['#contato', 'Contato'],
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const whatsappUrl = getWhatsAppUrl()

  const closeMenuAndRestoreFocus = useCallback(() => {
    setIsOpen(false)
    window.requestAnimationFrame(() => menuButtonRef.current?.focus())
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) closeMenuAndRestoreFocus()
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [closeMenuAndRestoreFocus, isOpen])

  return (
    <>
      <HeaderContainer>
        <Div1>
          <a
            className="brand"
            href="#inicio"
            aria-label="Larissa Rocha - início"
          >
            <img src={logo} alt="Larissa Rocha Advogada" />
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
              onClick={() =>
                trackMarketingEvent('whatsapp_click', {
                  cta_location: 'header_desktop',
                })
              }
            >
              <FaWhatsapp />
              Conversar pelo WhatsApp
            </a>

            <button
              ref={menuButtonRef}
              className="menu-trigger"
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <IoMenu size={28} />
            </button>
          </NavBar>
        </Div1>
      </HeaderContainer>

      {isOpen && (
        <MenuMobileOpen
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
        >
          <div className="menu-header">
            <span aria-hidden="true" />
            <img src={logo} alt="Larissa Rocha Advogada" />
            <button
              autoFocus
              type="button"
              onClick={closeMenuAndRestoreFocus}
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
            onClick={() => {
              trackMarketingEvent('whatsapp_click', {
                cta_location: 'header_mobile',
              })
              setIsOpen(false)
            }}
          >
            <FaWhatsapp />
            Conversar pelo WhatsApp
          </a>
        </MenuMobileOpen>
      )}
    </>
  )
}
