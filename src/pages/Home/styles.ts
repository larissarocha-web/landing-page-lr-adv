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

  .mobile-microcopy {
    display: none;
  }

  &::after {
    position: absolute;
    inset: 0 auto 0 0;
    z-index: 1;
    width: 66%;
    background: linear-gradient(
      90deg,
      #fbfaf8 0%,
      #fbfaf8 57%,
      rgba(251, 250, 248, 0.98) 66%,
      rgba(251, 250, 248, 0.88) 76%,
      rgba(251, 250, 248, 0.52) 89%,
      transparent 100%
    );
    content: '';
    pointer-events: none;
  }

  @media (max-width: 1279px) {
    display: grid;
    min-height: calc(100svh - 88px);
    grid-template-rows: auto minmax(300px, 43svh) auto auto;
    background: #fbfaf8;

    &::after {
      display: none;
    }

    .mobile-microcopy {
      position: relative;
      z-index: 2;
      display: flex;
      grid-row: 3;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 0;
      padding: 8px 22px 28px;
      background: #fbfaf8;
      color: #514a46;
      font-size: clamp(0.58rem, 2.45vw, 0.69rem);
      line-height: 1.55;
      text-align: center;
    }

    .mobile-microcopy span {
      display: inline-flex;
      align-items: center;
    }

    .mobile-microcopy span + span::before {
      margin: 0 10px;
      color: #9b4052;
      content: '•';
    }
  }

  @media (max-width: 760px) {
    min-height: calc(100svh - 66px);
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

  @media (max-width: 1279px) {
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
      display: none;
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
  width: min(62vw, 980px);
  margin: 0;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 0, 0, 0.18) 8%,
    rgba(0, 0, 0, 0.54) 18%,
    rgba(0, 0, 0, 0.9) 29%,
    #000 39%
  );
  mask-image: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 0, 0, 0.18) 8%,
    rgba(0, 0, 0, 0.54) 18%,
    rgba(0, 0, 0, 0.9) 29%,
    #000 39%
  );

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 46%;
  }

  @media (max-width: 1279px) {
    position: relative;
    inset: auto;
    grid-row: 2;
    width: 100%;
    height: 100%;
    min-height: 300px;
    -webkit-mask-image: linear-gradient(
      180deg,
      #000 0%,
      #000 70%,
      rgba(0, 0, 0, 0.92) 78%,
      rgba(0, 0, 0, 0.45) 90%,
      transparent 100%
    );
    mask-image: linear-gradient(
      180deg,
      #000 0%,
      #000 70%,
      rgba(0, 0, 0, 0.92) 78%,
      rgba(0, 0, 0, 0.45) 90%,
      transparent 100%
    );

    img {
      object-position: 62% 47%;
    }
  }
`

export const IntakeCard = styled.form`
  position: absolute;
  top: 50%;
  left: 60%;
  z-index: 4;
  display: flex;
  width: clamp(250px, 18vw, 290px);
  flex-direction: column;
  padding: 22px 21px 19px;
  border: 1px solid rgba(201, 169, 106, 0.42);
  border-radius: 12px;
  background: rgba(255, 253, 251, 0.94);
  box-shadow: 0 18px 44px rgba(72, 42, 37, 0.11);
  transform: translate(-50%, -50%);
  backdrop-filter: blur(14px);

  .form-eyebrow {
    margin-bottom: 4px;
    color: #a77b2a;
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h2 {
    margin-bottom: 16px;
    color: #741c32;
    font-size: 1.18rem;
    line-height: 1.2;
  }

  label {
    margin-bottom: 5px;
    color: #443b37;
    font-size: 0.66rem;
    font-weight: 600;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid #dfd3cd;
    border-radius: 7px;
    background: rgba(251, 248, 246, 0.94);
    color: #332e2b;
    font-size: 0.74rem;
    outline: none;
    transition:
      border-color 180ms ease,
      box-shadow 180ms ease;
  }

  input {
    min-height: 42px;
    margin-bottom: 13px;
    padding: 0 12px;
  }

  textarea {
    min-height: 82px;
    padding: 10px 12px;
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    color: #9d938d;
  }

  input:focus,
  textarea:focus {
    border-color: #b46c7b;
    box-shadow: 0 0 0 3px rgba(155, 64, 82, 0.1);
  }

  button {
    display: inline-flex;
    min-height: 46px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 15px;
    border: 0;
    border-radius: 7px;
    background: linear-gradient(135deg, #81283c, #a6485b);
    color: #fff;
    cursor: pointer;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  button svg {
    font-size: 1rem;
  }

  small {
    margin-top: 8px;
    color: #8a807a;
    font-size: 0.55rem;
    text-align: center;
  }

  @media (max-width: 1279px) {
    position: relative;
    top: auto;
    left: auto;
    grid-row: 4;
    width: min(calc(100% - 40px), 430px);
    margin: 6px auto 34px;
    padding: 24px 22px 21px;
    background: #fffdfb;
    box-shadow: 0 14px 38px rgba(72, 42, 37, 0.09);
    transform: none;

    h2 {
      font-size: 1.32rem;
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
