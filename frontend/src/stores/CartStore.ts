import { defineStore } from 'pinia'
import { ref } from 'vue'

// Definindo tipo produto para padronizar a store do carrinho
type Product = {
  id: number
  name: string
  price: number
  qtdCart: number
}

export const useCartStore = defineStore('cart', () => {
  // Carrinho
  const items = ref([] as Product[])

  // Contar quantos itens unicos tem no carrinho, para mostrar no header
  const countItems = () => {
    return items.value.length
  }

  // Calcula o preço total, baseado na quantidade de itens unicos com o preço base de cada
  const calcTotalPrice = () => {
    const prices = items.value.map((item) => {
      return item.price * item.qtdCart
    })
    return prices.reduce((acc, curr) => acc + curr, 0)
  }

  return { items, countItems, calcTotalPrice }
})
