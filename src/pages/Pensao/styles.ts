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

  .section-index {
    display: block;
    margin-bottom: 14px;
    color: rgba(116, 28, 50, 0.42);
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.05rem;
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
  min-height: min(640px, calc(100svh - 88px));
  margin-top: 88px;
  padding: clamp(68px, 6.5vw, 96px) 32px clamp(64px, 6vw, 88px);
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
    padding-top: 25px;
    border-top: 1px solid rgba(189, 140, 57, 0.65);
  }

  .hero-context {
    padding-top: 19px;
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
    max-width: 880px;
    color: var(--pension-burgundy);
    font-size: clamp(4rem, 5.6vw, 6.1rem);
    letter-spacing: -0.052em;
    line-height: 0.96;
  }

  @media (max-width: 900px) {
    min-height: auto;
    padding: 62px 22px 68px;

    .hero-layout {
      grid-template-columns: 1fr;
      gap: 28px;
    }

    .hero-context {
      padding-top: 14px;
    }

    .hero-copy h1 {
      font-size: clamp(3.2rem, 10.5vw, 5.4rem);
      line-height: 0.97;
    }

    .trust-line {
      margin-top: 28px;
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
    padding: 54px 20px 62px;

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
  padding: clamp(72px, 7vw, 96px) 32px;

  .principle-layout {
    display: grid;
    width: min(100%, 1120px);
    grid-template-columns: minmax(80px, 0.25fr) minmax(0, 1fr);
    gap: clamp(34px, 7vw, 110px);
    margin: 0 auto;
  }

  h2 {
    max-width: 900px;
    margin-top: 18px;
    font-size: clamp(3.2rem, 5.6vw, 6rem);
    letter-spacing: -0.045em;
    line-height: 0.98;
  }

  p {
    max-width: 760px;
    margin-top: 30px;
    padding-left: 28px;
    border-left: 2px solid var(--pension-gold);
    color: #4e4743;
    font-size: clamp(1.08rem, 1.55vw, 1.35rem);
    line-height: 1.75;
  }

  @media (max-width: 760px) {
    padding: 62px 20px 66px;

    .principle-layout {
      grid-template-columns: 1fr;
      gap: 10px;
    }

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
  padding: clamp(72px, 7vw, 96px) 32px;
  scroll-margin-top: 88px;
  background: #f4eeea;

  .section-heading,
  ol {
    width: min(100%, 1120px);
    margin-right: auto;
    margin-left: auto;
  }

  .section-heading {
    display: grid;
    grid-template-columns: minmax(220px, 0.42fr) minmax(0, 1fr);
    gap: clamp(38px, 7vw, 110px);
    margin-bottom: 46px;
  }

  .section-heading h2 {
    max-width: 720px;
    font-size: clamp(3rem, 5vw, 5.15rem);
    letter-spacing: -0.04em;
    line-height: 1;
  }

  ol {
    padding: 0;
    border-top: 1px solid var(--pension-line);
    list-style: none;
  }

  li {
    display: grid;
    min-height: 72px;
    align-items: center;
    grid-template-columns: minmax(90px, 0.28fr) 1fr;
    border-bottom: 1px solid var(--pension-line);
  }

  li > span {
    color: rgba(116, 28, 50, 0.48);
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 0.9rem;
  }

  h3 {
    color: #3b3330;
    font-family: 'Inter', sans-serif;
    font-size: clamp(1rem, 1.45vw, 1.25rem);
    font-weight: 500;
    letter-spacing: -0.015em;
  }

  @media (max-width: 760px) {
    padding: 62px 20px 66px;
    scroll-margin-top: 66px;

    .section-heading {
      grid-template-columns: 1fr;
      gap: 21px;
      margin-bottom: 36px;
    }

    .section-heading h2 {
      font-size: clamp(2.65rem, 11.5vw, 3.55rem);
    }

    li {
      min-height: 66px;
      grid-template-columns: 52px 1fr;
      gap: 10px;
    }

    h3 {
      font-size: 0.97rem;
      line-height: 1.45;
    }
  }
`

export const FaqSection = styled.section`
  display: grid;
  grid-template-columns: minmax(260px, 0.55fr) minmax(0, 1fr);
  gap: clamp(48px, 6vw, 88px);
  padding: clamp(72px, 7vw, 96px) max(32px, calc((100vw - 1120px) / 2));
  border-top: 1px solid var(--pension-line);
  scroll-margin-top: 88px;
  background: var(--pension-ivory);

  .faq-heading h2 {
    margin-top: 21px;
    font-size: clamp(2.8rem, 4.3vw, 4.5rem);
    letter-spacing: -0.04em;
    line-height: 1.02;
  }

  .faq-heading > p {
    max-width: 390px;
    margin-top: 25px;
    color: var(--pension-muted);
    font-size: 0.93rem;
    line-height: 1.72;
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
    gap: 43px;
    padding: 62px 20px 66px;
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
  padding: clamp(72px, 7vw, 92px) 24px;
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
    padding: 62px 20px 66px;
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
