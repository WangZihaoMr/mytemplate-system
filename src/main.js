import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 挂载全局elementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 页面鉴权
import './permission'

const app = createApp(App)
app.use(ElementPlus).use(store).use(router).mount('#app')
