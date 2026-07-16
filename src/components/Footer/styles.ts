import styled from 'styled-components'

export const Container = styled.footer`
  background: #fbf8f6;
`

export const Wrapper = styled.div`
  display: grid;
  max-width: 1180px;
  grid-template-columns: 1.15fr 1.65fr 1fr;
  gap: clamp(40px, 6vw, 80px);
  margin: 0 auto;
  padding: 78px 24px 66px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 660px) {
    grid-template-columns: 1fr;
    padding: 62px 20px 50px;
  }
`

export const Div3 = styled.div`
  img {
    width: 260px;
    height: auto;
    margin-bottom: 24px;
  }

  p {
    max-width: 330px;
    color: #665e5a;
    font-size: 0.9rem;
    line-height: 1.7;
  }
`

export const Div1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  h2 {
    margin-bottom: 9px;
    color: #7d263a;
    font-family: 'Inter', sans-serif;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  a,
  p {
    color: #665e5a;
    font-size: 0.82rem;
    line-height: 1.6;
    text-decoration: none;
  }

  a:hover {
    color: #9b4052;
  }

  @media (max-width: 980px) {
    grid-row: 2;
    grid-column: 1 / -1;
  }

  @media (max-width: 660px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`

export const Div2 = styled.div`
  padding-left: 30px;
  border-left: 1px solid #dfd4ce;

  p {
    margin-bottom: 18px;
    color: #403936;
    font-family: 'Playfair Display', serif;
    font-size: 1.45rem;
    line-height: 1.35;
  }

  a {
    display: inline-flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 0 20px;
    border-radius: 7px;
    background: linear-gradient(135deg, #8c3044, #a94f60);
    color: #fff;
    font-size: 0.78rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
  }

  @media (max-width: 660px) {
    padding-top: 28px;
    padding-left: 0;
    border-top: 1px solid #dfd4ce;
    border-left: 0;
  }
`

export const Div4 = styled.div`
  display: flex;
  max-width: 1180px;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin: 0 auto;
  padding: 20px 24px;
  border-top: 1px solid #dfd4ce;
  color: #8c837e;
  font-size: 0.7rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    padding: 20px;
  }
`
