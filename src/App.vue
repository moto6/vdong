<template>
  <div id='app'>
    <AppHeader />
    <div id='content' class='content'>
      <router-view />
    </div>
  </div>

</template>


<script>
import AppHeader from '@/components/layout/AppHeader.vue'

export default {
  name: 'App',
  components: { AppHeader }
  /*components: {  <-- Vue 프로젝트 생성 시 존재하는 기본 코드 제거
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
