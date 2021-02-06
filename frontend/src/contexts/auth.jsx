import { createContext, useEffect } from 'react'

import AuthService from '../services/auth'
import useStorage from '../utils/storage'


export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  // events
  const [auth, setAuth, removeAuth] = useStorage('auth')

  // effects
  useEffect(() => {
    if (auth.token) {
      AuthService.validate(auth.token).then(setAuth).catch(removeAuth)
    }
  }, [])

  // render
  return (
    <AuthContext.Provider value={{ auth, setAuth, removeAuth }}>
      { children}
    </AuthContext.Provider>
  )
}

export default AuthProvider