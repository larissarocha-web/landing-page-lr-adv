import styled from 'styled-components'

export const Container = styled.main`
  padding-top: 86px;
  background: #fff;

  @media (max-width: 760px) {
    padding-top: 70px;
  }
`

export const Hero = styled.div`
  display: grid;
  min-height: 610px;
  grid-template-columns: minmax(0, 0.96fr) minmax(0, 1.04fr);

  @media (max-width: 900px) {
    min-height: auto;
    grid-template-columns: 1fr;
  }
`

export const Copy = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: clamp(56px, 7vw, 108px) clamp(32px, 6.4vw, 104px);
  background:
    radial-gradient(circle at 18% 18%, rgba(201, 169, 106, 0.12), transparent 24%),
    linear-gradient(135deg, #fbfaf8 0%, #f3ede9 100%);

  .eyebrow {
    margin-bottom: 18px;
    color: #a77b2a;
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h1 {
    max-width: 650px;
    font-size: clamp(3.5rem, 5.6vw, 6.5rem);
    letter-spacing: -0.035em;
    line-height: 0.98;
  }

  .gold-line {
    width: 42px;
    height: 2px;
    margin: 28px 0 24px;
    background: #c9a96a;
  }

  > p {
    max-width: 520px;
    color: #3f3a38;
    font-size: clamp(1rem, 1.25vw, 1.15rem);
    line-height: 1.75;
  }

  @media (max-width: 900px) {
    min-height: 520px;
    padding: 64px 28px;

    h1 {
      font-size: clamp(3.25rem, 13vw, 5rem);
    }
  }

  @media (max-width: 480px) {
    min-height: 500px;
    padding: 54px 22px;

    .eyebrow {
      font-size: 0.72rem;
    }
  }
`

export const Portrait = styled.figure`
  min-height: 610px;
  margin: 0;
  overflow: hidden;
  background: #d9ccc4;

  img {
    width: 100%;
    height: 100%;
    min-height: 610px;
    object-fit: cover;
    object-position: 52% center;
  }

  @media (max-width: 900px) {
    min-height: 420px;

    img {
      min-height: 420px;
      object-position: 50% 38%;
    }
  }

  @media (max-width: 520px) {
    min-height: 310px;

    img {
      min-height: 310px;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  margin-top: 30px;

  @media (max-width: 480px) {
    width: 100%;
    align-items: stretch;
    flex-direction: column;
    gap: 18px;
  }
`

export const WhatsButton = styled.a`
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 24px;
  border-radius: 7px;
  background: linear-gradient(135deg, #8c3044, #a94f60);
  box-shadow: 0 12px 28px rgba(125, 38, 58, 0.2);
  color: #fff;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-decoration: none;
  text-transform: uppercase;
  transition: transform 180ms ease, box-shadow 180ms ease;

  svg {
    font-size: 1.25rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 34px rgba(125, 38, 58, 0.27);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

export const SecondaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #2f2a28;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-decoration: none;
  text-transform: uppercase;

  span {
    color: #a77b2a;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`

export const Benefits = styled.div`
  display: grid;
  width: min(100% - 64px, 1320px);
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  padding: 28px 0;
  background: #fff;

  @media (max-width: 1000px) {
    width: min(100% - 40px, 1320px);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    width: min(100% - 32px, 1320px);
    grid-template-columns: 1fr;
    padding: 22px 0;
  }
`

export const Benefit = styled.article`
  display: grid;
  align-items: start;
  grid-template-columns: 42px 1fr;
  gap: 16px;
  padding: 10px 28px;
  border-right: 1px solid #e7ded9;

  &:last-child {
    border-right: 0;
  }

  > svg {
    color: #9b4052;
    font-size: 2rem;
    stroke-width: 1.25;
  }

  h2 {
    margin-bottom: 7px;
    color: #302b29;
    font-family: 'Inter', sans-serif;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.03em;
    line-height: 1.45;
    text-transform: uppercase;
  }

  p {
    color: #625b57;
    font-size: 0.78rem;
    line-height: 1.55;
  }

  @media (max-width: 1000px) {
    margin: 10px 0;

    &:nth-child(2) {
      border-right: 0;
    }
  }

  @media (max-width: 620px) {
    padding: 18px 8px;
    border-right: 0;
    border-bottom: 1px solid #e7ded9;

    &:last-child {
      border-bottom: 0;
    }
  }
`
