import { createGlobalStyle, styled } from 'styled-components'

export const AdminGlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  html { min-width: 320px; background: #f7f4ef; }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    background:
      radial-gradient(circle at 82% 18%, rgba(201, 169, 106, 0.14), transparent 34rem),
      #f7f4ef;
    color: #342f2d;
    font-family: Inter, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a { color: inherit; }
  :focus-visible { outline: 3px solid rgba(201, 169, 106, 0.62); outline-offset: 4px; }
  ::selection { background: #7d263a; color: #fff; }
`

export const AdminHeader = styled.header`
  min-height: 90px;
  padding: 16px clamp(24px, 6vw, 88px);
  border-bottom: 1px solid #e8ddd7;
  background: rgba(255, 253, 250, 0.88);
  display: flex;
  align-items: center;
`

export const BrandLink = styled.a`
  display: inline-flex;
  align-items: center;

  img {
    width: auto;
    height: 52px;
    object-fit: contain;
  }

  @media (max-width: 600px) {
    margin-inline: auto;
    img {
      height: 44px;
    }
  }
`

export const AdminLayout = styled.main`
  width: min(1180px, calc(100% - 48px));
  min-height: calc(100vh - 90px);
  margin: 0 auto;
  padding: clamp(56px, 9vw, 110px) 0;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.72fr);
  align-items: center;
  gap: clamp(44px, 8vw, 110px);

  > * {
    min-width: 0;
  }

  .eyebrow {
    margin: 0 0 14px;
    color: #a77b2a;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.17em;
    text-transform: uppercase;
  }

  h1,
  h2 {
    margin: 0;
    color: #6f1f33;
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 500;
  }

  h1 {
    max-width: 640px;
    font-size: clamp(3.6rem, 8vw, 7rem);
    line-height: 0.92;
    letter-spacing: -0.045em;
  }

  .lead {
    max-width: 600px;
    margin: 28px 0 0;
    color: #5f5855;
    font-size: clamp(1rem, 1.7vw, 1.17rem);
    line-height: 1.75;
    overflow-wrap: anywhere;
  }

  .privacy-note {
    margin: 16px 0 0;
    color: #7d7470;
    font-size: 0.83rem;
  }

  @media (max-width: 860px) {
    width: min(680px, calc(100% - 40px));
    grid-template-columns: 1fr;
    min-height: auto;
    padding-block: 54px 70px;
    gap: 46px;

    h1 {
      font-size: clamp(3.4rem, 15vw, 5.6rem);
    }
  }

  @media (max-width: 430px) {
    width: calc(100% - 32px);
    h1 {
      font-size: 3.5rem;
    }
  }
`

export const GoogleButton = styled.a<{ $disabled?: boolean }>`
  width: fit-content;
  max-width: 100%;
  min-height: 54px;
  margin-top: 34px;
  padding: 0 24px;
  border: 1px solid ${({ $disabled }) => ($disabled ? '#d8cfca' : '#7d263a')};
  border-radius: 12px;
  background: ${({ $disabled }) => ($disabled ? '#eee9e5' : '#7d263a')};
  color: ${({ $disabled }) => ($disabled ? '#77706c' : '#fff')};
  box-shadow: ${({ $disabled }) =>
    $disabled ? 'none' : '0 14px 34px rgba(125, 38, 58, 0.19)'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: 180ms ease;

  &:hover {
    transform: ${({ $disabled }) => ($disabled ? 'none' : 'translateY(-1px)')};
  }

  @media (max-width: 520px) {
    width: 100%;
    height: auto;
    padding-block: 13px;
  }
`

export const AccessCard = styled.aside`
  position: relative;
  min-width: 0;
  overflow: hidden;
  padding: clamp(30px, 5vw, 48px);
  border: 1px solid #e2d5cf;
  border-radius: 26px;
  background: rgba(255, 253, 250, 0.88);
  box-shadow: 0 26px 70px rgba(80, 51, 45, 0.1);

  .card-number {
    position: absolute;
    top: 4px;
    right: 16px;
    color: rgba(125, 38, 58, 0.055);
    font:
      500 8rem/1 Georgia,
      serif;
  }

  h2 {
    position: relative;
    max-width: 370px;
    font-size: clamp(2rem, 4vw, 3.15rem);
    line-height: 1.03;
  }
`

export const SecurityList = styled.ul`
  position: relative;
  margin: 30px 0 0;
  padding: 0;
  list-style: none;

  li {
    min-height: 48px;
    padding: 13px 0 13px 28px;
    border-top: 1px solid #eadfd9;
    color: #5f5855;
    overflow-wrap: anywhere;
  }

  li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #a77b2a;
    font-weight: 800;
  }
`
