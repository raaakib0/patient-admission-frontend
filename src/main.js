import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ContactUs from './Components/ContactUs.vue'
// import ButtonCounter from './Components/ButtonCounter.vue'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component("contact-us", ContactUs)
// app.component("button-counter", ButtonCounter)
app.mount('#app')
