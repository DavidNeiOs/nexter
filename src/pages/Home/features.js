import React from "react";
import styled from "styled-components";

import sprite from "../../img/sprite.svg";
import { Heading4, FeatureText } from "../../theme";

export const Features = props => {
  return (
    <Container>
      <Feature>
        <FeatureIcon>
          <use xlinkHref={`${sprite}#icon-global`} />
        </FeatureIcon>
        <Heading4>World's best luxury homes</Heading4>
        <FeatureText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus.
        </FeatureText>
      </Feature>
      <Feature>
        <FeatureIcon>
          <use xlinkHref={`${sprite}#icon-trophy`} />
        </FeatureIcon>
        <Heading4>Only the best properties</Heading4>
        <FeatureText>
          Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
          rerum sed a eligendi aut quia.
        </FeatureText>
      </Feature>
      <Feature>
        <FeatureIcon>
          <use xlinkHref={`${sprite}#icon-map-pin`} />
        </FeatureIcon>
        <Heading4>All homes in top locations</Heading4>
        <FeatureText>
          Tenetur distinctio necessitatibus pariatur voluptatibus quidem
          consequatur harum.
        </FeatureText>
      </Feature>
      <Feature>
        <FeatureIcon>
          <use xlinkHref={`${sprite}#icon-key`} />
        </FeatureIcon>
        <Heading4>New home in one week</Heading4>
        <FeatureText>
          Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit.
        </FeatureText>
      </Feature>
      <Feature>
        <FeatureIcon>
          <use xlinkHref={`${sprite}#icon-presentation`} />
        </FeatureIcon>
        <Heading4>Top 1% realtors</Heading4>
        <FeatureText>
          Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
          necessitatibus pariatur voluptatibus.
        </FeatureText>
      </Feature>
      <Feature>
        <FeatureIcon>
          <use xlinkHref={`${sprite}#icon-lock`} />
        </FeatureIcon>
        <Heading4>Secure payments on nexter</Heading4>
        <FeatureText>
          Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
          quae.
        </FeatureText>
      </Feature>
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
  margin: 15rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 6rem;
  align-items: start;
`;

const Feature = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-row-gap: 1.5rem;
  grid-column-gap: 2.5rem;
`;

const FeatureIcon = styled.svg`
  fill: ${props => props.theme.colorPrimary};
  width: 4.5rem;
  height: 4.5rem;
  grid-row: 1 / span 2;
  transform: translateY(-1rem);
`;
