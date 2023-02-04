<template>
  <Banner :url-img="bannerImg" :title="'Acerca de'"/>
  <About/>
</template>
<script lang="ts">
import Banner from "../components/Banner.vue"
import About from "../components/About.vue"
export default {
  components: {
    Banner,
    About
  },
  emits: ['currentPage'],
  mounted() {
    this.$emit('currentPage', 'Acerca de')   
  },
  data() {
    return {
      bannerImg: new URL("@/assets/acerca_de.jpg", import.meta.url).href
    }
  },
}
</script>
<style>
h1 {
  font-weight: 500;
  font-size: 2.4rem;
}

h2 {
    font-weight: 400;
    font-size: 2rem;
    top: -10px;
    margin-top: 3%;
  }
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
