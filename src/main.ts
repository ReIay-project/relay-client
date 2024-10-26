import { createPinia } from 'pinia';
import { router } from './router';
import { createApp } from 'vue';

import App from './App.vue';

// Global styles
import './assets/style/tailwind.css';


// Init Vue plugins
const globalStore = createPinia();


createApp(App)
  .use(globalStore)
  .use(router)
  .mount('#app');
