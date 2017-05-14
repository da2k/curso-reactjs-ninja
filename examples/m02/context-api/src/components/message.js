'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Message extends Component {
  render () {
    return (
      <li style={{ background: this.context.color }}>
        {this.props.text}
        <button onClick={this.context.setColor(this.props.color)}>Change color</button>
      </li>
    )
  }
}

Message.contextTypes = {
  color: PropTypes.string,
  setColor: PropTypes.func
}

export default Message
