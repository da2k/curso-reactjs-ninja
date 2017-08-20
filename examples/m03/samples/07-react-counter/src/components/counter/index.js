'use strict'

import React, { PureComponent } from 'react'
import Counter from './counter'

class CounterContainer extends PureComponent {
  constructor () {
    super()

    this.increment = () => {
      this.props.store.dispatch({ type: 'INCREMENT' })
    }

    this.decrement = () => {
      this.props.store.dispatch({ type: 'DECREMENT' })
    }
  }

  componentDidMount () {
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    return (
      <Counter
        counter={this.props.store.getState()}
        increment={this.increment}
        decrement={this.decrement}
      />
    )
  }
}

export default CounterContainer
