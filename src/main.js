import { createApp } from 'vue'
import App from './App.vue'
import Avatar from './components/Navbar/Avatar.vue'

const app = createApp(App)

app
  .component('Avatar', Avatar)

app.mount('#app')