import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/demo1',
    name: 'Three1',
    component: () => import(/* webpackChunkName: "Three1" */ '../views/Three/demo1.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
