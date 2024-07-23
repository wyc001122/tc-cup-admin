import { useStorage } from '@vueuse/core'
import type { UserInfo } from '@/utils/token-utils'
import { USER_INFO_KEY, TENANT_INFO_KEY, removeCupToken } from '@/utils/token-utils'
import { getBtnPermissionsApi, getUserInfoApi, getTenantInfoApi } from '@/api/layout/index'
import useRouteStore from '@/store/modules/route'
import type { UserVO对象 } from '@/api/layout/model'

const useUserStore = defineStore(
  'user',
  () => {
    const routeStore = useRouteStore()
    const route = useRoute()
    const router = useRouter()
    const userInfo = useStorage<Partial<UserInfo & UserVO对象>>(USER_INFO_KEY, {}, sessionStorage)
    const tenantInfo = useStorage<any>(TENANT_INFO_KEY, {}, sessionStorage)

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

    function getUserInfo() {
      getUserInfoApi({ id: userInfo.value.user_id }).then((res) => {
        if (res.code === 200) {
          userInfo.value = {
            ...userInfo.value,
            ...res.data,
          }
        }
      })
      getTenantInfoApi({ tenantId: userInfo.value.tenant_id }).then((res: any) => {
        if (res.code === 200 && res.data?.records) {
          const _data = res.data.records[0]
          tenantInfo.value = {
            ...tenantInfo.value,
            ..._data,
          }
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
        query: {
          redirect: route.fullPath,
        },
      })
    }
    return {
      /** 用户信息 */
      userInfo,
      /** 租户信息 */
      tenantInfo,
      /** 是否已登录 */
      isLogin,
      /** 按钮权限{ [key] : true } */
      permissions,
      /** 获取用户按钮权限 */
      getBtnPermissions,
      /** 获取用户信息 */
      getUserInfo,
      /** 登出 */
      logout,
    }
  },
)

export default useUserStore
