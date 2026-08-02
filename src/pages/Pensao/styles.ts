import styled from 'styled-components'

export const Page = styled.main`
  background: #fbfaf8;
`

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  min-height: clamp(560px, 42vw, 660px);
  align-items: stretch;
  margin-top: 88px;
  overflow: hidden;
  scroll-margin-top: 88px;
  background: #f2ece7;

  .mobile-microcopy {
    display: none;
  }

  &::after {
    position: absolute;
    inset: 0 auto 0 0;
    z-index: 1;
    width: 68%;
    background: linear-gradient(
      90deg,
      #fbfaf8 0%,
      #fbfaf8 56%,
      rgba(251, 250, 248, 0.98) 65%,
      rgba(251, 250, 248, 0.88) 75%,
      rgba(251, 250, 248, 0.52) 89%,
      transparent 100%
    );
    content: '';
    pointer-events: none;
  }

  @media (max-width: 1279px) {
    display: grid;
    min-height: 0;
    grid-template-rows: auto minmax(340px, 47svh) auto;
    background: #fbfaf8;

    &::after {
      display: none;
    }

    .mobile-microcopy {
      position: relative;
      z-index: 2;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      padding: 10px 22px 30px;
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
      margin: 0 9px;
      color: #9b4052;
      content: '•';
    }
  }

  @media (max-width: 760px) {
    margin-top: 66px;
    scroll-margin-top: 66px;
  }
`

export const HeroCopy = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  width: min(100% - 136px, 1400px);
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 62px 0 50px;

  .eyebrow {
    margin-bottom: 14px;
    color: #a77b2a;
    font-size: 0.76rem;
    font-weight: 600;
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }

  h1 {
    max-width: 680px;
    color: #741c32;
    font-size: clamp(3.55rem, 4.55vw, 4.75rem);
    letter-spacing: -0.038em;
    line-height: 0.99;
  }

  .gold-line {
    width: 42px;
    height: 2px;
    margin: 24px 0 20px;
    background: #bd8c39;
  }

  > p {
    max-width: 590px;
    color: #302c2a;
    font-size: 1rem;
    line-height: 1.7;
  }

  .desktop-microcopy {
    display: flex;
    align-items: center;
    margin-top: 27px;
    color: #6f6762;
    font-size: 0.69rem;
  }

  .desktop-microcopy span {
    display: inline-flex;
    align-items: center;
  }

  .desktop-microcopy span + span::before {
    margin: 0 10px;
    color: #9b4052;
    content: '•';
  }

  @media (max-width: 1279px) {
    width: min(100% - 44px, 680px);
    justify-content: flex-start;
    padding: 48px 0 38px;

    h1 {
      max-width: 650px;
      font-size: clamp(2.75rem, 11.2vw, 4.2rem);
      line-height: 1;
    }

    > p {
      max-width: 620px;
      font-size: 0.95rem;
      line-height: 1.65;
    }

    .gold-line {
      margin: 18px 0;
    }

    .desktop-microcopy {
      display: none;
    }
  }

  @media (max-width: 390px) {
    width: calc(100% - 40px);
    padding-top: 36px;

    h1 {
      font-size: clamp(2.48rem, 11.6vw, 3rem);
    }

    .eyebrow {
      font-size: 0.64rem;
    }
  }
`

export const HeroPortrait = styled.figure`
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
    width: 100%;
    height: 100%;
    min-height: 340px;
    -webkit-mask-image: linear-gradient(
      180deg,
      #000 0%,
      #000 72%,
      rgba(0, 0, 0, 0.92) 80%,
      rgba(0, 0, 0, 0.42) 91%,
      transparent 100%
    );
    mask-image: linear-gradient(
      180deg,
      #000 0%,
      #000 72%,
      rgba(0, 0, 0, 0.92) 80%,
      rgba(0, 0, 0, 0.42) 91%,
      transparent 100%
    );

    img {
      object-position: 62% 47%;
    }
  }
`

export const WhatsButton = styled.a`
  display: inline-flex;
  min-height: 54px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 27px;
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

export const SectionHeading = styled.div`
  max-width: 780px;
  margin: 0 auto 48px;
  text-align: center;

  .eyebrow {
    display: block;
    margin-bottom: 12px;
    color: #a77b2a;
    font-size: 0.74rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h2 {
    margin-bottom: 18px;
    font-size: clamp(2.55rem, 4vw, 4.15rem);
    letter-spacing: -0.025em;
    line-height: 1.06;
  }

  p {
    max-width: 660px;
    margin: 0 auto;
    color: #5a5552;
    line-height: 1.7;
  }

  @media (max-width: 760px) {
    margin-bottom: 34px;
    text-align: left;

    h2 {
      font-size: clamp(2.35rem, 10.5vw, 3.25rem);
    }

    p {
      font-size: 0.96rem;
      line-height: 1.65;
    }
  }
`

export const SituationsSection = styled.section`
  padding: 96px 24px 104px;
  scroll-margin-top: 88px;
  background: #fff;

  @media (max-width: 760px) {
    padding: 66px 20px 72px;
    scroll-margin-top: 66px;
  }
`

export const SituationGrid = styled.div`
  display: grid;
  max-width: 1180px;
  grid-template-columns: repeat(6, 1fr);
  gap: 18px;
  margin: 0 auto;

  article {
    min-height: 238px;
    grid-column: span 2;
    padding: 34px 31px 32px;
    border: 1px solid #eadfda;
    border-radius: 8px;
    background: linear-gradient(145deg, #fff, #fbf7f4);
    transition:
      transform 200ms ease,
      box-shadow 200ms ease;
  }

  article:nth-last-child(2) {
    grid-column: 2 / span 2;
  }

  article:last-child {
    grid-column: 4 / span 2;
  }

  article:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 44px rgba(78, 46, 40, 0.08);
  }

  svg {
    margin-bottom: 24px;
    color: #9b4052;
    font-size: 2rem;
    stroke-width: 1.35;
  }

  h3 {
    margin-bottom: 12px;
    font-size: 1.48rem;
    line-height: 1.2;
  }

  p {
    color: #5a5552;
    font-size: 0.88rem;
    line-height: 1.68;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);

    article,
    article:nth-last-child(2),
    article:last-child {
      grid-column: auto;
    }

    article:last-child {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    article,
    article:last-child {
      min-height: 0;
      grid-column: auto;
      padding: 27px 24px;
    }

    svg {
      margin-bottom: 17px;
      font-size: 1.7rem;
    }

    h3 {
      font-size: 1.35rem;
    }
  }
`

export const HowSection = styled.section`
  padding: 88px 24px 94px;
  scroll-margin-top: 88px;
  background: radial-gradient(
      circle at 12% 10%,
      rgba(201, 169, 106, 0.11),
      transparent 27%
    ),
    #f7efeb;

  @media (max-width: 760px) {
    padding: 64px 20px 70px;
    scroll-margin-top: 66px;
  }
`

export const Steps = styled.div`
  position: relative;
  display: grid;
  max-width: 1080px;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  margin: 0 auto;
  text-align: center;

  &::before {
    position: absolute;
    top: 24px;
    right: 14%;
    left: 14%;
    height: 1px;
    background: rgba(189, 140, 57, 0.45);
    content: '';
  }

  article {
    position: relative;
    z-index: 1;
  }

  .number {
    display: inline-flex;
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    margin-bottom: 23px;
    border: 1px solid #c9a96a;
    border-radius: 50%;
    background: #f7efeb;
    color: #9d7026;
    font-family: 'Playfair Display', serif;
  }

  h3 {
    margin-bottom: 9px;
    color: #332d2a;
    font-family: 'Inter', sans-serif;
    font-size: 0.88rem;
    font-weight: 600;
  }

  p {
    color: #5e5651;
    font-size: 0.84rem;
    line-height: 1.65;
  }

  @media (max-width: 760px) {
    display: block;
    padding-left: 4px;
    text-align: left;

    &::before {
      top: 23px;
      bottom: 23px;
      left: 27px;
      width: 1px;
      height: auto;
    }

    article {
      display: grid;
      align-items: start;
      grid-template-columns: 48px 1fr;
      gap: 18px;
    }

    article + article {
      margin-top: 34px;
    }

    .number {
      margin: 0;
    }

    h3 {
      margin-top: 4px;
      font-size: 0.94rem;
    }

    p {
      font-size: 0.89rem;
    }
  }
`

export const FaqSection = styled.section`
  display: grid;
  max-width: 1168px;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(48px, 8vw, 105px);
  margin: 0 auto;
  padding: 94px 24px 102px;
  scroll-margin-top: 88px;

  .eyebrow {
    display: block;
    margin-bottom: 12px;
    color: #a77b2a;
    font-size: 0.74rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .faq-heading h2 {
    margin-bottom: 20px;
    font-size: clamp(2.55rem, 4.1vw, 4.35rem);
    letter-spacing: -0.025em;
    line-height: 1.04;
  }

  .faq-heading p {
    max-width: 440px;
    color: #5a5552;
    line-height: 1.72;
  }

  .faq-list {
    border-top: 1px solid #d9ccc5;
  }

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
    gap: 38px;
    padding: 66px 20px 72px;
    scroll-margin-top: 66px;

    .faq-heading h2 {
      font-size: clamp(2.35rem, 10.5vw, 3.3rem);
    }

    .faq-heading p {
      font-size: 0.96rem;
    }
  }
`

export const AccordionItem = styled.div`
  border-bottom: 1px solid #d9ccc5;

  > button {
    display: flex;
    width: 100%;
    min-height: 72px;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 17px 0;
    border: 0;
    background: transparent;
    color: #332d2a;
    cursor: pointer;
    font-size: 0.94rem;
    font-weight: 600;
    text-align: left;
  }

  > button svg {
    flex: 0 0 auto;
    color: #9b4052;
    font-size: 1.25rem;
    transition: transform 220ms ease;
  }

  > button[aria-expanded='true'] svg {
    transform: rotate(180deg);
  }

  @media (max-width: 600px) {
    > button {
      min-height: 64px;
      gap: 18px;
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }
`

export const AccordionContent = styled.div`
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition:
    grid-template-rows 240ms ease,
    opacity 180ms ease;

  &[data-open='true'] {
    grid-template-rows: 1fr;
    opacity: 1;
  }

  p {
    min-height: 0;
    overflow: hidden;
    padding: 0 44px 0 0;
    color: #655d59;
    font-size: 0.9rem;
    line-height: 1.7;
    transition: padding 240ms ease;
  }

  &[data-open='true'] p {
    padding-bottom: 24px;
  }

  @media (max-width: 600px) {
    p {
      padding-right: 34px;
      font-size: 0.88rem;
      line-height: 1.72;
    }
  }
`

export const ContactSection = styled.section`
  position: relative;
  padding: 84px 24px 88px;
  overflow: hidden;
  scroll-margin-top: 88px;
  background: radial-gradient(
      circle at 10% 50%,
      rgba(216, 185, 120, 0.11),
      transparent 27%
    ),
    linear-gradient(135deg, #641d30, #8d3045);
  color: #fff;

  &::before,
  &::after {
    position: absolute;
    width: 220px;
    height: 310px;
    border: 1px solid rgba(216, 185, 120, 0.22);
    border-radius: 75% 25% 70% 30%;
    content: '';
    pointer-events: none;
  }

  &::before {
    bottom: -160px;
    left: -70px;
    transform: rotate(28deg);
  }

  &::after {
    right: -70px;
    bottom: -150px;
    transform: rotate(-28deg);
  }

  > div {
    position: relative;
    z-index: 1;
    max-width: 780px;
    margin: 0 auto;
    text-align: center;
  }

  .eyebrow {
    display: block;
    margin-bottom: 12px;
    color: #d8b978;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h2 {
    margin-bottom: 17px;
    color: #fff8f3;
    font-size: clamp(2.5rem, 4vw, 4rem);
    line-height: 1.06;
  }

  p {
    max-width: 650px;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.82);
  }

  ${WhatsButton} {
    background: #fffaf6;
    box-shadow: none;
    color: #741c32;
  }

  .contact-microcopy {
    display: flex;
    justify-content: center;
    margin-top: 19px;
    color: rgba(255, 255, 255, 0.68);
    font-size: 0.68rem;
  }

  .contact-microcopy span + span::before {
    margin: 0 10px;
    color: #d8b978;
    content: '•';
  }

  @media (max-width: 760px) {
    padding: 66px 20px 70px;
    scroll-margin-top: 66px;

    h2 {
      font-size: clamp(2.3rem, 10.5vw, 3.2rem);
    }

    .contact-microcopy {
      align-items: center;
      flex-direction: column;
      gap: 4px;
    }

    .contact-microcopy span + span::before {
      display: none;
    }
  }
`
