import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-rows: 80vh min-content 40vw repeat(3, min-content);
  grid-template-columns:
    [sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr)
    [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
    [center-end] minmax(6rem, 1fr) [full-end];

  ${({ theme }) => theme.bpLarge`
    grid-template-rows: 6rem 80vh min-content 40vw repeat(3, min-content);
    grid-template-columns:
      [full-start] minmax(
      6rem,
      1fr
      ) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
      [center-end] minmax(6rem, 1fr) [full-end];
  `}
  ${({ theme }) => theme.bpMedium`
    grid-template-rows: 6rem calc(100vh - 6rem);
  `}
`;
