<script setup lang="ts">
import Home from "../components/Home.vue";

const props = defineProps({
  theme: String
});

function getLogo(theme: any){
   if (theme === 'light') {
     return new URL("@/assets/img/logo-cics-light.png", import.meta.url).href
   }
   return new URL("@/assets/img/logo-cics-dark.png", import.meta.url).href
}
</script>
<script lang="ts">
export default {
  emits: ['currentPage'],
  mounted() {
    this.$emit('currentPage', 'Inicio')   
    window.scrollTo(0,0)
  },
}
</script>

<template>
  <v-container align="center">
    <v-img
      max-width="450"
      alt="Logo CICS"
      :src="getLogo(props.theme)"
    />
    <Home />
  </v-container>
</template>
