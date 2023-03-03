<script setup lang="ts">
import MessageComponent from '@/components/MessageComponent.vue'
import axios from '@/services/axios'
import { ref } from 'vue'

const name = ref('')
const qty = ref(0)
const price = ref(0.0)

let message = ref()
let msgType: string = ''
let timeout: undefined | number

async function processForm() {
  if (!name.value || !qty.value || !price.value) {
    setMessage('❌ Itens no formulário não preenchidos corretamente', 'error')
    return
  }
  await axios.add(name.value, qty.value, price.value)
  setMessage('✅ Produto adicionado ao banco de dados', 'success')
  name.value = ''
  qty.value = 0
  price.value = 0
}

function setMessage(msg: string, type: 'error' | 'success') {
  message.value = msg
  msgType = type
  if (timeout) window.clearTimeout(timeout)
  timeout = window.setTimeout(() => {
    message.value = ''
  }, 3000)
}
</script>

<template>
  <main>
    <form @submit.prevent="processForm">
      <label>
        <p>Digite o nome do produto:</p>
        <input v-model="name" type="text" placeholder="Nome do produto" />
      </label>
      <label>
        <p>Digite a quantidade desejada no estoque:</p>
        <input v-model="qty" type="number" placeholder="Quantidade do produto" />
      </label>
      <label>
        <p>Digite o preço do produto:</p>
        <input v-model="price" step="any" type="number" placeholder="Preço do produto" />
      </label>
      <input type="submit" value="Enviar" />
    </form>
  </main>
  <div v-if="message">
    <MessageComponent :type="msgType" :message="message" />
  </div>
  <p class="faded">❗ Essa tela simula um painel de administrador, para adicionar itens</p>
</template>

<style scoped lang="scss">
main {
  display: flex;
  justify-content: center;
}
form {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  input {
    padding: 10px;
    width: 100%;
    &[type='submit'] {
      background: #97668f;
      color: #fff;
      cursor: pointer;
      border: 0;
    }
    &:focus {
      outline: 0;
    }
  }
}
.faded {
  margin-top: 10px;
  text-align: center;
  color: #6b6b6b;
}
</style>
