import React, { createContext, useCallback, useEffect, useState } from 'react'
import t from 'prop-types'
import firebase, { db } from 'services/firebase'

const AuthContext = createContext()

function AuthProvider ({ children }) {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  })

  useEffect(() => {
    console.log('dados do usuário:', userInfo.user)
    const uid = userInfo.user?.uid || 'EMPTY'
    db.collection('users').doc(uid).get().then(doc => {
      console.log('existe?', doc.exists, uid)
      if (doc.exists || uid === 'EMPTY') {
        console.log('já existe ou é EMPTY:', doc, uid)
        return
      }

      db.collection('users').doc(uid).set({
        email: userInfo.user.email,
        name: userInfo.user.displayName,
        role: 'user'
      })
    })
  }, [userInfo])

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
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: t.node.isRequired
}

export { AuthProvider, AuthContext }
