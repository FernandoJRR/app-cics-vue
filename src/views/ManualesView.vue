<template>
  <Banner :url-img="bannerImg" :title="'Manuales'" style="margin-bottom: 5vh;"/>
  <Manuales/>
</template>
<script lang="ts">
import Banner from "../components/Banner.vue"
import Manuales from "../components/Manuales.vue"
export default {
  components: {
    Banner,
    Manuales
  },
  emits: ['currentPage'],
  mounted() {
    this.$emit('currentPage', 'Pensums')   
  },
  data() {
    return {
      bannerImg: new URL("@/assets/img/manuales.jpg", import.meta.url).href
    }
  },
}
</script>
