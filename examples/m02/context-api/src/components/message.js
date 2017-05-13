'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Message extends Component {
  render () {
    return (
      <li style={{ background: this.context.color }}>{this.props.text}</li>
    )
  }
}

Message.contextTypes = {
  color: PropTypes.string
}

export default Message
