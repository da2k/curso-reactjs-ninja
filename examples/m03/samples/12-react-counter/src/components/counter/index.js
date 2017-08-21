'use strict'

import React from 'react'

const Counter = ({ counter, increment, decrement, removeCounter }) => (
  <div style={{ position: 'relative', border: '1px solid #000', padding: 5 }}>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
    <button style={{ fontSize: 7, position: 'absolute', right: 5, top: 5 }} onClick={removeCounter}>
      &times;
    </button>
  </div>
)

export default Counter
