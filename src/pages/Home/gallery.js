import React from "react";
import styled from "styled-components";

export const Gallery = props => {
  return <Container>{props.children}</Container>;
};

const Container = styled.section`
  background-color: ${props => props.theme.colorGreyDark1};
  grid-column: full-start / full-end;
`;
