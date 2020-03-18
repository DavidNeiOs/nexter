import { css } from "styled-components";

const sizes = {
  bpLargest: "75em",
  bpLarge: "62.5em",
  bpMedium: "50em",
  bpSmall: "37.5em"
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (max-width: ${sizes[label]}) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
