import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '@/view/AppHome.vue'
import About from '@/view/About.vue'
import OldAppDotVue from '@/view/OldAppDotVue.vue'

//Vue.use(VueRouter)

const routes = [
  { path: '/', component: AppHome, name: AppHome },
  { path: '/about', component: About },
  { path: '/old', component: OldAppDotVue }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
