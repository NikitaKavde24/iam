import styled from "styled-components";

const ChipColors = {
  Done: "#3BC820",
  Hold: "#E97525",
  "In Progress": "#377EC7",
};

const ChipContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 32px 4px 32px;
  background: ${({ color }) =>
    !color ? ChipColors["Done"] : ChipColors[color]};
  width: 111px;
  height: 32px;
  font-weight: 500;
  font-size: 16px;
  border-radius: 16px;
  color:#ffffff
`;

export { ChipContainer };