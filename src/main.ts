import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import appRouter from '~/router'

import './style.css'

const app = createApp(App)

app.use(appRouter)
app.use(createPinia())

app.mount('#app')

