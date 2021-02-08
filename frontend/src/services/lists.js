import axios from 'axios'

import { config } from '../config/config.js'


export default class ListsService {

  static async list(token) {
    try {
      const response = await axios.get(config.url.lists.list, { headers: { Authenticate: `Bearer ${token}` } })
      return response.data
    } catch (error) {
      return error.response.data
    }
  }

}

// console.log(AuthService.validate('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTI2MzE2ODAsImV4cCI6MTYxMjYzNTI4MCwidXNlciI6eyJ1c2VybmFtZSI6InNlbmF2cyIsImlkX3VzZXIiOjF9fQ.-Z3idUwW0iMA20IdkyFWP56NoI88lE1cwWo3XN2JEbU').then(console.log).catch(console.log))