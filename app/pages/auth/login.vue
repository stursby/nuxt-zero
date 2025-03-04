<script lang="ts" setup>
import { authClient } from '~~/lib/auth-client'

const email = ref('')
const password = ref('')

async function login() {
  const response = await authClient.signIn.email({
    email: email.value,
    password: password.value
  })

  if (response.error != null) {
    console.error('Error signing in')
    return null
  }

  return navigateTo('/app')
}
</script>

<template>
  <div>
    <p>Login</p>
    <form @submit.prevent="login">
      <label for="email">Email</label>
      <input v-model="email" type="email" name="email" required />
      <label for="password">Password</label>
      <input v-model="password" type="password" name="password" required />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
