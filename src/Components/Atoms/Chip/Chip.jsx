import React from "react";
import { ChipContainer } from "./Chip.style";

const Chip = ({ children, status }) => {
  return <ChipContainer color={status}>{children}</ChipContainer>;
};

export default Chip;
