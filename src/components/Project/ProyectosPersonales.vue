<template>
  <v-card @click="redirectToProject" class="project-card">
    <v-img :src="project.image" alt="Project Image" class="card-img-top"></v-img>
    <v-card-text>
      <h5 class="card-title">{{ project.title }}</h5>
      <p>{{ project.link }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    redirectToProject() {
      window.open(this.project.link, '_blank');
    }
  }
}
</script>

<style scoped>

.project-card {
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s ease; 
  cursor: pointer; 
}

.project-card:hover {
  transform: translateY(-5px); 
}

.card-img-top {
  border-top-left-radius: 8px; 
  border-top-right-radius: 8px; 
  width: 100%;
  height: 200px;
  object-fit: cover; 
}

.card-title {
  font-size: 1.25rem;
  margin: 0; 
}
</style>
