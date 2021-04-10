import Vue from 'vue'
import VueRouter from "vue-router"
import routes from "@/router/routes";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})


router.beforeEach((to, from, next) => {
  next()
})

router.beforeResolve((to, from, next) => {
  document.title = to.meta.title || '气泡星球-公会系统'
  next()
})


export default router
