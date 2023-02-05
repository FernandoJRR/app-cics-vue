<template>
  <Banner :url-img="bannerImg" :title="'CICS'"/>
  <CICS/>
</template>
<script lang="ts">
import Banner from "../components/Banner.vue"
import CICS from "../components/CICS.vue"
export default {
  inheritAttrs:false,
  components: {
    Banner,
    CICS
  },
  emits: ['currentPage'],
  mounted() {
    this.$emit('currentPage', 'Horarios')
  },
  data() {
    return {
      bannerImg: new URL("@/assets/cics.png", import.meta.url).href
    }
  },
}
</script>
