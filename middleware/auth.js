
import { useLoginStore } from '~/store/auth'

export default defineNuxtRouteMiddleware(() => {
  const store = useLoginStore()

  if (!store.isAuthenticated) {
    // return navigateTo('/login')
  }
})

