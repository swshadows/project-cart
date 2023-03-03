<script setup lang="ts">
defineProps({
  priceTotal: String
})
const emits = defineEmits(['toggle-modal'])

function formatForm() {
  console.log(1) // TODO
}
</script>

<template>
  <div @click.self="emits('toggle-modal')" class="backdrop">
    <div class="modal">
      <form @submit.prevent="formatForm">
        <h1>Finalizando compra</h1>
        <label>
          <p>Escolha a forma de pagamento</p>
          <select required value="vis">
            <option value="vis">À Vista</option>
            <option value="cre">Cartão de Crédito</option>
            <option value="deb">Cartão de Débito</option>
            <option value="pix">Pix</option>
          </select>
        </label>
        <label>
          <p>Escolha a data de entrega</p>
          <input required type="date" />
        </label>
        <label>
          <input required type="checkbox" /> Confirme que deseja comprar os itens. Valor total: R$
          {{ priceTotal }}
        </label>
        <input type="submit" value="Comprar" />
      </form>
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
