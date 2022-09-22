import { createApp } from 'vue'
import App from './App.vue'
import TweetCard from './components/Tweet Card/TweetCard.vue'
import TweetForm from './components/Tweet Form/TweetForm.vue'
import Avatar from './components/Navbar/Avatar.vue'

const app = createApp(App)

app
  .component('TweetCard', TweetCard)
  .component('TweetForm', TweetForm)
  .component('Avatar', Avatar)

app.mount('#app')
