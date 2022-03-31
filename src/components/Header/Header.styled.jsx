import styled from "styled-components";

export const Switcher = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #777777;
  padding: 6px 12px;
`;
export const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 0px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #777777;
  padding: 6px 12px;

  transition-duration: 500ms;
  &:hover {
    background-color: #a6192e;
    color: #fff;
  }
  &:not(:last-child) {
    margin-right: 16px;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: baseline;
  margin-right: 63px;
`;
