<template>
  <h1 align="center">{{titulo}}</h1>
  <v-container>
    <template v-if="tesarioActual === 'civil'">
      <a v-for="tesis_val in tesis.civil"
        :href="tesis_val.link"
        target="_blank"
      >{{tesis_val.autor}}, {{tesis_val.fecha}}</a>.
    <iframe v-for="tesis_val in tesis.civil"
    :src="tesis_val.link" style="width: 90vw; height: 400px;" allow="autoplay" >
    </iframe>
    </template>
    <template v-else-if="tesarioActual === 'sistemas'"></template>
    <template v-else-if="tesarioActual === 'mecanica'"></template>
    <template v-else-if="tesarioActual === 'industrial'">
      <a v-for="tesis_val in tesis.industrial"
        :href="tesis_val.link"
        target="_blank"
      >{{tesis_val.autor}}, {{tesis_val.fecha}}</a>.
    </template>
    <template v-else-if="tesarioActual === 'mecanica-industrial'"></template>
  </v-container>
</template>
<script lang="ts">
import Banner from "../components/Banner.vue"
import InfoCard from "./cards/InfoCard.vue"
import { useRoute } from "vue-router"
export default {
  components: {
    Banner,
    InfoCard
  },
  emits: ['currentPage'],
  mounted() {
    window.scrollTo(0,0)
    switch (useRoute().path) {
      case "/tesario/civil":
        this.titulo = "Civil"
        this.tesarioActual = "civil"
        break;
      case "/tesario/ciencias-sistemas":
        this.titulo = "Ciencias y Sistemas"
        this.tesarioActual = "sistemas"
        break;
      case "/tesario/mecanica":
        this.titulo = "Mecanica"
        this.tesarioActual = "mecanica"
        break;
      case "/tesario/industrial":
        this.titulo = "Industrial"
        this.tesarioActual = "industrial"
        break;
      case "/tesario/mecanica-industrial":
        this.titulo = "Mecanica Industrial"
        this.tesarioActual = "mecanica-industrial"
        break;
      default:
        break;
    }
  },
  data() {
    return {
      bannerImg: new URL("@/assets/img/tesario.jpg", import.meta.url).href,
      titulo: '',
      tesarioActual: '',
      tesis : {
        civil: [
          {
            autor: "Jose Ricardo Merida Lopez",
            fecha: "2019",
            link: "https://drive.google.com/file/d/1pyrVvNWNkJFa8BK2Qv84TNoFacA4lrEq/preview"

          },
        ],
        industrial: [
          {
            autor: "Josias Erasmo Perez Lopez",
            fecha: "2018",
            link: "https://drive.google.com/file/d/1av12WjAK0ys1P6TcmxeVmnzUOR7OGh3B/preview"
          },
        ]
      }    
    }

  },
}
</script>

