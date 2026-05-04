import styled from 'styled-components'
// importa o styled-components (permite criar estilos usando JS)

/* ================= CONTAINER ================= */
export const Container = styled.section`
  padding: 4rem 1.5rem;
  // espaço interno da seção (topo/baixo = 4rem, laterais = 1.5rem)
  // 👉 controla o "respiro" da seção inteira

  background: #f7f4f3;
  // fundo levemente acinzentado (separa visualmente das outras seções)
`

/* ================= WRAPPER ================= */
export const Wrapper = styled.div`
  max-width: 900px;
  // limita largura do conteúdo (melhora leitura)

  margin: 0 auto;
  // centraliza horizontalmente

  h2 {
    text-align: center;
    // centraliza o título da seção

    margin-bottom: 2rem;
    // espaço abaixo do título

    color: #2b2b2b;
    // cor mais escura pra dar destaque
  }
`

/* ================= ACCORDION ================= */
export const AccordionContainer = styled.div`
  margin-bottom: 3rem;
  // espaço abaixo do bloco de perguntas (separa dos depoimentos)
`

export const AccordionItem = styled.div`
  border-bottom: 1px solid #e6e5e5;
  // linha divisória entre perguntas

  padding: 1rem 0;
  // espaço interno vertical de cada item
`

export const AccordionTitle = styled.div`
  display: flex;
  // permite alinhar ícone + texto

  align-items: center;
  // alinha verticalmente

  gap: 0.5rem;
  // espaço entre ícone e texto

  cursor: pointer;
  // mostra que é clicável

  font-weight: 500;
  // leve destaque no texto

  color: #2b2b2b;

  &:hover {
    color: #c47f17;
    // muda cor ao passar o mouse (feedback visual)
  }
`

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  max-height: ${(props) => (props.isOpen ? '200px' : '0')};
  // controla altura:
  // 👉 aberto = 200px
  // 👉 fechado = 0 (escondido)

  overflow: hidden;
  // impede conteúdo de "vazar" quando fechado

  transition: all 0.3s ease;
  // animação suave ao abrir/fechar

  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  // fade (aparece/desaparece)

  padding: ${(props) => (props.isOpen ? '0.8rem 0' : '0')};
  // só tem espaçamento quando aberto

  font-size: 0.9rem;
  color: #5a5552;
`

/* ================= DEPOIMENTOS ================= */
export const DepoimentosWrapper = styled.div`
  margin-top: 3rem;
  // separa visualmente dos FAQs

  h2 {
    margin-bottom: 1.5rem;
    // espaço abaixo do título dos depoimentos
  }
`

export const Depoimentos = styled.div`
  display: flex;
  // layout horizontal (cards lado a lado)

  gap: 1rem;
  // espaço entre os cards

  overflow-x: auto;
  // permite rolagem horizontal no mobile

  padding-bottom: 1rem;
  // espaço pra não "cortar" visualmente

  scrollbar-width: none;
  // remove scrollbar no Firefox

  &::-webkit-scrollbar {
    display: none;
    // remove scrollbar no Chrome/Safari
  }
`

export const Card = styled.div`
  min-width: 260px;
  // largura mínima (força o scroll horizontal)

  background: white;
  // fundo branco (contraste com o fundo da seção)

  padding: 1.2rem;
  // espaço interno do card

  border-radius: 12px;
  // bordas arredondadas (visual moderno)

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  // sombra suave (efeito de profundidade)

  p {
    font-size: 0.9rem;
    // texto do depoimento

    margin-bottom: 0.5rem;
    // espaço abaixo do texto
  }

  span {
    font-size: 0.75rem;
    // nome da pessoa (menor)

    color: #8d8686;
    // cor mais suave (hierarquia visual)
  }
`
