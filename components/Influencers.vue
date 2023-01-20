<template>
  <div class="flex flex-col justify-center w-full mt-24 text-center">
    <span class="text-blue-600 font-bold text-xl">Influencers</span>
    <div class="relative mt-4">
      <span class="font-bold text-3xl">Top influencers na plataforma</span>
    </div>

    <!-- Se clicar no botão de ver mais, desativa o overflow hidden 
    e mostre mais comentários -->
    <div
      :class="showMore ? '' : ' overflow-hidden max-h-96'"
      class="flex flex-wrap justify-center mt-10 gap-6 mx-auto max-w-7xl relative"
    >
      <CreatorCard
        v-for="artist in influencers"
        :name="artist.name"
        :numOfArts="artist.numOfArts"
        :phrase="artist.phrase"
        :photo="artist.photo"
      />

      <div
        v-show="!showMore"
        class="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-10 pb-8 pointer-events-none absolute"
      >
        <button
          @click="showMore = !showMore"
          class="pointer-events-auto bg-slate-700 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center"
        >
          LER MAIS
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { influencers } from '../utils/lists'
import CreatorCard from './CreatorCard.vue'
const showMore = ref<boolean>(false)
</script>
