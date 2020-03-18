import React from "react";
import styled from "styled-components";

import { Heading1, Heading3, Button } from "../theme";
import logo from "../img/logo.png";
import bbcLogo from "../img/logo-bbc.png";
import forbesLogo from "../img/logo-forbes.png";
import techcrunchLogo from "../img/logo-techcrunch.png";
import biLogo from "../img/logo-bi.png";
import background from "../img/hero.jpeg";

export const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt="Logo" />
      <Heading3>Your own home:</Heading3>
      <Heading1>The ultimate personal freedom</Heading1>
      <HeaderButton>View our properties</HeaderButton>
      <SemiTitle>As seen on</SemiTitle>
      <LogosContainer>
        <CompanyLogo src={bbcLogo} alt="Seen on logo 1"></CompanyLogo>
        <CompanyLogo src={forbesLogo} alt="Seen on logo 2"></CompanyLogo>
        <CompanyLogo src={techcrunchLogo} alt="Seen on logo 3"></CompanyLogo>
        <CompanyLogo src={biLogo} alt="Seen on logo 4"></CompanyLogo>
      </LogosContainer>
    </Container>
  );
};

const Container = styled.header`
  background-color: ${props => props.theme.colorGreyDark1};
  grid-column: full-start / col-end 6;

  background-image: linear-gradient(
      rgba(16, 29, 44, 0.93),
      rgba(16, 29, 44, 0.93)
    ),
    url(${background});
  background-size: cover;
  background-position: center;
  padding: 8rem;
  padding-top: 4rem;

  display: grid;
  grid-template-rows: 1fr min-content 6rem 1fr;
  grid-template-columns: max-content;
  grid-row-gap: 1.5rem;
  justify-content: center;
`;

const Logo = styled.img`
  height: 3rem;
  justify-self: center;
`;

const SemiTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  align-items: center;
  grid-column-gap: 1.5rem;

  font-size: 1.6rem;
  color: ${props => props.theme.colorGreyLight2};

  &::before,
  &::after {
    content: "";
    height: 1px;
    display: block;
    background-color: currentColor;
  }
`;

const HeaderButton = styled(Button)`
  align-self: start;
  justify-self: start;
`;

const LogosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 3rem;
  justify-items: center;
`;

const CompanyLogo = styled.img`
  height: 25px;
  filter: brightness(70%);
`;
