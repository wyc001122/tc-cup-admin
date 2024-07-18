import { createRouter, createWebHistory } from 'vue-router'
import { useNProgress } from '@vueuse/integrations/useNProgress'
import { constantRoutes } from './routes'
import useUserStore from '@/store/modules/user'
import useRouteStore from '@/store/modules/route'
import { setPageTitle } from '@/utils/page-title-util'
import { REDIRECT_PATH, WHITE_ROUTER } from '@/config/setting'

const { isLoading } = useNProgress()

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_ROUTER_BASE),
  routes: constantRoutes,
  scrollBehavior: () => {
    return { top: 0 }
  },
})

router.beforeEach(async (to) => {
  const userStore = useUserStore()
  const routeStore = useRouteStore()

  if (!to.path.includes(REDIRECT_PATH)) {
    isLoading.value = true
    setPageTitle(to.meta.title as string)
  }

  if (userStore.isLogin) {
    if (routeStore.isGenerate) {
      if (to.name === 'login') {
        return {
          path: routeStore.homePath,
          query: {
            redirect: to.fullPath,
          },
        }
      }
      else {
        return true
      }
    }
    else {
      userStore.getBtnPermissions()
      await routeStore.getRoutesByBackend()
      routeStore.registerRoutes()

      return {
        path: to.fullPath,
      }
    }
  }
  else {
    if (WHITE_ROUTER.includes(to.path)) {
      // 如果要去的页面是白名单,就放行
      return true
    }
    else {
      // 如果不是白名单，就跳转到登录页
      const query: any = {}
      if (to.path !== '/') {
        query.redirect = to.fullPath
      }
      return {
        path: '/login',
        query,
      }
    }
  }
})

router.afterEach((to) => {
  if (!to.path.includes(REDIRECT_PATH)) {
    setTimeout(() => {
      isLoading.value = false
    }, 200)
  }
})

export default router
