'use strict'

import React, { PureComponent } from 'react'
import Counter from './counter'
import { connect } from 'react-redux'

class CounterContainer extends PureComponent {
  constructor () {
    super()

    this.increment = () => {
      this.props.dispatch({ type: 'INCREMENT' })
    }

    this.decrement = () => {
      this.props.dispatch({ type: 'DECREMENT' })
    }
  }

  render () {
    return (
      <Counter
        counter={this.props.counter}
        increment={this.increment}
        decrement={this.decrement}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps)(CounterContainer)
