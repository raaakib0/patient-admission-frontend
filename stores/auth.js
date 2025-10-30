import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null,
  }),
  actions: {
    setUser(user) { this.user = user },
    setToken(token) { this.token = token },
    logout() { this.user = null; this.token = null }
  },
})
