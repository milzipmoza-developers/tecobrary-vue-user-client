import axios from 'axios'
import config from '../../config'

const base = (token) => {
  const requestConfig = {
    baseURL: config.springUrl
  }
  if (token) {
    requestConfig.headers = {
      Authorization: `Bearer ${token}`
    }
  }
  return axios.create(requestConfig)
}

export default {
  base
}