<template>
  <v-container align="center">
    <!--Logo USAC (sujeto a cambios), se usa un filtro para volverlo gris para que se vea en ambos theme (sujeto a cambios)-->
    <img
      alt="Usac Logo"
      class="logo"
      src="@/assets/universidad-de-san-carlos-de-guatemala.svg"
      width="125"
      height="125"
      style="filter: invert(50%); margin-top: 15px;"
    >
  </v-container>
  <v-list density="compact">
    <v-list-item
      prepend-icon="mdi-home"
      to="/"
      class=""
      active-class="bg-blue-grey-darken-4"
    >
      Inicio
    </v-list-item>

    <v-divider />
    <p class="text-overline">
      informacion basica
    </p>
    <v-list-item
      v-for="([icon,title,route], i) in basicInfoItems"
      :key="i"
      :prepend-icon="icon"
      :title="title"
      :to="route"
      active-class="bg-blue-grey-darken-4"
    />

    <v-divider />
    <p class="text-overline">
      asociaciones
    </p>
    <v-list-item
      v-for="([icon,title,route], i) in associations"
      :key="i"
      :prepend-icon="icon"
      :title="title"
      :to="route"
      active-class="bg-blue-grey-darken-4"
    />

    <v-divider />
    <p class="text-overline">
      recursos
    </p>
    <v-list-item
      v-for="([icon,title,route], i) in resources"
      :key="i"
      :prepend-icon="icon"
      :title="title"
      :to="route"
      active-class="bg-blue-grey-darken-4"
    />

    <v-list-group value="Herramientas">
      <template #activator="{ props }">
        <v-list-item
          v-bind="props"
          prepend-icon="mdi-file-code"
          title="Herramientas"
        />
      </template>
    </v-list-group>

    <v-divider />
    <p class="text-overline">
      extra
    </p>
    <v-list-item
      prepend-icon="mdi-web"
      title="Acerca de"
      to="about"
      active-class="bg-blue-grey-darken-4"
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
</template>
<script lang="ts">
  export default {
    emits: ['theme'],
    data () {
      return {
        basicInfoItems: [
          ['mdi-calendar-month', 'Horarios', 'horarios'],
          ['mdi-card-bulleted-settings-outline', 'Pensums', 'pensums'],
          ['mdi-help', 'FAQ | Primer Ingreso', 'faq-pi'],
          ['mdi-help', 'FAQ', 'faq']
        ],
        associations: [
          ['mdi-account-group','CICS','cics'],
          ['mdi-account-group','AEIO','aeio'],
        ],
        resources: [
        ['mdi-text-box-multiple-outline','Manuales','manuales'],
        ['mdi-book-open-page-variant','Biblioteca','biblioteca'],
        ['mdi-book-account','Tesario','tesario'],
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
  border-radius: 10px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 1%;
  margin-bottom: 1%;
  font-size: 1rem;
}
p {
  margin-left: 8%;
  font-weight: bold;
}
.v-divider {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
