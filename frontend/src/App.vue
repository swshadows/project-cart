<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const cart: Object[] = []

function addCart(item: Object) {
  cart.push(item)
  console.log(cart)
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/add">Adicionar Produto</RouterLink>
        <RouterLink to="/cart">Meu Carrinho</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView @add-cart="addCart" />
</template>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  padding: 2rem;
  border-bottom: 3px solid #525252;
  margin-bottom: 20px;
  nav {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 5em;
    font-size: 2rem;
  }
}
</style>
