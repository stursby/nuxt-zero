import type { H3Event } from 'h3'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'

function createAuth() {
  return betterAuth({
    database: drizzleAdapter(useDrizzle(), {
      provider: 'sqlite',
      usePlural: true
    }),
    emailAndPassword: {
      enabled: true
    },
    advanced: {
      generateId: false
    }
  })
}

let _auth: ReturnType<typeof createAuth>

export function serverAuth() {
  if (!_auth) {
    _auth = createAuth()
  }

  return _auth
}

/**
 *  Get the user from the event or throw an error if the user is not authenticated.
 */
export function getUserOrThrow(event: H3Event) {
  if (!event.context.auth.isAuthenticated) {
    throw createError({
      status: 401,
      message: 'Unauthorized'
    })
  }

  return event.context.auth.user
}

/**
 * Just checks whether the user is authenticated or not.
 * Throws 401 error if the user is not authenticated.
 */
export function requireAuth(event: H3Event): void {
  if (!event.context.auth.isAuthenticated) {
    throw createError({
      status: 401,
      message: 'Unauthorized'
    })
  }
}

export type User = typeof _auth.$Infer.Session.user
