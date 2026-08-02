import styled from 'styled-components'

export const Page = styled.main`
  --pension-burgundy: #741c32;
  --pension-gold: #bd8c39;
  --pension-ink: #302b29;
  --pension-muted: #69615d;
  --pension-line: rgba(116, 28, 50, 0.17);
  --pension-ivory: #fbfaf8;

  background: var(--pension-ivory);
  color: var(--pension-ink);

  .eyebrow {
    color: #9b6b20;
    font-size: 0.69rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
`

export const WhatsButton = styled.a`
  display: inline-flex;
  min-height: 54px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 31px;
  padding: 0 28px;
  border: 1px solid transparent;
  border-radius: 999px;
  background: var(--pension-burgundy);
  box-shadow: 0 13px 30px rgba(116, 28, 50, 0.14);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.025em;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    background 180ms ease,
    transform 180ms ease;

  &:hover {
    background: #8c3044;
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.18rem;
  }

  @media (max-width: 520px) {
    width: 100%;
    min-height: 52px;
    padding: 0 18px;
  }
`

export const HeroSection = styled.section`
  margin-top: 88px;
  padding: clamp(34px, 3.2vw, 48px) 32px clamp(52px, 4.8vw, 68px);
  border-bottom: 1px solid var(--pension-line);
  scroll-margin-top: 88px;
  background: linear-gradient(
      90deg,
      rgba(189, 140, 57, 0.13) 0 8px,
      transparent 8px
    ),
    radial-gradient(
      circle at 89% 17%,
      rgba(116, 28, 50, 0.065),
      transparent 30%
    ),
    var(--pension-ivory);

  .hero-layout {
    display: grid;
    width: min(100%, 1240px);
    grid-template-columns: minmax(220px, 0.34fr) minmax(0, 1fr);
    gap: clamp(48px, 7vw, 104px);
    margin: 0 auto;
    padding-top: clamp(28px, 2.6vw, 38px);
    border-top: 1px solid rgba(189, 140, 57, 0.65);
  }

  .hero-context {
    padding-top: 10px;
  }

  .trust-line {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0;
    margin-top: 21px;
    color: var(--pension-muted);
    font-size: 0.72rem;
    line-height: 1.6;
  }

  .trust-line span + span::before {
    margin: 0 10px;
    color: var(--pension-gold);
    content: '•';
  }

  .hero-copy h1 {
    max-width: 940px;
    color: var(--pension-burgundy);
    font-size: clamp(4rem, 5.6vw, 5.35rem);
    letter-spacing: -0.052em;
    line-height: 0.96;
  }

  @media (max-width: 900px) {
    padding: 24px 22px 46px;

    .hero-layout {
      grid-template-columns: 1fr;
      gap: 18px;
      padding-top: 24px;
    }

    .hero-context {
      padding-top: 0;
    }

    .hero-copy h1 {
      font-size: clamp(3.2rem, 10.5vw, 5.4rem);
      line-height: 0.97;
    }

    .trust-line {
      margin-top: 20px;
      font-size: 0.68rem;
      line-height: 1.65;
    }
  }

  @media (max-width: 760px) {
    margin-top: 66px;
    scroll-margin-top: 66px;
    background: linear-gradient(
        90deg,
        rgba(189, 140, 57, 0.16) 0 5px,
        transparent 5px
      ),
      var(--pension-ivory);
  }

  @media (max-width: 390px) {
    padding: 22px 20px 42px;

    .hero-copy h1 {
      font-size: clamp(2.75rem, 13.3vw, 3.25rem);
    }

    .trust-line {
      font-size: 0.62rem;
    }

    .trust-line span + span::before {
      margin: 0 4px;
    }
  }
`

export const PrincipleSection = styled.section`
  padding: clamp(58px, 5.5vw, 76px) 32px;

  .principle-layout {
    width: min(100%, 1000px);
    margin: 0 auto;
  }

  h2 {
    max-width: 950px;
    margin-top: 14px;
    font-size: clamp(3rem, 5vw, 4.75rem);
    letter-spacing: -0.045em;
    line-height: 0.98;
  }

  p {
    max-width: 760px;
    margin-top: 24px;
    padding-left: 28px;
    border-left: 2px solid var(--pension-gold);
    color: #4e4743;
    font-size: clamp(1.08rem, 1.55vw, 1.35rem);
    line-height: 1.75;
  }

  @media (max-width: 760px) {
    padding: 44px 20px 48px;

    h2 {
      font-size: clamp(2.75rem, 12vw, 3.7rem);
    }

    p {
      margin-top: 24px;
      padding-left: 20px;
      font-size: 1rem;
      line-height: 1.72;
    }
  }
`

export const SituationsSection = styled.section`
  padding: clamp(60px, 5.8vw, 78px) 32px clamp(64px, 6vw, 84px);
  scroll-margin-top: 88px;
  background: #f4eeea;

  .section-heading,
  .situation-grid {
    width: min(100%, 1120px);
    margin-right: auto;
    margin-left: auto;
  }

  .section-heading {
    max-width: 780px;
    margin-bottom: 38px;
    text-align: center;
  }

  .section-heading h2 {
    max-width: 720px;
    margin: 13px auto 0;
    font-size: clamp(3rem, 5vw, 5.15rem);
    letter-spacing: -0.04em;
    line-height: 1;
  }

  .situation-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
    padding: 0;
    list-style: none;
  }

  li {
    position: relative;
    display: flex;
    min-height: 132px;
    align-items: flex-end;
    padding: 27px 25px;
    overflow: hidden;
    border: 1px solid #e2d4cd;
    border-radius: 8px;
    background: linear-gradient(145deg, #fff, #fbf7f4);
    box-shadow: 0 12px 32px rgba(78, 46, 40, 0.035);

    &::before {
      position: absolute;
      top: 0;
      left: 25px;
      width: 34px;
      height: 2px;
      background: var(--pension-gold);
      content: '';
    }
  }

  h3 {
    color: var(--pension-burgundy);
    font-size: clamp(1.18rem, 1.45vw, 1.48rem);
    font-weight: 500;
    letter-spacing: -0.025em;
    line-height: 1.18;
  }

  @media (max-width: 1040px) {
    .situation-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    padding: 46px 20px 52px;
    scroll-margin-top: 66px;

    .section-heading {
      margin-bottom: 28px;
      text-align: left;
    }

    .section-heading h2 {
      margin-right: 0;
      margin-left: 0;
      font-size: clamp(2.65rem, 11.5vw, 3.55rem);
    }

    .situation-grid {
      grid-template-columns: 1fr;
      gap: 11px;
    }

    li {
      min-height: 82px;
      padding: 20px 21px;

      &::before {
        left: 21px;
        width: 28px;
      }
    }

    h3 {
      font-size: 1.22rem;
      line-height: 1.25;
    }
  }
`

export const FaqSection = styled.section`
  display: grid;
  grid-template-columns: minmax(260px, 0.55fr) minmax(0, 1fr);
  gap: clamp(48px, 6vw, 88px);
  padding: clamp(60px, 5.8vw, 78px) max(32px, calc((100vw - 1120px) / 2));
  border-top: 1px solid var(--pension-line);
  scroll-margin-top: 88px;
  background: var(--pension-ivory);

  .faq-heading h2 {
    margin-top: 14px;
    font-size: clamp(2.8rem, 4.3vw, 4.5rem);
    letter-spacing: -0.04em;
    line-height: 1.02;
  }

  .faq-list {
    border-top: 1px solid var(--pension-line);
  }

  .faq-note {
    margin-top: 24px;
    color: #766c67;
    font-size: 0.72rem;
    line-height: 1.6;
  }

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 48px 20px 54px;
    scroll-margin-top: 66px;

    .faq-heading h2 {
      font-size: clamp(2.65rem, 11.3vw, 3.55rem);
    }
  }
`

export const AccordionItem = styled.div`
  border-bottom: 1px solid var(--pension-line);

  > button {
    display: grid;
    width: 100%;
    min-height: 84px;
    align-items: center;
    grid-template-columns: 38px minmax(0, 1fr) 28px;
    gap: 17px;
    padding: 19px 0;
    border: 0;
    background: transparent;
    color: #332d2a;
    cursor: pointer;
    text-align: left;
  }

  .question-number {
    color: rgba(116, 28, 50, 0.46);
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 0.82rem;
  }

  .question-title {
    font-size: 0.96rem;
    font-weight: 600;
    line-height: 1.5;
  }

  .question-state {
    color: var(--pension-burgundy);
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.55rem;
    font-weight: 400;
    line-height: 1;
    text-align: right;
  }

  @media (max-width: 600px) {
    > button {
      min-height: 76px;
      grid-template-columns: 31px minmax(0, 1fr) 24px;
      gap: 12px;
    }

    .question-title {
      font-size: 0.9rem;
    }
  }
`

export const AccordionContent = styled.div`
  display: grid;
  animation: reveal-answer 220ms ease;

  @keyframes reveal-answer {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  > div {
    min-height: 0;
    overflow: hidden;
  }

  p {
    max-width: 700px;
    padding: 0 45px 27px 55px;
    color: #655d59;
    font-size: 0.9rem;
    line-height: 1.75;
  }

  @media (max-width: 600px) {
    p {
      padding-right: 32px;
      padding-left: 43px;
      font-size: 0.87rem;
    }
  }
`

export const ContactSection = styled.section`
  position: relative;
  padding: clamp(60px, 5.8vw, 78px) 24px;
  overflow: hidden;
  scroll-margin-top: 88px;
  background: var(--pension-burgundy);
  color: #fff;

  &::before {
    position: absolute;
    top: 0;
    left: 50%;
    width: min(78%, 980px);
    height: 1px;
    background: rgba(216, 185, 120, 0.62);
    content: '';
    transform: translateX(-50%);
  }

  > div {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .eyebrow {
    color: #d8b978;
  }

  h2 {
    margin-top: 16px;
    color: #fff9f5;
    font-size: clamp(3rem, 5vw, 5.2rem);
    letter-spacing: -0.04em;
    line-height: 1;
  }

  p {
    max-width: 650px;
    margin: 27px auto 0;
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.75;
  }

  ${WhatsButton} {
    border-color: rgba(255, 255, 255, 0.25);
    background: #fffaf6;
    box-shadow: none;
    color: var(--pension-burgundy);

    &:hover {
      background: #fff;
    }
  }

  .contact-microcopy {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 21px;
    color: rgba(255, 255, 255, 0.68);
    font-size: 0.68rem;
  }

  .contact-microcopy span + span::before {
    margin: 0 10px;
    color: #d8b978;
    content: '•';
  }

  @media (max-width: 760px) {
    padding: 50px 20px 56px;
    scroll-margin-top: 66px;

    h2 {
      font-size: clamp(2.7rem, 12vw, 3.7rem);
    }

    p {
      font-size: 0.94rem;
    }
  }

  @media (max-width: 430px) {
    .contact-microcopy {
      align-items: center;
      flex-direction: column;
      gap: 3px;
    }

    .contact-microcopy span + span::before {
      display: none;
    }
  }
`
