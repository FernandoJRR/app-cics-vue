<script setup lang="ts">
defineProps<{
  urlImg: string
}>()
</script>

<template>
  <v-banner max-height="300">
      <v-card
        class="mx-auto"
        max-height="200"
      >
        <v-img :src="urlImg" cover></v-img>
        <v-overlay
          :model-value="true"
          persistent
          contained
          scrim="true"
          class="align-center justify-center"
        >
          <h1>Horarios</h1>
        </v-overlay>
      </v-card>
  </v-banner>
  <v-container align="center">
    <Horarios/>
  </v-container>
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
