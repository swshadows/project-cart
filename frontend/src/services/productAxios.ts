import axios from 'axios'

const host = import.meta.env.VITE_HOST || 'http://localhost:3000'

export default {
  // Pega os produtos da API
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
  },

  // Insere um produto
  async add(name: string, qty: number, price: number) {
    const data = { name, qty, price }
    axios
      .post(`${host}/product/add`, data)
      .then((res) => {
        return res
      })
      .catch((err) => console.log(err))
  },

  // Atualiza o produto pelo ID
  async update(id: number, name: string, qty: number, price: number) {
    const data = { name, qty, price }
    axios
      .put(`${host}/product/update/${id}`, data)
      .then((res) => {
        return res
      })
      .catch((err) => console.log(err))
  }
}
