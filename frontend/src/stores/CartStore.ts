import { defineStore } from 'pinia'
import { ref } from 'vue'

type Product = {
  id: number
  name: string
  price: number
}

export const useCartStore = defineStore('cart', () => {
  const items = ref([] as Product[])
  const countItems = () => {
    return items.value.length
  }
  const calcTotalPrice = () => {
    const prices = items.value.map((item) => {
      return item.price
    })

    return prices.reduce((acc, curr) => acc + curr, 0)
  }
  return { items, countItems, calcTotalPrice }
})
