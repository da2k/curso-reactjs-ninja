'use strict'

import React, { Component } from 'react'

import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = { value: '' }

    this.handleSubmit = (e) => {
      e.preventDefault()

      this.setState({
        value: e.target.textarea.value
      })
    }
  }

  render () {
    return (
      <div className='editor'>
        <form onSubmit={this.handleSubmit}>
          <textarea name='textarea' />
          <button type='submit'>Renderizar markup</button>
        </form>

        <div className='view'>
          {this.state.value}
        </div>
      </div>
    )
  }
}

export default App
