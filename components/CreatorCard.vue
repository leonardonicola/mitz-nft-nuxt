<template>
  <div class="rounded-lg p-6 bg-slate-800 text-white text-start w-96">
    <figcaption class="flex items-center space-x-3">
      <img
        class="flex-none w-14 h-14 rounded-full object-cover"
        loading="lazy"
        :src="`/influencers/${props.photo}`"
        :alt="props.name"
      />
      <span>{{ props.name }}</span>
    </figcaption>
    <blockquote class="mt-2 text-slate-200 justify-start">
      <div class="flex flex-col">
        <span class="font-bold">{{ props.numOfArts }} NFT's</span>
      </div>
      <p class="italic">"{{ props.phrase }}"</p>
    </blockquote>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  numOfArts: string
  phrase: string
  photo: string
}>()
</script>
