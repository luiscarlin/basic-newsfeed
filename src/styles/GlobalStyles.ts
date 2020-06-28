import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset}
  html {
    box-sizing: border-box;
    text-size-adjust: 100%;
    font-size: 10px;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body, #root {
    height: 100%
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
