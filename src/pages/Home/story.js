import React from "react";
import styled from "styled-components";

import image1 from "../../img/story-1.jpeg";
import image2 from "../../img/story-2.jpeg";
import background from "../../img/back.jpg";

import { Heading2, Heading3 } from "../../theme";
export const Story = props => {
  return (
    <>
      <Pictures>
        <Image1 src={image1} alt="first story, couple"></Image1>
        <Image2 src={image2} alt="new house"></Image2>
      </Pictures>
      <Content>
        <Heading3 className="mb-sm">Happy Customers</Heading3>
        <Heading2 className="mb-md">
          &ldquo;The best decision of our lives&rdquo;
        </Heading2>
        <StoryText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </StoryText>
        <Button>Find your home</Button>
      </Content>
    </>
  );
};

const Pictures = styled.div`
  background-image: linear-gradient(
      rgba(198, 153, 99, 0.5),
      rgba(198, 153, 99, 0.5)
    ),
    url(${background});
  grid-column: full-start / col-end 4;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  align-items: center;
`;

const Image1 = styled.img`
  width: 100%;
  grid-row: 2 / 6;
  grid-column: 2 / 6;
  box-shadow: ${props => props.theme.boxShadow1};
`;

const Image2 = styled.img`
  width: 115%;
  grid-row: 4 / 6;
  grid-column: 4/ 7;
  z-index: 20;
  box-shadow: ${props => props.theme.boxShadow2};
`;

const Content = styled.div`
  background-color: ${props => props.theme.colorGreyLight1};
  grid-column: col-start 5 / full-end;
  padding: 6rem 8vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StoryText = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 4rem;
`;

const Button = styled.button`
  background-color: ${props => props.theme.colorPrimary};
  color: #fff;
  border: none;
  border-radius: 0;
  font-family: ${props => props.theme.fontDisplay};
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1.8rem 3rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.theme.colorPrimaryDark};
  }
`;
