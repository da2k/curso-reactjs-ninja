import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { MainPage } from './pages/main'
import { Login } from './pages/login'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={MainPage} exact />
      <Route path='/login' component={Login} />
    </Switch>
  </BrowserRouter>
)

export default App
