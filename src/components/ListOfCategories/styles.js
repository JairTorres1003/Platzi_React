import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  overflow: scroll hidden;
  width: 100%;
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 4px;
  }
`;

export const Item = styled.li`
  padding: 0 8px;
`;
