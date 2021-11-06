import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Join from '../views/Join.vue'
import Editor from '../views/Editor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/join',
    name: 'Join',
    component: Join
  },
  {
    path: '/editor',
    name: 'Editor',
    component: Editor
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
