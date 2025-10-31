import { createApp } from 'vue'
import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '../router'
import ContactUs from './Components/ContactUs.vue'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component("contact-us", ContactUs);
app.mount('#app')

createApp(App).mount('#app')
