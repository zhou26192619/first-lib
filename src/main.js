import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import message from './packages/message'
import store from './store/index'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(message)

const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  messages: {
    zh: {
      HelloWorld: {
        hello: '好好学习，天天向上！'
      },
      Overview: {
        title: 'good good study, day day up!'
      }
    },
    en: {
      HelloWorld: {
        hello: 'good good study, day day up!'
      },
      Overview: {
        title: 'good good study, day day up!'
      }
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
