import styled from 'styled-components'

/* ================= CONTAINER PRINCIPAL ================= */
export const Container = styled.footer`
  background: ${(props) =>
    props.theme['footer-color']}; /* cor de fundo do footer */
  /* cor de fundo do footer inteiro */
`

/* ================= WRAPPER (ORGANIZAÇÃO GERAL) ================= */
export const Wrapper = styled.div`
  margin: 0 auto; /* centraliza o conteúdo */
  display: flex;
  padding: 2rem 1.5rem; /* espaçamento interno */
  flex-direction: column; /* tudo em coluna */
  gap: 1.5rem; /* espaço entre blocos */
  align-items: center; /* centraliza horizontalmente */
  max-width: 1100px; /* largura máxima */

  /* AJUSTE PARA MOBILE */
  @media (max-width: 1600px) {
    padding: 1.5rem 1rem; /* menos espaço nas laterais */
    gap: 1rem; /* reduz espaçamento entre blocos */
  }
`

// 🔥 BLOCO PRINCIPAL (LOGO + DESCRIÇÃO)
export const Div3 = styled.div`
  display: flex;
  flex-direction: column; /* organiza verticalmente */
  align-items: center; /* centraliza */
  text-align: center; /* centraliza texto */
  max-width: 420px; /* limita largura do texto */
  gap: 1rem; /* espaço entre logo e texto */

  img {
    height: 140px; /* desktop */
    opacity: 0.85;
    transition: 0.3s;

    @media (max-width: 600px) {
      height: 60px; /* 👈 só reduz no mobile */
    }
  }

  img:hover {
    transform: scale(1.05);
    opacity: 1;
  }
  p {
    font-size: 0.9rem; /* tamanho do texto */
    line-height: 1.5; /* espaçamento entre linhas */
    color: ${(props) => props.theme['base-hover']}; /* cor suave */
  }
`

// 🔥 COLUNAS DE INFORMAÇÃO
export const Div1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* 3 colunas no desktop */

  gap: 2rem; /* espaço entre colunas */
  color: white; /* texto branco */

  /* TABLET / MOBILE */
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    /* vira coluna única */
  }

  /* MOBILE MAIS COMPACTO */
  @media (max-width: 600px) {
    gap: 1rem; /* reduz espaçamento */

    h5 {
      font-size: 0.85rem; /* títulos menores */
    }

    p {
      font-size: 0.75rem; /* textos menores */
    }
  }
`

// 🔥 BOTÃO DE AÇÃO (CTA - WHATSAPP)
export const Div2 = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem; /* espaço entre ícone e texto */

    padding: 0.7rem 1.2rem; /* tamanho do botão */
    border-radius: 6px; /* borda arredondada */

    background: ${(props) => props.theme['green-base']}; /* cor principal */
    color: white;
    text-decoration: none; /* remove sublinhado */

    font-size: 0.85rem;
    font-weight: 500;

    transition: 0.3s; /* animação */
  }

  a:hover {
    background: ${(props) =>
      props.theme['green-dark']}; /* cor ao passar mouse */
    transform: translateY(-2px); /* sobe levemente */
  }
`

// 🔥 COPYRIGHT (RODAPÉ FINAL)
export const Div4 = styled.div`
  margin: 0 auto;
  padding: 1rem; /* espaço interno */
  text-align: center;
  color: ${(props) => props.theme['base-label']}; /* cor mais discreta */
  background-color: ${(props) =>
    props.theme['footer-blue-dark']}; /* fundo mais escuro */
  font-size: 0.75rem; /* texto pequeno */
`
