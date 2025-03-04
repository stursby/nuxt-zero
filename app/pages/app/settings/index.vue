<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <div>
    <NuxtLink to="/app">&larr; Dashboard</NuxtLink>
    <p>Settings go here...</p>
  </div>
</template>
