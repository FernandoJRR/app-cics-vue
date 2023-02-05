<template>
  <Banner :url-img="bannerImg" :title="'AEIO'"/>
</template>
<script lang="ts">
import Banner from "../components/Banner.vue"
export default {
  inheritAttrs:false,
  components: {
    Banner,
  },
  emits: ['currentPage'],
  mounted() {
    this.$emit('currentPage', 'Horarios')
  },
  data() {
    return {
      bannerImg: new URL("@/assets/aeio.jpg", import.meta.url).href
    }
  },
}
</script>
