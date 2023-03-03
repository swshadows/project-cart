<script setup lang="ts">
defineProps({
  message: String,
  type: String
})
</script>

<template>
  <div class="message" :class="type">
    <p>{{ message }}</p>
  </div>
</template>

<style scoped lang="scss">
.message {
  text-align: center;
  width: 50%;
  margin: 10px auto;
  padding: 10px 0;
  font-weight: bold;
}
.error {
  border: 1px solid #ff0000;
  background: #ff8d8d;
  color: #ffffff;
}
.success {
  border: 1px solid #00ac48;
  background: #8dffaf;
  color: #2c2c2c;
}
</style>
