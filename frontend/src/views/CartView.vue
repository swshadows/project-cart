<script setup lang="ts">
import { useCartStore } from '@/stores/CartStore'
import ModalPurchase from '@/components/ModalPurchase.vue'
import { ref } from 'vue'

const cart = useCartStore()
let modalEnabled = ref(false)
const totalPrice = Number(cart.calcTotalPrice())

// Alterna a visibilidade do modal
function toggleModal() {
  modalEnabled.value = !modalEnabled.value
}

const items = cart.items
</script>

<template>
  <h1>Meu Carrinho</h1>
  <div class="cart" v-if="items">
    <div class="item-callout" v-for="item in items" :key="item.id">
      <p>Item: {{ item.name }}</p>
      <p>Preço: R$ {{ item.price }}</p>
      <p>Quantidade: {{ item.qtdCart }}</p>
    </div>
    <p class="total-price">Preço total: R$ {{ totalPrice }}</p>
    <button v-if="totalPrice > 0" @click="toggleModal" class="finish">Finalizar compra</button>
  </div>
  <ModalPurchase :price-total="totalPrice" @toggle-modal="toggleModal" v-if="modalEnabled" />
</template>

<style scoped lang="scss">
h1 {
  margin-left: 10px;
}
.cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.item-callout {
  display: flex;
  gap: 10px;
  width: 90%;
  border-radius: 5px;
  border-bottom: 1px solid #000;
  padding: 1rem;
}
.total-price {
  font-size: 1.4rem;
}
.finish {
  color: #ffffff;
  background-color: #7e008f;
  padding: 1rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  transition: 0.2s all;
  border: 0;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: darken($color: #7e008f, $amount: 5);
  }
}
</style>
