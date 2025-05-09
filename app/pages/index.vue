<script setup lang="ts">
const carrinho = ref<string[]>([])

const compCarrinho = computed(() => {
  const cmds: { id: string, quantidade: number, nome: string, preco: string, img: string }[] = []

  for(const id of carrinho.value){
    if(!cmds.some(comida => comida.id === id)){
      const comidaExistente = comidas.value.find(comida => comida.nome === id)
      if(comidaExistente) cmds.push({ ...comidaExistente, id, quantidade: 1 })
    }
    else {
      const comida = cmds.find(comida => comida.id === id)
      if(comida){
        comida.quantidade++
      }
    }
  }

  return cmds
})

function adicionarCarrinho(id: string){
  carrinho.value.push(id)
}

function removerComida(id: string){
  const index = carrinho.value.indexOf(id)
  if(index !== -1){
    carrinho.value.splice(index, 1)
  }
}

function limparCarrinho(){
  carrinho.value = []
}

const modal = ref(false)

const quantidadeTotal = computed(() => carrinho.value.length)
</script>

<template>
  <div class="flex items-end justify-end bg-red-600">
    <button class="right-3 top-3 rounded-md border border-red-600  px-3 py-2 font-serif font-bold text-white active:scale-95" @click="modal = true">
      <div class="relative">
        <Icon name="i-lucide-shopping-cart" class="mr-2 size-8 cursor-pointer hover:scale-110" /> <span v-if="quantidadeTotal > 0" class="absolute -left-5 top-2 flex size-5 items-center justify-center rounded-full bg-white text-xs font-bold text-black">
          {{ quantidadeTotal }}
        </span>
      </div>
    </button>
  </div>
  <div class="relative border-2 border-red-100">
    <img src="/pizzalogo.jpg" alt="burrito" class="h-96 w-full object-cover">
    <div class="absolute inset-0 flex items-center justify-center font-sans text-5xl font-bold text-white md:text-6xl">
      FOOD SESSION
    </div>
  </div>

  <section id="cardapio">
    <div>
      <h1 class="border-2 border-red-200 bg-red-600 p-4 text-center font-sans text-4xl font-bold text-white md:font-bold">
        Cardápio
      </h1>
    </div>
    <div class="grid grid-cols-1 bg-red-900 md:grid-cols-2 lg:grid-cols-4">
      <div v-for="{nome, img, preco, descricao, to} of comidas" :key="nome" class="m-10 size-full max-h-80 max-w-80 rounded-lg border-2 border-red-400  bg-white text-center shadow-md">
        <img :src="img" :alt="nome" class="max-h-40 w-full rounded-xl object-cover">
        <div class="p-4">
          <p class="pt-3 font-sans font-bold text-gray-700">
            {{ nome }} - R$ {{ preco }}
          </p>
          <p class="pt-3 font-sans text-gray-700">
            {{ descricao }}
          </p>
          <div class="flex flex-row items-center justify-between">
            <button class="mt-3 w-28 rounded-md border border-blue-600 bg-blue-500 font-sans font-bold text-white transition-transform hover:scale-110 hover:bg-blue-800 active:scale-95 md:mt-5 md:flex md:text-sm" @click="adicionarCarrinho(nome)">
              Adicionar ao carrinho
            </button>
            <button class="mt-3 w-28 rounded-md border border-green-600 bg-green-500 font-sans font-bold text-white transition-transform hover:scale-110 hover:bg-green-800 active:scale-95 md:mt-5 md:flex md:text-sm" @click="navigateTo(to)">
              Visualizar a comida
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Modal v-model="modal">
    <template #title>
      <h1 class="pb-8 pl-6 pt-10 text-center font-sans text-4xl font-bold text-red-600 underline">
        Carrinho
      </h1>
    </template>

    <template #body>
      <div v-for="{ nome, preco, img, id, quantidade} of compCarrinho" :key="id" class="flex items-center gap-4 border-b p-2 font-semibold text-gray-700">
        <img :src="img" :alt="nome" class="size-16 cursor-pointer rounded-md border  border-red-500 object-cover shadow-2xl transition-transform duration-300 hover:scale-105">
        {{ nome }} - R$ {{ preco }} - Quantidade: ({{ quantidade }})
        <button class=" mt-5 w-12 rounded-md font-serif font-bold text-white md:flex md:text-sm" @click="adicionarCarrinho(nome)">
          <Icon name="line-md:plus" class=" mt-2 size-5 cursor-pointer bg-red-600 transition-transform hover:scale-150 active:scale-95" />
        </button>
        <button class=" mt-5 w-12 rounded-md font-serif font-bold text-white md:flex md:text-sm" @click="removerComida(id)">
          <Icon name="i-lucide-trash" class=" mt-2 size-5 cursor-pointer bg-red-600 transition-transform hover:scale-150 active:scale-95" />
        </button>
      </div>
    </template>

    <template #footer>
      <div class="flex items-center justify-center">
        <button class=" ml-5 mt-5 max-w-44 rounded-md border border-red-600 bg-red-500 px-2 py-3 font-sans font-bold text-white transition-transform hover:scale-110 hover:bg-red-800 active:scale-95 md:flex md:text-sm" @click="limparCarrinho()">
          Limpar todo carrinho
        </button>
      </div>
      <p class="pt-10 text-center font-sans font-bold text-red-600 md:text-2xl">
        Agradecemos a sua compra!
      </p>
    </template>
  </Modal>
</template>
