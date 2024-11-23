import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Make sure this is correctly imported

createApp(App)
  .use(router) // Register the router with the Vue instance
  .mount('#app');
