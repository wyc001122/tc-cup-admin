import http from '@/http'
import type { RoleVO对象, R, Role对象 } from './_model'

export type { RoleVO对象, R, Role对象 }
/**
 * 角色
 */

/**
 * 详情
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/角色/detailUsingGET_13
 */
export function role_detail(params?: any, other?: any) {
  return http.request<RoleVO对象>({
    url: `/cup-system/role/detail`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 列表
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/角色/listUsingGET_12
 */
export function role_list(params?: any, other?: any) {
  return http.request<RoleVO对象[]>({
    url: `/cup-system/role/list`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 树形结构
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/角色/treeUsingGET_4
 */
export function role_tree(params?: any, other?: any) {
  return http.request<RoleVO对象[]>({
    url: `/cup-system/role/tree`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 树形结构
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/角色/treeByIdUsingGET
 */
export function role_tree_by_id(params?: any, other?: any) {
  return http.request<RoleVO对象[]>({
    url: `/cup-system/role/tree-by-id`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 新增或修改
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/角色/submitUsingPOST_12
 */
export function role_submit(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/role/submit`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 删除
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/角色/removeUsingPOST_12
 */
export function role_remove(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/role/remove`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 权限设置
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/角色/grantUsingPOST
 */
export function role_grant(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/role/grant`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 下拉数据源
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/角色/selectUsingGET_3
 */
export function role_select(params?: any, other?: any) {
  return http.request<Role对象[]>({
    url: `/cup-system/role/select`,
    method: 'GET',
    params,
    ...other,
  })
}
