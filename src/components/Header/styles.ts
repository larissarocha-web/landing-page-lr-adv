import styled from 'styled-components'

/* ================= HEADER FIXO ================= */
export const HeaderContainer = styled.header`
  margin: 0 auto; /* centraliza horizontalmente */
  padding: 1.2rem; /* espaço interno do header */

  position: fixed; /* fixa o header no topo da tela */
  left: 0;
  right: 0;
  top: 0px;

  color: ${(props) => props.theme['base-nav']}; /* cor padrão dos textos */

  background: ${(props) => props.theme['base-white']}; /* fundo branco */
  z-index: 1; /* controla sobreposição (baixo aqui) */
`

/* ================= CONTAINER INTERNO DO HEADER ================= */
export const Div1 = styled.div`
  max-width: 1100px; /* largura máxima */
  display: flex;
  justify-content: space-between; /* logo esquerda / menu direita */
  align-items: center; /* alinhamento vertical */
  margin: 0 auto; /* centraliza */

  img {
    height: 60px; /* tamanho da logo */
  }
`

/* ================= MENU DE NAVEGAÇÃO ================= */
export const NavBar = styled.nav`
  button {
    display: none; /* botão hamburguer escondido no desktop */
    border: none;
    background-color: transparent;

    @media (max-width: 690px) {
      display: block; /* aparece no mobile */
    }
  }

  ul {
    list-style-type: none; /* remove bolinhas */
    display: flex; /* menu horizontal */

    li {
      margin-left: 1.5rem; /* espaçamento entre itens */
      font-weight: bold;
      cursor: pointer;

      @media (max-width: 600px) {
        margin-left: 0.6rem; /* reduz espaço no mobile */
        font-size: 0.8rem; /* reduz tamanho do texto */
      }
    }

    a {
      text-decoration: none; /* remove sublinhado */
      color: #5a5552; /* cor padrão */
      transition: 0.2s all ease-in-out; /* animação suave */

      &:hover {
        color: ${(props) =>
          props.theme['MENU-TEXT-HOVER']}; /* cor ao passar mouse */
      }
    }
  }

  ul {
    @media (max-width: 690px) {
      display: none; /* esconde menu no mobile */
    }
  }

  @media (max-width: 1200px) {
    max-width: 900px; /* reduz largura em telas menores */
  }
`

/* ================= MENU MOBILE (TELA CHEIA) ================= */
export const MenuMobileOpen = styled.div`
  position: fixed; /* cobre a tela inteira */
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  height: 100%;
  width: 100%;

  background-color: ${(props) => props.theme['menu-color']}; /* fundo do menu */
  color: #5a1e24;

  z-index: 999; /* fica acima de tudo */

  display: flex;
  justify-content: center;
  align-items: center;

  /* animação de entrada */
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px); /* sobe levemente */
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  button {
    position: absolute;
    top: 20px;
    right: 20px;

    border: none;
    background-color: transparent;

    color: black;

    z-index: 1000; /* garante que fique acima da logo */
  }

  /* logo dentro do menu mobile */
  .menu-header {
    position: absolute;
    top: 0px;
    left: 0px;

    img {
      height: 60px; /* logo maior no menu */
    }
  }
`

/* ================= LISTA DO MENU MOBILE ================= */
export const Ul = styled.ul`
  list-style-type: none; /* remove estilo padrão */
  text-align: center; /* centraliza textos */

  li {
    position: relative;
    margin-bottom: 4rem; /* espaço entre itens */
    font-size: 2rem; /* tamanho do texto */

    /* linha separadora entre itens */
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      bottom: -22px;
      right: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #ffffff;
    }

    a {
      text-decoration: none;
      color: #f7f6f5; /* mantém texto branco */
      position: relative;

      text-decoration: none;
      color: white;
    }
  }
`
