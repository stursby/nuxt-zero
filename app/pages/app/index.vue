<script lang="ts" setup>
import { authClient } from '~~/lib/auth-client'

definePageMeta({
  middleware: 'auth'
})

const { data: session } = await authClient.getSession()
</script>

<template>
  <div>
    <p>Dashboard</p>
    <pre class="text-sm p-6 w-full overflow-hidden">{{ session }}</pre>
  </div>
</template>
