import Rect, { createContext, useEffect } from 'react'

import AuthService from '../services/auth'
import useStorage from '../utils/storage'


export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [auth, setAuth, removeAuth] = useStorage('auth')

  useEffect(() => {
    if (auth.token) {
      AuthService.validate(auth.token).then(setAuth).catch(removeAuth)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ auth }}>
      { children}
    </AuthContext.Provider>
  )
}

export default AuthProvider