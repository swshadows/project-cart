<script setup lang="ts">
import { useCartStore } from '@/stores/CartStore'
import { ref } from 'vue'
defineProps({
  product: Object
})

const cart = useCartStore()

const icon = ref('🛒 Adicionar')
let timeout: undefined | number

// Verifica se itens já estão no carrinho. Se sim, incrementa ao já existente. Se não, adiciona
function addToCart(id: number, name: string, price: number, qtdCart: number) {
  const item = { id, name, price, qtdCart }
  let onCart = false
  let pos: number = 0
  cart.items.forEach((i, index) => {
    if (i.id == item.id) {
      onCart = true
      pos = index
      return
    }
  })
  // Se estiver no carrinho, usa a posição registrada do item existente para incrementar sua quantidade. Caso não, adiciona-o
  if (onCart) {
    cart.items[pos].qtdCart++
  } else {
    cart.items.push(item)
  }

  // Lógica para primeiro item adicionado no carrinho
  if (cart.items.length == 0) cart.items.push(item)
  addToCartFeedback()
}

function addToCartFeedback() {
  icon.value = '✅ Adicionado'
  if (timeout) window.clearTimeout(timeout)
  timeout = window.setTimeout(() => {
    icon.value = '🛒 Adicionar?'
  }, 1000)
}
</script>

<template>
  <div class="product-card">
    <h3 class="name">{{ product?.name }}</h3>
    <p class="price">R$ {{ product?.price }}</p>
    <p class="stock">Em Estoque: {{ product?.qty }}</p>
    <button class="add" @click="addToCart(product?.id, product?.name, product?.price, 1)">
      {{ icon }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.product-card {
  border-radius: 10px;
  border: 1px solid #000;
  padding: 2em;
  width: 100%;
}
.name {
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid #505050;
  margin-bottom: 10px;
}
.add {
  width: 40%;
}
</style>
