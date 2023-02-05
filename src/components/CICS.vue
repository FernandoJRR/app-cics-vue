<template>
  <v-container class="mt-4">
    <p>
      El CICS son la Comunidad de Ingenieria en Ciencias y Sistemas, la asociacion compuesta por todos los estudiantes del area profesional de la carrera de
      Ingenieria en Ciencias y Sistemas del CUNOC y el Comite de Ingenieria en Ciencias y Sistemas, la directiva de la asociacion,
      teniendo representantes de todos los años del area profesional de la carrera.
    </p>
    <br>
    <h2>
      Miembros del Comite
    </h2>
    <v-divider thickness="3" />
    <p>
      Los miembros del comite del CICS-2023 son:
      <br>
      <br>
      ● Mario Moises Ramirez Tobar (Representante de Quinto Año)
      <br>
      ● Jose Carlos Soberanis Ramirez (Representante de Quinto Año)
      <br>
      ● Bryan Rene Gomez Gomez (Representante de Quinto Año)
      <br>
      ● Eriksson Jose Hernandez Lopez (Representante de Cuarto Año)
      <br>
      ● Cesar Reginaldo Tzoc Alvarado (Representante de Cuarto Año)
      <br>
      ● Fernando Jose Rodriguez Ramirez (Representante de Tercer Año)
      <br>
      ● Jose Roberto Bautista Rojas (Representante de Segundo Año)
    </p>
    <br>
    <h2>
      Contacto
    </h2>
    <v-divider thickness="3" />
    <p>
      ● Correo Electronico
      <br>
      ● Facebook
    </p>
    <br>
    <h2>
      Reglamento
    </h2>
    <v-divider thickness="3" />
      <v-container>
      <iframe
        :src="reglamentoCICS"
        style="min-height: 55vh; min-width: 100%; border: none; border-radius: 15px;"
      />
      </v-container>
  </v-container>
</template>
<script setup lang="ts">
const reglamentoCICS = new URL("/pdfjs-3.3.122-dist/web/viewer.html?file=", import.meta.url).href + 
                     new URL("@/assets/reglamentos/reglamento_transitorio_cics.pdf", import.meta.url).href
</script>
