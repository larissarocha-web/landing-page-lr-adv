import styled from 'styled-components'

export const Container = styled.section`
  padding: 92px 24px 0;
  background:
    linear-gradient(90deg, rgba(201, 169, 106, 0.05) 1px, transparent 1px),
    #f8f5f2;
  background-size: 80px 80px;

  @media (max-width: 900px) {
    padding: 64px 20px 0;
  }
`

export const Wrapper = styled.div`
  display: grid;
  max-width: 1180px;
  align-items: center;
  grid-template-columns: 1.05fr 1fr;
  gap: clamp(46px, 7vw, 104px);
  margin: 0 auto;

  .photo {
    position: relative;
    min-height: 600px;
    overflow: hidden;
    box-shadow: 0 26px 65px rgba(68, 42, 37, 0.14);

    &::after {
      position: absolute;
      inset: 0;
      border: 1px solid rgba(255, 255, 255, 0.55);
      content: '';
      pointer-events: none;
    }
  }

  .photo img {
    width: 100%;
    height: 100%;
    min-height: 600px;
    object-fit: cover;
    object-position: 48% center;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 42px;

    .photo,
    .photo img {
      min-height: 450px;
    }
  }

  @media (max-width: 520px) {
    .photo,
    .photo img {
      min-height: 350px;
    }
  }
`

export const Content = styled.div`
  padding: 32px 0;

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
    max-width: 590px;
    font-size: clamp(2.7rem, 4.5vw, 5rem);
    letter-spacing: -0.025em;
    line-height: 1.02;
  }

  .gold-line {
    display: block;
    width: 38px;
    height: 2px;
    margin: 25px 0;
    background: #c9a96a;
  }

  p {
    max-width: 610px;
    margin-bottom: 16px;
    color: #5a5552;
    line-height: 1.75;
  }

  .text-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 16px;
    color: #342d2a;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-decoration: none;
    text-transform: uppercase;

    svg {
      color: #9b4052;
      transition: transform 180ms ease;
    }

    &:hover svg {
      transform: translateX(4px);
    }
  }
`

export const Cards = styled.div`
  display: grid;
  max-width: 1180px;
  grid-template-columns: repeat(3, 1fr);
  margin: 82px auto 0;
  border-top: 1px solid #dfd2cb;

  article {
    display: grid;
    min-height: 178px;
    align-items: start;
    grid-template-columns: 42px 1fr;
    gap: 18px;
    padding: 42px 34px;
    border-right: 1px solid #dfd2cb;
    background: rgba(255, 255, 255, 0.48);

    &:last-child {
      border-right: 0;
    }

    > svg {
      color: #9b4052;
      font-size: 1.85rem;
      stroke-width: 1.25;
    }

    h3 {
      margin-bottom: 8px;
      color: #332d2a;
      font-family: 'Inter', sans-serif;
      font-size: 0.9rem;
      font-weight: 700;
      letter-spacing: 0.035em;
      text-transform: uppercase;
    }

    p {
      color: #5a5552;
      font-size: 0.84rem;
      line-height: 1.6;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    article {
      border-right: 0;
      border-bottom: 1px solid #dfd2cb;

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`
