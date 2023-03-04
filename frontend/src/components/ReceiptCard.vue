<script setup lang="ts">
defineProps({
  receipts: Object
})
</script>

<template>
  <div class="receipt">
    <p>Produtos: {{ receipts?.items }}</p>
    <p>Método de pagamento: {{ receipts?.payment }}</p>
    <p>Valor total: R$ {{ receipts?.totalPrice }}</p>
    <p>Data prevista de entrega: {{ receipts?.deliver }}</p>
  </div>
</template>

<style scoped lang="scss">
.receipt {
  border-radius: 5px;
  border: 1px solid #000;
  padding: 10px;
}
</style>
