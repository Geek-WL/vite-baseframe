import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index.js';
import { setupStore } from '@/store/index.js';

// 样式
import 'element-plus/theme-chalk/dark/css-vars.css';
import '@/styles/index.scss';

const app = createApp(App);
setupStore(app);

app.use(router).mount('#app');
