'use strict'

import React from 'react'

const Counter = ({ counter, increment, decrement }) => (
  <div>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
)

export default Counter
