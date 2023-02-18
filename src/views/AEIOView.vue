<template>
  <Banner :url-img="bannerImg" :title="'AEIO'"/>
  <AEIO/>
</template>
<script lang="ts">
import Banner from "../components/Banner.vue"
import AEIO from "../components/AEIO.vue"
export default {
  inheritAttrs:false,
  components: {
    Banner,
    AEIO
  },
  emits: ['currentPage'],
  mounted() {
    this.$emit('currentPage', 'AEIO')
    window.scrollTo(0,0)
  },
  data() {
    return {
      bannerImg: new URL("@/assets/img/aeio.jpg", import.meta.url).href
    }
  },
}
</script>
