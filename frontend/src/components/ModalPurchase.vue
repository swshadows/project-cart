<script setup lang="ts">
import receiptAxios from '@/services/receiptAxios'
import MessageComponent from './MessageComponent.vue'
import { ref } from 'vue'
import { useCartStore } from '@/stores/CartStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const cart = useCartStore()

defineProps({
  priceTotal: String
})

const emits = defineEmits(['toggle-modal'])

const option = ref('vis')
const date = ref()
const checked = ref(false)
const message = ref('')
const isDisabled = ref(false)
const canClick = ref(true)

// Checa se deve alternar o modal
function emitToggleModal() {
  if (canClick.value) emits('toggle-modal')
}

// Controla o formulário e gera uma receita
async function handleForm() {
  const formattedDate = new Date(date.value).toISOString()
  await receiptAxios.add(option.value, formattedDate)
  message.value = '✅ Compra confirmada!'
  canClick.value = false
  isDisabled.value = true
  setTimeout(() => {
    cart.items = []
    router.push('/')
    message.value = ''
    isDisabled.value = false
    emitToggleModal()
  }, 3000)
}
</script>

<template>
  <div @click.self="emitToggleModal" class="backdrop">
    <div class="modal">
      <form @submit.prevent="handleForm">
        <h1>Finalizando compra</h1>
        <label>
          <p>Escolha a forma de pagamento</p>
          <select v-model="option" required>
            <option value="vis">À Vista</option>
            <option value="cre">Cartão de Crédito</option>
            <option value="deb">Cartão de Débito</option>
            <option value="pix">Pix</option>
          </select>
        </label>
        <label>
          <p>Escolha a data de entrega</p>
          <input required type="date" v-model="date" />
        </label>
        <label>
          <input v-model="checked" required type="checkbox" /> Confirme que deseja comprar os itens.
          Valor total: R$
          {{ priceTotal }}
        </label>
        <input type="submit" :disabled="isDisabled" value="Comprar" />
      </form>
      <MessageComponent v-if="message" :message="message" :type="'success'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.backdrop {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: #0000007e;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.modal {
  padding: 10px;
  background-color: #fff;
  width: 30%;
  border-radius: 10px;
}
input {
  accent-color: #7e008f;
  &[type='submit'] {
    background-color: #7e008f;
    color: #fff;
    cursor: pointer;
    border: 0;
    padding: 10px;
  }
}
</style>
