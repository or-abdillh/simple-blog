import axios from 'axios'

const endpoint = 'http://express-starter.herokuapp.com'
const fullPath = path => `${endpoint}${path}`

const headers = { token: localStorage.getItem('$blog-token') || 'ACCESS_TOKEN' }

const http = {
  
  // Callback(status, data)
  async get(path, callback) {
    try {
      const results = await axios.get(fullPath(path))
      callback(true, results.data)
    } catch(err) {
      if (err.response) callback(false, err.response.data)
      else callback(false, err)
    }
  }
}

export default http
