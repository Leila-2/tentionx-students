import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  th {
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    /* identical to box height, or 20px */

    /* Gray Mid */

    color: #777777;
    opacity: 0.8;
    padding: 14px;

    text-align: start;
    vertical-align: middle;
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
  }

  td {
    padding: 14px;
    vertical-align: middle;
  }
`;
