'use strict'

import React, { PropTypes } from 'react'

import './title.css'

const Title = ({ children }) => (
  <h1>{children}</h1>
)

Title.propTypes = {
  children: PropTypes.node.isRequired
}

export default Title
