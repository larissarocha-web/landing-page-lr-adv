import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 210;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(49, 34, 32, 0.5);
`

export const Content = styled.article`
  width: min(620px, 100%);
  max-height: min(720px, calc(100vh - 40px));
  overflow-y: auto;
  padding: 30px;
  border-radius: 16px;
  background: #fffdfb;
  box-shadow: 0 24px 60px rgba(37, 20, 18, 0.28);

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 18px;
    margin-bottom: 22px;
  }

  h2 {
    font-size: clamp(1.8rem, 5vw, 2.4rem);
  }

  h3 {
    margin-top: 20px;
    margin-bottom: 5px;
    font-family: 'Inter', sans-serif;
    font-size: 0.88rem;
    font-weight: 700;
  }

  p {
    color: #665e5a;
    font-size: 0.88rem;
    line-height: 1.7;
  }

  button {
    display: grid;
    width: 44px;
    height: 44px;
    flex: 0 0 auto;
    place-items: center;
    border: 0;
    border-radius: 50%;
    background: #f5eeea;
    color: #7d263a;
    cursor: pointer;
  }

  .updated {
    margin-top: 24px;
    color: #938780;
    font-size: 0.72rem;
  }

  @media (max-width: 600px) {
    padding: 24px 20px;
  }
`
