import styled from 'styled-components'

export const Container = styled.section`
  padding: 96px 24px 104px;
  scroll-margin-top: 88px;
  background: #fff;

  @media (max-width: 760px) {
    padding: 66px 20px 70px;
    scroll-margin-top: 66px;
  }
`

export const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
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

  > h2 {
    max-width: 760px;
    margin: 0 auto 18px;
    font-size: clamp(2.55rem, 4vw, 4.2rem);
    line-height: 1.06;
  }

  .intro {
    max-width: 660px;
    margin: 0 auto 50px;
    color: #5a5552;
    line-height: 1.7;
  }

  @media (max-width: 760px) {
    text-align: left;

    > h2 {
      margin-bottom: 16px;
      font-size: clamp(2.35rem, 10.5vw, 3.25rem);
      letter-spacing: -0.025em;
    }

    .intro {
      margin-bottom: 34px;
      font-size: 0.96rem;
      line-height: 1.65;
    }
  }
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  article {
    position: relative;
    min-height: 238px;
    overflow: hidden;
    border: 1px solid #eadfda;
    border-radius: 8px;
    background: linear-gradient(145deg, #fff, #fbf7f4);
    text-align: left;
    transition:
      transform 200ms ease,
      box-shadow 200ms ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 18px 44px rgba(78, 46, 40, 0.08);
    }
  }

  button {
    display: grid;
    width: 100%;
    align-items: start;
    grid-template-columns: 1fr auto;
    padding: 36px 32px 14px;
    border: 0;
    background: transparent;
    color: #7d263a;
    cursor: default;
    text-align: left;
  }

  button > svg:first-child {
    margin-bottom: 25px;
    color: #9b4052;
    font-size: 2rem;
    stroke-width: 1.25;
  }

  h3 {
    grid-column: 1 / -1;
    font-size: 1.55rem;
    line-height: 1.2;
  }

  .chevron {
    display: none;
  }

  .area-content {
    padding: 0 32px 34px;
  }

  p {
    max-width: 290px;
    color: #5a5552;
    font-size: 0.88rem;
    line-height: 1.65;
  }

  .area-link {
    display: flex;
    width: fit-content;
    align-items: center;
    gap: 7px;
    margin-top: 15px;
    color: #8c3044;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.025em;
    line-height: 1.45;
    text-decoration: none;
    text-transform: uppercase;

    &:hover,
    &:focus-visible {
      color: #641d30;
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 760px) {
    display: block;
    border-top: 1px solid #ded2cc;

    article {
      min-height: 0;
      border: 0;
      border-bottom: 1px solid #ded2cc;
      border-radius: 0;
      background: transparent;

      &:hover {
        transform: none;
        box-shadow: none;
      }
    }

    button {
      min-height: 60px;
      align-items: center;
      grid-template-columns: 28px 1fr 24px;
      gap: 12px;
      padding: 12px 2px;
      cursor: pointer;
    }

    button > svg:first-child {
      margin: 0;
      font-size: 1.35rem;
    }

    h3 {
      grid-column: auto;
      color: #312c29;
      font-family: 'Inter', sans-serif;
      font-size: 0.91rem;
      font-weight: 600;
    }

    .chevron {
      display: block;
      color: #9b4052;
      transition: transform 200ms ease;
    }

    article[data-open='true'] .chevron {
      transform: rotate(180deg);
    }

    .area-content {
      display: grid;
      grid-template-rows: 0fr;
      padding: 0 40px;
      opacity: 0;
      transition:
        grid-template-rows 220ms ease,
        padding 220ms ease,
        opacity 180ms ease;
    }

    .area-content p {
      min-height: 0;
      overflow: hidden;
    }

    article[data-open='true'] .area-content {
      grid-template-rows: 1fr;
      padding-bottom: 20px;
      opacity: 1;
    }

    p {
      max-width: none;
      font-size: 0.88rem;
    }
  }
`
