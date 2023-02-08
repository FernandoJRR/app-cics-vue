<template>
  <Banner :url-img="bannerImg" :title="'Tesario'"/>
  <Tesario/>
</template>
<script lang="ts">
import Banner from "../components/Banner.vue"
import Tesario from "../components/Tesario.vue"
export default {
  components: {
    Banner,
    Tesario
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

