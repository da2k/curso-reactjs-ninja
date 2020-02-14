import React, { lazy, useEffect, useContext, Suspense } from 'react'
import t from 'prop-types'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import firebase from 'services/firebase'
import { AuthContext } from 'contexts/auth'

const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))

function App ({ location }) {
  const { userInfo, setUserInfo } = useContext(AuthContext)

  const { isUserLoggedIn } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('dados do usuário:', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [])

  if (isUserLoggedIn) {
    console.log('usuário está logado')
    if (location.pathname === '/login') {
      console.log(
        `usuário está logado E está na página de login.
        Redirecionar para home /`
      )
      return <Redirect to='/' />
    } else {
      console.log('usuário está logado MAS NÃO está na página de login.')
    }
  } else {
    console.log('usuário não está logado')
    if (location.pathname !== '/login') {
      console.log(`
        usuário não está logado, NEM está na página de login.
        Redirecionar para /login
      `)
      return <Redirect to='/login' />
    } else {
      console.log('usuário não está logado E está na página de login.')
    }
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

App.propTypes = {
  location: t.object.isRequired
}

export default App
