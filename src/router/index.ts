import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { facts } from '@/assets/facts'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/fact/:id',
    name: 'Fact',
    component: () => import('../views/Fact.vue'),
    beforeEnter: (to, _, next) => {
      const { id } = to.params

      if (Array.isArray(id)) {
        next({ path: '/error' })
        return
      }

      // Is a valid index number
      const index = parseInt(id)
      if (index < 0 || index >= facts.length) {
        next({ path: '/error' })
        return
      }

      next()
    }
  },
  {
    path: '/facts',
    name: 'FactList',
    component: () => import('../views/FactList.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: () => import('../views/PageNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
