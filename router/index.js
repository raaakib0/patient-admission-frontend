import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/Login.vue'
import Dashboard from '@/pages/Dashboard.vue'
import Patients from '@/pages/Patients.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Dashboard },
  { path: '/patients', component: Patients },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
