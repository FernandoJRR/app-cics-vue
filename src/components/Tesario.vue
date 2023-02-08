<template>
  <v-container>
    <InfoCard v-for="carrera in carreras" 
    img="" 
    :title="carrera.carrera" 
    :subtitle="''" 
    :description="''" 
    :route="carrera.link"/>
  </v-container>
</template>
<script lang="ts">
import InfoCard from "../components/home/InfoCard.vue"
export default {
components: {
  InfoCard
},
data() {
  return {
    carreras : [
      {
        carrera:"Civil",
        link:"/civil"
      }, 
      {
        carrera:"Ciencias y Sistemas",
        link:"/sistemas"
      }, 
      {
        carrera:"Mecanica",
        link:"/mecanica"
      }, 
      {
        carrera:"Industrial",
        link:"/industrial"
      }, 
      {
        carrera:"Mecanica Industrial",
        link:"/mecanica-industrial"
      }
    ],
    tesis : [
            {
              autor: "Josias Erasmo Perez Lopez",
              carrera: "Industrial",
              fecha: "2018",
              link: "https://drive.google.com/file/d/1av12WjAK0ys1P6TcmxeVmnzUOR7OGh3B/view "
            },
            {
              autor: "Jose Ricardo Merida Lopez",
              carrera: "Civil",
              fecha: "2019",
              link: "https://drive.google.com/file/d/1pyrVvNWNkJFa8BK2Qv84TNoFacA4lrEq/view"
            },
          ]    
      }
    },
}
</script>
