<template>
  <div class="mb-32">
    <TheSection />
    <MostPopular />
    <Influencers />
  </div>
</template>

<script setup lang="ts">
useHead({
  link:[
    { rel: 'preload', href: 'nfts/nft.jpg', as:'image'}
  ]
})
</script>

<style scoped></style>
