'use strict'

import React, { PropTypes } from 'react'
import './button.css'

const Button = ({ onClick, children, kind }) => (
  <button onClick={onClick} className={`button ${kind ? '-' + kind : ''}`}>
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  kind: PropTypes.oneOf(['success', 'danger'])
}

export default Button
