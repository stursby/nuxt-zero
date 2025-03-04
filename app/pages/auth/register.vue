<script lang="ts" setup>
import { authClient } from '~~/lib/auth-client'

const name = ref('')
const email = ref('')
const password = ref('')

async function register() {
  console.log(name.value, email.value, password.value)
  const response = await authClient.signUp.email({
    name: name.value,
    email: email.value,
    password: password.value
  })

  if (response.error != null) {
    console.error('Error signing up')
    return null
  }

  return navigateTo('/app')
}
</script>

<template>
  <div>
    <p>Register</p>
    <form @submit.prevent="register">
      <label for="name">Name</label>
      <input v-model="name" type="text" name="name" required />
      <label for="email">Email</label>
      <input v-model="email" type="email" name="email" required />
      <label for="password">Password</label>
      <input v-model="password" type="password" name="password" required />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
