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
import { useKeenSlider } from 'keen-slider/vue.es'
import 'keen-slider/keen-slider.min.css'
import type {NftsProps} from '../utils/nftCollectionList';

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

const populars: NftsProps[] = [
    {
      name: 'CloneX #10959',
      url: 'clonex2.webp',
      creator: 'CloneX',
      price: 5.83,
      link: 'https://opensea.io/collection/clonex',
    },
    {
      name: 'Karafuru x Hypebeast #30182',
      url: 'karafuru1.jpg',
      creator: 'Karafuru',
      price: 0.12,
      link: 'https://opensea.io/collection/karafuru-x-hypebeast-x-atmos',
    },
    {
      name: 'HAPE #02182',
      url: 'hape2.webp',
      creator: 'Hape Prime',
      price: 0.43,
      link: 'https://opensea.io/collection/hapeprime',
    },
    {
      name: 'Meta Samurai #00125',
      url: 'meta4.webp',
      creator: 'Meta Samurai',
      price: 1.31,
      link: 'https://opensea.io/collection/metasamurai-official',
    },
    {
      name: 'HAPE #39123',
      url: 'hape1.webp',
      creator: 'Hape Prime',
      price: 0.45,
      link: 'https://opensea.io/collection/hapeprime',
    },
    {
      name: 'CloneX #10960',
      url: 'clonex3.webp',
      creator: 'CloneX',
      price: 5.31,
      link: 'https://opensea.io/collection/clonex',
    },
  ]

</script>
