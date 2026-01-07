import { email } from "react-admin"

const authProvider = {
  login: ({ username, password }) => {
    return fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Login failed')
        }
        return res.json()
      })
      .then(data => {
        localStorage.setItem('token', data.token)
      })
  },

  logout: () => {
    localStorage.removeItem('token')
    return Promise.resolve()
  },

  checkAuth: () =>
    localStorage.getItem('token')
      ? Promise.resolve()
      : Promise.reject(),

  checkError: () => Promise.resolve(),
  getPermissions: () => Promise.resolve()
}

export default authProvider
