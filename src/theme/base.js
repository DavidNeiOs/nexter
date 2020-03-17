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

  .mb-sm {
    margin-bottom: 2rem;
  }
  .mb-md {
    margin-bottom: 3rem;
  }
  .mb-lg {
    margin-bottom: 4rem;
  }
  .mb-hg {
    margin-bottom: 8rem;
  }

  .mt {
    margin-top: 2.5rem;
  }
`;
