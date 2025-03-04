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
    <p>Welcome to the dashboard!</p>
    <NuxtLink to="/app/settings">Setting</NuxtLink>

    <br /><br />
    <button @click="logout">Logout</button>
  </div>
</template>
