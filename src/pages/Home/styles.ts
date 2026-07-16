import styled from 'styled-components'

export const Container = styled.main`
  padding-top: 88px;
  background: #fbfaf8;

  @media (max-width: 760px) {
    padding-top: 66px;
  }
`

export const Hero = styled.div`
  position: relative;
  display: flex;
  min-height: clamp(520px, 39vw, 610px);
  align-items: stretch;
  overflow: hidden;
  background: #f2ece7;

  &::after {
    position: absolute;
    inset: 0 auto 0 0;
    z-index: 1;
    width: 63%;
    background: linear-gradient(
      90deg,
      #fbfaf8 0%,
      #fbfaf8 56%,
      rgba(251, 250, 248, 0.98) 65%,
      rgba(251, 250, 248, 0.82) 75%,
      rgba(251, 250, 248, 0.4) 89%,
      transparent 100%
    );
    content: '';
    pointer-events: none;
  }

  @media (max-width: 900px) {
    display: grid;
    min-height: calc(100svh - 66px);
    grid-template-rows: auto minmax(300px, 43svh);
    background: #fbfaf8;

    &::after {
      inset: auto 0 0;
      z-index: 1;
      width: 100%;
      height: 145px;
      background: linear-gradient(
        180deg,
        transparent 0%,
        rgba(251, 250, 248, 0.16) 28%,
        rgba(251, 250, 248, 0.76) 76%,
        #fbfaf8 100%
      );
    }
  }
`

export const Copy = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  width: min(100% - 136px, 1400px);
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 62px 0 48px;

  .eyebrow {
    margin-bottom: 14px;
    color: #a77b2a;
    font-size: 0.76rem;
    font-weight: 600;
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }

  h1 {
    max-width: 660px;
    color: #741c32;
    font-size: clamp(3.7rem, 4.75vw, 4.8rem);
    letter-spacing: -0.038em;
    line-height: 0.98;
  }

  .gold-line {
    width: 42px;
    height: 2px;
    margin: 24px 0 20px;
    background: #bd8c39;
  }

  > p {
    max-width: 480px;
    color: #302c2a;
    font-size: 1rem;
    line-height: 1.7;
  }

  .microcopy {
    display: flex;
    align-items: center;
    gap: 0;
    margin-top: 30px;
    color: #6f6762;
    font-size: 0.69rem;
  }

  .microcopy span {
    display: inline-flex;
    align-items: center;
  }

  .microcopy span + span::before {
    margin: 0 10px;
    color: #9b4052;
    content: '•';
  }

  @media (max-width: 900px) {
    width: min(100% - 44px, 660px);
    justify-content: flex-start;
    padding: 48px 0 34px;

    h1 {
      max-width: 620px;
      font-size: clamp(2.75rem, 11.5vw, 4.2rem);
      line-height: 1;
    }

    > p {
      max-width: 570px;
      font-size: 0.95rem;
      line-height: 1.62;
    }

    .gold-line {
      margin: 18px 0;
    }

    .microcopy {
      position: static;
      width: 100%;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-top: 22px;
      color: #514a46;
      font-size: clamp(0.58rem, 2.45vw, 0.69rem);
      line-height: 1.55;
      text-align: left;
    }
  }

  @media (max-width: 390px) {
    width: calc(100% - 40px);
    padding-top: 36px;

    h1 {
      font-size: clamp(2.5rem, 11.8vw, 3.1rem);
    }

    .eyebrow {
      font-size: 0.64rem;
    }
  }
`

export const Portrait = styled.figure`
  position: absolute;
  inset: 0 0 0 auto;
  z-index: 0;
  width: 67%;
  margin: 0;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 0, 0, 0.06) 12%,
    rgba(0, 0, 0, 0.32) 23%,
    rgba(0, 0, 0, 0.76) 36%,
    #000 48%
  );
  mask-image: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 0, 0, 0.06) 12%,
    rgba(0, 0, 0, 0.32) 23%,
    rgba(0, 0, 0, 0.76) 36%,
    #000 48%
  );

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 48%;
  }

  @media (max-width: 900px) {
    position: relative;
    inset: auto;
    grid-row: 2;
    width: 100%;
    height: 100%;
    min-height: 300px;
    -webkit-mask-image: linear-gradient(
      180deg,
      transparent 0%,
      rgba(0, 0, 0, 0.16) 9%,
      rgba(0, 0, 0, 0.72) 23%,
      #000 39%,
      #000 100%
    );
    mask-image: linear-gradient(
      180deg,
      transparent 0%,
      rgba(0, 0, 0, 0.16) 9%,
      rgba(0, 0, 0, 0.72) 23%,
      #000 39%,
      #000 100%
    );

    img {
      object-position: 62% 50%;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
  margin-top: 27px;

  @media (max-width: 520px) {
    width: 100%;
    align-items: stretch;
    flex-direction: column;
    gap: 14px;
    margin-top: 22px;
  }
`

export const WhatsButton = styled.a`
  display: inline-flex;
  min-height: 54px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 27px;
  border-radius: 7px;
  background: linear-gradient(135deg, #8c3044, #a94f60);
  box-shadow: 0 10px 22px rgba(125, 38, 58, 0.18);
  color: #fff;
  font-size: 0.76rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 520px) {
    width: 100%;
    min-height: 52px;
  }
`

export const SecondaryLink = styled.a`
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  gap: 13px;
  color: #741c32;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-decoration: none;
  text-transform: uppercase;

  @media (max-width: 520px) {
    display: none;
  }
`
