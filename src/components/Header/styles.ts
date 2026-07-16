import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(85, 54, 47, 0.1);
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 8px 30px rgba(62, 38, 33, 0.05);
  backdrop-filter: blur(18px);
`

export const Div1 = styled.div`
  display: flex;
  width: min(100% - 96px, 1400px);
  height: 86px;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  margin: 0 auto;

  .brand {
    flex: 0 0 auto;
    text-decoration: none;
  }

  .brand img {
    width: 218px;
    height: auto;
  }

  @media (max-width: 760px) {
    width: min(100% - 32px, 1320px);
    height: 70px;

    .brand img {
      width: 180px;
    }
  }
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(20px, 3vw, 50px);

  ul {
    display: flex;
    align-items: center;
    gap: clamp(18px, 2.2vw, 36px);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul a {
    position: relative;
    color: #2f2b29;
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 180ms ease;

    &::after {
      position: absolute;
      right: 0;
      bottom: -10px;
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
    min-height: 44px;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 0 20px;
    border-radius: 7px;
    background: linear-gradient(135deg, #8c3044, #a94f60);
    box-shadow: 0 10px 24px rgba(125, 38, 58, 0.18);
    color: #fff;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-decoration: none;
    text-transform: uppercase;
    transition: transform 180ms ease, box-shadow 180ms ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 30px rgba(125, 38, 58, 0.24);
    }

    svg {
      font-size: 1.1rem;
    }
  }

  .menu-trigger {
    display: none;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border: 0;
    background: transparent;
    color: #3a302d;
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    ul,
    .header-cta {
      display: none;
    }

    .menu-trigger {
      display: inline-flex;
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
  padding: 110px 24px 42px;
  background:
    radial-gradient(circle at 85% 15%, rgba(201, 169, 106, 0.12), transparent 30%),
    #fbf8f6;
  color: #7d263a;
  animation: fadeIn 220ms ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
  }

  .menu-header {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 82px;
    align-items: center;
    justify-content: space-between;
    padding: 14px 22px;
    border-bottom: 1px solid rgba(125, 38, 58, 0.08);
    background: #fff;
  }

  .menu-header img {
    width: 190px;
    height: auto;
  }

  .menu-header button {
    display: inline-flex;
    padding: 4px;
    border: 0;
    background: transparent;
    color: #641d30;
    cursor: pointer;
  }

  .mobile-cta {
    display: inline-flex;
    width: min(100%, 320px);
    min-height: 48px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
    border-radius: 7px;
    background: linear-gradient(135deg, #8c3044, #a94f60);
    color: #fff;
    font-size: 0.82rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
  }
`

export const Ul = styled.ul`
  width: min(100%, 360px);
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;

  li {
    position: relative;
    padding: 15px 0;

    &::after {
      position: absolute;
      right: 30%;
      bottom: 7px;
      left: 30%;
      height: 1px;
      background: #c9a96a;
      content: '';
    }
  }

  a {
    color: #352e2b;
    font-size: 0.95rem;
    letter-spacing: 0.06em;
    text-decoration: none;
    text-transform: uppercase;
  }
`
