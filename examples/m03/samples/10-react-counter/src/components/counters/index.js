'use strict'

import React from 'react'
import Counter from 'components/counter'
import { connect } from 'react-redux'

const Counters = ({ counter, increment, decrement }) => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    {[0, 0, 0].map((item, index) => (
      <Counter
        key={index}
        counter={counter}
        increment={increment}
        decrement={decrement}
      />
    ))}
  </div>
)

const mapStateToProps = (state) => ({
  counter: state
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counters)
