'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '2'
    }
  }
  render () {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log('event', e)
        }}

        onChange={(e) => {
          console.log('name', e.target.name)
          console.log('value', e.target.value)
        }}
      >
        <input type='name' name='name' />
        <input type='email' name='email' />

        <button type='submit'>Enviar</button>
      </form>
    )
  }
}

export default App
