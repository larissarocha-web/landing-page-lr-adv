import styled from 'styled-components'

export const Page = styled.main`
  --pension-burgundy: #741c32;
  --pension-burgundy-dark: #5f1529;
  --pension-gold: #bd8c39;
  --pension-ink: #302b29;
  --pension-muted: #69615d;
  --pension-line: rgba(116, 28, 50, 0.15);
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

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
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
    flex: 0 0 auto;
    font-size: 1.18rem;
  }

  @media (max-width: 520px) {
    width: 100%;
    min-height: 52px;
    padding: 0 16px;
    font-size: 0.69rem;
  }
`

export const HeroSection = styled.section`
  margin-top: 88px;
  border-bottom: 1px solid var(--pension-line);
  scroll-margin-top: 88px;
  background: var(--pension-ivory);

  .hero-stage {
    position: relative;
    isolation: isolate;
    display: grid;
    width: min(100%, 1760px);
    min-height: clamp(610px, 45vw, 700px);
    grid-template-rows: 1fr auto;
    margin: 0 auto;
    overflow: hidden;
    background: var(--pension-ivory);
  }

  .hero-media {
    position: absolute;
    z-index: -2;
    inset: 0;
    overflow: hidden;
    background: #e8ddd5;
  }

  .hero-media img {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    max-width: none;
    height: 100%;
    object-fit: contain;
  }

  .hero-media::after {
    position: absolute;
    z-index: 1;
    inset: 0;
    background: linear-gradient(
      90deg,
      var(--pension-ivory) 0%,
      var(--pension-ivory) 27%,
      rgba(251, 250, 248, 0.97) 35%,
      rgba(251, 250, 248, 0.78) 44%,
      rgba(251, 250, 248, 0.33) 53%,
      rgba(251, 250, 248, 0) 63%
    );
    content: '';
    pointer-events: none;
  }

  .hero-copy,
  .trust-line {
    z-index: 2;
    width: min(47vw, 650px);
    margin-left: clamp(44px, 6.8vw, 132px);
  }

  .hero-copy {
    align-self: end;
    padding-bottom: 38px;
  }

  .hero-actions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 18px 24px;
    margin-top: 30px;
  }

  .hero-actions ${WhatsButton} {
    margin-top: 0;
  }

  .hero-home-link {
    display: inline-flex;
    min-height: 44px;
    align-items: center;
    gap: 8px;
    color: var(--pension-burgundy);
    font-size: 0.69rem;
    font-weight: 700;
    letter-spacing: 0.035em;
    line-height: 1.35;
    text-decoration: none;
    text-transform: uppercase;

    svg {
      flex: 0 0 auto;
      transition: transform 180ms ease;
    }

    &:hover svg,
    &:focus-visible svg {
      transform: translateX(4px);
    }

    &:focus-visible {
      border-radius: 4px;
      outline: 2px solid var(--pension-gold);
      outline-offset: 5px;
    }
  }

  .eyebrow {
    display: block;
  }

  h1 {
    max-width: 650px;
    margin-top: 16px;
    color: var(--pension-burgundy);
    font-size: clamp(3.45rem, 4.75vw, 4.8rem);
    letter-spacing: -0.05em;
    line-height: 0.98;
  }

  .trust-line {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-self: start;
    padding: 0 0 54px;
    color: var(--pension-muted);
    font-size: 0.68rem;
    line-height: 1.6;
  }

  .trust-line span + span::before {
    margin: 0 10px;
    color: var(--pension-gold);
    content: '•';
  }

  @media (max-width: 1180px) {
    .hero-copy,
    .trust-line {
      width: min(49vw, 580px);
      margin-left: 42px;
    }

    h1 {
      font-size: clamp(3.15rem, 5.15vw, 4rem);
    }
  }

  @media (max-width: 860px) {
    margin-top: 66px;
    scroll-margin-top: 66px;

    .hero-stage {
      display: flex;
      min-height: 0;
      flex-direction: column;
      overflow: visible;
    }

    .hero-copy {
      order: 1;
      width: 100%;
      margin: 0;
      padding: 36px 20px 30px;
    }

    h1 {
      max-width: 620px;
      margin-top: 14px;
      font-size: clamp(2.7rem, 11.7vw, 3.55rem);
      line-height: 0.99;
    }

    .hero-actions {
      align-items: flex-start;
      flex-direction: column;
      gap: 12px;
      margin-top: 26px;
    }

    .hero-home-link {
      min-height: 42px;
    }

    .hero-media {
      position: relative;
      order: 2;
      width: 100%;
      overflow: hidden;
      background: #e8ddd5;
    }

    .hero-media img {
      position: relative;
      display: block;
      width: 100%;
      max-width: 100%;
      height: auto;
      object-fit: initial;
    }

    .hero-media::after {
      background: linear-gradient(
        180deg,
        transparent 68%,
        rgba(251, 250, 248, 0.18) 78%,
        rgba(251, 250, 248, 0.82) 94%,
        var(--pension-ivory) 100%
      );
    }

    .trust-line {
      z-index: 1;
      order: 3;
      width: 100%;
      justify-content: center;
      margin: 0;
      padding: 10px 20px 28px;
      font-size: 0.64rem;
      text-align: center;
    }
  }

  @media (max-width: 430px) {
    .hero-copy {
      padding-top: 30px;
      padding-bottom: 26px;
    }

    h1 {
      font-size: clamp(2.55rem, 12.5vw, 3.15rem);
    }

    .hero-home-link {
      width: 100%;
      justify-content: center;
      text-align: center;
    }

    .trust-line span:first-child {
      width: 100%;
      margin-bottom: 1px;
    }

    .trust-line span:nth-child(2)::before {
      display: none;
    }
  }

  @media (max-width: 350px) {
    h1 {
      font-size: 2.45rem;
    }

    .trust-line {
      font-size: 0.59rem;
    }

    .trust-line span + span::before {
      margin: 0 6px;
    }
  }
`

export const PrincipleSection = styled.section`
  padding: clamp(60px, 5vw, 72px) 24px;
  border-bottom: 1px solid var(--pension-line);
  background: #fff;

  .principle-layout {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .eyebrow {
    display: block;
  }

  h2 {
    margin-top: 13px;
    color: var(--pension-burgundy);
    font-size: clamp(2.8rem, 4.15vw, 4.15rem);
    letter-spacing: -0.043em;
    line-height: 1;
  }

  .gold-line {
    display: block;
    width: 42px;
    height: 2px;
    margin: 25px auto 0;
    background: var(--pension-gold);
  }

  p {
    max-width: 760px;
    margin: 23px auto 0;
    color: var(--pension-muted);
    font-size: clamp(0.98rem, 1.2vw, 1.08rem);
    line-height: 1.75;
  }

  @media (max-width: 760px) {
    padding: 44px 20px 48px;

    h2 {
      font-size: clamp(2.35rem, 10.8vw, 3.15rem);
    }

    .gold-line {
      margin-top: 20px;
    }

    p {
      margin-top: 19px;
      font-size: 0.94rem;
      line-height: 1.68;
    }
  }
`

export const SituationsSection = styled.section`
  padding: clamp(64px, 5.3vw, 74px) 32px clamp(68px, 5.8vw, 82px);
  scroll-margin-top: 88px;
  background: #f5efeb;

  .section-heading,
  .situation-grid {
    width: min(100%, 1180px);
    margin-right: auto;
    margin-left: auto;
  }

  .section-heading {
    max-width: 790px;
    margin-bottom: 38px;
    text-align: center;
  }

  .section-heading h2 {
    max-width: 760px;
    margin: 12px auto 0;
    color: var(--pension-burgundy);
    font-size: clamp(2.8rem, 4.35vw, 4.25rem);
    letter-spacing: -0.04em;
    line-height: 1.02;
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
    min-height: 232px;
    flex-direction: column;
    padding: 28px 26px;
    overflow: hidden;
    border: 1px solid #e5d6cf;
    border-radius: 10px;
    background: linear-gradient(145deg, #fff 0%, #fcf8f5 100%);
    text-align: left;
    transition:
      border-color 180ms ease,
      box-shadow 180ms ease,
      transform 180ms ease;

    &::before {
      position: absolute;
      top: 0;
      left: 26px;
      width: 36px;
      height: 2px;
      background: var(--pension-gold);
      content: '';
    }

    &:hover {
      border-color: #d9c3ba;
      box-shadow: 0 16px 38px rgba(78, 46, 40, 0.075);
      transform: translateY(-3px);
    }
  }

  .situation-icon {
    display: grid;
    width: 46px;
    height: 46px;
    flex: 0 0 auto;
    place-items: center;
    border: 1px solid #e3cbc3;
    border-radius: 50%;
    background: #fff;
    color: #9b4052;

    svg {
      font-size: 1.42rem;
      stroke-width: 1.45;
    }
  }

  h3 {
    margin-top: 21px;
    color: var(--pension-burgundy);
    font-size: clamp(1.28rem, 1.48vw, 1.52rem);
    font-weight: 500;
    letter-spacing: -0.025em;
    line-height: 1.2;
  }

  li p {
    margin-top: 10px;
    color: #655d59;
    font-size: 0.85rem;
    line-height: 1.62;
  }

  @media (max-width: 1040px) {
    .situation-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    padding: 46px 20px 50px;
    scroll-margin-top: 66px;

    .section-heading {
      margin-bottom: 28px;
      text-align: left;
    }

    .section-heading h2 {
      margin-right: 0;
      margin-left: 0;
      font-size: clamp(2.4rem, 10.7vw, 3.25rem);
    }

    .situation-grid {
      grid-template-columns: 1fr;
      gap: 11px;
    }

    li {
      display: grid;
      min-height: 0;
      align-items: start;
      grid-template-columns: 44px minmax(0, 1fr);
      gap: 15px;
      padding: 19px;

      &::before {
        display: none;
      }

      &:hover {
        box-shadow: none;
        transform: none;
      }
    }

    .situation-icon {
      width: 44px;
      height: 44px;

      svg {
        font-size: 1.26rem;
      }
    }

    h3 {
      margin-top: 0;
      font-size: 1.19rem;
      line-height: 1.25;
    }

    li p {
      margin-top: 6px;
      font-size: 0.83rem;
      line-height: 1.55;
    }
  }
`

export const FaqSection = styled.section`
  padding: clamp(62px, 5.3vw, 74px) 24px clamp(66px, 5.8vw, 82px);
  border-top: 1px solid var(--pension-line);
  scroll-margin-top: 88px;
  background: #fff;

  .faq-shell {
    width: min(100%, 1000px);
    margin: 0 auto;
  }

  .faq-heading {
    max-width: 780px;
    margin: 0 auto 36px;
    text-align: center;
  }

  .faq-heading h2 {
    margin-top: 12px;
    color: var(--pension-burgundy);
    font-size: clamp(2.75rem, 4.2vw, 4.15rem);
    letter-spacing: -0.04em;
    line-height: 1.02;
  }

  .faq-list {
    display: grid;
    gap: 9px;
  }

  .faq-note {
    margin-top: 20px;
    color: #766c67;
    font-size: 0.72rem;
    line-height: 1.6;
    text-align: center;
  }

  @media (max-width: 760px) {
    padding: 46px 20px 50px;
    scroll-margin-top: 66px;

    .faq-heading {
      margin-bottom: 28px;
      text-align: left;
    }

    .faq-heading h2 {
      font-size: clamp(2.4rem, 10.7vw, 3.25rem);
    }

    .faq-note {
      text-align: left;
    }
  }
`

export const AccordionItem = styled.div`
  overflow: hidden;
  border: 1px solid #e3d5cf;
  border-radius: 8px;
  background: #fcfaf8;
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease;

  &[data-open='true'] {
    border-color: #d3bbb2;
    box-shadow: 0 10px 26px rgba(78, 46, 40, 0.05);
  }

  > button {
    display: grid;
    width: 100%;
    min-height: 70px;
    align-items: center;
    grid-template-columns: minmax(0, 1fr) 34px;
    gap: 20px;
    padding: 16px 20px 16px 23px;
    border: 0;
    background: transparent;
    color: #332d2a;
    cursor: pointer;
    text-align: left;
  }

  > button:focus-visible {
    outline: 2px solid var(--pension-gold);
    outline-offset: -3px;
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
      min-height: 66px;
      gap: 14px;
      padding: 14px 13px 14px 16px;
    }

    .question-title {
      font-size: 0.88rem;
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
    max-width: 820px;
    padding: 0 64px 21px 23px;
    color: #655d59;
    font-size: 0.89rem;
    line-height: 1.7;
  }

  @media (max-width: 600px) {
    p {
      padding: 0 16px 19px;
      font-size: 0.85rem;
      line-height: 1.66;
    }
  }
`

export const ContactSection = styled.section`
  position: relative;
  padding: clamp(60px, 5vw, 72px) 24px;
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
    margin-top: 14px;
    color: #fff9f5;
    font-size: clamp(2.8rem, 4.3vw, 4.25rem);
    letter-spacing: -0.04em;
    line-height: 1;
  }

  p {
    max-width: 650px;
    margin: 22px auto 0;
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.7;
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
    padding: 46px 20px 50px;
    scroll-margin-top: 66px;

    h2 {
      font-size: clamp(2.55rem, 11.5vw, 3.45rem);
    }

    p {
      font-size: 0.93rem;
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
