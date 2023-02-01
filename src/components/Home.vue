<script lang="ts">
  export default {
    data () {
      return {
        //Secciones
        secciones: [
          [ 'Horarios del Semestre' , 'about'],
          [ 'Pensums de Estudio' , 'about'],
          [ 'FAQ | Primer Ingreso' , 'about'],
          [ 'FAQ' , 'about'],
          [ 'CICS' , 'about'],
          [ 'AEIO' , 'about'],
          [ 'Manuales' , 'about'],
          [ 'Biblioteca' , 'about'],
          [ 'Tesario' , 'about'],
        ],
        imagenes: {
          horario: new URL("@/assets/horario.jpg", import.meta.url).href,
          pensum: new URL("@/assets/pensum.jpeg", import.meta.url).href,
          faq: new URL("@/assets/faq.jpg", import.meta.url).href,
          cics: new URL("@/assets/cics.png", import.meta.url).href,
          aeio: new URL("@/assets/aeio.jpg", import.meta.url).href,
          manuales: new URL("@/assets/manuales.jpg", import.meta.url).href,
          biblioteca: new URL("@/assets/biblioteca.jpg", import.meta.url).href,
          tesario: new URL("@/assets/tesario.jpg", import.meta.url).href,
          herramientas: new URL("@/assets/herramientas.jpg", import.meta.url).href,
          acercaDe: new URL("@/assets/acerca_de.jpg", import.meta.url).href,
        }
      }
    },
  }
</script>
<template>
  <div class="greetings">
    <h1 class="green">Aplicacion para Estudiantes</h1>
    <v-divider thickness="3"/>
    <br>
    <br>
    <h3>
      La aplicacion para los estudiantes de Ingenieria del CUNOC fue creada con el fin
      de apoyar a los estudiantes a encontrar informacion que les puede ser util a lo largo
      de su carrera.
    </h3>
    <br>
    <h3>
      La aplicacion esta compuesta por secciones con informacion y herramientas.
    </h3>
    <br>

    <h2 class="green">Informacion</h2>
    <v-divider thickness="3"/>
    <br>
    <br>
    <v-row justify="center">
      <v-col sm="3">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-3" max-width="600" v-bind="props" 
            to="about">
            <v-img              
              :class="{ 'on-hover': isHovering }"
              :aspect-ratio="16/9"
              cover
              :src="imagenes.horario"
            ></v-img>

            <v-card-text class="pt-6">
              <div class="font-weight-light text-grey text-h6 mb-2">Para organizarte</div>

              <h3 class="text-h4 font-weight-light text-orange mb-2">
                Horarios
              </h3>

              <div class="font-weight-light text-h6 mb-2">
                Horarios de clases y laboratorios.
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col sm="3">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-3" max-width="600" v-bind="props" 
            to="about">
            <v-img              
              :class="{ 'on-hover': isHovering }"
              :aspect-ratio="16/9"
              cover
              :src="imagenes.pensum"
            />

            <v-card-text class="pt-6">
              <div class="font-weight-light text-grey text-h6 mb-2">Para planificar</div>

              <h3 class="text-h4 font-weight-light text-orange mb-2">
                Pensums
              </h3>

              <div class="font-weight-light text-h6 mb-2">
                Recopilatorio de los pensums de las diferentes carreras de la division,<br>
                y herramienta para calcular diferentes datos acerca de tu pensum.
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>

      <v-col sm="3">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-3" max-width="600" v-bind="props" 
            to="about">
            <v-img              
              :class="{ 'on-hover': isHovering }"
              :aspect-ratio="16/9"
              cover
              :src="imagenes.faq"
            />

            <v-card-text class="pt-6">
              <div class="font-weight-light text-grey text-h6 mb-2">Para ayudarte al inicio</div>

              <h3 class="text-h4 font-weight-light text-orange mb-2">
                FAQ | Primer Ingreso
              </h3>

              <div class="font-weight-light text-h6 mb-2">
                Preguntas Frecuentes para los estudiantes de primer ingreso.
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col sm="3">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-3" max-width="600" v-bind="props" 
            to="about">
            <v-img              
              :class="{ 'on-hover': isHovering }"
              :aspect-ratio="16/9"
              cover
              :src="imagenes.faq"
            />

            <v-card-text class="pt-6">
              <div class="font-weight-light text-grey text-h6 mb-2">Para ayudarte</div>

              <h3 class="text-h4 font-weight-light text-orange mb-2">
                FAQ
              </h3>

              <div class="font-weight-light text-h6 mb-2">
                Preguntas Frecuentes para estudiantes de reingreso.
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <h2 class="green">Asociaciones Estudiantiles</h2>
    <v-divider thickness="3"/>
    <br>
    <br>
    <v-row justify="center">
      <v-col sm="3">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-3" max-width="600" v-bind="props" 
            to="about">
            <v-img              
              :class="{ 'on-hover': isHovering }"
              :aspect-ratio="16/9"
              cover
              :src="imagenes.cics"
            />

            <v-card-text class="pt-6">
              <div class="font-weight-light text-grey text-h6 mb-2">Acerca del comite</div>

              <h3 class="text-h4 font-weight-light text-orange mb-2">
                CICS
              </h3>

              <div class="font-weight-light text-h6 mb-2">
                Informacion relevante del Comite de Ingenieria en Ciencias y Sistemas.
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col sm="3">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-3" max-width="600" v-bind="props" 
            to="about">
            <v-img              
              :class="{ 'on-hover': isHovering }"
              :aspect-ratio="16/9"
              cover
              :src="imagenes.aeio"
            />

            <v-card-text class="pt-6">
              <div class="font-weight-light text-grey text-h6 mb-2">Acerca de la asociacion</div>

              <h3 class="text-h4 font-weight-light text-orange mb-2">
                AEIO
              </h3>

              <div class="font-weight-light text-h6 mb-2">
                Informacion relevante de la Asociacion de Estudiantes de Ingenieria de Occidente.
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <h2 class="green">Material y Utilidades</h2>
    <v-divider thickness="3"/>
    <br>
    <br>
    <v-row justify="center">
      <v-col sm="3">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-3" max-width="600" v-bind="props" 
            to="about">
            <v-img              
              :class="{ 'on-hover': isHovering }"
              :aspect-ratio="16/9"
              cover
              :src="imagenes.manuales"
            />

            <v-card-text class="pt-6">
              <div class="font-weight-light text-grey text-h6 mb-2">Para orientarte</div>

              <h3 class="text-h4 font-weight-light text-orange mb-2">
                Manuales
              </h3>

              <div class="font-weight-light text-h6 mb-2">
                Manuales e infografias acerca de procesos importantes en la universidad.
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col sm="3">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-3" max-width="600" v-bind="props" 
            to="about">
            <v-img              
              :class="{ 'on-hover': isHovering }"
              :aspect-ratio="16/9"
              cover
              :src="imagenes.biblioteca"
            />

            <v-card-text class="pt-6">
              <div class="font-weight-light text-grey text-h6 mb-2">Para estudiar</div>

              <h3 class="text-h4 font-weight-light text-orange mb-2">
                Biblioteca
              </h3>

              <div class="font-weight-light text-h6 mb-2">
                Material de estudio de los diferentes cursos de la Division.
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>

      <v-col sm="3">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-3" max-width="600" v-bind="props" 
            to="about">
            <v-img              
              :class="{ 'on-hover': isHovering }"
              :aspect-ratio="16/9"
              cover
              :src="imagenes.tesario"
            />

            <v-card-text class="pt-6">
              <div class="font-weight-light text-grey text-h6 mb-2">Para investigar</div>

              <h3 class="text-h4 font-weight-light text-orange mb-2">
                Tesario
              </h3>

              <div class="font-weight-light text-h6 mb-2">
                Recopilacion de las tesis de estudiantes de ingenieria a lo largo del tiempo.
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col sm="3">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-3" max-width="600" v-bind="props" 
            to="about">
            <v-img              
              :class="{ 'on-hover': isHovering }"
              :aspect-ratio="16/9"
              cover
              :src="imagenes.herramientas"
            />

            <v-card-text class="pt-6">
              <div class="font-weight-light text-grey text-h6 mb-2">Como ayuda</div>

              <h3 class="text-h4 font-weight-light text-orange mb-2">
                Herramientas
              </h3>

              <div class="font-weight-light text-h6 mb-2">
                Herramientas en forma de snippets para ayudar a estudiantes.
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>

      <v-col sm="3">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-3" max-width="600" v-bind="props" 
            to="about">
            <v-img              
              :class="{ 'on-hover': isHovering }"
              :aspect-ratio="16/9"
              cover
              :src="imagenes.acercaDe"
            />

            <v-card-text class="pt-6">
              <div class="font-weight-light text-grey text-h6 mb-2">Para saber mas</div>

              <h3 class="text-h4 font-weight-light text-orange mb-2">
                Acerca de
              </h3>

              <div class="font-weight-light text-h6 mb-2">
                Informacion acerca de la aplicacion, su desarrollo y mantenimiento.
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
/*Estilo para los textos*/
  h2 {
    font-weight: 500;
    font-size: 2rem;
    top: -10px;
    margin-top: 3%;
  }
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
  }

/*Si la pantalla es pequena el header estara centrado y el texto a la izquierda*/
  .greetings h1,
  .greetings h2 {
    text-align: center;
  }
  .greetings h3 {
    text-align: left;
  }

/*Si la pantalla es grande el header y texto estaran a la izquierda*/
  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h2 {
      text-align: left;
    }

    .greetings h3 {
      text-align: left;
    }
  }

/*Opacidad de las tarjetas*/
  .v-img {
    transition: opacity .4s ease-in-out;
  }

  .v-img:not(.on-hover) {
    opacity: 1;
  }

  .v-img.on-hover {
    opacity: .5;
  }

  .show-btns {
    color: rgba(255, 255, 255, 1) !important;
  }
</style>
