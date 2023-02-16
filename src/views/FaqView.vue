<template>
    <Banner :url-img="bannerImg" :title="'FAQ'"/>
</template>
<script lang="ts">
import Banner from "../components/Banner.vue"
export default {
  components: {
    Banner
  },
  emits: ['currentPage'],
  mounted() {
    this.$emit('currentPage', 'FAQ')   
    window.scrollTo(0,0)
  },
  data () {
    return {
      bannerImg: new URL("@/assets/img/faq.jpg", import.meta.url).href
    }
  },
}
</script>
