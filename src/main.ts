import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '@/assets/css/base.scss';
import App from './App.vue';
import router from './router';
import 'element-plus/theme-chalk/dark/css-vars.css';

import { useLogin } from '@/stores/login';

const app = createApp(App);

app.use(createPinia());
const login = useLogin();
login.getDataAsync();
app.use(router);

app.mount('#app');
