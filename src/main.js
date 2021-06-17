import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Conect from './views/Conect.vue'
import Sample from './views/Sample.vue'
import SampleList from './views/SampleList.vue'
import ProductDemo from './views/ProductDemo.vue'
import './index.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/About', component: About },
    { path: '/Conect', component: Conect },
    { path: '/Sample', component: Sample },
    { path: '/SampleList', component: SampleList },
    { path: '/ProductDemo', component: ProductDemo },
  ],
})

createApp(App).use(router).mount('#app')
