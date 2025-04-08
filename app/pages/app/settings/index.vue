<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <div class="space-y-6">
    <p>Settings page</p>
    <div class="flex items-center gap-2">
      <p>Color mode:</p>
      <ClientOnly v-if="!colorMode?.forced">
        <UButton
          :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
          color="neutral"
          variant="ghost"
          @click="isDark = !isDark"
        />

        <template #fallback>
          <div class="size-8" />
        </template>
      </ClientOnly>
    </div>
  </div>
</template>
