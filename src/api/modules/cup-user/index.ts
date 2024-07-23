import http from '@/http'
import type { UserVO对象, IPageUserVO对象, R, User } from './_model'

export type { UserVO对象, IPageUserVO对象, R, User }
/**
 * user-controller
 */

/**
 * 查看详情
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/detailUsingGET
 */
export function detail(params?: any, other?: any) {
  return http.request<UserVO对象>({
    url: `/cup-user/detail`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 查看详情
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/extInfoUsingGET
 */
export function ext_info(params?: any, other?: any) {
  return http.request<UserVO对象>({
    url: `/cup-user/ext/info`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 查看详情
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/infoUsingGET
 */
export function info(params?: any, other?: any) {
  return http.request<UserVO对象>({
    url: `/cup-user/info`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 列表
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/listUsingGET
 */
export function list(params?: any, other?: any) {
  return http.request<IPageUserVO对象 >({
    url: `/cup-user/list`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 列表
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/pageUsingGET
 */
export function page(params?: any, other?: any) {
  return http.request<IPageUserVO对象>({
    url: `/cup-user/page`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 新增或修改
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/submitUsingPOST
 */
export function submit(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-user/submit`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 修改
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/updateUsingPOST
 */
export function update(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-user/update`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 删除
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/removeUsingPOST
 */
export function remove(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-user/remove`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 权限设置
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/grantUsingPOST
 */
export function grant(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-user/grant`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 初始化密码
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/resetPasswordUsingPOST
 */
export function reset_password(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-user/reset-password`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 修改密码
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/updatePasswordUsingPOST
 */
export function update_password(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-user/update-password`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 修改基本信息
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/updateInfoUsingPOST
 */
export function update_info(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-user/update-info`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 用户列表
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/userListUsingGET
 */
export function user_list(params?: any, other?: any) {
  return http.request<User[]>({
    url: `/cup-user/user-list`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 导入用户
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/importUserUsingPOST
 */
export function import_user(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-user/import-user`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 导出用户
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/exportUserUsingGET
 */
export function export_user(params?: any, other?: any) {
  return http.request<any>({
    url: `/cup-user/export-user`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 导出模板
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/exportUserUsingGET_1
 */
export function export_template(params?: any, other?: any) {
  return http.request<any>({
    url: `/cup-user/export-template`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 第三方注册用户
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/registerGuestUsingPOST
 */
export function register_guest(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-user/register-guest`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 配置用户平台信息
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/updatePlatformUsingPOST
 */
export function update_platform(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-user/update-platform`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 查看平台详情
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/platformDetailUsingGET
 */
export function platform_detail(params?: any, other?: any) {
  return http.request<UserVO对象>({
    url: `/cup-user/platform-detail`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 用户列表查询
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/用户模块/user-controller/userSearchUsingGET
 */
export function search_user(params?: any, other?: any) {
  return http.request<IPageUserVO对象>({
    url: `/cup-user/search/user`,
    method: 'GET',
    params,
    ...other,
  })
}
