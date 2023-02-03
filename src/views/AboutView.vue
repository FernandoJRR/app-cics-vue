<template>
  <v-container class="mt-4">
    <h1>
      Acerca de esta aplicación
    </h1>
    <h2>
      Información básica
    </h2>
    <v-divider thickness="3" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, hic, sequi veritatis doloremque voluptatem quas expedita tenetur illum reiciendis impedit odio accusantium minima itaque dolores beatae corporis perspiciatis dignissimos molestiae?
    </p>
    <p>
      {{ $route.alias }}
    </p>
    <h2>
      Desarrollo
    </h2>
    <v-divider thickness="3" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, hic, sequi veritatis doloremque voluptatem quas expedita tenetur illum reiciendis impedit odio accusantium minima itaque dolores beatae corporis perspiciatis dignissimos molestiae?
    </p>

    <h2>
      Contribuciones
    </h2>
    <v-divider thickness="3" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, hic, sequi veritatis doloremque voluptatem quas expedita tenetur illum reiciendis impedit odio accusantium minima itaque dolores beatae corporis perspiciatis dignissimos molestiae?
    </p>
  </v-container>
</template>

<style>
h1 {
  font-weight: 500;
  font-size: 2.4rem;
}

h2 {
    font-weight: 400;
    font-size: 2rem;
    top: -10px;
    margin-top: 3%;
  }
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
