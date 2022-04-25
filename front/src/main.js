import { createApp } from 'vue'
import App from './App.vue'
import Router from './router' 
//import ElementPlus from 'element-plus'
import store from './store';


const app = createApp(App)
app.use(Router)
app.use(store)
app.mount('#app')


