import React from "react";
import styled from "styled-components";

export const Sidebar = () => {
  return (
    <Container>
      <Button></Button>
    </Container>
  );
};

export const Container = styled.div`
  background-color: ${props => props.theme.colorPrimary};
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1 / -1;

  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  border-radius: 0;
  margin-top: 4rem;

  background-color: #fff;
  height: 2px;
  width: 4.5rem;
  cursor: pointer;

  &::before,
  &::after {
    background-color: #fff;
    height: 2px;
    width: 4.5rem;
    content: "";
    display: block;
  }

  &::before {
    transform: translateY(-1.5rem);
  }

  &::after {
    transform: translateY(1.3rem);
  }
`;
