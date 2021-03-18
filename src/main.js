import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
createApp(App).use(store).use(router).mount('#app')
