<script setup lang="ts">

  import { ref } from 'vue'

  const theme = ref('light')

  const emit = defineEmits(
  ["theme"]
  )

  function onClick () {
    emit("theme", theme)
  }
</script>
<template>
<v-container>
    <v-switch
      :prepend-icon="'mdi-weather-sunny'"
      :append-icon="'mdi-weather-night'"
      inset
      @click="onClick"
    >
    </v-switch>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo-usac-white.png"
      width="125"
      height="125"
      style="margin-left:25%;margin-top:10%;margin-bottom:10%;"
    />
    <v-list color="gray">
      <v-list-item prepend-icon="mdi-home-account" title="Home" to='/'/>
      <v-list-item prepend-icon="fa-calendar" title="Acerca de" to='about'/>
    </v-list>
</v-container>
</template>
