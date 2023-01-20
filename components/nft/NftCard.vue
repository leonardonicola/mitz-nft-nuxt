<template>
  <!-- Componente de layout com infos dinâmicas da NFT -->
  <div
    class="grid grid-flow-row grid-rows-3 rounded-3xl overflow-hidden w-full h-full"
  >
    <img
      :src="props.url"
      :alt="props.title"
      loading="lazy"
      class="w-full h-full object-cover row-span-2"
    />
    <div class="bg-neutral-900 flex flex-col p-4 text-white">
      <span data-test="nft-title" class="font-bold text-xl">{{ props.title }}</span>
      <span data-test="creator" class="font-light text-lg mb-auto">@{{ props.creator }}</span>
      <div
        class="text-sky-600 font-bold text-2xl flex justify-between items-center"
      >
        <div class="flex gap-2">
          <CubeTransparentIcon class="w-7 h-7" />
          <p data-test="price">{{ props.price }} ETH</p>
        </div>
        <a :href="props.link" target="_blank">
          <button
            class="rounded-3xl text-lg bg-blue-500 w-fit h-fit px-6 py-2 hover:bg-blue-400 duration-200"
          >
            <p class="text-white">SEE</p>
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CubeTransparentIcon from '@heroicons/vue/24/outline/CubeTransparentIcon'
const props = defineProps<{
  title: string
  price: number
  creator: string
  url: string
  link: string
}>()
</script>
