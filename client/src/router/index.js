import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Economy from '../views/Economy.vue'
import Crime from '../views/Crime.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/economy',
    name: 'Economy',
    component: Economy
  },
  {
    path: '/crime',
    name: 'Crime',
    component: Crime
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
