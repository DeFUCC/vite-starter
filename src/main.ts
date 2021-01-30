import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

import '@iconify/iconify'
import '@purge-icons/generated'

const projectApp = createApp(App)
projectApp.use(router)
projectApp.mount('#app')
