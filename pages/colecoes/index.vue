<template>
  <div class="transition-all ease-out mb-10">
    <div class="text-3xl font-bold text-start">
      Coleções em alta no mercado:
    </div>
    <section
      class="flex flex-wrap justify-center md:justify-start gap-10 mt-10"
    >
      <div
        v-for="(item, index) in collections"
        :key="index"
        class="w-80 h-[30rem] relative hover:scale-105 duration-500 cursor-pointer"
      >
        <NuxtLink
          :to="`/colecoes/${toLowerCase(item[0].creator)}`"
        >
          <!-- Componente com infos da NFT -->
          <div
            class="grid grid-flow-row grid-rows-3 rounded-3xl overflow-hidden w-full h-full"
          >
            <img
              data-test="collection-img"
              :src="item[0].url"
              :alt="item[0].creator"
              loading="lazy"
              class="w-full h-full object-cover row-span-2"
            />
            <div class="bg-neutral-900 flex flex-col p-4 text-white">
              <span>Coleção:</span>
              <span data-test="creator" class="font-bold mb-auto text-2xl">{{
                item[0].creator
              }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <a href="https://opensea.io" target="_blank">
      <button
        class="rounded-xl text-white bg-blue-500 w-fit p-5 flex items-center hover:bg-blue-400 duration-200 mt-10"
      >
        EXPLORE MAIS
      </button>
    </a>
  </div>
</template>

<script setup lang="ts">
import { collections } from '../../utils/lists'
import { useHead } from '@vueuse/head'

function toLowerCase(str: string): string {
  return str.replace(/\s/g, '').toLowerCase()
}

useHead({
  titleTemplate: '%s | COLEÇÕES',
  meta: [
    {
      name: 'description',
      content: "Encontre as coleções NFT's mais populares do marketplace",
    },
  ],
})
</script>

<style scoped></style>
