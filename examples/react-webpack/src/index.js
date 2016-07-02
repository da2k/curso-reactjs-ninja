'use strict'

import React from 'react'
import { render } from 'react-dom'
import Title from './app'

render(
  React.createElement(Title),
  document.querySelector('[data-js="app"]')
)
