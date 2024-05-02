<template>
   <div class="card-title">
    <h1 class="nombre">Skills</h1>
    <div class="skills-icons">
        <iconAngular></iconAngular>
        <iconVue></iconVue>
        <iconVuetify></iconVuetify>
        <iconLaravel></iconLaravel>
        <IconJava></IconJava>
        <IconMySQL></IconMySQL>
        <IconPostgres></IconPostgres>
    </div>
    <h1 class="nombre">Tools</h1>
    <div class="tools-icons">
      <IconTrello></IconTrello>
      <IconJira></IconJira>
      <IconGit></IconGit>
    </div>
  </div>
</template>

<script>

import IconAngular from '@/components/Icons/IconAngular.vue';
import IconVue from '@/components/Icons/IconVue.vue';
import IconVuetify from '@/components/Icons/IconVuetify.vue';
import IconGit from '@/components/Icons/IconGit.vue';
import IconLaravel from '@/components/Icons/IconLaravel.vue';
import IconJava from '@/components/Icons/IconJava.vue';
import IconMySQL from '@/components/Icons/IconMySQL.vue';
import IconPostgres from '@/components/Icons/IconPostgres.vue';
import IconJira from '@/components/Icons/IconJira.vue';
import IconTrello from '@/components/Icons/IconTrello.vue';

export default {
  components: {
      IconAngular,
      IconVue,
      IconVuetify,
      IconLaravel,
      IconJira,
      IconGit,
      IconJava,
      IconMySQL,
      IconPostgres,
      IconTrello
  },
  props: {
    nombre: String,
    profesion: String
  }
};
</script>

<style scoped>

.card-title {
  background-color: #f0f0f0;
  padding: 40px;
  border-radius: 15px;
  text-align: left; /* Centrar el contenido */
}

.nombre {
  font-size: 1.5rem; /* Tamaño grande para el nombre */
  margin-bottom: 5px; /* Espacio entre el nombre y la profesión */
}

.skills-icons, .tools-icons {
  margin-top: 10px; /* Espacio entre los títulos y los iconos */
  display: flex; /* Utilizamos Flexbox para el diseño */
  flex-wrap: wrap; /* Permitimos que los elementos se envuelvan a la siguiente línea si no hay suficiente espacio */
  justify-content: flex-start; /* Alineamos los elementos al inicio del contenedor */
  align-items: center; /* Alineamos los elementos verticalmente */
}

.skills-icons i, .tools-icons i {
  font-size: 2rem; /* Tamaño de los iconos */
  margin-right: 10px; /* Espacio entre los iconos */
}

</style>
