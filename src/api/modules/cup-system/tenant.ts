import http from '@/http'
import type { Param对象, Tenant对象, IPageParam对象, IPageTenant对象, R, Kv } from './_model'

export type { Param对象, Tenant对象, IPageParam对象, IPageTenant对象, R, Kv }
/**
 * 接口
 */

/**
 * 详情
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/接口/detailUsingGET_10
 */
export function param_detail(params?: any, other?: any) {
  return http.request<Param对象>({
    url: `/cup-system/param/detail`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 详情
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/接口/detailUsingGET_14
 */
export function tenant_detail(params?: any, other?: any) {
  return http.request<Tenant对象>({
    url: `/cup-system/tenant/detail`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 分页
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/接口/listUsingGET_9
 */
export function param_list(params?: any, other?: any) {
  return http.request<IPageParam对象>({
    url: `/cup-system/param/list`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 分页
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/接口/listUsingGET_13
 */
export function tenant_list(params?: any, other?: any) {
  return http.request<IPageTenant对象>({
    url: `/cup-system/tenant/list`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 新增或修改
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/接口/submitUsingPOST_9
 */
export function param_submit(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/param/submit`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 下拉数据源
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/接口/selectUsingGET_4
 */
export function tenant_select(params?: any, other?: any) {
  return http.request<Tenant对象[]>({
    url: `/cup-system/tenant/select`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 逻辑删除
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/接口/removeUsingPOST_9
 */
export function param_remove(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/param/remove`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 分页
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/接口/pageUsingGET_4
 */
export function tenant_page(params?: any, other?: any) {
  return http.request<IPageTenant对象>({
    url: `/cup-system/tenant/page`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 新增或修改
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/接口/submitUsingPOST_13
 */
export function tenant_submit(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/tenant/submit`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 逻辑删除
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/接口/removeUsingPOST_13
 */
export function tenant_remove(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/tenant/remove`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 授权配置
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/接口/settingUsingPOST
 */
export function tenant_setting(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/tenant/setting`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 数据源配置
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/接口/datasourceUsingPOST
 */
export function tenant_datasource(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/tenant/datasource`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 详情
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/接口/findByNameUsingGET
 */
export function tenant_find_by_name(params?: any, other?: any) {
  return http.request<Tenant对象[]>({
    url: `/cup-system/tenant/find-by-name`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 配置信息
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/接口/infoUsingGET
 */
export function tenant_info(params?: any, other?: any) {
  return http.request<Kv>({
    url: `/cup-system/tenant/info`,
    method: 'GET',
    params,
    ...other,
  })
}
