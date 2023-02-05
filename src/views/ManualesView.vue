<template>
  <Banner :url-img="bannerImg" :title="'Manuales'"/>
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
      bannerImg: new URL("@/assets/manuales.jpg", import.meta.url).href
    }
  },
}
</script>
