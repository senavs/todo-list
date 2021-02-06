import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { AuthContext } from '../contexts/auth'


const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={() => (auth === {}) ? <Component {...rest} /> : <Redirect to="/login" />}
    />
  )

}

export default PrivateRoute