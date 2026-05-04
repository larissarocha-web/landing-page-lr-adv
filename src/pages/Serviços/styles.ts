import styled from 'styled-components'

/* ================= CONTAINER DA SEÇÃO ================= */
export const Container = styled.section`
  padding: 1rem 1.5rem;
  background: #ffffff;
`

/* ================= WRAPPER (CENTRALIZA CONTEÚDO) ================= */
export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #2b2b2b;
  }

  p {
    max-width: 600px;
    margin: 0 auto 3rem auto;
    color: #5a5552;
    line-height: 1.5;
  }
`

/* ================= CARDS (SERVIÇOS) ================= */
export const Cards = styled.div`
  display: grid;

  /* 3 colunas no desktop */
  grid-template-columns: repeat(3, 1fr);

  gap: 2rem;

  /* 📱 MOBILE */
  @media (max-width: 900px) {
    grid-template-columns: 1fr; /* vira coluna */
    gap: 1.2rem; /* reduz espaçamento */
  }

  div {
    padding: 2rem;
    border-radius: 16px;

    /* 🎨 fundo premium */
    background: linear-gradient(145deg, #ffffff, #f7f4f3);

    text-align: left;

    /* ✨ profundidade */
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04);

    transition: all 0.25s ease;

    /* 🔥 efeito hover */
    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 18px 35px rgba(0, 0, 0, 0.08);
    }

    /* 📱 MOBILE AJUSTES */
    @media (max-width: 900px) {
      padding: 1.2rem;
      border-radius: 12px;
    }

    @media (max-width: 500px) {
      padding: 1rem;
    }

    /* 🔹 TÍTULO DO CARD */
    h3 {
      margin-bottom: 0.6rem;
      color: #5a1e24;
      font-size: 1.1rem;
      font-weight: 600;
    }

    /* 🔹 TEXTO */
    p {
      font-size: 0.92rem;
      line-height: 1.45;
      color: #5a5552;
    }
  }
`
