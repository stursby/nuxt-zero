// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxthub/core', '@nuxt/ui-pro'],

  css: ['~/assets/css/main.css'],

  hub: {
    database: true,
    kv: true
  },

  compatibilityDate: '2024-11-01',
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true }
})
