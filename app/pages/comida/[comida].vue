<script setup lang="ts">
const { comida } = useRoute().params

if(!comida){
  throw new Error('Comida não encontrada')
}

const comidaAtual = comidas.value.find(c => c.id === comida)

if(!comidaAtual){
  throw new Error('Comida não encontrada')
}
</script>

<template>
  <div>
    <h1 class="border-2 border-red-200 bg-red-600 p-5 text-center font-sans text-4xl font-bold text-white">
      Comidas
    </h1>
  </div>
  <div class="flex h-screen flex-col items-center bg-red-900 p-14">
    <div class="w-full max-w-2xl rounded-lg border-8 border-red-400 bg-white p-6 shadow-md">
      <div class="mb-4 flex items-center justify-center">
        <img :src="comidaAtual.img" :alt="comidaAtual.nome" class="size-44 cursor-pointer rounded-full border-4 border-gray-300 object-cover transition-transform duration-500 ease-in-out hover:scale-105">
      </div>
      <h1 class="mb-3 text-center font-sans text-3xl">
        {{ comidaAtual.nome }}
      </h1>
      <p class="text-center font-sans text-lg text-black">
        {{ comidaAtual.sobre }}
      </p>
    </div>
  </div>
</template>
