import styled from "styled-components";

const StyledButton = styled.button`
  background: #295D93;
  color:white;
  width: 8rem;
  position: relative;
  padding: 10px 16px;
  height: 40px;
  border: none;
  border-radius: 0.5rem;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.26px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  white-space: nowrap;
  &:focus {
    outline: none;
  }
`;

export {
    StyledButton
}


