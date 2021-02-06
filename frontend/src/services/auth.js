import axios from 'axios'

import { config } from '../config/config.js'


export default class AuthService {

  static login(username, password) {
    return axios.post(config.url.auth.login, { username, password })
      .then(response => response.data)
      .catch(error => error.response.data)
  }

  static logout(token) {
    return axios.post(config.url.auth.logout, null, { headers: { Authenticate: `Bearer ${token}` } })
      .then(() => true)
      .catch(() => false)
  }

  static async validate(token) {
    const response = axios.post(config.url.auth.validate, null, { headers: { Authenticate: `Bearer ${token}` } })

    try {
      return response.then(response => response.data)
    } catch {
      throw response.catch(error => error.response.data)
    }
  }

}

// console.log(AuthService.validate('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTI2MzE2ODAsImV4cCI6MTYxMjYzNTI4MCwidXNlciI6eyJ1c2VybmFtZSI6InNlbmF2cyIsImlkX3VzZXIiOjF9fQ.-Z3idUwW0iMA20IdkyFWP56NoI88lE1cwWo3XN2JEbU').then(console.log).catch(console.log))