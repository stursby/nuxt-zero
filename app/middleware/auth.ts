import { authClient } from '~~/lib/auth-client'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { data: session } = await authClient.useSession(useFetch)

  if (!session?.value?.user) {
    const next = from.path === '/app' ? '' : from.path
    return navigateTo(`/auth/login${next ? `?next=${next}` : ''}`)
  }
})
