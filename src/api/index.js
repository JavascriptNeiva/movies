import axios from 'axios'
import privates from './config.private'
const baseUrl = 'http://www.omdbapi.com'
const privateToken = privates.token

class Datasource {
  getMoviesByName (name, page = 1) {
    return axios.get(`${baseUrl}/`, {
      params: {
        s: name,
        page,
        apikey: privateToken
      }
    })
  }
}

export default new Datasource()
