import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { AuthContext } from '../contexts/auth'
import AuthService from '../services/auth'



const NavBar = ({ children }) => {
  // context
  const { auth, setAuth } = useContext(AuthContext)

  // events
  const history = useHistory()

  // functions/handlers
  const logoutHandler = (e) => {
    e.preventDefault()
    AuthService.logout(auth.token)
      .then((suc) => {
        setAuth({})
        history.push('/')
      })
  }

  // render
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning mb-5">

        {/* Brand */}
        <a className="navbar-brand" href="/">TO DO</a>

        {/* Toggler Button */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Item */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Paginations */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/lists">Lists</a>
            </li>
          </ul>

          {/* Login/Logout/User */}
          {Object.keys(auth).length === 0
            ?
            // if user is not loged in
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signin">Sign In</a>
              </li>
            </ul>
            :
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/user"><strong>{auth.user.username}</strong> </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" onClick={logoutHandler}>Logout</a>
              </li>
            </ul>
          }


        </div>


      </nav>
      {children}
    </div>
  )
}

export default NavBar