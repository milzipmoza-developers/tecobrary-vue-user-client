import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import './plugins/vueqrreader'
import App from './App.vue'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store'
import VueCookie from 'vue-cookie'

Vue.config.productionTip = false
Vue.use(VueCookie);

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
