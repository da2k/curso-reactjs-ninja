'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'

import './css/style.css'

// const Link = (props) => (
//   <NavLink activeStyle={{ color: 'red' }} {...props} />
// )

const Link = (props) => (
  <Route path={props.to} exact={props.exact}>
    {({ match, history }) => (
      <a
        href={props.to}
        style={match ? { color: 'red' } : null}
        onClick={(e) => {
          e.preventDefault()
          history.push(props.to)
        }}
      >
        {props.children}
      </a>
    )}
  </Route>
)

class App extends PureComponent {
  render () {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to='/' exact>Home</Link></li>
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
      <Route exact path='/blog' render={(props) => <NoPosts numberOfPosts={2} {...props} />} />
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

const NoPosts = ({ numberOfPosts }) => (
  <p>Selecione um dos {numberOfPosts} posts</p>
)

export default App
