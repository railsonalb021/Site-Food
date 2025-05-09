<script setup lang="ts">
const modal = defineModel<boolean>({
  default: false,
})
</script>

<template>
  <Transition enter-active-class="transition ease-out duration-200 transform" enter-from-class="scale-95 opacity-0" enter-to-class="scale-100 opacity-100" leave-active-class="transition ease-in duration-150 transform" leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
    <div v-if="modal" class="fixed inset-0 mx-auto flex max-w-full items-center justify-center bg-black/5 backdrop-blur-sm">
      <div class="relative w-full max-w-80 md:max-w-96 rounded-3xl border-2 border-red-500 bg-white p-6 shadow-2xl">
        <slot name="title" />
        <slot name="body" />
        <slot name="footer" />
        <button class="absolute right-3 top-3 cursor-pointer text-red-600 hover:text-gray-800" @click="modal = false">
          <Icon name="line-md:close-circle" class="text-4xl" />
        </button>
      </div>
    </div>
  </Transition>
</template>
