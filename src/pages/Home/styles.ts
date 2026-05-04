import styled from 'styled-components'
// importa a biblioteca styled-components (permite escrever CSS dentro do JS)

/* ================= CONTAINER ================= */
export const Container = styled.main`
  margin-top: 60px;
  // cria um espaço no topo (importante porque o header é fixo)

  background: linear-gradient(180deg, #f7f4f3 0%, #ffffff 100%);
  // fundo em degradê suave (de cinza claro para branco)
  // isso dá um visual mais premium do que cor sólida

  color: #5a5552;
  // cor padrão do texto dentro da seção
`

/* ================= WRAPPER ================= */
export const Wrapper = styled.div`
  max-width: 1100px;
  // limita a largura máxima do conteúdo (evita layout esticado em telas grandes)

  margin: 0 auto;
  // centraliza o conteúdo horizontalmente

  display: flex;
  // usa flexbox para organizar os elementos internos'

  justify-content: space-between;
  // coloca texto de um lado e imagem do outro

  align-items: center;
  // alinha verticalmente no centro

  min-height: 360px;
  // altura mínima da seção (👉 AQUI você controla o "tamanho do hero")

  gap: 2rem;
  // espaço entre texto e imagem

  padding: 2rem;
  // espaço interno da seção

  @media (max-width: 996px) {
    flex-direction: column-reverse;
    // no mobile: imagem vai pra baixo, texto fica em cima

    text-align: center;
    // centraliza o texto

    height: auto;
    // remove altura fixa no mobile

    padding: 3rem 1.5rem;
    // aumenta respiro vertical no mobile
  }

  div {
    display: flex;
    flex-direction: column;
    // organiza título, texto e botão em coluna

    gap: 1.2rem;
    // espaço entre elementos internos

    @media (max-width: 996px) {
      align-items: center;
      // centraliza conteúdo no mobile
    }

    h4 {
      font-size: 0.8rem;
      // subtítulo pequeno

      letter-spacing: 2px;
      // espaçamento entre letras (efeito premium)

      text-transform: uppercase;
      // deixa tudo maiúsculo

      color: #c9a86a;
      // cor dourada (estética jurídica premium)

      font-weight: 500;
    }

    h1 {
      font-size: 3.2rem;
      // título principal grande (impacto visual)

      line-height: 1.2;
      // espaçamento entre linhas mais compacto

      color: #5a1e24;
      // cor vinho (identidade visual)

      font-family: 'Playfair Display', serif;
      // fonte mais sofisticada (estilo advocacia premium)
    }

    p {
      width: 80%;
      // limita largura do texto (melhora leitura)

      font-size: 1rem;
      line-height: 1.6;
      // melhora legibilidade

      color: #5a5552;

      @media (max-width: 996px) {
        width: 100%;
        // no mobile o texto ocupa toda largura
      }
    }
  }

  img {
    max-height: 100%;
    // impede a imagem de ultrapassar o container

    width: 100%;
    // ocupa toda largura disponível

    max-width: 480px;
    // limita o tamanho máximo da imagem

    border-radius: 16px;
    // bordas arredondadas (visual moderno)

    object-fit: cover;
    // garante que a imagem não distorça

    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    // sombra suave (efeito de profundidade premium)
  }
`

/* ================= BOTÃO WHATSAPP ================= */
export const WhatsButton = styled.a`
  display: flex;
  // transforma o botão em flexbox

  align-items: center;
  // alinha verticalmente ícone e texto

  justify-content: center;
  // centraliza conteúdo

  gap: 0.5rem;
  // espaço entre ícone e texto

  padding: 0.7rem 1.2rem;
  // tamanho interno do botão

  border-radius: 6px;
  // borda levemente arredondada

  background: ${(props) => props.theme['green-base']};
  // cor principal do botão (vem do tema)

  color: white;
  // cor do texto

  text-decoration: none;
  // remove sublinhado do link

  font-size: 0.9rem;
  // tamanho do texto

  font-weight: 600;
  // deixa o texto mais forte

  width: 280px;
  // largura fixa do botão

  transition: 0.3s;
  // suaviza animações

  svg {
    font-size: 20px;
    // tamanho do ícone do WhatsApp
  }

  &:hover {
    background: ${(props) => props.theme['green-dark']};
    // muda cor ao passar mouse

    transform: translateY(-2px);
    // efeito de "levantar"
  }

  /* 🔥 EFEITO DE CONVERSÃO */
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    // tamanho normal

    50% {
      transform: scale(1.04);
    }
    // cresce levemente

    100% {
      transform: scale(1);
    }
    // volta ao normal
  }

  animation: pulse 2.2s infinite;
  // animação contínua (chama atenção pro clique)
`
