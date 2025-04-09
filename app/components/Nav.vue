<script setup lang="ts">
const rotas = [
  { nome: 'Início', link: '/' },
  { nome: 'Certificados', link: '/certificados' },
  { nome: 'Projetos', link: '/projetos' },
]
</script>

<template>
  <nav class="flex justify-between border-b border-slate-100 bg-blue-800 p-4">
    <h1 class="whitespace-nowrap pt-1 text-xl font-extralight text-white transition-all duration-300 ease-in-out hover:text-3xl hover:text-blue-500 md:text-2xl">
      Railson Albino
    </h1>
    <div class="flex space-x-4">
      <NuxtLink v-for="{nome, link} of rotas" :key="nome" :to="link" :aria-label="nome" class="pt-3 text-sm text-white transition-all duration-300 ease-in-out hover:text-2xl hover:text-blue-500 md:text-xl">
        {{ nome }}
      </NuxtLink>
    </div>
  </nav>
</template>
