import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/main/Index.vue')
    },
    {
      path: '/products',
      name: 'products.index',
      component: () => import('../views/product/Index.vue')
    },
    {
      path: '/products/:id',
      name: 'products.show',
      component: () => import('../views/product/Show.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/order/OrderIndex.vue')
    },
    {
      path: '/order_confirmation',
      name: 'OrderConfirmation',
      component: () => import('../views/order/OrderConfirmation.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
