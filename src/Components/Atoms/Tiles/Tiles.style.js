import styled from "styled-components";

const TilesContainer = styled.div`
  box-shadow: 3px 2px 3px #00000029;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #e2f0ff;
  border-radius: 4px;
  background: #f6f6f6;
  width: 112px;
  height: 102px;
  font-weight: bold;
  color: #0a0e1b;
`;

const TilesHeader = styled.div`
  font-size: 14px;
`;

const TilesData = styled.div`
  font-size: 40px;
`;

export { TilesContainer, TilesHeader, TilesData };
