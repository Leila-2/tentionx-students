import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  th {
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;

    color: #777777;
    opacity: 0.8;
    padding: 14px;

    text-align: start;
    vertical-align: middle;
  }

  td {
    padding: 14px;
    vertical-align: middle;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #777777;
    padding: 14px;
  }
  tr {
    box-shadow: 0px 1px 4px rgba(60, 52, 135, 0.15);
  }
  tr:nth-child(odd) {
    background: #ffffff;
  }

  /* Четные строки */
  tr:nth-child(even) {
    background: #f9f9f9;
  }
`;

export const Score = styled.td`
  color: ${(props) => {
    switch (props.scoreType) {
      case "45%":
        return "#0F9D58";
      case "76%":
        return "#fff";
      case "98%":
        return "#f0f0f0";
      default:
        return "red";
    }
  }};
`;
