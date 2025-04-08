<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
import { authClient } from '~~/lib/auth-client'

const toast = useToast()

const fields = [
  {
    name: 'name',
    type: 'text' as const,
    label: 'Name',
    required: true
  },
  {
    name: 'email',
    type: 'text' as const,
    label: 'Email',
    required: true
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password' as const,
    required: true
  }
]

const providers = [
  {
    label: 'Google',
    icon: 'i-simple-icons-google',
    onClick: () => {
      toast.add({ title: 'Google', description: 'Login with Google' })
    }
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    onClick: () => {
      toast.add({ title: 'GitHub', description: 'Login with GitHub' })
    }
  }
]

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  const response = await authClient.signUp.email({
    name: payload.data.name,
    email: payload.data.email,
    password: payload.data.password
  })

  if (response.error != null) {
    toast.add({
      title: 'Error signing up',
      description: response.error.message,
      color: 'error'
    })
    return null
  }

  return navigateTo('/app')
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        title="Register"
        description="Enter your information to create your account."
        icon="i-lucide-user"
        :fields="fields"
        :providers="providers"
        @submit="onSubmit"
        :submit="{ label: 'Create account' }"
      />
    </UPageCard>
  </div>
</template>
