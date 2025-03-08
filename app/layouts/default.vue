<script lang="ts" setup>
import { authClient } from '~~/lib/auth-client'

async function logout() {
  await authClient.signOut()
  return navigateTo('/auth/login')
}
</script>

<template>
  <div>
    <header class="flex justify-between p-6">
      <NuxtLink as="h1" to="/app">NuxtZero</NuxtLink>
      <div class="flex gap-6">
        <NuxtLink to="/app/settings">Settings</NuxtLink>
        <button @click="logout">Logout</button>
      </div>
    </header>

    <div class="px-6">
      <slot />
    </div>
  </div>
</template>
