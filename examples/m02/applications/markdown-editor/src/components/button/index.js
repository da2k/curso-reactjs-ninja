'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import css from 'strclass'
import './button.css'

const Button = ({ onClick, children, kind }) => (
  <button onClick={onClick} className={css({ [`-${kind}`]: kind }, 'button')}>
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  kind: PropTypes.oneOf(['success', 'danger'])
}

export default Button
