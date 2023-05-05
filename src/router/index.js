import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    // DashBoard Pages
    {
      path: '/admin',
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../views/AdminProducts.vue')
        },
        {
          path: 'orders',
          component: () => import('../views/AdminOrders.vue')
        },
        {
          path: 'coupons',
          component: () => import('../views/AdminCoupons.vue')
        }
      ]
    },
    // 404頁面
    {
      path: '/:patMatch(.*)*',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
