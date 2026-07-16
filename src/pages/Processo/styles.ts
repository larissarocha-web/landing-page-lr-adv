import styled from 'styled-components'

export const Container = styled.section`
  padding: 88px 24px 94px;
  scroll-margin-top: 88px;
  background: radial-gradient(
      circle at 12% 10%,
      rgba(201, 169, 106, 0.11),
      transparent 27%
    ),
    #f7efeb;

  @media (max-width: 760px) {
    padding: 64px 20px 68px;
    scroll-margin-top: 66px;
  }
`

export const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  text-align: center;

  > .eyebrow {
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
    margin: 0 auto 52px;
    font-size: clamp(2.45rem, 3.8vw, 4rem);
    line-height: 1.06;
  }

  > a {
    display: inline-flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 44px;
    padding: 0 26px;
    border: 1px solid #c9a96a;
    border-radius: 6px;
    color: #741c32;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-decoration: none;
    text-transform: uppercase;
  }

  @media (max-width: 760px) {
    text-align: left;

    > h2 {
      margin-bottom: 38px;
      font-size: clamp(2.35rem, 10.5vw, 3.2rem);
    }

    > a {
      width: 100%;
      margin-top: 30px;
    }
  }
`

export const Steps = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;

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

      & + article {
        margin-top: 34px;
      }
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
