import React from "react";
import styled from "styled-components";

export const Footer = props => {
  return <Container>{props.children}</Container>;
};

const Container = styled.footer`
  background-color: ${props => props.theme.colorSecondary};
  grid-column: full-start / full-end;
`;
