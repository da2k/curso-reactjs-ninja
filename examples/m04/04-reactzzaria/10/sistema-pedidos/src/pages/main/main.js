import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

const routes = [
  { path: '/rota1', content: 'Rota 1' },
  { path: '/rota2', content: 'Rota 2' }
]

const Main = () => (
  <Fragment>
    <h1>Main</h1>

    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          render={() => <h2>{route.content}</h2>}
        />
      ))}
    </Switch>
  </Fragment>
)

export default Main
