'use strict'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import MessageList from 'components/message-list'

import './css/style.css'

class App extends PureComponent {
  constructor () {
    super()
    this.state = { color: 'purple' }

    this.setColor = (color) => (e) => {
      this.setState({ color })
    }
  }

  getChildContext () {
    return {
      color: this.state.color,
      setColor: this.setColor
    }
  }

  render () {
    return (
      <MessageList
        messages={[
          { text: 'hey', color: 'orange' },
          { text: 'ho', color: 'lightblue' },
          { text: `let's go`, color: 'red' }
        ]}
      />
    )
  }
}

App.childContextTypes = {
  color: PropTypes.string,
  setColor: PropTypes.func
}

export default App
