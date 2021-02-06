export const config = {
  url: {
    auth: {
      login: process.env.URL_AUTH_LOGIN || 'http://0.0.0.0:8080/auth/login',
      logout: process.env.URL_AUTH_LOGOUT || 'http://0.0.0.0:8080/auth/logout',
      validate: process.env.URL_AUTH_VALIDATE || 'http://0.0.0.0:8080/auth/validate',
    },
    lists: {
      list: process.env.URL_LIST_LIST || 'http://0.0.0.0:8080/lists/list'
    }
  }
}