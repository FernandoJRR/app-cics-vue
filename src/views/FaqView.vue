<template>
    <Banner :url-img="bannerImg" :title="'FAQ'"/>
</template>
<script lang="ts">
import Banner from "../components/Banner.vue"
export default {
  emits: ['currentPage'],
  mounted() {
    this.$emit('currentPage', 'FAQ')   
  },
  data () {
    return {
      bannerImg: new URL("@/assets/faq.jpg", import.meta.url).href
    }
  },
}
</script>
