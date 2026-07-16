import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  padding: 82px 24px 86px;
  overflow: hidden;
  scroll-margin-top: 88px;
  background: radial-gradient(
      circle at 10% 50%,
      rgba(216, 185, 120, 0.11),
      transparent 27%
    ),
    linear-gradient(135deg, #641d30, #8d3045);
  color: #fff;

  &::before,
  &::after {
    position: absolute;
    width: 220px;
    height: 310px;
    border: 1px solid rgba(216, 185, 120, 0.22);
    border-radius: 75% 25% 70% 30%;
    content: '';
    pointer-events: none;
  }

  &::before {
    bottom: -160px;
    left: -70px;
    transform: rotate(28deg);
  }

  &::after {
    right: -70px;
    bottom: -150px;
    transform: rotate(-28deg);
  }

  @media (max-width: 760px) {
    padding: 66px 20px 70px;
    scroll-margin-top: 66px;
  }
`

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;

  .eyebrow {
    display: block;
    margin-bottom: 12px;
    color: #d8b978;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h2 {
    margin-bottom: 17px;
    color: #fff8f3;
    font-size: clamp(2.5rem, 4vw, 4rem);
    line-height: 1.06;
  }

  > p {
    margin-bottom: 28px;
    color: rgba(255, 255, 255, 0.82);
  }

  > a {
    display: inline-flex;
    min-height: 52px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 26px;
    border-radius: 7px;
    background: #fffaf6;
    color: #741c32;
    font-size: 0.75rem;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
  }

  .microcopy {
    display: flex;
    justify-content: center;
    margin-top: 19px;
    color: rgba(255, 255, 255, 0.68);
    font-size: 0.68rem;
  }

  .microcopy span + span::before {
    margin: 0 10px;
    color: #d8b978;
    content: '•';
  }

  @media (max-width: 600px) {
    h2 {
      font-size: clamp(2.3rem, 10.5vw, 3.2rem);
    }

    > a {
      width: 100%;
    }

    .microcopy {
      align-items: center;
      flex-direction: column;
      gap: 4px;
    }

    .microcopy span + span::before {
      display: none;
    }
  }
`
