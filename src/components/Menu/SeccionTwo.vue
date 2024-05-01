<template>
  <div class="menu" >
    <button v-for="(seccion, index) in secciones"
            :key="index"
            @click="cambiarSeccion(index)"
            :class="{ active: seccionActiva === index }">
      {{ seccion }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    secciones: Array,
    seccionActiva: Number,
    cambiarSeccion: Function
  }
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu button {
  padding: 10px 20px;
  margin: 0 10px;
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
  color: #333;
  font-size: 16px;
  transition: all 0.3s ease;
}

.menu button.active {
  background-color: #0056b3;
  border-color: #0056b3;
  color: #fff;
}
</style>
