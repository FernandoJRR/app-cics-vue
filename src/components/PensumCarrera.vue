<template>
  <h1 align="center">{{titulo}}</h1>
  <v-container>
    <v-btn
      style="margin-bottom: 3%;"
      prepend-icon="mdi-arrow-left"
      @click="regresarATesario()"
    >Regresar</v-btn>
    <v-row justify="center">
      <v-col
        v-for="semestre in semestres"
        cols="12"
        xs="12"
        sm="12"
        lg="4"
      >
      <PensumCard :color="colorCarrera" :semestre="semestre"/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Banner from "../components/Banner.vue"
import PensumCard from "../components/cards/PensumCard.vue"
import { useRoute } from "vue-router"
import router from "@/router"
export default {
  components: {
    Banner,
    PensumCard
  },
  emits: ['currentPage'],
  mounted() {
    window.scrollTo(0,0)
    switch (useRoute().path) {
      case "/pensums/civil":
        this.titulo = "Civil"
        this.carreraActual = "civil"
        this.colorCarrera = "bg-red-darken-1"
        break;
      case "/pensums/ciencias-sistemas":
        this.titulo = "Ciencias y Sistemas"
        this.carreraActual = "sistemas",
        this.colorCarrera = "bg-orange-accent-4"
        break;
      case "/pensums/mecanica":
        this.titulo = "Mecanica"
        this.carreraActual = "mecanica"
        this.colorCarrera = "bg-green-darken-1"
        break;
      case "/pensums/industrial":
        this.titulo = "Industrial"
        this.carreraActual = "industrial"
        this.colorCarrera = "bg-light-green-darken-2"
        break;
      case "/pensums/mecanica-industrial":
        this.titulo = "Mecanica Industrial"
        this.carreraActual = "mecanica-industrial"
        this.colorCarrera = "bg-teal-darken-2"
        break;
      default:
        break;
    }
  },
  data() {
    return {
      bannerImg: new URL("@/assets/img/tesario.jpg", import.meta.url).href,
      titulo: '',
      carreraActual: '',
      colorCarrera: '',
      semestres : [
        {
          nombre: "Primer",
          numero: "1"
        },
        {
          nombre: "Segundo",
          numero: "2"
        },
        {
          nombre: "Tercer",
          numero: "3"
        },
        {
          nombre: "Cuarto",
          numero: "4"
        },
        {
          nombre: "Quinto",
          numero: "5"
        },
        {
          nombre: "Sexto",
          numero: "6"
        },
        {
          nombre: "Septimo",
          numero: "7"
        },
        {
          nombre: "Octavo",
          numero: "8"
        },
        {
          nombre: "Noveno",
          numero: "9"
        },
        {
          nombre: "Decimo",
          numero: "10"
        },
      ]
    }
  },
  methods: {
    regresarATesario() {
      router.push("/pensums")
    }
  },
}
</script>

