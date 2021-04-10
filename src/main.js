import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import store from "@/store"

import '@/vueConfig'

import '@/style/main.scss'

Vue.prototype.$ = require('lodash')

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#page')
