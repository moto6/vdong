import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '@/view/AppHome.vue'
import About from '@/view/About.vue'
import OldAppDotVue from '@/view/OldAppDotVue.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import TestComponent from '@/components/TestComponent.vue'
import LifeCycle from '@/components/LifeCycle.vue'

//Vue.use(VueRouter)

const routes = [
  { path: '/', component: AppHome, name: AppHome },
  { path: '/about', component: About },
  { path: '/old', component: OldAppDotVue },
  { path: '/helloWorld', component: HelloWorld },
  { path: '/test', component: TestComponent },
  { path: '/life', component: LifeCycle }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
