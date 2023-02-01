<script setup lang="ts">
  import { RouterView } from "vue-router";
  import { ref } from 'vue'
  import Sidebar from "./components/Sidebar.vue";

  // Variable theme para v-app obtiene el valor de Sidebar.vue
  const theme = ref('')

  function changeTheme(value:any) {
    theme.value = value
  }
</script>

<template>
<v-app :theme="theme">
  <v-navigation-drawer v-model="drawer" width="285">
    <Sidebar @theme="(theme) => changeTheme(theme)"/>
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
  export default {
    data () {
      return {
        drawer: true,
      }
    },
  }
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
