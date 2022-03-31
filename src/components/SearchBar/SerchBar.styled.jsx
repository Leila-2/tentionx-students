import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #5b5b5b;
`;
export const Section = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 8px;
`;
export const SearchForm = styled.form`
  background: #f2f2f2;
  display: flex;
  align-items: center;
`;
export const SearchInp = styled.input`
  width: 499px;
  height: 32px;
  border: none;
  background: transparent;

  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #c0c0c0;
    padding: 6px 12px;
  }
`;
export const Btn = styled.button`
  padding: 6px 12px;
  height: 32px;
`;
