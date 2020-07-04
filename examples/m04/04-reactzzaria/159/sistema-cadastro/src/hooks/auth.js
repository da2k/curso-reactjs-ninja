import { useContext } from 'react'
import { AuthContext } from 'contexts'

function useAuth () {
  return useContext(AuthContext)
}

export default useAuth
