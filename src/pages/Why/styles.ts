import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  padding: 0 24px;
  overflow: hidden;
  scroll-margin-top: 102px;
  background: #fbfaf8;

  &::after {
    position: absolute;
    right: -55px;
    bottom: 70px;
    width: 250px;
    height: 360px;
    border: 2px solid rgba(193, 155, 108, 0.12);
    border-radius: 70% 20% 70% 20%;
    content: '';
    transform: rotate(-24deg);
    pointer-events: none;
  }

  @media (max-width: 900px) {
    padding: 0;
    scroll-margin-top: 70px;
  }
`

export const Wrapper = styled.div`
  display: grid;
  max-width: 1320px;
  min-height: 470px;
  align-items: stretch;
  grid-template-columns: 52% 48%;
  margin: 0 auto;

  .photo {
    position: relative;
    z-index: 0;
    min-height: 470px;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(
      90deg,
      #000 0%,
      #000 66%,
      rgba(0, 0, 0, 0.92) 73%,
      rgba(0, 0, 0, 0.62) 83%,
      rgba(0, 0, 0, 0.2) 94%,
      transparent 100%
    );
    mask-image: linear-gradient(
      90deg,
      #000 0%,
      #000 66%,
      rgba(0, 0, 0, 0.92) 73%,
      rgba(0, 0, 0, 0.62) 83%,
      rgba(0, 0, 0, 0.2) 94%,
      transparent 100%
    );
  }

  .photo img {
    width: 100%;
    height: 100%;
    min-height: 470px;
    object-fit: cover;
    object-position: 45% center;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    .photo {
      min-height: 410px;
      -webkit-mask-image: linear-gradient(
        180deg,
        #000 0%,
        #000 70%,
        rgba(0, 0, 0, 0.82) 80%,
        rgba(0, 0, 0, 0.25) 93%,
        transparent 100%
      );
      mask-image: linear-gradient(
        180deg,
        #000 0%,
        #000 70%,
        rgba(0, 0, 0, 0.82) 80%,
        rgba(0, 0, 0, 0.25) 93%,
        transparent 100%
      );
    }

    .photo img {
      min-height: 410px;
      object-position: 45% center;
    }
  }

  @media (max-width: 520px) {
    .photo,
    .photo img {
      min-height: 340px;
    }
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin-left: -8%;
  padding: 55px clamp(36px, 6vw, 92px);
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(251, 250, 248, 0.52) 8%,
    rgba(251, 250, 248, 0.9) 20%,
    #fbfaf8 35%,
    #fbfaf8 100%
  );

  .eyebrow {
    display: block;
    margin-bottom: 11px;
    color: #a77b2a;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 540px;
    color: #741c32;
    font-size: clamp(2.5rem, 3.65vw, 4rem);
    letter-spacing: -0.02em;
    line-height: 1.02;
  }

  .gold-line {
    display: block;
    width: 36px;
    height: 2px;
    margin: 20px 0;
    background: #bd8c39;
  }

  p {
    max-width: 590px;
    margin-bottom: 10px;
    color: #332f2d;
    font-size: 0.91rem;
    line-height: 1.62;
  }

  .text-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 18px;
    color: #741c32;
    font-size: 0.76rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-decoration: none;
    text-transform: uppercase;

    svg {
      transition: transform 180ms ease;
    }

    &:hover svg {
      transform: translateX(4px);
    }
  }

  @media (max-width: 900px) {
    margin-top: -70px;
    margin-left: 0;
    padding: 92px 24px 62px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(251, 250, 248, 0.72) 12%,
      #fbfaf8 29%,
      #fbfaf8 100%
    );

    h2 {
      font-size: clamp(2.45rem, 11.5vw, 3.7rem);
    }
  }
`

export const Cards = styled.div`
  display: grid;
  max-width: 1320px;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  border-top: 1px solid #dfd2cb;

  article {
    display: grid;
    min-height: 154px;
    align-items: start;
    grid-template-columns: 40px 1fr;
    gap: 17px;
    padding: 35px 32px;
    border-right: 1px solid #dfd2cb;
    background: rgba(255, 255, 255, 0.6);

    &:last-child {
      border-right: 0;
    }

    > svg {
      color: #8e2c42;
      font-size: 1.8rem;
      stroke-width: 1.2;
    }

    h3 {
      margin-bottom: 7px;
      color: #2d2826;
      font-family: 'Inter', sans-serif;
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }

    p {
      color: #514b47;
      font-size: 0.8rem;
      line-height: 1.55;
    }
  }

  @media (max-width: 900px) {
    display: flex;
    gap: 13px;
    padding: 0 20px 24px;
    overflow-x: auto;
    border-top: 0;
    scroll-padding-inline: 20px;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    article {
      flex: 0 0 min(83vw, 350px);
      min-height: 162px;
      border: 1px solid rgba(125, 38, 58, 0.1);
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.76);
      box-shadow: 0 12px 30px rgba(72, 43, 37, 0.055);
      scroll-snap-align: start;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
`
