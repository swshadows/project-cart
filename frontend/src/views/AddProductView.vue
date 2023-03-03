<script setup lang="ts"></script>

<template>
  <main>
    <form>
      <label>
        <p>Digite o nome do produto:</p>
        <input required type="text" placeholder="Nome do produto" />
      </label>
      <label>
        <p>Digite a quantidade desejada no estoque:</p>
        <input required type="number" placeholder="Quantidade do produto" />
      </label>
      <label>
        <p>Digite o preço do produto:</p>
        <input required type="number" placeholder="Preço do produto" />
      </label>
    </form>
  </main>
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
