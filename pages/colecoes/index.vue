<template>
  <div class="transition-all ease-out mb-10">
    <div class="text-3xl font-bold text-start">
      Coleções em alta no mercado:
    </div>
    <section
      class="flex flex-wrap justify-center md:justify-start gap-10 mt-10"
    >
      <div
        v-for="(collection, index) in collections"
        :key="index"
        class="w-80 h-[30rem] relative hover:scale-105 duration-500 cursor-pointer"
      >
        <NuxtLink
          :to="`/colecoes/${toLowerCase(collection[0].creator)}`"
        >
          <NftCollection :url="collection[0].url" :creator="collection[0].creator"/>
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
import { collections } from '../../utils/nftCollectionList'
import { useHead } from '@vueuse/head'
import NftCollection from '../../components/nft/NftCollection.vue';

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
