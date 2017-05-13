'use strict'

import React, { PureComponent } from 'react'

import './css/style.css'

class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      color: 'purple'
    }

    this.handleClick = () => {
      this.setState({ color: 'black' })
    }
  }

  render () {
    console.log('render')
    return (
      <div>
        <span>Color name: {this.state.color}</span>
        <br />
        <button onClick={this.handleClick}>
          Change color to black
        </button>
      </div>
    )
  }
}

export default App
