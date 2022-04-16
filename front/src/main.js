import { createApp } from 'vue'
import App from './App.vue'
import Router from './router' 
import ElementPlus from 'element-plus'
import Store from './store';


const app = createApp(App)
app.use(Router)
app.use(ElementPlus)
app.use(Store)
app.mount('#app')


