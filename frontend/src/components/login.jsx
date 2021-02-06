import React, { useContext } from 'react'

import Home from './home'
import { AuthContext } from '../contexts/auth'


const Login = () => {
  const { auth } = useContext(AuthContext)


  if (auth === {}) {
    return (
      <Home></Home>
    )
  } else {
    return (
      <div>
        <h1>Login</h1>
      </div>
    )
  }

}

export default Login