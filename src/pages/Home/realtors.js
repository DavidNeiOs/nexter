import React from "react";
import styled from "styled-components";

import { Heading3, Heading4 } from "../../theme";

import realtor1 from "../../img/realtor-1.jpeg";
import realtor2 from "../../img/realtor-2.jpeg";
import realtor3 from "../../img/realtor-3.jpeg";

export const Realtors = props => {
  return (
    <Container>
      <Heading3>Top 3 Realtors</Heading3>
      <RealtorsList>
        <RealtorsImg src={realtor1} alt="realtor 1" />
        <RealtorDetails>
          <Heading4 light>Erik Feinman</Heading4>
          <RealtorSales>245 Houses sold</RealtorSales>
        </RealtorDetails>

        <RealtorsImg src={realtor2} alt="realtor 2" />
        <RealtorDetails>
          <Heading4 light>Kim Brown</Heading4>
          <RealtorSales>212 Houses sold</RealtorSales>
        </RealtorDetails>

        <RealtorsImg src={realtor3} alt="realtor 3" />
        <RealtorDetails>
          <Heading4 light>Toby Ramsey</Heading4>
          <RealtorSales>198 Houses sold</RealtorSales>
        </RealtorDetails>
      </RealtorsList>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${props => props.theme.colorSecondary};
  grid-column: col-start 7 / full-end;

  padding: 3rem;
  display: grid;
  align-content: center;
  justify-content: center;
  grid-row-gap: 2rem;
  justify-items: center;
`;

const RealtorsList = styled.div`
  display: grid;
  grid-template-columns: min-content max-content;
  grid-column-gap: 2rem;
  grid-row-gap: 5vh;
  align-items: center;
`;

const RealtorsImg = styled.img`
  width: 7rem;
  border-radius: 100%;
  display: block;
`;

const RealtorDetails = styled.div``;

const RealtorSales = styled.p`
  text-transform: uppercase;
  color: ${props => props.theme.colorGreyLight2};
  margin-top: -3px;
`;
