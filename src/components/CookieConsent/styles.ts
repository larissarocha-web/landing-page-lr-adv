import styled from 'styled-components'

export const Banner = styled.aside`
  position: fixed;
  right: 20px;
  bottom: max(20px, env(safe-area-inset-bottom));
  z-index: 200;
  display: flex;
  width: min(640px, calc(100vw - 40px));
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  padding: 20px 22px;
  border: 1px solid #dfd4ce;
  border-radius: 16px;
  background: rgba(255, 253, 251, 0.98);
  box-shadow: 0 18px 50px rgba(67, 44, 41, 0.18);

  strong {
    display: block;
    margin-bottom: 4px;
    color: #7d263a;
    font-size: 0.82rem;
  }

  p {
    max-width: 390px;
    color: #665e5a;
    font-size: 0.76rem;
    line-height: 1.55;
  }

  > div > button {
    margin-top: 7px;
    padding: 0;
    border: 0;
    background: transparent;
    color: #7d263a;
    font-size: 0.72rem;
    text-decoration: underline;
    text-underline-offset: 3px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    right: 12px;
    bottom: max(12px, env(safe-area-inset-bottom));
    width: calc(100vw - 24px);
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex: 0 0 auto;
  gap: 8px;

  button {
    min-height: 42px;
    padding: 0 14px;
    border: 1px solid #7d263a;
    border-radius: 7px;
    background: #7d263a;
    color: #ffffff;
    font-size: 0.72rem;
    font-weight: 700;
    cursor: pointer;
  }

  .secondary {
    background: transparent;
    color: #7d263a;
  }
`
