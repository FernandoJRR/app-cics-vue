<template>
  <v-container v-for="carrera in carreras">
    <InfoCard 
    :img="carrera.img" 
    :title="carrera.carrera" 
    :route="carrera.link"
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
        img: new URL("@/assets/img/logo_civil.jpg", import.meta.url).href,
        link:"/pensums/civil"
      }, 
      {
        carrera:"Ciencias y Sistemas",
        img: new URL("@/assets/img/logo_sistemas.jpg", import.meta.url).href,
        link:"/pensums/ciencias-sistemas"
      }, 
      {
        carrera:"Mecanica",
        img: new URL("@/assets/img/logo_mecanica.jpg", import.meta.url).href,
        link:"/pensums/mecanica"
      }, 
      {
        carrera:"Industrial",
        img: new URL("@/assets/img/logo_industrial.jpg", import.meta.url).href,
        link:"/pensums/industrial"
      }, 
      {
        carrera:"Mecanica Industrial",
        img: new URL("@/assets/img/logo_mecanica_industrial.jpg", import.meta.url).href,
        link:"/pensums/mecanica-industrial"
      }
    ],
      }
    },
}
</script>
