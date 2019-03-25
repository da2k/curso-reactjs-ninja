import React, { lazy, useEffect, useContext, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import firebase from 'services/firebase'
import { AuthContext } from 'contexts/auth'

const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))

function App () {
  const { setUserInfo } = useContext(AuthContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('dados do usuário:', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [])

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

export default App
