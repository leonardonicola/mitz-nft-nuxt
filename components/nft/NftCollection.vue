<template>
  <!-- Componente de layout com infos dinâmicas da NFT -->
  <div
    class="grid grid-flow-row grid-rows-3 rounded-3xl overflow-hidden w-full h-full"
  >
    <nuxt-img
      :src="`${collections[collection][1].url}`"
      :alt="collections[collection][0].creator"
      loading="lazy"
      class="w-full h-full object-cover row-span-2"
    />
    <div class="bg-neutral-900 flex flex-col p-4 text-white">
      <span>Coleção:</span>
      <span class="font-bold mb-auto text-2xl">{{
        collections[collection][0].creator
      }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useListsStore } from '~/stores/lists'

const { collections } = useListsStore()

defineProps<{ collection: string | number}>()
</script>
