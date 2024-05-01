<template>
  <v-timeline align="start">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :dot-color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <template v-slot:opposite>
       <div
          :class="`pt-1 headline font-weight-bold text-${item.color}`"
          v-text="item.year"
        >
        </div>
      </template>
      <v-card>
        <v-card-title :class="['text-h5', `bg-${item.color}`, 'text-xs-center', 'text-wrap']">
          {{ item.title }}
        </v-card-title>
        <v-card-text class="bg-white text--primary text-h6"> 
          <p>{{ item.text }}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>



export default {
    data: () => ({
      items: [
        {
          title:'Developer Frontend Vuejs  |  Iratu',
          text:'Mi rol implicaba desarrollar interfaces de usuario a partir de los mockups proporcionados por el cliente, garantizando la precisión y fidelidad visual del diseño. Además, tenía la responsabilidad de realizar revisiones de codigo (pull requests) dentro del equipo de desarrollo, asegurando la calidad del código, la consistencia con los estándares establecidos y la coherencia con los requisitos del cliente',
          color: 'blue-darken-4',
          icon: 'mdi-star',
          year:'2022 - 2024',
        },
        {
          title:'Developer FullStack en Java-Spring Boot | Agendate, Sistema',
          text:'Líder técnico del sistema web para agendar turnos en un centro de estética, responsable de la creación del backlog y de llevar a cabo el análisis y modelado de datos para diseñar la estructura de bases de datos en MySQL. Además, programé algunos módulos relacionados con los turnos.',
          color: 'blue-darken-4',
          icon: 'mdi-star',
          year:'2022',
        },
        {
          title:'Developer Frontend Angular | Wallet, Sistema fin de curso ISPC',
          text:'Desarrollador front-end utilizando Angular para una innovadora billetera virtual. Esta plataforma facilitaba las  operaciones entre cuentas.',
          color: 'blue-darken-4',
          icon: 'mdi-star',
          year:'2021',
        },
        {
          title:'Developer FullStack Laravel | Artic,Academia productora de arte',
          text:'Desarrollé un sistema web en Laravel que ofrecía un catálogo de servicios y facilitaba la adquisición de prestaciones. Optamos por utilizar MySQL para modelar e implementar la base de datos, asegurando un almacenamiento eficiente y seguro de la información. Además, asumí un papel integral en todo el proyecto, encargándome de las entrevistas con el cliente para identificar y comprender a fondo sus requerimientos. Esta participación activa en la fase inicial del proyecto fue crucial para garantizar que el sistema desarrollado cumpliera con las expectativas y necesidades de manera precisa y efectiva.',
          color: 'blue-darken-4',
          icon: 'mdi-star',
          year:'2020',
        },
          {
          title:'Developer FullStack Java | PochocloCritics',
          text:'Desarrollo web en java y bootstrap de un sistema de para recomendacion de peliculas donde el usuario puede ver un top de películas dependiendo del puntaje que obtenga en la plataforma, clasificadas por actor, director o  genero',
          color: 'blue-darken-4',
          icon: 'mdi-star',
          year:'2019',
        },
      ],
    }),
  
};
</script>


