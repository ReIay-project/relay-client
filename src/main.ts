import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';

// Global styles
import './assets/style/tailwind.css';

const globalStore = createPinia();

createApp(App)
  .use(globalStore)
  .mount('#app');
