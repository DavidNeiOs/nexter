import styled from "styled-components";

export const Button = styled.button`
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
