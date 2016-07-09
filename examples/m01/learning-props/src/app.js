'use strict'

import React, { Component } from 'react'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div className='container'>
        {['blue', 'red', 'blue'].map((square, index) => (
          <Square key={index} color={square} />
        ))}
      </div>
    )
  }
}

export default App
