'use strict'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import MessageList from 'components/message-list'

import './css/style.css'

class App extends PureComponent {
  constructor () {
    super()

    let subscriptions = []

    const subscribe = (f) => {
      subscriptions.push(f)
      return () => {
        subscriptions = subscriptions.filter((func) => func !== f)
      }
    }

    const setColor = (color) => (e) => {
      this.store.color = color
      subscriptions.forEach(f => f())
    }

    this.store = {
      color: 'purple',
      setColor,
      subscribe
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
