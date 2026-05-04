import styled from 'styled-components'

// Container do botão flutuante
export const Whats = styled.span`
  position: fixed;
  /* fixa na tela, independente do scroll */

  bottom: 24px;
  right: 24px;
  /* posiciona no canto inferior direito */

  background-color: #2eb838;
  /* verde clássico do WhatsApp */

  color: white;

  border-radius: 100%;
  /* deixa o botão totalmente circular */

  padding: 1rem;
  /* tamanho do botão */

  cursor: pointer;
  /* indica que é clicável */

  transition: all 0.3s ease-in-out;
  /* animações suaves */

  a {
    text-decoration: none;
    /* remove sublinhado do link */

    color: white;
    /* mantém o ícone branco */
  }

  &:hover {
    padding: 1.2rem;
    /* efeito de crescimento ao passar o mouse */
  }
`
