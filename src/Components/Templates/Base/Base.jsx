import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router";


const Base = (props) => {
  return (
      <Outlet />
  );
};

Base.propTypes = {
  animate: PropTypes.bool,
};

Base.defaultProps = {
  animate: true,
};

export default Base;
