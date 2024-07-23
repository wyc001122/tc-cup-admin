import { useStorage } from '@vueuse/core'
import useUserStore from '@/store/modules/user'
import { removeCupToken, USER_INFO_KEY, setCupToken } from '@/utils/token-utils'
import type { UserInfo } from '@/utils/token-utils'
import http from './index'
import { refreshTokenApi } from '@/api/layout/index'

const currentCount = 0
const queue: ((t: string) => any)[] = []
let isRefresh = false

export default async function refreshToken(error: any) {
  const userStore = useUserStore()
  const userInfo = useStorage<Partial<UserInfo>>(USER_INFO_KEY, {}, sessionStorage)
  const refresh_token = userInfo.value.refresh_token
  const { config } = error
  if (!refresh_token) {
    userStore.logout()
    return
  }
  if (!isRefresh) {
    isRefresh = true
    try {
      const res = await refreshTokenApi(refresh_token, userInfo.value.tenant_id)
      ElMessage.info('token刷新成功')
      setCupToken(res)
      queue.forEach(cb => cb(res.access_token))
      return http.request(error.config)
    }
    catch {
      ElMessage.error('token失效，请重新登录')
      userStore.logout()
      return Promise.reject(error)
    }
    finally {
      isRefresh = false
    }
  }
  else {
    return new Promise((resolve) => {
      // 缓存网络请求，等token刷新后直接执行
      queue.push((newToken: string) => {
        config.headers['Cup-Auth'] = newToken
        // Reflect.set(config.headers, 'Cup-Auth', newToken)
        resolve(http.request(config))
      })
    })
  }
}
