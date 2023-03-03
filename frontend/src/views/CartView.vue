<script setup lang="ts">
defineProps({
  items: Object
})
</script>

<template>
  <h1>Meu Carrinho</h1>
  <div v-if="items">
    <div v-for="item in items" :key="item.id">test</div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  margin-left: 10px;
}
</style>
