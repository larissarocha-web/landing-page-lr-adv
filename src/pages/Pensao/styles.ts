import styled from 'styled-components'

export const Page = styled.main`
  --pension-burgundy: #741c32;
  --pension-burgundy-dark: #5f1529;
  --pension-gold: #bd8c39;
  --pension-ink: #302b29;
  --pension-muted: #69615d;
  --pension-line: rgba(116, 28, 50, 0.16);
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
  margin-top: 30px;
  padding: 0 28px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: var(--pension-burgundy);
  box-shadow: 0 14px 30px rgba(116, 28, 50, 0.15);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.025em;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    background 180ms ease,
    box-shadow 180ms ease,
    transform 180ms ease;

  &:hover {
    background: #8c3044;
    box-shadow: 0 18px 36px rgba(116, 28, 50, 0.19);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid var(--pension-gold);
    outline-offset: 4px;
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
  padding: clamp(48px, 4.5vw, 66px) 24px clamp(52px, 5vw, 72px);
  border-bottom: 1px solid var(--pension-line);
  scroll-margin-top: 88px;
  background: radial-gradient(
      circle at 50% 2%,
      rgba(189, 140, 57, 0.1),
      transparent 34%
    ),
    radial-gradient(circle at 88% 30%, rgba(116, 28, 50, 0.06), transparent 27%),
    var(--pension-ivory);

  .hero-layout {
    width: min(100%, 1080px);
    margin: 0 auto;
    text-align: center;

    &::before {
      display: block;
      width: 72px;
      height: 1px;
      margin: 0 auto 28px;
      background: var(--pension-gold);
      content: '';
    }
  }

  .eyebrow {
    display: block;
  }

  h1 {
    max-width: 1040px;
    margin: 17px auto 0;
    color: var(--pension-burgundy);
    font-size: clamp(3.7rem, 5.25vw, 4.75rem);
    letter-spacing: -0.05em;
    line-height: 0.98;
  }

  .trust-line {
    display: flex;
    max-width: 760px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 25px auto 0;
    padding-top: 17px;
    border-top: 1px solid rgba(116, 28, 50, 0.12);
    color: var(--pension-muted);
    font-size: 0.69rem;
    line-height: 1.6;
  }

  .trust-line span + span::before {
    margin: 0 11px;
    color: var(--pension-gold);
    content: '•';
  }

  @media (max-width: 760px) {
    margin-top: 66px;
    padding: 38px 20px 44px;
    scroll-margin-top: 66px;

    .hero-layout::before {
      width: 52px;
      margin-bottom: 22px;
    }

    h1 {
      margin-top: 14px;
      font-size: clamp(2.75rem, 12vw, 3.55rem);
      line-height: 0.98;
    }

    ${WhatsButton} {
      margin-top: 26px;
    }

    .trust-line {
      margin-top: 20px;
      padding-top: 15px;
      font-size: 0.64rem;
    }
  }

  @media (max-width: 370px) {
    h1 {
      font-size: 2.72rem;
    }

    .trust-line {
      font-size: 0.59rem;
    }

    .trust-line span + span::before {
      margin: 0 4px;
    }
  }
`

export const PrincipleSection = styled.section`
  position: relative;
  padding: clamp(60px, 5.8vw, 78px) 32px;
  overflow: hidden;
  background: radial-gradient(
      circle at 92% 14%,
      rgba(255, 255, 255, 0.08),
      transparent 28%
    ),
    linear-gradient(135deg, var(--pension-burgundy-dark), #7d263a);
  color: #fff;

  .principle-layout {
    display: grid;
    width: min(100%, 1120px);
    align-items: center;
    grid-template-columns: minmax(0, 1.05fr) minmax(340px, 0.8fr);
    gap: clamp(48px, 7vw, 96px);
    margin: 0 auto;
  }

  .eyebrow {
    color: #dfc084;
  }

  h2 {
    max-width: 650px;
    margin-top: 14px;
    color: #fff9f5;
    font-size: clamp(3rem, 4.5vw, 4.6rem);
    letter-spacing: -0.043em;
    line-height: 1;
  }

  .principle-copy {
    padding-left: 30px;
    border-left: 2px solid #d8b978;
  }

  p {
    max-width: 520px;
    color: rgba(255, 255, 255, 0.82);
    font-size: clamp(1rem, 1.25vw, 1.13rem);
    line-height: 1.78;
  }

  @media (max-width: 840px) {
    padding: 50px 20px 54px;

    .principle-layout {
      grid-template-columns: 1fr;
      gap: 27px;
    }

    h2 {
      font-size: clamp(2.65rem, 11.5vw, 3.55rem);
    }

    .principle-copy {
      padding-left: 20px;
    }

    p {
      font-size: 0.96rem;
      line-height: 1.72;
    }
  }
`

export const SituationsSection = styled.section`
  padding: clamp(66px, 6vw, 86px) 32px clamp(72px, 6.5vw, 94px);
  scroll-margin-top: 88px;
  background: #fff;

  .section-heading,
  .situation-grid {
    width: min(100%, 1180px);
    margin-right: auto;
    margin-left: auto;
  }

  .section-heading {
    max-width: 790px;
    margin-bottom: 44px;
    text-align: center;
  }

  .section-heading h2 {
    max-width: 760px;
    margin: 13px auto 0;
    font-size: clamp(3rem, 4.7vw, 4.7rem);
    letter-spacing: -0.04em;
    line-height: 1.02;
  }

  .situation-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    min-height: 248px;
    flex-direction: column;
    padding: 30px 28px;
    border: 1px solid #eadfda;
    border-radius: 10px;
    background: linear-gradient(145deg, #fff, #fbf7f4);
    text-align: left;
    transition:
      border-color 180ms ease,
      box-shadow 180ms ease,
      transform 180ms ease;

    &:hover {
      border-color: #ddcbc3;
      box-shadow: 0 18px 44px rgba(78, 46, 40, 0.08);
      transform: translateY(-4px);
    }
  }

  .situation-icon {
    display: grid;
    width: 48px;
    height: 48px;
    flex: 0 0 auto;
    place-items: center;
    border: 1px solid #e5cfc7;
    border-radius: 50%;
    background: #fff;
    color: #9b4052;

    svg {
      font-size: 1.48rem;
      stroke-width: 1.45;
    }
  }

  h3 {
    margin-top: 23px;
    color: var(--pension-burgundy);
    font-size: clamp(1.34rem, 1.55vw, 1.6rem);
    font-weight: 500;
    letter-spacing: -0.025em;
    line-height: 1.18;
  }

  li p {
    margin-top: 12px;
    color: #655d59;
    font-size: 0.87rem;
    line-height: 1.65;
  }

  @media (max-width: 1040px) {
    .situation-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    padding: 50px 20px 56px;
    scroll-margin-top: 66px;

    .section-heading {
      margin-bottom: 30px;
      text-align: left;
    }

    .section-heading h2 {
      margin-right: 0;
      margin-left: 0;
      font-size: clamp(2.6rem, 11.2vw, 3.5rem);
    }

    .situation-grid {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    li {
      display: grid;
      min-height: 0;
      align-items: start;
      grid-template-columns: 44px minmax(0, 1fr);
      gap: 16px;
      padding: 20px;

      &:hover {
        box-shadow: none;
        transform: none;
      }
    }

    .situation-icon {
      width: 44px;
      height: 44px;

      svg {
        font-size: 1.28rem;
      }
    }

    h3 {
      margin-top: 0;
      font-size: 1.22rem;
      line-height: 1.25;
    }

    li p {
      margin-top: 7px;
      font-size: 0.84rem;
      line-height: 1.58;
    }
  }
`

export const FaqSection = styled.section`
  padding: clamp(66px, 6vw, 84px) 24px clamp(72px, 6.5vw, 92px);
  border-top: 1px solid var(--pension-line);
  scroll-margin-top: 88px;
  background: #f4eeea;

  .faq-shell {
    width: min(100%, 980px);
    margin: 0 auto;
  }

  .faq-heading {
    max-width: 760px;
    margin: 0 auto 40px;
    text-align: center;
  }

  .faq-heading h2 {
    margin-top: 13px;
    font-size: clamp(2.9rem, 4.5vw, 4.4rem);
    letter-spacing: -0.04em;
    line-height: 1.02;
  }

  .faq-list {
    display: grid;
    gap: 10px;
  }

  .faq-note {
    margin-top: 22px;
    color: #766c67;
    font-size: 0.72rem;
    line-height: 1.6;
    text-align: center;
  }

  @media (max-width: 760px) {
    padding: 50px 20px 56px;
    scroll-margin-top: 66px;

    .faq-heading {
      margin-bottom: 30px;
      text-align: left;
    }

    .faq-heading h2 {
      font-size: clamp(2.6rem, 11.2vw, 3.5rem);
    }

    .faq-note {
      text-align: left;
    }
  }
`

export const AccordionItem = styled.div`
  overflow: hidden;
  border: 1px solid #dfd1ca;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.82);
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease;

  &[data-open='true'] {
    border-color: #d5bfb6;
    box-shadow: 0 12px 30px rgba(78, 46, 40, 0.055);
  }

  > button {
    display: grid;
    width: 100%;
    min-height: 72px;
    align-items: center;
    grid-template-columns: minmax(0, 1fr) 34px;
    gap: 20px;
    padding: 17px 20px 17px 23px;
    border: 0;
    background: transparent;
    color: #332d2a;
    cursor: pointer;
    text-align: left;
  }

  .question-title {
    font-size: 0.95rem;
    font-weight: 600;
    line-height: 1.45;
  }

  .question-state {
    display: grid;
    width: 32px;
    height: 32px;
    place-items: center;
    border: 1px solid #decac2;
    border-radius: 50%;
    color: var(--pension-burgundy);
  }

  .question-state svg {
    font-size: 1rem;
    transition: transform 200ms ease;
  }

  &[data-open='true'] .question-state svg {
    transform: rotate(180deg);
  }

  @media (max-width: 600px) {
    > button {
      min-height: 68px;
      gap: 14px;
      padding: 15px 14px 15px 17px;
    }

    .question-title {
      font-size: 0.89rem;
    }

    .question-state {
      width: 30px;
      height: 30px;
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
    max-width: 790px;
    padding: 0 64px 22px 23px;
    color: #655d59;
    font-size: 0.89rem;
    line-height: 1.72;
  }

  @media (max-width: 600px) {
    p {
      padding: 0 17px 20px;
      font-size: 0.86rem;
      line-height: 1.68;
    }
  }
`

export const ContactSection = styled.section`
  position: relative;
  padding: clamp(62px, 5.8vw, 80px) 24px;
  overflow: hidden;
  scroll-margin-top: 88px;
  background: radial-gradient(
      circle at 50% 0,
      rgba(255, 255, 255, 0.08),
      transparent 32%
    ),
    var(--pension-burgundy);
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
    margin-top: 15px;
    color: #fff9f5;
    font-size: clamp(3rem, 4.8vw, 4.9rem);
    letter-spacing: -0.04em;
    line-height: 1;
  }

  p {
    max-width: 650px;
    margin: 24px auto 0;
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.72;
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
    margin-top: 20px;
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
