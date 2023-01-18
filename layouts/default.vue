<template>
  <div class="mx-10 lg:mx-32">
    <header
      class="h-24 flex justify-between text-xl pt-8 transition-all ease-out"
    >
      <NuxtLink to="/">
        <p
          class="font-extrabold text-blue-700 hover:scale-110 w-fit duration-500 cursor-pointer"
        >
          Mitz <span class="text-black">NFT</span>
        </p>
      </NuxtLink>
      <div class="flex gap-10">
        <NuxtLink
          v-for="topic in headerTopics"
          :to="topic.path"
          active-class="text-blue-600 underline underline-offset-4"
        >
          <p
            class="w-fit hover:scale-110 duration-500 cursor-pointer hidden sm:block font-semibold"
          >
            {{ topic.title }}
          </p>
        </NuxtLink>
      </div>
      <div class="flex sm:hidden justify-end" @click="open = !open">
        <Bars3Icon class="w-8 h-8" />
      </div>
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div
          v-if="open"
          class="absolute right-0 z-10 mt-12 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="py-1">
            <NuxtLink
              v-for="(topic, index) in headerTopics"
              :key="index"
              :to="topic.path"
            >
              <p
                @click="open = false"
                class="text-gray-900, block px-4 py-3 text-sm font-medium,"
              >
                {{ topic.title.toUpperCase() }}
              </p>
            </NuxtLink>
          </div>
        </div>
      </transition>
    </header>

    <slot />
  </div>
</template>

<script setup lang="ts">
import Bars3Icon from '@heroicons/vue/24/outline/Bars3Icon'

const open = ref<boolean>(false)

interface Topics {
  title: string
  path: string
}
const headerTopics: Array<Topics> = [
  { title: 'Home', path: '/' },
  { title: 'Coleções', path: '/colecoes' },
]
</script>
