import React, { createContext, lazy, useState, Fragment, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CssBaseline, LinearProgress } from '@material-ui/core'

const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))

export const ColorContext = createContext()

function App () {
  const [color, setColor] = useState('black')

  return (
    <Fragment>
      <ColorContext.Provider value={{
        color,
        setColor
      }}>
        <CssBaseline />

        <BrowserRouter>
          <Suspense fallback={<LinearProgress />}>
            <Switch>
              <Route path='/login' component={Login} />
              <Route component={MainPage} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </ColorContext.Provider>
    </Fragment>
  )
}

export default App
