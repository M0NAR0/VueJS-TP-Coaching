import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import EspaceMembre from '@/views/EspaceMembre'
import EspaceCoach from '@/views/EspaceCoach'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/coach',
    name: 'EspaceCoach',
    component: EspaceCoach
  },
  {
    path: '/membre',
    name: 'EspaceMembre',
    component: EspaceMembre
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
