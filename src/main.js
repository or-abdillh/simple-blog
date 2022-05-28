import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import './style/index.css'
import './style/app.css'

createApp(App)
  .use( router )
  .mount('#app')
