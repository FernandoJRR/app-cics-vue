<template>
  <v-card
    class="mx-auto"
    max-width="374"
  >
    <v-card-title 
      :class="color"
    >
      <v-row no-gutters>
        <v-col>
          <v-icon
            :icon="'mdi-numeric-'+semestre.numero"
            size="80"
          ></v-icon>
        </v-col>
        <v-col class="pa-2">
          <h2 style="text-align: right;">{{semestre.nombre}} <br> Semestre</h2>
        </v-col>
      </v-row>
    </v-card-title>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-item>
      <v-card-title>Cafe Badilico</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Local Favorite</span>

        <v-icon
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Seleccionar</v-card-title>

    <div class="px-4">
      <v-chip-group :v-model="1">
        <v-chip>Obligatorios</v-chip>

        <v-chip>Opcionales</v-chip>

        <v-chip>Todos</v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        variant="text"
      >
        Accion
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
export default {
  props: {
    color: {
      type: String,
      required: true
    },
    semestre: {
      type: Object,
      required: true
    },
  }
}
</script>
