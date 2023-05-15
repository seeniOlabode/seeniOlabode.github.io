import { createApp } from 'vue'
import './style.css'
import App from './App.vue';

import eventBus from './plugins/event-bus';
import router from './routes';


createApp(App).use(router).use(eventBus).mount('#app')
