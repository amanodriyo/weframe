import React from 'react'
import PropTypes from 'prop-types';

const Button = ({ children, height, width, background, border, borderRadius, cursor, color, paddingLeft, paddingRight }) => {
  return (
    <button
      style={{ height, width, background, border, borderRadius, cursor, color, paddingLeft, paddingRight }}
      >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  className: PropTypes.string,
  cursor: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
};

Button.defaultProps = {
  height: '2rem',
  type: 'button',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  color: 'white',
  paddingLeft: '10px',
  paddingRight: '10px'
};


export default Button