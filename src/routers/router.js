import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '@/view/AppHome.vue'
import About from '@/view/About.vue'
import OldAppDotVue from '@/view/OldAppDotVue.vue'
import HelloWorld from '@/view/HelloWorld.vue'
import TestComponent from '@/view/TestComponent.vue'
import LifeCycle from '@/view/LifeCycle.vue'
import JoinMember from '@/view/JoinMember.vue'
import AppLogin from '@/view/AppLogin.vue'
import SubCompDisplay from '@/subcomp/SubcompDisplay.vue'

//Vue.use(VueRouter)

const routes = [
  { path: '/', component: AppHome, name: AppHome },
  { path: '/about', component: About },
  { path: '/old', component: OldAppDotVue },
  { path: '/helloWorld', component: HelloWorld },
  { path: '/test', component: TestComponent },
  { path: '/life', component: LifeCycle },
  { path: '/join', component: JoinMember },
  { path: '/login', component: AppLogin },
  { path: '/subComp', component: SubCompDisplay }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
