import { createGlobalStyle } from "styled-components";

export const Base = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%; /* 10px/16px: 62.5% */
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    font-family: ${props => props.theme.fontPrimary};
    color: ${props => props.theme.colorGreyDark2};
    font-weight: 300;
    line-height: 1.6;
  }
`;
