import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/ai-tools',
      name: 'AITools',
      component: () => import('../views/AITools.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    }
  ]
})

export default router 