'use strict'

import React from 'react'
import withContext from './with-context'

const Message = ({ store, text, color }) => (
  <li style={{ background: store.color }}>
    {text}
    <button onClick={store.setColor(color)}>Change color</button>
  </li>
)

export default withContext(Message)
