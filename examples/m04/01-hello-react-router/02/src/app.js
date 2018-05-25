'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import './css/style.css'

class App extends PureComponent {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Home} />
          <Route path='/sobre' component={Sobre} />
          <Route path='/contato' component={Contato} />

          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/sobre'>Sobre</Link></li>
            <li><Link to='/contato'>Contato</Link></li>
          </ul>

        </div>
      </BrowserRouter>
    )
  }
}

const Home = () => (
  <h1>Home</h1>
)

const Sobre = () => (
  <h1>Sobre</h1>
)

const Contato = () => (
  <h1>Contato</h1>
)

export default App
