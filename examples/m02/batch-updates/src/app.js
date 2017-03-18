'use strict'

import React, { Component } from 'react'

import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = { counter: 0 }
  }

  incrementCounter (state) {
    return { counter: state.counter + 1 }
  }

  incrementCounter2 (state) {
    return { counter: state.counter + 2 }
  }

  componentDidMount () {
    this.setState(this.incrementCounter)
    this.setState(this.incrementCounter)
    this.setState(this.incrementCounter)
    this.setState(this.incrementCounter2)
  }

  render () {
    const { counter } = this.state
    console.log('render:', counter)

    return (
      <div>counter: {counter}</div>
    )
  }
}

export default App
