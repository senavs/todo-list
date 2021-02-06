import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthProvider from './contexts/auth'
import PrivateRoute from './routes/private'
import Home from './components/home'
import Login from './components/login'
import List from './components/list'


const App = () => {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <Route exact={true} path='/' component={Home} />
          <Route exact={true} path='/login' component={Login} />
          <PrivateRoute exact={true} path='/list' component={List} />
        </AuthProvider>
      </Switch>
    </Router>
  )
}

export default App