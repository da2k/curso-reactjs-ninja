'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import './css/style.css'

class App extends PureComponent {
  render () {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/sobre'>Sobre</Link></li>
            <li><Link to='/contato'>Contato</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
          </ul>

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/(sobre|contato)' component={Page} />
            <Route path='/blog' component={Blog} />
            <Route component={Error404} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const Error404 = () => (
  <h1>Página não encontrada</h1>
)

const Home = () => (
  <h1>Home</h1>
)

const Page = ({ match }) => (
  <div>
    {console.log(match)}
    <h1>{match.url}</h1>
  </div>
)

const Blog = () => (
  <div>
    <h1>Blog</h1>

    <ul>
      <li><Link to='/blog/post-1'>Post 1</Link></li>
      <li><Link to='/blog/post-2'>Post 2</Link></li>
    </ul>

    <Switch>
      <Route exact path='/blog' component={NoPosts} />
      <Route path='/blog/:post(post-[12])' component={Post} />
      <Route component={Post404} />
    </Switch>
  </div>
)

const Post404 = () => (
  <h1>Esse post não existe</h1>
)

const Post = ({ match }) => (
  <div>
    <h2>Post: {match.params.post}</h2>
  </div>
)

const NoPosts = () => (
  <p>Selecione um post</p>
)

export default App
