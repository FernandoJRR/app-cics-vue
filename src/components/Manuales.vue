<template>
  <v-container v-for="manual in manuales">
    <h2>{{manual.titulo}}</h2>
    <v-divider thickness="3" />
    <v-container>
    <iframe
      :src="getPDFjs(manual.contenido)"
      style="min-height: 55vh; min-width: 100%; border: none; border-radius: 15px;"
    />
    </v-container>
  </v-container>
</template>
<script setup lang="ts">
const manuales = [
{
  titulo: "Obtener Certificado de Cursos",
  ref: "obtener_certificado_de_cursos",
  contenido: new URL("@/assets/manuales/obtener_certificado_de_cursos.pdf", import.meta.url).href

},
{
  titulo: "Guia Escuela de Vacaciones USAC Central para Estudiantes Externos",
  ref: "guia_esc_vacaciones_externos_usac",
  contenido: new URL("@/assets/manuales/guia_esc_vacaciones_externos_usac.pdf", import.meta.url).href
}
]

function getPDFjs(urlPDF:any) {
  return new URL('/pdfjs-3.3.122-dist/web/viewer.html?file=', import.meta.url).href + urlPDF
}
</script>
