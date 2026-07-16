import styled from 'styled-components'

export const Container = styled.section`
  padding: 106px 24px 0;
  background: #f8f5f2;

  @media (max-width: 720px) {
    padding: 76px 20px 0;
  }
`

export const Wrapper = styled.div`
  display: grid;
  max-width: 1120px;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(48px, 8vw, 110px);
  margin: 0 auto 104px;

  .eyebrow {
    display: block;
    margin-bottom: 12px;
    color: #a77b2a;
    font-size: 0.76rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .faq-heading h2 {
    margin-bottom: 22px;
    font-size: clamp(2.5rem, 4.4vw, 4.7rem);
    letter-spacing: -0.025em;
    line-height: 1.04;
  }

  .faq-heading p {
    max-width: 440px;
    color: #5a5552;
    line-height: 1.75;
  }

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 74px;
  }
`

export const AccordionContainer = styled.div`
  border-top: 1px solid #d9ccc5;
`

export const AccordionItem = styled.div`
  border-bottom: 1px solid #d9ccc5;
`

export const AccordionTitle = styled.button`
  display: flex;
  width: 100%;
  min-height: 78px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 0;
  border: 0;
  background: transparent;
  color: #332d2a;
  cursor: pointer;
  font-size: 0.96rem;
  font-weight: 600;
  text-align: left;

  svg {
    flex: 0 0 auto;
    color: #9b4052;
    font-size: 1.3rem;
    transition: transform 220ms ease;
  }

  &[aria-expanded='true'] svg {
    transform: rotate(180deg);
  }
`

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${(props) => (props.isOpen ? '1fr' : '0fr')};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: grid-template-rows 240ms ease, opacity 180ms ease;

  p {
    min-height: 0;
    overflow: hidden;
    padding: ${(props) => (props.isOpen ? '0 44px 24px 0' : '0 44px 0 0')};
    color: #655d59;
    font-size: 0.92rem;
    line-height: 1.7;
    transition: padding 240ms ease;
  }
`

export const DepoimentosWrapper = styled.div`
  margin: 0 -24px;
  padding: 90px max(24px, calc((100vw - 1180px) / 2));
  background:
    radial-gradient(circle at 12% 20%, rgba(201, 169, 106, 0.19), transparent 27%),
    #641d30;
  text-align: center;

  > .eyebrow {
    display: block;
    margin-bottom: 12px;
    color: #d8b978;
    font-size: 0.76rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  > h2 {
    max-width: 760px;
    margin: 0 auto 48px;
    color: #fff8f3;
    font-size: clamp(2.35rem, 4vw, 4.2rem);
    line-height: 1.08;
  }

  @media (max-width: 720px) {
    margin: 0 -20px;
    padding: 72px 20px;
  }
`

export const Depoimentos = styled.div`
  display: grid;
  max-width: 1180px;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 0 auto;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.article`
  min-height: 250px;
  padding: 36px 32px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.07);
  color: #fff;
  text-align: left;
  backdrop-filter: blur(8px);

  > svg {
    margin-bottom: 28px;
    color: #d8b978;
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 24px;
    color: #fffaf6;
    font-family: 'Playfair Display', serif;
    font-size: 1.32rem;
    line-height: 1.55;
  }

  span {
    color: rgba(255, 255, 255, 0.68);
    font-size: 0.73rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`
