<template>
  <Banner
    :url-img="bannerImg"
    :title="'FAQ | Primer Ingreso'"
  />
</template>
<script lang="ts">
import Banner from "../components/Banner.vue"
export default {
  components: {
    Banner
  },
  emits: ['currentPage'],
  data() {
    return {
      
    }
  },
  computed: {
    bannerImg () { return new URL("@/assets/faq.jpg", import.meta.url).href},
  },
  mounted() {
    this.$emit('currentPage', 'FAQ | Primer Ingreso')   
  },
}
</script>
