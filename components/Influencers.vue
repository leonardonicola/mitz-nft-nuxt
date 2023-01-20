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
import CreatorCard from './CreatorCard.vue'
const showMore = ref<boolean>(false)

interface InfluencersProps {
  name: string
  numOfArts: string
  phrase: string
  photo: string
}

const influencers: InfluencersProps[] = [
  {
    name: 'Mac Demarco',
    numOfArts: '2',
    phrase:
      "Everybody's a multifaceted, emotional, living being, I think. Sometimes it's fun to goof around, sometimes you've got to think about things, sometimes you've got to be strange, and then you've got to be jiggly. That's just what being a human's all about.",
    photo: 'demarco.jpg',
  },
  {
    name: 'Tyler, the Creator',
    numOfArts: '9',
    phrase: 'You make my earth quake.',
    photo: 'tyler.webp',
  },
  {
    name: 'Frank Ocean',
    numOfArts: '2',
    phrase:
      "Don't confuse my personality with my attitude. My personality is who I am, and my attitude depends on who you are.",
    photo: 'frank.jpg',
  },
  {
    name: 'Joji',
    numOfArts: '3',
    phrase: 'Love it!',
    photo: 'jojio.jpg',
  },
  {
    name: 'ASAP Rocky',
    numOfArts: '13',
    phrase: 'Mannn this website made my rich as fu@*!',
    photo: 'asap.jpg',
  },
  {
    name: 'MF DOOM',
    numOfArts: '13',
    phrase:
      "I'm always trying to show versatility. I'm juggling, and I'm flipping fire, and I'm chewing gum and rhyming at the same time... on a unicycle, while playing the drums.",
    photo: 'mfdoom.jpg',
  },
]
</script>
