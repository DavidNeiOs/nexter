import React from "react";
import styled from "styled-components";

import { Button } from "../../theme";

import sprite from "../../img/sprite.svg";
import house1 from "../../img/house-1.jpeg";
import house2 from "../../img/house-2.jpeg";
import house3 from "../../img/house-3.jpeg";
import house4 from "../../img/house-4.jpeg";
import house5 from "../../img/house-5.jpeg";
import house6 from "../../img/house-6.jpeg";

export const Homes = props => {
  return (
    <Container>
      <Home>
        <Img src={house1} alt="house 1" />
        <Icon>
          <use xlinkHref={`${sprite}#icon-heart-full`} />
        </Icon>
        <HomeTitle>Beautiful family house</HomeTitle>
        <Detail className="mt">
          <svg>
            <use xlinkHref={`${sprite}#icon-map-pin`} />
          </svg>
          <p>USA</p>
        </Detail>
        <Detail className="mt">
          <svg>
            <use xlinkHref={`${sprite}#icon-profile-male`} />
          </svg>
          <p>5 rooms</p>
        </Detail>
        <Detail>
          <svg>
            <use xlinkHref={`${sprite}#icon-expand`} />
          </svg>
          <p>
            325 m<sup>2</sup>
          </p>
        </Detail>
        <Detail>
          <svg>
            <use xlinkHref={`${sprite}#icon-key`} />
          </svg>
          <p>$1,200,000</p>
        </Detail>

        <HomeButton>Contact realtor</HomeButton>
      </Home>
      <Home>
        <Img src={house2} alt="house 2" />
        <Icon>
          <use xlinkHref={`${sprite}#icon-heart-full`} />
        </Icon>
        <HomeTitle>Modern Glass Villa</HomeTitle>
        <Detail className="mt">
          <svg>
            <use xlinkHref={`${sprite}#icon-map-pin`} />
          </svg>
          <p>Canada</p>
        </Detail>
        <Detail className="mt">
          <svg>
            <use xlinkHref={`${sprite}#icon-profile-male`} />
          </svg>
          <p>6 rooms</p>
        </Detail>
        <Detail>
          <svg>
            <use xlinkHref={`${sprite}#icon-expand`} />
          </svg>
          <p>
            450 m<sup>2</sup>
          </p>
        </Detail>
        <Detail>
          <svg>
            <use xlinkHref={`${sprite}#icon-key`} />
          </svg>
          <p>$2,750,000</p>
        </Detail>

        <HomeButton>Contact realtor</HomeButton>
      </Home>
      <Home>
        <Img src={house3} alt="house 3" />
        <Icon>
          <use xlinkHref={`${sprite}#icon-heart-full`} />
        </Icon>
        <HomeTitle>Cozy country house</HomeTitle>
        <Detail className="mt">
          <svg>
            <use xlinkHref={`${sprite}#icon-map-pin`} />
          </svg>
          <p>UK</p>
        </Detail>
        <Detail className="mt">
          <svg>
            <use xlinkHref={`${sprite}#icon-profile-male`} />
          </svg>
          <p>4 rooms</p>
        </Detail>
        <Detail>
          <svg>
            <use xlinkHref={`${sprite}#icon-expand`} />
          </svg>
          <p>
            250 m<sup>2</sup>
          </p>
        </Detail>
        <Detail>
          <svg>
            <use xlinkHref={`${sprite}#icon-key`} />
          </svg>
          <p>$850,000</p>
        </Detail>

        <HomeButton>Contact realtor</HomeButton>
      </Home>
      <Home>
        <Img src={house4} alt="house 4" />
        <Icon>
          <use xlinkHref={`${sprite}#icon-heart-full`} />
        </Icon>
        <HomeTitle>Large Rustical Villa</HomeTitle>
        <Detail className="mt">
          <svg>
            <use xlinkHref={`${sprite}#icon-map-pin`} />
          </svg>
          <p>Portugal</p>
        </Detail>
        <Detail className="mt">
          <svg>
            <use xlinkHref={`${sprite}#icon-profile-male`} />
          </svg>
          <p>6 rooms</p>
        </Detail>
        <Detail>
          <svg>
            <use xlinkHref={`${sprite}#icon-expand`} />
          </svg>
          <p>
            480 m<sup>2</sup>
          </p>
        </Detail>
        <Detail>
          <svg>
            <use xlinkHref={`${sprite}#icon-key`} />
          </svg>
          <p>$1,950,000</p>
        </Detail>

        <HomeButton>Contact realtor</HomeButton>
      </Home>
      <Home>
        <Img src={house5} alt="house 5" />
        <Icon>
          <use xlinkHref={`${sprite}#icon-heart-full`} />
        </Icon>
        <HomeTitle>Magestic Palace House</HomeTitle>
        <Detail className="mt">
          <svg>
            <use xlinkHref={`${sprite}#icon-map-pin`} />
          </svg>
          <p>Germany</p>
        </Detail>
        <Detail className="mt">
          <svg>
            <use xlinkHref={`${sprite}#icon-profile-male`} />
          </svg>
          <p>18 rooms</p>
        </Detail>
        <Detail>
          <svg>
            <use xlinkHref={`${sprite}#icon-expand`} />
          </svg>
          <p>
            4230 m<sup>2</sup>
          </p>
        </Detail>
        <Detail>
          <svg>
            <use xlinkHref={`${sprite}#icon-key`} />
          </svg>
          <p>$9,500,000</p>
        </Detail>
        <HomeButton>Contact realtor</HomeButton>
      </Home>
      <Home>
        <Img src={house6} alt="house 6" />
        <Icon>
          <use xlinkHref={`${sprite}#icon-heart-full`} />
        </Icon>
        <HomeTitle>Modern Family Apartment</HomeTitle>
        <Detail className="mt">
          <svg>
            <use xlinkHref={`${sprite}#icon-map-pin`} />
          </svg>
          <p>Italy</p>
        </Detail>
        <Detail className="mt">
          <svg>
            <use xlinkHref={`${sprite}#icon-profile-male`} />
          </svg>
          <p>3 rooms</p>
        </Detail>
        <Detail>
          <svg>
            <use xlinkHref={`${sprite}#icon-expand`} />
          </svg>
          <p>
            100 m<sup>2</sup>
          </p>
        </Detail>
        <Detail>
          <svg>
            <use xlinkHref={`${sprite}#icon-key`} />
          </svg>
          <p>$600,000</p>
        </Detail>

        <HomeButton>Contact realtor</HomeButton>
      </Home>
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 7rem;
  margin: 15rem 0;
`;

const Home = styled.div`
  background-color: ${props => props.theme.colorGreyLight1};

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 3.5rem;
`;

const Img = styled.img`
  width: 100%;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  z-index: 1;
`;

const Icon = styled.svg`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  fill: ${props => props.theme.colorPrimary};
  height: 2rem;
  width: 2rem;
  z-index: 2;
  justify-self: end;
  margin: 1rem;
`;

const HomeTitle = styled.h5`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  z-index: 2;
  justify-self: center;
  align-self: end;

  transform: translateY(50%);
  width: 80%;
  font-family: ${props => props.theme.fontDisplay};
  text-align: center;
  font-size: 1.6rem;
  font-weight: 400;
  padding: 1.25rem;
  background-color: ${props => props.theme.colorSecondary};
  color: #fff;
`;

const Detail = styled.div`
  font-size: 1.5rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;

  & svg {
    fill: ${props => props.theme.colorPrimary};
    height: 2.5rem;
    width: 2.5rem;
    margin-right: 1rem;
  }
`;

const HomeButton = styled(Button)`
  grid-column: 1 / -1;
`;
