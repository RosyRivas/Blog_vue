import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Importa las funciones necesarias de vue-router
import vuetify from './plugins/vuetify'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: App },
    // Aquí puedes definir más rutas si es necesario
  ]
});

createApp(App)
.use(vuetify)
  .use(router)
  .mount('#app');
