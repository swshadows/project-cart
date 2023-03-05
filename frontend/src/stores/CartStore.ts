import { defineStore } from 'pinia'
import { ref } from 'vue'

// Definindo tipo produto para padronizar a store do carrinho
type Product = {
  id: number
  name: string
  price: number
  qtdCart: number
  stock: number
}

export const useCartStore = defineStore('cart', () => {
  // Carrinho
  const items = ref([] as Product[])

  // Contar quantos itens unicos tem no carrinho, para mostrar no header
  const countItems = () => {
    return items.value.length
  }

  // Pega o nome dos itens unicos no carrinho
  const getItemNames = () => {
    const names = items.value.map((item) => {
      return `${item.qtdCart}x ${item.name}`
    })
    return names
  }

  // Pega ids dos itens para atualizar o estoque de cada
  const getItems = () => {
    const itemsMap = items.value.map((item) => {
      return item
    })
    return itemsMap
  }

  // Calcula o preço total, baseado na quantidade de itens unicos com o preço base de cada
  const calcTotalPrice = () => {
    const prices = items.value.map((item) => {
      return item.price * item.qtdCart
    })
    return Number(prices.reduce((acc, curr) => acc + curr, 0)).toFixed(2)
  }

  return { items, countItems, calcTotalPrice, getItemNames, getItems }
})
