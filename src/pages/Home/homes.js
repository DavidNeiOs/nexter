import React from "react";
import styled from "styled-components";

export const Homes = props => {
  return <Container>{props.children}</Container>;
};

const Container = styled.section`
  background-color: ${props => props.theme.colorSecondary};
  grid-column: center-start / center-end;
`;
