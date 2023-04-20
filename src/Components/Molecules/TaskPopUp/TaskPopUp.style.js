import styled from "styled-components";


const chipColors = {
    Done: "#295D93",
    Hold: "#E97525",
    "In Progress": "#3BC820",
    minor: "#3BC820",
    average: "#295D93",
    major: "#E97525",
    critical: "#EF1414",
  };


const TaskPopUpContainer = styled.div`
  position: absolute;
  top: 30px;
  z-index: 111;
  width: 327px;
  height: 70%;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
  border: 2px solid #cee3fc;
`;

const TaskChip = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: ${({color}) => chipColors[color]};
`;

export { TaskPopUpContainer, TaskChip };
