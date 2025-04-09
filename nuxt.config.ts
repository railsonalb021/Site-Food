export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/seo', '@vueuse/nuxt', '@nuxt/icon'],
  devtools: { enabled: true },
  app: { head: { templateParams: { separator: '•' } } },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-03-17',
  linkChecker: { enabled: false },
})
