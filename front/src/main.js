import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
import Router from './router' 
import store from './store';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://liaxum.fr/encrenous/"

const app = createApp(App)
app.use(Router)
app.use(store)

app.mount('#app')


