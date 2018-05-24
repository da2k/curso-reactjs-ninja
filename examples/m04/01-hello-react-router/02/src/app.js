'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import './css/style.css'

class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      title: '...',
      Component: 'div'
    }
  }

  getTitle () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('My app with async / await!')
      }, 2000)
    })
  }

  async componentDidMount () {
    const title = await import('components/title')

    this.setState({
      title: await this.getTitle(),
      Component: title.default
    })
  }

  render () {
    return (
      <BrowserRouter>
        <div>
          <this.state.Component>{this.state.title}</this.state.Component>

          <Route path='/sobre' component={Sobre} />
          <Link to='/sobre'>Sobre</Link>

        </div>
      </BrowserRouter>
    )
  }
}

const Sobre = () => (
  <h1>Sobre</h1>
)

export default App
