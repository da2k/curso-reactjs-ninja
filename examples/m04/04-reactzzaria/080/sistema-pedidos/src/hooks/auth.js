import { useContext } from 'react'
import { AuthContext } from 'contexts/auth'

function useAuth () {
  return useContext(AuthContext)
}

export default useAuth
