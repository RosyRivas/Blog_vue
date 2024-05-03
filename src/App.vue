<template>
 <v-app>
 <v-parallax> 
    <div class="parallax-content">
        <div class="app">   
          <v-row>
            <v-col cols="12" md="6" class="text-left"> <!-- Alineación a la derecha -->
              <TabMenu
                :secciones="['Experiencia', 'Proyectos', 'Estudios', 'Mis Redes']"
                :seccionActiva="seccionActiva"
                :cambiarSeccion="cambiarSeccion"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <CardTitle :nombre="nombre" :profesion="profesion" />
            </v-col>
            <v-col>
              <SeccionSkills></SeccionSkills>
            </v-col>
          </v-row>
          <div class="seccion-activa">
          <v-divider></v-divider>
            <template v-if="seccionActiva === 0">
              <h2 class="text-center">Experiencia</h2>
              <ExperienciaLaboral></ExperienciaLaboral>
            </template>
            <template v-else-if="seccionActiva === 1">
                <h2 class="text-center">Proyectos</h2>
                <v-row>
                  <v-col v-for="(project, index) in projects" :key="index" cols="12" md="6" lg="4">
                    <ProyectosPersonales
                          :project="project"
                        >
                        </ProyectosPersonales>
                  </v-col>
                </v-row>  
            </template>
            <template v-else-if="seccionActiva === 2">
              <h2 class="text-center">Estudios</h2>
              <Estudios></Estudios>
            </template>
            <template v-else-if="seccionActiva === 3">
            
              <RedesSociales></RedesSociales>
            </template> 
          </div>
        </div> 
    </div>
  </v-parallax>
  <SeccionFooter>

  </SeccionFooter>
  </v-app>
</template>


<script>
import CardTitle from "./components/Menu/SeccionOne.vue";
import TabMenu from "./components/Menu/SeccionTwo.vue";
import SeccionFooter from "./components/Menu/SeccionFooter.vue";
import SeccionSkills from "./components/Menu/SeccionSkills.vue";

import RedesSociales from "./components/Project/RedesSociales.vue";
import ExperienciaLaboral from "./components/Project/ExperienciaLaboral.vue";
import Estudios from "./components/Project/EstudiosRealizados.vue";
import ProyectosPersonales from "./components/Project/ProyectosPersonales.vue";

export default {
  name: "App",
  components: {
    CardTitle,
    TabMenu,
    RedesSociales,
    ExperienciaLaboral,
    Estudios,
    ProyectosPersonales,
    SeccionFooter,
    SeccionSkills,
  },
  data() {
    return {
      nombre: "Rosa Rivas Rodriguez",
      profesion: "Developer FullStack",
      seccionActiva: 0, 
      projects: [
        {
          id: 1,
          title: "Agendate, Sistema de Gestion de turnos para centro estetico",
          image: require("@/assets/agendate.jpeg"),
          link: "https://github.com/RosyRivas/Agendate"
        },
        {
          id: 2,
          title: "Wallet, Billetera virtual",
          image: require("@/assets/kepua.png"),
          link: "https://github.com/classroomMisiones/proyecto-fs-grupo5-g5m"
        },
        {
          id: 3,
          title: "Artic, Sistema de getion para Academia productora de arte",
          image: require("@/assets/artic.png"),
          link: "https://gitlab.com/RosyRivas/artic"
        },
        {
          id: 4,
          title: "PochocloCritics, Calificacion de peliculas",
          image: require("@/assets/peliculas.png"),
          link: "https://github.com/RosyRivas/Proyecto-POO2-2019"
        }
      ]
    };
  },
  methods: {
    cambiarSeccion(index) {
      this.seccionActiva = index;
    }
  }
};
</script>

<style>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  font-family: Arial, sans-serif;
}

.seccion-activa {
  margin-top: 40px;
}
.v-parallax::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("@/assets/bannes.jpg");
  background-size: cover;
  background-position: center center;
  z-index: -1;
}

.parallax-content {
  position: relative;
  z-index: 1;
}
</style>
