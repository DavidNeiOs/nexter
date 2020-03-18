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

  ${({ theme }) => theme.bpLarge`
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    justify-content: flex-end;
    align-items: center;  
  `}
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

  ${({ theme }) => theme.bpLarge`
    margin-top: 0;
    margin-right: 3rem;

    &::before {
      transform: translateY(-1.2rem);
    }

    &::after {
      transform: translateY(1.0rem);
    }
  `}
`;
