<template>
  <v-container>
    <InfoCard v-for="carrera in carreras" 
    img="" 
    :title="carrera.carrera" 
    :subtitle="''" 
    :description="''" 
    :route="carrera.link"
    @click="emitCarrera(carrera.carrera)"
    />
  </v-container>
</template>
<script lang="ts">
import InfoCard from "../components/cards/InfoCard.vue"
export default {
components: {
  InfoCard
},
emits: ['tesarioActual'],
data() {
  return {
    carreras : [
      {
        carrera:"Civil",
        link:"/tesario/civil"
      }, 
      {
        carrera:"Ciencias y Sistemas",
        link:"/tesario/ciencias-sistemas"
      }, 
      {
        carrera:"Mecanica",
        link:"/tesario/mecanica"
      }, 
      {
        carrera:"Industrial",
        link:"/tesario/industrial"
      }, 
      {
        carrera:"Mecanica Industrial",
        link:"/tesario/mecanica-industrial"
      }
    ],
      }
    },
    methods: {
      emitCarrera(nombreCarrera: string) {
        this.$emit('tesarioActual', nombreCarrera)
      }
    },
}
</script>
