<script setup lang="ts">
import receiptAxios from '@/services/receiptAxios'
import ReceiptCard from '@/components/ReceiptCard.vue'
import { ref, onMounted } from 'vue'

const receipts = ref()
const showNull = ref(true)

// Pegando as notas da API
onMounted(async () => {
  const data = await receiptAxios.getAll()
  if (data.receipts) {
    receipts.value = formatData(data.receipts)
    showNull.value = false
  }
})

// Formatando dados recebidos da API
function formatData(receipts: any) {
  receipts.forEach((r: any) => {
    r.deliver = new Date(r.deliver).toLocaleDateString()
    switch (r.payment) {
      case 'vis':
        r.payment = 'À Vista'
        break
      case 'cre':
        r.payment = 'Cartão de Crédito'
        break
      case 'deb':
        r.payment = 'Cartão de Débito'
        break
      case 'pix':
        r.payment = 'Pix'
        break
    }
  })
  return receipts
}
</script>

<template>
  <div class="wrapper" v-if="!showNull">
    <ReceiptCard v-for="r in receipts" :key="r.id" :receipts="r" />
  </div>
  <div class="wrapper center" v-else>
    <h1>Você não tem receitas no momento</h1>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
}
.center {
  align-items: center;
}
</style>
