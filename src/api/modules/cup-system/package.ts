import http from '@/http'
import type { CupPackageVO对象, IPageCupPackage对象, IPageCupPackageVO对象, R } from './_model'

export type { CupPackageVO对象, IPageCupPackage对象, IPageCupPackageVO对象, R }
/**
 * 产品包
 */

/**
 * 产品包详情（包含菜单数据）
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/产品包/detailUsingGET_2
 */
export function package_detail(params?: any, other?: any) {
  return http.request<CupPackageVO对象>({
    url: `/cup-system/package/detail`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 产品包查询
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/产品包/listUsingGET_1
 */
export function package_list(params?: any, other?: any) {
  return http.request<IPageCupPackage对象>({
    url: `/cup-system/package/list`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 产品包分页查询
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/产品包/pageUsingGET
 */
export function package_page(params?: any, other?: any) {
  return http.request<IPageCupPackageVO对象>({
    url: `/cup-system/package/page`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 新增或修改产品包
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/产品包/submitUsingPOST_1
 */
export function package_submit(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/package/submit`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 逻辑删除产品包(不支持批量)
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/产品包/removeUsingPOST_1
 */
export function package_remove(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/package/remove`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 配置产品包菜单
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/产品包/configPackageMenuUsingPUT
 */
export function put_package_configPackageMenu(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/package/configPackageMenu`,
    method: 'PUT',
    data: params,
    ...other,
  })
}

/**
 * 配置租户产品包
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/产品包/configTenantPackageUsingPOST
 */
export function package_configTenantPackage(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/package/configTenantPackage`,
    method: 'POST',
    data: params,
    ...other,
  })
}
