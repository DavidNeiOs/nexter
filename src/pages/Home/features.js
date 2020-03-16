import React from "react";
import styled from "styled-components";

export const Features = props => {
  return <Container>{props.children}</Container>;
};

const Container = styled.section`
  background-color: ${props => props.theme.colorGreyLight2};
  grid-column: center-start / center-end;
`;
