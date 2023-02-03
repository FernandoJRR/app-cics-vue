<script setup lang="ts">
const props = defineProps({
    urlImg: { type: String, required: true},
    title: { type: String, required: true},
    heightImg: { type: Number, required: false, default: 100}
});
</script>

<template>
  <v-banner max-height="300" sticky style="z-index: 1000;">
      <v-card
        class="mx-auto"
        max-height="170"
      >
        <v-img :src="urlImg" cover/>
        <v-overlay
          :model-value="true"
          persistent
          contained
          scrim="true"
          class="align-center justify-center"
        >
          <h1>{{title}}</h1>
        </v-overlay>
      </v-card>
  </v-banner>
</template>
<style scoped>
  h1 {
    font-size: 15vw
  }

  .h1 {
    text-decoration: underline;
    text-decoration: overline;
  }

  @media (min-width: 840px) {
    h1 {
      font-size: 3vw
    }
    .h1 {
      text-decoration: underline;
      text-decoration: overline;
    }
  }
</style>
