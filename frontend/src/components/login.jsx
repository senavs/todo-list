import React, { useContext, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'

import { AuthContext } from '../contexts/auth'
import AuthService from '../services/auth'


const Login = () => {
  // context
  const { auth, setAuth } = useContext(AuthContext)

  // events
  const history = useHistory()
  const [formdata, setFormData] = useState(() => ({ username: '', password: '' }))
  const [errorForm, setErrorForm] = useState('')

  // functions/handlers
  const onChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formdata,
      [name]: value
    })
  }

  const onSubimit = (e) => {
    e.preventDefault()

    const { username, password } = formdata
    AuthService.login(username, password)
      .then((suc) => {
        setErrorForm('')
        setAuth(suc)
        return history.push('/')
      })
      .catch((err) => {
        setErrorForm(err.message)
      })
  }

  // render
  if (Object.keys(auth).length !== 0) {
    return (
      <Redirect to="/" />
    )
  } else {
    return (
      <div className="col col-6 mx-auto">
        {/* Error popup message */}
        {
          errorForm && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error:</strong> {errorForm}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        }

        {/* Login form */}
        <form onSubmit={onSubimit}>
          <div className="form-group">
            <label>Username</label>
            <input className="form-control" placeholder="Enter your username" type="text" name="username" value={formdata.username} onChange={onChange} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" placeholder="Enter your password" type="password" name="password" value={formdata.password} onChange={onChange} required />
          </div>
          <button type="submit" className="btn btn-warning" >Login</button>
        </form>
      </div>
    )
  }

}

export default Login