<script lang="ts" setup>
import { authClient } from '~~/lib/auth-client'

definePageMeta({
  middleware: 'auth'
})

async function logout() {
  await authClient.signOut()
  return navigateTo('/auth/login')
}
</script>

<template>
  <div>
    <p>Dashboard</p>
    <button @click="logout">Logout</button>
  </div>
</template>
