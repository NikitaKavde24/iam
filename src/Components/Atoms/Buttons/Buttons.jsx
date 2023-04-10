import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';



export const Button = ({
  id = '',
  className = '',
  color = 'blue',
  children,
  isLoading,
  disable = false,
  onClick = () => {},
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-red-500 p-5 border-none outline-none m-3 rounded-xl text-white`}
      disabled={disable || props.disabled || isLoading}
      id={id}
      {...props}
    >
      {children}
      {isLoading && (
        <div className={``}>
          Loading...
        </div>
      )}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.any
};

