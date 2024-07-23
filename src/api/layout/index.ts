import http from '@/http'
import type { LoginFormData } from '@/views/login/types'
import type { LoginResponse, MenuItem, UserVO对象 } from './model'
import { eachTree } from '@/utils/common-utils'
import type { AxiosResponse } from 'axios'

const VITE_ROUTER_BASE = import.meta.env.VITE_ROUTER_BASE

/** 登录接口 */
export function loginApi(params: LoginFormData) {
  return http.request<any, LoginResponse & AxiosResponse>({
    url: '/cup-auth/oauth/token',
    method: 'post',
    params: {
      username: params.username,
      password: params.password,
      tenant_id: params.tenant_id,
      grant_type: 'password',
      scope: 'all',
      type: 'account',
    },
    headers: {
      'Captcha-Key': '',
      'Captcha-Code': params.verifyCode,
    },
  })
}

/** 无感刷新 */
export function refreshTokenApi(refresh_token: string, tenant_id: string | undefined) {
  return http.request<any, LoginResponse>({
    url: '/cup-auth/oauth/token',
    method: 'post',
    params: {
      grant_type: 'refresh_token',
      scope: 'all',
      tenant_id,
      refresh_token,
    },
  })
}

/** 获取按钮权限 */
export function getBtnPermissionsApi() {
  return http.request<MenuItem[]>({
    url: '/cup-system/menu/buttons',
    method: 'get',
  })
}

/** 获取路由数据 */
export function getRoutesByBackendApi() {
  return new Promise<AxiosResponse<MenuItem[], any>>((resolve) => {
    return http.request<MenuItem[]>({
      url: '/cup-system/menu/routes',
      method: 'get',
    }).then((res) => {
      eachTree(res.data, (item: any) => {
        if (item.alias === 'sys') {
          item.path = VITE_ROUTER_BASE + item.path.slice(1)
        }
      })
      resolve(res)
    })
  })
}
export function getUserInfoApi(params?: any, other?: any) {
  return http.request<UserVO对象>({
    url: `/cup-user/detail`,
    method: 'GET',
    params,
    ...other,
  })
}

// TODO:wyc 暂时接口没有返回值,待修复
// export function getTenantInfoApi(params?: any, other?: any) {
//   return http.request<UserVO对象>({
//     url: `/cup-system/tenant/info`,
//     method: 'GET',
//     params,
//     ...other,
//   })
// }
export function getTenantInfoApi(params?: any, other?: any) {
  return http.request<UserVO对象>({
    url: `/cup-system/tenant/list`,
    method: 'GET',
    params,
    ...other,
  })
}
