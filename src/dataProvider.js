import simpleRestProvider from 'ra-data-simple-rest'
import { fetchUtils } from 'react-admin'

const httpClient = (url, options = {}) => {
  options.headers = options.headers || new Headers()
  const token = localStorage.getItem('token')
  if (token) {
    options.headers.set('Authorization', 'Bearer ' + token)
  }
  return fetchUtils.fetchJson(url, options)
}

const dataProvider = simpleRestProvider(
  'http://localhost:8080/api',
  httpClient
)

export default dataProvider