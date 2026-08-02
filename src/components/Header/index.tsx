import { useCallback, useEffect, useRef, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IoClose, IoMenu } from 'react-icons/io5'

import logo from '../../assets/logo3.png'
import { getWhatsAppUrl } from '../../constants/brand'
import { trackMarketingEvent } from '../../lib/marketing'
import { Div1, HeaderContainer, MenuMobileOpen, NavBar, Ul } from './styles'

export type HeaderNavItem = {
  href: string
  label: string
}

const defaultNavItems: HeaderNavItem[] = [
  { href: '#inicio', label: 'Início e atuação' },
  { href: '#sobre', label: 'Sobre mim' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' },
]

type HeaderProps = {
  brandHref?: string
  brandLabel?: string
  navItems?: HeaderNavItem[]
  trackingPrefix?: string
  whatsappMessage?: string
}

export function Header({
  brandHref = '#inicio',
  brandLabel = 'Larissa Rocha - início',
  navItems = defaultNavItems,
  trackingPrefix,
  whatsappMessage,
}: HeaderProps = {}) {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const whatsappUrl = getWhatsAppUrl(whatsappMessage)
  const desktopCtaLocation = trackingPrefix
    ? `${trackingPrefix}_header_desktop`
    : 'header_desktop'
  const mobileCtaLocation = trackingPrefix
    ? `${trackingPrefix}_header_mobile`
    : 'header_mobile'

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
          <a className="brand" href={brandHref} aria-label={brandLabel}>
            <img src={logo} alt="Larissa Rocha Advogada" />
          </a>

          <NavBar>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
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
                  cta_location: desktopCtaLocation,
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
            <a
              className="menu-brand"
              href={brandHref}
              aria-label={brandLabel}
              onClick={() => setIsOpen(false)}
            >
              <img src={logo} alt="Larissa Rocha Advogada" />
            </a>
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
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
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
                cta_location: mobileCtaLocation,
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
