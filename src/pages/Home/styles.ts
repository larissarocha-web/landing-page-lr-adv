import styled from 'styled-components'

export const Container = styled.main`
  padding-top: 102px;
  background: #fff;

  @media (max-width: 760px) {
    padding-top: 70px;
  }
`

export const Hero = styled.div`
  position: relative;
  display: flex;
  min-height: clamp(420px, 28.65vw, 440px);
  align-items: stretch;
  overflow: hidden;
  background: #f5f0ec;

  &::after {
    position: absolute;
    inset: 0;
    z-index: 1;
    background:
      linear-gradient(
        90deg,
        #fbfaf8 0%,
        #fbfaf8 32%,
        rgba(251, 250, 248, 0.99) 36%,
        rgba(251, 250, 248, 0.92) 40%,
        rgba(251, 250, 248, 0.65) 45%,
        rgba(251, 250, 248, 0.28) 50%,
        transparent 56%
      );
    content: '';
    pointer-events: none;
  }

  @media (max-width: 900px) {
    min-height: 515px;
    background:
      radial-gradient(circle at 82% 15%, rgba(201, 169, 106, 0.12), transparent 28%),
      linear-gradient(135deg, #fbfaf8 0%, #f3ede9 100%);

    &::after {
      display: none;
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
  padding: 50px 0 38px;

  .eyebrow {
    margin-bottom: 13px;
    color: #a77b2a;
    font-size: 0.79rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  h1 {
    max-width: 670px;
    color: #741c32;
    font-size: clamp(4rem, 5.2vw, 5rem);
    letter-spacing: -0.035em;
    line-height: 0.98;
  }

  .gold-line {
    width: 42px;
    height: 2px;
    margin: 23px 0 19px;
    background: #bd8c39;
  }

  > p {
    max-width: 455px;
    color: #302c2a;
    font-size: 0.98rem;
    line-height: 1.68;
  }

  @media (max-width: 900px) {
    width: min(100% - 44px, 1320px);
    min-height: 515px;
    padding: 52px 0;

    h1 {
      font-size: clamp(3.15rem, 13vw, 5rem);
    }

    > p {
      max-width: 540px;
    }
  }

  @media (max-width: 480px) {
    width: min(100% - 36px, 1320px);
    min-height: 500px;

    .eyebrow {
      font-size: 0.7rem;
    }

    h1 {
      font-size: clamp(3rem, 15vw, 4rem);
    }
  }
`

export const Portrait = styled.figure`
  position: absolute;
  inset: 0;
  z-index: 0;
  margin: 0;
  overflow: hidden;

  img {
    position: absolute;
    top: -10%;
    right: 0;
    width: auto;
    max-width: none;
    height: 120%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
  margin-top: 26px;

  @media (max-width: 480px) {
    width: 100%;
    align-items: stretch;
    flex-direction: column;
    gap: 17px;
  }
`

export const WhatsButton = styled.a`
  display: inline-flex;
  min-height: 54px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 28px;
  border-radius: 7px;
  background: linear-gradient(135deg, #8c3044, #a94f60);
  box-shadow: 0 10px 22px rgba(125, 38, 58, 0.18);
  color: #fff;
  font-size: 0.8rem;
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
    box-shadow: 0 14px 30px rgba(125, 38, 58, 0.25);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

export const SecondaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: #2f2a28;
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-decoration: none;
  text-transform: uppercase;

  span {
    color: #7d263a;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`

export const Benefits = styled.div`
  position: relative;
  z-index: 3;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  padding: 25px max(24px, calc((100vw - 1360px) / 2));
  border-top: 1px solid rgba(98, 68, 59, 0.08);
  border-bottom: 1px solid rgba(98, 68, 59, 0.08);
  background: rgba(255, 255, 255, 0.98);

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    padding-right: 22px;
    padding-left: 22px;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    padding: 17px 20px;
  }
`

export const Benefit = styled.article`
  display: grid;
  min-height: 108px;
  align-items: start;
  grid-template-columns: 44px 1fr;
  gap: 15px;
  padding: 6px 31px;
  border-right: 1px solid #ded5d0;

  &:last-child {
    border-right: 0;
  }

  > svg {
    margin-top: 3px;
    color: #8e2c42;
    font-size: 2.15rem;
    stroke-width: 1.2;
  }

  h2 {
    margin-bottom: 7px;
    color: #272321;
    font-family: 'Inter', sans-serif;
    font-size: 0.77rem;
    font-weight: 700;
    letter-spacing: 0.025em;
    line-height: 1.45;
    text-transform: uppercase;
  }

  p {
    max-width: 205px;
    color: #514b47;
    font-size: 0.76rem;
    line-height: 1.5;
  }

  @media (max-width: 1000px) {
    margin: 9px 0;

    &:nth-child(2) {
      border-right: 0;
    }
  }

  @media (max-width: 620px) {
    min-height: auto;
    padding: 18px 4px;
    border-right: 0;
    border-bottom: 1px solid #ded5d0;

    &:last-child {
      border-bottom: 0;
    }

    p {
      max-width: none;
    }
  }
`
