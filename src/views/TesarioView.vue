<template>
  <Banner :url-img="bannerImg" :title="'Tesario'"/>
</template>
<script lang="ts">
import Banner from "../components/Banner.vue"
export default {
  components: {
    Banner
  },
  emits: ['currentPage'],
  mounted() {
    this.$emit('currentPage', 'Pensums')   
  },
  data() {
    return {
      bannerImg: new URL("@/assets/img/tesario.jpg", import.meta.url).href
    }
  },
}
</script>

