<template>
  <Banner :url-img="bannerImg" :title="'Horarios'"/>
  <Horarios/>
</template>
<script lang="ts">
import Banner from "../components/Banner.vue"
import Horarios from "../components/Horarios.vue"
export default {
  inheritAttrs:false,
  components: {
    Banner,
    Horarios
  },
  emits: ['currentPage'],
  mounted() {
    this.$emit('currentPage', 'Horarios')
  },
  data() {
    return {
      bannerImg: new URL("@/assets/horario.jpg", import.meta.url).href
    }
  },
}
</script>
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
