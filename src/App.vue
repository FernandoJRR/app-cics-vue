<template>
  <v-app :theme="theme">
    <v-app-bar
      :color="theme === 'light' ? 'white ': 'black'"
      :elevation="elevation"
    >
      <template #prepend>
        <v-btn
          :icon="drawer ? 'mdi-backburger' : 'mdi-menu'"
          @click="drawer = !drawer"
        />
      </template>

      <v-app-bar-title class="mt-n1">
        <strong>{{ currentPage }} </strong> - APP
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
      <RouterView
        :theme="theme"
        @current-page="currentPage = $event"
      />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Sidebar from "./components/SidebarContent.vue";
export default {
  components: {
    Sidebar,
  },
  data () {
    return {
      drawer: true,
      theme: 'light',
      currentPage: ''
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
@import '@/assets/styles/main.scss';
</style>