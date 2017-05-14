'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Message extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <li style={{ background: this.context.store.color }}>
        {this.props.text}
        <button onClick={this.context.store.setColor(this.props.color, () => this.forceUpdate())}>Change color</button>
      </li>
    )
  }
}

Message.contextTypes = {
  store: PropTypes.object
}

export default Message
