<template>
  <header>
    <AppHeader />

    <TabBar />
  </header>
  <div id='app'>
    <MenuBar />
    <router-view />
  </div>
</template>


<script>
import AppHeader from '@/layout/AppHeader.vue'
import TabBar from '@/layout/TabBar.vue'
import MenuBar from '@/layout/MenuBar.vue'

export default {
  name: 'App',
  components: { MenuBar, TabBar, AppHeader }
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
