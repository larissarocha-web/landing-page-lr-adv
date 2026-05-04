import styled from 'styled-components'

/* Container geral */
export const AccordionContainer = styled.div``

/* Cada item (pergunta + resposta) */
export const AccordionItem = styled.div`
  width: 600px; /* largura fixa */

  margin-bottom: 1rem;

  @media (max-width: 660px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 250px;
  }
`

/* Título clicável */
export const AccordionTitle = styled.div`
  cursor: pointer;

  border: 1px solid ${(props) => props.theme['base-nav']};

  border-radius: 0.5rem;

  padding: 1rem;

  color: ${(props) => props.theme['purple-base']};

  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 1rem;
`

/* Conteúdo que abre/fecha */
export const AccordionContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  /* controla visibilidade */

  padding: 1rem 3rem;

  color: ${(props) => props.theme['base-subtitle']};

  font-size: 0.9rem;

  line-height: 1.5;

  @media (max-width: 500px) {
    padding: 1rem;
  }
`
