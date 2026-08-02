import styled from 'styled-components'

export const Container = styled.section`
  padding: 94px 24px 102px;
  scroll-margin-top: 88px;
  background: #f8f5f2;

  @media (max-width: 760px) {
    padding: 66px 20px 72px;
    scroll-margin-top: 66px;
  }
`

export const Wrapper = styled.div`
  display: grid;
  max-width: 1120px;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(48px, 8vw, 105px);
  margin: 0 auto;

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
    font-size: clamp(2.55rem, 4.1vw, 4.4rem);
    letter-spacing: -0.025em;
    line-height: 1.04;
  }

  .faq-heading p {
    max-width: 440px;
    color: #5a5552;
    line-height: 1.72;
  }

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
    gap: 38px;

    .faq-heading h2 {
      font-size: clamp(2.35rem, 10.5vw, 3.3rem);
    }

    .faq-heading p {
      font-size: 0.96rem;
    }
  }
`

export const AccordionContainer = styled.div`
  border-top: 1px solid #d9ccc5;

  .faq-note {
    margin-top: 22px;
    color: #756c67;
    font-size: 0.74rem;
    line-height: 1.6;
  }
`

export const AccordionItem = styled.div`
  border-bottom: 1px solid #d9ccc5;
`

export const AccordionTitle = styled.button`
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

  svg {
    flex: 0 0 auto;
    color: #9b4052;
    font-size: 1.25rem;
    transition: transform 220ms ease;
  }

  &[aria-expanded='true'] svg {
    transform: rotate(180deg);
  }

  @media (max-width: 600px) {
    min-height: 64px;
    gap: 18px;
    font-size: 0.9rem;
    line-height: 1.4;
  }
`

export const AccordionContent = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${(props) => (props.$isOpen ? '1fr' : '0fr')};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transition:
    grid-template-rows 240ms ease,
    opacity 180ms ease;

  p {
    min-height: 0;
    overflow: hidden;
    padding: ${(props) => (props.$isOpen ? '0 44px 24px 0' : '0 44px 0 0')};
    color: #655d59;
    font-size: 0.9rem;
    line-height: 1.7;
    transition: padding 240ms ease;
  }

  @media (max-width: 600px) {
    p {
      padding: ${(props) => (props.$isOpen ? '0 34px 24px 0' : '0 34px 0 0')};
      font-size: 0.88rem;
      line-height: 1.72;
    }
  }
`
