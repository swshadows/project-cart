import axios from 'axios'

const host = import.meta.env.VITE_HOST || 'http://localhost:3000'

export default {
  // Pega as notas da API
  async getAll() {
    const data = axios
      .get(`${host}/receipt/get-all`)
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        console.log(err)
      })
    return data
  },

  // Insere uma nota ao confirmar compra do produto
  async add(payment: string, deliver: string) {
    const data = { payment, deliver }
    axios
      .post(`${host}/receipt/add`, data)
      .then((res) => {
        return res
      })
      .catch((err) => console.log(err))
  }
}
