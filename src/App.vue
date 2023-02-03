<template>
  <v-app :theme="theme">
    <!-- TODO: extract app bar to individual component -->
    <v-app-bar
      color="blue-grey"
      :elevation="elevation"
    >
      <template #prepend>
        <v-btn
          :icon="drawer ? 'mdi-backburger' : 'mdi-menu'"
          @click="drawer = !drawer"
        />
      </template>
      <template #append>
        <v-btn icon="mdi-dots-vertical" />
      </template>
      <v-app-bar-title class="mt-n1">
        <!-- TODO: show page name, possibly with emit -->
        <strong>
          APP CICS - CUNOC
        </strong>
      </v-app-bar-title>
    </v-app-bar>
    
    <v-navigation-drawer
      v-model="drawer"
      :width="$vuetify.display.mdAndUp ? 340 : 300"
      class="navigation-sidebar"
    >
      <Sidebar @theme="(theme: string) => changeTheme(theme)" />
    </v-navigation-drawer>
    
    <v-main>
      <RouterView :theme="theme" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Sidebar from "./components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
  data () {
    return {
      drawer: true,
      theme: 'light'
    }
  },
  computed: {
    elevation (){
      return this.drawer === true ? 1 : 0
    },
  },
  methods: {
    changeTheme(value: string){
      this.theme = value
    }
  }
}
</script>
<style lang="scss">
// @import "./assets/styles/main.scss";

</style>