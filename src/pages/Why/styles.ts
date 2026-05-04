import styled from 'styled-components'
// importa o styled-components (permite escrever CSS dentro do JS)

/* ================= CONTAINER ================= */
export const Container = styled.section`
  padding: 6rem 1.5rem;
  // espaçamento interno da seção:
  // 👉 6rem em cima/baixo (bem espaçoso - visual premium)
  // 👉 1.5rem laterais (respiro nas bordas)

  background: #f7f4f3;
  // fundo levemente off-white (separa essa seção das outras)

  @media (max-width: 900px) {
    padding: 4rem 1.2rem;
    // no mobile:
    // 👉 reduz altura da seção (menos scroll)
    // 👉 reduz laterais (melhor aproveitamento de espaço)
  }
`

/* ================= LAYOUT ================= */
export const Wrapper = styled.div`
  max-width: 1100px;
  // limita largura total (melhora leitura em telas grandes)

  margin: 0 auto;
  // centraliza horizontalmente

  display: grid;
  // usa grid layout (mais controle que flex)

  grid-template-columns: 1fr 1.2fr;
  // divide em 2 colunas:
  // 👉 imagem menor (1fr)
  // 👉 texto maior (1.2fr)

  gap: 4rem;
  // espaço grande entre imagem e texto (visual "premium")

  align-items: center;
  // alinha verticalmente os elementos

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    // no mobile vira coluna única (empilhado)

    gap: 2rem;
    // reduz espaçamento (melhor para telas pequenas)

    text-align: center;
    // centraliza texto no mobile
  }

  img {
    width: 100%;
    // imagem ocupa toda largura disponível

    border-radius: 20px;
    // bordas arredondadas (visual moderno)

    object-fit: cover;
    // imagem preenche sem distorcer (corta se necessário)

    /* 🔥 efeito premium */
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.08);
    // sombra suave e profunda → sensação de "card flutuante"

    @media (max-width: 900px) {
      max-height: 380px;
      // limita altura da imagem no mobile

      object-fit: cover;
      // mantém corte bonito mesmo em altura limitada
    }
  }
`

/* ================= TEXTO ================= */
export const Content = styled.div`
  h2 {
    font-size: 2.4rem;
    // título grande (hierarquia visual forte)

    line-height: 1.2;
    // altura de linha ajustada (mais elegante)

    margin-bottom: 1.2rem;
    // espaço abaixo do título

    color: #2b2b2b;
    // cor escura para destaque

    @media (max-width: 900px) {
      font-size: 1.8rem;
      // reduz tamanho no mobile (evita quebra feia)
    }
  }

  p {
    margin-bottom: 1rem;
    // espaço entre parágrafos

    color: #5a5552;
    // cor mais suave (hierarquia: título > texto)

    line-height: 1.6;
    // melhora leitura (UX)

    font-size: 1rem;

    @media (max-width: 900px) {
      font-size: 0.95rem;
      // leve redução no mobile (encaixa melhor)
    }
  }
`

/* ================= CARDS ================= */
export const Cards = styled.div`
  margin-top: 2.5rem;
  // separa os cards do texto acima

  display: grid;
  // usa grid para organizar os cards

  grid-template-columns: repeat(3, 1fr);
  // 3 colunas iguais no desktop

  gap: 1.2rem;
  // espaço entre os cards

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    // no mobile vira lista vertical

    gap: 1rem;
    // reduz espaçamento
  }

  div {
    background: rgba(255, 255, 255, 0.7);
    // fundo branco com leve transparência

    /* 🔥 glass effect leve */
    backdrop-filter: blur(10px);
    // efeito "vidro fosco" (estilo iOS / Nubank)

    padding: 1.2rem;
    // espaço interno do card

    border-radius: 14px;
    // bordas arredondadas

    border: 1px solid rgba(0, 0, 0, 0.03);
    // borda quase invisível (refino visual)

    transition: all 0.25s ease;
    // animação suave para hover

    /* 🔥 micro interação */
    &:hover {
      transform: translateY(-4px);
      // sobe levemente → sensação de interatividade

      background: white;
      // aumenta contraste no hover
    }

    @media (max-width: 900px) {
      padding: 1rem;
      // reduz padding no mobile (mais compacto)
    }

    h4 {
      margin-bottom: 0.4rem;
      // espaço entre título e texto

      color: #5a1e24;
      // cor de destaque (identidade visual)

      font-size: 0.95rem;

      letter-spacing: 0.3px;
      // leve espaçamento entre letras (refino)
    }

    p {
      font-size: 0.85rem;
      // texto menor dentro do card

      line-height: 1.4;
      // compacto, mas legível

      color: #5a5552;
      // cor secundária
    }
  }
`
