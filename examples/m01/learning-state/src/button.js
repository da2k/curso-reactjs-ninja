'use strict'

import React from 'react'

const Button = ({ children, handleClick }) => (
  <button onClick={handleClick}>
    {children}
  </button>
)

export default Button
