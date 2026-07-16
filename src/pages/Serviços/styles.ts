import styled from 'styled-components'

export const Container = styled.section`
  padding: 90px 24px 100px;
  scroll-margin-top: 102px;
  background: radial-gradient(
      circle at 100% 0,
      rgba(201, 169, 106, 0.1),
      transparent 27%
    ),
    #fff;

  @media (max-width: 720px) {
    padding: 68px 0 74px;
    scroll-margin-top: 70px;
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
    font-size: 0.76rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 1040px;
    margin: 0 auto 18px;
    font-size: clamp(2.35rem, 3.55vw, 3.8rem);
    line-height: 1.06;
  }

  .intro {
    max-width: 660px;
    margin: 0 auto 52px;
    color: #5a5552;
    line-height: 1.7;
  }

  @media (max-width: 720px) {
    text-align: left;

    > .eyebrow,
    > h2,
    > .intro {
      margin-right: 20px;
      margin-left: 20px;
    }

    h2 {
      max-width: 590px;
      font-size: clamp(2.15rem, 10.5vw, 3.15rem);
      letter-spacing: -0.025em;
    }

    .intro {
      margin-bottom: 36px;
      font-size: 0.92rem;
      line-height: 1.65;
    }
  }
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 900px) {
    display: flex;
    gap: 16px;
    padding: 2px 20px 20px;
    overflow-x: auto;
    scroll-padding-inline: 20px;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    article {
      flex: 0 0 min(78vw, 410px);
      scroll-snap-align: start;
    }
  }

  article {
    position: relative;
    min-height: 330px;
    overflow: hidden;
    padding: 46px 38px 40px;
    border: 1px solid #eadfda;
    border-radius: 2px;
    background: linear-gradient(145deg, #fff, #f9f5f2);
    text-align: left;
    transition:
      transform 220ms ease,
      box-shadow 220ms ease,
      border-color 220ms ease;

    &::after {
      position: absolute;
      right: -50px;
      bottom: -62px;
      width: 160px;
      height: 160px;
      border: 1px solid rgba(201, 169, 106, 0.22);
      border-radius: 50%;
      content: '';
    }

    &:hover {
      transform: translateY(-6px);
      border-color: rgba(155, 64, 82, 0.3);
      box-shadow: 0 22px 50px rgba(78, 46, 40, 0.1);
    }

    .number {
      position: absolute;
      top: 24px;
      right: 26px;
      color: rgba(125, 38, 58, 0.14);
      font-family: 'Playfair Display', serif;
      font-size: 3.4rem;
    }

    > svg {
      margin-bottom: 34px;
      color: #9b4052;
      font-size: 2.25rem;
      stroke-width: 1.25;
    }

    h3 {
      margin-bottom: 14px;
      color: #7d263a;
      font-size: 1.75rem;
      line-height: 1.2;
    }

    p {
      max-width: 290px;
      color: #5a5552;
      font-size: 0.92rem;
      line-height: 1.7;
    }

    @media (max-width: 500px) {
      flex: 0 0 min(84vw, 340px);
      min-height: 300px;
      padding: 38px 28px 32px;
      border-radius: 12px;
      box-shadow: 0 15px 34px rgba(78, 46, 40, 0.07);
    }
  }
`
