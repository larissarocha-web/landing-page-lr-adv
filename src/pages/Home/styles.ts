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
    inset: 0 auto 0 0;
    z-index: 1;
    width: 61%;
    background: linear-gradient(
      90deg,
      #fbfaf8 0%,
      #fbfaf8 60%,
      rgba(251, 250, 248, 0.96) 69%,
      rgba(251, 250, 248, 0.72) 79%,
      rgba(251, 250, 248, 0.28) 91%,
      transparent 100%
    );
    content: '';
    pointer-events: none;
  }

  @media (max-width: 900px) {
    display: block;
    min-height: 0;
    background: radial-gradient(
        circle at 82% 15%,
        rgba(201, 169, 106, 0.12),
        transparent 28%
      ),
      linear-gradient(135deg, #fbfaf8 0%, #f3ede9 100%);

    &::after {
      inset: auto 0 0;
      z-index: 1;
      width: 100%;
      height: 120px;
      background: linear-gradient(
        180deg,
        transparent 0%,
        rgba(251, 250, 248, 0.18) 30%,
        rgba(251, 250, 248, 0.75) 76%,
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
    min-height: 455px;
    padding: 50px 0 34px;

    h1 {
      font-size: clamp(3.15rem, 13vw, 5rem);
    }

    > p {
      max-width: 540px;
    }
  }

  @media (max-width: 480px) {
    width: min(100% - 36px, 1320px);
    min-height: 430px;
    padding-top: 42px;

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
  inset: 0 0 0 auto;
  z-index: 0;
  width: 70%;
  margin: 0;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 0, 0, 0.04) 8%,
    rgba(0, 0, 0, 0.18) 16%,
    rgba(0, 0, 0, 0.52) 27%,
    rgba(0, 0, 0, 0.9) 39%,
    #000 48%
  );
  mask-image: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 0, 0, 0.04) 8%,
    rgba(0, 0, 0, 0.18) 16%,
    rgba(0, 0, 0, 0.52) 27%,
    rgba(0, 0, 0, 0.9) 39%,
    #000 48%
  );

  img {
    position: absolute;
    top: -10%;
    right: 0;
    width: auto;
    max-width: none;
    height: 120%;
  }

  @media (max-width: 900px) {
    position: relative;
    inset: auto;
    display: block;
    width: 100%;
    height: clamp(300px, 78vw, 520px);
    -webkit-mask-image: linear-gradient(
      180deg,
      transparent 0%,
      rgba(0, 0, 0, 0.12) 8%,
      rgba(0, 0, 0, 0.6) 21%,
      #000 37%,
      #000 100%
    );
    mask-image: linear-gradient(
      180deg,
      transparent 0%,
      rgba(0, 0, 0, 0.12) 8%,
      rgba(0, 0, 0, 0.6) 21%,
      #000 37%,
      #000 100%
    );

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 63% 50%;
    }
  }

  @media (max-width: 480px) {
    height: 330px;

    img {
      object-position: 61% 50%;
    }
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
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;

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
    display: flex;
    gap: 13px;
    padding: 18px 20px 22px;
    overflow-x: auto;
    scroll-padding-inline: 20px;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
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
    flex: 0 0 min(82vw, 330px);
    min-height: 142px;
    padding: 22px 20px;
    border: 1px solid rgba(125, 38, 58, 0.11);
    border-radius: 12px;
    background: linear-gradient(145deg, #fff, #fbf7f4);
    box-shadow: 0 12px 30px rgba(72, 43, 37, 0.06);
    scroll-snap-align: start;

    p {
      max-width: none;
    }
  }
`
