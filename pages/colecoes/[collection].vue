<template>
  <div class="mb-20">
    <NuxtLink to="/colecoes" class="flex gap-3" v-once
      ><ArrowLeftIcon class="w-6 h-6 mb-10" />VOLTAR</NuxtLink
    >
    <div class="grid md:grid-cols-2 grid-cols-1 gap-16">
      <section class="overflow-hidden">
        <div ref="container" class="keen-slider" v-once>
          <img
            v-for="(nft, index) in collections[collectionToString]"
            :key="index"
            :src="nft.url"
            :alt="nft.name"
            :class="`keen-slider__slide object-cover max-h-screen h-96 md:h-[32rem] number-slide${
              index + 1
            }`"
          />
        </div>
        <div ref="thumbnail" class="keen-slider thumbnail" v-once>
          <img
            v-for="(nft, index) in collections[collectionToString]"
            :key="index"
            :src="nft.url"
            :alt="nft.name"
            :class="`keen-slider__slide object-cover number-slide${index + 1}`"
          />
        </div>
      </section>
      <section class="flex flex-col space-y-10">
        <div>
          <p class="text-3xl font-extrabold">
            {{ collections[collectionToString][activeIndex].name }}
          </p>
          <p v-once>
            Criado por: @{{
              collections[collectionToString][activeIndex].creator
            }}
          </p>
        </div>
        <div class="border-2 rounded-md p-3 border-black/30">
          <p class="font-semibold">Preço atual:</p>
          <p class="text-2xl font-bold text-sky-600">
            {{ collections[collectionToString][activeIndex].price }} ETH
          </p>
        </div>
        <section v-once>
          <p class="font-semibold mb-3">Descrição:</p>
          <p>
            Criado por
            <a
              class="text-sky-600"
              :href="collections[collectionToString][0].link"
              >@{{ collections[collectionToString][activeIndex].creator }}</a
            >, essa coleção NFT lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eligendi odio accusantium rerum. Ipsa vitae a
            atque soluta dolorum ducimus nesciunt aut dolore facere blanditiis
            in aperiam ipsum similique, alias ab.
          </p>
        </section>
        <a :href="collections[collectionToString][0].link" v-once>
          <button
            class="rounded-xl text-white bg-blue-500 w-fit p-5 flex items-center hover:bg-blue-400 duration-200 mt-10"
          >
            VER PÁGINA DO CRIADOR
          </button>
        </a>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { collections } from '../../utils/lists'
import { useKeenSlider } from 'keen-slider/vue.es'
import 'keen-slider/keen-slider.min.css'
import ArrowLeftIcon from '@heroicons/vue/24/outline/ArrowLeftIcon'
import { Ref } from 'vue'
import { useRoute, ref, useHead } from '#imports'

const { collection } = useRoute().params
const collectionToString: string = collection.toString()

const activeIndex = ref<number>(0)

function ThumbnailPlugin(main: Ref): (slider: any) => void {
  return (slider: any) => {
    function removeActive() {
      slider.slides.forEach((slide: HTMLElement) => {
        slide.classList.remove('active')
      })
    }
    function addActive(idx: number): void {
      slider.slides[idx].classList.add('active')
      activeIndex.value = idx
    }

    function addClickEvents(): void {
      slider.slides.forEach((slide: HTMLElement, idx: number) => {
        slide.addEventListener('click', () => {
          main.value.moveToIdx(idx)
        })
      })
    }

    slider.on('created', () => {
      addActive(slider.track.details.rel)
      addClickEvents()
      main.value.on('animationStarted', () => {
        removeActive()
        const next = main.value.animator.targetIdx || 0
        addActive(main.value.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

const [container, slider] = useKeenSlider({})
const [thumbnail] = useKeenSlider(
  {
    initial: 0,
    slides: {
      perView: 4,
      spacing: 10,
    },
  },
  [ThumbnailPlugin(slider)]
)

useHead({
  titleTemplate: `%s | ${collections[collectionToString][0].creator}`,
  meta: [
    {
      name: 'description',
      content:
        'Essa coleção NFT lorem ipsum dolor sit amet consecteturadipisicing elit. Eligendi odio accusantium rerum. Ipsa vitae aatque soluta dolorum ducimus nesciunt aut dolore facere blanditiisin aperiam ipsum similique, alias ab.',
    },
    {
      name: 'keywords',
      content: `${collections[collectionToString][0].creator}, NFT, Ethereum`
    }
  ],
})
</script>

<style scoped>
.thumbnail .keen-slider__slide {
  margin-top: 10px;
  height: 100px;
}
.thumbnail .keen-slider__slide.active {
  border: 3px solid black;
}
</style>
