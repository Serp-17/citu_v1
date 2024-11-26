import { createRouter, createWebHistory } from 'vue-router'
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  PROJECTS_ROUTE,
  TEAME_ROUTE
} from '@/units/const'
import Home from '@/views/HomeView.vue'
import { useUserStore } from '@/stores/useUserStore'

const routes = [
  {
    meta: {
      title: 'Home'
    },
    path: HOME_ROUTE,
    name: 'home',
    component: Home
  },
  {
    meta: {
      title: 'Login'
    },
    path: LOGIN_ROUTE,
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    meta: {
      title: 'Projects'
    },
    path: PROJECTS_ROUTE,
    name: 'projects',
    component: () => import('@/views/Citu/Projects/index.vue')
  },
  {
    meta: {
      title: 'Teame',
      requiresAuth: true
    },
    path: TEAME_ROUTE,
    name: 'teame',
    component: () => import('@/views/Citu/Teame/index.vue')
  },
  {
    meta: {
      title: 'Teame',
      requiresAuth: true
    },
    path: TEAME_ROUTE,
    name: 'teame',
    component: () => import('@/views/Citu/Teame/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  console.log(userStore.isAuth)

  if (to.meta.requiresAuth && !userStore.isAuth) {
    next("/login");
  } else {
    next();
  }
});

export default router
