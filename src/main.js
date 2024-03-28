import { createApp } from 'vue'
import App from '@/App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import routers from '@/routers/router'

//createApp(App).mount('#app')
// createApp(App).mount('#app')  <-- Vue 프로젝트 생성 시 존재하는 기본 코드 제거
const app = createApp(App)
app.use(routers)  // router 추가
app.mount('#app')
