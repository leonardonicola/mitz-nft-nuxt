<template>
  <!-- Componente com infos da NFT -->
  <div
    class="grid grid-flow-row grid-rows-3 rounded-3xl overflow-hidden w-full h-full"
  >
    <img
      data-test="collection-img"
      :src="`/nfts/${creatorNameToLower()}/${props.url}`"
      :alt="props.creator"
      loading="lazy"
      class="w-full h-full object-cover row-span-2"
    />
    <div class="bg-neutral-900 flex flex-col p-4 text-white">
      <span>Coleção:</span>
      <span data-test="creator" class="font-bold mb-auto text-2xl">{{
        creator
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['url', 'creator'])

function creatorNameToLower(): string {
  return props.creator.replace(/\s/g, '').toLowerCase()
}
</script>

<style scoped></style>
