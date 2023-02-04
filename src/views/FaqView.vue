<template>
    <Banner :url-img="bannerImg" :title="'FAQ'"/>
</template>
<script setup lang="ts">
import Banner from "../components/Banner.vue"
const bannerImg = new URL("@/assets/faq.jpg", import.meta.url).href
</script>
