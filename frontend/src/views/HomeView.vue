<script setup lang="ts">
import productAxios from '@/services/productAxios'
import ProductCard from '@/components/ProductCard.vue'
import { ref, onMounted } from 'vue'

const products = ref()

// Pega produtos registrados no banco de dados
onMounted(async () => {
  const data = await productAxios.getAll()
  if (data.products) {
    products.value = data.products
  }
})
</script>

<template>
  <main>
    <h1>Bem vindo a nossa loja</h1>
    <div class="products">
      <ProductCard v-for="p in products" :key="p.id" :product="p" />
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  width: 80%;
}
</style>
