import type { RouteRecordRaw } from 'vue-router'

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
  // {
  //   path: '/:path(.*)*',
  //   component: () => import('@/layouts/exception/404/index.vue'),
  //   meta: {
  //     title: '找不到页面',
  //   },
  // },
]
