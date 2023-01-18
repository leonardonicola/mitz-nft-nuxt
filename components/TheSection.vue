<template>
  <section class="my-12 flex justify-between gap-16 transition-all ease-out">
    <div class="flex flex-col max-w-xl">
      <p class="text-4xl md:text-6xl font-extrabold mb-5">
        Construa a sua carteira NFT dos sonhos
      </p>
      <p class="text-neutral-600 mb-10">
        Descubra as melhores NFT do mercado com apenas alguns cliques!
      </p>
      <button
        class="rounded-xl text-white bg-blue-500 w-fit p-5 flex items-center hover:bg-blue-400 duration-200"
      >
        <NuxtLink to="/colecoes"> EXPLORE </NuxtLink>
      </button>
    </div>
    <div
      class="hidden lg:inline-block max-w-lg lg:max-w-2xl relative cursor-pointer hover:brightness-110 duration-500"
    >
      <img
        src="/nfts/nft.jpg"
        alt="Storm Trooper NFT"
        class="w-full h-full object-cover drop-shadow-2xl"
      />
    </div>
  </section>
</template>
<script setup lang="ts"></script>
