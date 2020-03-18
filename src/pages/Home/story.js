import React from "react";
import styled from "styled-components";

import image1 from "../../img/story-1.jpeg";
import image2 from "../../img/story-2.jpeg";
import background from "../../img/back.jpg";

import { Heading2, Heading3, Button } from "../../theme";
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
  background-size: cover;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  align-items: center;

  ${({ theme }) => theme.bpMedium`
    grid-column: 1 / -1;
    padding: 3rem;
  `}
`;

const Image1 = styled.img`
  width: 100%;
  grid-row: 2 / 6;
  grid-column: 2 / 6;
  box-shadow: ${props => props.theme.boxShadow1};
  ${({ theme }) => theme.bpMedium`
    grid-column: 1 / 5;
    grid-row: 1 / -1;
  `}
`;

const Image2 = styled.img`
  width: 115%;
  grid-row: 4 / 6;
  grid-column: 4/ 7;
  z-index: 20;
  box-shadow: ${props => props.theme.boxShadow2};
  ${({ theme }) => theme.bpMedium`
    grid-row: 1 / -1;
    width: 100%;
  `}
`;

const Content = styled.div`
  background-color: ${props => props.theme.colorGreyLight1};
  grid-column: col-start 5 / full-end;
  padding: 6rem 8vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${({ theme }) => theme.bpMedium`
    grid-column: 1 / -1;
    grid-row: 5 / 6;
  `}
`;

const StoryText = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 4rem;
`;
