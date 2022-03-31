import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../components/about.vue'
import error from '../views/Error.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/Desktop',
    name: 'Desktop',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/error',
    name: 'Error',
    component: error,
    meta: {
      hideFooter: true
    }
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      hideFooter: true
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
