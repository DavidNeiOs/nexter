import styled, { css } from "styled-components";

const HeadingMixing = css`
  font-family: ${props => props.theme.fontDisplay};
  font-weight: 400;
`;

export const Heading1 = styled.h1`
  ${HeadingMixing}
`;
export const Heading2 = styled.h2`
  ${HeadingMixing}
`;
export const Heading3 = styled.h3`
  ${HeadingMixing}
`;
export const Heading4 = styled.h4`
  ${HeadingMixing}
  font-size: 1.9rem;
  color: ${props =>
    props.light ? props.theme.colorGreyLight1 : props.theme.colorGreyDark1};
`;

export const FeatureText = styled.p`
  font-size: 1.7rem;
`;
