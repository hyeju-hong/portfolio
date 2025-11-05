import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white-color: #ffffff;
    --black-color: #000000;
    --point-color: #6eff51;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'nexon_light', sans-serif;
    background-color: #000511;
    color: var(--white-color);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @font-face {
    font-family: 'football_300';
    src: url('/fonts/football_300.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'football_700';
    src: url('/fonts/football_700.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'nexon_light';
    src: url('/fonts/nexon_light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'nexon_medium';
    src: url('/fonts/nexon_medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
`; 