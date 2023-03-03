import axios from 'axios'

const host = import.meta.env.VITE_HOST || 'http://localhost:3000'

export default {
  async getAll() {
    const data = axios
      .get(`${host}/product/get-all`)
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        console.log(err)
      })
    return data
  }
}
