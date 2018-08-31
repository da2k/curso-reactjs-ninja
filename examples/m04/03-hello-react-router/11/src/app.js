'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'

import './css/style.css'

const Link = (props) => (
  <NavLink activeStyle={{ color: 'red' }} {...props} />
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
            <li><a href='#informacoes-do-site'>Informações do site</a></li>
          </ul>

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/(sobre|contato)' component={Page} />
            <Route path='/blog' component={Blog} />
            <Route component={Error404} />
          </Switch>

          <div id='informacoes-do-site' style={{ margin: '1000px 0' }}>
            <h2>Informações do site</h2>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const Error404 = () => (
  <h1>Página não encontrada</h1>
)

const Home = ({ match, location, history }) => (
  <div>
    {console.log('Home location:', location)}
    {console.log('Home history:', history)}
    <h1>Home</h1>
  </div>
)

const Page = ({ match, location, history }) => (
  <div>
    {console.log('Page history:', history)}
    <h1>{match.url}</h1>
  </div>
)

const Blog = ({ match, location, history }) => (
  <div>
    {console.log('Blog history:', history)}
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

const Post404 = ({ match, location, history }) => (
  <div>
    {console.log('Post404 history:', history)}
    <h1>Esse post não existe</h1>
  </div>
)

const Post = ({ match, location, history }) => (
  <div>
    {console.log('Post history:', history)}
    <h2>Post: {match.params.post}</h2>
  </div>
)

const NoPosts = ({ numberOfPosts }) => (
  <p>Selecione um dos {numberOfPosts} posts</p>
)

export default App
