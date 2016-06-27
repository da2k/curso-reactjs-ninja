'use strict'

var React = require('react')
var ReactDOM = require('react-dom')
var Title = require('./app')

ReactDOM.render(
  React.createElement(Title),
  document.querySelector('[data-js="app"]')
)
