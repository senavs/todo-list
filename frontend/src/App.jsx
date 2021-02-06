import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthProvider from './contexts/auth'
import PrivateRoute from './routes/private'
import Home from './components/home'
import Login from './components/login'
import List from './components/list'
import NavBar from './components/navbar';


const App = () => {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <NavBar>
            <Route exact={true} path='/' component={Home} />
            <Route exact={true} path='/login' component={Login} />
            <PrivateRoute exact={true} path='/list' component={List} />
          </NavBar>
        </AuthProvider>
      </Switch>
    </Router>
  )
}

export default App