<template>
   <div class="card-title">
    <h1 class="nombre">{{ nombre }}</h1>
    <h2 class="profesion">{{ profesion }}</h2>
  </div>
</template>

<script>
export default {
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
  text-align: center; /* Centrar el contenido */
}

.nombre {
  font-size: 2.5rem; /* Tamaño grande para el nombre */
  margin-bottom: 5px; /* Espacio entre el nombre y la profesión */
}

.profesion {
  font-size: 1.5rem; /* Tamaño más pequeño para la profesión */
  margin-top: 0; /* Eliminar el margen superior */
  color: #666; /* Color gris para la profesión */
}
</style>
