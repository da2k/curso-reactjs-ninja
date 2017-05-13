'use strict'

import React, { Component } from 'react'
import Message from 'components/message'

class MessageList extends Component {
  render () {
    return (
      <ul>
        {this.props.messages.map((message) => (
          <Message text={message.text} key={message.text} />
        ))}
      </ul>
    )
  }
}

export default MessageList
