import { createApp } from 'vue'
import App from './app.vue'
import { router } from './router'
import './css/index.css'
import '@iconify/iconify'
import '@purge-icons/generated'

const projectApp = createApp(App)
projectApp.use(router)
projectApp.mount('#app')
