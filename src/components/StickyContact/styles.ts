import styled from 'styled-components'

export const Container = styled.div`
  display: none;

  @media (max-width: 760px) {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 90;
    display: block;
    padding: 8px 14px calc(8px + env(safe-area-inset-bottom));
    border-top: 1px solid rgba(255, 255, 255, 0.16);
    background: rgba(100, 29, 48, 0.97);
    box-shadow: 0 -10px 28px rgba(62, 25, 34, 0.16);
    opacity: 0;
    transform: translateY(110%);
    transition:
      opacity 200ms ease,
      transform 240ms ease;
    pointer-events: none;

    &[data-visible='true'] {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

    a {
      display: flex;
      width: min(100%, 440px);
      min-height: 48px;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin: 0 auto;
      color: #fff;
      font-size: 0.76rem;
      font-weight: 700;
      text-decoration: none;
      text-transform: uppercase;
    }

    svg {
      font-size: 1.2rem;
    }
  }
`
