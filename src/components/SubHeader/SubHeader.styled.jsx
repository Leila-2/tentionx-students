import styled from "styled-components";

export const ListItem = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #c0c0c0;
  padding: 8px 12px;
  display: flex;

  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #5b5b5b;
  padding: 4px 0px;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
`;

export const ClearButton = styled.button`
  font-weight: 700;
  display: flex;
`;
