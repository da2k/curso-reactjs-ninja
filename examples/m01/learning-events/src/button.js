'use strict'

import React from 'react'

const Button = ({ children, handleClick }) => (
  <button className='main-button' onClick={handleClick}>
    {children}
  </button>
)

export default Button
