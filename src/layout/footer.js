import React from "react";
import styled from "styled-components";

export const Footer = props => {
  return (
    <Container>
      <Nav>
        <NavItem>
          <NavLink>Find your dream home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Request Proposal</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Download Home Planer</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Contact us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Submit your property</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Come work with us</NavLink>
        </NavItem>
      </Nav>
      <CopyRightText>
        &copy; Copyright 2020 by David Neira. Design by Jonas Schmedtmann.
      </CopyRightText>
    </Container>
  );
};

const Container = styled.footer`
  background-color: ${props => props.theme.colorSecondary};
  grid-column: full-start / full-end;
  padding: 8rem;
`;

const Nav = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
  align-items: center;
`;

const NavItem = styled.li``;

const NavLink = styled.button`
  &,
  &:visited,
  &:link {
    width: 100%;
    font-size: 1.4rem;
    color: #fff;
    text-decoration: none;
    font-weight: 300;
    font-family: ${props => props.theme.fontDisplay};
    text-transform: uppercase;
    text-align: center;
    border: 0;
    padding: 1.5rem;
    background-color: transparent;
    display: block;
    transition: all 0.2s;
  }

  &:hover,
  &:active {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.05);
    transform: translateY(-3px);
  }
`;

const CopyRightText = styled.p`
  font-size: 1.4rem;
  color: ${props => props.theme.colorGreyLight2};
  margin-top: 6rem;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  width: 70%;
`;
