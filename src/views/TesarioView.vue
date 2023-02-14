<template>
  <Banner :url-img="bannerImg" :title="'Tesario'"/>
  <RouterView/>
</template>
<script lang="ts">
import Banner from "../components/Banner.vue"
export default {
  components: {
    Banner,
  },
  emits: ['currentPage'],
  mounted() {
    this.$emit('currentPage', 'Tesario')   
    window.scrollTo(0,0)
  },
  data() {
    return {
      bannerImg: new URL("@/assets/img/tesario.jpg", import.meta.url).href,
      tesarioActual: String
    }
  },
}
</script>

