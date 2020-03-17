import React from "react";
import styled from "styled-components";

import Image1 from "../../img/gal-1.jpeg";
import Image2 from "../../img/gal-2.jpeg";
import Image3 from "../../img/gal-3.jpeg";
import Image4 from "../../img/gal-4.jpeg";
import Image5 from "../../img/gal-5.jpeg";
import Image6 from "../../img/gal-6.jpeg";
import Image7 from "../../img/gal-7.jpeg";
import Image8 from "../../img/gal-8.jpeg";
import Image9 from "../../img/gal-9.jpeg";
import Image10 from "../../img/gal-10.jpeg";
import Image11 from "../../img/gal-11.jpeg";
import Image12 from "../../img/gal-12.jpeg";
import Image13 from "../../img/gal-13.jpeg";
import Image14 from "../../img/gal-14.jpeg";

export const Gallery = props => {
  return (
    <Container>
      <Figure gridRow="1 / span 2" gridColumn="1 / span 2">
        <Img src={Image1} alt="Property 1" />
      </Figure>
      <Figure gridRow="1 / span 3" gridColumn="3 / span 3">
        <Img src={Image2} alt="Property 2" />
      </Figure>
      <Figure gridRow="1 / span 2">
        <Img src={Image3} alt="Property 3" />
      </Figure>
      <Figure gridRow="1 / span 2" gridColumn="7 / -1">
        <Img src={Image4} alt="Property 4" />
      </Figure>
      <Figure gridRow="3 / span 3" gridColumn="1 / span 2">
        <Img src={Image5} alt="Property 5" />
      </Figure>
      <Figure gridRow="4 / span 2" gridColumn="3 / span 2">
        <Img src={Image6} alt="Property 6" />
      </Figure>
      <Figure>
        <Img src={Image7} alt="Property 7" />
      </Figure>
      <Figure gridRow="3 / span 2" gridColumn="6 / span 2">
        <Img src={Image8} alt="Property 8" />
      </Figure>
      <Figure gridRow="3 / span 3">
        <Img src={Image9} alt="Property 9" />
      </Figure>
      <Figure gridRow="6 / span 2">
        <Img src={Image10} alt="Property 10" />
      </Figure>
      <Figure gridRow="6 / span 2" gridColumn="2 / span 2">
        <Img src={Image11} alt="Property 11" />
      </Figure>
      <Figure gridRow="6 / span 2">
        <Img src={Image12} alt="Property 12" />
      </Figure>
      <Figure gridRow="5 / span 3" gridColumn="5 / span 3">
        <Img src={Image13} alt="Property 13" />
      </Figure>
      <Figure gridRow="span 2">
        <Img src={Image14} alt="Property 14" />
      </Figure>
    </Container>
  );
};

const Container = styled.section`
  grid-column: full-start / full-end;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 5vw);
  grid-gap: 1.5rem;
  padding: 1.5rem;
`;

const Figure = styled.figure`
  grid-row: ${props => props.gridRow || "auto"};
  grid-column: ${props => props.gridColumn || "auto"};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
