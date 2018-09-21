import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import message from './packages/message'
import darwin from './index'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(message)
Vue.use(darwin)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
