import React from "react";
import styled from "styled-components";

export const Story = props => {
  return (
    <>
      <Pictures>Story Pictures</Pictures>
      <Content>Story Content</Content>
    </>
  );
};

const Pictures = styled.div`
  background-color: ${props => props.theme.colorPrimary};
  grid-column: full-start / col-end 4;
`;

const Content = styled.div`
  background-color: ${props => props.theme.colorGreyLight1};
  grid-column: col-start 5 / full-end;
`;
