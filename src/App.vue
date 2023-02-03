<template>
<v-app :theme="theme">
  <v-navigation-drawer v-model="drawer" width="285">
    <Sidebar @theme="(theme: string) => changeTheme(theme)"/>
  </v-navigation-drawer>

   <v-btn style="white-space: normal;" variant="text" @click.stop="drawer = !drawer" >
    Menu
  </v-btn>   

  <v-main>
    <RouterView :theme="theme"/>
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
  methods: {
    changeTheme(value: string){
      this.theme = value
    }
  },
}
</script>