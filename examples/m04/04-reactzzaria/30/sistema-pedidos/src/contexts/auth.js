import React, { createContext, useCallback, useState } from 'react'
import t from 'prop-types'
import firebase from 'services/firebase'

export const AuthContext = createContext()

function Auth ({ children }) {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  })

  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }, [])

  const logout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      console.log('deslogou!')
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      })
    })
  }, [])

  return (
    <AuthContext.Provider value={{
      login,
      logout,
      userInfo,
      setUserInfo
    }}>
      {children}
    </AuthContext.Provider>
  )
}

Auth.propTypes = {
  children: t.node.isRequired
}

export default Auth
