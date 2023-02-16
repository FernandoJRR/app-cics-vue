<template>
  <Banner :url-img="bannerImg" :title="'Pensums de Estudio'"/>
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
    this.$emit('currentPage', 'Pensums')   
    window.scrollTo(0,0)
  },
  data() {
    return {
      bannerImg: new URL("@/assets/img/pensum.jpeg", import.meta.url).href
    }
  },
}
</script>
