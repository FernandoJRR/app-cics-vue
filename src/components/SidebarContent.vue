<template>
  <div>
    <v-container align="center">
      <!--Logo USAC (sujeto a cambios), se usa un filtro para volverlo gris para que se vea en ambos theme (sujeto a cambios)-->
      <img
        alt="Usac Logo"
        class="logo"
        src="@/assets/universidad-de-san-carlos-de-guatemala.svg"
        width="125"
        height="125"
        style="filter: invert(50%); margin-top: 10px; margin-bottom: -5px;"
      >
    </v-container>

    <v-list density="compact">
      <v-list-item
        prepend-icon="mdi-home-outline"
        title="Inicio"
        to="/"
        class="rounded-lg"
        active-class="bg-orange-accent-4 rounded-pill"
      />
  
      <v-divider
        thickness="2"
      />
      <p class="text-overline">
        informacion basica
      </p>
      <v-list-item
        v-for="([icon,title,route], i) in basicInfoItems"
        :key="i"
        :prepend-icon="icon"
        :title="title"
        :to="route"
        class="rounded-lg"
        active-class="bg-orange-accent-4 rounded-pill"
      />
  
      <v-divider
        thickness="2"
      />
      <p class="text-overline">
        asociaciones
      </p>
      <v-list-item
        v-for="([icon,title,route], i) in associations"
        :key="i"
        :prepend-icon="icon"
        :title="title"
        :to="route"
        class="rounded-lg"
        active-class="bg-orange-accent-4 rounded-pill"
      />
  
      <v-divider
        thickness="2"
      />
      <p class="text-overline">
        recursos
      </p>
      <v-list-item
        v-for="([icon,title,route], i) in resources"
        :key="i"
        :prepend-icon="icon"
        :title="title"
        :to="route"
        class="rounded-lg"
        active-class="bg-orange-accent-4 rounded-pill"
      />
  
      <v-list-group value="Herramientas">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-toolbox-outline"
            title="Herramientas"
          />
        </template>
      </v-list-group>
  
      <v-divider
        thickness="2"
      />
      <p class="text-overline">
        extra
      </p>
      <v-list-item
        prepend-icon="mdi-information-outline"
        title="Acerca de"
        to="about"
        class="rounded-lg"
        active-class="bg-orange-accent-4 rounded-pill"
      />
      <v-container align="center">
        <v-switch
          v-model="modelSwitch"
          :prepend-icon="'mdi-weather-sunny'"
          inset
          :append-icon="'mdi-weather-night'"
          style="width:45%;"
          @click="changeTheme"
        />
      </v-container>
    </v-list>
  </div>
</template>
<script lang="ts">
  export default {
    emits: ['theme'],
    data () {
      return {
        basicInfoItems: [
          ['mdi-calendar-month-outline', 'Horarios', 'horarios'],
          ['mdi-card-bulleted-settings-outline', 'Pensums', 'pensums'],
          ['mdi-help-box-outline', 'FAQ | Primer Ingreso', 'faq-pi'],
          ['mdi-help-box-outline', 'FAQ', 'faq']
        ],
        associations: [
          ['mdi-account-group-outline','CICS','cics'],
          ['mdi-account-group-outline','AEIO','aeio'],
        ],
        resources: [
        ['mdi-file-document-multiple-outline','Manuales','manuales'],
        ['mdi-book-open-page-variant-outline','Biblioteca','biblioteca'],
        ['mdi-book-account-outline','Tesario','tesario'],
        ],
        theme: 'light',
        modelSwitch: this.theme === 'light' ? true : false,
        tools: [
        ],
      }
    },
    methods: {
      changeTheme (){
        this.theme = this.theme === 'light' ? 'dark' : 'light'
        this.$emit("theme", this.theme)
      },
    },
  }
</script>
<style scoped>
.v-list-item {
  margin-left: 7%;
  margin-right: 7%;
  font-size: 1rem;
  height: 45px !important;
}
p {
  margin-left: 8.5%;
  font-weight: bold;
}
.v-divider  {
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 7.5%;
  margin-right: 7.5%;
  width: 85%;
}
</style>
