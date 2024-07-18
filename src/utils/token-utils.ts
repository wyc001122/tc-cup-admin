import { Base64 } from 'js-base64'
import { useStorage } from '@vueuse/core'
import type { LoginResponse } from '@/api/layout/model'

export const SESSION_KEY = 'sola_user_info'
let token_type = 'Bearer'

const userInfo = useStorage<Partial<UserInfo>>(SESSION_KEY, {}, sessionStorage)

/**
 * 用户请求头中的Authorization
 */
export const AUTHORIZATION = `Basic ${Base64.encode('saber:saber_secret')}`

/**
 * 获取`${token_type} ${access_token}`
 * @returns string
 */
export function getCupAuth() {
  return `${token_type} ${userInfo.value.access_token}`
}

/**
 * 保存cup相关token
 * @param data 传入,登录返回数据
 */
export function setCupToken(data: LoginResponse) {
  let expires = 0
  expires = data.expires_in * 1000 + new Date().getTime() // token 过期时间
  token_type = data.token_type

  // 保存到session
  userInfo.value = {
    ...data,
    // NOTE: 老项目中储存时，如下转换了key，这里兼容一下老项目的存放
    refresh_token: data.refresh_token,
    expires,
    username: data.user_name,
    realname: data.real_name,
    roles: data.role_name?.split(',') ?? [],
    userid: data.user_id,
    tenant_id: data.tenant_id,
  }
}

/**
 * 清除cup相关token
 */
export function removeCupToken() {
  token_type = 'Bearer'
  userInfo.value = {}
}

/**
 * 保存在session中的用户信息结构
 */
export interface UserInfo extends LoginResponse {
  /** 过期时间点(时间戳) */
  expires: number
  /** 用户名(同user_name),老项目也许会获取该key */
  username: string
  /** 真实姓名(同real_name),老项目也许会获取该key */
  realname: string
  /** 角色数组(由role_name字符串以,分割而来) */
  roles: string[]
  /** 用户id(同user_id),老项目也许会获取该key */
  userid: string
}
