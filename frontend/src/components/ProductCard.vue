<script setup lang="ts">
const props = defineProps({
  product: Object
})
</script>

<template>
  <div class="product-card">
    <h3 class="name">{{ product?.name }}</h3>
    <p class="price">R$ {{ product?.price }}</p>
    <p class="stock">Em Estoque: {{ product?.qty }}</p>
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
</style>
