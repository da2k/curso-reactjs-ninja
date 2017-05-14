'use strict'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import MessageList from 'components/message-list'

import './css/style.css'

class App extends PureComponent {
  constructor () {
    super()

    this.setColor = (color, update) => (e) => {
      this.store.color = color
      update()
    }

    this.store = {
      color: 'purple',
      setColor: this.setColor
    }
  }

  getChildContext () {
    return {
      store: this.store
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
  store: PropTypes.object
}

export default App
