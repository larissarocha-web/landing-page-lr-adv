import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-width: 320px;
    overflow-x: hidden;
    background: #f7f6f3;
    color: #3d3937;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  body.menu-open {
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  h1,
  h2,
  h3 {
    color: #7d263a;
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 500;
  }

  a {
    color: inherit;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  button,
  a {
    -webkit-tap-highlight-color: transparent;
  }

  img {
    display: block;
    max-width: 100%;
  }

  section {
    scroll-margin-top: 86px;
  }

  ::selection {
    background: #7d263a;
    color: #ffffff;
  }

  :focus-visible {
    outline: 3px solid rgba(201, 169, 106, 0.65);
    outline-offset: 4px;
  }
`
