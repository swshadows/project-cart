// Usando Pinia para gerenciar o estado do carrinho globalmente com stores

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
const pinia = createPinia()

import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
