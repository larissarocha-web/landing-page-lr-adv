import styled from 'styled-components'

export const Container = styled.footer`
  background: #fbf8f6;
`

export const Wrapper = styled.div`
  display: grid;
  max-width: 1180px;
  grid-template-columns: 0.9fr 1.6fr;
  gap: clamp(50px, 8vw, 110px);
  margin: 0 auto;
  padding: 66px 24px 54px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 42px;
  }

  @media (max-width: 600px) {
    padding: 52px 20px 42px;
  }
`

export const Brand = styled.div`
  img {
    width: 250px;
    height: auto;
    margin-bottom: 20px;
  }

  p {
    max-width: 330px;
    margin-bottom: 12px;
    color: #665e5a;
    font-size: 0.86rem;
    line-height: 1.68;
  }

  span {
    color: #948983;
    font-size: 0.68rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  @media (max-width: 600px) {
    text-align: center;

    img {
      width: min(68vw, 245px);
      margin-right: auto;
      margin-left: auto;
    }

    p {
      margin-right: auto;
      margin-left: auto;
    }
  }
`

export const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 34px;

  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  h2 {
    margin-bottom: 8px;
    color: #7d263a;
    font-family: 'Inter', sans-serif;
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  a,
  p {
    color: #665e5a;
    font-size: 0.8rem;
    line-height: 1.55;
    text-decoration: none;
  }

  .contact-column a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #7d263a;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 34px 24px;

    .contact-column {
      grid-column: 1 / -1;
      padding-top: 24px;
      border-top: 1px solid #dfd4ce;
    }
  }
`

export const Bottom = styled.div`
  display: flex;
  max-width: 1180px;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin: 0 auto;
  padding: 20px 24px;
  border-top: 1px solid #dfd4ce;
  color: #8c837e;
  font-size: 0.66rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  a {
    color: inherit;
    text-decoration: none;

    &:hover,
    &:focus-visible {
      color: #7d263a;
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }

  @media (max-width: 600px) {
    align-items: center;
    flex-direction: column;
    padding: 20px 20px calc(84px + env(safe-area-inset-bottom));
    text-align: center;
  }
`
