<template>
  <div>
    <header class="flex justify-between p-6">
      <h1>NuxtZero</h1>
      <div class="flex gap-6">
        <NuxtLink to="/auth/login">Login</NuxtLink>
        <NuxtLink to="/auth/register">Register</NuxtLink>
      </div>
    </header>

    <slot />
  </div>
</template>
