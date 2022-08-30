import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/login/login.vue';
import { firstMenu } from '@/utils/map-menu';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/main/main.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/not-found/index.vue')
    }
  ]
});
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localStorage.getItem('token');
    if (!token) {
      return '/login';
    }
  }
  if (to.path === '/main') {
    if (firstMenu) {
      return firstMenu.path;
    }
  }
});

export default router;
