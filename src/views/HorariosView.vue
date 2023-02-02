<script lang="ts">
export default {
  inheritAttrs:false
}
</script>
<script setup lang="ts">
  import Banner from "../components/Banner.vue"
  import Horarios from "../components/Horarios.vue"
  const bannerImg = new URL("@/assets/horario.jpg", import.meta.url).href
</script>
<template>
  <Banner :url-img="bannerImg"/>
  <Horarios/>
</template>
<style scoped>
  h1 {
    font-size: 15vw
  }

  .h1 {
    text-decoration: underline;
    text-decoration: overline;
  }

  @media (min-width: 840px) {
    h1 {
      font-size: 3vw
    }
    .h1 {
      text-decoration: underline;
      text-decoration: overline;
    }
  }
</style>
