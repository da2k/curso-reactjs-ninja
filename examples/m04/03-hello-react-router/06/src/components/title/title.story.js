'use strict'

import { storiesOf } from '@storybook/react'
import React, { Component } from 'react'
import Title from './index'

const stories = storiesOf('Title', module)

stories.add('without props', () => (
  <Title>Main title</Title>
))

stories.add('async / await', () => {
  class Main extends Component {
    constructor () {
      super()
      this.state = { title: '...' }
    }

    getTitle () {
      return new Promise((resolve, reject) => {
        this.timer = setTimeout(() => {
          resolve('title with async / await!')
        }, 2000)
      })
    }

    async componentDidMount () {
      this.setState({
        title: await this.getTitle()
      })
    }

    componentWillUnmount () {
      clearTimeout(this.timer)
    }

    render () {
      return (
        <Title>{this.state.title}</Title>
      )
    }
  }

  return <Main />
})
