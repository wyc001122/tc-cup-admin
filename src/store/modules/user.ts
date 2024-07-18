import { useStorage } from '@vueuse/core'
import type { UserInfo } from '@/utils/token-utils'
import { SESSION_KEY, removeCupToken } from '@/utils/token-utils'
import { getBtnPermissionsApi } from '@/api/layout/index'
import useRouteStore from '@/store/modules/route'

const useUserStore = defineStore(
  'user',
  () => {
    const routeStore = useRouteStore()
    const route = useRoute()
    const router = useRouter()
    const userInfo = useStorage<Partial<UserInfo>>(SESSION_KEY, {}, sessionStorage)

    const isLogin = computed(() => userInfo.value.access_token)

    const permissions: any = ref({})

    function getBtnPermissions() {
      getBtnPermissionsApi().then((res) => {
        if (res.code === 200) {
          const _map: any = {}
          res.data.forEach((page: any) => {
            page.children?.forEach((btn: any) => {
              _map[btn.code] = true
            })
          })
          permissions.value = _map
        }
      })
    }

    function logout() {
      // // 方案1: 重定向到登录页，简单粗暴，但是需要重新加载资源
      // const VITE_ROUTER_BASE = import.meta.env.VITE_ROUTER_BASE
      // location.replace(`${VITE_ROUTER_BASE}login?redirect=${route.fullPath}`)

      // 方案2：手动清除token、router，去login页
      removeCupToken()
      permissions.value = {}
      routeStore.removeRoutes()
      router.replace({
        path: '/login',
      })
    }
    return {
      userInfo,
      /** 是否已登录 */
      isLogin,
      /** 按钮权限{ [key] : true } */
      permissions,
      /** 获取用户按钮权限 */
      getBtnPermissions,
      /** 登出 */
      logout,
    }
  },
)

export default useUserStore
