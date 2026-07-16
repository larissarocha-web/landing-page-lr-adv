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
  position: relative;
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

export const IntakeCard = styled.form`
  position: absolute;
  top: 50%;
  left: 53%;
  z-index: 4;
  display: flex;
  width: clamp(280px, 22vw, 320px);
  flex-direction: column;
  padding: 28px 25px 24px;
  border: 1px solid rgba(201, 169, 106, 0.38);
  border-radius: 14px;
  background: rgba(255, 253, 251, 0.96);
  box-shadow: 0 22px 58px rgba(72, 42, 37, 0.14);
  transform: translate(-50%, -50%);
  backdrop-filter: blur(16px);

  .form-eyebrow {
    margin-bottom: 5px;
    color: #a77b2a;
    font-size: 0.64rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h3 {
    color: #741c32;
    font-size: 1.35rem;
    line-height: 1.18;
  }

  > p {
    margin: 8px 0 20px;
    color: #6a615c;
    font-size: 0.75rem;
    line-height: 1.55;
  }

  label {
    margin-bottom: 6px;
    color: #3d3532;
    font-size: 0.7rem;
    font-weight: 600;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid #e1d6d0;
    border-radius: 8px;
    background: #fbf8f6;
    color: #332e2b;
    font-size: 0.78rem;
    outline: none;
    transition:
      border-color 180ms ease,
      box-shadow 180ms ease;
  }

  input {
    min-height: 44px;
    margin-bottom: 15px;
    padding: 0 13px;
  }

  textarea {
    min-height: 98px;
    padding: 11px 13px;
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    color: #a09791;
  }

  input:focus,
  textarea:focus {
    border-color: #b46c7b;
    box-shadow: 0 0 0 3px rgba(155, 64, 82, 0.1);
  }

  button {
    display: inline-flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    gap: 9px;
    margin-top: 18px;
    border: 0;
    border-radius: 8px;
    background: linear-gradient(135deg, #81283c, #a6485b);
    color: #fff;
    cursor: pointer;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  button svg {
    font-size: 1.05rem;
  }

  small {
    margin-top: 11px;
    color: #8a807a;
    font-size: 0.58rem;
    line-height: 1.45;
    text-align: center;
  }

  @media (max-width: 900px) {
    position: relative;
    top: auto;
    left: auto;
    z-index: 4;
    grid-row: 2;
    width: min(calc(100% - 40px), 430px);
    margin: -88px auto 0;
    padding: 27px 23px 23px;
    transform: none;
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
  padding: 62px clamp(32px, 4vw, 58px) 62px clamp(198px, 18vw, 225px);
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
    grid-row: 3;
    margin-top: 0;
    margin-left: 0;
    padding: 58px 22px 68px;
    background: #fbfaf8;

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
