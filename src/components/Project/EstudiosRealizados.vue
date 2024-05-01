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
          title:'Product Owner con metodologias agiles',
          text:'UTN Buenos Aires',
          color: 'blue-darken-4',
          icon: 'mdi-star',
          year:'2023',
        },
          {
          title:'Testing QA',
          text:'Codo a Codo 4.0',
          color: 'blue-darken-4',
          icon: 'mdi-star',
          year:'2022',
        },
        {
          title:'Data y Analytics nivel ll',
          text:'Datalytic-Silicon Misiones',
          color: 'blue-darken-4',
          icon: 'mdi-star',
          year:'2022',
        },
        {
          title:'Desarrollo FullStack con Java y Spring Boot',
          text:'Egg Cooperation',
          color: 'blue-darken-4',
          icon: 'mdi-star',
          year:'2021-2022',
        },
        {
          title:'Desarrollo FullStack con Java y Angular',
          text:'ISPC Instituto superior politecnico Cordoba',
          color: 'blue-darken-4',
          icon: 'mdi-star',
          year:'2021',
        },
        {
          title:'Introduccion a realizacion audiovisual',
          text:'Polo TIC Misiones',
          color:'blue-darken-4',
          icon: 'mdi-star',
          year:'2018',
        },
        {
          title:'Licenciatura en sistemas de informacion',
          text:'Universidad Nacional de Misiones',
          color: 'blue-darken-4',
          icon: 'mdi-star',
          year:'2015',
        },
          {
          title:'Analista en sistemas de computacion',
          text:'Universidad Nacional de Misiones',
          color: 'blue-darken-4',
          icon: 'mdi-star',
          year:'2015',
        },
      ],
    }),
  
};
</script>


