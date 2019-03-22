import React, { createContext } from 'react'
import t from 'prop-types'

export const AuthContext = createContext()

function Auth ({ children }) {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}

Auth.propTypes = {
  children: t.node.isRequired
}

export default Auth
