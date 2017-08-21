'use strict'

import React from 'react'
import Counter from 'components/counter'
import { connect } from 'react-redux'
import {
  ADD_COUNTER,
  REMOVE_COUNTER,
  INCREMENT,
  DECREMENT
} from 'reducers/counters'

const Counters = ({ counters, addCounter, removeCounter, increment, decrement }) => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {counters.map((counter, index) => (
        <Counter {...{
          key: index,
          counter,
          removeCounter: removeCounter(index),
          increment: increment(index),
          decrement: decrement(index)
        }} />
      ))}
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 10 }}>
      <button onClick={addCounter}>Adicionar contador</button>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  counters: state
})

const mapDispatchToProps = (dispatch) => ({
  addCounter: () => dispatch({ type: ADD_COUNTER }),
  removeCounter: (index) => () => dispatch({ type: REMOVE_COUNTER, index }),
  increment: (index) => () => dispatch({ type: INCREMENT, index }),
  decrement: (index) => () => dispatch({ type: DECREMENT, index })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counters)
