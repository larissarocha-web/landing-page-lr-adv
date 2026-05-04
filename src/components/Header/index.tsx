// Importa os componentes estilizados (CSS em JS)
import { Div1, HeaderContainer, MenuMobileOpen, NavBar, Ul } from './styles'

// Importa as imagens de logo (header principal e menu mobile)
import logo from '../../assets/logo3.png'
import logomenu from '../../assets/logomenu.png'

// Importa os ícones (menu hamburguer e botão de fechar)
import { IoMenu, IoClose } from 'react-icons/io5'

// Hook do React para controlar estado (abrir/fechar menu)
import { useState } from 'react'

// Componente principal do Header
export function Header() {
  // Estado que controla se o menu mobile está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false)

  // Função que alterna entre abrir/fechar o menu
  const openMenuMobile = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* HEADER FIXO NO TOPO */}
      <HeaderContainer>
        {/* DIV INTERNA PARA ORGANIZAÇÃO (logo + menu) */}
        <Div1>
          {/* LOGO PRINCIPAL (lado esquerdo) */}
          <img src={logo} alt="Larissa Rocha Advogada" />

          {/* NAVEGAÇÃO */}
          <NavBar>
            {/* MENU DESKTOP */}
            <ul>
              <li>
                <a href="#">INÍCIO</a>
              </li>
              {/* <li>
                <a href="#consulta">ATUAÇÃO</a>
              </li> */}
              <li>
                <a href="#sobre">SOBRE</a>
              </li>
              <li>
                <a href="#perguntas">DÚVIDAS</a>
              </li>
              <li>
                <a href="#footer">CONTATO</a>
              </li>
            </ul>

            {/* BOTÃO MENU MOBILE (hamburguer) */}
            <button onClick={openMenuMobile}>
              <IoMenu size={35} />
            </button>
          </NavBar>
        </Div1>
      </HeaderContainer>

      {/* MENU MOBILE (só aparece quando isOpen = true) */}
      {isOpen && (
        <MenuMobileOpen>
          {/* BOTÃO FECHAR (X no canto superior direito) */}
          <button onClick={openMenuMobile}>
            <IoClose size={35} />
          </button>

          {/* LOGO NO TOPO ESQUERDO DO MENU MOBILE */}
          <div className="menu-header">
            <img src={logomenu} alt="Larissa Rocha Advogada" />
          </div>

          {/* LISTA DE LINKS DO MENU MOBILE */}
          <Ul>
            <li>
              <a href="#" onClick={openMenuMobile}>
                Início
              </a>
            </li>
            {/* <li>
              <a href="#consulta" onClick={openMenuMobile}>
                Atuação
              </a>
            </li> */}
            <li>
              <a href="#sobre" onClick={openMenuMobile}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#perguntas" onClick={openMenuMobile}>
                Perguntas Frequentes
              </a>
            </li>
            <li>
              <a href="#footer" onClick={openMenuMobile}>
                Contato
              </a>
            </li>

            {/* ITEM VAZIO (pode remover depois se quiser) */}
            <li></li>
          </Ul>
        </MenuMobileOpen>
      )}
    </>
  )
}
