<template>
  <!-- Seção com swiper das NFT's mais populares -->
  <div class="mt-40">
    <div class="font-bold text-3xl mb-20 text-center">
      <p>As NFT's mais populares no momento:</p>
      <p class="text-xl font-normal italic">Deslize para ver!</p>
    </div>
    <div ref="container" class="keen-slider">
      <div
        v-for="(nft, index) in populars"
        :key="index"
        :class="`keen-slider__slide number-slide${index} w-full h-[32rem]`"
      >
        <NftCard
          :title="nft.name"
          :price="nft.price"
          :creator="nft.creator"
          :url="nft.url"
          :link="nft.link"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { populars } from '../utils/lists'
import { useKeenSlider } from 'keen-slider/vue.es'
import 'keen-slider/keen-slider.min.css'

const [container] = useKeenSlider({
  breakpoints: {
    '(max-width: 400px)': {
      slides: { perView: 1, spacing: 5 },
    },
    '(min-width: 400px)': {
      slides: { perView: 1, spacing: 15 },
    },
    '(min-width: 600px)': {
      slides: { perView: 2, spacing: 15 },
    },
    '(min-width: 1000px)': {
      slides: { perView: 3, spacing: 15 },
    },
  },
})
</script>
