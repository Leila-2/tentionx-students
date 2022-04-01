import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 40px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  padding: 0px 40px;
  tbody {
    box-shadow: 0px 1px 4px rgba(60, 52, 135, 0.15);
  }
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

  tr:nth-child(odd) {
    background: #ffffff;
  }

  tr:nth-child(even) {
    background: #f9f9f9;
    box-shadow: 0px 1px 4px rgba(60, 52, 135, 0.15);
  }
`;

export const Score = styled.span`
  color: ${({ scoreType }) =>
    scoreType < 50 + "%"
      ? "#DB4437"
      : scoreType < 80 + "%"
      ? "#E2B534"
      : scoreType < 90 + "%"
      ? " #0F9D58"
      : scoreType >= 90 + "%"
      ? "#4285F4"
      : ""};
`;

export const Speed = styled.span`
  color: ${({ speedType }) => {
    switch (speedType) {
      case "As Expected":
        return "#0F9D58";
      case "Above Expected":
        return "#4285F4";
      case "Below Expected":
        return "#DB4437";
      default:
        return "Text Gray Main";
    }
  }};
`;

export const Checkbox = styled.input`
  color: #777777;
`;
