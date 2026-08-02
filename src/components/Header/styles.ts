import styled from 'styled-components'

type HeaderVariantProps = {
  $variant: 'full' | 'minimal'
}

export const HeaderContainer = styled.header<HeaderVariantProps>`
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  border-bottom: 1px solid rgba(85, 54, 47, 0.1);
  background: ${({ $variant }) =>
    $variant === 'minimal'
      ? 'rgba(251, 250, 248, 0.97)'
      : 'rgba(255, 255, 255, 0.96)'};
  box-shadow: 0 8px 30px rgba(62, 38, 33, 0.05);
  backdrop-filter: blur(18px);
`

export const Div1 = styled.div<HeaderVariantProps>`
  display: flex;
  width: min(100% - 64px, 1432px);
  height: 88px;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  margin: 0 auto;

  .brand {
    flex: 0 0 auto;
  }

  .brand img {
    width: ${({ $variant }) => ($variant === 'minimal' ? '224px' : '245px')};
    height: auto;
  }

  @media (max-width: 760px) {
    display: ${({ $variant }) => ($variant === 'minimal' ? 'flex' : 'grid')};
    width: 100%;
    height: 66px;
    grid-template-columns: ${({ $variant }) =>
      $variant === 'minimal' ? 'none' : '48px minmax(0, 1fr) 48px'};
    justify-content: ${({ $variant }) =>
      $variant === 'minimal' ? 'space-between' : 'normal'};
    gap: 0;
    padding: 0 14px;

    .brand {
      grid-column: ${({ $variant }) => ($variant === 'minimal' ? 'auto' : '2')};
      justify-self: ${({ $variant }) =>
        $variant === 'minimal' ? 'auto' : 'center'};
    }

    .brand img {
      width: ${({ $variant }) =>
        $variant === 'minimal'
          ? 'clamp(132px, 42vw, 188px)'
          : 'min(58vw, 205px)'};
    }
  }
`

export const NavBar = styled.nav<HeaderVariantProps>`
  display: flex;
  align-items: center;
  gap: clamp(20px, 2.2vw, 38px);

  ul {
    display: flex;
    align-items: center;
    gap: clamp(16px, 1.6vw, 28px);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul a {
    position: relative;
    color: #2f2b29;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.045em;
    text-decoration: none;
    text-transform: uppercase;

    &::after {
      position: absolute;
      right: 0;
      bottom: -9px;
      left: 0;
      width: 0;
      height: 1px;
      margin: auto;
      background: #c9a96a;
      content: '';
      transition: width 180ms ease;
    }

    &:hover,
    &:focus-visible {
      color: #7d263a;
    }

    &:hover::after {
      width: 100%;
    }
  }

  .header-cta {
    display: inline-flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 0 20px;
    border-radius: 7px;
    background: linear-gradient(135deg, #8c3044, #a94f60);
    box-shadow: 0 10px 24px rgba(125, 38, 58, 0.18);
    color: #fff;
    font-size: 0.7rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
  }

  ${({ $variant }) =>
    $variant === 'minimal' &&
    `
      .header-cta {
        min-height: 46px;
        padding: 0 18px;
        border: 1px solid rgba(125, 38, 58, 0.16);
        border-radius: 999px;
        background: transparent;
        box-shadow: none;
        color: #741c32;
      }
    `}

  .menu-trigger {
    display: none;
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    background: transparent;
    color: #3a302d;
    cursor: pointer;
  }

  @media (max-width: 1180px) {
    ul {
      display: none;
    }

    ${({ $variant }) =>
      $variant === 'full' &&
      `
        .header-cta {
          display: none;
        }
      `}

    .menu-trigger {
      display: ${({ $variant }) =>
        $variant === 'minimal' ? 'none' : 'inline-flex'};
    }
  }

  @media (max-width: 760px) {
    grid-column: ${({ $variant }) => ($variant === 'minimal' ? 'auto' : '3')};
    justify-self: end;

    .header-cta {
      width: 46px;
      min-height: 46px;
      padding: 0;
    }

    .header-cta span {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    .header-cta svg {
      font-size: 1.22rem;
    }
  }
`

export const MenuMobileOpen = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 92px 24px 36px;
  background: radial-gradient(
      circle at 88% 12%,
      rgba(166, 70, 88, 0.08),
      transparent 34%
    ),
    linear-gradient(145deg, #fbfaf8 0%, #f8f3f0 100%);
  animation: fadeIn 220ms ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
  }

  .menu-header {
    position: absolute;
    inset: 0 0 auto;
    display: grid;
    height: 66px;
    align-items: center;
    grid-template-columns: 48px minmax(0, 1fr) 48px;
    padding: 0 14px;
    border-bottom: 1px solid rgba(125, 38, 58, 0.08);
  }

  .menu-brand {
    display: inline-flex;
    grid-column: 2;
    justify-self: center;
  }

  .menu-header img {
    width: min(58vw, 205px);
    height: auto;
    object-fit: contain;
  }

  .menu-header button {
    display: inline-flex;
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    background: transparent;
    color: #641d30;
    cursor: pointer;
  }

  .mobile-cta {
    display: inline-flex;
    width: min(100%, 340px);
    min-height: 52px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 26px;
    border-radius: 7px;
    background: linear-gradient(135deg, #8c3044, #a94f60);
    color: #fff;
    font-size: 0.78rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
  }
`

export const Ul = styled.ul`
  width: min(100%, 390px);
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;

  li {
    border-bottom: 1px solid rgba(125, 38, 58, 0.1);
  }

  a {
    display: flex;
    min-height: 56px;
    align-items: center;
    justify-content: center;
    color: #352e2b;
    font-size: 0.87rem;
    letter-spacing: 0.055em;
    text-decoration: none;
    text-transform: uppercase;
  }
`
