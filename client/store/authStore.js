import { makeAutoObservable } from 'mobx'
import axios from 'axios'

class AuthStore {
  constructor () {
    makeAutoObservable(this)
  }

  async register(username, email, password) {
    try {
      const response = await axios.post(`http://localhost:7000/register`, { username, email, password });
      console.log(response.data)
    } catch (e) {
      console.log(e)
      return e
    }
  }
}

export default new AuthStore();