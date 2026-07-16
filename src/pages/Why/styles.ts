import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  padding: 0 24px;
  overflow: hidden;
  scroll-margin-top: 88px;
  background: #fbfaf8;

  @media (max-width: 900px) {
    padding: 0;
    scroll-margin-top: 66px;
  }
`

export const Wrapper = styled.div`
  display: grid;
  max-width: 1320px;
  min-height: 520px;
  align-items: stretch;
  grid-template-columns: 53% 47%;
  margin: 0 auto;

  .photo {
    position: relative;
    min-height: 520px;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(
      90deg,
      #000 0%,
      #000 66%,
      rgba(0, 0, 0, 0.9) 76%,
      rgba(0, 0, 0, 0.5) 87%,
      transparent 100%
    );
    mask-image: linear-gradient(
      90deg,
      #000 0%,
      #000 66%,
      rgba(0, 0, 0, 0.9) 76%,
      rgba(0, 0, 0, 0.5) 87%,
      transparent 100%
    );
  }

  .photo img {
    width: 100%;
    height: 100%;
    min-height: 520px;
    object-fit: cover;
    object-position: 45% center;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    .photo {
      min-height: clamp(340px, 92vw, 520px);
      -webkit-mask-image: linear-gradient(
        180deg,
        #000 0%,
        #000 68%,
        rgba(0, 0, 0, 0.85) 78%,
        rgba(0, 0, 0, 0.3) 92%,
        transparent 100%
      );
      mask-image: linear-gradient(
        180deg,
        #000 0%,
        #000 68%,
        rgba(0, 0, 0, 0.85) 78%,
        rgba(0, 0, 0, 0.3) 92%,
        transparent 100%
      );
    }

    .photo img {
      min-height: clamp(340px, 92vw, 520px);
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
  margin-left: -10%;
  padding: 62px clamp(36px, 6vw, 90px);
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(251, 250, 248, 0.55) 9%,
    rgba(251, 250, 248, 0.92) 22%,
    #fbfaf8 36%
  );

  .eyebrow {
    margin-bottom: 12px;
    color: #a77b2a;
    font-size: 0.74rem;
    font-weight: 600;
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 590px;
    color: #741c32;
    font-size: clamp(2.65rem, 3.7vw, 4rem);
    letter-spacing: -0.025em;
    line-height: 1.02;
  }

  .gold-line {
    width: 38px;
    height: 2px;
    margin: 21px 0;
    background: #bd8c39;
  }

  > p {
    max-width: 590px;
    color: #332f2d;
    font-size: 0.94rem;
    line-height: 1.68;
  }

  @media (max-width: 900px) {
    margin-top: -72px;
    margin-left: 0;
    padding: 94px 22px 68px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(251, 250, 248, 0.72) 12%,
      #fbfaf8 30%
    );

    h2 {
      font-size: clamp(2.35rem, 10.7vw, 3.3rem);
    }

    > p {
      font-size: 0.96rem;
    }
  }
`

export const Credentials = styled.ul`
  width: 100%;
  max-width: 570px;
  margin: 28px 0 0;
  padding: 18px 20px;
  border: 1px solid #e5d8d2;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.7);
  list-style: none;

  li {
    display: grid;
    min-height: 34px;
    align-items: center;
    grid-template-columns: 24px 1fr;
    gap: 10px;
    color: #514a46;
    font-size: 0.78rem;
  }

  svg {
    color: #9b4052;
  }

  @media (max-width: 600px) {
    padding: 16px;

    li {
      min-height: 40px;
      font-size: 0.75rem;
    }
  }
`
