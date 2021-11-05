import { makeAutoObservable } from 'mobx'
import axios from 'axios'

class RootStore {
  constructor () {
    makeAutoObservable(this)
  }

  info = []
  loading = false

  async getHomePageInfo () {
    this.loading = true
    try {
      const response = await axios.get("http://localhost:7000/info")
      this.loading = false
      console.log(this.info, 'info')
      this.info = await response.data
      console.log(this.info, 'info')
    } catch (e) {
      this.loading = false
      console.log(e)
      return e
    }
  }
}

export default new RootStore()