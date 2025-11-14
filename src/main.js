import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './Router/routes.js';  
import Loader from './Components/Loader.vue'; 

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component('Loader', Loader)
app.mount('#app')
