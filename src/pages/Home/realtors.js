import React from "react";
import styled from "styled-components";

export const Realtors = props => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  background-color: ${props => props.theme.colorSecondary};
  grid-column: col-start 7 / full-end;
`;
