<script lang="ts">
  import { ref } from 'vue'

  //Variable theme que se envia a App.vue
  export const theme = ref('dark')

  export default {
    data () {
      return {
        // Model para el switch de theme
        modelSwitch: theme.value === 'light' ? false : true,

        //Herramientas creadas
        herramientas: [
          //[ 'NombreHerramienta' , 'route'],
        ],
      }
    },
  }
</script>
<script setup lang="ts">
  // Se define el emit de theme
  const emit = defineEmits(
    ["theme"]
  )

  //Se emite el theme a App.vue para setearlo por primera vez
  emit("theme", theme.value)

  // Cada que el switch es presionado el theme cambia y es emitido
  function onClick () {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    emit("theme", theme.value)
  }
</script>

<template>
<v-container align="center">
    <v-switch
      :prepend-icon="'mdi-weather-sunny'"
      inset
      @click="onClick"
      :append-icon="'mdi-weather-night'"
      v-model="modelSwitch"
      
      style="width:53%;"
    />

    <!--Logo USAC (sujeto a cambios), se usa un filtro para volverlo gris para que se vea en ambos theme (sujeto a cambios)-->
    <img
      alt="Usac Logo"
      class="logo"
      src="@/assets/universidad-de-san-carlos-de-guatemala.svg"
      width="125"
      height="125"
      style="filter: invert(50%);"
    />
</v-container>
    <v-list density="compact">
      <v-list-item prepend-icon="mdi-home" title="Home" to='/'/>
      <v-divider/>
      <v-list-item prepend-icon="mdi-calendar-month" title="Horarios" to='about'/>
      <v-list-item prepend-icon="mdi-card-bulleted-settings-outline" title="Pensums" to='about'/>
      <v-list-item prepend-icon="mdi-help" title="FAQ | Primer Ingreso" to='about'/>
      <v-list-item prepend-icon="mdi-help" title="FAQ" to='about'/>
      <v-divider/>
      <v-list-item prepend-icon="mdi-account-group" title="CICS" to='about'/>
      <v-list-item prepend-icon="mdi-account-group" title="AEIO" to='about'/>
      <v-divider/>
      <v-list-item prepend-icon="mdi-text-box-multiple-outline" title="Manuales" to='about'/>
      <v-list-item prepend-icon="mdi-book-open-page-variant" title="Biblioteca" to='about'/>
      <v-list-item prepend-icon="mdi-book-account" title="Tesario" to='about'/>

      <!--List group con las herramientas-->
      <v-list-group value="Herramientas">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-file-code"
            title="Herramientas"
          ></v-list-item>
        </template>

        <!--Si no hay ninguna herramienta puede tirar error esta tag-->
        <!--
        <v-list-item
          v-for="([title, path], i) in herramientas"
          :key="i"
          :title="title" 
          :to="path"
        />
        -->
      </v-list-group>

      <v-list-item prepend-icon="mdi-web" title="Acerca de" to='about'/>
    </v-list>
</template>
<style scoped>
.v-list-item {
  border-radius: 10px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 1%;
  margin-bottom: 1%;
}
.v-divider {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
