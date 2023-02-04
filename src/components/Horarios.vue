<script setup lang="ts">
const clasesPDF = new URL("@/assets/horarios/horarioClases.pdf", import.meta.url).href
const labsPDF = new URL("@/assets/horarios/horarioLaboratorios.pdf", import.meta.url).href
</script>
<template>
  <div
    style="width: 100%;"
    align="center"
  >
    <v-card
      max-width="60%"
      min-height="60%"
    >
      <v-card-title>
        Clases
      </v-card-title>
      <iframe
        :src="clasesPDF"
        style="min-height: 55vh; min-width: 100%; border: none; border-radius: 15px;"
      />
      <v-card-actions>
        2 de Febrero, 12:00 PM
      </v-card-actions>
    </v-card>
    <V-divider style="margin-top: 1%; margin-bottom: 1%; width: 70%;" />

    <v-card
      max-width="60%"
      min-height="60%"
    >
      <v-card-title>
        Laboratorios
      </v-card-title>
      <iframe
        :src="labsPDF"
        style="min-height: 63vh; min-width: 100%; border: none; border-radius: 15px;"
      />
      <v-card-actions>
        2 de Febrero, 12:00 PM
      </v-card-actions>
    </v-card>
  </div>
</template>
