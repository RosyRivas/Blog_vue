<template>
  <div class="card-title">
    <h1 class="nombre">{{ nombre }}</h1>
    <h2 class="profesion">{{ profesion }}</h2>
    <button @click="descargarCV">Descargar CV</button>
  </div>
</template>

<script>
export default {
  props: {
    nombre: String,
    profesion: String
  },
  methods: {
    descargarCV() {
      // URL de tu archivo PDF
      const url = require('@/assets/Rosa-Developer.pdf');

      // Descargar el PDF utilizando un enlace temporal
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Rosa-Developer.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
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

button {
  margin-top: 20px; /* Espacio entre la profesión y el botón */
  background-color: #007bff; /* Color azul para el botón */
  color: #fff; /* Color blanco para el texto del botón */
  border: none; /* Eliminar el borde del botón */
  padding: 10px 20px; /* Padding interior del botón */
  border-radius: 5px; /* Bordes redondeados del botón */
  cursor: pointer; /* Cursor de puntero al pasar sobre el botón */
}

button:hover {
  background-color: #0056b3; /* Cambiar color al pasar sobre el botón */
}

</style>
