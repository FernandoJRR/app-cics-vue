<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        class="bg-deep-green"
        theme="dark"
        permanent
      >
        <v-list color="gray">
          <v-list-item prepend-icon="fa-calendar" title="Home" to='/'/>
          <v-list-item prepend-icon="fa-calendar" title="Acerca de" to='about'/>
        </v-list>

      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>
