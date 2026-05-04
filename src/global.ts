// Importa função para criar estilos globais (afeta o site todo)
import { createGlobalStyle } from 'styled-components'

// Cria o estilo global da aplicação
export const GlobalStyle = createGlobalStyle`

  /* ================= BODY ================= */
  body {
    font-family: 'Inter', sans-serif; 
    /* fonte principal (textos, botões, etc) */

    font-size: 16px; 
    /* base de todo o sistema tipográfico */

    line-height: 1.6; 
    /* espaçamento entre linhas (legibilidade) */

    color: #5A5552; 
    /* cor padrão do texto */
  }

  /* ================= TÍTULOS ================= */
  h1, h2, h3 {
    font-family: 'Playfair Display', serif; 
    /* fonte elegante para títulos */

    color: #2B2B2B; 
    /* cor dos títulos */

    margin: 0; 
    /* remove espaçamento padrão do navegador */
  }

  /* ================= H1 ================= */
  h1 {
    font-size: 9rem; 
    /* ⚠️ MUITO GRANDE (isso dá ~144px, não 48px) */

    line-height: 1.2;

    letter-spacing: -0.5px; 
    /* leve compressão das letras */
  }

  /* ================= H2 ================= */
  h2 {
    font-size: 2.2rem; /* ~35px */
    line-height: 1.3;
  }

  /* ================= H3 ================= */
  h3 {
    font-size: 1.5rem; /* 24px */
    line-height: 1.4;
  }

  /* ================= PARÁGRAFOS ================= */
  p {
    font-size: 1rem; /* 16px */
    line-height: 1.6;
  }

  /* ================= TEXTO PEQUENO ================= */
  small {
    font-size: 0.85rem;
  }

  /* ================= RESPONSIVO ================= */
  @media (max-width: 768px) {

    h1 {
      font-size: 2rem; 
      /* reduz drasticamente no mobile */
    }

    h2 {
      font-size: 1.6rem;
    }

    h3 {
      font-size: 1.2rem;
    }
  }

section {
  scroll-margin-top: 60px;
}
  `
