<script setup lang="ts">
import Home from "../components/Home.vue";

const props = defineProps({
  theme: String
});

</script>

<template>
  <v-container align="center">
    <img
      alt="Vue logo"
      :src="'/img/logo-cics-'+props.theme+'.png'"
    />
    <Home/>
  </v-container>
</template>
