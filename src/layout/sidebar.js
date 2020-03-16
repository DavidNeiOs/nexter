import styled from "styled-components";

export const Sidebar = styled.div`
  background-color: ${props => props.theme.colorPrimary};
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1 / -1;
`;
