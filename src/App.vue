<template>
  <div id='app'>
      <AppHeader/>
      <TabBar/>
      <router-view />
      <AppFooter />
  </div>
</template>




<script>
import TabBar from '@/layout/TabBar.vue'
import AppFooter from '@/layout/AppFooter.vue'
import AppHeader from '@/layout/AppHeader.vue'

export default {
  name: 'App',
  components: { AppHeader, AppFooter, TabBar }
  /*layout: {  <-- Vue 프로젝트 생성 시 존재하는 기본 코드 제거
    HelloWorld
  }*/
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
