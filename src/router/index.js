import { createWebHistory, createRouter } from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router